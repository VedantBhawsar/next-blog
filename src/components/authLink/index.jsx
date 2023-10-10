"use client";
import React, { useState } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export const AuthLink = () => {
  const [open, setOpen] = useState(false);
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <>
          <Link href={"/login"} className={styles.link}>
            Login
          </Link>
        </>
      ) : (
        <>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <Link href={"/logout"} className={styles.link}>
            Logout
          </Link>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/home"}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Home
            </motion.div>
          </Link>
          <Link href={"/about"}>
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              About us
            </motion.div>
          </Link>
          <Link href={"/contact"}>
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Contact
            </motion.div>
          </Link>
          {isLogin ? (
            <>
              <Link href={"/write"}>
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Write
                </motion.div>
              </Link>
              <Link href={"/login"}>
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Logout
                </motion.div>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/logout"}>
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Login
                </motion.div>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};
