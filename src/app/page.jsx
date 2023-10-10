import { Navbar } from "@/components/Navbar";
import styles from "./homepage.module.css";
import { Footer } from "@/components/Footer";
import { Featured } from "@/components/Featuered";
import { CategoryList } from "@/components/CategoryList";
import { CardList } from "@/components/CardList";
import { Menu } from "@/components/Menu";
import { Pagination } from "@/components/Pagination";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
