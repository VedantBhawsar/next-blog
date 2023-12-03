'use client'
import { Pacifico } from "next/font/google";
import { ClimbingBoxLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import styles from './loadingScreen.module.css';
import React from "react";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

 const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.logo} ${pacifico.variable}`}>Loading...</h1>
      <Tooltip
        id="my-tooltip"
        style={{
          borderRadius: "10px",
          fontSize: 12,
          transition: "all 350ms",
        }}
      />
      <ClimbingBoxLoader
        color="#36d7b7"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Loading..."
      />
    </div>
  );
};


export default LoadingScreen