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
  export default ToyCard