
// File: src/components/Outcomes.jsx
import React from 'react';export default function Outcomes({
  label = 'PROGRAMS',
  title = 'Anticipated Outcomes',
  introText = 'We expect our clients to drastically reduce their rate of aging which could lead to a reduced risk for all major diseases such as cardiovascular disease, Alzheimer\'s disease, cancer, metabolic syndrome, and frailty. Additional benefits include:',
  outcomes = [
    {
      icon: '⚡',
      title: 'Boost in physical and mental performance',
      description: 'Enhanced strength, endurance, and mental clarity for daily tasks and activities.',
    },
    {
      icon: '📈',
      title: 'Improved body composition',
      description: 'Increased muscle mass and reduced body fat for a healthier physique',
    },
    {
      icon: '🌙',
      title: 'Improved sleep quality',
      description: 'Deeper, more restful sleep, leading to better recovery and daily function.',
    },
    {
      icon: '📊',
      title: 'An overall boost in energy',
      description: 'Higher energy levels throughout the day, reducing fatigue and increasing productivity.',
    },
    {
      icon: '🏃',
      title: 'Mobility',
      description: 'Greater flexibility and ease of movement, reducing pain and risk of injury.',
    },
    {
      icon: '✨',
      title: 'Lower biological age',
      description: 'Slower aging process at the cellular level, contributing to a longer and healthier lifespan.',
    },
    {
      icon: '🧠',
      title: 'Improved cognition and overall brain health',
      description: 'Sharper memory, quicker thinking, and better decision-making abilities.',
    },
    {
      icon: '❤️',
      title: 'Improved sexual health',
      description: 'Enhanced libido and better sexual performance.',
    },
  ],
  variant = '',
}) {
  return (
    <section className={`[background:white] [padding:90px] [&.about]:[background:#9E9C8D] [&.about]:[padding:90px] ${variant}`}>
      <div className="[max-width:1200px] [margin:0_auto]">
        <div className="[color:#6c757d] [font-size:0.85rem] [font-weight:600] [letter-spacing:2px] [text-transform:uppercase] [margin-bottom:1rem]">{label}</div>

        <div className="[display:grid] [grid-template-columns:1.2fr_1fr] [gap:4rem] [align-items:start] [margin-bottom:3rem] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:2rem]">
          <div className="[&_h1]:[font-size:2.8rem] [&_h1]:[font-weight:800] [&_h1]:[color:#212529] [&_h1]:[line-height:1.2] [&_h1]:[margin-bottom:0] max-[768px]:[&_h1]:[font-size:2.2rem]">
            <h1>{title}</h1>
          </div>

          <div className="[color:#495057] [font-size:1rem] [line-height:1.7]">{introText}</div>
        </div>

        <div className="[display:grid] [grid-template-columns:repeat(3,_1fr)] [gap:2.5rem] [padding-right:50px] [padding-left:50px] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:2rem]">
          {outcomes.map((item, idx) => (
            <div className="[display:flex] [flex-direction:column] [gap:0.75rem]" key={idx}>
              <div className="[font-size:2rem] [opacity:0.7]">{item.icon}</div>
              <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">{item.title}</div>
              <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// export default function Outcomes() {
//   return (
//     <section className="[background:white] [padding:90px] [&.about]:[background:#9E9C8D] [&.about]:[padding:90px]">
//       <div className="[max-width:1200px] [margin:0_auto]">
//         <div className="[color:#6c757d] [font-size:0.85rem] [font-weight:600] [letter-spacing:2px] [text-transform:uppercase] [margin-bottom:1rem]">PROGRAMS</div>

//         <div className="[display:grid] [grid-template-columns:1.2fr_1fr] [gap:4rem] [align-items:start] [margin-bottom:3rem] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:2rem]">
//           <div className="[&_h1]:[font-size:2.8rem] [&_h1]:[font-weight:800] [&_h1]:[color:#212529] [&_h1]:[line-height:1.2] [&_h1]:[margin-bottom:0] max-[768px]:[&_h1]:[font-size:2.2rem]">
//             <h1>Anticipated Outcomes</h1>
//           </div>

//           <div className="[color:#495057] [font-size:1rem] [line-height:1.7]">
//             We expect our clients to drastically reduce their rate of aging which could lead to a reduced risk for all major diseases such as cardiovascular disease, Alzheimer's disease, cancer, metabolic syndrome, and frailty. Additional benefits include:
//           </div>
//         </div>

//         <div className="[display:grid] [grid-template-columns:repeat(3,_1fr)] [gap:2.5rem] [padding-right:50px] [padding-left:50px] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:2rem]">
//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">⚡</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Boost in physical and mental performance</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Enhanced strength, endurance, and mental clarity for daily tasks and activities.</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">📈</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Improved body composition</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Increased muscle mass and reduced body fat for a healthier physique</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">🌙</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Improved sleep quality</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Deeper, more restful sleep, leading to better recovery and daily function.</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">📊</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">An overall boost in energy</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Higher energy levels throughout the day, reducing fatigue and increasing productivity.</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">🏃</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Mobility</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Greater flexibility and ease of movement, reducing pain and risk of injury.</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">✨</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Lower biological age</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Slower aging process at the cellular level, contributing to a longer and healthier lifespan.</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">🧠</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Improved cognition and overall brain health</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Sharper memory, quicker thinking, and better decision-making abilities.</div>
//           </div>

//           <div className="[display:flex] [flex-direction:column] [gap:0.75rem]">
//             <div className="[font-size:2rem] [opacity:0.7]">❤️</div>
//             <div className="[color:#212529] [font-size:1.1rem] [font-weight:700] [line-height:1.3]">Improved sexual health</div>
//             <div className="[color:#6c757d] [font-size:0.9rem] [line-height:1.5]">Enhanced libido and better sexual performance.</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// File: src/components/Outcomes.jsx
