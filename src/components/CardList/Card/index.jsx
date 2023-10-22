import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {post?.img && (
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post?.createdAt.split("-")[0]}.{post?.createdAt.split("-")[1]}.
            {post?.createdAt.split("-")[2].split("T")[0]}
          </span>
          <span className={styles.category}>{post?.catSlug}</span>
        </div>
        <Link href={"/"}>
          <h1>{post?.title}</h1>
        </Link>
        <p className={styles.description}>{post?.description}</p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
