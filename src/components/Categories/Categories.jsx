import React from 'react';
import styles from '../../styles/Categories.module.css';
import { Link } from 'react-router-dom';

const Categories = ({ title, customProducts, amount }) => {
  const list = customProducts.slice(0, amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, title, images, price, clickable }) => (
          <div key={id} className={styles.item}>
            {clickable ? (
              <Link to={`/categories/${id}`} className={styles.link}>
                <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }} />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>Price: ${price}</p>
              </Link>
            ) : (
              <div>
                <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }} />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>Price: ${price}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
