import React from "react";
import styles from "./cardlist.module.css";
import Image from "next/image";
import { Card } from "./Card";
import { Pagination } from "../Pagination";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
