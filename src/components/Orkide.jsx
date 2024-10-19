
import Name from "./Name"


const Orkide = ({name, img, color}) => {
  return (
    <div>
      <Name name={name} />  

        <img 
        src={img} 
        alt="orkide-img"
        height="150px"
        width="150px"
        />

        <p>Color:{color} </p>  

        <hr />
    </div>
  )
}

export default Orkide