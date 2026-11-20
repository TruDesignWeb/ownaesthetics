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
          <p>One treatment of your choosing every month</p>
          <span>No enrollment fee</span>
        </div>
        <h2>The Own Aesthetics Membership</h2>
        <span className="membership-banner-action">Explore the Membership</span>
      </div>
      <div className="membership-banner-levels" aria-label="Membership levels">
        {levels.map(([name, price]) => (
          <div className="membership-banner-level" key={name}>
            <span>{name}</span>
            <strong>{price}<small>/month</small></strong>
          </div>
        ))}
      </div>
    </Link>
  );
}