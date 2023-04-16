import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

const Movie = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setIsLiked(!isLiked);
      setSaved(true);

      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 text-white hover:opacity-100 transition-opacity">
        <span
          onClick={saveShow}
          className="absolute top-[15px] left-[15px] text-red-600"
        >
          {isLiked ? <FaHeart size={19} /> : <FaRegHeart size={19} />}
        </span>
        <p className="whitespace-normal h-full text-xs font-bold grid place-items-center text-center p-6 select-none">
          {item?.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
