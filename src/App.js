import { useState, useEffect } from "react";
import "./styles.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
// import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LandingPg from "./components/LandingPg";

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

  useEffect(() => {
    <LandingPg />;
  }, []);
  

  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      {
        movie ? <MovieDisplay movie={movie} /> : <LandingPg />
      }
      {/* // <MovieDisplay movie={movie} /> */}
      {/* <Main movie={movie} /> */}
      <Footer />
    </div>
  );
}