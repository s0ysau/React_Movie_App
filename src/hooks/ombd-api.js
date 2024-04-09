// import { useContext } from "react";
// import { StateContext } from "../context/stateContext";

// const GetMovie = async (searchTerm) => {
//   const apiKey = process.env.REACT_APP_OMDB_API_KEY;
// const {movie, setMovie, errorMessage, setErrorMessage} = useContext(StateContext);
// const [movie, setMovie] = useState(null);
// const [errorMessage, setErrorMessage] = useState("");

// const axios = require("axios");

// try {
//   const response = await fetch(
//     `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
//   );
//   const data = await response.json();
//   return data;
// } catch (err) {
//   console.error(err);
//   return err.message;
// }


// axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
// .then((response) => {
//   const data = response.json();
//   setMovie(data)
// })
// .catch((error) => {
//   console.error(err);
//   setErrorMessage(err.message);
// })
// }

// export default GetMovie;

