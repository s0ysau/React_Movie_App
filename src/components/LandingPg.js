
export default function LandingPg () {
  
  return (
    <section>
      <div className="flex flex-col justify-center">
        <img 
        src={process.env.PUBLIC_URL + 'images/cimena_green_screen.png'} 
        alt="cinema_pic"
        className="max-h-full"
        />
      </div>
    </section>
  )
}
