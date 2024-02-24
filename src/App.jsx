import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar";   

import { BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <div className="App">

         <Navbar />

      <h1>LAB | React IronBeers</h1>

      <Routes> 
         <Route path="/" element={<HomePage />} />
          <Route path="/all-beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/add-beer" element={<AddBeerPage />} />
          <Route path="/beer-details" element={<BeerDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
