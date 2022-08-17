import "./Card.css";

const Card = (props) => {
  const imgUrl = props.url;
  const title = props.title;
  const text = props.text;
  return (
    <div className="card">
      <img className="card-img" src={imgUrl} alt="card-pic" />
      <div className="card-text-wrapper">
        <p className="card-title">{title}</p>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};
export default Card;
