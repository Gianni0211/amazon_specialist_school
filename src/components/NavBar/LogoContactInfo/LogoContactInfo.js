import "./LogoContactInfo.css";
import logo from "../../../assets/logo_amazon_school.png";

const LogoContactInfo = (props) => {
  return (
    <div className="logo-contact-info-wrapper">
      <div className="logo-wrapper">
        <img
          src={logo}
          className="logo"
          alt="MAG My Amazon Guy logo capitalized"
        />
      </div>
      <div className="contact-wrapper">
        <p className="phone-number">1234567890</p>
        CTA
      </div>
    </div>
  );
};

export default LogoContactInfo;
