import React, { useContext, useEffect, useState } from "react";
import api from "../api/api";
import { UserContext } from "../context/UserContextProvider";
import CartItem from "../components/CartItem";
import Navigation from "../components/Navigation";
import { isAxiosError } from "axios";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
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
  product: Product;
};

function CartPage() {
  const userContext = useContext(UserContext);
  const [cartItems, setCartItems] = useState<CItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isTableOpen, setIsTableOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function getCartProducts(token: string) {
    setLoading(true);
    api
      .get("/getCart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res.data);
        setCartItems(res.data);
        if (res.data.length > 0) {
          setTotal(res.data[0].cart.totalPrice);
        }
        setLoading(false);
        setError(false);
      })
      .catch(e => {
        if (isAxiosError(e)) {
          console.log(e.response);
        }
        console.log(e);
        setError(true);
        setLoading(false);
      });
  }

  function deleteCartItem(prodId: number) {
    api
      .delete(`/api/cart/${prodId}`, {
        headers: {
          Authorization: `Bearer ${userContext?.token}`,
        },
      })
      .then(res => {
        console.log(res);
        if (userContext?.token) {
          getCartProducts(userContext?.token);
        }
      })
      .catch(e => {
        if (isAxiosError(e)) {
          console.log(e.response);
        }
      });
  }

  useEffect(() => {
    if (userContext?.token) {
      getCartProducts(userContext?.token);
    }
  }, [userContext?.token]);

  // Function to toggle table visibility
  const toggleTable = () => {
    setIsTableOpen(!isTableOpen);
  }

  return (
    <main className="min-h-screen bg-slate-200">
      <Navigation />

      {loading && <h1 className="text-3xl mt-12 text-center">Loading...</h1>}

      {!loading && !error && (
        <div className="flex flex-col items-center justify-center mt-16">
          {cartItems.length > 0 ? (
            <>
              <div className="w-full max-w-md">
                {cartItems.map((item) => {
                  return (
                    <CartItem
                      onItemDelete={deleteCartItem}
                      key={item.id}
                      item={item}
                    />
                  );
                })}
              </div>
              <div className="mt-6 text-center">
                <h1 className="text-2xl font-bold mb-2">Total Price</h1>
                <span className="bg-blue-500 px-4 py-2 text-white rounded-lg">
                  Rs. {total}
                </span>
              </div>
              <div className="mt-12 text-center">
                <button className="text-xl px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={toggleTable}>
                  Order
                </button>
              </div>
            </>
          ) : (
            <div className="mt-16">
              <h1 className="font-semibold text-3xl text-center mb-8">
                No Items in Cart
              </h1>
              <p className="text-xl text-center">
                Go to{" "}
                <Link to="/products/all" className="underline text-blue-500">
                  Add Items
                </Link>
              </p>
            </div>
          )}
        </div>
      )}

      {error && (
        <h1 className="text-3xl mt-12 text-center">
          Error loading the cart. Please try again!
        </h1>
      )}



{isTableOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Title</th>
            <th className="px-4 py-2">Quantity</th>
            {/* <th className="px-4 py-2">Username</th> */}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.product.title}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              {/* <td className="border px-4 py-2">{userContext?.username}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="font-bold">Total Price: Rs. {total}</p>
      </div>
      <button className="text-xl px-4 py-2 bg-blue-500 text-white rounded-lg mt-4" onClick={toggleTable}>Close</button>
    </div>
  </div>
)}


    </main>
  );
}

export default CartPage;


