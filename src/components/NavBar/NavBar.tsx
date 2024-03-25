import React from "react";
import styles from "./NavBar.module.css";
import {
  TwitterLogo,
  FacebookLogo,
  PinterestLogo,
  RedditLogo,
  YoutubeLogo,
  InstagramLogo,
  ShoppingCartSimple,
  Heart,
  User,
  MagnifyingGlass,
  PhoneCall,
  MapPin,
  ArrowsCounterClockwise,
  Headphones,
  Info,
} from "@phosphor-icons/react";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <section className={styles.section_1}>
        <div>
          <p className={styles.section_1_title}>Welcome to eccomerce website</p>
        </div>
        <div className={styles.section_1_container}>
          <p className={styles.section_1_text}>Follow us:</p>
          <TwitterLogo weight="fill" size={16} />
          <FacebookLogo weight="fill" size={16} />
          <PinterestLogo weight="fill" size={16} />
          <RedditLogo weight="fill" size={16} />
          <YoutubeLogo weight="fill" size={16} />
          <InstagramLogo weight="fill" size={16} />
          <div className={styles.section_1_line} />
          <select name="language" className={styles.section_1_selection}>
            <option value="english">Eng</option>
          </select>
          <select name="currency" className={styles.section_1_selection}>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
          </select>
        </div>
      </section>
      <section className={styles.section_2}>
        <div>
          <h1 className={styles.section_2_title}>Brand</h1>
        </div>

        <div className={styles.section_2_input_container}>
          <input
            type="text"
            placeholder="Search for anything..."
            className={styles.section_2_input}
          />
          <MagnifyingGlass size={20} color="black" />
        </div>

        <div className={styles.section_2_icons_container}>
          <ShoppingCartSimple size={32} />
          <Heart size={32} />
          <User size={32} />
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.section_3_div_1}>
          <select name="category" className={styles.section_3_select}>
            <option value="all">All category</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
          <div className={styles.section_3_options_container}>
            <div className={styles.section_3_option}>
              <MapPin size={24} />
              <p>Track Order</p>
            </div>
            <div className={styles.section_3_option}>
              <ArrowsCounterClockwise size={24} />
              <p>Compare</p>
            </div>
            <div className={styles.section_3_option}>
              <Headphones size={24} />
              <p>Customer Support</p>
            </div>
            <div className={styles.section_3_option}>
              <Info size={24} />
              <p>Need Help</p>
            </div>
          </div>
        </div>
        <div className={styles.section_3_div_2}>
          <PhoneCall color="black" size={28} />
          <p>+91 9890685961</p>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
