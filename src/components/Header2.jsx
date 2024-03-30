import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import BasicMenu from "./Basicmenu";
import { links } from "../api/imagelinks";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { Link } from "react-router-dom";
//import { SimpleBottomNavigation } from "./Bottomnavbar";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Switch from '@mui/material/Switch';
import MobileSearchBar from "./Mobilesearchbar";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked  className="mt-1" />
    </div>
  );
}




const Header2 = () => {
  return (
    <>
      <div className="mainheader 2xl:container mt-4 mb-4">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 h-[100%]">
          <div className="w-[100%] flex justify-start items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="airbnb"
              className="navbar-logo w-24 h-auto contrast-150"
            />
          </div>

          <div className="navbar nav-menu w-[100%] flex justify-center items-center space-x-8 h-[100%] text-lg">
            <div className="opacity-40"><Link to="/">Stays</Link></div>
            <div className="experiencestab"><Link to="/experiences">Experiences</Link></div>
            <div className="onexperiencestab opacity-40"><Link to="/onlineexperiences">Online Experiences</Link></div>
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
      <MobileSearchBar />
      <div>
        <div className="flex justify-center display-center mt-4 mb-6">
          <div className="searchbar w-[55%] mx-auto bg-white shadow-lg rounded-full">
            <div className="flex justify-between px-8 py-3 border-slate-900">
              <div className="flex flex-col">
                <span className="text-xs font-medium">Where</span>
                <span className="text-sm text-gray-500">
                  Search Destinations
                </span>
              </div>
              <hr className="separator"/>
              <div className="flex flex-col">
                <span className="text-xs font-medium">Date</span>
                <span className="text-sm text-gray-500">Add dates</span>
              </div>
              <hr className="separator"/>
              <div className="flex flex-col justify-start">
                <span className="text-xs font-medium">Who</span>
                <span className="text-sm text-gray-500">Add guests</span>
              </div>
              <div className="search-icon-div px-2.5 py-2 rounded-full bg-rose-500">
                <SearchRoundedIcon className="search-icon text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="2xl:container">
        <div className="w-[90%] mx-auto flex mt-4 space-x-10">
          <div
            className="filter-div w-[80%] object-contain flex overflow-x-auto overflow-y-hidden ml-10 mt-4 h-20 gap-10 opacity-60"
          >
            {links.map((item, i) => (
              <div className="icon-wrapper">
                <div className="hover:opacity-35">
                  <img className="w-max h-6" key={i} src={item.imgSrc} />
                  <p className="w-max text-wrap text-xs justify-center items-center align-center">
                    {item.label}
                  </p>
                </div> 
              </div>
            ))}
          </div>


       <KeyboardArrowRightOutlinedIcon className="border rounded-full mt-5"/>

    <div className="flex space-x-4">
          <div className="filterbox flex border rounded-lg h-12 px-3 mt-2">
            <TuneOutlinedIcon className="mt-3 mr-2" />
            <button
              className="display-end items-center text-xs font-semibold" 
              onClick={
                () => console.log("Filters clicked")
                //const filterProductData = ProductDataSet.filter((data) =>
                //return data.price< 10000;
              }
            >
              Filters
            </button>
          </div>
          <div className="filterbox1 flex border rounded-lg h-12 px-4 mt-2">
            
            <button
              className="display-end items-center text-xs font-semibold whitespace-nowrap" 
              onClick={
                () => console.log("button2 clicked")
                //const filterProductData = ProductDataSet.filter((data) =>
                //return data.price< 10000;
              }
            >
              Display total before taxes
            </button>
            <BasicSwitches />
          </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Header2;
