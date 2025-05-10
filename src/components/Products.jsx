import React from 'react'
import ProductCard from '../layouts/ProductCard';
import img7 from "../assets/7.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";



const Products = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-024 mb-8'>Our Products</h1>
        <div className='flex flex-col lg:flex-row gap-12 justify-center '>
            <ProductCard img={img7} title="Mespresso" />
            <ProductCard img={img2} title="spresso" />
            <ProductCard img={img3} title="resso" />
            <ProductCard img={img4} title="Messso" />

           
        </div>
    </div>
  )
}

export default Products