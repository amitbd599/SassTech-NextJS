"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null); // the outer hollow circle
  const dotRef = useRef(null); // the solid dot in the middle

  useEffect(() => {
    if (!window) return; // SSR guard

    const ring = ringRef.current;
    const dot = dotRef.current;

    /* ----------------- Mouse move (position) ----------------- */
    const move = ({ clientX: x, clientY: y }) => {
      // translate3d keeps it on its own composite layer (no jank)
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", move);

    /* ------------ Hover effects for scale / visibility ------- */
    // Any element you give className="cursor-small" or "cursor-big"
    // will trigger the proper scaling.
    const scaleOn = (scale) => () => {
      dot.style.transform += ` scale(${scale})`; // combine with translate
      ring.style.opacity = "0";
    };
    const scaleOff = () => {
      // strip any existing scale() from the transform string
      dot.style.transform = dot.style.transform.replace(/ scale\([^)]+\)/, "");
      ring.style.opacity = "1";
    };

    const smallTargets = document.querySelectorAll(".cursor-small");
    const bigTargets = document.querySelectorAll(".cursor-big");

    smallTargets.forEach((el) => {
      el.addEventListener("mouseenter", scaleOn(16));
      el.addEventListener("mouseleave", scaleOff);
    });
    bigTargets.forEach((el) => {
      el.addEventListener("mouseenter", scaleOn(26));
      el.addEventListener("mouseleave", scaleOff);
    });

    /* ---------------------- cleanup -------------------------- */
    return () => {
      window.removeEventListener("mousemove", move);
      smallTargets.forEach((el) => {
        el.removeEventListener("mouseenter", scaleOn);
        el.removeEventListener("mouseleave", scaleOff);
      });
      bigTargets.forEach((el) => {
        el.removeEventListener("mouseenter", scaleOn);
        el.removeEventListener("mouseleave", scaleOff);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className='cursor' />
      <div ref={dotRef} className='dot' />
    </>
  );
}
