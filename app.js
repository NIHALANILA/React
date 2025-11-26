 import React from "react";
 import ReactDOM from "react-dom/client";
 import "./style.css"
  /**
   * header
     /logo
     /nav items
   * body
     /search
     /cardcontainer
       'cards
   * footer
     /about
     /contact
   */
  const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://images.pexels.com/photos/932263/pexels-photo-932263.jpeg"/>
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
  const ToyCard=(props)=>{
    const {toyData}=props
    return(
   <div className="toy-card">
        <img className="toy-img" src={toyData.imageUrl}></img>
        <h3>{toyData.name}</h3>
        <h3>{toyData.price}</h3>
        <h3>{toyData.rating}</h3>
      </div>
    )
  }
  const toyList = [
  {
    id: 1,
    name: "Lightning Buggy",
    price: 499,
    rating: 4.6,
    imageUrl:"https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg"
  },
  {
    id: 2,
    name: "Pocket Cruiser",
    price: 899,
    rating: 4.8,
    imageUrl: "https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg"
  },
  {
    id: 3,
    name: "Unicorn Plush",
    price: 699,
    rating: 4.7,
    imageUrl: "https://images.pexels.com/photos/1522180/pexels-photo-1522180.jpeg"
  },
  {
    id: 4,
    name: "Mini Racer",
    price: 1299,
    rating: 4.5,
    imageUrl: "https://images.pexels.com/photos/3801089/pexels-photo-3801089.jpeg"
  },
  {
    id: 5,
    name: "Wooden Train",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/60671/pexels-photo-60671.jpeg"
  },
  {
    id: 6,
    name: "Pocket Racer Pro",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg"
  },
  {
    id: 7,
    name: "Turbo Tiny",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/5501994/pexels-photo-5501994.jpeg"
  },
  {
    id: 8,
    name: "Nano Racer",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/3358482/pexels-photo-3358482.jpeg"
  },
  {
    id: 9,
    name: "little boy",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/2372442/pexels-photo-2372442.jpeg"
  },
  {
    id: 10,
    name: "Kids Puzzle Set",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/2431403/pexels-photo-2431403.jpeg"
  },
  {
    id: 11,
    name: "Kids Puzzle Set",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/104348/pexels-photo-104348.jpeg"
  },
  {
    id: 12,
    name: "Kids Puzzle Set",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/4491720/pexels-photo-4491720.jpeg"
  },
  {
    id: 13,
    name: "Kid Break",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/1648419/pexels-photo-1648419.jpeg"
  },
  {
    id: 14,
    name: "Lil’ Turbo Truck",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/2527931/pexels-photo-2527931.jpeg"
  },
  {
    id: 15,
    name: "Kid Storm",
    price: 299,
    rating: 4.2,
    imageUrl: "https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg"
  }
  
];


  const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="card-container">
          {toyList.map((ind)=>( <ToyCard toyData={ind}/> ))}
         
          
        </div>
      </div>
    )
  }
  const AppLayout=()=>{
    return(
      <div>
       <Header/>
       <Body/>
       
      </div>
       
      
      
    )

  }
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)