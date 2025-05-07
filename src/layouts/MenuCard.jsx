import React from "react";
import img from "../assets/1.jpeg";
import { FaShoppingCart } from "react-icons/fa";

function MenuCard(props) {
  return (
    <div className="w-full lg:h-1/4 bg-white p-3 rounded-lg">
      <div>
        <img src={props.img} alt="images" />
      </div>
      <div>
        <div>
          <h3>{props.title}</h3>
          <h3>{props.value}</h3>
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
