import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  return(  
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" onClick={()=>{navigate('/')}}/>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a className="text-white text-base text-center mx-2 cursor-pointer" href="https://coinmarketcap.com/charts/" target={"_blank"}>Market</a>
        <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={()=>{navigate(`/Transactions`)}}>Transactions</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={()=>{navigate(`/Services`)}}>Services</p>
      </div>
    </div>


    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />


  </div>
);
}
export default Footer;
