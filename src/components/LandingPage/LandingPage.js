import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import "./LandingPage.css";
import Section from "../Section/Section";

const LandingPage = (props) => {
  return (
    <div className="landing-page-wrapper">
      <NavBar />
      <Header />
      <Section
        title="It’s a jungle out there, and we
can help you break through"
        text="We’ve created a layered strategy using proven tactics to manage your PPC, SEO, and catalogs — so you can stop worrying about Amazon and start focusing on your business."
        imgUrl=""
        ctaLabel="Get to Know the Amazon guy"
      />
    </div>
  );
};
export default LandingPage;
