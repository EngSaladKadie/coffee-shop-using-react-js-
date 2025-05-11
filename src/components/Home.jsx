import React from "react";
import Button from "../layouts/Button";
import img from "../assets/11.jpeg";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="w-full lg:w-2/4 mt-14 lg:mt-0">
        <h1 className="font-s text-5xl text-center lg:text-start leading-tight">
          start your day with a streaming cup of coffee{" "}
        </h1>
        <p>
          Booost your Productivity and building your mood with glass of cofee in
          morning
        </p>
        <div className="flex flex-row gap-6">
          <Button title="ADD TO CARD" />
          <Button title="MORE MENU" />
        </div>
      </div>
      <div className="relative">
        <img className="rounded w-full" src={img} alt="image" />
        <div className="absolute bg-slate-100 px-8 py-2 top-5 right-0 rounded-full shadow[0_20px_50px_rgb(8,_122,_184, _0.7)]">
          <h2 className="font-semibold">20k</h2>
        </div>
        <div className="absolute bg-slate-100 px-8 py-2 bottom-0 left-10 rounded-full">
          <h2>Coppuccino</h2>
        </div> 
      </div>
    </div>
  );
};

export default Home;
