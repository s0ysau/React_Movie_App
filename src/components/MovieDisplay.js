// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay({movie}) {
  //The component must return some JSX
  return (
    <>
      {movie && movie.Title ? (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Box Office = {movie.BoxOffice}</p>
        </div>
      ) : (
        <h1>No Movie to display</h1>
      )}
    </>
  );
}