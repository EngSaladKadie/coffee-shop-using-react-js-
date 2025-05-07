import React from "react";
import MenuCard from "../layouts/MenuCard";
import img from "../assets/1.jpeg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>
      <div>
        <MenuCard img={img} title="dunfur"  />
        <MenuCard img={img} title="dunfur"  />

      </div>
    </div>
  );
};

export default Menu;
