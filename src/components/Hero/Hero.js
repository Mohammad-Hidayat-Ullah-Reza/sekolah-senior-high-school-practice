import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="md:grid grid-cols-3 px-10 pt-10 text-white bg-blue-800">
      <div className="hidden md:block">
        <img
          className="w-full"
          src="https://sekolah.kenzap.com/wp-content/uploads/2017/03/teacher-2.png"
          alt="A girl holding a text board"
        />
      </div>
      <div className="col-span-2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-widest">
          WELCOME TO <span className="text-orange-400">SEKOLAH</span>
        </h1>
        <p className="text-sm mb-8 mx-1">
          Let us think of education as the means of developing our greatest
          abilities, because in each of us there is a private hope and dream
          which, fulfilled, can be translated into benefit for everyone and
          greater strength for our nation. (John F. Kennedy)
        </p>
        <button
          id="btn-take-a-tour"
          className="px-12 py-3 md:py-5 mb-10 text-lg uppercase font-semibold border border-white hover:border-black rounded-md hover:bg-white hover:text-blue-800"
        >
          Take a tour
        </button>
      </div>
    </div>
  );
};

export default Hero;
