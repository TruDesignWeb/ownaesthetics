// File: src/components/Features.jsx
import React from 'react';
import TiltedCard from './tiltedcard';
import MagneticButton from './magneticbutton';
import Link from "next/link";

export default function Features({
  title = 'Revolutionary Healthcare',
  cards = [],
  variant = '',
}) {
  return (
    <section className={`features- [padding-top:clamp(2.5rem,_4.5vw,_4.4rem)]! [padding-bottom:clamp(2.5rem,_4.5vw,_4.4rem)]! max-[768px]:[padding-top:2rem]! max-[768px]:[padding-bottom:2rem]! [padding:3.8rem_2rem_3.2rem] [background:rgba(230,_225,_191,_0.986)] [position:relative] [overflow:hidden] [min-height:58vh] [display:flex] [flex-direction:column] [justify-content:center] [width:auto] [box-shadow:0_-10px_30px_rgba(0,_0,_0,_0.1),_0_-20px_60px_rgba(0,_0,_0,_0.05)] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[bottom:0] [&::before]:[background-image:url(data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%201440%20600%27%3E%3Crect%20width=%271440%27%20height=%27600%27%20fill=%27%23F7F2EB%27/%3E%3Cpath%20d=%27M0,120%20C300,40%20600,200%20900,120%20C1200,40%201440,160%201440,160%20L1440,440%20C1200,520%20900,380%20600,460%20C300,540%200,420%200,420%20Z%27%20fill=%27%23EBE1D2%27/%3E%3Cpath%20d=%27M0,180%20C400,260%20800,100%201440,220%20L1440,420%20C1000,500%20600,340%200,460%20Z%27%20fill=%27%23A0AD93%27%20fill-opacity=%270.35%27/%3E%3C/svg%3E)] [&::before]:[opacity:1] max-[768px]:[padding:2.4rem_1rem] max-[768px]:[min-height:auto] ${variant}`}>
      <div className="[max-width:1060px]! [margin:0_auto] [width:100%] max-[768px]:[width:100%] max-[768px]:[padding:0]">
        <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [background:linear-gradient(45deg,_#454142,_#9E9C8D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]">{title}</h2>
        <div className="[display:grid] [grid-template-columns:repeat(3,_minmax(220px,_1fr))] [gap:clamp(1.15rem,_2.5vw,_2rem)] [justify-items:center] [align-items:center] [padding:1rem_0_0] [padding-left:0] [&>a]:[display:flex] [&>a]:[justify-content:center] [&>a]:[width:100%] [&>a>div]:[display:flex] [&>a>div]:[justify-content:center] [&>a>div]:[width:100%] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:0.9rem] max-[768px]:[justify-items:center] max-[768px]:[padding:0] max-[768px]:[padding-left:0]">
          {cards.map((card, idx) =>
            card.link ? (
              <Link key={idx} href={card.link}>
                <TiltedCard {...card} />
              </Link>
            ) : (
              <TiltedCard key={idx} {...card} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}


// 




// File: src/components/Features.jsx
// import React from 'react';
// import '../styles/features.css';
// import TiltedCard from './tiltedcard';
// import MagneticButton from './magneticbutton';

// export default function Features() {
//   return (
//     <section className="">
//       <div className="max-[768px]:[grid-template-columns:1fr] max-[768px]:[grid-template-rows:auto] max-[768px]:[gap:20px] max-[768px]:[padding:40px_20px]">
//         <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [background:linear-gradient(45deg,_#454142,_#9E9C8D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]">Revolutionary Healthcare</h2>
//         <div className="[display:grid] [grid-template-columns:repeat(3,_minmax(220px,_1fr))] [gap:clamp(1.15rem,_2.5vw,_2rem)] [justify-items:center] [align-items:center] [padding:1rem_0_0] [padding-left:0] [&>a]:[display:flex] [&>a]:[justify-content:center] [&>a]:[width:100%] [&>a>div]:[display:flex] [&>a>div]:[justify-content:center] [&>a>div]:[width:100%] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:0.9rem] max-[768px]:[justify-items:center] max-[768px]:[padding:0] max-[768px]:[padding-left:0]">
          
//           <TiltedCard
//             imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//             altText="Kendrick Lamar - GNX Album Cover"
//             captionText="Kendrick Lamar - GNX"
//             containerHeight="250px"
//             containerWidth="300px"
//             imageHeight="250px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.1}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//                 <p className="[.home-density_.features-_&]:[font-size:0.95rem]">
//                 Kendrick Lamar - GNX
//                 </p>
//             }
//             backgroundColor='rgba(0,0,0,0)'
//             />
//             <TiltedCard
//             imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//             altText="Kendrick Lamar - GNX Album Cover"
//             captionText="Kendrick Lamar - GNX"
//             containerHeight="250px"
//             containerWidth="300px"
//             imageHeight="250px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.1}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//                 <p className="[.home-density_.features-_&]:[font-size:0.95rem]">
//                 Kendrick Lamar - GNX
//                 </p>
//             }
//             backgroundColor='rgba(0,0,0,0)'
//             />
//             <TiltedCard
//             imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//             altText="Kendrick Lamar - GNX Album Cover"
//             captionText="Kendrick Lamar - GNX"
//             containerHeight="250px"
//             containerWidth="300px"
//             imageHeight="250px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.1}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//                 <p className="[.home-density_.features-_&]:[font-size:0.95rem]">
//                 Kendrick Lamar - GNX
//                 </p>
//             }
//             backgroundColor='rgba(0,0,0,0)'
//             />

{/*             
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="250px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="[.home-density_.features-_&]:[font-size:0.95rem]">
                Kendrick Lamar - GNX
                </p>
            }
            backgroundColor='rgba(0,0,0,0)'
            />
            <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="250px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="[.home-density_.features-_&]:[font-size:0.95rem]">
                Kendrick Lamar - GNX
                </p>
            }
            backgroundColor='rgba(0,0,0,0)'
            />
            <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="250px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="[.home-density_.features-_&]:[font-size:0.95rem]">
                Kendrick Lamar - GNX
                </p>
            }
            backgroundColor='rgba(0,0,0,0)'
            /> 

            
        </div>
      </div>
    </section>
  );
}

/*}

{/* <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
            <span className="[font-size:4rem] [margin-bottom:1.5rem] [display:block] [background:linear-gradient(45deg,_#beca78,_#296d0a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.3))] [animation:bounce_3s_ease-in-out_infinite] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-500%)] [&::after]:[width:80px] [&::after]:[height:80px] [&::after]:[background:radial-gradient(circle,_rgba(236,_214,_90,_0.1)_0%,_transparent_70%)] [&::after]:[border-radius:50%] [&::after]:[z-index:-1] [&::after]:[animation:pulse_2s_infinite] max-[768px]:[font-size:2.5rem] max-[768px]:[margin-bottom:1rem]">🧬</span>
            <h3>Precision Medicine</h3>
            <p>Personalized treatment plans based on your unique genetic profile, lifestyle, and health history for optimal outcomes.</p>
          </div> 
          <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
            <span className="[font-size:4rem] [margin-bottom:1.5rem] [display:block] [background:linear-gradient(45deg,_#beca78,_#296d0a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.3))] [animation:bounce_3s_ease-in-out_infinite] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-500%)] [&::after]:[width:80px] [&::after]:[height:80px] [&::after]:[background:radial-gradient(circle,_rgba(236,_214,_90,_0.1)_0%,_transparent_70%)] [&::after]:[border-radius:50%] [&::after]:[z-index:-1] [&::after]:[animation:pulse_2s_infinite] max-[768px]:[font-size:2.5rem] max-[768px]:[margin-bottom:1rem]">🤖</span>
            <h3>AI Health Assistant</h3>
            <p>24/7 intelligent health monitoring and guidance powered by advanced artificial intelligence and machine learning.</p>
          </div>
          <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
            <span className="[font-size:4rem] [margin-bottom:1.5rem] [display:block] [background:linear-gradient(45deg,_#beca78,_#296d0a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.3))] [animation:bounce_3s_ease-in-out_infinite] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-500%)] [&::after]:[width:80px] [&::after]:[height:80px] [&::after]:[background:radial-gradient(circle,_rgba(236,_214,_90,_0.1)_0%,_transparent_70%)] [&::after]:[border-radius:50%] [&::after]:[z-index:-1] [&::after]:[animation:pulse_2s_infinite] max-[768px]:[font-size:2.5rem] max-[768px]:[margin-bottom:1rem]">💊</span>
            <h3>Preventive Care</h3>
            <p>Proactive health strategies and early detection systems to prevent illness before it starts.</p>
          </div>
          <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
            <span className="[font-size:4rem] [margin-bottom:1.5rem] [display:block] [background:linear-gradient(45deg,_#beca78,_#296d0a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.3))] [animation:bounce_3s_ease-in-out_infinite] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-500%)] [&::after]:[width:80px] [&::after]:[height:80px] [&::after]:[background:radial-gradient(circle,_rgba(236,_214,_90,_0.1)_0%,_transparent_70%)] [&::after]:[border-radius:50%] [&::after]:[z-index:-1] [&::after]:[animation:pulse_2s_infinite] max-[768px]:[font-size:2.5rem] max-[768px]:[margin-bottom:1rem]">🧘</span>
            <h3>Mental Wellness</h3>
            <p>Comprehensive mental health support including therapy, mindfulness, and stress management programs.</p>
          </div>
          <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
            <span className="[font-size:4rem] [margin-bottom:1.5rem] [display:block] [background:linear-gradient(45deg,_#beca78,_#296d0a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.3))] [animation:bounce_3s_ease-in-out_infinite] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-500%)] [&::after]:[width:80px] [&::after]:[height:80px] [&::after]:[background:radial-gradient(circle,_rgba(236,_214,_90,_0.1)_0%,_transparent_70%)] [&::after]:[border-radius:50%] [&::after]:[z-index:-1] [&::after]:[animation:pulse_2s_infinite] max-[768px]:[font-size:2.5rem] max-[768px]:[margin-bottom:1rem]">📱</span>
            <h3>Digital Health Hub</h3>
            <p>Seamless integration across all your devices for complete health tracking and telemedicine consultations.</p>
          </div>
          <div className="[padding:clamp(1.35rem,_2.4vw,_2.35rem)]! [:where(&)_:where(p)]:[font-size:clamp(0.88rem,_1vw,_0.98rem)]! [:where(&)_:where(p)]:[line-height:1.6]! [:where(&)_:where(h2)]:[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [:where(&)_:where(h2)]:[line-height:1.12]! [backdrop-filter:blur(20px)] [border:1px_solid_rgba(255,255,255,0.2)] [border-radius:30px] [overflow:hidden] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:-100%] [&::before]:[width:100%] [&::before]:[height:100%] [&::before]:[background:linear-gradient(90deg,_transparent,_rgba(0,255,136,0.1),_transparent)] [&::before]:[transition:left_0.6s_ease] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:0] [&::after]:[left:0] [&::after]:[right:0] [&::after]:[bottom:0] [&::after]:[background:radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.05)_0%,_transparent_70%)] [&::after]:[opacity:0] [&::after]:[transition:opacity_0.4s_ease] [&:hover]:[transform:translateY(-15px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,255,136,0.2)] [&:hover]:[border-color:rgba(182,_214,_108,_0.4)] [&:hover::before]:[left:100%] [&:hover::after]:[opacity:1] [&_h3]:[font-size:1.8rem] [&_h3]:[font-weight:700] [&_h3]:[margin-bottom:1.5rem] [&_h3]:[background:linear-gradient(45deg,_#1a1a1a,_#4a5568)] [&_h3]:[-webkit-background-clip:text] [&_h3]:[-webkit-text-fill-color:transparent] [&_h3]:[background-clip:text] [&_h3]:[position:relative] [&_h3::after]:[content:''] [&_h3::after]:[position:absolute] [&_h3::after]:[bottom:-5px] [&_h3::after]:[left:0] [&_h3::after]:[width:0] [&_h3::after]:[height:2px] [&_h3::after]:[background:linear-gradient(45deg,_#96ac37,_#087c0e)] [&_h3::after]:[transition:width_0.4s_ease] [&:hover_h3::after]:[width:100%] [&_p]:[position:relative] [&_p]:[z-index:2] max-[768px]:[border-radius:20px] max-[768px]:[&_h3]:[font-size:1.3rem] max-[768px]:[&_h3]:[margin-bottom:1rem] [animation:pulse_4s_infinite] [&:nth-child(3)]:[animation-delay:1s] [&:nth-child(4)]:[animation-delay:2s] [background:#ffffff] [max-width:440px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.08)] [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] [isolation:isolate] [.feature-wrapper:hover_&]:[transform:translateY(-6px)] [.feature-wrapper:hover_&]:[box-shadow:0_20px_50px_rgba(0,_0,_0,_0.12)] [&_h2]:[font-size:1.75rem] [&_h2]:[margin-bottom:1rem] [&_h2]:[color:#1f2933] [&_p]:[font-size:0.95rem] [&_p]:[line-height:1.6] [&_p]:[color:#4b5563] [&_p]:[margin-bottom:1.35rem] [position:relative] [z-index:2] max-[768px]:[max-width:100%] max-[768px]:[&_h2]:[font-size:1.5rem] max-[768px]:[&_h2]:[margin-bottom:0.75rem] max-[768px]:[&_p]:[font-size:0.9rem] max-[768px]:[&_p]:[line-height:1.5] max-[768px]:[&_p]:[margin-bottom:1.25rem]">
            <span className="[font-size:4rem] [margin-bottom:1.5rem] [display:block] [background:linear-gradient(45deg,_#beca78,_#296d0a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.3))] [animation:bounce_3s_ease-in-out_infinite] [position:relative] [&::after]:[content:''] [&::after]:[position:absolute] [&::after]:[top:50%] [&::after]:[left:50%] [&::after]:[transform:translate(-50%,_-500%)] [&::after]:[width:80px] [&::after]:[height:80px] [&::after]:[background:radial-gradient(circle,_rgba(236,_214,_90,_0.1)_0%,_transparent_70%)] [&::after]:[border-radius:50%] [&::after]:[z-index:-1] [&::after]:[animation:pulse_2s_infinite] max-[768px]:[font-size:2.5rem] max-[768px]:[margin-bottom:1rem]">🏃</span>
            <h3>Lifestyle Coaching</h3>
            <p>Expert guidance on nutrition, fitness, sleep, and wellness habits for sustainable health improvements.</p>
          </div>
          */}