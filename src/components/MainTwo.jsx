
import "../styles/MainTwo.css";
import Buton from "./Buton";




const MainTwo = ({name, img, width="350px", height= "350px"}) => {
  return (
    <div className="container">
      <div className="cont">
        
        <h1>{name}</h1>    
        <img src={img} alt={name} style={{ width: width, height: height }} />    
          
        <Buton />

      </div>      
    </div>
  )
}

export default MainTwo

