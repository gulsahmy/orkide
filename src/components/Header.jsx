import "../styles/Header.css"

function Header(){

    const baslik = "ASPARAGALES"

    return (

    <header>

        <h1 style={{color: "#4303437e", textAlign:"center", padding:"2rem",  margin:"15px", marginBottom:"0",   }}>
        {baslik}</h1>

       <h6>ORCHIDACEAE</h6>

    </header> 

    )  
}

export default Header