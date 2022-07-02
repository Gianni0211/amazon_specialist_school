import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <div className="landing-page-wrapper">
      <NavBar />
      <Header />
    </div>
  );
};
export default LandingPage;
