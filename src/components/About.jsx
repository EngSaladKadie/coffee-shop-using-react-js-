import React from "react";
import img from "../assets/3.jpeg";
import Button from "../layouts/Button";
function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img  className="w-full rounded-3xl rounded-lg" src={img} alt="images" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">what makes our coffee special are you intest?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta laboriosam velit fugit earum voluptatum quos, similique repellat consectetur iure totam debitis, laudantium veritatis laborum praesentium facere qui ab iste.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores tempore pariatur unde expedita! Facilis a fuga nam eveniet, natus, optio magni doloremque autem quas, commodi aliquam asperiores maxime omnis ab.</p>
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default About;
