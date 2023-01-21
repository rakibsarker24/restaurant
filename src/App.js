import React from 'react';
import './App.css';
import Slider from "react-slick";
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import AboutUs from './components/pages/AboutUs'
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<Service />} path="/service"/>
          <Route element={<AboutUs />} path="/about"/>
          <Route element={<Login />} path="/login"/>
          <Route element={<Registration />} path="/reg"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

