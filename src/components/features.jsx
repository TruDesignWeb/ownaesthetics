import Link from "next/link";
import TiltedCard from "./tiltedcard";

export default function Features({ title = "Featured Services", cards = [], variant = "" }) {
  if (variant !== "modern") {
    return (
      <section className={`features- [position:relative] [display:flex] [min-height:58vh] [flex-direction:column] [justify-content:center] [overflow:hidden] [background:#e6e1bf] [padding:3.8rem_2rem_3.2rem] max-[768px]:[min-height:auto] max-[768px]:[padding:2.4rem_1rem] ${variant}`}>
        <div className="[max-width:1060px] [width:100%] [margin:0_auto]">
          {title && <h2 className="[position:relative] [z-index:2] [margin-bottom:20px] [color:#2c3e50] [font-size:clamp(1.6rem,_2.8vw,_2.65rem)] [font-weight:700] [text-align:center]">{title}</h2>}
          <div className="[display:grid] [grid-template-columns:repeat(3,_minmax(220px,_1fr))] [gap:clamp(1.15rem,_2.5vw,_2rem)] [justify-items:center] max-[768px]:[grid-template-columns:1fr]">
            {cards.map((card, index) => card.link ? (
              <Link key={index} href={card.link}>
                <TiltedCard {...card} />
              </Link>
            ) : <TiltedCard key={index} {...card} />)}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="featured-services" aria-labelledby="featured-services-title">
      <div className="featured-services-inner">
        <div className="featured-services-heading">
          <p>Thoughtful treatments, chosen for you</p>
          <h2 id="featured-services-title">{title}</h2>
          <span>Explore a few of the ways we help skin look and feel its best.</span>
        </div>
        <div className="featured-services-grid">
          {cards.map((card) => (
            <Link className="featured-service" href={card.link} key={card.title}>
              <div className="featured-service-image">
                <img src={card.image} alt={card.alt} loading="lazy" />
              </div>
              <div className="featured-service-copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span>Explore treatment</span>
              </div>
            </Link>
          ))}
        </div>
        <Link className="featured-services-all-link" href="/services">
          View all services
        </Link>
      </div>
    </section>
  );
}