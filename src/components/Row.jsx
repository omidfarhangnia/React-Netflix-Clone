import axios from "axios";
import React, { useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useState(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowID}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider${rowID}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="mb-10">
      <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
      <div className="flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white hidden group-hover:block absolute opacity-50 cursor-pointer hover:opacity-100 transition-colors left-5 z-10 rounded-[50%]"
        />
        <div
          id={`slider${rowID}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white hidden group-hover:block absolute opacity-50 cursor-pointer hover:opacity-100 transition-colors right-5 z-10 rounded-[50%]"
        />
      </div>
    </div>
  );
};

export default Row;
