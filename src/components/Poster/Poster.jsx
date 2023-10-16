import React from "react";
import styles from "../../styles/Home.module.css";
import BG from "../../images/fancycar.png";

const Poster =() => (
        <section className={styles.home}><div className={styles.title}>
            YOUR DREAM !!!</div>
            <div className={styles.product}>
            <div className={styles.text}>
            <div className={styles.subtitle}>Best of 2023 </div>
                  <h1 className={styles.head}>Range-Rover</h1>
                  <button className={styles.button}>More</button>
            </div>
            <div className={styles.image}><img src={BG}alt=""/>
            </div>
            </div>
            </section>
    )
    

    export default Poster