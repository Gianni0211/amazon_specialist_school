import "./LogoContactInfo.css";

const LogoContactInfo = (props) => {
  return (
    <div className="logo-contact-info-wrapper">
      <div className="logo-wrapper">
        <img
          width="1009"
          height="164"
          src="https://i7b4c7u7.rocketcdn.me/wp-content/uploads/2022/03/MAG_logo_capitalized.svg"
          className="logo"
          alt="MAG My Amazon Guy logo capitalized"
          data-lazy-src="https://i7b4c7u7.rocketcdn.me/wp-content/uploads/2022/03/MAG_logo_capitalized.svg"
          data-ll-status="loaded"
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
