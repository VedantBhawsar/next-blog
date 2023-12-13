import { CardList } from "@components/CardList";
import { CategoryList } from "@components/CategoryList";
import { Featured } from "@components/Featuered";
import { Menu } from "@components/Menu";
import styles from "./homepage.module.css";
import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Suspense fallback={<LoadingScreen />}>
          <CardList page={page} />
        </Suspense>
        <Menu />
      </div>
    </>
  );
}
