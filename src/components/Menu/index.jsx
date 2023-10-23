import React from "react";
import styles from "./menu.module.css";
import { MenuPosts } from "./MenuPosts";
import { MenuCategory } from "./MenuCategory";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.subtitle}>What`&apos;`s hot</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
          <MenuPosts withImage={true} />
          <MenuPosts withImage={true} />
          <MenuPosts withImage={true} />
          <MenuPosts withImage={true} />
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
          <MenuPosts />
          <MenuPosts />
          <MenuPosts />
          <MenuPosts />
        </div>
      </div>
    </div>
  );
};
