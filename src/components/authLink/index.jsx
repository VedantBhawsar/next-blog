import React from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

export const AuthLink = () => {
  const isLogin = "false";
  return (
    <>
      {isLogin ? (
        <>
          <Link href={"/logout"}>Logout</Link>
        </>
      ) : (
        <>
          <Link href={"/write"}>Write</Link>
          <span href={"/login"} className={styles.link}>
            Login
          </span>
        </>
      )}
    </>
  );
};
