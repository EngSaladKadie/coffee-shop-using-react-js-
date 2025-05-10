import React from "react";
import ReviewsCard from "../layouts/ReviewsCard";
import img2 from "../assets/23.jpeg";
import img3 from "../assets/13.jpeg";
import img5 from "../assets/14.jpeg";

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center lg:flex-row gap-5 justify-center py-4 my-8">
        Customers Reviews
      </h1>
      <div>
        <ReviewsCard img={img2} title="zuu" />
        <ReviewsCard img={img3} title="zalad" />
        <ReviewsCard img={img5} title="ali" />
      </div>
    </div>
  );
};

export default Reviews;
