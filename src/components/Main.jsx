import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    })
  }, []);

  console.log(movie)

  return (
    <div className="w-full h-[500px] md:h-[80vh] xl:h-[100vh] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.2)]"></div>
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
          
        <div>
          <h1>{movie?.title}</h1>
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
          <button className="border text-white border-gray-300 py-2 px-5 ml-3">Watch Later</button>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
