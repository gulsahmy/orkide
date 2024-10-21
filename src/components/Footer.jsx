
import dataTwo from "../helper/dataTwo";
import FooterStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      {dataTwo.map((item) => (
        <div className={FooterStyles.footer} key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.img} alt={item.name} style={{ width: "300px", height: "300px" }} />
          <p>Subfamily:{item.subfamily}</p>
        
        </div>
      ))}
    </footer>
  );
};

export default Footer;