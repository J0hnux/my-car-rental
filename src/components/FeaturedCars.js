import "./FeaturedCars.scss";

const FeaturedCars = () => {
  return (
    <section className="featured container">
      <h2>Featured Cars</h2>
      <div className="image_carousel" aria-label="Featured Cars Image Carousel">
        <div class="image-slide fade ">
          <img
            src="Featured_Cars/mercedes_benz_white.png"
            alt="mercedes_benz"
          />
          <div class="image-text">Mercedes Benz</div>
        </div>

        <div class="image-slide fade hidden">
          <img src="Featured_Cars/ford_mustang_blue.png" alt="ford_mustang" />
          <div class="image-text">Ford Mustang</div>
        </div>

        <div class="image-slide fade hidden">
          <img
            src="Featured_Cars/toyota_fortuner_white.png"
            alt="toyota_fortuner"
          />
          <div class="image-text">Toyota Fortuner</div>
        </div>

        <a class="prev" aria-label="previous image" onclick="{plusSlides(-1)}">
          &#10094;
        </a>
        <a class="next" aria-label="next image" onclick="{plusSlides(1)}">
          &#10095;
        </a>
      </div>

      <div className="dots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </section>
  );
};

export default FeaturedCars;
