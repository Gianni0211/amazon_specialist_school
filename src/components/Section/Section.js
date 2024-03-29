import Cta from "../CTA/Cta";
import Title from "./Title/Title";
import "./Section.css";

const Section = (props) => {
  let title = props.title;
  let text = props.text;
  let hasCta = props.hasCta;
  let imgUrl = props.imgUrl;
  let ctaLabel = props.ctaLabel;
  let bgColor = props.bgColor;

  return (
    <div className="section-wrapper">
      <div className="text-wrapper">
        <Title title={title} />
        <p className="description">{text}</p>

        <Cta label={ctaLabel} />
      </div>
      <img src={imgUrl} alt="section-image" />
    </div>
  );
};

export default Section;
