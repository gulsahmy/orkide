

import "../styles/Orkide.css"
import Desenli from "../images/desenli.jpg"
import Turuncu from "../images/turuncu.jpg"
import Mor from "../images/mor.jpg"
import Sarı from "../images/sarı.jpg"
import Mavi from "../images/mavi.jpg"


const Orkide = () => {
  return (
    <div className="wrapper">
      <div className="images">

        <img className="img" src= {Desenli} alt="" /> 
        <img className="img" src= {Turuncu} alt="" />
        <img className="img" src= {Mor} alt="" />
        <img className="img" src= {Sarı} alt="" />
        <img className="img" src= {Mavi} alt="" />  

      </div>         
    </div>
  )
}

export default Orkide