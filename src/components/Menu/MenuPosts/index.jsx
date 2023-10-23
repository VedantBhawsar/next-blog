import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuposts.module.css";

export const MenuPosts = ({ withImage }) => {
  return (
    <Link href={"/"} className={styles.item}>
      {withImage && (
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.details}>
          <span className={styles.username}>Vedant</span>
          <span className={styles.date}>-10.12.2003</span>
        </div>
      </div>
    </Link>
  );
};
