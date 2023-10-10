import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12.10.2003</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          architecto nihil veritatis et rem commodi magni delectus rerum vel
          ipsa.
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
