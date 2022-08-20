import Movie from './Movie';
import classes from './MovieList.module.css';

function MovieList({ movies }) {
    return (
        <ul className={classes['movies-list']}>
            {movies.map(
                ({
                    id,
                    title,
                    releaseDate,
                    openingText
                }) =>
                    <Movie
                        key={id}
                        title={title}
                        releaseDate={releaseDate}
                        openingText={openingText}
                    />
            )}
        </ul>
    );
};

export default MovieList;