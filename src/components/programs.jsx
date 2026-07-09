
// File: src/components/Programs.jsx
// import React from 'react';
// import '../styles/programs.css';

// export default function Programs() {
//   return (
//     <section className="[padding:80px_20px] [min-height:100vh] [position:relative] [background:white] [overflow-y:auto]">
//       <div className="[text-align:center] [margin-bottom:60px] [position:relative] [z-index:100]">
//         <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [background:linear-gradient(45deg,_#454142,_#9E9C8D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]">Longevity Programs</h2>
//         <p className="[font-size:1.2rem] [color:rgba(0,0,0,0.9)] [max-width:600px] [margin:0_auto]">
//           We offer comprehensive programs, each focusing on different body systems to optimize your health and extend your lifespan.
//         </p>
//       </div>
//       <div className="[max-width:1200px] [margin:0_auto] [position:relative]">
//         <div className="[position:sticky]! [background:rgba(255,_255,_255,_0.95)] [border-radius:20px] [padding:30px] [box-shadow:0_15px_35px_rgba(0,0,0,0.1)] [backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,255,255,0.2)] [margin-bottom:40px] [width:100%] [max-width:1100px] [margin-left:auto] [margin-right:auto] [transition:all_0.3s_ease] [min-height:200px] [height:400px]! [top:20px]! [&:nth-child(1)]:[top:20px] [&:nth-child(1)]:[z-index:10] [&:nth-child(2)]:[top:40px] [&:nth-child(2)]:[z-index:9] [&:nth-child(3)]:[top:60px] [&:nth-child(3)]:[z-index:8] [&:nth-child(4)]:[top:80px] [&:nth-child(4)]:[z-index:7] [&:nth-child(5)]:[top:100px] [&:nth-child(5)]:[z-index:6] [&:nth-child(6)]:[top:120px] [&:nth-child(6)]:[z-index:5] [&:nth-child(7)]:[top:140px] [&:nth-child(7)]:[z-index:4] [&:nth-child(8)]:[top:160px] [&:nth-child(8)]:[z-index:3] [&:nth-child(9)]:[top:180px] [&:nth-child(9)]:[z-index:2] [&:nth-child(10)]:[top:200px] [&:nth-child(10)]:[z-index:1] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[height:4px] [&::before]:[background:linear-gradient(90deg,_#667eea,_#764ba2)] [&::before]:[border-radius:20px_20px_0_0] [&:hover]:[transform:translateY(-5px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,0,0,0.2)] [&:hover]:[z-index:99]! max-[768px]:[margin-left:0]! max-[768px]:[margin-right:0]! max-[768px]:[max-width:100%] max-[768px]:[&:nth-child(n)]:[top:60px] max-[768px]:[padding:25px]">
//           <h3 className="[font-size:1.5rem] [font-weight:600] [color:#2c3e50] [margin-bottom:15px] [display:flex] [align-items:center] [gap:15px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [width:40px] [height:40px] [border-radius:50%] [display:flex] [align-items:center] [justify-content:center] [font-weight:700] [font-size:1.1rem] [flex-shrink:0]">01</span> Longevity 360
//           </h3>
//           <p className="[color:#555] [font-size:0.95rem] [line-height:1.7] [margin-bottom:20px]">
//             Comprehensive assessments and personalized interventions aimed at enhancing overall lifespan and healthspan.
//           </p>
//           <div className="[display:flex] [flex-wrap:wrap] [gap:8px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Advanced Diagnostics</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Personalized Plan</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Cutting-edge Therapies</span>
//           </div>
//         </div>
//         <div className="[position:sticky]! [background:rgba(255,_255,_255,_0.95)] [border-radius:20px] [padding:30px] [box-shadow:0_15px_35px_rgba(0,0,0,0.1)] [backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,255,255,0.2)] [margin-bottom:40px] [width:100%] [max-width:1100px] [margin-left:auto] [margin-right:auto] [transition:all_0.3s_ease] [min-height:200px] [height:400px]! [top:20px]! [&:nth-child(1)]:[top:20px] [&:nth-child(1)]:[z-index:10] [&:nth-child(2)]:[top:40px] [&:nth-child(2)]:[z-index:9] [&:nth-child(3)]:[top:60px] [&:nth-child(3)]:[z-index:8] [&:nth-child(4)]:[top:80px] [&:nth-child(4)]:[z-index:7] [&:nth-child(5)]:[top:100px] [&:nth-child(5)]:[z-index:6] [&:nth-child(6)]:[top:120px] [&:nth-child(6)]:[z-index:5] [&:nth-child(7)]:[top:140px] [&:nth-child(7)]:[z-index:4] [&:nth-child(8)]:[top:160px] [&:nth-child(8)]:[z-index:3] [&:nth-child(9)]:[top:180px] [&:nth-child(9)]:[z-index:2] [&:nth-child(10)]:[top:200px] [&:nth-child(10)]:[z-index:1] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[height:4px] [&::before]:[background:linear-gradient(90deg,_#667eea,_#764ba2)] [&::before]:[border-radius:20px_20px_0_0] [&:hover]:[transform:translateY(-5px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,0,0,0.2)] [&:hover]:[z-index:99]! max-[768px]:[margin-left:0]! max-[768px]:[margin-right:0]! max-[768px]:[max-width:100%] max-[768px]:[&:nth-child(n)]:[top:60px] max-[768px]:[padding:25px]">
//           <h3 className="[font-size:1.5rem] [font-weight:600] [color:#2c3e50] [margin-bottom:15px] [display:flex] [align-items:center] [gap:15px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [width:40px] [height:40px] [border-radius:50%] [display:flex] [align-items:center] [justify-content:center] [font-weight:700] [font-size:1.1rem] [flex-shrink:0]">02</span> Weight Loss
//           </h3>
//           <p className="[color:#555] [font-size:0.95rem] [line-height:1.7] [margin-bottom:20px]">
//             Holistic approach to achieving and maintaining a healthy weight.
//           </p>
//           <div className="[display:flex] [flex-wrap:wrap] [gap:8px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Metabolic Analysis</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Custom Nutrition</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Behavioral Support</span>
//           </div>
//         </div>
//         <div className="[position:sticky]! [background:rgba(255,_255,_255,_0.95)] [border-radius:20px] [padding:30px] [box-shadow:0_15px_35px_rgba(0,0,0,0.1)] [backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,255,255,0.2)] [margin-bottom:40px] [width:100%] [max-width:1100px] [margin-left:auto] [margin-right:auto] [transition:all_0.3s_ease] [min-height:200px] [height:400px]! [top:20px]! [&:nth-child(1)]:[top:20px] [&:nth-child(1)]:[z-index:10] [&:nth-child(2)]:[top:40px] [&:nth-child(2)]:[z-index:9] [&:nth-child(3)]:[top:60px] [&:nth-child(3)]:[z-index:8] [&:nth-child(4)]:[top:80px] [&:nth-child(4)]:[z-index:7] [&:nth-child(5)]:[top:100px] [&:nth-child(5)]:[z-index:6] [&:nth-child(6)]:[top:120px] [&:nth-child(6)]:[z-index:5] [&:nth-child(7)]:[top:140px] [&:nth-child(7)]:[z-index:4] [&:nth-child(8)]:[top:160px] [&:nth-child(8)]:[z-index:3] [&:nth-child(9)]:[top:180px] [&:nth-child(9)]:[z-index:2] [&:nth-child(10)]:[top:200px] [&:nth-child(10)]:[z-index:1] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[height:4px] [&::before]:[background:linear-gradient(90deg,_#667eea,_#764ba2)] [&::before]:[border-radius:20px_20px_0_0] [&:hover]:[transform:translateY(-5px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,0,0,0.2)] [&:hover]:[z-index:99]! max-[768px]:[margin-left:0]! max-[768px]:[margin-right:0]! max-[768px]:[max-width:100%] max-[768px]:[&:nth-child(n)]:[top:60px] max-[768px]:[padding:25px]">
//           <h3 className="[font-size:1.5rem] [font-weight:600] [color:#2c3e50] [margin-bottom:15px] [display:flex] [align-items:center] [gap:15px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [width:40px] [height:40px] [border-radius:50%] [display:flex] [align-items:center] [justify-content:center] [font-weight:700] [font-size:1.1rem] [flex-shrink:0]">03</span> Hormone Balance
//           </h3>
//           <p className="[color:#555] [font-size:0.95rem] [line-height:1.7] [margin-bottom:20px]">
//             Addresses hormonal imbalances that can affect your overall health and well-being.
//           </p>
//           <div className="[display:flex] [flex-wrap:wrap] [gap:8px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Hormonal Assessment</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Bioidentical HRT</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Lifestyle Changes</span>
//           </div>
//         </div>
//         <div className="[position:sticky]! [background:rgba(255,_255,_255,_0.95)] [border-radius:20px] [padding:30px] [box-shadow:0_15px_35px_rgba(0,0,0,0.1)] [backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,255,255,0.2)] [margin-bottom:40px] [width:100%] [max-width:1100px] [margin-left:auto] [margin-right:auto] [transition:all_0.3s_ease] [min-height:200px] [height:400px]! [top:20px]! [&:nth-child(1)]:[top:20px] [&:nth-child(1)]:[z-index:10] [&:nth-child(2)]:[top:40px] [&:nth-child(2)]:[z-index:9] [&:nth-child(3)]:[top:60px] [&:nth-child(3)]:[z-index:8] [&:nth-child(4)]:[top:80px] [&:nth-child(4)]:[z-index:7] [&:nth-child(5)]:[top:100px] [&:nth-child(5)]:[z-index:6] [&:nth-child(6)]:[top:120px] [&:nth-child(6)]:[z-index:5] [&:nth-child(7)]:[top:140px] [&:nth-child(7)]:[z-index:4] [&:nth-child(8)]:[top:160px] [&:nth-child(8)]:[z-index:3] [&:nth-child(9)]:[top:180px] [&:nth-child(9)]:[z-index:2] [&:nth-child(10)]:[top:200px] [&:nth-child(10)]:[z-index:1] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[height:4px] [&::before]:[background:linear-gradient(90deg,_#667eea,_#764ba2)] [&::before]:[border-radius:20px_20px_0_0] [&:hover]:[transform:translateY(-5px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,0,0,0.2)] [&:hover]:[z-index:99]! max-[768px]:[margin-left:0]! max-[768px]:[margin-right:0]! max-[768px]:[max-width:100%] max-[768px]:[&:nth-child(n)]:[top:60px] max-[768px]:[padding:25px]">
//           <h3 className="[font-size:1.5rem] [font-weight:600] [color:#2c3e50] [margin-bottom:15px] [display:flex] [align-items:center] [gap:15px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [width:40px] [height:40px] [border-radius:50%] [display:flex] [align-items:center] [justify-content:center] [font-weight:700] [font-size:1.1rem] [flex-shrink:0]">04</span> Regenerative Medicine
//           </h3>
//           <p className="[color:#555] [font-size:0.95rem] [line-height:1.7] [margin-bottom:20px]">
//             Leverages advanced therapies to promote healing and regeneration of damaged tissues.
//           </p>
//           <div className="[display:flex] [flex-wrap:wrap] [gap:8px]">
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Stem Cell Therapy</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">PRP Treatment</span>
//             <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">Tissue Regeneration</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// File: src/components/Programs.jsx
import React from 'react';const programs = [
  {
    title: 'Longevity 360',
    number: '01',
    description: 'Comprehensive assessments and personalized interventions aimed at enhancing overall lifespan and healthspan.',
    features: ['Advanced Diagnostics', 'Personalized Plan', 'Cutting-edge Therapies']
  },
  {
    title: 'Weight Loss',
    number: '02',
    description: 'Holistic approach to achieving and maintaining a healthy weight.',
    features: ['Metabolic Analysis', 'Custom Nutrition', 'Behavioral Support']
  },
  {
    title: 'Hormone Balance',
    number: '03',
    description: 'Addresses hormonal imbalances with personalized treatment including bioidentical hormone replacement therapy.',
    features: ['Hormonal Assessment', 'Bioidentical HRT', 'Lifestyle Changes']
  },
  {
    title: 'Regenerative Medicine',
    number: '04',
    description: 'Advanced therapies like stem cell therapy and PRP for tissue regeneration.',
    features: ['Stem Cell Therapy', 'PRP Treatment', 'Tissue Regeneration']
  }
];

export default function Programs() {
  return (
    <section className="[padding:80px_20px] [min-height:100vh] [position:relative] [background:white] [overflow-y:auto]">
      <div className="[text-align:center] [margin-bottom:60px] [position:relative] [z-index:100]">
        <h2 className="[font-size:clamp(1.6rem,_2.8vw,_2.65rem)]! [line-height:1.12]! [text-align:center] [background:linear-gradient(45deg,_#454142,_#9E9C8D)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] [position:relative] [z-index:2] [text-shadow:0_0_40px_rgba(0,255,136,0.3)] [font-weight:700] [color:#2c3e50] [margin-bottom:20px]">Longevity Programs</h2>
        <p className="[font-size:1.2rem] [color:rgba(0,0,0,0.9)] [max-width:600px] [margin:0_auto]">
          We offer comprehensive programs, each focusing on different body systems to optimize your health and extend your lifespan.
        </p>
      </div>
      <div className="">
        {programs.map((program, idx) => (
          <div key={idx} className="">
            <div className="[position:sticky]! [background:rgba(255,_255,_255,_0.95)] [border-radius:20px] [padding:30px] [box-shadow:0_15px_35px_rgba(0,0,0,0.1)] [backdrop-filter:blur(10px)] [border:1px_solid_rgba(255,255,255,0.2)] [margin-bottom:40px] [width:100%] [max-width:1100px] [margin-left:auto] [margin-right:auto] [transition:all_0.3s_ease] [min-height:200px] [height:400px]! [top:20px]! [&:nth-child(1)]:[top:20px] [&:nth-child(1)]:[z-index:10] [&:nth-child(2)]:[top:40px] [&:nth-child(2)]:[z-index:9] [&:nth-child(3)]:[top:60px] [&:nth-child(3)]:[z-index:8] [&:nth-child(4)]:[top:80px] [&:nth-child(4)]:[z-index:7] [&:nth-child(5)]:[top:100px] [&:nth-child(5)]:[z-index:6] [&:nth-child(6)]:[top:120px] [&:nth-child(6)]:[z-index:5] [&:nth-child(7)]:[top:140px] [&:nth-child(7)]:[z-index:4] [&:nth-child(8)]:[top:160px] [&:nth-child(8)]:[z-index:3] [&:nth-child(9)]:[top:180px] [&:nth-child(9)]:[z-index:2] [&:nth-child(10)]:[top:200px] [&:nth-child(10)]:[z-index:1] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[top:0] [&::before]:[left:0] [&::before]:[right:0] [&::before]:[height:4px] [&::before]:[background:linear-gradient(90deg,_#667eea,_#764ba2)] [&::before]:[border-radius:20px_20px_0_0] [&:hover]:[transform:translateY(-5px)_scale(1.02)] [&:hover]:[box-shadow:0_25px_50px_rgba(0,0,0,0.2)] [&:hover]:[z-index:99]! max-[768px]:[margin-left:0]! max-[768px]:[margin-right:0]! max-[768px]:[max-width:100%] max-[768px]:[&:nth-child(n)]:[top:60px] max-[768px]:[padding:25px]">
              <h3 className="[font-size:1.5rem] [font-weight:600] [color:#2c3e50] [margin-bottom:15px] [display:flex] [align-items:center] [gap:15px]">
                <span className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [width:40px] [height:40px] [border-radius:50%] [display:flex] [align-items:center] [justify-content:center] [font-weight:700] [font-size:1.1rem] [flex-shrink:0]">{program.number}</span>
                {program.title}
              </h3>
              <p className="[color:#555] [font-size:0.95rem] [line-height:1.7] [margin-bottom:20px]">{program.description}</p>
              <div className="[display:flex] [flex-wrap:wrap] [gap:8px]">
                {program.features.map((feature, i) => (
                  <span key={i} className="[background:linear-gradient(135deg,_#667eea,_#764ba2)] [color:white] [padding:5px_12px] [border-radius:20px] [font-size:0.8rem] [font-weight:500]">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}