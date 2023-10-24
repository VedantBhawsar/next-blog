"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import styles from "./textarea.module.css";

const TextArea = ({ value, setValue }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return setMounted(false);
  });
  return (
    <ReactQuill
      className={styles.textArea}
      theme="bubble"
      value={value}
      onChange={setValue}
      placeholder="Tell your story..."
    />
  );
};

export default TextArea;
