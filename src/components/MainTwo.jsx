import Buton from "./buton";


const MainTwo = ({name, img, width="350px", height= "350px"}) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <img src={img} alt={name} style={{ width: width, height: height }} />
      <Buton />
    </div>
  )
}

export default MainTwo

