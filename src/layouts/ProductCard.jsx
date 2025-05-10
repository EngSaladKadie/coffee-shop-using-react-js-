import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Button } from "react-scroll";
// import Button from "../layouts/Button";
// import Button from "../layouts/Button";

const ProductCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <img className="rounded-lg" src={props.img} alt="" />
      <div className="flex flex-col items-center mt-5 gap-3">
        <h2 className="font-semibold text-xl">{props.title}</h2>
        <div className="flex">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <h3 className="font-semibold text-lg">$23.66</h3>
        <button className="p-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded">
              Hot
            </button>
      </div>
    </div>
  );
};

export default ProductCard;
