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
            const res = await fetch('https://movie-app-huypham-default-rtdb.firebaseio.com/movies.json');

            if (!res.ok) throw new Error('Something went wrong!');

            const data = await res.json();

            const processedData = [];
            for (const key in data) {
                processedData.push({
                    id: key,
                    title: data[key].title,
                    releaseDate: data[key].releaseDate,
                    openingText: data[key].openingText
                });
            }

            processedData.map(obj => ({
                id: obj.id,
                title: obj.title,
                releaseDate: obj.releaseDate,
                openingText: obj.openingText
            }));

            setMovies(processedData);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    }

    async function addMovieHandler(movie) {
        await fetch(
            'https://movie-app-huypham-default-rtdb.firebaseio.com/movies.json',
            {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: { 'Content-Type': 'application/json' }
            }
        );
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