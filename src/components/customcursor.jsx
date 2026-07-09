"use client";
// File: src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .service-card, .stat-item').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, .service-card, .stat-item').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`[width:30px] [height:30px] [border:2px_solid_#06612f] [border-radius:50%] [position:fixed] [pointer-events:none] [z-index:99999] [transition:transform_0.1s_ease] [mix-blend-mode:difference] [&.hover]:[transform:scale(2)] [&.hover]:[background:rgba(0,_212,_255,_0.2)] [&.hover]:[border-color:#ada76b] [&.hover]:[pointer-events:none] ${hovering ? ' hover' : ''}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
