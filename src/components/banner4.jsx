export default function Banner4({ logoSrc, bgImage }) {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="[z-index:3] [margin-top:clamp(40px,_8vh,_100px)] [max-width:800px] [padding-top:clamp(2rem,_5vh,_4rem)] max-[900px]:[margin-top:clamp(24px,_5vh,_56px)] max-[900px]:[padding:1.5rem_1.25rem_0] max-[600px]:[margin-top:2.5rem] max-[600px]:[padding:4.25rem_1rem_1.25rem] max-[600px]:[max-width:92vw] max-[768px]:[grid-template-columns:1fr] max-[768px]:[grid-template-rows:auto] max-[768px]:[gap:20px] max-[768px]:[padding:40px_20px]">
        <img
          src={logoSrc}
          alt="Logo"
          className="[width:42%] max-[900px]:[width:min(48%,_300px)] max-[600px]:[width:min(48%,_190px)]"
        />
      </div>
    </div>
  );
}