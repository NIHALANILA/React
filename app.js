import React from "react";
import ReactDOM from 'react-dom/client'
import "./style.css";
/*
* header
   &logo
   &navitems
    #home
    #category
    #usericon
    #wishlist
    #cart
* body
   &searchbar
   &card container
    #card
*footer
 &motto
 &links
 &about the shop

*/
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">BookD.com</div>
        <ul className="nav-left">
          <li>Home</li>
          <li>Category</li>
        </ul>
      </div>

      <div className="header-center">
        <input type="search" placeholder="Search books..." />
      </div>

      <div className="header-right">
        <ul className="nav-right">
          <li>Wishlist</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const Shoplayout=()=>{
  
  return(
  <div className="shopMain">
    {Header()}
  </div>)
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Shoplayout/>)