import LogoContactInfo from "./LogoContactInfo/LogoContactInfo";
import "./NavBar.css";
import NavItem from "./NavItem/NavItem";
const NavBar = (props) => {
  const navList = [
    {
      text: "About",
    },
    {
      text: "Servizi",
    },
    {
      text: "Blog",
    },
  ];
  return (
    <div className="nav-wrapper">
      <LogoContactInfo />
      <div className="nav-item-wrapper">
        {navList.map((item) => {
          return <NavItem text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default NavBar;
