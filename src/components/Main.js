import { Routes, Route } from 'react-router-dom'
import LandingPg from './LandingPg'
import MovieDisplay from './MovieDisplay'

export default function Main ({movie}) {
  
  return (
    <div className="flex flex-col justify-center">
      <Routes>
        <Route path='/' element={<LandingPg/>}/>
        <Route path='/' element={<MovieDisplay movie={movie} />} />
      </Routes>
    </div>
  )
}