import React from "react";
import img from "../assets/1.jpeg";
import { FaShoppingCart } from "react-icons/fa";

function MenuCard(props) {
  return (
    <div className="w-full lg:h-1/4 bg-white p-2 rounded-lg">
      <div>
        <img className="rounded-lg" src={img} alt="images" />
      </div>
      <div className="p-2 mt-5">
        <div className="flex flex-col justify-between"> 
          <h3 className="font-semibold text-xl">{props.title}</h3>
          <h3 className="font-semibold text-xl">{props.value}</h3>
        </div>
        <div>
          <div>
            <button>Hot</button>
            <button>Cold</button>
          </div>
          <span>
            <FaShoppingCart size={30} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
