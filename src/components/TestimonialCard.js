import "./TestimonialCard.scss";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <img src="/Testimonials/my-pic2.jpeg" alt="the image" />
      <div className="testimonial-card-details">
        <h3>Name</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem
          facilis aut, molestiae eius adipisci excepturi iusto fugiat?{" "}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
