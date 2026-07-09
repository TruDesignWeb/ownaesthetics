"use client";
// File: src/components/TiltedCard.jsx
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  backgroundColor = "#060010"
}) {
  const ref = useRef(null);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <div style={{ backgroundColor, padding: "2rem 0" }}>
      <figure
        ref={ref}
        className="[.home-density_.features-_&]:[height:clamp(245px,_23vw,_315px)]! [.home-density_.features-_&]:[width:clamp(220px,_23vw,_285px)]! max-[768px]:[.home-density_.features-_&]:[height:270px]! max-[768px]:[.home-density_.features-_&]:[width:min(78vw,_280px)]! [position:relative] [width:100%] [height:100%] [perspective:800px] [margin-left:0] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] max-[640px]:[margin:0_auto] max-[640px]:[width:100%]!"
        style={{ height: containerHeight, width: containerWidth }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showMobileWarning && (
          <div className="[position:absolute] [top:1rem] [text-align:center] [font-size:0.875rem] [display:none] max-[640px]:[display:block]">
            This effect is not optimized for mobile. Check on desktop.
          </div>
        )}

        <motion.div
          className="[.home-density_.features-_&]:[height:clamp(280px,_26vw,_360px)]! [.home-density_.features-_&]:[width:clamp(250px,_26vw,_315px)]! max-[768px]:[.home-density_.features-_&]:[height:310px]! max-[768px]:[.home-density_.features-_&]:[width:min(84vw,_300px)]! max-[640px]:[max-width:min(82vw,_300px)]! [position:relative] [transform-style:preserve-3d]"
          style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
        >
          <motion.img
            src={imageSrc}
            alt={altText}
            className="[.home-density_.features-_&]:[height:clamp(280px,_26vw,_360px)]! [.home-density_.features-_&]:[width:clamp(250px,_26vw,_315px)]! max-[768px]:[.home-density_.features-_&]:[height:310px]! max-[768px]:[.home-density_.features-_&]:[width:min(84vw,_300px)]! max-[640px]:[max-width:min(82vw,_300px)]! [position:absolute] [top:0] [left:0] [object-fit:cover] [border-radius:15px] [will-change:transform] [transform:translateZ(0)]"
            style={{ width: imageWidth, height: imageHeight }}
          />

          {displayOverlayContent && overlayContent && (
            <motion.div className="[.home-density_.features-_&]:[bottom:14px] [.home-density_.features-_&]:[padding:5px_16px] [position:absolute] [bottom:10px] [left:50%] [transform:translateX(-50%)] [background:rgba(247,_250,_255,_0.6)] [padding:6px_18px] [border-radius:25px] [color:black] [text-align:center] [z-index:2] [will-change:transform]">
              {overlayContent}
            </motion.div>
          )}
        </motion.div>

        {showTooltip && (
          <motion.figcaption
            className="max-[640px]:[display:none] [pointer-events:none] [position:absolute] [top:15%] [left:0%] [transform:translate(-50%,_-50%)] [text-align:center] [border-radius:4px] [background-color:#fff] [padding:6px_14px] [font-size:12px] [color:#aa5858] [opacity:0] [z-index:3]"
            style={{ x, y, opacity, rotate: rotateFigcaption }}
          >
            {captionText}
          </motion.figcaption>
        )}
      </figure>
    </div>
  );
}
