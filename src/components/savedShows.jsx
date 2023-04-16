import React, { useEffect, useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { CgCloseO } from "react-icons/cg";

export default function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      console.log();
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const slideLeft = () => {
    const slider = document.getElementById(`myShowsSlider`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`myShowsSlider`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
    
  const movieRef = doc(db, "users", `${user?.email}`)

  async function deleteShow(movieId) {
    try {
      const result = movies.filter((item) => item.id !== movieId);
      await updateDoc(movieRef, {
        savedShows: result
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mb-10">
      <h2 className="text-white font-bold p-4 md:text-xl">My Shows</h2>
      <div className="flex items-center group bg-green">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white hidden group-hover:block absolute opacity-50 cursor-pointer hover:opacity-100 transition-colors left-5 z-10 rounded-[50%]"
        />
        <div
          id="myShowsSlider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 text-white hover:opacity-100 transition-opacity">
                <p className="whitespace-normal h-full text-xs font-bold grid place-items-center text-center p-6 select-none">
                  {item?.title}
                </p>
                <span onClick={() => deleteShow(item.id)} className="absolute top-[15px] left-[15px] text-white">
                  <CgCloseO size={19}/>
                </span>
              </div>
            </div>
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
}
