import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import "./styles.css";
import MoviePage from './pages/MoviePage';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Form from './components/Form';


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
    <>
      <section className="flex justify-center p-2 bg-black">
        <Logo/>
        <Form movieSearch={getMovie} />
      </section>
      <Routes>
        <Route path='/' element={<MoviePage movie={movie}/>}/>
      </Routes>
      <Footer />
    </>
  )
}