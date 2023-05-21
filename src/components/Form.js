// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from "react";
import Logo from "./Logo";

export default function Form(props) {
  //The component must return some JSX
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <div className="flex p-2 bg-black">
      <Logo />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.movieSearch(searchTerm);
        }}
        className="pl-5"
      >
        <input 
        type="text" 
        onChange={handleChange} 
        value={searchTerm} 
        placeholder="Search MovieApp" 
        className=" box-border h-7 placeholder:italic placeholder:text-slate-400 bg-white border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <input 
        type="submit" 
        value="submit" 
        className='bg-blue-700 text-white p-1 rounded mx-3 hover:bg-blue-500 hover:text-black'
        />
      </form>
    </div>
  );
}
