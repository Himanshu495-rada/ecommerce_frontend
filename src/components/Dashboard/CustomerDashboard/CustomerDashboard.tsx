import React, { useEffect, useState } from "react";
import styles from "./CustomerDashboard.module.css";
import userServices from "../../../services/userServices";
import { ArrowRight, UserCircle, X } from "@phosphor-icons/react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import orderServices from "../../../services/orderServices";

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

interface AddressResponse {
  addressDetail: string;
}

interface Order {
  orderId: number;
  orderPrice: number;
  user: User;
  address: Address;
}

const CustomerDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [modalState, setModalState] = useState<boolean>(false);
  const [addressText, setAddressText] = useState<string>("");
  const [orders, setOrders] = useState<Order[] | null>(null);

  const getUserData = async () => {
    const response = await userServices.getUserInfo();
    setUser(response);
    const response_2 = await userServices.getUserAddresses();
    setAddresses(response_2);
    const response_3 = await orderServices.getUserOrders();
    setOrders(response_3);
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setAddressText(e.target.value);
  };

  const handleAddressSubmit = async () => {
    const data: AddressResponse = {
      addressDetail: addressText,
    };
    await userServices.addUserAddress(data);
    toast("Address added successfully");
    setModalState(false);
  };

  const handleDeleteAddress = async (addressId: number) => {
    const response = await userServices.deleteAddress(addressId);
    if (response) {
      toast("Product deleted");
    } else {
      toast("Error while deleting product");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Hello, {user?.name}</h1>
      <p className={styles.desc}>
        From your account dashboard. you can easily check & view your Recent
        Orders, manage your Shipping and Billing Addresses and edit your
        Password and Account Details.
      </p>
      <div className={styles.infoContainer}>
        <div className={styles.userDetailsContainer}>
          <h1 className={styles.userDetails_title}>ACCOUNT INFO</h1>
          <div>
            <div className={styles.userDetails_row1}>
              <UserCircle size={48} />
              <div style={{ marginLeft: "10px" }}>
                <h2>{user?.name}</h2>
                <p>{user?.username}</p>
              </div>
            </div>
            <div className={styles.userDetails_row2}>
              <label htmlFor="email">Email:</label>
              <p id="email">{user?.email}</p>
            </div>
            <div className={styles.userDetails_row2}>
              <label htmlFor="role">Role:</label>
              <p id="role">{user?.role.roleName}</p>
            </div>
          </div>
        </div>
        <div className={styles.userAddressContainer}>
          <h1 className={styles.userDetails_title}>BILLING ADDRESS</h1>
          {addresses?.map((address, index) => (
            <p key={address.addressId} className={styles.address}>
              {index + 1} {address.addressDetail}
              <X
                size={24}
                color="#5f6c72"
                onClick={() => handleDeleteAddress(address.addressId)}
              />
            </p>
          ))}
          <button
            className={styles.addAddressBtn}
            onClick={() => setModalState(true)}
          >
            ADD ADDRESS
          </button>
        </div>
      </div>
      <div className={styles.ordersContainer}>
        <h1 className={styles.userDetails_title}>ORDER HISTORY</h1>
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>PRICE</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.orderPrice}</td>
                <td>{order.address.addressDetail}</td>
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
        <div className={styles.modal_header}>
          <h1>Add Address</h1>
          <X size={24} onClick={() => setModalState(false)} />
        </div>
        <form onSubmit={handleAddressSubmit} className={styles.form}>
          <div>
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id="address"
              cols={30}
              rows={10}
              placeholder="Enter your address here..."
              value={addressText}
              onChange={handleChangeTextarea}
            />
          </div>
          <button type="submit">
            <p>SUBMIT</p>
            <ArrowRight size={20} />
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CustomerDashboard;
