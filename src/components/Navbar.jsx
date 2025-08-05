import React from "react";
import { Link } from "react-scroll";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { RainbowButton } from '../components/magicui/rainbow-button';
import { NavLink } from "react-router-dom";
import icon from "../assets/icons.png"




const Navbar = () => {
  return (
    <div className="h-[80px] w-[100vw] flex justify-center items-center p-1 fixed  text-white text-shadow-lg z-99 custom-font2 ">
      <div className="h-[80%] w-[85%] flex justify-between items-center gap-[4rem] text-[17px] font-semibold rounded-4xl ">
        <div className="h-[85%] w-[100%] p-[1rem] flex justify-between items-center gap-2 bg-[#000000d6] rounded-4xl md:w-[70%] ">
          <div className="flex justify-center items-center gap-[1px]">
            <img
              src={icon}
              alt="Call Icon"
              className="h-[55px] w-[55px]"
            />
            <h3 className="custom-font text-[1.6rem] [text-shadow:_4px_4px_20px_rgba(0,0,0,0.67)] font-semibold">
              MetaMeet
            </h3>
          </div>
          {/*//! for mobile screen the hamburger buuton */}
          <button className=" md:hidden">
               <MenuTwoToneIcon fontSize="large"></MenuTwoToneIcon>
          </button>
       

          <div className="h-[80%] w-auto p-[1rem]  justify-center items-center gap-[2rem] text-[16px]  rounded-4xl bg-[#000000] text-[#b5b5b5] hidden md:flex ">
            
            <NavLink to="/" spy={true}smooth={true}offset={50}duration={500} className=" transition-all duration-300 hover:text-white">Home</NavLink>
            <Link to="about"spy={true}smooth={true}offset={50}duration={500} className=" transition-all duration-300 hover:text-white">About</Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className=" transition-all duration-300 hover:text-white">Contact</Link>
          </div>
        </div>
        {/*//! signup login */}
        <div className=" h-[100%]  hidden  justify-center items-center gap-[1rem] p-[.7rem] rounded-4xl lg:flex ">

          <RainbowButton  className="h-[100%] w-[90px] text-md">Login</RainbowButton>
    
          <RainbowButton className="h-[100%] w-[90px] text-md">Signup</RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
