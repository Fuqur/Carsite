import React from "react";
import styles from "../../styles/Products.module.css";
import customProducts from "./customProducts"; 

const Products = ({ title, style = {}, amount }) => {
  const list = customProducts.slice(0, amount); 

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list.map(({ id, images, title, category, price }) => (
          <div key={id} className={styles.product}>
            <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }} />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.excar}>{category.name}</div>
              <div className={styles.info}>
                <div className={styles.price}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.oldPrice}>{Math.floor(price / 0.5)}$</div>
                </div>
                <div className={styles.purchases}>{Math.floor(Math.random() * 20 + 1)} purchased</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;