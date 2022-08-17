import Cta from "../../CTA/Cta";
import Title from "../../Section/Title/Title";
import "./HeaderDescription.css";

const HeaderDEscription = (props) => {
  const title = "WE GROW YOUR sales on amazon";
  const desc =
    "Do you believe Amazon should produce more sales but you need help jumping their hurdles?";
  return (
    <div className="header-description">
      <div className="header-description-text-wrapper">
        <Title title={title} />
        <p className="description">{desc}</p>
      </div>
      <div className="cta-wrapper">
        <Cta label="Grow Sales Faster" /> <Cta label="Solve a Problem" />
      </div>
    </div>
  );
};

export default HeaderDEscription;
