import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

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
        <div className={styles.icons}>
          <Image
            src={"/facebook.png"}
            height={18}
            width={18}
            alt="facebook image"
          />
          <Image
            src={"/instagram.png"}
            height={18}
            width={18}
            alt="instagram image"
          />
          <Image
            src={"/tiktok.png"}
            height={18}
            width={18}
            alt="tiktok image"
          />
          <Image
            src={"/youtube.png"}
            height={18}
            width={18}
            alt="youtube image"
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>{" "}
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Travel</Link>
        </div>{" "}
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"} target="_blank">
            FaceBook
          </Link>
          <Link href={"/"} target="_blank">
            Instagram
          </Link>
          <Link href={"/"} target="_blank">
            Tiktok
          </Link>
          <Link href={"/"} target="_blank">
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};
