'use client'
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { Card } from "./Card";
import styles from "./cardlist.module.css";

const getData = async (page, cat) => {
  const res = await fetch(
    `/api/posts?page=${page || 1}&cat=${cat || ""}`,
    {
      cache: "force-cache",
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
            let response = await getData(page, cat)
            setPosts(response.posts)
            setCount(response.count)
        }
        get()
    }, [page]);
  
  const POST_PER_PAGE = 6;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  return (
    <div className={styles.container}>
      <h1 className={styles.title} id={'recent_posts'}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};
