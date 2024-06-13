import testimonials from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
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
    </section>
  );
};

export default Testimonials;
