import React, { useEffect, useState } from "react";
import styles from "./Billing.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import NavInfo from "../../components/NavInfo/NavInfo";
import userServices from "../../services/userServices";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ArrowRight } from "@phosphor-icons/react";
import orderServices from "../../services/orderServices";
import { toast } from "react-toastify";
import cartServices from "../../services/cartServices";

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

interface Address {
  addressId: number;
  addressDetail: string;
  user: User;
}

interface Cart {
  cartId: number;
  totalAmount: number;
  user: User;
}

const Billing: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [address, setAddress] = useState<number | null>(null);

  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  const [cart, setCart] = useState<Cart | null>(null);

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const getAddresses = async () => {
    const response = await userServices.getUserAddresses();
    setAddresses(response);
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handlePlaceOrder = async () => {
    const response = await orderServices.placeOrder(address);
    if (response) {
      toast("Order placed successfully");
    } else {
      toast("Error while placing the order");
    }
  };

  const getUserCart = async () => {
    const response = await cartServices.getUserCart();
    if (response != null) {
      setCart(response);
    }
  };

  useEffect(() => {
    getAddresses();
    getUserCart();
  }, []);

  return (
    <>
      <NavBar />
      <NavInfo text="Billing Page" />
      <div className={styles.page}>
        <section className={styles.section_1}>
          <form>
            <h2>Billing Information</h2>
            <div className={styles.section_1_row1}>
              <div className={styles.section_1_infoContainer}>
                <label htmlFor="fname">First name:</label>
                <input id="fname" name="fname" type="text" />
              </div>
              <div className={styles.section_1_infoContainer}>
                <label htmlFor="lname">Last name:</label>
                <input id="lname" name="lname" type="text" />
              </div>
              <div className={styles.section_1_infoContainer}>
                <label htmlFor="cname">Company name:</label>
                <input id="cname" name="cname" type="text" />
              </div>
            </div>
            <div className={styles.section_1_row2}>
              <div className={styles.section_1_infoContainer}>
                <label htmlFor="address">Billing address:</label>

                <select
                  name="address"
                  id="address"
                  value={address}
                  onChange={handleChangeAddress}
                >
                  {addresses?.map((address) => (
                    <option value={address.addressId}>
                      {address.addressDetail}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </section>
        <section className={styles.section_2}>
          <h1>Order summery</h1>
          <div>
            {cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className={styles.section_2_items_container}
              >
                <img
                  src={`${baseURL}/image/product/${item.product.image}`}
                  alt="image"
                  width={"72px"}
                  height={"72px"}
                />
                <p>{item.product.productName}</p>
              </div>
            ))}
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
                <p>₹1</p>
              </div>
              <div className={styles.cart_details_container}>
                <p>Tax</p>
                <p>0</p>
              </div>
              <div className={styles.breakLine} />
              <button
                className={styles.section_2_proceed_btn}
                onClick={handlePlaceOrder}
              >
                <p>PLACE ORDER</p>
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Billing;
