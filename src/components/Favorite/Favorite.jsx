import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Product.module.css";

const Favorite = () => {
  const favorites = useSelector((state) => state.userFavorite.favorites); 

  if (favorites.length === 0) {
    return (
      <div className={styles.title}>
        <p className={styles.cartret}>Your favorite list is empty.</p>
        <Link className={styles.cartret} to={ROUTES.HOME}>
          Return to the main page
        </Link>
      </div>
    );
  }

  return (
    <section className={styles.sectioncart}>
      <div>
        <h1>Your Favorites</h1>
        <ul className={styles.cartul}>
          {favorites.map((item) => (
            <li key={item.id}>
              <div className={styles.info}>
                <h2 className={styles.titles}>{item.title}</h2>
                <p className={styles.price}>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link to={ROUTES.HOME}>Continue Shopping</Link>
      </div>
    </section>
  );
};

export default Favorite;