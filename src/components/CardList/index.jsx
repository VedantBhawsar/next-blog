import React from "react";
import styles from "./cardlist.module.css";
import { Card } from "./Card";
import { Pagination } from "../Pagination";

const getData = async (page) => {
  const res = await fetch(process.env.URL + `/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export const CardList = async ({ page }) => {
  const data = await getData(page);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.map((post) => (
          <Card post={post} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};
