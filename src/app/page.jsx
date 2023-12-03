import { CardList } from "@components/CardList";
import { CategoryList } from "@components/CategoryList";
import { Featured } from "@components/Featuered";
import { Menu } from "@components/Menu";
import styles from "./homepage.module.css";

export default function Home({ searchParams, categories }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </>
  );
}
