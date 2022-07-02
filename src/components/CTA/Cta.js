import "./Cta.css";

const Cta = (props) => {
  const label = props.label;
  return (
    <div className="cta-wrapper">
      <button className="cta">{label}</button>
    </div>
  );
};
export default Cta;
