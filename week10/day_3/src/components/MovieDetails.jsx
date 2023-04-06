import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch dei dettagli del film dall'API di OMDB
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=f6820bf5&i=${movieId}`
        );
        if (response.ok) {
          const movieData = await response.json();
          setMovieDetails(movieData);
        } else {
          console.log(
            "ERROR: Something went wrong in the API-call for the movie details"
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <p>{movieDetails.Plot}</p>
      <h2>Comments</h2>
    </div>
  );
};

export default MovieDetails;
