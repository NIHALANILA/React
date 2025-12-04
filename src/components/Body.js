import ToyCard from "./ToyCard";
import toyList from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{
  const [toyListState,setToyListState]=useState([])
   const [searchTxt,setSearchTxt]=useState("");
  useEffect(()=>{fetchData();},[]);
  const fetchData=async()=>{
try {
 const data=await fetch("https://fakestoreapi.com/products/category/electronics"
) ;
const json=await data.json()
console.log(json)
setToyListState(json)
} catch (error) {
  console.log("Error fetching toys:", error)
  
  
}

  }
  
  
 return (toyListState.length===0) ? (
  <Shimmer/>
  )

    :(
      
      <div className="body">
       
        <div className="search-filter-container"> 
          <div className="filter">
          
          <button className="filter-btn" onClick={()=>{ let toyList2=toyListState.filter((item)=>Number(item.rating.rate)>=4.5);setToyListState(toyList2)}}>
          filter</button>
          </div>
          <div className="search-container">
            <input type="text" placeholder="search" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}}></input>
            <button className="search-btn" onClick={()=>{
              console.log(searchTxt)
            }}>Search</button>
            <i className="fa fa-search"></i>
          </div>
        </div>
        
        <div className="card-container"> 
          {toyListState.map((item)=>( <ToyCard key={item.id}toyData={item}/> ))}
         
          
        </div>
      </div>
    )
  }
  export default Body;