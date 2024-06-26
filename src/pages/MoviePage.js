import LandingDisplay from './LandingDisplay'

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function MoviePage ({ movie }) {
  // The component must return some JSX

  return (
    <>
      {movie && movie.Title
        ? (
          <>
            <div className=' mt-5 items-center'>
              <h1 className='text-3xl text-center font-bold pb-3'>{movie.Title}</h1>
              <section className='flex justify-center space-x-3 pb-2'>
                <p>{movie.Year}</p>
                <p>{movie.Rated}</p>
                <p>{movie.Runtime}</p>
              </section>
              <section className='flex'>
                <img src={movie.Poster} alt={movie.Title} className='basis-5 p-5' />
                <section className='flex flex-col items-start pr-5 rounded-lg '>
                  <p className='order-1 pt-5'>{movie.Genre}</p>
                  <p className='order-2 text-left py-5'>{movie.Plot}</p>
                  <h3 className='order-3'><span className='font-bold'>Director</span> {movie.Director}</h3>
                  <h3 className='order-4'><span className='font-bold'>Writer</span> {movie.Writer}</h3>
                  <h3 className='order-5 text-left'><span className='font-bold'>Stars</span> {movie.Actors}</h3>
                </section>
              </section>
            </div>
          </>
          )
        : (
          <LandingDisplay />
          )}
    </>
  )
}
