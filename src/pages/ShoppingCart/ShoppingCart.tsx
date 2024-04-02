import React from "react";
import styles from "./ShoppingCart.module.css";
import NavBar from "../../components/NavBar/NavBar";
import NavInfo from "../../components/NavInfo/NavInfo";
import Footer from "../../components/Footer/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  XCircle,
} from "@phosphor-icons/react";
import headphoneImg from "../../assets/gaming_headphone.png";
import { useNavigate } from "react-router-dom";

const ShoppingCart: React.FC = () => {
  const nav = useNavigate();

  return (
    <>
      <NavBar />
      <NavInfo text="Shopping Cart" />
      <div className={styles.page}>
        <section className={styles.section_1}>
          <div>
            <h1 style={{ marginLeft: "20px" }}>Shopping Cart</h1>
          </div>
          <table className={styles.section_1_table}>
            <thead>
              <th>PRODUCTS</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUB-TOTAL</th>
            </thead>
            <tbody>
              <tr>
                <td className={styles.section_1_product_container}>
                  <XCircle size={24} color="#EE5858" />
                  <img
                    src={headphoneImg}
                    alt="headphone"
                    width={"72px"}
                    height={"72px"}
                  />
                  <p>Wired Over-Ear Gaming Headphones with USB</p>
                </td>
                <td>
                  <b>₹5000</b>
                </td>
                <td>
                  <div className={styles.section_1_quantity_container}>
                    <Minus size={16} />
                    <p>{1}</p>
                    <Plus size={16} />
                  </div>
                </td>
                <td>
                  <b>₹5000</b>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.section_1_footer}>
            <button className={styles.section_1_btn}>
              <ArrowLeft size={20} />
              <p>RETURN TO SHOP</p>
            </button>

            <button className={styles.section_1_btn}>
              <p>UPDATE CART</p>
            </button>
          </div>
        </section>
        <section className={styles.section_2}>
          <div>
            <h1>Cart Totals</h1>
            <div className={styles.cart_details_container}>
              <p>Sub-Total</p>
              <p>₹5000</p>
            </div>
            <div className={styles.cart_details_container}>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className={styles.cart_details_container}>
              <p>Discount</p>
              <p>₹1</p>
            </div>
            <div className={styles.cart_details_container}>
              <p>Tax</p>
              <p>0</p>
            </div>
            <div className={styles.breakLine} />
            <button
              className={styles.section_2_proceed_btn}
              onClick={() => nav("/shopping_cart/billing")}
            >
              <p>PROCEED TO CHECKOUT</p>
              <ArrowRight size={24} />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default ShoppingCart;
