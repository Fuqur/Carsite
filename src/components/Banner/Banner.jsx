import React from "react";
import styles from "../../styles/Home.module.css"
import bannerImg from "../../images/banner.png"

const Banner = () => (
<section className={styles.banner}>
<div className={styles.left}>
<p className={styles.content}>
ATTENTION
<span>SALE</span>
</p>
<button className={styles.more}>Click here</button>
</div>
<div
      className={styles.right}
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 700, 
        backgroundPosition: "center", 
      }}
    >
<p className={styles.discount}>Save money with our discount%</p>
</div>
</section>
    )


export default Banner
