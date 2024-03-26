import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import headPhoneImg from "../../assets/gaming_headphone.png";
import clothingImg from "../../assets/clothing.png";
import phoneImg from "../../assets/phone.png";
import {
  ArrowRight,
  Package,
  Trophy,
  CreditCard,
  Headphones,
} from "@phosphor-icons/react";
import CategorySection from "../../components/CategorySection/CategorySection";
import NewsletterSection from "../../components/NewsletterSection/NewsletterSection";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.section_1}>
        <div className={styles.section_1_item1}>
          <div>
            <p className={styles.section_1_item1_text1}>
              Top from Electronics category
            </p>
            <h1 className={styles.section_1_item1_title}>Gaming Headphones</h1>
            <p>
              Save upto 50% on latest gaming headphones, dont miss this chance.
            </p>
            <button className={styles.section_1_item1_btn}>
              <p>Shop now</p>
              <ArrowRight size={24} />
            </button>
          </div>
          <img src={headPhoneImg} alt="headphone" />
        </div>
        <div className={styles.section_1_item2}>
          <div>
            <p className={styles.section_1_item2_text}>Summer sales</p>
            <h1 className={styles.section_1_item2_title}>
              Top items from clothing
            </h1>
            <button className={styles.section_1_item2_btn}>
              <p>Shop now</p>
              <ArrowRight size={20} />
            </button>
          </div>
          <img src={clothingImg} alt="clothing" />
        </div>
        <div className={styles.section_1_item3}>
          <img src={phoneImg} alt="phone" />
          <div>
            <h1 className={styles.section_1_item3_title}>New arrival</h1>
            <p className={styles.section_1_item3_text}>₹xxx only</p>
            <button className={styles.section_1_item2_btn}>
              <p>Shop now</p>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.section_2_container}>
          <Package size={40} />
          <div className={styles.section_2_text_container}>
            <p className={styles.section_2_text1}>Fastest delivery</p>
            <p className={styles.section_2_text2}>Delivery in 24/H</p>
          </div>
        </div>
        <div className={styles.section_2_line} />
        <div className={styles.section_2_container}>
          <Trophy size={40} />
          <div className={styles.section_2_text_container}>
            <p className={styles.section_2_text1}>24 Hours Return</p>
            <p className={styles.section_2_text2}>100% money-back guarantee</p>
          </div>
        </div>
        <div className={styles.section_2_line} />
        <div className={styles.section_2_container}>
          <CreditCard size={40} />
          <div className={styles.section_2_text_container}>
            <p className={styles.section_2_text1}>Secure Payment</p>
            <p className={styles.section_2_text2}>Your money is safe</p>
          </div>
        </div>
        <div className={styles.section_2_line} />
        <div className={styles.section_2_container}>
          <Headphones size={40} />
          <div className={styles.section_2_text_container}>
            <p className={styles.section_2_text1}>Support 24/7</p>
            <p className={styles.section_2_text2}>Live contact/message</p>
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <h1>Shop with categories</h1>
        <CategorySection />
      </section>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
