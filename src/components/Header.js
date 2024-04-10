// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { getMovie } from "../utilities/ombd-api"
// import React from "react";
// import Form from "./Form";
// import Logo from "./Logo";


// export default function Header(props) {
//   const apiKey = "cbc3f5a1";
//   const [movie, setMovie] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");


//   const getMovie = async (searchTerm) => {
//     try {
//       const response = await fetch(
//         `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
//       );
//       const data = await response.json();
//       setMovie(data);
//       props.func(movie)
//     } catch (err) {
//       console.error(err);
//       setErrorMessage(err.message);
//     }
//   };


//   return (
//     <section className="flex justify-center p-2 bg-black">
//         <Logo/>
//         <Form movieSearch={getMovie} />
//         <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
//         {/* <section className="flex">
//           <p className="text-white">Sign In</p> 
//           <p className="text-white">Log In</p>
//         </section> */}
//     </section>
//   )
// }