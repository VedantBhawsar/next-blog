'use client'
import React, {useEffect, useState} from "react";
import styles from "./menu.module.css";
import {MenuPosts} from "./MenuPosts";
import {MenuCategory} from "./MenuCategory";


const getData = async () => {
    const res = await fetch(`/api/posts?page=${1}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed!");
    }
    return res.json();
};
export const Menu = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const get = async () =>{
            let posts = await getData()
            setPost(posts.posts)
            return posts
        }
        get()
    }, []);

    console.log(post)

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.subtitle}>What&apos;s hot</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
            {post &&
                post?.map((data)=> <MenuPosts withImage={true} key={data?.id} data={data} />
                )
            }
        </div>
      </div>
      <div>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategory />
      </div>
      <div>
        <h2 className={styles.subtitle}>Chosen by the editor</h2>
        <h1 className={styles.title}>Editor Pick</h1>
        <div className={styles.items}>
            {post &&
                post?.map((data)=> <MenuPosts  key={data?.id} data={data} />
                )
            }
        </div>
      </div>
    </div>
  );
};
