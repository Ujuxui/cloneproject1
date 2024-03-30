import "./style.css";
import ReactDOM from "react-dom/client";
import Header2 from "./Header2.jsx";
import Footer from "./Footer.jsx";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Icon from '@mui/material/Icon';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SimpleBottomNavigation from "./Bottomnavbar";

const ProductCard = ({ location, distance, dates, price, img }) => {
    return (
      <>
        <div className="w-max">
          <div className="bg-cover h-72 w-72 rounded-2xl flex justify-end" style={{backgroundImage:`url(${img})`}}><FavoriteTwoToneIcon className="heart-icon mt-4 mr-4"/></div>
          {/* <img src={img} alt="PlaceImg" className=" h-72 w-72 rounded-2xl" /> */}
          <h1 className="text-s font-medium">{location}</h1>
          <p className="text-xs text-slate-500">{distance}</p>
          <p className="text-xs text-slate-500">{dates}</p>
          <p className="text-s mb-11">{price}</p>
        </div>

      </>
    );
  };
  
  const ProductDataSet = [
    {
      id: "1",
      location: "Vadholi, India",
      distance: "587 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 12,036 night",
      img: "https://ik.imagekit.io/jkay012024/air/air10.webp?updatedAt=1710930834240",
    },
    {
      id: "2",
      location: "Parra, India",
      distance: "540 kilometres away",
      dates: "13 - 18 Mar",
      price: "₹ 1,09,553 night",
      img: "https://ik.imagekit.io/jkay012024/air/air2.webp?updatedAt=1710220229688",
    },
    {
      id: "3",
      location: "Colva, India",
      distance: "539 kilometres away",
      dates: "1 - 6 Apr",
      price: "₹ 3,424 night",
      img: "https://ik.imagekit.io/jkay012024/air/air3.webp?updatedAt=1710220229635",
    },
    {
      id: "4",
      location: "Marna, India",
      distance: "538 kilometres away",
      dates: "26 - 31 Mar",
      price: "₹ 47,244 night",
      img: "https://ik.imagekit.io/jkay012024/air/air4.webp?updatedAt=1710220229684",
    },
    {
      id: "5",
      location: "Igatpuri, India",
      distance: "564 kilometres away",
      dates: "17 - 22 Mar",
      price: "₹ 61,900 night",
      img: "https://ik.imagekit.io/jkay012024/air/air5.webp?updatedAt=1710220229655",
    },
    {
      id: "6",
      location: "Calangute, India",
      distance: "541 kilometres away",
      dates: "2 - 7 Apr",
      price: "₹ 2,73,882 night",
      img: "https://ik.imagekit.io/jkay012024/air/air6.webp?updatedAt=1710220229660",
    },
    {
      id: "7",
      location: "Assagao, India",
      distance: "538 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 55,000 night",
      img: "https://ik.imagekit.io/jkay012024/air/air7.webp?updatedAt=1710370577904",
    },
    {
      id: "8",
      location: "Calangute, India",
      distance: "542 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 7,760 night",
      img: "https://ik.imagekit.io/jkay012024/air/air8.jpeg?updatedAt=1710220229673",
    },
    {
      id: "9",
      location: "Parra, India",
      distance: "540 kilometres away",
      dates: "13 - 18 Mar",
      price: "₹ 1,09,553 night",
      img: "https://ik.imagekit.io/jkay012024/air/air11.webp?updatedAt=1710930834292",
    },
    {
      id: "10",
      location: "Colva, India",
      distance: "539 kilometres away",
      dates: "1 - 6 Apr",
      price: "₹ 3,424 night",
      img: "https://ik.imagekit.io/jkay012024/air/air13.jpg?updatedAt=1710930834562",
    },
    {
      id: "11",
      location: "Marna, India",
      distance: "538 kilometres away",
      dates: "26 - 31 Mar",
      price: "₹ 47,244 night",
      img: "https://ik.imagekit.io/jkay012024/air/air12.webp?updatedAt=1710930834568",
    },
    {
      id: "12",
      location: "Calangute, India",
      distance: "542 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 7,760 night",
      img: "https://ik.imagekit.io/jkay012024/air/air14.webp?updatedAt=1710930834304",
    },
    {
      id: "13",
      location: "Vadholi, India",
      distance: "587 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 12,036 night",
      img: "https://ik.imagekit.io/jkay012024/air/air1.webp?updatedAt=1710220229491",
    },
    {
      id: "14",
      location: "Parra, India",
      distance: "540 kilometres away",
      dates: "13 - 18 Mar",
      price: "₹ 1,09,553 night",
      img: "https://ik.imagekit.io/jkay012024/air/air2.webp?updatedAt=1710220229688",
    },
    {
      id: "15",
      location: "Colva, India",
      distance: "539 kilometres away",
      dates: "1 - 6 Apr",
      price: "₹ 3,424 night",
      img: "https://ik.imagekit.io/jkay012024/air/air3.webp?updatedAt=1710220229635",
    },
    {
      id: "16",
      location: "Marna, India",
      distance: "538 kilometres away",
      dates: "26 - 31 Mar",
      price: "₹ 47,244 night",
      img: "https://ik.imagekit.io/jkay012024/air/air4.webp?updatedAt=1710220229684",
    },
    {
      id: "17",
      location: "Igatpuri, India",
      distance: "564 kilometres away",
      dates: "17 - 22 Mar",
      price: "₹ 61,900 night",
      img: "https://ik.imagekit.io/jkay012024/air/air5.webp?updatedAt=1710220229655",
    },
    {
      id: "18",
      location: "Calangute, India",
      distance: "541 kilometres away",
      dates: "2 - 7 Apr",
      price: "₹ 2,73,882 night",
      img: "https://ik.imagekit.io/jkay012024/air/air6.webp?updatedAt=1710220229660",
    },
    {
      id: "19",
      location: "Assagao, India",
      distance: "538 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 55,000 night",
      img: "https://ik.imagekit.io/jkay012024/air/air7.webp?updatedAt=1710370577904",
    },
    {
      id: "20",
      location: "Calangute, India",
      distance: "542 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 7,760 night",
      img: "https://ik.imagekit.io/jkay012024/air/air8.jpeg?updatedAt=1710220229673",
    },
    {
      id: "21",
      location: "Vadholi, India",
      distance: "587 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 12,036 night",
      img: "https://ik.imagekit.io/jkay012024/air/air1.webp?updatedAt=1710220229491",
    },
    {
      id: "22",
      location: "Parra, India",
      distance: "540 kilometres away",
      dates: "13 - 18 Mar",
      price: "₹ 1,09,553 night",
      img: "https://ik.imagekit.io/jkay012024/air/air2.webp?updatedAt=1710220229688",
    },
    {
      id: "23",
      location: "Colva, India",
      distance: "539 kilometres away",
      dates: "1 - 6 Apr",
      price: "₹ 3,424 night",
      img: "https://ik.imagekit.io/jkay012024/air/air3.webp?updatedAt=1710220229635",
    },
    {
      id: "24",
      location: "Marna, India",
      distance: "538 kilometres away",
      dates: "26 - 31 Mar",
      price: "₹ 47,244 night",
      img: "https://ik.imagekit.io/jkay012024/air/air4.webp?updatedAt=1710220229684",
    },
    {
      id: "25",
      location: "Parra, India",
      distance: "540 kilometres away",
      dates: "13 - 18 Mar",
      price: "₹ 1,09,553 night",
      img: "https://ik.imagekit.io/jkay012024/air/air11.webp?updatedAt=1710930834292",
    },
    {
      id: "26",
      location: "Colva, India",
      distance: "539 kilometres away",
      dates: "1 - 6 Apr",
      price: "₹ 3,424 night",
      img: "https://ik.imagekit.io/jkay012024/air/air13.jpg?updatedAt=1710930834562",
    },
    {
      id: "27",
      location: "Marna, India",
      distance: "538 kilometres away",
      dates: "26 - 31 Mar",
      price: "₹ 47,244 night",
      img: "https://ik.imagekit.io/jkay012024/air/air12.webp?updatedAt=1710930834568",
    },
    {
      id: "28",
      location: "Calangute, India",
      distance: "542 kilometres away",
      dates: "12 - 17 Mar",
      price: "₹ 7,760 night",
      img: "https://ik.imagekit.io/jkay012024/air/airnvosnv.webp?updatedAt=1710930834227",
    },
    {
      id: "29",
      location: "Arpora, India",
      distance: "541 kilometres away",
      dates: "1 - 7 Apr",
      price: "₹ 4,500 night",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-45662560/original/0739b384-7834-45a6-ac1c-d12f412052a1.jpeg?im_w=720",
    },
    {
      id: "30",
      location: "Siolim, India",
      distance: "535 kilometres away",
      dates: "2 - 7 Apr",
      price: "₹ 5,000 night",
      img: "https://a0.muscache.com/im/pictures/e3df13b9-9391-45df-8f0f-5d726e2c017a.jpg?im_w=720",
    },
    {
      id: "31",
      location: "South Goa, India",
      distance: "562 kilometres away",
      dates: "2 - 10 Mar",
      price: "₹ 4,860 night",
      img: "https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=720",
    },
    {
      id: "32",
      location: "Calangute, India",
      distance: "554 kilometres away",
      dates: "21 - 27 Mar",
      price: "₹ 8,600 night",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-617063718566302384/original/717a4c2d-e8a9-4798-8378-0d878e0ed56e.jpeg?im_w=720",
    },
  ];
  
  const ProductLayout2 = () => {
    return ProductDataSet.length === 0 ? (
      <ShimmerSimpleGallery card imageHeight={300} caption />
    ) : (
      <>
      <Header2 />
        <div className="2xl:container mt-5">
          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ProductDataSet.map((e) => {
              console.log(e);
              return (
                <ProductCard
                  key={e.id}
                  location={e.location}
                  distance={e.distance}
                  dates={e.dates}
                  price={e.price}
                  img={e.img}
                />
              );
            })}
          </div>
        </div>
          <div className="text-center">
          <p className="text-lg font-medium mt-12">
            Continue exploring amazing pools
          </p>
          <button className="showmore bg-black text-white font-semibold rounded-lg mt-5 mb-14 text-center px-4 py-4">
            Show more
          </button>
        </div>
        <SimpleBottomNavigation />
      </>
    );
  };
  
export default ProductLayout2;