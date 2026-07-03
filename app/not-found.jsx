import Link from "next/link";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

export const metadata = {
  title: "Page Not Found | Own Aesthetics",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "160px 24px 80px",
        }}
      >
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <p>
          <Link href="/">Return to the homepage</Link> or{" "}
          <Link href="/services">browse our services</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}
