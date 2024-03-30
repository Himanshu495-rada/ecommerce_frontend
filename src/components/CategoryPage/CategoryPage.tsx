import React from "react";
import styles from "./CategoryPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CategoryPage: React.FC = () => {
  const category = useSelector((state: RootState) => state.category.category);

  const categories = ["A", "B", "C", "D", "E", "F"];
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      image: "hello",
    },
  ];

  type ProductsProps = {
    image: string;
    name: string;
    price: number;
  };

  const Product: React.FC<ProductsProps> = ({ image, name, price }) => (
    <div className={styles.product}>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      <p>{price}₹</p>
    </div>
  );

  return (
    <div className={styles.home_page}>
      <aside className={styles.categories}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </aside>
      <section className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default CategoryPage;
