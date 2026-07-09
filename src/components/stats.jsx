"use client";
// File: src/components/Stats.jsx
import React, { useEffect, useRef, useState } from 'react';
function StatItem({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0;
        const increment = target / 200;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            setCount(Math.ceil(current));
            requestAnimationFrame(updateCounter);
          } else {
            setCount(target);
          }
        };

        updateCounter();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item [padding:30px_20px] [position:relative] [background:rgba(255,_255,_255,_0.05)] [border-radius:15px] [border:1px_solid_rgba(0,_212,_255,_0.2)] [transition:all_0.3s_ease] [&:hover]:[transform:translateY(-5px)] [&:hover]:[box-shadow:0_15px_30px_rgba(0,_212,_255,_0.2)] [&:hover]:[border-color:#526E52] [&_h3]:[font-size:3rem] [&_h3]:[font-weight:800] [&_h3]:[background:linear-gradient(45deg,_#526E52,_#454142)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[display:block] [&_h3]:[margin-bottom:10px] [&_h3]:[animation:countUp_2s_ease-out]" ref={ref}>
      <span className="[font-size:3rem] [font-weight:bold] [background:linear-gradient(45deg,_#9E9C8D,_#454142)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [display:block] [margin-bottom:10px]">{count}</span>
      <span className="[font-size:1.1rem] [opacity:0.9] [font-weight:500]">{label}</span>
    </div>
  );
}

export default function Stats({
  title = 'Transforming Lives',
  stats = [
    { target: 98, label: '% Patient Satisfaction' },
    { target: 1500, label: 'Patients Treated' },
    { target: 1500, label: 'Patients Treated' },
    { target: 15, label: 'Years of Excellence' },
  ],
  variant = ''
}) {
  return (
    <section className={`[padding:10rem_2rem] [background:rgb(69,65,66)] [color:white] [text-align:center] [min-height:60vh] [box-shadow:0_-10px_30px_rgba(0,_0,_0,_0.1),_0_-20px_60px_rgba(0,_0,_0,_0.05)] [position:relative] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[bottom:0] [&::before]:[background-image:linear-gradient(rgba(32,_32,_32,_.39),_rgba(32,_32,_32,_.39)),_url('https://cdn.prod.website-files.com/6490458e2be1642c5448d0bd/6493029b820eac4a5892507e%5Fshutterstock%5F2059307900.webp')] [&::before]:[background-size:auto,_cover] [&::before]:[opacity:0.3] ${variant}`}>
      <div className="max-[768px]:[grid-template-columns:1fr] max-[768px]:[grid-template-rows:auto] max-[768px]:[gap:20px] max-[768px]:[padding:40px_20px]">
        <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [background:linear-gradient(45deg,_#454142,_#9E9C8D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]" style={{ color: 'white' }}>{title}</h2>
        <div className="[display:grid] [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] [gap:3rem] [max-width:1000px] [margin:3rem_auto_0] [position:relative] [z-index:1]">
          {stats.map(({ target, label }, index) => (
            <StatItem key={index} target={target} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}





// File: src/components/Stats.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import '../styles/stats.css';

// function StatItem({ target, label }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         let current = 0;
//         const increment = target / 200;

//         const updateCounter = () => {
//           current += increment;
//           if (current < target) {
//             setCount(Math.ceil(current));
//             requestAnimationFrame(updateCounter);
//           } else {
//             setCount(target);
//           }
//         };

//         updateCounter();
//         observer.disconnect();
//       }
//     }, { threshold: 0.5 });

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [target]);

//   return (
//     <div className="stat-item [padding:30px_20px] [position:relative] [background:rgba(255,_255,_255,_0.05)] [border-radius:15px] [border:1px_solid_rgba(0,_212,_255,_0.2)] [transition:all_0.3s_ease] [&:hover]:[transform:translateY(-5px)] [&:hover]:[box-shadow:0_15px_30px_rgba(0,_212,_255,_0.2)] [&:hover]:[border-color:#526E52] [&_h3]:[font-size:3rem] [&_h3]:[font-weight:800] [&_h3]:[background:linear-gradient(45deg,_#526E52,_#454142)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[display:block] [&_h3]:[margin-bottom:10px] [&_h3]:[animation:countUp_2s_ease-out]" ref={ref}>
//       <span className="[font-size:3rem] [font-weight:bold] [background:linear-gradient(45deg,_#9E9C8D,_#454142)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [display:block] [margin-bottom:10px]">{count}</span>
//       <span className="[font-size:1.1rem] [opacity:0.9] [font-weight:500]">{label}</span>
//     </div>
//   );
// }

// export default function Stats() {
//   return (
//     <section className="[padding:10rem_2rem] [background:rgb(69,65,66)] [color:white] [text-align:center] [min-height:60vh] [box-shadow:0_-10px_30px_rgba(0,_0,_0,_0.1),_0_-20px_60px_rgba(0,_0,_0,_0.05)] [position:relative] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[bottom:0] [&::before]:[background-image:linear-gradient(rgba(32,_32,_32,_.39),_rgba(32,_32,_32,_.39)),_url('https://cdn.prod.website-files.com/6490458e2be1642c5448d0bd/6493029b820eac4a5892507e%5Fshutterstock%5F2059307900.webp')] [&::before]:[background-size:auto,_cover] [&::before]:[opacity:0.3]">
//       <div className="max-[768px]:[grid-template-columns:1fr] max-[768px]:[grid-template-rows:auto] max-[768px]:[gap:20px] max-[768px]:[padding:40px_20px]">
//         <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [background:linear-gradient(45deg,_#454142,_#9E9C8D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]" style={{ color: 'white' }}>Transforming Lives</h2>
//         <div className="[display:grid] [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] [gap:3rem] [max-width:1000px] [margin:3rem_auto_0] [position:relative] [z-index:1]">
//           <StatItem target={98} label="% Patient Satisfaction" />
//           <StatItem target={1500} label="Patients Treated" />
//           <StatItem target={1500} label="Patients Treated" />
//           <StatItem target={15} label="Years of Excellence" />
//         </div>
//       </div>
//     </section>
//   );
// }
