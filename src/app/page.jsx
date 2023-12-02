import {CardList} from '@components/CardList';
import {CategoryList} from "@components/CategoryList";
import {Featured} from "@components/Featuered";
import {LoadingScreen} from "@components/LoadingScreen";
import {Menu} from "@components/Menu";
import styles from "./homepage.module.css";


const getData = async () => {
  const res = await fetch(`/api/posts?page=${1}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export default function Home({ searchParams, categories  }) {
  const page = parseInt(searchParams.page) || 1;
  return (
   <div>
        <Featured />
        <CategoryList/>
        <div className={styles.content}>
          <CardList page={page} />
          <Menu />
        </div>
    </div>
  );
}
