import React from "react";

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailspage from "./pages/Detailspage";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />;
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/:id" element={<Detailspage />} />
        <Route exact path="/addcart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
