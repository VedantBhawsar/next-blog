'use client'
import Image from "next/image";
import styles from "./featured.module.css";
import Link from "next/link";
import { LuMouse } from "react-icons/lu";
import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
const getData = async () => {
  let url = `/api/posts?page=${1}`
  console.log(url)
  const res = await fetch(`/api/posts?page=${1}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export const Featured =  () => {
  const [post, setPost] = useState([])
  useEffect(() => {
    const get = async () =>{
       let posts = await getData()
      setPost(posts.posts)
    }
    get()
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <b>Hey, vedant is here!</b>
          <br />
          Explore my blog for a wealth of diverse ideas and insights.
        </h1>
        <motion.div>
        <Link href="#post" className={styles.scrollButton}>
          Scroll <LuMouse />
        </Link>
        </motion.div>
      </div>
      <div id="post" />
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={"/p1.jpeg"} alt="image" fill />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
          <span className={styles.date}>
            {post[0]?.createdAt.split("-")[0]}.{post[0]?.createdAt.split("-")[1]}.
            {post[0]?.createdAt.split("-")[2].split("T")[0]}
          </span>
            <span className={styles.category}>
              {post[0]?.catSlug}
            </span>
          </div>
          <Link href={`posts/${post[0]?.id}`}>
          <h1>
            {post[0]?.title}
          </h1>
          </Link>

          <p className={styles.description}>
            {post[0]?.description}
                    </p>
          <Link href={`posts/${post[0]?.id}`} className={styles.link}>
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};
