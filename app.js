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
    console.log(props)
    return(
   <div className="toy-card">
        <img className="toy-img" src="https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg"></img>
        <h3>{props.toyName}</h3>
        <h3>toyPrice</h3>
        <h3>toyRating</h3>
      </div>
    )
  }
  const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="card-container">
          <ToyCard toyName="car" toyPrice="25" toyRating="4"/>
          <ToyCard/>
          <ToyCard/>
          <ToyCard/>
          <ToyCard/>
          <ToyCard/>
          <ToyCard/>
          <ToyCard/>
          <ToyCard/>
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