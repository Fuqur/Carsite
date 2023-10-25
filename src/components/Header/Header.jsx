import React from "react";
import styles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import { useSelector } from "react-redux";
import UserSignupForm from "../User/UserSignupForm";
import { useState } from "react";

const Header = () => {
  const [values] = useState({ name: "Guest", avatar: AVATAR });

  const [showSignupForm, setShowSignupForm] = useState(false);
  const productsCountInCart = useSelector((state) => state.user.cart.length);
  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };
  const favorite = useSelector((state) => state.favorite.favorite);
  const productsCountInFavorite = favorite.length;
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />{" "}
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
          <button className={styles.signupButton} onClick={toggleSignupForm}>
            {" "}
            Sign up
          </button>{" "}
          <UserSignupForm
            closeForm={() => setShowSignupForm(false)}
            show={showSignupForm}
          />
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#car`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="start your search..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.FAVORITE} className={styles.cart}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#car`} />
            </svg>
            {productsCountInFavorite ? (
              <span className={styles.count}>{productsCountInFavorite}</span>
            ) : null}
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {productsCountInCart ? (
              <span className={styles.count}>{productsCountInCart}</span>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
