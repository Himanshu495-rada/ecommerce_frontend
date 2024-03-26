import React from "react";
import styles from "./Footer.module.css";
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <div>
      <section className={styles.section_1}>
        <div className={styles.section_1_div1}>
          <h1>Brand</h1>
          <p>Customer Support:</p>
          <h2>+91 9890685961</h2>
          <p>Address</p>
          <p>email</p>
        </div>
        <div className={styles.section_1_div2}>
          <h1>Top Categories</h1>
          <p>Computer & Laptop</p>
          <p>SmartPhone</p>
          <p>Headphones</p>
          <p>TV & Homes</p>
          <p>Clothing</p>
          <p>Camera & Photos</p>
        </div>
        <div className={styles.section_1_div3}>
          <h1>Quick Links</h1>
          <p>Shop Product</p>
          <p>Shopping Cart</p>
          <p>Wishlist</p>
          <p>Compare</p>
          <p>Track order</p>
          <p>About Us</p>
        </div>
        <div className={styles.section_1_div4}>
          <h1>Download APP</h1>
          <div className={styles.section_1_div4_container}>
            <GooglePlayLogo size={32} />
            <div>
              <p>Get it now</p>
              <h2>Google Play</h2>
            </div>
          </div>
          <div className={styles.section_1_div4_container}>
            <AppleLogo size={32} />
            <div>
              <p>Get it now</p>
              <h2>Apple Store</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <p>
          All rights are reserved 2024, Design by Templatecookie, Developed by
          Himanshu Tekade
        </p>
      </section>
    </div>
  );
};

export default Footer;
