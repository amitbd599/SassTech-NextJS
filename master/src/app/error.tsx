"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 className='text-4xl font-bold mb-4'>Something went wrong</h1>
        <p
          style={{
            color: "red",
          }}
        >
          {error.message}
        </p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: "red",
            padding: "10px 20px",
            borderRadius: "10px",
            color: "#fff",
            cursor: "pointer",
            border: "none",
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
