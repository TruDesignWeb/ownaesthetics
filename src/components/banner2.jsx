import "../styles/banner2.css";

export default function Banner2({ image, title, subtitle }) {
  return (
    <section
      className="banner2"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner2-gradient" />
      <div className="banner2-content">
        <p className="banner2-eyebrow">Own Aesthetics</p>
        <h1 className="banner2-title">{title}</h1>
        <div className="banner2-divider" />
        <p className="banner2-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}