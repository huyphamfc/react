import { useState } from 'react';

import MoviesList from './components/MovieList';
import './App.css';


function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    let content;
    if (loading) {
        content = <p>Loading...</p>;
    } else if (!loading && movies.length === 0) {
        content = <p>Not found.</p>
    } else {
        content = <MoviesList movies={movies} />
    }

    async function fetchMovieHandler() {
        setLoading(true);
        const res = await fetch('https://swapi.dev/api/films');
        const data = await res.json();
        const processedData = data.results.map(obj => ({
            id: obj.episode_id,
            title: obj.title,
            releaseDate: obj.release_date,
            openingText: obj.opening_crawl
        }));
        setLoading(false);
        setMovies(processedData);
    }

    return (<>
        <section>
            <button onClick={fetchMovieHandler}>
                Fetch Movies
            </button>
        </section>
        <section>
            {content}
        </section>
    </>);
}

export default App;