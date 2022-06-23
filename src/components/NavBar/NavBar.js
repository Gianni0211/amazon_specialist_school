import LogoContactInfo from "./LogoContactInfo/LogoContactInfo";
import "./NavBar.css";
import NavItem from "./NavItem/NavItem";
const NavBar = (props) => {
  return (
    <div className="nav-wrapper">
      <LogoContactInfo />
      <div className="nav-item-wrapper">
        <NavItem />
      </div>
    </div>
  );
};

export default NavBar;
