import { ArrowRight, MagnifyingGlass, X, XCircle } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import styles from "./SellerDashboard.module.css";
import headphoneImg from "../../../assets/gaming_headphone.png";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../../store";
import productServices from "../../../services/productServices";

interface Product {
  name: string;
  description: string;
  actual_price: number;
  selling_price: number;
  quantity: number;
  image: File | null;
  categoryId: number;
}

const SellerDashboard: React.FC = () => {
  const [modalState, setModalState] = useState<boolean>(false);

  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    actual_price: 0,
    selling_price: 0,
    quantity: 0,
    image: null,
    categoryId: null,
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result?.toString() || null);
        setProduct({ ...product, image: imageFile || null });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setPreviewImage(null);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setProduct({ ...product, image: null });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const userId: string | null = localStorage.getItem("userId");
    formData.append("productName", product.name);
    formData.append("productDescription", product.description);
    formData.append("productPrice", product.actual_price.toString());
    formData.append("sellingPrice", product.selling_price.toString());
    formData.append("remainingQuantity", product.quantity.toString());
    formData.append("imageFile", product.image);
    formData.append("userId", userId);
    formData.append("categoryId", product.categoryId.toString());

    const token: string = localStorage.getItem("jwtToken");
    const response = productServices.addProduct(formData, token);
    if (response !== null) {
      setProduct({
        name: "",
        description: "",
        actual_price: 0,
        selling_price: 0,
        quantity: 0,
        image: null,
        categoryId: 0,
      });
      setPreviewImage(null);
      toast("Product added successfully 🥳🥳");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sellers dashboard</h1>
      <div className={styles.input_container}>
        <MagnifyingGlass size={24} />
        <input type="text" placeholder="Search for products" />
      </div>

      <button className={styles.add_product_btn} onClick={handleOpenModal}>
        <p>Add Product</p>
        <ArrowRight size={20} />
      </button>
      <table className={styles.table}>
        <thead>
          <th>PRODUCT NAME</th>
          <th>PRODUCT DESCRIPTION</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>ACTIONS</th>
        </thead>
        <tbody>
          <tr>
            <td className={styles.section_1_product_container}>
              <img
                src={headphoneImg}
                alt="headphone"
                width={"72px"}
                height={"72px"}
              />
              <p>Wired Over-Ear Gaming Headphones with USB</p>
            </td>
            <td>
              <b>Wired Over-Ear Gaming Headphones with USB</b>
            </td>
            <td>
              <b>1</b>
            </td>
            <td>
              <b>₹5000</b>
            </td>
            <td>
              <button className={styles.update_btn}>UPDATE</button>
              <button className={styles.remove_btn}>REMOVE</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal
        isOpen={modalState}
        contentLabel="Hello"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <div className={styles.modal_header}>
          <h1>Add Product</h1>
          {/* <button >Close</button> */}
          <X size={24} onClick={handleCloseModal} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form_container}>
            <div className={styles.form_details_container}>
              <div className={styles.form_detail_container_field}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.form_detail_container_field}>
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.form_detail_container_field}>
                <label htmlFor="actual_price">Actual Price:</label>
                <input
                  type="number"
                  name="actual_price"
                  value={product.actual_price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.form_detail_container_field}>
                <label htmlFor="selling_price">Selling Price:</label>
                <input
                  type="number"
                  name="selling_price"
                  value={product.selling_price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.form_detail_container_field}>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.form_detail_container_field}>
                <label htmlFor="category">Category:</label>
                <select
                  name="categoryId"
                  id="category"
                  onChange={handleCategoryChange}
                >
                  <option value={1}>Select category</option>
                  {categories.map((category) => (
                    <option
                      value={category.categoryId}
                      key={category.categoryId}
                    >
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.form_image_container}>
              <div className={styles.form_image_header_container}>
                <label htmlFor="image">Product Image:</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
              {previewImage && (
                <div className={styles.preview_container}>
                  <XCircle
                    onClick={handleRemoveImage}
                    size={15}
                    weight="fill"
                    color="red"
                  />
                  <img src={previewImage} alt="preview_image" />
                </div>
              )}
            </div>
          </div>
          <button className={styles.form_submit_btn} type="submit">
            <p>Submit</p>
            <ArrowRight size={20} />
          </button>
        </form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default SellerDashboard;
