
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Orkide from "./components/Orkide";
import Mavi from "./images/mavi.jpg"
import Sarı from "./images/sarı.jpg"
import Beyaz from "./images/beyaz.jpg"
import Mor from "./images/mor.jpg"
import Desenli from "./images/desenli.jpg"
import MainTwo from "./components/MainTwo";
import data from "./data"

function App() {
  return (
    <div>
        <Header /> 
        <Main />
        <Orkide name="Mavi" img={Mavi} color="blue" />
        <Orkide name="Sarı" img={Sarı} color="sarı" />
        <Orkide name="Beyaz" img={Beyaz} color="beyaz" />
        <Orkide name="Mor" img={Mor} color="mor" />
        <Orkide name="Desenli" img={Desenli} color="desenli" />
        
        {
          data.map((item, i) =>{
            return <MainTwo key={item.id} name={item.name} img={item.img} />
          })
        }
        

        <Footer /> 
    </div>
  );
}

export default App;
