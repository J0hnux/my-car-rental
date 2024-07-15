import "./Categories.scss";
import CategoryCard from "./CategoryCard";
import categories from "@/data/categories";

const Categories = () => {
  return (
    <section className="categories">
      <h1>CATEGORIES</h1>
      <div className="category-grid">
        {categories.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              imgURL={category.imgURL}
              imgAlt={category.imgAlt}
              category={category.category}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
