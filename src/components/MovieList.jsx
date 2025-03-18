import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies)
    const dispatch = useDispatch();
    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
    }
    console.log(movies);

    return (
        <div>
            <h2>Movie List</h2>
            {movies.map((movie) => (
                <div key={movie.id}>{movie.name}
                    <button onClick={() => handleRemoveMovie(movie.id)}>Delete Movie</button>
                </div>
            ))}
        </div>
    );
}