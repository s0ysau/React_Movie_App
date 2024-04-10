// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from 'react'

export default function SearchBar ({ setMovie }) {
  // The component must return some JSX
  const apiKey = process.env.REACT_APP_OMDB_API_KEY
  const [searchTerm, setSearchTerm] = useState('')

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      )
      const data = await response.json()
      setMovie(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  const handleChange = (evt) => {
    setSearchTerm(evt.target.value)
  }

  return (
    <div className='flex justify-center p-2 bg-black'>
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          getMovie(searchTerm)
        }}
        className='pl-5 pt-1'
      >
        <input
          type='text'
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search MovieApp'
          className='2xl:w-[600px] xl:w-[500px] lg:w-[350px] md:w-[200px] sm:w-[100px] box-border h-7 placeholder:italic placeholder:text-slate-400 bg-white border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 '
        />
        <input
          type='submit'
          value='Search'
          className='bg-blue-700 text-white p-1 rounded mx-3 hover:bg-blue-500 hover:text-black'
        />
      </form>
    </div>
  )
}
