import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./view/home";
import About from "./view/about";
import Contact from "./view/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  <Footer/>
  </>
);


