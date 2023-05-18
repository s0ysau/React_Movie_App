
export default function Logo () {
  return (
    <>
      <img src={process.env.PUBLIC_URL + 'images/movie_icon.png'} alt="movie_app_icon" className="w-10 h-10"/>
    </>
  )
}