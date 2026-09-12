"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MagnetButton({ children = "Hover Me", className = "" }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-20, 20], [10, -10]);
  const rotateY = useTransform(x, [-20, 20], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`[display:inline-flex] [align-items:center] [justify-content:center] [border:1px_solid_rgba(255,_255,_255,_0.75)] [border-radius:999px] [padding:0.95rem_1.7rem] [background:rgba(255,_255,_255,_0.12)] [backdrop-filter:blur(10px)] [color:white] [font:inherit] [font-size:1rem] [font-weight:600] [letter-spacing:0.08em] [text-transform:uppercase] [cursor:pointer] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.18)] [transition:background_0.3s_ease,_box-shadow_0.3s_ease,_border-color_0.3s_ease] [&:hover]:[background:rgba(255,_255,_255,_0.24)] [&:hover]:[border-color:white] [&:hover]:[box-shadow:0_14px_34px_rgba(0,_0,_0,_0.28)] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}