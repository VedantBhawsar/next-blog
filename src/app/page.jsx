"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import {CardList} from '@components/CardList';
import {CategoryList} from "@components/CategoryList";
import {Featured} from "@components/Featuered";
import {LoadingScreen} from "@components/LoadingScreen";
import {Menu} from "@components/Menu";
import styles from "./homepage.module.css";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const [isLoading, setIsLoading] = useState(false);
  return (
   <>
      {isLoading ? <LoadingScreen /> :
      <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      >
        <Featured />
        <CategoryList/>
        <div className={styles.content}>
          <CardList page={page} />
          <Menu />
        </div>
      </motion.div>
    }
    </>
  );
}
