export default function Banner3({
  image,
  title,
  subtitle,
  className="",
  backgroundPosition,
  backgroundSize,
  // The banner heading is the page H1 by default; pages that render their
  // own H1 in the body (e.g. the SEO landing pages) pass "h2" instead.
  headingLevel: Heading = "h1",
}) {
  return (
    <div
      className={`[position:relative] [min-height:430px] [width:100%] [display:flex] [align-items:flex-end] [padding:0_8%_44px_8%] [margin-top:18px] [border-bottom:4px_solid_#f1f1c2] [overflow:hidden] [background-size:cover] [background-position:center] [&::before]:[content:''] [&::before]:[position:absolute] [&::before]:[inset:0] [&::before]:[background:linear-gradient(_to_top,_rgba(10,_20,_30,_0.78)_0%,_rgba(10,_20,_30,_0.35)_45%,_transparent_100%_)] [&::before]:[z-index:0] max-[900px]:[min-height:320px] max-[900px]:[padding:5%_6%] max-[600px]:[min-height:300px] max-[600px]:[padding:5%_5%] ${className}`.trim()}
      style={{
        backgroundImage: `url(${image})`,
        ...(backgroundPosition ? { backgroundPosition } : {}),
        ...(backgroundSize ? { backgroundSize } : {}),
      }}
    >
      <div className=""></div>
      <div className="[position:relative] [z-index:1] [max-width:650px] [color:white] max-[900px]:[max-width:100%]">
        <Heading className="[font-size:clamp(1.8rem,_3.6vw,_2.6rem)] [margin-bottom:1rem] [font-weight:500]">{title}</Heading>
        <p className="[font-size:clamp(1rem,_2vw,_1.4rem)] [line-height:1.6] [opacity:0.95]">{subtitle}</p>
      </div>
    </div>
  );
}
