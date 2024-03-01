import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

function HighlightCard(props: Props) {
  return (
    <>
      <div className='py-48 bg-info-tshirt bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex items-center justify-center  duration-700 rounded-full ring ring-blue-50 hover:ring-blue-500'>
        <h2 className='font-semibold bg-white px-8 py-3 text-xl letter tracking-wide cursor-pointer '>
          <Link to={"/products/tshirt"}>T-shirt</Link>
        </h2>
      </div>
      <div className='py-48 bg-info-polo bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex justify-center items-center  duration-700 rounded-full ring ring-blue-50 hover:ring-blue-500'>
        <h2 className='font-semibold bg-white px-8 py-3 text-xl letter tracking-wide cursor-pointer'>
          <Link to={"/products/polo"}> Polo </Link>
        </h2>
      </div>
      <div className='ring ring-blue-50 hover:ring-blue-200 py-48 bg-info-sweatshirt bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex justify-center items-center  duration-700 rounded-full '>
        <h2 className='font-semibold bg-white px-8 py-3 text-xl letter tracking-wide cursor-pointer'>
          <Link to={"/products/sweatshirt"}> SweatShirt </Link>
        </h2>
      </div>
      <div className='ring ring-blue-50 hover:ring-blue-200 py-48 bg-info-hoodie bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex justify-center items-center  duration-700 rounded-full '>
        <h2 className='font-semibold bg-white px-8 py-3 text-xl letter tracking-wide cursor-pointer'>
          <Link to={"/products/hoodie"}> Hoodie </Link>
        </h2>
      </div>

    </>
  );

}

export default HighlightCard;

// import React from "react";
// import { Link } from "react-router-dom";

// type Props = {
//   title: string;
// };

// function HighlightCard(props: Props) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       <div className="relative group overflow-hidden bg-info-tshirt bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex items-center justify-center  duration-700 rounded-full">
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-75 rounded-full">
//           <h2 className="font-semibold text-white text-xl px-4 py-2">
//             <Link to={"/tshirt"}>T-shirt</Link>
//           </h2>
//         </div>
//       </div>
//       <div className="relative group overflow-hidden bg-info-polo bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex justify-center items-center  duration-700 rounded-full">
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-75 rounded-full">
//           <h2 className="font-semibold text-white text-xl px-4 py-2">
//             <Link to={"/polo"}>Polo</Link>
//           </h2>
//         </div>
//       </div>
//       <div className="relative group overflow-hidden bg-info-sweatshirt bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex justify-center items-center  duration-700 rounded-full">
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-75 rounded-full">
//           <h2 className="font-semibold text-white text-xl px-4 py-2">
//             <Link to={"/sweatshirt"}>Sweatshirt</Link>
//           </h2>
//         </div>
//       </div>
//       <div className="relative group overflow-hidden bg-info-hoodie bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-50 bg-cover flex justify-center items-center  duration-700 rounded-full">
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-75 rounded-full">
//           <h2 className="font-semibold text-white text-xl px-4 py-2">
//             <Link to={"/hoodie"}>Hoodie</Link>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HighlightCard;

