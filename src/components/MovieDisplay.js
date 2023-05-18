// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay({movie}) {
  //The component must return some JSX
  // const ratings = movie.Ratings
  return (
    <>
      {movie && movie.Title ? (
        <>
          <div className='flex justify-center mt-10 items-center'>
            <h2 className="text-3xl font-bold underline">{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.Rated}</p>
            <p>{movie.Runtime}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Genre}</p>
            <p>{movie.Plot}</p>
            <h3>Director {movie.Director}</h3>
            <h3>Writer {movie.Writer}</h3>
            <h3>Stars {movie.Actors}</h3>
          </div>
          {/* <div>
            {
              ratings ? (
                <ul>
                  {
                    ratings.map((rating) => {
                      return (
                        <>
                          <p>{rating.Source}: {rating.Value} </p>
                        </>  
                      )
                    })
                  }
                </ul>
              ) : <p>No Ratings</p>
            }
          </div> */}
        </>
      ) : (
        <h1>No Movie to display</h1>
      )}
    </>
  );
}