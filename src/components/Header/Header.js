import HeaderDescription from "./HeaderDescription/HeaderDescription";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header-wrapper">
      <div className="description-wrapper">
        <HeaderDescription />
      </div>
      <img src="" alt="header-img" className="header-img"></img>
    </div>
  );
};
export default Header;
