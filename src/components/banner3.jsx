import "../styles/banner3.css";

export default function Banner3({ image, title, subtitle }) {
  return (
    <div
      className="banner3-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner3-underlay"></div>
      <div className="banner3-content">
        <h2 className="banner3-heading">{title}</h2>
        <p className="banner3-subheading">{subtitle}</p>
      </div>
    </div>
  );
}
