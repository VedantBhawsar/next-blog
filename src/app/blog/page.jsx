import React, { Suspense } from "react";
import styles from "./blogPage.module.css";
import { CardList } from "@/components/CardList";
import { Menu } from "@/components/Menu";
import LoadingScreen from "@/components/LoadingScreen";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <Suspense fallback={<LoadingScreen />}>
          <CardList page={page} cat={cat} />
        </Suspense>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
