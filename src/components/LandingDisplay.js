
export default function LandingDisplay () {
  
  return (
    <section>
      <div className="flex flex-col justify-center">
        <img 
        src={process.env.PUBLIC_URL + 'images/cimena_green_screen.png'} 
        alt="cinema_pic"
        className="2xl:h-[1280px] 2xl:w-[3240px] flex place-self-center bg-black"
        />
      </div>
    </section>
  )
}
