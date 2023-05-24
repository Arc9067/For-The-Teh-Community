import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-hun min-h-screen flex justify-center items-center hero w-full bg-lime-400 bg-cover bg-no-repeat bg-center text-white">
      <div className="container flex gap-5 flex-col justify-center items-center">
        <img src={Logo} alt="" className="" />
        <h1 className="uppercase text-5xl  gap-3 text-center md:text-7xl">
          for the teh
          <span className=" font-Cherry_Bomb_One md:font-Chelsea_Market">
            community
          </span>
        </h1>

        <div className="flex flex-wrap gap-5 items-center justify-center font-mono uppercase">
          <a
            href=""
            className="px-8 py-4 md:-rotate-3 bg-lime-500 font-bold transition hover:bg-white hover:text-black"
          >
            join community
          </a>
          <a
            href=""
            className="px-8 -rotate-3 py-4 bg-lime-500 font-bold transition hover:bg-white hover:text-black"
          >
            ape in now
          </a>
          <a
            href=""
            className="px-8 rotate-3 py-4 bg-lime-500 font-bold transition hover:bg-white hover:text-black"
          >
            twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
