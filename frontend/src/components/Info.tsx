import React from "react";
import clothes from "../assets/shoes.jpg";
import HighlightCard from "./HighlightCard";

function Info() {
  return (
    <div className='p-8'>
      <div className='mx-auto max-w-[800px] my-6'>
        <h1 className='text-center py-1 text-3xl font-accent font-semibold'>
          Best quality of Tshirt and Polo available on the market
        </h1>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        <HighlightCard />
      </div>
    </div>
  );
}

export default Info;
