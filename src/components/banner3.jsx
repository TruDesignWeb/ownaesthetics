import "../styles/banner3.css";

export default function Banner3({
  image,
  title,
  subtitle,
  className = "",
  backgroundPosition,
  backgroundSize,
  // The banner heading is the page H1 by default; pages that render their
  // own H1 in the body (e.g. the SEO landing pages) pass "h2" instead.
  headingLevel: Heading = "h1",
}) {
  return (
    <div
      className={`banner3-container ${className}`.trim()}
      style={{
        backgroundImage: `url(${image})`,
        ...(backgroundPosition ? { backgroundPosition } : {}),
        ...(backgroundSize ? { backgroundSize } : {}),
      }}
    >
      <div className="banner3-underlay"></div>
      <div className="banner3-content">
        <Heading className="banner3-heading">{title}</Heading>
        <p className="banner3-subheading">{subtitle}</p>
      </div>
    </div>
  );
}
