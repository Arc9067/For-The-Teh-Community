import React from "react";
import Logo from "../assets/logo1.png";

const About = () => {
  return (
    <section className="py-hun flex justify-center w-full bg-black text-white relative">
      <img
        src={Logo}
        alt=""
        className="w-[13rem] -top-10  animate-bounce object-cover absolute "
      />
      <h1 className=" absolute right-0 rotate-3 top-[10%] text-white uppercase md:text-4xl animate-pulse decoration-wavy underline decoration-white text-5xl">
        10000x
      </h1>
      <div className="container relative flex items-center mt-11 flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-center uppercase -rotate-1 underline decoration-lime-500 p-6 rounded-full font-Cherry_Bomb_One decoration-wavy">
            contract
          </h1>
          <p className="text-2xl">00000000000000000000 </p>
        </div>

        <div>
          <p className="text-3xl text-center mt-10 text-lime-500 max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni
            sunt iste hic quisquam non labore? Ipsa totam in nobis.
          </p>
          <p className="text-3xl text-center mt-10 text-lime-200 rotate-3 max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni
            sunt iste hic quisquam non labore? Ipsa totam in nobis.
          </p>
          <h1 className="mt-20 mx-auto bg-lime-700 w-max text-5xl md:text-8xl  uppercase">
            community
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
