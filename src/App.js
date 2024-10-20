
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Orkide from "./components/Orkide";
import MainTwo from "./components/MainTwo";
import data from "./helper/data"

function App() {
  return (
    <div>
        <Header /> 
        <Main />
        <Orkide />
        
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
