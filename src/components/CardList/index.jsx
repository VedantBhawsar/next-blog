'use client'
import React, {useEffect, useState} from "react";
import styles from "./cardlist.module.css";
import { Card } from "./Card";
import { Pagination } from "../Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `/api/posts?page=${page || 1}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export const CardList =  ({ page, cat }) => {
    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        const get = async () =>{
            let response = await getData()
            setPosts(response.posts)
            setCount(response.count)
        }
        get()
    }, []);
  const POST_PER_PAGE = 4;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};
