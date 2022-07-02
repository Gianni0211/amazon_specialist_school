import HeaderDescription from "./HeaderDescription/HeaderDescription";
import img from "../../assets/Immagine_Header.jpg";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header-wrapper">
      <div className="description-wrapper">
        <HeaderDescription />
      </div>
      <img src={img} alt="header-img" className="header-img"></img>
    </div>
  );
};
export default Header;
