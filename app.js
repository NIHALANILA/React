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
   &banner
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

const Card=({props})=>{
  const bookData= props
  return(
    <div className="card">
      <img src="https://dcbookstore.com/uploads/product/images/3318505214542-Qabar-Final.jpg" className="card-img"  alt=""/>
      <h4>{Title}</h4>
      <h4>{Author}</h4>
      <h4>{Price}</h4>
      <button className="card-button">View Details</button>
    </div>
  
  )
}

const bookObj={
  data: {
    books: [
      {
        id: "b001",
        title: "Manju",
        author: "M.T. Vasudevan Nair",
        coverImage:
          "https://dcbookstore.com/uploads/product/images/3346504213727-Manju-Final.jpg",
        price: 90,
        rating: 4.5,
      }]}}

const Body=()=>{
  return(
    <div className="body">
      <div className="banner">
        <img src="https://dcbookstore.com/uploads/homeslider/images/4864107377154-Rush-Hour-Banner.jpg"/>
      </div>
      <div className="cardcontainer">
        <Card Title="manju" Author="MT" Price="90"/>
        <Card Title="khasakinte" Author="ov" Price="900"/>
        <Card Title="manju" Author="MT" Price="90"/>
        
        
      </div>
      
    </div>
  )
}

const Shoplayout=()=>{
  
  return(
  <div className="shopMain">
    {Header()}
    {Body()}
  </div>)
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Shoplayout/>)