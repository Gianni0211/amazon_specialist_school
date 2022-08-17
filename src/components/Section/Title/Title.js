import "./Title.css";

const Title = (props) => {
  const title = props.title;
  const subtile = props.subtitle;
  return (
    <div className="title-wrapper">
      <h3 className="title">{title}</h3>
      <h3 className="subtitle">{subtile}</h3>
    </div>
  );
};

export default Title;
