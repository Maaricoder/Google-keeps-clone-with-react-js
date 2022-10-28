import React from "react";
import { VscAccount, VscListFlat } from "react-icons/vsc";
import keepsimg from '../img/keeps.png'


function Navbar() {
  return (
    <>
      <div className="main flex justify-between items-center container mx-auto h-20 ">
        <div className="right flex justify-start items-center">
          <li className="list-none py-5 mx-3 font-semibold cursor-pointer  hover:underline ">
            <img className="h-16" src={keepsimg}></img>
            
          </li>
          <li className="list-none py-5 mx-3 font-semibold cursor-pointer  hover:underline ">
            {/* <img className="h-10" src={keepsimg}></img> */}
            Google Keeps
          </li>
        
        </div>
        <div className="left flex justify-end ">
          <li className="list-none py-5 mx-3 font-semibold cursor-pointer  hover:underline ">
            Gmail
          </li>
          <li className="list-none py-5 mx-3  font-semibold cursor-pointer hover:underline ">
            Image
          </li>
          {/* <li> <BsBorderAll></BsBorderAll></li> */}
          <li className="list-none py-5 mx-3 font-semibold cursor-pointer  hover:underline ">
            <VscListFlat size={25} />
          </li>
          <li className="list-none py-5 mx-3  font-semibold cursor-pointer hover:underline ">
            {" "}
            <VscAccount size={25} />
          </li>
        </div>

       
      </div>
      {/* <div className="logo   ">
          <img
            className="h-48 mx-auto"
            src="https://media.wired.co.uk/photos/606da4ae938ecee6e930e9c3/master/w_1600%2Cc_limit/google-logo_2.jpg"
            alt=""
          />
        </div> */}
      
     
    </>
  );
}

export default Navbar;