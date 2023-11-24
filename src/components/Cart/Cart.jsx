import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Product.module.css";
import { removeItemFromCart } from "../../features/user/userSlice";

const Cart = () => {
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart({ id: item.id }));
  };

  if (cart.length === 0) {
    return (
      <div className={styles.title}>
        <p className={styles.cartnet}>Your cart is empty.</p>
        <Link className={styles.cartret} to={ROUTES.HOME}>
          Return to the main page
      </Link>
      </div>
    );
  }

  return (
    <section className={styles.sectioncart}>
      <div>
        <h2>Your Cart</h2>
        <ul className={styles.cartul}>
          {cart.map((item) => (
            <li key={item.id}>
              <div className={styles.info}>
                <h2 className={styles.titles}>{item.title}</h2>
                <p className={styles.price}>Price: ${item.price}</p>
                <p className={styles.price}>Quantity: {item.quantity}</p>
                <button
                  className={styles.remove}
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Link to={ROUTES.HOME}>Continue Shopping</Link>
      </div>
      <button className={styles.favorite}>Pay</button>
    </section>
  );
};

export default Cart;