import React from "react";
import styles from "./NavInfo.module.css";
import { CaretRight, House } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface navinfoProps {
  text: string;
}

const NavInfo: React.FC<navinfoProps> = ({ text }) => {
  const nav = useNavigate();

  return (
    <div className={styles.section}>
      <div className={styles.container} onClick={() => nav("/")}>
        <House size={20} />
        <p>Home</p>
      </div>
      <CaretRight size={12} style={{ margin: "0 10px" }} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default NavInfo;
