import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Navigation from "../components/Navigation";
import api from "../api/api";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

function AddToCart() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function addProduct(e: FormEvent) {
    e.preventDefault();

    const title = titleRef.current?.value;
    const price = priceRef.current?.value;
    const description = descriptionRef.current?.value;
    const imageFile = fileRef.current?.files?.[0];

    if (!title || !price || !description || !imageFile) {
      return;
    }

    const product = new FormData();
    product.append("title", title);
    product.append("price", price);
    product.append("description", description);
    product.append("image", imageFile);

    api
      .post("/admin/api/products/create", product, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userContext?.token}`,
        },
      })
      .then(res => {
        navigate("/products/all");
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <main className='min-h-screen  bg-blue-50'>
  <Navigation />
  <h1 className='font-bold font-primary text-4xl my-8 text-center'>
    Add Product
  </h1>
  <form
    onSubmit={addProduct}
    className='w-full max-w-xl mx-auto flex flex-col gap-6 px-8 sm:px-12 py-8 rounded-lg bg-blue-50 border border-gray-300 shadow-lg'
  >
    <div className='flex flex-col'>
  <label htmlFor='title' className='text-lg font-medium text-gray-800'>
    Product Title
  </label>
  <select
    ref={titleRef}
    className='rounded-md px-4 py-2 outline-none bg-white focus:bg-gray-200'
    name='title'
    id='title'
  >
    <option value='Tshirt'>Tshirt</option>
    <option value='Hoodie'>Hoodie</option>
    <option value='Sweatshirt'>Sweatshirt</option>
    <option value='Polo'>Polo</option>
  </select>
</div>
    <div className='flex flex-col'>
      <label htmlFor='price' className='text-lg font-medium text-gray-800'>
        Product Price
      </label>
      <input
        ref={priceRef}
        className='rounded-md px-4 py-2 outline-none bg-white focus:bg-blue-100'
        type='number'
        name='price'
        id='price'
      />
    </div>
    <div className='flex flex-col'>
      <label htmlFor='image' className='text-lg font-medium text-gray-800'>
        Product Image
      </label>
      <input
        ref={fileRef}
        className='rounded-md px-4 py-2 outline-none bg-white focus:bg-blue-100'
        type='file'
        name='image'
        id='image'
      />
    </div>
    <div className='flex flex-col'>
      <label htmlFor='description' className='text-lg font-medium text-gray-800'>
        Product Description
      </label>
      <textarea
        ref={descriptionRef}
        className='rounded-md px-4 py-2 outline-none bg-white focus:bg-blue-100'
        name='description'
        id='description'
        cols={20}
        rows={6}
      ></textarea>
    </div>
    <div className='text-center'>
      <button className='px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:bg-gray-700'>
        Add Product
      </button>
    </div>
  </form>
</main>

    // <main className='min-h-screen bg-[#dfddda]'>
    //   <Navigation />
    //   <h1 className='font-bold font-primary text-3xl my-16 text-center'>
    //     Add Product
    //   </h1>
    //   <form
    //     onSubmit={addProduct}
    //     className='w-3/4 md:max-w-3xl mx-auto flex flex-col gap-4 px-8 sm:px-16 py-8 rounded-lg'
    //   >
    //     <div className='flex flex-col'>
    //       <label htmlFor='title'>Product Title</label>
    //       <input
    //         ref={titleRef}
    //         className=' rounded-md px-3 py-1 outline-none'
    //         type='text'
    //         name='title'
    //         id='title'
    //       />
    //     </div>
    //     <div className='flex flex-col'>
    //       <label htmlFor='price'>Product Price</label>
    //       <input
    //         ref={priceRef}
    //         className=' rounded-md px-3 py-1 outline-none'
    //         type='number'
    //         name='price'
    //         id='price'
    //       />
    //     </div>
    //     <div className='flex flex-col'>
    //       <label htmlFor='image'>Product Image</label>
    //       <input
    //         ref={fileRef}
    //         className=' rounded-md px-3 py-1 outline-none'
    //         type='file'
    //         name='image'
    //         id='image'
    //       />
    //     </div>
    //     <div className='flex flex-col'>
    //       <label htmlFor='description'>Product Description</label>
    //       <textarea
    //         ref={descriptionRef}
    //         className=' rounded-md px-3 py-1 outline-none'
    //         name='description'
    //         id='description'
    //         cols={20}
    //         rows={10}
    //       ></textarea>
    //     </div>
    //     <div className='text-center'>
    //       <button className='px-4 py-2 bg-gray-900 text-white font-bold font-accent rounded-md'>
    //         Add Product
    //       </button>
    //     </div>
    //   </form>
    // </main>
  );
}

export default AddToCart;
