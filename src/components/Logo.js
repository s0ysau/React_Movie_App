import { useNavigate } from "react-router-dom"

export default function Logo () {
  let navigate = useNavigate();

  return (
    <>
      <button
      onClick={() => navigate(-1)}
      className="bg-transparent border-0 shadow-none">
        <img src={process.env.PUBLIC_URL + 'images/movie_icon.png'} alt="movie_app_icon" className="w-10 h-10"/>
      </button>
    </>
  )
}