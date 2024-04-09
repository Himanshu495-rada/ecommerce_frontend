import React, { useState } from "react";
import styles from "./UserDashboard.module.css";
import NavBar from "../../components/NavBar/NavBar";
import NavInfo from "../../components/NavInfo/NavInfo";
import Footer from "../../components/Footer/Footer";
import { Gear, SignOut, Stack } from "@phosphor-icons/react";
import SellerDashboard from "../../components/Dashboard/SellerDashboard/SellerDashboard";
import authServices from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import CustomerDashboard from "../../components/Dashboard/CustomerDashboard/CustomerDashboard";
import AdminDashboard from "../../components/Dashboard/AdminDashboard/AdminDashboard";

const UserDashboard: React.FC = () => {
  const [content, setContent] = useState<string>("dashboard");

  const nav = useNavigate();

  return (
    <>
      <NavBar />
      <NavInfo text="User Dashboard" />
      <div className={styles.page}>
        <section className={styles.section_1_option}>
          <div
            className={
              content == "dashboard"
                ? styles.section_1_li_selected
                : styles.section_1_li
            }
            onClick={() => setContent("dashboard")}
          >
            <Stack size={20} />
            <p>Dashboard</p>
          </div>
          <div
            className={
              content == "setting"
                ? styles.section_1_li_selected
                : styles.section_1_li
            }
            onClick={() => setContent("setting")}
          >
            <Gear size={20} />
            <p>Setting</p>
          </div>
          <div
            className={
              content == "logout"
                ? styles.section_1_li_selected
                : styles.section_1_li
            }
            onClick={() => {
              setContent("logout");
              authServices.logout();
              nav("/");
            }}
          >
            <SignOut size={20} />
            <p>Log-out</p>
          </div>
        </section>
        {localStorage.getItem("role") == "ROLE_SELLER" ? (
          <SellerDashboard />
        ) : localStorage.getItem("role") == "ROLE_CUSTOMER" ? (
          <CustomerDashboard />
        ) : localStorage.getItem("role") == "ROLE_ADMIN" ? (
          <AdminDashboard />
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
