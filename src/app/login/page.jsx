"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoginPage = () => {
  let [google_loading, set_google_loading] = useState(false);
  let [github_loading, set_github_loading] = useState(false);
  const { data, status } = useSession();
  console.log(data, status);

  const googleHandler = async () => {
    set_google_loading(true);
    await signIn("google");
    set_google_loading(false);
  };

  const githubHandler = async () => {
    set_github_loading(true);
    await signIn("github");
    set_github_loading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={googleHandler}>
          Signin with Google
          {google_loading && (
            <MoonLoader color="white" loading={google_loading} size={"25"} />
          )}
        </div>
        <div className={styles.socialButton} onClick={githubHandler}>
          Signin with Github
          {github_loading && (
            <MoonLoader color="white" loading={github_loading} size={"25"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
