"use client";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AuthLink } from "../authLink";
import { ThemeToggle } from "../themeToggle";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Pacifico } from 'next/font/google'
import { FaGithub } from "react-icons/fa";
// Dancing Script

const pacifico = Pacifico({
    variable: '--font-pacifico',
    subsets: ['latin'],
    weight:'400'
})

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Tooltip
          id="my-tooltip"
          style={{
            borderRadius: "10px",
            fontSize: 12,
            transition: "all 350ms",
          }}
        />
        <Link href={"https://facebook.com/"} target="_blank">
          <Image
            className={styles.socialIcon}
            src={"/facebook.png"}
            alt="facebook"
            width={24}
            height={24}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Facebook"
          />
        </Link>
        <Link href={"https://instagram.com/"} target="_blank">
          <Image
            className={styles.socialIcon}
            src={"/instagram.png"}
            alt="instagram"
            width={24}
            height={24}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Instagram"
          />
        </Link>
        <Link href={"https://tiktok.com/"} target="_blank">
          <Image
            className={styles.socialIcon}
            src={"/tiktok.png"}
            alt="tiktok"
            width={24}
            height={24}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Tiktok"
          />
        </Link>
        <Link href={"https://youtube.com/"} target="_blank">
          <Image
            className={styles.socialIcon}
            src={"/youtube.png"}
            alt="youtube"
            width={24}
            height={24}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Youtube"
          />
        </Link>
      </div>
      <Link href={"/"} className={`${styles.logo} ${pacifico.variable}`}>
        {/*<Image src={'./logo.svg'} alt={'logo'} fill={true}/>*/}
          DiaryBlog
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/"} className={styles.link}>
          Homepage
        </Link>
        <Link href={"/"} className={styles.link}>
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};
