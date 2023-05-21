import LandingPg from "./LandingPg"


export default function Logo () {

  return (
    <>
      <button 
      onClick={() => window.location.href=<LandingPg/>}
      className="bg-transparent border-0 shadow-none">
        <img src={process.env.PUBLIC_URL + 'images/movie_icon.png'} alt="movie_app_icon" className="w-10 h-10"/>
      </button>
    </>
  )
}