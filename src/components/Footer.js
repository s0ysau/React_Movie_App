
export default function Footer () {

  return (
    <div className="flex flex-col justify-center p-2 bg-black text-white">
      <section>
        <h1>Social Media icons</h1>
      </section>
      <section className="flex flex-row justify-center">
        <p>Home &nbsp;</p>
        <p>About &nbsp;</p>
        <a href="https://jerricklc.herokuapp.com/">Contact &nbsp;</a>
        <p>Something &nbsp;</p>
      </section>
      <section>
        <p>A something company</p>
      </section>
      <section>
        <p>© 2023 By Jerrick Lloyd C</p>
      </section>
    </div>
  )
}