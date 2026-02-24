import "../styles/Banner4.css";

export default function Banner4({ logoSrc, bgImage }) {
  return (
    <div
      className="banner-left"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="banner-content container">
        <img
          src={logoSrc}
          alt="Logo"
          className="banner-logo"
        />
      </div>
    </div>
  );
}