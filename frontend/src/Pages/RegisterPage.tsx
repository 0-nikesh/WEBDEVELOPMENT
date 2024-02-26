import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from '../services/user-service';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        userName: '',
        fullName: '',
        password: '',
        address: '',
        email: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, you can access form data from 'formData' state
        if (!formData.email || !formData.password || !formData.address|| !formData.userName|| !formData.fullName) {
          toast.error('Fill in all fields');
          return;
        }
        console.log('Form Data:', formData);
    
        //validation 
    
        //call server api to send data 
        Register(formData).then((resp)=>{
          console.log(resp)
          console.log("sucess log")
          toast.success("User Registered Successfully")
        }).catch((error)=>{
          console.log(error)
          console.log("error log")
        })
      };

  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-300'>
          <h1 className='text-5xl font-semibold'>Register Page</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Hello! Please enter your details.</p>
          
          <div className='mt-8'>
            
                {/* Username */}
                <div className='flex flex-col'>
                    <label className='text-lg font-medium' htmlFor="userName">Username</label>
                    <input 
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your Username"/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium' htmlFor="fullName">Full Name</label>
                    <input 
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your Fullname"/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium' htmlFor="address">Address</label>
                    <input 
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your Address"/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium' htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium' htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your Password"/>
                </div>
                
                
                {/* remember and forgot 
                <div className='mt-8 flex justify-between items-center'>
                    
                    <button className='font-medium text-base text-violet-500'>Forgot password</button>
                </div> */}

                {/* signin */}
                <form onSubmit={handleSubmit} >
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button  onSubmit={handleSubmit} type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign Up</button>
                    
                </div>
                </form>
                {/*  account created */}
                <div className='mt-8 flex justify-center items-center'>
                <Link to="/login" className='font-medium text-base'>Already Signed In? Click here to register.</Link>
                </div>
          </div>
          
      </div>
    </div>
);
};

export default RegisterPage;
