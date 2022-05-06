import React from "react";

// Import Pages
import {
  Home,
  Error,
  About,
  SearchPage,
  Favorites,
  SingleMovie,
} from "./Pages";

// Import Components
import { Navbar, Footer } from "./Components/";
// Import React Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
