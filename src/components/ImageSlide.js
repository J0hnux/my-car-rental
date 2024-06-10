const ImageSlide = () => {
  return (
    <div className="image-slide fade ">
      <img src="Featured_Cars/mercedes_benz_white.png" alt="mercedes_benz" />
      <div className="slide-details">
        <h2>Mercedes Benz</h2>
        <ul>
          <li>From ₱2,000 per hour</li>
          <li>3 passengers</li>
          <li>2022 model</li>
        </ul>
        <button>More Details</button>
      </div>
    </div>
  );
};

export default ImageSlide;
