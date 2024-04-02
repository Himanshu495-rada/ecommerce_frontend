import React, { useEffect } from "react";
import styles from "./Product.module.css";
import product2Img from "../../assets/product2.png";
import NavBar from "../../components/NavBar/NavBar";
import {
  ArrowsCounterClockwise,
  Copy,
  FacebookLogo,
  Heart,
  Minus,
  PinterestLogo,
  Plus,
  ShoppingCartSimple,
  TwitchLogo,
} from "@phosphor-icons/react";
import payment_methodsImg from "../../assets/payment_methods.png";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div>
      <NavBar />
      <section className={styles.section_1}>
        <div className={styles.section_1_image_container}>
          <img src={product2Img} alt="product" />
        </div>
        <div className={styles.section_1_product_details}>
          <h1>
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </h1>
          <div className={styles.section_1_price_container}>
            <p className={styles.section_1_selling_price}>₹ sellingPrice</p>
            <p
              style={{ textDecoration: "line-through" }}
              className={styles.section_1_actual_price}
            >
              ₹ actualPrice
            </p>
            <div className={styles.section_1_offer_container}>
              <p>20% off</p>
            </div>
          </div>
          <div className={styles.section_1_buy_container}>
            <div className={styles.section_1_quantity_container}>
              <Minus size={16} />
              <p>{1}</p>
              <Plus size={16} />
            </div>
            <button className={styles.section_1_add_cart}>
              <p>ADD TO CART</p>
              <ShoppingCartSimple size={24} />
            </button>
            <button className={styles.section_1_buy_now}>BUY NOW</button>
          </div>

          <div className={styles.section_1_options_container}>
            <div className={styles.section_1_option1}>
              <div className={styles.section_1_option1_container}>
                <Heart size={24} /> <p>Add To Wishlist</p>
              </div>
              <div className={styles.section_1_option1_container}>
                <ArrowsCounterClockwise size={24} />
                <p>Add To Compare</p>
              </div>
            </div>
            <div className={styles.section_1_option2}>
              <p>Share product:</p>
              <Copy size={16} />
              <FacebookLogo size={16} color="#fa8232" weight="fill" />
              <TwitchLogo size={16} color="#5F6C72" weight="fill" />
              <PinterestLogo size={16} color="#5F6C72" weight="fill" />
            </div>
          </div>

          <div className={styles.section_1_security_container}>
            <p>100% Guarantee Safe Checkout</p>
            <img src={payment_methodsImg} alt="payment methods" />
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.section_2_description}>
          <h1>Description</h1>
          <p>
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life. Add to that
            a stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need. The first notebook of
            its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional
            performance of the M1 architecture to a whole new level for pro
            users.
          </p>
          <p>
            Even the most ambitious projects are easily handled with up to 10
            CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
            dedicated encode and decode media engines that support H.264, HEVC,
            and ProRes codecs.
          </p>
        </div>
        <div className={styles.section_2_features}>
          <h1>Features</h1>
          <ul>
            <li>Free 1 Year Warranty</li>
            <li>Free Shipping & Fasted Delivery</li>
            <li>100% Money-back guarantee</li>
            <li>D</li>
            <li>E</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
