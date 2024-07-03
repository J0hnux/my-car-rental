import FeaturedCar from "./FeaturedCar";
import featuredCars from "../data/featuredcars";
import "./FeaturedCars.scss";

const FeaturedCars = () => {
  return (
    <section className="featured bg-gray-200">
      <div
        className="featured-car-container"
        aria-label="Featured Cars Image Carousel"
      >
        <h1>
          <span className="fc-sp-1">FEATURED</span>
          <span className="fc-sp-2"> CARS FOR RENT</span>
        </h1>
        {featuredCars.map((car, index) => (
          <FeaturedCar
            key={index}
            imgURL={car.imgURL}
            imgAlt={car.imgAlt}
            name={car.name}
            details={car.details}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
