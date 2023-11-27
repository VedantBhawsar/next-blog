"use client";
import React, {useState} from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import {useSession} from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export const Comments = ({ postId }) => {
  const { status } = useSession();
  const [loading, setLoading] = useState(false);

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postid=${postId}`,
    fetcher
  );

  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ description, postSlug: postId }),
    });
    await mutate();
    setDescription("");
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {loading ? (
            <button className={styles.button} style={{ cursor: "wait" }}>
              Sending
            </button>
          ) : (
            <button
              className={styles.button}
              style={{ cursor: description.length < 4 ? "not-allowed" : "" }}
              onClick={handleSubmit}
            >
              Send
            </button>
          )}
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>
                      {" "}
                      {item?.createdAt.split("-")[1]}.
                      {item?.createdAt.split("-")[2].split("T")[0]}.
                      {item?.createdAt.split("-")[0]}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};
