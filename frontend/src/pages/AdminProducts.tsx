//to update and delete page 
import { useContext, useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import api from "../api/api";
import { isAxiosError } from "axios";
import Products from "../components/Products";
import Navigation from "../components/Navigation";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

function AdminProducts() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const res = await api.get("/api/products/all");
      const products = await res.data;
      console.log(products);
      setProducts(products);
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(e.response);
      }
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  function onProductDelete(id: number) {
    api
      .delete(`/admin/api/products/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${userContext?.token}`,
        },
      })
      .then(res => {
        getProducts();
      });
  }

  function onUpdateProduct(id: number) {
    navigate(`/admin/edit-product/${id}`);
  }

  return (
    // <main className='min-h-screen bg-blue-100'>
    //   <Navigation />
    //   <ul>
    //     {products.map(prod => {
    //       return (
    //         <li className='mb-12'>
    //           <div className='shadow-lg bg-white px-8 py-4 max-w-3xl mx-auto flex items-center justify-between'>
    //             <img
    //               className='w-32 h-32 object-cover'
    //               src={`http://localhost:3000/uploads/${prod.image}`}
    //               alt=''
    //             />
    //             <div>
    //               <h2>{prod.title}</h2>
    //             </div>
    //             <div className='flex gap-3'>
    //               <button
    //                 className='px-3 py-1 bg-red-400 text-white  rounded-sm'
    //                 onClick={() => onProductDelete(prod.id)}
    //               >
    //                 Delete
    //               </button>
    //               <button
    //                 className='px-3 py-1 bg-blue-200  rounded-sm'
    //                 onClick={() => onUpdateProduct(prod.id)}
    //               >
    //                 Update
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </main>
    <main className='min-h-screen bg-blue-100'>
  <Navigation />
  <div className="container mx-auto mt-8">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(prod => (
        <li key={prod.id} className='shadow-lg bg-white rounded-lg overflow-hidden'>
          <img
            className='w-full h-56 object-cover'
            src={`http://localhost:3000/uploads/${prod.image}`}
            alt={prod.title}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{prod.title}</h2>
            <div className='flex justify-between items-center mt-4'>
              <div>
                <button
                  className='px-3 py-1 bg-red-400 text-white rounded-sm mr-2'
                  onClick={() => onProductDelete(prod.id)}
                >
                  Delete
                </button>
                <button
                  className='px-3 py-1 bg-blue-200 rounded-sm'
                  onClick={() => onUpdateProduct(prod.id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
</main>

  );
}

export default AdminProducts;
