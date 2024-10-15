import "../styles/Header.css"

function Header(){

    const baslik = "ASPARAGALES"

    return (

    <header>

        <h1 style={{color: "fuchsia", backgroundColor:"gray", textAlign:"center", padding:"2rem", border:"5px solid fuchsia", borderRadius:"10px", margin:"15px", marginBottom:"0", borderBottom: "none", borderBottomRightRadius:"0", borderBottomLeftRadius:"0"}}>
        {baslik}</h1>

       <h6>ORCHIDACEAE</h6>

    </header> 

    )  
}

export default Header