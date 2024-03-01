// import React, { useContext, useEffect, useState } from "react";
// import api from "../api/api";
// import { UserContext } from "../context/UserContextProvider";
// import CartItem from "../components/CartItem";
// import Navigation from "../components/Navigation";
// import { isAxiosError } from "axios";
// import { Link } from "react-router-dom";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// type Cart = {
//   totalPrice: number;
//   id: number;
//   user: object;
// };

// type CItem = {
//   id: number;
//   quantity: number;
//   cart: Cart;
//   product: Product;
// };

// function OrderedProduct() {
//   const userContext = useContext(UserContext);
//   const [cartItems, setCartItems] = useState<CItem[]>([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);



//   function getCartProducts(token: string) {
//     setLoading(true);
//     api
//       .get("/api/cart/all", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setCartItems(res.data);
//         if (res.data.length > 0) {
//           const totalPrice = res.data.reduce(
//             (acc, cart) => acc + cart.totalPrice,
//             0
//           );
//           setTotal(totalPrice);
//         }
//         setLoading(false);
//         setError(false);
//       })
//       .catch((e) => {
//         if (isAxiosError(e)) {
//           console.log(e.response);
//         }
//         console.log(e);
//         setError(true);
//         setLoading(false);
//       });
//   }
  

//   useEffect(() => {
//     if (userContext?.token) {
//       getCartProducts(userContext?.token);
//     }
//   }, [userContext?.token]);

//   return (
//     <main className='min-h-screen bg-slate-200'>
//       <Navigation />
//       {loading && <h1 className='text-3xl mt-12 text-center'> Loading...</h1>}
//       {!loading && !error && (
//         <>
//           {cartItems.length > 0 ? (
//             <>
//               <div className='mt-16'>
              
//               </div>
//               <h1 className='text-center mt-6 text-2xl font-bold'>
//                 Total Price
//                 <span className='ml-2 bg-blue-500  px-3 py-2 text-white rounded-lg'>
//                   Rs. {total}
//                 </span>
//               </h1>
//               <div className='text-center'>
//                 <button className='mt-12 text-lg px-6 py-3 bg-blue-300 font-bold border-2 rounded-lg '>
//                   Checkout
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className='mt-16'>
//               <h1 className='font-semibold text-3xl text-center'>
//                 No Items to show. Go here to{" "}
//                 <Link to='/products/all' className=' font-normal underline'>
//                   Add Items
//                 </Link>
//               </h1>
//             </div>
//           )}
//         </>
//       )}
//       {error && (
//         <h1 className='text-3xl mt-12 text-center'>
//           {" "}
//           Error loading the cart. Please try again!
//         </h1>
//       )}
//     </main>
//   );
// }

// export default OrderedProduct;

// import React, { useContext, useEffect, useState } from "react";
// import api from "../api/api";
// import { UserContext } from "../context/UserContextProvider";
// import Navigation from "../components/Navigation";
// import { isAxiosError } from "axios";
// import { Link } from "react-router-dom";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// type Cart = {
//   totalPrice: number;
//   id: number;
//   user: object;
// };

// type CItem = {
//   id: number;
//   quantity: number;
//   cart: Cart;
//   product: Product;
// };

// function OrderedProduct() {
//   const userContext = useContext(UserContext);
//   const [cartItems, setCartItems] = useState<CItem[]>([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   function getCartProducts(token: string) {
//     setLoading(true);
//     api
//       .get("/api/cart/all", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setCartItems(res.data);
//         if (res.data.length > 0) {
//           const totalPrice = res.data.reduce(
//             (acc, cart) => acc + cart.totalPrice,
//             0
//           );
//           setTotal(totalPrice);
//         }
//         setLoading(false);
//         setError(false);
//       })
//       .catch((e) => {
//         if (isAxiosError(e)) {
//           console.log(e.response);
//         }
//         console.log(e);
//         setError(true);
//         setLoading(false);
//       });
//   }
  

//   useEffect(() => {
//     if (userContext?.token) {
//       getCartProducts(userContext?.token);
//     }
//   }, [userContext?.token]);

//   return (
//     <main className='min-h-screen bg-slate-200'>
//       <Navigation />
//       {loading && <h1 className='text-3xl mt-12 text-center'> Loading...</h1>}
//       {!loading && !error && (
//         <>
//           {cartItems.length > 0 ? (
//             <>
//               <div className='mt-16'>
//                 <table className="w-full border-collapse border border-green-800">
//                   <thead>
//                     <tr className="bg-green-200">
//                       <th className="border border-green-600 px-4 py-2">ID</th>
//                       <th className="border border-green-600 px-4 py-2">Title</th>
//                       <th className="border border-green-600 px-4 py-2">Quantity</th>
//                     </tr>
//                   </thead>
//                   <tbody>

//                    {cartItems.map(item => {
//                       if (item.product) {
//                         return (
//                           <tr key={item.id}>
//                             <td className="border border-green-600 px-4 py-2">{item.product.id}</td>
//                             <td className="border border-green-600 px-4 py-2">{item.product.title}</td>
//                             <td className="border border-green-600 px-4 py-2">{item.quantity}</td>
//                           </tr>
//                         );
//                       } else {
//                         return null; // Or handle the case where product is undefined
//                       }
//                     })}


//                   </tbody>
//                 </table>
//               </div>
//               <h1 className='text-center mt-6 text-2xl font-bold'>
//                 Total Price
//                 <span className='ml-2 bg-blue-500  px-3 py-2 text-white rounded-lg'>
//                   Rs. {total}
//                 </span>
//               </h1>
//               <div className='text-center'>
//                 <button className='mt-12 text-lg px-6 py-3 bg-blue-300 font-bold border-2 rounded-lg '>
//                   Checkout
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className='mt-16'>
//               <h1 className='font-semibold text-3xl text-center'>
//                 No Items to show. Go here to{" "}
//                 <Link to='/products/all' className=' font-normal underline'>
//                   Add Items
//                 </Link>
//               </h1>
//             </div>
//           )}
//         </>
//       )}
//       {error && (
//         <h1 className='text-3xl mt-12 text-center'>
//           {" "}
//           Error loading the cart. Please try again!
//         </h1>
//       )}
//     </main>
//   );
// }

// export default OrderedProduct;

import React, { useContext, useEffect, useState } from "react";
import api from "../api/api";
import Navigation from "../components/Navigation";
import { isAxiosError } from "axios";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
};

type Cart = {
  totalPrice: number;
  id: number;
  user: object;
};

type CItem = {
  id: number;
  quantity: number;
  cart: Cart;
  product?: Product; // Make product optional
};

function OrderedProduct() {
  const [cartItems, setCartItems] = useState<CItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/cart/all")
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data);
        if (res.data.length > 0) {
          const totalPrice = res.data.reduce(
            (acc, cart) => acc + cart.totalPrice,
            0
          );
          setTotal(totalPrice);
        }
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        if (isAxiosError(e)) {
          console.log(e.response);
        }
        console.log(e);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <main className='min-h-screen bg-slate-200'>
      <Navigation />
      {loading && <h1 className='text-3xl mt-12 text-center'> Loading...</h1>}
      {!loading && !error && (
        <>
          {cartItems.length > 0 ? (
            <>
              <div className='mt-16'>
                <table className="w-full border-collapse border border-green-800">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="border border-green-600 px-4 py-2">ID</th>
                      <th className="border border-green-600 px-4 py-2">Title</th>
                      <th className="border border-green-600 px-4 py-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-green-600 px-4 py-2">{item.id}</td>
                        <td className="border border-green-600 px-4 py-2">{item.product?.title}</td>
                        <td className="border border-green-600 px-4 py-2">{item.quantity}</td>
                      </tr>
                    ))} */}
                    {cartItems.map((item) => (
  <tr key={item.id}>
    <td className="border border-green-600 px-4 py-2">{item.id}</td>
    <td className="border border-green-600 px-4 py-2">{item.product?.title}</td>
    <td className="border border-green-600 px-4 py-2">{item.quantity}</td>
  </tr>
))}

                  </tbody>
                </table>
              </div>
              <h1 className='text-center mt-6 text-2xl font-bold'>
                Total Price
                <span className='ml-2 bg-blue-500  px-3 py-2 text-white rounded-lg'>
                  Rs. {total}
                </span>
              </h1>
              <div className='text-center'>
                <button className='mt-12 text-lg px-6 py-3 bg-blue-300 font-bold border-2 rounded-lg '>
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <div className='mt-16'>
              <h1 className='font-semibold text-3xl text-center'>
                No Items to show. Go here to{" "}
                <Link to='/products/all' className=' font-normal underline'>
                  Add Items
                </Link>
              </h1>
            </div>
          )}
        </>
      )}
      {error && (
        <h1 className='text-3xl mt-12 text-center'>
          {" "}
          Error loading the cart. Please try again!
        </h1>
      )}
    </main>
  );
}

export default OrderedProduct;
