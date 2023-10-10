import React from "react";
import styles from "./singlepage.module.css";
import { Menu } from "@/components/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit. Lorem, ipsum dolor.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Vedant Bhavsar</span>
              <span className={styles.date}>10.12.2003</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
