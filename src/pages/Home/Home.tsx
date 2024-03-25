import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import headPhoneImg from "../../assets/gaming_headphone.png";
import { ArrowRight } from "@phosphor-icons/react";

function Home() {
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
              Shop now <ArrowRight />
            </button>
          </div>
          <img src={headPhoneImg} alt="headphone" />
        </div>
        <div className={styles.section_1_item2}></div>
        <div className={styles.section_1_item3}></div>
      </section>
    </div>
  );
}

export default Home;
