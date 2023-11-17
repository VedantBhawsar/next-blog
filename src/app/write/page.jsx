"use client";
import TextArea from "@/components/TextArea";
import { WriteContext } from "@/contexts/WriteContext";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { BsCameraVideo, BsCardImage } from "react-icons/bs";
import "react-quill/dist/quill.bubble.css";
import { app } from "@/utils/firebase";
import styles from "./writePage.module.css";

const WritePage = () => {
  const { value, setValue } = useContext(WriteContext);
  const { status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // if (status === "unauthenticated") {
  //   router.push("/");
  // }

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
      setValue('')
    }
    setLoading(true);

  };

  return (
    <div className={styles.container}>
      <textarea
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
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <AiOutlinePlus color="inherit" size={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <BsCardImage color="inherit" size={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <AiOutlineUpload color="inherit" size={16} />
            </button>
            <button className={styles.addButton}>
              <BsCameraVideo color="inherit" size={16} />
            </button>
          </div>
        )}
        <div style={{ width: "100%", height: "90%" }}>
          <TextArea />
        </div>
      </div>
      {loading ? (
        <button
          className={styles.publish}
          onClick={handleSubmit}
          style={{ cursor: "wait" }}
        >
          Publishing
        </button>
      ) : (
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
      )}
    </div>
  );
};

export default WritePage;
