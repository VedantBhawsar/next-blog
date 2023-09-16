"use client";
import React, { useState } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

export const AuthLink = () => {
  const [open, setOpen] = useState(false);
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
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};
