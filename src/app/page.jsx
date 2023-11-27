// import {motion} from "framer-motion";
import {CardList} from '@components/CardList';
import {CategoryList} from "@components/CategoryList";
import {Featured} from "@components/Featuered";
import {LoadingScreen} from "@components/LoadingScreen";
import {Menu} from "@components/Menu";
import styles from "./homepage.module.css";


const getData = async () => {
  const res = await fetch(`/api/posts?page=${1}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export default function Home({ searchParams  }) {
  const page = parseInt(searchParams.page) || 1;
  // const [isLoading, setIsLoading] = useState(false);
  let isLoading = false
  return (
   <>
      {isLoading ? <LoadingScreen /> :
      <div
      // initial={{ opacity: 0, scale: 0.99 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}
      >
        <Featured />
        <CategoryList/>
        <div className={styles.content}>
          <CardList page={page} />
          <Menu />
        </div>
      </div>
    }
    </>
  );
}