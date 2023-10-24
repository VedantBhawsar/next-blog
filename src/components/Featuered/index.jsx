import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <b>Hey, vedant is here!</b>
          <br />
          Explore my blog for a wealth of diverse ideas and insights.
        </h1>
        <a href="#post" className={styles.scrollButton}>
          Scroll
        </a>
      </div>
      <div id="post" />
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={"/p1.jpeg"} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            repellat vero sunt repudiandae ipsum earum laboriosam necessitatibus
            possimus asperiores in soluta quidem tempora ea doloribus quisquam
            molestias, fugit mollitia perferendis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
