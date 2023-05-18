import { useState, useEffect } from "react";
import "./styles.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import Header from "./components/Header";

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

  // useEffect(() => {
  //   getMovie("Clueless");
  // }, []);

  console.log(movie)

  return (
    <div className="App">
      {/* <Form movieSearch={getMovie} /> */}
      <Header getMovie={getMovie}/>
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <MovieDisplay movie={movie} />
    </div>
  );
}