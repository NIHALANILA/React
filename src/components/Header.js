 import { Logo_URl } from "../utils/constant"
  const Header=()=>{
    let logBtn="logout"
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
            <li><button className="log-btn" onClick={()=>{logBtn="login";console.log(logBtn)}}>{logBtn}</button></li>
          </ul>
        </div>
      </div>
    )
  }
  export default Header