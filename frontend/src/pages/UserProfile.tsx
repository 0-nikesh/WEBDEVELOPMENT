import React, { FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import api from "../api/api";
import { isAxiosError } from "axios";
import Navigation from "../components/Navigation";
import { FaRegEdit } from "react-icons/fa";
import Footer from "../components/Footer";

function UserProfile() {
  const userContext = useContext(UserContext);

  const [id, setId] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (userContext?.token) {
      // window.location.reload();

      getUser(userContext.token);
    }
  }, [userContext?.token]);

  function getUser(token: string) {
    api
      .get("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setId(res.data.id);
        setEmail(res.data.email);
        setUsername(res.data.username);
        setAddress(res.data.address); // Update address as well
      })
      .catch((e) => {
        if (isAxiosError(e)) {
          console.log(e.response);
        }
        console.log(e);
      });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setEmail(val);
  }

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setUsername(val);
  }

  function handleAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setAddress(val);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      address: address,
    };

    api
      .patch(`/api/user/profile/update/${id}`, user, {
        headers: {
          Authorization: `Bearer ${userContext?.token}`,
        },
      })
      .then(() => {
        // Optionally, you can refresh the user data after updating
        getUser(userContext.token);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  }

  return (
    <main className="bg-sky-50">
      <Navigation />
      <h1 className="font-bold text-3xl text-center mt-8">User Profile</h1>
      <div className="container mt-12 flex justify-center">
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          type="button"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          <span>Edit</span>
          <FaRegEdit />
        </button>
      </div>
      <form
        className="flex flex-col gap-6 mt-7 mb-7 border border-gray-300 rounded px-6 py-8 container"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            disabled={!isEditing}
            onChange={handleUsernameChange}
            value={username}
            className={`input-field bg-white px-4 py-2 border border-gray-400 rounded-md`}
            type="text"
            name="username"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            disabled={!isEditing}
            onChange={handleEmailChange}
            value={email}
            className={`input-field bg-white px-4 py-2 border border-gray-400 rounded-md`}
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-bold">
            Address
          </label>
          <input
            disabled={!isEditing}
            onChange={handleAddressChange}
            value={address}
            className={`input-field bg-white px-4 py-2 border border-gray-400 rounded-md`}
            type="text"
            name="address"
          />
        </div>
        <div className="text-center">
          <button
            disabled={!isEditing}
            className={`font-bold px-4 py-2 rounded ${
              isEditing
                ? "bg-green-400 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Update
          </button>
        </div>
      </form>
      <Footer />
    </main>
  );
}

export default UserProfile;
