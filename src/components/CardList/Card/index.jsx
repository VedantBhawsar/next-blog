import React, { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import html from "react-inner-html";
import { MoonLoader } from "react-spinners";

export const Card = ({ post }) => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          {post.img && (
            <Image
              src={post.img}
              alt="postimg"
              className={styles.image}
              loading="lazy"
              fill
              quality={10}
              onLoadingComplete={() => setIsImgLoading(false)}
            />
          )}
          {post.img && isImgLoading && (
            <div className={styles.imgLoading}>
              <MoonLoader color={"white"} size={30} />
            </div>
          )}
        </div>
      )}

      <div className={styles.textContainer} >
        <div className={styles.detail}>
          <span className={styles.date}>
            {post?.createdAt.split("-")[0]}.{post?.createdAt.split("-")[1]}.
            {post?.createdAt.split("-")[2].split("T")[0]}
          </span>
          <span className={styles.category}>{post?.catSlug}</span>
        </div>
        <Link href={`posts/${post?.id}`}>
          <h1>{post?.title}</h1>
        </Link>
        <p className={styles.description} {...html(post?.description)} />
        <Link href={`posts/${post?.id}`} className={styles.link}>
          Read More...
        </Link>
      </div>
    </div>
  );
};
