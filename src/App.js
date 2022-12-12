import { useState, useEffect } from "react";
import "./styles.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "cbc3f5a1";
  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <MovieDisplay movie={movie} />
    </div>
  );
}