import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { Link } from "react-router-dom";

const categoriesList = [
  "Expensive cars",
  "Cheap cars",
  "Average cars",
  "Cars for travel",
  "Racing cars",
];
export { categoriesList };

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.lister}>
          {categoriesList.map((category, index) => (
            <li key={index}>
              <Link to={`/categories/${index}`} className={styles.categoryLink}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a href="/terms" target="_blank" className={styles.link} style={{ textDecoration: "underline" }}>
          Terms&Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;