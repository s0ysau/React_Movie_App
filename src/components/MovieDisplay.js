// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MovieDisplay({movie}) {
  //The component must return some JSX
  // const ratings = movie.Ratings
  return (
    <>
      {movie && movie.Title ? (
        <>
          <div className=' mt-10 items-center'>
            <h2 className="text-3xl font-bold">{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.Rated}</p>
            <p>{movie.Runtime}</p>
            <section className="">
            <img src={movie.Poster} alt={movie.Title} className="justify-center "/>
              <p className="order-1">{movie.Genre}</p>
              <p className="order-2">{movie.Plot}</p>
              <h3 className="order-3"><span className="font-bold">Director</span> {movie.Director}</h3>
              <h3 className="order-4"><span className="font-bold">Writer</span> {movie.Writer}</h3>
              <h3 className="order-5"><span className="font-bold">Stars</span> {movie.Actors}</h3>
            </section>
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