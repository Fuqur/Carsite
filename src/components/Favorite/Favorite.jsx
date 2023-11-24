import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Product.module.css";
import { removeFromFavorite } from "../../features/user/FavoriteSlice";

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();

  if (!favorite || favorite.length === 0) {
    return (
      <div className={styles.title}>
        <p className={styles.cartnet}>Your favorite list is empty.</p>
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
          {favorite.map((item) => (
            <li key={item.id}>
              <div className={styles.info}>
                <h2 className={styles.titles}>{item.title}</h2>
                <p className={styles.price}>Price: ${item.price}</p>
                <p className={styles.price}>Quantity: {item.quantity}</p>
                <button
                  className={styles.remove}
                  onClick={() => dispatch(removeFromFavorite(item))}
                >
                  Remove from Favorites
                </button>
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