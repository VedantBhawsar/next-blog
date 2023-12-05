import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

export const CategoryList =async () => {
  const response = await fetch('http://localhost:3000/api/categories',{
    cache:"force-cache"
  })
  if(!response.ok){
    return "Something went wrong!"
  }
  const data = await response.json()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories.</h1>
      <div className={styles.categories}>
        {data?.map((category) => (
          <Link
            key={category.id}
            href={`/blog?cat=${category?.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt={category.slug}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
