import "./NavbarStyles.css";
// import { useState } from "react";
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const [click, setClick] = useState(false) //This is a hook that will help you to toggle the state of the hamburger menu
    const handleClick = () => setClick(!click) //This is a function that will help you to toggle the state of the hamburger menu
  

  return (
    <div className="header">
        <Link to={"/"}>
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to={"/"}>Home</Link>

            </li>

            <li>
                <Link to={"/about"}>About</Link>
            </li>

            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>

            <li>

                <Link to={"/project"}>Project</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>

        {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}

            
            
        </div>
    </div>
  )
}

export default Navbar;
