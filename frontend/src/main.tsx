import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from 'react-toastify';

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
        <ToastContainer autoClose={1000}/>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
