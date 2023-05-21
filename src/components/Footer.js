import LandingPg from "./LandingPg"


export default function Footer () {

  return (
    <div className="flex flex-col justify-center p-2 bg-black text-white sticky bottom-0">
      {/* <section>
        <h1>Social Media icons</h1>
      </section> */}
      <section className="flex flex-row justify-center">
        <a href={<LandingPg/>} >Home &nbsp;</a>
        <a href='https://github.com/s0ysau/React_Movie_App#readme'>About &nbsp;</a>
        <a href="https://jerricklc.herokuapp.com/">Contact &nbsp;</a>
      </section>
      {/* <section>
        <p>A something company</p>
      </section> */}
      <section>
        <p>© 2023 By Jerrick Lloyd C</p>
      </section>
    </div>
  )
}