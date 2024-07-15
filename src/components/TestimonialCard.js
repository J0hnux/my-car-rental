import Image from "next/image";
import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <Image src={props.imgUrl} alt={props.imgAlt} width={9000} height={9000} />
      <div className="testimonial-card-details">
        <div className="mt-2 testimonial-first">
          <h3>{props.name}</h3>
          <p>{props.position}</p>
        </div>
        <p>{props.testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
