import "./HeaderDescription.css";

const HeaderDEscription = (props) => {
  const title = "Get your Amazon products seen and sold 🚀";
  const desc =
    "Do you believe Amazon should produce more sales but you need help jumping their hurdles?";
  return (
    <div className="header-description">
      <div className="header-description-text-wrapper">
        <h1 className="description-title">{title}</h1>
        <p className="description">{desc}</p>
      </div>
      <div className="cta-wrapper">cta cta</div>
    </div>
  );
};

export default HeaderDEscription;
