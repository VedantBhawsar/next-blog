"use client";
import { WriteContext } from "@contexts/WriteContext";
import { useContext } from "react";
import styles from "./textarea.module.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const TextArea = () => {
  const { value, setValue } = useContext(WriteContext);

  const modules1 = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];
  return (
    <ReactQuill
      className={styles.textArea}
      theme="bubble"
      value={value}
      onChange={setValue}
      placeholder="Tell your story..."
      modules={modules1}
      formats={formats}
    />
  );
};

export default TextArea;
