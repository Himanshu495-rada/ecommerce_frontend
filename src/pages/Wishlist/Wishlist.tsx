import React from "react";
import styles from "./Wishlist.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import headphoneImg from "../../assets/gaming_headphone.png";
import { ShoppingCartSimple, XCircle } from "@phosphor-icons/react";
import NavInfo from "../../components/NavInfo/NavInfo";

const Wishlist: React.FC = () => {
  return (
    <>
      <NavBar />
      <NavInfo text="Wishlist" />
      <div className={styles.page}>
        <h1>Your Wishlist</h1>
        <table className={styles.table}>
          <thead className={styles.table_heading}>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.table_product_container}>
                <img
                  src={headphoneImg}
                  alt="headphones"
                  width={"70px"}
                  height={"70px"}
                />
                <p>Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</p>
              </td>
              <td className={styles.price}>$199.99</td>
              <td className={styles.in_stock}>IN STOCK</td>
              <td>
                <div className={styles.actions_container}>
                  <button>
                    <p>ADD TO CART</p>
                    <ShoppingCartSimple size={20} />
                  </button>
                  <XCircle size={24} color="#929FA5" />
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.table_product_container}>
                <img
                  src={headphoneImg}
                  alt="headphones"
                  width={"70px"}
                  height={"70px"}
                />
                <p>Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone</p>
              </td>
              <td className={styles.price}>$199.99</td>
              <td className={styles.out_of_stock}>OUT OF STOCK</td>
              <td>
                <div className={styles.actions_container}>
                  <button>
                    <p>ADD TO CART</p>
                    <ShoppingCartSimple size={20} />
                  </button>
                  <XCircle size={24} color="#929FA5" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
