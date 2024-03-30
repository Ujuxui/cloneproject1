import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Icon from '@mui/material/Icon';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductLayout from "./components/ProductLayout";
import ProductLayout2 from "./components/Experiences.jsx";
import OnlineexPage from "./components/Onlineexpage";
import Error from "./components/Error";




const AppLayout = () => {
  return (
    <>     
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement: <Error/>,
      children: [
        {
          path:"/",
          element:<ProductLayout/>,
         },   
   {
    path:"/experiences",
    element:<ProductLayout2/>,
   },
   {
    path:"/onlineexperiences",
    element:<OnlineexPage/>,
   }
  ]
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

