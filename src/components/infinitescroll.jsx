"use client";
// File: src/components/InfiniteScroll.jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
  backgroundColor = "#060010"
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight = (itemHeight * items.length) + (itemMarginTop * (items.length - 1));

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => { target.style.cursor = "grabbing"; },
      onRelease: ({ target }) => { target.style.cursor = "grab"; },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: `+=${distance}`,
            modifiers: { y: gsap.utils.unitize(wrapFn) },
          });
        });
      },
    });

    let rafId;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: { y: gsap.utils.unitize(wrapFn) },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [items, autoplay, autoplaySpeed, autoplayDirection, pauseOnHover, isTilted, tiltDirection, negativeMargin]);

  return (
    <>
      <style>{`
        .infinite-scroll-wrapper {
          max-height: ${maxHeight};
          background-color: ${backgroundColor};
        }

        .infinite-scroll-container {
          width: ${width};
        }

        .infinite-scroll-item {
          height: ${itemMinHeight}px;
          margin-top: ${negativeMargin};
        }
      `}</style>

      <div className="[position:relative] [display:flex] [align-items:center] [justify-content:center] [width:100%] [overflow:hidden] [overscroll-behavior:none] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[background:linear-gradient(var(--dir,_to_bottom),_#060010,_transparent)] [&::before]:[height:25%] [&::before]:[width:100%] [&::before]:[z-index:1] [&::before]:[pointer-events:none] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[background:linear-gradient(var(--dir,_to_bottom),_#060010,_transparent)] [&::after]:[height:25%] [&::after]:[width:100%] [&::after]:[z-index:1] [&::after]:[pointer-events:none] [&::before]:[top:0] [&::after]:[--dir:to_top] [&::after]:[bottom:0]" ref={wrapperRef}>
        <div
          className="[display:flex] [flex-direction:column] [overscroll-behavior:contain] [padding-inline:1rem] [cursor:grab] [transform-origin:center_center]"
          ref={containerRef}
          style={{ transform: getTiltTransform() }}
        >
          {items.map((item, i) => (
            <div className="[--accent-color:#ffffff] [border-radius:15px] [display:flex] [align-items:center] [justify-content:center] [padding:1rem] [font-size:1.25rem] [font-weight:600] [text-align:center] [border:2px_solid_var(--accent-color)] [user-select:none] [box-sizing:border-box] [position:relative]" key={i}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
