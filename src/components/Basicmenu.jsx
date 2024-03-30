import * as React from 'react';
import "./style.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className="basicmenu px-2 py-2 border rounded-full">
        <MenuRoundedIcon className="mr-1"/>
        <AccountCircleRoundedIcon />
        </div>
        </div> 
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
        <MenuItem onClick={handleClose}>Log in</MenuItem>
        <hr/>
        <MenuItem onClick={handleClose}>Airbnb your home</MenuItem>
        <MenuItem onClick={handleClose}>Help Centre</MenuItem>
      </Menu>
      </div>
    
  );
}

export default BasicMenu;