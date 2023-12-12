import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import { StateContextProvider } from './context/stateContext';
import "./styles.css";
import getMovie from "./utilities/ombd-api"
import MoviePage from './pages/MoviePage';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Form from './components/Form';
import Header from './components/Header';
import LandingDisplay from './pages/LandingDisplay';


export default function App() {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY
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
    getMovie()
  }, [])  


    return (
    <StateContextProvider>
      <section className="flex justify-center p-2 bg-black">
        <Logo/>
        <Form movieSearch={getMovie} />
        {/* <Header /> */}
      </section>
      <Routes>
        <Route path='/' element={<LandingDisplay />} />
        <Route path='/:params' element={<MoviePage movie={movie}/>}/>
        {/* <Route path='/' element={<MoviePage movie={movie}/>} /> */}
      </Routes>
      <Footer />
    </StateContextProvider>
  )
}