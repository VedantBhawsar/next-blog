import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "5",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px",
        gap: "20px",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Not Found
      </p>
      <Link href={"/"}>
        <button
          style={{
            width: " 100px",
            border: "none",
            color: "white",
            background: "crimson",
            padding: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Go back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
