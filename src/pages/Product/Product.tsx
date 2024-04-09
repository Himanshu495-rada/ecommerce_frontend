import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
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
import productServices from "../../services/productServices";
import cartServices from "../../services/cartServices";
import { toast } from "react-toastify";

interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  sellingPrice: number;
  remainingQuantity: number;
  image: string;
  category: {
    categoryId: number;
    categoryName: string;
  };
  user: {
    userId: number;
    username: string;
    name: string;
    email: string;
    role: {
      roleId: number;
      roleName: string;
    };
  };
}

const Product: React.FC = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const getProduct = async () => {
    const response = await productServices.getProductById(product_id);
    setProduct(response);
  };

  const handleAddToCart = async () => {
    const response = await cartServices.addToCart(quantity, product?.productId);
    if (response) {
      toast("Product added to cart");
    } else {
      toast("Error while adding product to cart");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (product_id == null || product == null) {
    return (
      <div>
        <NavBar />
        <h1>No such product available</h1>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <section className={styles.section_1}>
          <div className={styles.section_1_image_container}>
            <img
              src={`${baseURL}/image/product/${product?.image}`}
              alt="product"
            />
          </div>
          <div className={styles.section_1_product_details}>
            <h1>{product?.productName}</h1>
            <div className={styles.section_1_price_container}>
              <p className={styles.section_1_selling_price}>
                ₹ {product?.sellingPrice}
              </p>
              <p
                style={{ textDecoration: "line-through" }}
                className={styles.section_1_actual_price}
              >
                ₹ {product?.productPrice}
              </p>
              <div className={styles.section_1_offer_container}>
                <p>
                  {((product?.productPrice - product?.sellingPrice) /
                    product?.productPrice) *
                    100}
                  % off
                </p>
              </div>
            </div>
            <div className={styles.section_1_buy_container}>
              <div className={styles.section_1_quantity_container}>
                <Minus
                  size={16}
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                />
                <p>{quantity}</p>
                <Plus size={16} onClick={() => setQuantity(quantity + 1)} />
              </div>
              <button
                className={styles.section_1_add_cart}
                onClick={handleAddToCart}
              >
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
            <p>{product?.productDescription}</p>
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
  }
};

export default Product;
