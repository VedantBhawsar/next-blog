import styles from "./homepage.module.css";
import { Featured } from "@/components/Featuered";
import { CategoryList } from "@/components/CategoryList";
import { CardList } from "@/components/CardList";
import { Menu } from "@/components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
