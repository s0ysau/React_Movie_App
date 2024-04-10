
export default function Logo ({ setMovie }) {
  const backToLandingPg = () => {
    setMovie(null)
  }

  return (
    <button
      onClick={backToLandingPg}
      className='bg-transparent border-0 shadow-none'
    >
      <img src={process.env.PUBLIC_URL + 'images/movie_icon.png'} alt='movie_app_icon' className='w-10 h-10' />
    </button>
  )
}
