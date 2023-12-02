"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import styles from "./categoryList.module.css";

const getData = async () => {
  const res = await fetch("/api/categories", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export const CategoryList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const get = async () => {
      let response = await getData();
      setData(response);
    };
    get();
  },[]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories.</h1>
      <div className={styles.categories}>
        {data?.map((category) => (
          <Link
            key={category.id}
            href={`/blog?cat=${category?.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
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
