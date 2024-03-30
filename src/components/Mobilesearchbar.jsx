import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function MobileSearchBar() {
  return (
    <>
  <div className="mobile-search-bar h-15 mx-auto border bg-white shadow-lg rounded-full py-2">
    <SearchRoundedIcon className="ml-3 mt-2" />
    <div className="grid">
                <span className="text-base font-medium ml-3">Anywhere</span>
                <span className="ml-3 text-xs text-gray-500">
                  Any week . Add guests
                </span>
                </div>
              </div>
              </>
  )          
              
}
export default MobileSearchBar;