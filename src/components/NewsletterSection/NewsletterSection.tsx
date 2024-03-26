import { ArrowRight } from "@phosphor-icons/react";
import React from "react";
import styles from "./NewsletterSection.module.css";

const NewsletterSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Subscribe to our Newsletter</h1>
      <p>
        To receive promotional, season offers, new product arrival, best deails
        and etc. mails
      </p>
      <div className={styles.input_container}>
        <input type="text" placeholder="Email address" />
        <button>
          <p>SUBSCRIBE</p>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
