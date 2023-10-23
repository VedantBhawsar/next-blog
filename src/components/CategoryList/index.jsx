import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(process.env.URL + "/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories.</h1>
      <div className={styles.categories}>
        {data?.map((category) => (
          <Link
            href={`/blog?cat=${category?.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
            key={category._id}
          >
            {category.img && (
              <Image
                src={category.img}
                alt={category.slug}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
