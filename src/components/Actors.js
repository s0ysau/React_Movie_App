import React from "react";

export default function Actors () {
  const [actor, setActor] = useState(null)

  const getActor = async () => {
  const url = 'https://actor-movie-api1.p.rapidapi.com/getid/Tom%20Holland?apiKey=62ffac58c57333a136053150eaa1b587';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1',
		'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com'
	}
  }
  try {
    const response = await fetch(url, options);
    const data = await response.text();
    setActor(data)
  } catch (error) {
    console.error(error);
  }
}

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}