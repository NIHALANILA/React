 import { Logo_URl } from "../utils/constant"
  const Header=()=>{
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
          </ul>
        </div>
      </div>
    )
  }
  export default Header