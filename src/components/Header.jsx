import React from 'react'
import './Header.css';
// import {GiHamburgerMenu} from 'react-icons/gi';
// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  
  return (
    <div className='Container'>
    
        <a>
          <label>FURY CARS</label>
        </a>
    
    <div className="menu">
        <a href='#'>TESLA</a>
        <a href='#'>KIA</a>
        <a href='#'>GM</a>
        <a href='https://www.hondacarindia.com/'>HONDA</a>
        <a href='#'>BMW</a>
        <a href='#'>JAGUAR</a>
        <a href='#'>BUGATTI</a>
        <a href='#'>MINI</a>
    </div>
    <div className="rightmenu">
      <a href='#'>Shop</a>
      <a href='#'>Account</a>
      {/* <p className='custommenu'><GiHamburgerMenu /></p> */}
      {/* <MenuIcon/> */}
      {/* <button className="custommenu">Menu</button> */}
    </div>
    </div>
  )
}

export default Header