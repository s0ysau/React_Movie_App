import { useContext } from 'react'
import { StateContext } from '../context/stateContext'

export default async function GetMovie (searchTerm) {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY
  const { movie, setMovie, errorMessage, setErrorMessage } = useContext(StateContext)
  // const [movie, setMovie] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");

  const axios = require('axios')

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    const data = await response.json()
    setMovie(data)
  } catch (err) {
    console.error(err)
    setErrorMessage(err.message)
  }

  // axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  // .then((response) => {
  //   const data = response.json();
  //   setMovie(data)
  // })
  // .catch((error) => {
  //   console.error(err);
  //   setErrorMessage(err.message);
  // })

  return { movie, errorMessage }
}
