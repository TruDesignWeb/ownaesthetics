export default function Banner2({ image, title, subtitle, variant }) {
  const variantClass = variant ? variant.trim() : "";

  return (
    <section
      className={`[position:relative] [height:400px] [width:100%] [background-size:cover] [background-position:center] [display:flex] [align-items:flex-end] [justify-content:center] [border-bottom:1px_solid_rgba(241,_241,_194,_0.4)] [overflow:hidden] max-[768px]:[height:320px] max-[768px]:[&.about]:[height:360px] ${variantClass}`.trim()}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="[position:absolute] [inset:0] [background:linear-gradient(_to_top,_rgba(10,_20,_30,_0.78)_0%,_rgba(10,_20,_30,_0.35)_45%,_transparent_100%_)] [z-index:1]" />
      <div className={`banner2-content [position:relative] [z-index:2] [text-align:center] [color:#fff] [padding:0_1.5rem_3.25rem] [max-width:700px] [&.about]:[padding:0_1.5rem_2.3rem] max-[768px]:[&.about]:[padding:6rem_1.25rem_1.75rem] max-[768px]:[padding-bottom:2rem] max-[768px]:[padding-top:2rem] ${variant}`}>
        <p className="[font-size:0.7rem] [letter-spacing:0.25em] [text-transform:uppercase] [color:rgba(241,_241,_194,_0.85)] [margin-bottom:0.6rem]">Own Aesthetics</p>
        <h1 className="[font-size:3rem] [font-weight:400] [letter-spacing:0.04em] [margin-bottom:0] [line-height:1.15] max-[768px]:[.banner2-content.about_&]:[font-size:clamp(2rem,_10vw,_2.6rem)] max-[768px]:[.banner2-content.about_&]:[line-height:1.2]">{title}</h1>
        <div className="[width:48px] [height:1px] [background:rgba(241,_241,_194,_0.7)] [margin:1rem_auto]" />
        <p className="[font-size:1rem] [font-weight:300] [letter-spacing:0.06em] [color:rgba(255,_255,_255,_0.82)] [line-height:1.6] max-[768px]:[.banner2-content.about_&]:[font-size:0.9rem] max-[768px]:[.banner2-content.about_&]:[line-height:1.55]">{subtitle}</p>
      </div>
    </section>
  );
}
