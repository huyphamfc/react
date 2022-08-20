import { useState } from 'react';

import MoviesList from './components/MovieList';
import './App.css';


function App() {
    const [movies, setMovies] = useState([]);

    async function fetchMovieHandler() {
        const res = await fetch('https://swapi.dev/api/films');
        const data = await res.json();

        const processedData = data.results.map(obj => ({
            id: obj.episode_id,
            title: obj.title,
            releaseDate: obj.release_date,
            openingText: obj.opening_crawl
        }));
        setMovies(processedData);
    }

    return (<>
        <section>
            <button onClick={fetchMovieHandler}>
                Fetch Movies
            </button>
        </section>
        <section>
            <MoviesList movies={movies} />
        </section>
    </>);
}

export default App;