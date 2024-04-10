import { useState } from 'react'
import './styles.css'
import MoviePage from './pages/MoviePage'
import Footer from './components/Footer'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import LandingDisplay from './pages/LandingDisplay'

export default function App () {
  const [movie, setMovie] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div className='App'>
      <section className='flex justify-center p-2 bg-black'>
        <Logo setMovie={setMovie} />
        <SearchBar setMovie={setMovie} />
      </section>
      <div>{errorMessage ? `Error:${errorMessage}` : ''}</div>
      {
        movie != null ? <MoviePage movie={movie} /> : <LandingDisplay />
      }
      <Footer />
    </div>
  )
}
