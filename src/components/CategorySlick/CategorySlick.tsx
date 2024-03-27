import React from "react";
import Slider, { Settings } from "react-slick";
import styles from "./CategorySlick.module.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import computerImg from "../../assets/computer.png";
import smartphoneImg from "../../assets/smartphone.png";
import headphoneImg from "../../assets/headphone.png";
import tvImg from "../../assets/tv.png";
import clothImg from "../../assets/clothing.png";
import cameraImg from "../../assets/camera.png";

interface SampleArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<SampleArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.prevBtn} onClick={onClick}>
      <ArrowRight size={30} color="white" />
    </div>
  );
};

const SamplePrevArrow: React.FC<SampleArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.prevBtn} onClick={onClick}>
      <ArrowLeft size={30} color="white" />
    </div>
  );
};

const CategorySlick: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider className={styles.slick} {...settings}>
        <div className={styles.item_container}>
          <img src={computerImg} alt="computer" />
          <h3>Computer & Laptop</h3>
        </div>
        <div className={styles.item_container}>
          <img src={smartphoneImg} alt="smartphone" />
          <h3>SmartPhone</h3>
        </div>
        <div className={styles.item_container}>
          <img src={headphoneImg} alt="headphone" />
          <h3>Headphones</h3>
        </div>
        <div className={styles.item_container}>
          <img src={tvImg} alt="tv" />
          <h3>TV & Homes</h3>
        </div>
        <div className={styles.item_container}>
          <img src={clothImg} alt="cloths" style={{ height: "150px" }} />
          <h3>Clothing</h3>
        </div>
        <div className={styles.item_container}>
          <img src={cameraImg} alt="camera" />
          <h3>Camera & Photo</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlick;
