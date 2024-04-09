import React from "react";
import styles from "./ProductsPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setCategory } from "../../store/categorySlice";
import { X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const globalCategory = useSelector(
    (state: RootState) => state.category.category
  );

  const dispatch = useDispatch();
  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const category = useSelector((state: RootState) => state.category.category);
  const search = useSelector((state: RootState) => state.search.search);

  let products = useSelector((state: RootState) => state.products.products);

  if (category != "") {
    products = products.filter((p) =>
      p.category.categoryName.includes(category)
    );
  } else if (search != "") {
    products = products.filter((p) => p.productName.includes(search));
  }

  return (
    <div className={styles.home_page}>
      <section className={styles.section_1}>
        <h3>CATEGORY</h3>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>
              <div
                id="category"
                className={
                  globalCategory == cat.categoryName
                    ? styles.radioBtnSelect
                    : styles.radioBtn
                }
                onClick={() => dispatch(setCategory(cat.categoryName))}
              />
              <label>{cat.categoryName}</label>
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
            <div
              className={styles.product}
              onClick={() => nav(`/product/${product.productId}`)}
              key={product.productId}
            >
              <img
                src={`${baseURL}/image/product/${product.image}`}
                alt="image"
              />
              <h3>{product.productName}</h3>
              <p>&#36; {product.productPrice}₹</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
