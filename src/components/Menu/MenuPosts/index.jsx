import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuposts.module.css";

export const MenuPosts = ({ withImage, data }) => {
  return (
    <Link href={`/${data.id}`} className={styles.item}>
      {withImage && data.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.coding}`}>{data.catSlug}</span>
        <h3 className={styles.postTitle}>
          {data.title}
        </h3>
        <div className={styles.details}>
          {/*<span className={styles.username}>{data.email}</span>*/}
          <span className={styles.date}>
            {data?.createdAt.split("-")[1]}.
            {data?.createdAt.split("-")[2].split("T")[0]}.
            {data?.createdAt.split("-")[0]}
          </span>
        </div>
      </div>
    </Link>
  );
};
