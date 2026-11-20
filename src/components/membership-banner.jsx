import Link from "next/link";

const levels = [
  ["Silver", "$179"],
  ["Gold", "$249"],
  ["Platinum", "$349"],
];

export default function MembershipBanner() {
  return (
    <Link
      className="membership-banner"
      href="/membership"
      aria-label="Explore the Own Aesthetics Membership"
    >
      <div className="membership-banner-copy">
        <div className="membership-banner-eyebrow">
          <p>Care that keeps showing up for you</p>
          <span>No enrollment fee</span>
        </div>
        <h2>One monthly treatment. A plan that feels like yours.</h2>
        <span className="membership-banner-action">Explore membership</span>
      </div>
      <div className="membership-banner-levels" aria-label="Membership levels">
        {levels.map(([name, price]) => (
          <div className="membership-banner-level" key={name}>
            <span>{name}</span>
            <strong>{price}<small>/mo</small></strong>
          </div>
        ))}
      </div>
    </Link>
  );
}