import React from "react";
import styles from "./CategoryPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import product1Img from "../../assets/product1.png";
import { setCategory } from "../../store/categorySlice";
import { X } from "@phosphor-icons/react";

const CategoryPage: React.FC = () => {
  const globalCategory = useSelector(
    (state: RootState) => state.category.category
  );

  const dispatch = useDispatch();

  const categories = [
    "Electronics",
    "Computer & Laptop",
    "Computer Accessories",
    "Smartphone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
    "TV & Home Appliances",
    "Watches & Accessories",
    "GPS & Navigation",
    "Wearable Technology",
  ];
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      image: product1Img,
    },
    {
      id: 2,
      name: "Laptop",
      price: 999,
      image: product1Img,
    },
    {
      id: 3,
      name: "Laptop",
      price: 999,
      image: product1Img,
    },
    {
      id: 4,
      name: "Laptop",
      price: 999,
      image: product1Img,
    },
    {
      id: 5,
      name: "Laptop",
      price: 999,
      image: product1Img,
    },
    {
      id: 6,
      name: "Laptop",
      price: 999,
      image: product1Img,
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
      <p>&#36; {price}₹</p>
    </div>
  );

  return (
    <div className={styles.home_page}>
      <section className={styles.section_1}>
        <h3>CATEGORY</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <div
                id="category"
                className={
                  globalCategory == category
                    ? styles.radioBtnSelect
                    : styles.radioBtn
                }
                onClick={() => dispatch(setCategory(category))}
              />
              <label>{category}</label>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section_2}>
        {globalCategory != "" ? (
          <div className={styles.section_2_filter}>
            <p className={styles.section_2_filter_title}>Active Filtes: </p>
            <div className={styles.section_2_category_container}>
              <p>{globalCategory}</p>
              <X
                size={12}
                color="#5f6c72"
                onClick={() => dispatch(setCategory(""))}
              />
            </div>
          </div>
        ) : null}

        <div className={styles.section_2_products_container}>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
