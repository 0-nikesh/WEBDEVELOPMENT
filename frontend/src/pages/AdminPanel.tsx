import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function AdminPanel() {
  return (
      // <main className='min-h-screen  bg-blue-50'>
      //   <Navigation />
      //   <div className='flex justify-center gap-6 items-center mt-16'>
      //     <button className=' text-3xl'>
      //       <Link to='/admin/add-to-cart'>Create Product</Link>
      //     </button>
      //     <button className=' text-3xl'>
      //       <Link to='/admin/products'>All Products</Link>
      //     </button>
      //     <button className=' text-3xl'>
      //       <Link to='/admin/orderedproduct'>Ordered Products</Link>
      //     </button>
      //   </div>
      // </main>
      <>
      <Navigation />
      <main className="min-h-screen  bg-blue-50 flex flex-col items-center ">
     
      <div className="flex flex-col justify-center items-center mt-16 ">
        <button className=" text-xl mb-4 bg-blue-400 text-white px-4 py-2 rounded-md ">
          <Link to="/admin/add-to-cart">Add Product</Link>
        </button>
        <button className=" text-xl mb-4 bg-blue-400 text-white px-4 py-3 rounded-md ">
          <Link to="/admin/products">All Products</Link>
        </button>
        <button className=" text-xl mb-4 bg-blue-400 text-white px-4 py-3 rounded-md ">
          <Link to="/admin/orderedproduct">Ordered Products</Link>
        </button>
      </div>
    </main>
    </>
      
    
  );
}

export default AdminPanel;
