import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/animations.css";

export default function Bryan() {
  const images = [
    {
      src: "/assets/images/IMG_2957.jpeg",
    },
    {
      src: "/assets/images/IMG_3922.jpeg",
    },
    {
      src: "/assets/images/IMG_5641.jpeg",
    },
    {
      src: "/assets/images/IMG_1031.jpeg",
    },
    {
      src: "/assets/images/IMG_4199.jpeg",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="bryan-page" style={{ padding: "6rem 1.5rem 3rem" }}>
        <header
          className="bryan-header"
          style={{
            minHeight: "140px",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            marginBottom: "2rem",
          }}
        >
          {/* Blank header for private content */}
        </header>

        <section
          className="bryan-gallery"
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bryan-image-slot"
              style={{
                minHeight: "180px",
                background: "rgba(0, 0, 0, 0.04)",
                borderRadius: "18px",
                border: "1px dashed rgba(0,0,0,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(0,0,0,0.45)",
                fontSize: "0.95rem",
                padding: "1rem",
              }}
            >
              <img
                style={{ width: "350px", height: "500px" }}
                src={`${images[index++].src}`}
                alt="Bryan Folkers"
              />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
