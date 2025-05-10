import React from "react";
import ReviewsCard from "../layouts/ReviewsCard";
import img2 from "../assets/c1.jpeg";
import img3 from "../assets/c2.jpeg";
import img5 from "../assets/c3.jpeg";

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24">
        Customers Reviews
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewsCard img={img2} title="zuu" />
        <ReviewsCard img={img3} title="zalad" />
        <ReviewsCard img={img5} title="ali" />
      </div>
    </div>
  );
};

export default Reviews;
