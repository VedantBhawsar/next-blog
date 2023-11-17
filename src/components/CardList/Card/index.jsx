import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import html from "react-inner-html";

export const Card = ({ post }) => {
  return (
    <div className={styles.container}>
        {post.img && <div className={styles.imageContainer}>
            <Image
                src={post.img}
                alt=""
                className={styles.image}
                loading="lazy"
                fill
            />
        </div>}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post?.createdAt.split("-")[0]}.{post?.createdAt.split("-")[1]}.
            {post?.createdAt.split("-")[2].split("T")[0]}
          </span>
          <span className={styles.category}>{post?.catSlug}</span>
        </div>
        <h1>{post?.title}</h1>
        <p className={styles.description} {...html(post?.description)}/>
        <Link href={`posts/${post?.id}`} className={styles.link}>
          Read More...
        </Link>
      </div>
    </div>
  );
};
