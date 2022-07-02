import "./NavItem.css";

const NavItem = (props) => {
  const text = props.text;
  return (
    <div className="nav-item-wrapper">
      <a className="nav-item">{text}</a>
    </div>
  );
};

export default NavItem;
