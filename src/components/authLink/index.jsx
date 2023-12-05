"use client";
import {motion} from "framer-motion";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useState} from "react";
import styles from "./authLink.module.css";
import { IoMdClose } from "react-icons/io";

export const AuthLink = () => {
  const { data, status } = useSession();
  const [open, setOpen] = useState(false);
  
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <Link href={"/"} className={styles.link} onClick={signOut}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link href={"/login"} className={styles.link}>
            Login
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
          <div className={styles.closeBtn}>
            <IoMdClose onClick={() => setOpen(!open)} />
          </div>
          <Link href={"/"}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                damping: [0, 0.71, 0.2, 1.01],
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
                delay: 0.2,
                damping: [0, 0.71, 0.2, 1.01],
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
                damping: [0, 0.71, 0.2, 1.01],
              }}
            >
              Contact
            </motion.div>
          </Link>
          {status === "authenticated" ? (
            <>
              <Link href={"/write"}>
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4,
                    damping: [0, 0.71, 0.2, 1.01],
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
                    delay: 0.5,
                    damping: [0, 0.71, 0.2, 1.01],
                  }}
                  onClick={signOut}
                >
                  Logout
                </motion.div>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                {" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5,
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
