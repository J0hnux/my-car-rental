import Image from "next/image";
import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <Image src={props.imgUrl} alt={props.imgAlt} width={9000} height={9000} />
      <div className="testimonial-card-details">
        <h3 className="mt-4">{props.name}</h3>
        <p>{props.testimony}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
