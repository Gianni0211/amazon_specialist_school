import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import "./LandingPage.css";
import Section from "../Section/Section";
import Title from "../Section/Title/Title";
import Card from "../Card/Card";

const LandingPage = (props) => {
  return (
    <div className="landing-page-wrapper">
      <NavBar />
      <Header />
      <section className="journey">
        <div className="text-wrapper">
          <Title title="master your costumer journey on amazon" />
          <p className="description">
            We help brands achieve success by optimizing every stage of the
            customer journey on Amazon. From advertising & content optimization
            to account management & strategic consulting, we're a full-service
            agency focused on Amazon optimization and management.
          </p>
        </div>
        <div className="img-wrapper">
          <img
            src="https://picsum.photos/200"
            className="computer-img"
            alt="computer"
          ></img>
          <img
            src="https://picsum.photos/200"
            className="site-img"
            alt="site"
          ></img>
        </div>
      </section>
      <section className="method">
        <div className="img-wrapper">
          <img
            src="https://picsum.photos/200"
            className="computer-img"
            alt="computer"
          ></img>
        </div>
        <div className="text-wrapper">
          <Title
            title="OUR METHOD IS EASY AND good..."
            subtitle="LIKE ITALIAN FOOD"
          />
          <p className="description">
            We help brands achieve success by optimizing every stage of the
            customer journey on Amazon. <br />
            <br /> From advertising & content optimization to account management
            & strategic consulting, we're a full-service agency focused on
            Amazon optimization and management.
          </p>
        </div>
      </section>
      <section className="services">
        <Title title="OUR SERVICES " subtitle="HELP YOU GROW SALES" />
        <div className="cards-wrapper">
          <Card
            title="CATALOG MANAGEMENT & SEO"
            text="With years of knowledge and experience behind us, SEO has become second nature to us at Amazon Specialist.

Our SEO services cover the following: keyword and competitor research, a choice selection of the most effective keywords for your products, listing & search term optimisation."
            url="https://picsum.photos/200"
          />

          <Card
            title="BRAND STORE & CONTENT A+"
            text="Our Team can take in the work that needs to be done in order to create the best Brand Store and Content A+ for your brand and products.
            We work closely with your team of designers so that we can build for you anything following your brand guidelines.
            
            You don't have a team of designers? We take in all the work and design everything for you!
            "
            url="https://picsum.photos/200"
          />
          <Card
            title="PPC MANAGEMENT"
            text="With years of knowledge and experience behind us, SEO has become second nature to us at Amazon Specialist.

Our SEO services cover the following: keyword and competitor research, a choice selection of the most effective keywords for your products, listing & search term optimisation."
            url="https://picsum.photos/200"
          />
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
