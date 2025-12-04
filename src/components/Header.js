 import { Logo_URl } from "../utils/constant"
 import { useState } from "react" 
  const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState("login")
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo_URl}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Carts</li>
            <li><button className="log-btn" onClick={()=>{isLoggedIn==="login"?setIsLoggedIn("logout"):setIsLoggedIn("login")}}>{isLoggedIn}</button></li>
          </ul>
        </div>
      </div>
    )
  }
  export default Header