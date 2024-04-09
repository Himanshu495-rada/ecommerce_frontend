import { ArrowRight, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import styles from "./AdminDashboard.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Modal from "react-modal";

const AdminDashboard: React.FC = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const [modalState, setModalState] = useState<boolean>(false);

  //const handleDeleteCategory = async (categoryId: number) => {};

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className={styles.category_container}>
        <h2>Categories</h2>
        <button className={styles.add_category_btn}>
          <p>Add category</p>
          <ArrowRight size={20} />
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CATEGORY NAME</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.categoryId}>
                <td>{category.categoryId}</td>
                <td>{category.categoryName}</td>
                <td>
                  <X size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalState}
        contentLabel="Hello"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "350px",
          },
        }}
      >
        <form className={styles.modal_form}>
          <label htmlFor="category">Category Name</label>
          <input type="text" id="category" placeholder="Enter category name" />
        </form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
