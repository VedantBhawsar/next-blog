"use client";
import { WriteContext } from "@/contexts/WriteContext";
import { useContext } from "react";
import styles from "./textarea.module.css";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';


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
