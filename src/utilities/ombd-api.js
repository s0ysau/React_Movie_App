
import { useState } from "react";

export default async function getMovie (searchTerm) {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;
  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
    props.func(movie)
  } catch (err) {
    console.error(err);
    setErrorMessage(err.message);
  }

  return {movie, errorMessage}
}

