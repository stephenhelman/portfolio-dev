import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 rounded-full border border-[#f59e0b] pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ transition: "left 0.08s ease, top 0.08s ease" }}
    />
  );
}
