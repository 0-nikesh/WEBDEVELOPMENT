// //allproducts
// import React, { useContext } from "react";
// import { MdOutlineAdd } from "react-icons/md";
// import api from "../api/api";
// import { UserContext } from "../context/UserContextProvider";
// import { Product } from "./Products";

// interface Props {
//   data: Product;
// }  

// const Card: React.FC<Props> = ({ data }) => {
//   const userContext = useContext(UserContext);

//   function addToCart(pid: number) {
//     api
//       .post(
//         `/api/products/add-to-cart/${pid}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${userContext?.token}`,
//           },
//         }
//       )
//       .then((res) => console.log(res.data));
//   }

//   return (
//     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
//       <a href="#">
//         <img
//           className="p-8 rounded-t-lg"
//           src={`http://localhost:3000/uploads/${data.image}`}
//           alt="product image"
//         />
//       </a>
//       <div className="px-5 pb-5">
//         <a href="/tshirt">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900">
//             {data.title}
//           </h5>
//         </a>
//         <p className="text-gray-600 mt-2">{data.description}</p> 
//         <div className="flex items-center justify-between mt-2.5 mb-5"></div>
//         <div className="flex items-center justify-between">
//           <span className="text-3xl font-bold text-gray-900">
//             Rs.{data.price}
//           </span>
//           <div className="flex items-center bg-blue-500 text-white justify-center px-2 py-1">
//             <MdOutlineAdd />
//             <button
//               onClick={() => {
//                 addToCart(data.id);
//               }}
//             >
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React, { useContext, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import api from "../api/api";
import { UserContext } from "../context/UserContextProvider";
import { Product } from "./Products";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  data: Product;
}

const Card: React.FC<Props> = ({ data }) => {
  const userContext = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  // function addToCart(pid: number) {
  //   api
  //     .post(
  //       `/api/products/add-to-cart/${pid}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userContext?.token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       toast.success('Item added to cart successfully!');
  //     })
  //     .catch((error) => {
  //       console.error('Error adding item to cart:', error);
  //       toast.error('Failed to add item to cart');
  //     });
  // }
  function addToCart(pid: number) {
    // Check if the user is logged in
    if (!userContext || !userContext.token) {
      // If not logged in, show a toast message and return
      toast.warning('Please log in first to add items to cart');
      return; // Stop further execution
    }
    else{
  
    // If the user is logged in, proceed with the API call
    api
      .post(
        `/api/products/add-to-cart/${pid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userContext.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success('Item added to cart successfully!');
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
        toast.error('Failed to add item to cart');
      });
    }
  }
  

  return (
    <div
      className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ${
        isHovered ? "border-2 border-sky-200" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={`http://localhost:3000/uploads/${data.image}`}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {data.title}
          </h5>
        </a>
        <p className="text-gray-600 mt-2">{data.description}</p>
        <div className="flex items-center justify-between mt-2.5 mb-5"></div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            Rs.{data.price}
          </span>
          <div className="flex items-center bg-blue-500 text-white justify-center px-2 py-1">
            <MdOutlineAdd />
            <button
              onClick={() => {
                addToCart(data.id);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
