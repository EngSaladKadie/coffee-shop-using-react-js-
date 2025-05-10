import React from "react";
import img1 from "../assets/4.jpeg";
import { FaShoppingCart } from "react-icons/fa";

function MenuCard(props) {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <div>
        <img className="rounded-xl" src={props.img} alt="images" />
      </div>
      <div className="p-2 mt-5">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl">{props.title}</h3>
          <h3 className="font-semibold text-xl">{props.value}</h3>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div className="flex gap-2">
            <button className="p-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded">
              Hot
            </button>
            <button className="p-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded">
              Cold
            </button>
          </div>
          <span className="flex items-center bg-backgroundColor px-3 py-2 rounded-full cursor-pointer">
            <FaShoppingCart size={30} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
