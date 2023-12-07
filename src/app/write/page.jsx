"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { LuUpload } from "react-icons/lu";
import { create } from "zustand";

import { WriteContext } from "@/contexts/WriteContext";
import dynamic from "next/dynamic";

const useStore = create((set) => ({
  progress: 0,
  setProgress: (progress) => set((state) => ({ progress: progress })),
}));

const TextArea = dynamic(() => import("@components/TextArea"), {
  ssr: false,
});

const WritePage = () => {
  const { progress, setProgress } = useStore();
  const { value, setValue } = useContext(WriteContext);
  const { status } = useSession();
  const toastId = useRef(null);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  // const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  console.log(progress / 100);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = async () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      toast("🦄 Uploading", {
        position: "top-right",
        progress: progress / 100,
        theme: "dark",
      });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },

        (error) => {
          toast(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
          toast.success("Uploaded", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      await router.push(`/posts/${data.id}`);
      setValue("");
    }
    setLoading(true);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <input
          type="file"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <button className={styles.addButton} onClick={() => setOpen(true)}>
          <label htmlFor="image" style={{ cursor: "pointer" }}>
            <LuUpload width={16} height={16} />
          </label>
        </button>
        <TextArea />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        {loading ? "Publishing" : "Publish"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default WritePage;
