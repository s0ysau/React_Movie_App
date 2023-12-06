// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from "react";

export default function Form(props) {
  //The component must return some JSX
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <div className="flex justify-center p-2 bg-black">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.movieSearch(searchTerm);
        }}
        className="pl-5 pt-1"
      >
        <input 
        type="text" 
        onChange={handleChange} 
        value={searchTerm} 
        placeholder="Search MovieApp" 
        className="2xl:w-[600px] xl:w-[500px] lg:w-[350px] md:w-[200px] sm:w-[100px] box-border h-7 placeholder:italic placeholder:text-slate-400 bg-white border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
        />
        <input 
        type="submit" 
        value="Search" 
        className='bg-blue-700 text-white p-1 rounded mx-3 hover:bg-blue-500 hover:text-black'
        />
      </form>
    </div>
  );
}
