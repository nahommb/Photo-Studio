
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function Header(){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return <div className="header">
             <div className="head-container">
              <div>Logo</div>
               <div className="head-container-right">
               
               <div>
               <Link to={'/detail'}  style={{textDecoration:'none'}}> Add A Property</Link>
               </div>
                 <div className='lang-cont'>
                <Button onClick={handleClick} style={{color:"red"}}>
                 Eng(US)
                </Button>
                 </div>
               
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
                >
                <MenuItem onClick={handleClose}>Eng</MenuItem>
                <MenuItem onClick={handleClose}>Amh</MenuItem>
                </Menu>
               
               </div>
               
               </div>
          </div>
}
export default Header;