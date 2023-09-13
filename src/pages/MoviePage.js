import MovieDisplay from "../components/MovieDisplay";

export default function MoviePage ({movie}) {
  return (
    <div>
      <MovieDisplay movie={movie} />
    </div>
  )
}