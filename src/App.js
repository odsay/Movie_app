import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/movie-detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;