// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from "react";

export default function Form(props) {
  //The component must return some JSX
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.movieSearch(searchTerm);
        }}
      >
        <input type="text" onChange={handleChange} value={searchTerm} />
        <input type="submit" value="submit" className='bg-red-300 p-2 rounded mx-20 hover:bg-red-600 hover:text-white'/>
      </form>
    </div>
  );
}
