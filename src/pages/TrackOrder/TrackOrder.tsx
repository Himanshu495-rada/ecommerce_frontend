import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { ArrowRight, Info } from "@phosphor-icons/react";
import styles from "./TrackOrder.module.css";
import NavInfo from "../../components/NavInfo/NavInfo";

const TrackOrder: React.FC = () => {
  return (
    <>
      <NavBar />
      <NavInfo text="Track Order" />
      <div className={styles.page}>
        <h1 className={styles.title}>Track Order</h1>
        <p className={styles.description}>
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. this was given to you on
          your receipt and in the confirmation email you should have received.
        </p>
        <form className={styles.form}>
          <div>
            <label>Order ID</label>
            <input type="text" placeholder="ID..." />
          </div>
          <div>
            <label>Billing Email</label>
            <input type="text" placeholder="Email address" />
          </div>
        </form>
        <div className={styles.info_container}>
          <Info size={24} />
          <p>Order ID that we sended to your in your email address.</p>
        </div>
        <button className={styles.button}>
          <p>TRACK ORDER</p>
          <ArrowRight size={24} color="white" />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default TrackOrder;
