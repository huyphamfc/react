import { useState, useEffect } from 'react';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MovieList';
import './App.css';


function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieHandler();
    }, []);

    let content = <p>Not found.</p>;
    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (loading) {
        content = <p>Loading...</p>;
    }

    async function fetchMovieHandler() {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('https://swapi.dev/api/films');

            if (!res.ok) throw new Error('Something went wrong!');

            const data = await res.json();

            const processedData = data.results.map(obj => ({
                id: obj.episode_id,
                title: obj.title,
                releaseDate: obj.release_date,
                openingText: obj.opening_crawl
            }));

            setMovies(processedData);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    }

    const addMovieHandler = movie => {
        console.log(movie);
    }

    return (<>
        <section>
            <AddMovie onAddMovie={addMovieHandler} />
        </section>
        <section>
            <button onClick={fetchMovieHandler}>
                Fetch Movies
            </button>
        </section>
        <section>{content}</section>
    </>);
}

export default App;