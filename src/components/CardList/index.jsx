"use client";
import { Suspense, useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { Card } from "./Card";
import styles from "./cardlist.module.css";
import LoadingScreen from "../LoadingScreen";
import NotFound from "@components/not-found";
const getData = async (page, cat) => {
  const res = await fetch(`/api/posts?page=${page || 1}&cat=${cat || ""}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export const CardList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const get = async () => {
      let response = await getData(page, cat);
      setPosts(response.posts);
      setCount(response.count);
    };
    setIsLoading(false);
    get();
  }, [cat, page]);

  const POST_PER_PAGE = 6;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : posts.length >= 1 ? (
        <div className={styles.container}>
          {/* Recent Posts */}
          <h1 className={styles.title} id={"recent_posts"}></h1>
          <div className={styles.posts}>
            <Suspense fallback={<LoadingScreen />}>
              {posts?.map((post) => (
                <Card post={post} key={post.id} />
              ))}
            </Suspense>
          </div>
          <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};
