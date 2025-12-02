 const ToyCard=(props)=>{
    const {toyData}=props
    return(
   <div className="toy-card">
        <img className="toy-img" src={toyData.image}></img>
        <h3>{toyData.title}</h3>
        <h3>{toyData.price}</h3>
        <h3>{toyData.rating.rate}</h3>
      </div>
    )
  }
  export default ToyCard