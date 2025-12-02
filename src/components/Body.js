import ToyCard from "./ToyCard";
import toyList from "../utils/mockdata";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{
  const [toyListState,setToyListState]=useState(toyList)
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
if(toyListState.length===0){ 
  return <Shimmer/>
}
  }
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{ let toyList2=toyListState.filter((item)=>Number(item.rating.rate)>=4.5);setToyListState(toyList2)}}>
          filter</button></div>
        <div className="card-container"> 
          {toyListState.map((item)=>( <ToyCard key={item.id}toyData={item}/> ))}
         
          
        </div>
      </div>
    )
  }
  export default Body;