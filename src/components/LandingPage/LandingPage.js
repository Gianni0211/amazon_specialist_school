import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import "./LandingPage.css";
import Section from "../Section/Section";
import Title from "../Section/Title/Title";
import Card from "../Card/Card";
import logo from "../../assets/logo_amazon_school.png";
import wheel from "../../assets/wheel.gif";
import contact from "../../assets/contact.jpg";
import account from "../../assets/account.jpg";
import pasta from "../../assets/pasta.jpg";

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
          <img src={wheel} className="wheel-img" alt="wheel"></img>
        </div>
        <img src={pasta} alt="pasta" class="pasta-img" />
        <div className="text-wrapper method-text">
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
      <section className="account-management">
        <div className="text-wrapper">
          <img className="section-logo" alt="logo" src={logo} />
          <Title title="FULL SERVICE" subtitle="ACCOUNT MANAGMENT" />
          <p className="description">
            We’re a team of people with in-depth Amazon knowledge and industry
            expertise who use a combination of expert strategy and
            state-of-the-art technology to craft and carry out cutting-edge
            Amazon best practices.
            <br />
            <br /> <b>Put simply, we’re known for knowing Amazon.</b> <br />
            <br />
            As a modern marketing agency, we’re meant to be an extension of your
            in-house team, shaping, guiding, and managing your Amazon strategy.
          </p>
        </div>
        <div className="img-wrapper">
          <img src={account} className="account-img" alt="account"></img>
        </div>
      </section>
      <section className="partners">
        <div className="text-wrapper">
          <Title title="SOME OF OUR" subtitle="LOYAL PARTNERS" />
          <p className="description">
            We’re a team of people with in-depth Amazon knowledge and industry
            expertise who use a combination of expert strategy and
            state-of-the-art technology to craft and carry out cutting-edge
            Amazon best practices.
          </p>
        </div>
        <div className="partners-wrapper">
          <img
            src="https://picsum.photos/200"
            className="partner-logo"
            alt="partner-logo"
          ></img>
          <img
            src="https://picsum.photos/200"
            className="partner-logo"
            alt="partner-logo"
          ></img>
          <img
            src="https://picsum.photos/200"
            className="partner-logo"
            alt="partner-logo"
          ></img>
        </div>
      </section>
      <section className="contact">
        <div className="img-wrapper">
          <img src={contact} className="contact-img" alt="contact-img"></img>
        </div>
        <div className="text-wrapper">
          <Title title="DO YOU WANT TO" subtitle="GROW YOUR sales ?" />
          <p className="description">
            Looking to get in touch? You can reach us with the info below:
          </p>
          <div className="contact-wrapper">
            <p className="contact-title">PHONE:</p>
            <p className="contact">+393495375680</p>
          </div>
          <div className="contact-wrapper">
            <p className="contact-title">EMAIL:</p>
            <p className="contact">sales@amazonspecialistschool.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
