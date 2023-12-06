import { useNavigate } from "react-router-dom"

export default function BackBtn () {
  let navigate = useNavigate()
  return (
    <>
      <button
      onClick={() => navigate(-1)}
      >Back
        </button>
    </>
  )
}