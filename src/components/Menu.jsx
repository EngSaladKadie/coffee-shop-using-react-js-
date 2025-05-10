import React from "react";
import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/7.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>
      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Espreesso"/>
        <MenuCard img={img2} title="cappucciano"/>
        <MenuCard img={img3} title="latte"/>
        <MenuCard img={img4} title="American"/>
        <MenuCard img={img5} title="Macchiato"/>
        <MenuCard img={img6} title="Cortado"/>
        
        

      </div>
    </div>
  );
};

export default Menu;
