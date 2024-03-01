import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import user from "../assets/user.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import lock from "../assets/lock.svg";
import mail from "../assets/email.svg";

import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import useAuthentication from "../hooks/useAuthentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUrl } = useAuthentication();

  const navigate = useNavigate();

  function emailChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  // function loginHandler(e: FormEvent) {
  //   e.preventDefault();
  
  //   const userInfo = { email: email, password: password };
  
  //   // Check if email and password are provided
  //   if (!email || !password) {
  //     toast.error("Please provide both email and password.");
  //     return;
  //   }
  
  //   // Perform login
  //   loginUrl(userInfo)
  //     .then((response) => {
  //       // Check if the login response contains a token
  //       if (response.token) {
  //         // If login successful, inform the user and add item to cart
  //         toast.success("Login successful.");
  //       } else {
  //         // If the response does not contain a token, login failed
  //         toast.error("Login failed. Please check your credentials and try again.");
  //       }
  //     })
  //     .catch(error => {
  //       // If login fails, inform the user
  //       toast.error("Login failed. Please try again.");
  //       console.error("Login failed:", error);
  //     });
  // }
  

  function loginHandler(e: FormEvent) {
    e.preventDefault();

    const userInfo = { email: email, password: password };
      if (!email || !password) {
      toast.error("Please provide both email and password.");
      return;
    }
    console.log("form submitted");
    loginUrl(userInfo);
    toast.success("Login Sucessful");
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-hero">
    <div className="border border-blue-100 bg-white bg-opacity-50 p-8 rounded-lg">
      <h1 className='uppercase font-bubble font-black text-center text-4xl'>
        Wow
      </h1>
      <form
        method='post'
        className='flex flex-col justify-center items-center mt-8 space-y-5'
        onSubmit={loginHandler}
      >
        {/* {error ? (
          <p className='text-center bg-red-300 px-4 py-2'>{message}</p>
        ) : (
          ""
        )} */}
        <div className='bg-secondary flex focus-within:border-blue-300 focus-within:border-2 border rounded-full'>
          <img src={mail} alt='' className='ml-6' />
          <input
            placeholder='Email'
            onChange={emailChangeHandler}
            type='text'
            className='bg-transparent outline-none px-4 py-2 w-full text-blue-700'
          />
        </div>
        <div className='bg-secondary flex focus-within:border-blue-300 focus-within:border-2 border rounded-full'>
          <img src={lock} alt='' className='ml-6' />
          <input
            placeholder='Password'
            onChange={passwordChangeHandler}
            type='password'
            className='bg-transparent py-2 px-4 w-full outline-none text-blue-700'
          />
        </div>
        <button className='uppercase bg-blue-400 font-semibold text-white px-8 py-3 rounded-full'>
          Log in
        </button>
      </form>
      <div className='text-center mt-2'>
        <p>Haven't created yet?</p>
        <span className='underline text-blue-400 cursor-pointer'>
          <Link to={"/signup"}>Signup</Link>
        </span>
      </div>

      <div className='underline text-center mt-8 cursor-pointer'>
        <p>Forgot Password?</p>
      </div>
    </div>
  </main>
  
    // <main className=''>
    //   <h1 className='uppercase font-bubble font-black text-center pt-24 text-4xl'>
    //     clothy.
    //   </h1>
    //   <form
    //     method='post'
    //     className='flex flex-col justify-center items-center mt-16 space-y-5'
    //     onSubmit={loginHandler}
    //   >
    //     <div className='bg-primary flex focus-within:border-black focus-within:border-2 border'>
    //       <img src={mail} alt='' className='ml-6' />
    //       <input
    //         placeholder='Email'
    //         onChange={emailChangeHandler}
    //         type='text'
    //         className='bg-transparent outline-none px-12 py-4 w-full'
    //       />
    //     </div>
    //     <div className='bg-primary flex focus-within:border-black focus-within:border-2 border'>
    //       <img src={lock} alt='' className='ml-6' />
    //       <input
    //         placeholder='Password'
    //         onChange={passwordChangeHandler}
    //         type='password'
    //         className='bg-transparent py-4 px-12 w-full outline-none'
    //       />
    //     </div>
    //     <button className='uppercase bg-black font-semibold text-white px-8 py-3'>
    //       Log in
    //     </button>
    //   </form>
    //   <div className='text-center mt-8'>
    //     <p>Don't have an account?</p>

    //     <span className='underline text-blue-400 cursor-pointer'>
    //       <Link to={"/signup"}>Signup</Link>
    //     </span>
    //   </div>
    // </main>
  );
}

export default Login;
