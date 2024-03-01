import { useState } from "react";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function MainHero() {
  return (
    <div className='min-h-screen bg-newHero bg-no-repeat bg-cover bg-left md:bg-top'>
      <Navigation />

      <main className='container'>
        <h1 className='mt-32 md:mt-48 font-poppins text-4xl lg:text-7xl w-[15ch] leading-relaxed'>
          <span className=' p-3 inline-block'>
            Express Yourself Since you are the best!
          </span>
          
        </h1>
       
        {/* <p className='md:text-2xl mt-4 w-[35ch] lg:w-auto'>
          Threads that directly come from Nepal's Garment
        </p> */}
        <div className='mt-8 flex gap-3'>
          <a href="/products/all">
          <button className='text-white  bg-blue-500 px-4 py-2 rounded-lg text-xl'>
            Shop now
          </button>
          </a>
          {/* <button className='border-2 border-black px-3 py-1 text-xl font-black'>
            Learn more
          </button> */}
        </div>
      </main>
    </div>
  );
}

export default MainHero;
