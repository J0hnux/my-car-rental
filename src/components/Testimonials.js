import testimonials from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h1>Testimonials</h1>
        <div className="testimonials-content">
          {testimonials.map((testimony, index) => {
            return (
              <TestimonialCard
                key={index}
                imgUrl={testimony.imgURL}
                imgAlt={testimony.imgAlt}
                name={testimony.name}
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
