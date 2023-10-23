"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} alt="website logo" width={50} height={50} />
          <h1 className={styles.logoText}>LameBlog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          consequatur voluptatibus velit atque deleniti animi voluptas,
          temporibus porro quasi modi reiciendis exercitationem maxime corrupti
          quidem, minus, veritatis eum quia id.
        </p>
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
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"} className={styles.link}>
            Homepage
          </Link>
          <Link href={"/blog"} className={styles.link}>
            Blog
          </Link>
          <Link href={"/"} className={styles.link}>
            About
          </Link>
          <Link href={"/"} className={styles.link}>
            Contact
          </Link>
        </div>{" "}
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/blog?cat=coding"} className={styles.link}>
            Coding
          </Link>
          <Link href={"/blog?cat=style"} className={styles.link}>
            Style
          </Link>
          <Link href={"/blog?cat=fashion"} className={styles.link}>
            Fashion
          </Link>
          <Link href={"/blog?cat=travel"} className={styles.link}>
            Travel
          </Link>
        </div>{" "}
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"} target="_blank" className={styles.link}>
            FaceBook
          </Link>
          <Link href={"/"} target="_blank" className={styles.link}>
            Instagram
          </Link>
          <Link href={"/"} target="_blank" className={styles.link}>
            Tiktok
          </Link>
          <Link href={"/"} target="_blank" className={styles.link}>
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};
