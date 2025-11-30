import ToyCard from "./ToyCard";
import toyList from "../utils/mockdata";


const Body=()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="card-container">
          {toyList.map((item)=>( <ToyCard key={item.id}toyData={item}/> ))}
         
          
        </div>
      </div>
    )
  }
  export default Body;