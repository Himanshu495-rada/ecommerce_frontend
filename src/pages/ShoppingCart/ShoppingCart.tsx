import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import cartServices from "../../services/cartServices";
import { toast } from "react-toastify";

interface User {
  userId: number;
  username: string;
  name: string;
  email: string;
  role: {
    roleId: number;
    roleName: string;
  };
}

interface Cart {
  cartId: number;
  totalAmount: number;
  user: User;
}

const ShoppingCart: React.FC = () => {
  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  const [cart, setCart] = useState<Cart | null>(null);

  const updateCartItem = async (cartItemId: number, quantity: number) => {
    const formData = new FormData();
    formData.append("cartItemId", cartItemId.toString());
    formData.append("quantity", quantity.toString());
    const response = cartServices.updateCartItemQuantity(formData);
    if (response) {
      toast("Item updated");
    } else {
      toast("Error to update cart item");
    }
  };

  const getUserCart = async () => {
    const response = await cartServices.getUserCart();
    if (response != null) {
      setCart(response);
    }
  };

  const handleRemoveCartItem = async (cartItemId: number) => {
    const response = await cartServices.removeCartItem(cartItemId);
    if (response) {
      toast("Item removed");
    } else {
      toast("Error to remove item");
    }
  };

  useEffect(() => {
    getUserCart();
  }, []);

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
              <tr>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUB-TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.cartItemId}>
                  <td className={styles.section_1_product_container}>
                    <XCircle
                      size={24}
                      color="#EE5858"
                      onClick={() => handleRemoveCartItem(item.cartItemId)}
                    />
                    <img
                      src={`${baseURL}/image/product/${item.product.image}`}
                      alt="item"
                      width={"72px"}
                      height={"72px"}
                    />
                    <p>{item.product.productName}</p>
                  </td>
                  <td>
                    <b>₹{item.product.sellingPrice}</b>
                  </td>
                  <td>
                    <div className={styles.section_1_quantity_container}>
                      <Minus
                        size={16}
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateCartItem(item.cartItemId, item.quantity - 1);
                          }
                        }}
                      />
                      <p>{item.quantity}</p>
                      <Plus
                        size={16}
                        onClick={() =>
                          updateCartItem(item.cartItemId, item.quantity + 1)
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <b>₹{item.quantity * item.product.sellingPrice}</b>
                  </td>
                </tr>
              ))}
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
              <p>₹{cart?.totalAmount}</p>
            </div>
            <div className={styles.cart_details_container}>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className={styles.cart_details_container}>
              <p>Discount</p>
              <p>0</p>
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
