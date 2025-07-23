"use client";
export default function TopProgressBar() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "99999999999",
        top: 0,
        left: 0,
        height: "4px",
        width: "100%",
        backgroundColor: "red",
        animation: "loadingBar 2s linear infinite",
      }}
    >
      <style jsx>{`
        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
