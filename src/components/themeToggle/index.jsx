"use client";
import Image from "next/image";
import React, {useContext} from "react";
import {ThemeContext} from "@contexts/ThemeContext";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#fff" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={"/sun.png"} alt="sun" width={14} height={14} />
    </div>
  );
};
