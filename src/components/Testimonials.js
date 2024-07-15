import testimonials from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h1>TESTIMONIALS FROM OUR TOP CLIENTS</h1>
        <div className="mt-3 testimonials-content">
          {testimonials.map((testimony, index) => {
            return (
              <TestimonialCard
                key={index}
                imgUrl={testimony.imgURL}
                imgAlt={testimony.imgAlt}
                name={testimony.name}
                position={testimony.position}
                testimony={testimony.testimony}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
