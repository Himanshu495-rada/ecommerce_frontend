import React from "react";
import styles from "./Billing.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import NavInfo from "../../components/NavInfo/NavInfo";

const Billing: React.FC = () => {
  return (
    <>
      <NavBar />
      <NavInfo text="Billing Page" />
      <div className={styles.page}>Billing</div>
      <Footer />
    </>
  );
};

export default Billing;
