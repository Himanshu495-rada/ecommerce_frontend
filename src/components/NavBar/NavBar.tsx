import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
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
import authServices from "../../services/authServices";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../store";
import { setSearch } from "../../store/searchSlice";

interface LoginData {
  usernameOrEmail: string;
  password: string;
}

interface SignupData {
  username: string;
  password: string;
  name: string;
  email: string;
  role: {
    roleName: string;
  };
}

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const categories = useSelector((state: RootState) => state.categories);
  const category = useSelector((state: RootState) => state.category.category);
  const search = useSelector((state: RootState) => state.search.search);
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pwdVisible, setPwdVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [roleName, setRoleName] = useState<string>("");

  const [formContent, setFormContent] = useState<string>("login");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setCategory(e.target.value));
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRoleName(e.target.value);
  };

  const handleLogin = async () => {
    console.log("Logging in");
    const data: LoginData = {
      usernameOrEmail: username,
      password: password,
    };
    const response = await authServices.login(data);
    console.log(response);
    if (response) {
      toast("Logged in successfully 🥳🥳");
    } else {
      toast("Error while loggin in 😢");
    }
  };

  const handleSignup = async () => {
    console.log("Signing up");
    const data: SignupData = {
      username: username,
      password: password,
      email: email,
      name: name,
      role: {
        roleName: roleName,
      },
    };
    await authServices.signup(data);
    setFormContent("login");
  };

  const handleProfileCheck = () => {
    if (localStorage.getItem("jwtToken") !== null) {
      nav("/user_dashboard");
    }
  };

  // const categories = [
  //   "Electronics",
  //   "Computer & Laptop",
  //   "Computer Accessories",
  //   "Smartphone",
  //   "Headphone",
  //   "Mobile Accessories",
  //   "Gaming Console",
  //   "Camera & Photo",
  //   "TV & Home Appliances",
  //   "Watches & Accessories",
  //   "GPS & Navigation",
  //   "Wearable Technology",
  // ];

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
            value={search}
            onChange={handleChangeSearch}
          />
          <MagnifyingGlass size={20} color="black" />
        </div>

        <div className={styles.section_2_icons_container}>
          {cartItems.length > 0 ? (
            <div className={styles.section_2_cart_container}>
              <ShoppingCartSimple size={32}></ShoppingCartSimple>

              <div className={styles.section_2_icon_cartcount}>
                {cartItems.length}
              </div>

              <div className={styles.section_2_cart}>
                <h1>Shopping cart ({cartItems.length})</h1>
                <div className={styles.section_2_item_container}>
                  {cartItems.map((item) => (
                    <div
                      className={styles.section_2_item}
                      key={item.cartItemId}
                    >
                      <img
                        src={`${baseURL}/image/product/${item.product.image}`}
                        alt="item"
                      />
                      <div className={styles.section_2_item_text}>
                        <p className={styles.section_2_item_title}>
                          {item.product.productName}
                        </p>
                        <p className={styles.section_2_item_title}>
                          Quantity: {item.quantity}
                        </p>
                        <p className={styles.section_2_item_price}>
                          {item.product.sellingPrice * item.quantity}₹
                        </p>
                      </div>
                      <X size={20} color="#929FA5" />
                    </div>
                  ))}
                </div>
                <button
                  className={styles.section_2_checkout_btn}
                  onClick={() => nav("/shopping_cart/billing")}
                >
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
          ) : null}

          <div onClick={() => nav("/wishlist")}>
            <Heart size={32} />
          </div>
          <div
            className={styles.section_2_user_container}
            onClick={handleProfileCheck}
          >
            <User size={32} />
            {localStorage.getItem("jwtToken") == null ? (
              <div className={styles.section_2_user_login}>
                <h1>Sign in to your account</h1>
                {formContent == "login" ? (
                  <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="userName">Username</label>
                    <input
                      type="text"
                      id="userName"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <div className={styles.section_2_pwd_container}>
                      <input
                        type={pwdVisible ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                    <button type="submit" onClick={handleLogin}>
                      <p>Login</p>
                      <ArrowRight size={20} />
                    </button>
                    <p className={styles.section_2_or}>Or</p>
                    <div
                      className={styles.section_2_user_signup}
                      onClick={() => setFormContent("signup")}
                    >
                      <p>CREATE ACCOUNT</p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="userName">Username</label>
                    <input
                      type="text"
                      id="userName"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Password</label>
                    <div className={styles.section_2_pwd_container}>
                      <input
                        type={pwdVisible ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="role">Select Role</label>
                    <select name="role" id="role" onChange={handleRoleChange}>
                      <option value="ROLE_COSTOMER">Customer</option>
                      <option value="ROLE_SELLER">Seller</option>
                    </select>
                    <button type="submit" onClick={handleSignup}>
                      <p>Signup</p>
                      <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <button className={styles.toggleBtn} onClick={toggleMenu}>
          <List />
        </button>
      </section>
      <section className={styles.section_3}>
        <div className={styles.section_3_div_1}>
          {categories.loading ? (
            <h1>Loading</h1>
          ) : (
            <select
              name="category"
              className={styles.section_3_select}
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="">All category</option>
              {categories.categories.map((category) => (
                <option value={category.categoryName} key={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          )}

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
      <ToastContainer />
    </div>
  );
};

export default NavBar;
