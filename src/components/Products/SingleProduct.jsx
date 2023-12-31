import React from "react";
import { useParams, Link } from "react-router-dom";
import Expensive from "../Sidebar/Expensive";
import { categoriesList } from "../Sidebar/Sidebar";
import styles from "../../styles/Product.module.css";
import { ROUTES } from "../../utils/routes";
import { addItemToCart } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../features/user/FavoriteSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCategory = categoriesList[id];
  const categoryData = Expensive.filter(
    (item) => item.category.name === selectedCategory
  );

  return (
    <section>
      <div className={styles.list}>
        {categoryData.map(({ id, images, title, price }) => (
          <div key={id} className={styles.product}>
            <div>
              <div
                className={styles.catimage}
                style={{ backgroundImage: `url(${images[0]})` }}
              />

              <div className={styles.info}>
                <h2 className={styles.titles}>{title}</h2>
                <p className={styles.price}>Price: ${price}</p>
                <div className={styles.actions}>
                  <Link
                     to={ROUTES.CART}
                    onClick={() =>
                      dispatch(
                        addItemToCart({
                          id,
                          title,
                          price,
                        })
                      )
                    }
                  >
                    <button className={styles.add}>Add to test drive</button>
                  </Link>
                  <Link to={ROUTES.FAVORITE}
                    onClick={() =>
                      dispatch(
                        addToFavorite({
                          id,
                          title,
                          price,
                        })
                      )
                    }
                  >
                     <button className={styles.add}>
                      Add to interesting
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Link className={styles.return} to={ROUTES.HOME}>
          Return to the main page
        </Link>
      </div>
    </section>
  );
};

export default SingleProduct;
//MIGRATIONZS2023
