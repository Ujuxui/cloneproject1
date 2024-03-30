import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./style.css"; 


function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottomnav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
        <BottomNavigationAction label="Wishlists" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Log in" icon={<AccountCircleIcon />} />
      </BottomNavigation>
      </div>
  );
}

export default SimpleBottomNavigation;