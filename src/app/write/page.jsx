"use client";
import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { BsCardImage, BsCameraVideo } from "react-icons/bs";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <AiOutlinePlus color="inherit" size={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <BsCardImage color="inherit" size={16} />
            </button>
            <button className={styles.addButton}>
              <AiOutlineUpload color="inherit" size={16} />
            </button>
            <button className={styles.addButton}>
              <BsCameraVideo color="inherit" size={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Pushed</button>
    </div>
  );
};

export default WritePage;
