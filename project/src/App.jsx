import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Order from "./Components/Order";
import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Order" element={<Order/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
