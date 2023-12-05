import Image from "next/image";
import Link from "next/link";
import { LuMouse } from "react-icons/lu";
import html from "react-inner-html";
import styles from "./featured.module.css";

export const Featured = async() => {
   let response = await fetch(`http://localhost:3000/api/posts?page=${1}`);
   if(!response.ok) { return "Failed to fetch!"}
   
   const {posts}= await response.json()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <b>Hey, vedant is here!</b>
            <br />
            Explore my blog for a wealth of diverse ideas and insights.
          </h1>
        </div>
        <Link href="#post" className={styles.scrollButton}>
          Scroll <LuMouse />
        </Link>
      </div>
      <div id="post" />
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={posts[0].img}
            alt="image"
            fill
            quality={10}
            objectFit="cover"
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>
              {posts[0]?.createdAt.split("-")[0]}.
              {posts[0]?.createdAt.split("-")[1]}.
              {posts[0]?.createdAt.split("-")[2].split("T")[0]}
            </span>
            <span className={styles.category}>{posts[0]?.catSlug}</span>
          </div>
          <Link href={`posts/${posts[0]?.id}`}>
            <h1>{posts[0]?.title}</h1>
          </Link>

          <p className={styles.description} {...html(posts[0]?.description)} />
          <Link href={`posts/${posts[0]?.id}`} className={styles.link}>
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};
