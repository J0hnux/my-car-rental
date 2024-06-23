import "./CategoryCard.scss";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <button>
        <div className="category-card-fill"></div>
        <img src={props.imgURL} alt={props.imgAlt} />
        <p>{props.category}</p>
      </button>
    </div>
  );
};

export default CategoryCard;
