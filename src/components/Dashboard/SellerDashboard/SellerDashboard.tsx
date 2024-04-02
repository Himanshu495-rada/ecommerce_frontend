import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import styles from "./SellerDashboard.module.css";
import headphoneImg from "../../../assets/gaming_headphone.png";

const SellerDashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Sellers dashboard</h1>
      <div className={styles.input_container}>
        <MagnifyingGlass size={24} />
        <input type="text" placeholder="Search for products" />
      </div>

      <button className={styles.add_product_btn}>
        <p>Add Product</p>
        <ArrowRight size={20} />
      </button>
      <table className={styles.table}>
        <thead>
          <th>PRODUCT NAME</th>
          <th>PRODUCT DESCRIPTION</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>ACTIONS</th>
        </thead>
        <tbody>
          <tr>
            <td className={styles.section_1_product_container}>
              <img
                src={headphoneImg}
                alt="headphone"
                width={"72px"}
                height={"72px"}
              />
              <p>Wired Over-Ear Gaming Headphones with USB</p>
            </td>
            <td>
              <b>Wired Over-Ear Gaming Headphones with USB</b>
            </td>
            <td>
              <b>1</b>
            </td>
            <td>
              <b>₹5000</b>
            </td>
            <td>
              <button className={styles.update_btn}>UPDATE</button>
              <button className={styles.remove_btn}>REMOVE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SellerDashboard;
