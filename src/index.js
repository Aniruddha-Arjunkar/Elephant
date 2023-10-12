import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import './index.css';
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Home from "./view/home";
import About from "./view/about";
import Contact from "./view/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  ]);
root.render(
  <>
  <Navbar/>
  <RouterProvider router={router}/>
  <Footer/>
  </>
);


