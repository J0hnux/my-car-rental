import Image from "next/image";
import Link from "next/link";
import "./CategoryCard.scss";

const CategoryCard = (props) => {
  const handleRedirect = () => {};

  return (
    <div className="category-card">
      {/* On-click Link to Category page */}
      <Link href="/Category" target="_blank">
        <Image
          className="category-img"
          src={props.imgURL}
          alt={props.imgAlt}
          width={500}
          height={500}
        />
        <p>{props.category}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
