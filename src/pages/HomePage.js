import { useState } from "react";
import LandingDisplay from '../components/LandingDisplay'


export default function HomePage () {

    // const [movie, setMovie] = useState(null);
    // const [errorMessage, setErrorMessage] = useState("");
  
    // const getMovie = async (searchTerm) => {
    //   try {
    //     const response = await fetch(
    //       `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    //     );
    //     const data = await response.json();
    //     setMovie(data);
    //   } catch (err) {
    //     console.error(err);
    //     setErrorMessage(err.message);
    //   }
    // };
  
    
    return (
      <div>
        {/* <Form movieSearch={getMovie}/>
        <div>{errorMessage ? `Error:${errorMessage}` : ""}</div> */}
        {/* {
          movie ? <MovieDisplay movie={movie} /> : <LandingDisplay />
        } */}
        <LandingDisplay />
      </div>
    );
}
  