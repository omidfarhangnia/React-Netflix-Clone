import axios from "axios";
import React, { useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useState(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <div className="mb-10">
      <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
      <div className="flex items-center">
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, id) => <Movie key={id} item={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default Row;
