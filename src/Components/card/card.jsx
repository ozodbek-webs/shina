import "./card.scss";

const Card = ({ src }) => {
  return (
    <div className="card">
      <img src={src} alt="card image" />
    </div>
  );
};

export default Card;
