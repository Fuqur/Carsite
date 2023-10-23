import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Product.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.user.cart);

  if (cart.length === 0) {
    return (
      <div className={styles.title}>
        <p className={styles.cartret} >Your cart is empty.</p>
        <Link className={styles.cartret} to={ROUTES.HOME} >Return to the main page</Link>
      </div>
    );
  }

  return (
    <section className={styles.sectioncart} >
    <div >
      <h1 >Your Cart</h1>
      <ul className={styles.cartul}>
        {cart.map((item) => (
          <li key={item.id}>
            <div  className={styles.info}>
              <h2 className={styles.titles}>{item.title}</h2>
              <p className={styles.price}>Price: ${item.price}</p>
              <p className={styles.price}>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link to={ROUTES.HOME}  >Continue Shopping</Link>
    </div>
    <button className={styles.favorite}>Pay </button>
    </section>
  );
};

export default Cart;