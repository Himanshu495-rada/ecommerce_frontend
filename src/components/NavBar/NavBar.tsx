import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/categorySlice";
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
  List,
  ArrowRight,
  Eye,
  EyeSlash,
  X,
} from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  //const [cartCount, setCartCount] = useState<number>(2);
  const cartCount: number = 2;
  const [pwdVisible, setPwdVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setCategory(e.target.value));
  };

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

  return (
    <div className={styles.navbar}>
      <section className={styles.section_1}>
        <div>
          <p className={styles.section_1_title}>Welcome to ecommerce website</p>
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
          <NavLink to="/" className={styles.section_2_title}>
            Brand
          </NavLink>
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
          <div className={styles.section_2_cart_container}>
            <ShoppingCartSimple size={32}></ShoppingCartSimple>

            {cartCount > 0 ? (
              <div className={styles.section_2_icon_cartcount}>{cartCount}</div>
            ) : null}

            <div className={styles.section_2_cart}>
              <h1>Shopping cart ({cartCount})</h1>
              <div className={styles.section_2_item_container}>
                <div className={styles.section_2_item}>
                  <img alt="item" />
                  <div className={styles.section_2_item_text}>
                    <p className={styles.section_2_item_title}>Item Name</p>
                    <p className={styles.section_2_item_price}>xxx₹</p>
                  </div>
                  <X size={20} color="#929FA5" />
                </div>
                <div className={styles.section_2_item}>
                  <img alt="item" />
                  <div className={styles.section_2_item_text}>
                    <p className={styles.section_2_item_title}>Item Name</p>
                    <p className={styles.section_2_item_price}>xxx₹</p>
                  </div>
                  <X size={20} color="#929FA5" />
                </div>
                <div></div>
              </div>
              <button className={styles.section_2_checkout_btn}>
                <p>CHECKOUT NOW</p>
                <ArrowRight size={20} />
              </button>
              <button
                className={styles.section_2_viewcart_btn}
                onClick={() => nav("/shopping_cart")}
              >
                <p>VIEW CART</p>
              </button>
            </div>
          </div>

          <div onClick={() => nav("/wishlist")}>
            <Heart size={32} />
          </div>
          <div className={styles.section_2_user_container}>
            <User size={32} />
            <div className={styles.section_2_user_login}>
              <h1>Sign in to your account</h1>
              <form>
                <label htmlFor="userName">Username</label>
                <input type="text" id="userName" />
                <label htmlFor="password">Password</label>
                <div className={styles.section_2_pwd_container}>
                  <input
                    type={pwdVisible ? "text" : "password"}
                    id="password"
                  />
                  {pwdVisible ? (
                    <EyeSlash
                      size={20}
                      color="black"
                      onClick={() => setPwdVisible(false)}
                    />
                  ) : (
                    <Eye
                      size={20}
                      color="black"
                      onClick={() => setPwdVisible(true)}
                    />
                  )}
                </div>
                <button type="submit">
                  <p>Login</p>
                  <ArrowRight size={20} />
                </button>
                <p className={styles.section_2_or}>Or</p>
                <div className={styles.section_2_user_signup}>
                  <p>CREATE ACCOUNT</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <button className={styles.toggleBtn} onClick={toggleMenu}>
          <List />
        </button>
      </section>
      <section className={styles.section_3}>
        <div className={styles.section_3_div_1}>
          <select
            name="category"
            className={styles.section_3_select}
            onChange={handleCategoryChange}
          >
            <option value="">All category</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <div className={styles.section_3_options_container}>
            <div
              className={styles.section_3_option}
              onClick={() => nav("/track_order")}
            >
              <MapPin size={24} />
              <p>Track Order</p>
            </div>
            <div
              className={styles.section_3_option}
              onClick={() => nav("/compare")}
            >
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
};

export default NavBar;
