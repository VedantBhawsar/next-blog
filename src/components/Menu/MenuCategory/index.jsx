import React from "react";
import styles from "./menucategory.module.css";
import Link from "next/link";

export const MenuCategory = () => {
  return (
    <div className={styles.categories}>
      <Link
        href={"/blog?cat=styles"}
        className={`${styles.categoryItem} ${styles.style}`}
      >
        style
      </Link>
      <Link
        href={"/blog?cat=fashion"}
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        fashion
      </Link>
      <Link
        href={"/blog?cat=food"}
        className={`${styles.categoryItem} ${styles.food}`}
      >
        food
      </Link>
      <Link
        href={"/blog?cat=travel"}
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        travel
      </Link>
      <Link
        href={"/blog?cat=culture"}
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        culture
      </Link>
      <Link
        href={"/blog?cat=coding"}
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        coding
      </Link>
    </div>
  );
};
