import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <img src={props.imgUrl} alt={props.imgAlt} />
      <div className="testimonial-card-details">
        <h3 className="mt-4">{props.name}</h3>
        <p>{props.testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
