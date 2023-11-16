"use client";
import { WriteContext } from "@/contexts/WriteContext";
import { useContext } from "react";
import ReactQuill from "react-quill";
import styles from "./textarea.module.css";

const TextArea = () => {
  const { value, setValue } = useContext(WriteContext);

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
