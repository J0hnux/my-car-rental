import "./FeaturedCar.scss";
import MoreDetailsModal from "./MoreDetailsModal";

const FeaturedCar = (props) => {
  const handleClick = () => {
    return <MoreDetailsModal />;
    // set display to flex
  };

  return (
    <div className="featured-car-card">
      <img src={props.imgURL} alt={props.imgAlt} />

      <div className="featured-car-details">
        <h2>{props.name}</h2>
        <ul>
          {props.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <button onClick={handleClick}>More Details</button>
      </div>
    </div>
  );
};

export default FeaturedCar;
