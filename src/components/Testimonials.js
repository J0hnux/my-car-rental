import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-content">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
