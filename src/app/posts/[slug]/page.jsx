"use client"
import {Comments} from "@/components/Comments";
import Image from "next/image";
import html from "react-inner-html";
import styles from "./singlepage.module.css";
import {useEffect, useState} from "react";

const getData = async (slug) => {
  const res = await fetch(`/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(res)
    throw new Error("Failed!");
  }
  return res.json();
};

const SinglePage = ({params}) => {
  const { slug } = params;
  const [data, setData] = useState({})
  console.log(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    async function get() {
      let response = await getData(slug);
      setData(response)
    }

    get()
  }, [slug]);


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{data?.title}</h2>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data?.user?.image}
                  alt="user image"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>
                {" "}
                {data?.createdAt?.split("-")[1]}.
                {data?.createdAt?.split("-")[2].split("T")[0]}.
                {data?.createdAt?.split("-")[0]}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image alt="" src={data.img} fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} {...html(data?.description)} />
          <div className={styles.comment}>
            <Comments postId={data.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
