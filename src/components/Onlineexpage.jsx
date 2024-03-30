import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import BasicMenu from "./Basicmenu";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { topsellers, topsellers1, topsellers2, topsellers3  } from "../api/topsellers";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
};


const OnlineexPage = () => {
    return (
    <>
    <div className="2xl:container mt-4 mb-4">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 h-[100%]">
          <div className="w-[100%] flex justify-start items-center">          
            <Link to="/"><img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="airbnb"
              className="navbar-logo w-24 h-auto contrast-150"
            /></Link>
          </div>
          <div className="navbar nav-menu w-[100%] flex justify-center items-center space-x-8 h-[100%] text-lg">
            
          </div>
          <div className="w-[100%] flex justify-end items-center">
            <div className="airbnbyourhome font-medium ml-10">Airbnb your home</div>
            <LanguageRoundedIcon className="globe-icon text-slate-800 ml-5 mr-5" />
            <div className="">
              <BasicMenu className=" shadow-xl" />
            </div>
          </div>
        </div>
      </div>
      <hr/>

    <div className="font-bold text-4xl mt-6 ml-20 flex items-center justify-between">New this week
    <div className="space-x-1 mr-24">
      <KeyboardArrowLeftOutlinedIcon className="border rounded-full opacity-35 mr-2" />
      <KeyboardArrowRightOutlinedIcon className="border rounded-full" /></div></div>
    <div className="flex ml-20 mt-8 space-x-5 overflow-x-hidden">
    <div className="aa"><p className=" text-white text-xs ml-6 mt-6">Collection</p>
    <p className="text-white text-2xl font-semibold ml-6">Most popular</p>
    <p className="text-white text-2xl font-semibold ml-6">around the world</p>
      <p className="text-sm font-medium ml-6 mt-40 px-4 py-2 bg-white rounded-lg inline-block">Show all</p> </div>
    <div className="bb"><p className=" text-white text-xs ml-6 mt-6">Collection</p>
    <p className="text-white text-2xl font-semibold ml-6">Easy for itinerary</p>
    <p className="text-white text-2xl font-semibold ml-6">planning</p>
    <p className="box2 text-sm font-medium ml-6 mt-40 px-4 py-2 bg-white rounded-lg inline-block">Show all</p> </div>
    <div className="cc"><p className=" text-white text-xs ml-6 mt-6">Collection</p>
    <p className="text-white text-2xl font-semibold ml-6">Great for team</p>
    <p className="text-white text-2xl font-semibold ml-6">building</p>
      <p className="text-sm font-medium ml-6 mt-40 px-4 py-2 bg-white rounded-lg inline-block">Show all</p> </div>
    </div>
    <div className="flex space-x-3 text-wrap">
      <ul className="flex mt-6 ml-20 space-x-2 font-thin">
        <li className="border px-3 py-1 rounded-full">Dates</li>
        <li className="border px-3 py-1 rounded-full">Group size</li>
        <li className="border px-3 py-1 rounded-full">More filters</li>
        <hr/>
        <hr className="separator"/>
        <hr/>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Great for groups</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Family-friendly</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Animals</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Arts&writing</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Baking</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Cooking</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Dance</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Drinks</li>
        <li className="px-3 py-1 rounded-full mr-10 bg-slate-100">Entertainment</li>
        </ul>
        <KeyboardArrowRightOutlinedIcon className="mt-7 border rounded-full"/>
        </div>


    <div className="font-medium text-2xl mt-14 flex items-center justify-between">
    <span className="ml-20">Plan a trip with help from local Hosts around the world</span>
    <div className="space-x-1 mr-24"><span className="text-sm font-semibold cursor-pointer underline">
      Show(10)</span>
      <KeyboardArrowLeftOutlinedIcon className="border rounded-full" />
      <KeyboardArrowRightOutlinedIcon className="border rounded-full" /></div></div>
    <div className="filter-div object-contain flex flex-wrap ml-20 space-x-5 h-auto">
    {topsellers.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                  <div className="relative">
                  <img className="series1 mt-4" key={i} src={item.imgSrc} />
                  <div className="absolute top-0 right-0 p-2">
            <FavoriteTwoToneIcon className="heart-icon mt-6 mr-2"/>
      </div>
                  <div className="absolute bg-white bg-opacity-75 mt-2">
        <p className="text-sm font-light text-gray-500"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>{item.rating}</p>
        <h1 className="mt-0.5 font-light text-base text-gray-700 line-clamp-2">{truncateText(item.description, 46)}</h1> 
        <div className="flex"><p className="mt-0.5 text-base font-semibold">{item.price}</p><p className="mt-0.5 ml-1 text-base font-normal">/person</p></div>
        </div></div>
      </div>
    ))}
    </div>

    
    <div className="font-medium text-2xl  mt-44 flex items-center justify-between">
    <span className="ml-20">Top sellers</span>
    <div className="space-x-1 mr-24"><span className="text-sm font-semibold cursor-pointer underline">
      Show(87)</span>
      <KeyboardArrowLeftOutlinedIcon className="border rounded-full" />
      <KeyboardArrowRightOutlinedIcon className="border rounded-full" /></div></div>
        
        <div className="filter-div object-contain flex flex-wrap ml-20 space-x-5 h-auto">
    {topsellers1.map((item, i) => (
      <div key={i} className="flex flex-col items-center">
      <div className="relative">
                 <img className="series1 mt-4" key={i} src={item.imgSrc} />
                 <div className="absolute top-0 right-0 p-2">
            <FavoriteTwoToneIcon className="heart-icon mt-6 mr-2"/>
      </div>
                 <div className="absolute bg-white bg-opacity-75 mt-2">
        <p className="text-sm font-light text-gray-500"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>{item.rating}</p>
        <h1 className="mt-0.5 font-light text-base text-gray-700 line-clamp-2">{truncateText(item.description, 46)}</h1> 
        <div className="flex">
          <p className="mt-0.5 text-base font-semibold">{item.price}</p><p className="mt-0.5 ml-1 text-base font-normal">/person</p></div>
        </div></div>
      </div>
    ))}
    </div> 


    
    <div className="mt-48 ml-20 flex font-semibold text-2xl items-center justify-between"><span>Starting in the next 6 hours</span>
    <div className="space-x-1 mr-24"><span className="text-sm font-semibold cursor-pointer underline">
      Show(40)</span>
      <KeyboardArrowLeftOutlinedIcon className="border rounded-full" />
      <KeyboardArrowRightOutlinedIcon className="border rounded-full" /></div></div>
    <div className="bigcontainer flex mt-4 ml-20 space-x-4">
    <div className="container border rounded-lg flex">
    <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1684589-media_library/original/d9663162-f340-414f-ba24-3671a318196b.jpeg?im_w=720" className="ml-3 mt-2 h-40 w-auto rounded-lg"></img>
    <div className="ml-4 mt-4"><p className="mt-4 text-sm font-thin"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>4.97 (253) . United States</p>
    <p>How to Caricature</p>
    <p className="font-medium">From Rs. 1,667/person</p>
    <div className="flex mt-2 space-x-2"><p className="text-xs font-medium px-2 py-2 border border-thick rounded-xl">2:30 pm</p><p className="text-xs font-medium px-2 py-2 border border-thick rounded-xl">7:30 pm</p>
    </div>
    </div>
    <FavoriteBorderOutlinedIcon className="likeicon mt-3 mr-4"/>
    </div>
    <div className="container border rounded-lg flex">
    <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2978135-media_library/original/e6673cc8-2b90-4589-8dfd-4064e86a3868.jpeg?im_w=720" className="ml-3 mt-2 h-40 w-auto rounded-lg"></img>
    <div className="ml-4 mt-4"><p className="mt-4 text-sm font-thin"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>4.91 (324) . India</p>
    <p>Walk in to the Taj Mahal with a professional Tour Guide</p>
    <p className="font-medium">From Rs. 1,200/person</p>
    <div className="flex mt-2 space-x-2"><p className="text-xs font-medium px-2 py-2 border border-thick rounded-xl">3:00 pm</p><p className="text-xs font-medium px-2 py-2 border border-thick rounded-xl">4:00 pm</p>
    </div>
    </div>
    <FavoriteBorderOutlinedIcon className="likeicon mt-3 mr-4"/>
    </div>
    <div className="container border rounded-lg flex">
    <img src="https://a0.muscache.com/im/pictures/72bccdea-3748-4256-8e2c-390f6bbd0a54.jpg?im_w=720" className="ml-3 mt-2 h-40 w-auto rounded-lg"></img>
    <div className="ml-4 mt-5"><p className="mt-4 text-sm font-thin"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>4.98 (1,548) . United Kingdom</p>
    <p>Secrets of Magic</p>
    <p className="font-medium">From Rs.2,107/person</p>
    <div className="flex mt-2 space-x-2"><p className="text-xs font-medium px-2 py-2 border border-thick rounded-xl">4:00 pm</p><p className="text-xs font-medium px-2 py-2 border border-thick rounded-xl">5:30 pm</p>
    </div>
    </div>
    <FavoriteBorderOutlinedIcon className="likeicon mt-3 mr-4"/>
    </div>
    </div>





    <div className="font-medium text-2xl mt-24 flex items-center justify-between">
    <span className="ml-20">      
     Make plans this weekend</span>
    <div className="space-x-1 mr-24"><span className="text-sm font-semibold cursor-pointer underline">
      Show(83)</span>
      <KeyboardArrowLeftOutlinedIcon className="border rounded-full" />
      <KeyboardArrowRightOutlinedIcon className="border rounded-full" /></div></div>
  
        <div className="filter-div object-contain flex flex-wrap ml-20 space-x-5 h-auto">
    {topsellers2.map((item, i) => (
      <div key={i} className="flex flex-col items-center">
      <div className="relative">
                  <img className="series1 mt-4" key={i} src={item.imgSrc} />
                  <div className="absolute top-0 right-0 p-2">
            <FavoriteTwoToneIcon className="heart-icon mt-6 mr-2"/>
      </div>
                  <div className="absolute bg-white bg-opacity-75 mt-2">
                  <p className="text-sm font-light text-gray-500"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>{item.rating}</p>
        <h1 className="mt-0.5 font-light text-base text-gray-700 line-clamp-2">{truncateText(item.description, 46)}</h1> 
        <div className="flex">
          <p className="mt-0.5 text-base font-semibold">{item.price}</p><p className="mt-0.5 ml-1 text-base font-normal">/person</p></div>
        </div></div>
      </div>
    ))}
    </div> 


    
    <div className="font-medium text-2xl  mt-44 flex items-center justify-between">
    <span className="ml-20">Great for groups</span>
    <div className="space-x-1 mr-24"><span className="text-sm font-semibold cursor-pointer underline">
      Show(160)</span>
      <KeyboardArrowLeftOutlinedIcon className="border rounded-full" />
      <KeyboardArrowRightOutlinedIcon className="border rounded-full" /></div></div>
    
        <div className="filter-div w-[80%] object-contain flex ml-20 space-x-5 h-auto">
    {topsellers3.map((item, i) => (
      <div key={i} className="flex flex-col items-center">
      <div className="relative">
                  <img className="series1 mt-4" key={i} src={item.imgSrc} />
                  <div className="absolute top-0 right-0 p-2">
            <FavoriteTwoToneIcon className="heart-icon mt-6 mr-2"/>
      </div>
                  <div className="absolute bg-white bg-opacity-75 mt-2">
                  <p className="text-sm font-light text-gray-500"><StarIcon className="mb-1 text-gray-800" style={{ fontSize: 'small' }}/>{item.rating}</p>
        <h1 className="mt-0.5 font-light text-base text-gray-700 line-clamp-2">{truncateText(item.description, 46)}</h1> 
        <div className="flex">
          <p className="mt-0.5 text-base font-semibold">{item.price}</p><p className="mt-0.5 ml-1 text-base font-normal">/person</p></div>
        </div></div>
      </div>
    ))}
    </div> 
    <div className="text-center mt-40">
    <button className="loadmore bg-black opacity-75 text-white font-semibold rounded-lg mt-5 mb-14 text-center px-6 py-4">
          Load more
        </button>    </div>
    </>
   )
  }


export default OnlineexPage;