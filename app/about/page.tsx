import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Capitalloss is an editorial archive of mistakes, losses, and lessons from ambitious lives.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "60px" }}>

        {/* Hero */}
        <section style={{ borderBottom: "1px solid #2a2a2a", padding: "clamp(4rem, 10vw, 7.5rem) 2rem clamp(3rem, 6vw, 5rem)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>About</p>
            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#ede8df",
              maxWidth: "900px",
            }}>
              The mistakes<br />behind ambition.
            </h1>
          </div>
        </section>

        {/* Manifesto body */}
        <section style={{ borderBottom: "1px solid #2a2a2a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start", flexWrap: "wrap" }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
                  lineHeight: 1.55,
                  color: "#c8c2b8",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                }}>
                  People share wins publicly. The most valuable lessons usually
                  come from mistakes, wrong turns, bad timing, poor decisions,
                  missed opportunities, and things falling apart.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.78, color: "#9c9690" }}>
                  Capitalloss exists to document those moments and the lessons inside them.
                  This is an editorial archive built around one idea: the mistakes behind ambition.
                </p>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.78, color: "#9c9690" }}>
                  The project explores the real losses people take while trying to build something
                  meaningful — businesses, creative careers, side hustles, reputations, momentum,
                  money, time, confidence, and relationships.
                </p>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.78, color: "#9c9690" }}>
                  It should feel more like:{" "}
                  <em style={{ color: "#c8c2b8" }}>
                    Here is what happened. Here is what it cost. Here is what can be learned.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial standards */}
        <section style={{ borderBottom: "1px solid #2a2a2a", backgroundColor: "#0d0d0d" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>Our standards</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "2rem" }}>
              {[
                { title: "Sourced", body: "Every article about real people and companies cites verifiable public sources — interviews, books, journalism, filings." },
                { title: "Independent", body: "No sponsored content. No PR placements. Editorial decisions are made entirely by us." },
                { title: "Correctable", body: "If we get something wrong, we fix it and note the correction. Contact us at editorial@capitalloss.co." },
              ].map(({ title, body }) => (
                <div key={title} style={{ borderTop: "1px solid #2a2a2a", paddingTop: "1.5rem" }}>
                  <p style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.3rem",
                    color: "#ede8df",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}>{title}</p>
                  <p style={{ fontSize: "0.875rem", color: "#6e6a66", lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pullquote */}
        <section style={{ borderBottom: "1px solid #2a2a2a", padding: "clamp(4rem, 8vw, 6rem) 2rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <blockquote style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "#ede8df",
              fontStyle: "italic",
              maxWidth: "760px",
              borderLeft: "2px solid #c0392b",
              paddingLeft: "2rem",
              margin: 0,
            }}>
              "The most expensive lessons are the ones nobody talks about openly.
              Capitalloss exists to change that."
            </blockquote>
          </div>
        </section>

        {/* Future / Instagram CTA */}
        <section style={{ padding: "clamp(3.5rem, 7vw, 5rem) 2rem clamp(4rem, 8vw, 6rem)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "6rem", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "420px" }}>
              <p className="section-label" style={{ marginBottom: "1.25rem" }}>The long view</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.78, color: "#9c9690", marginBottom: "1.5rem" }}>
                Eventually, Capitalloss will grow to include conversations with founders, artists,
                operators, and creatives — people who built something real and paid a real price for it.
                For now, the archive is being assembled one entry at a time.
              </p>
              <Link
                href="/archive"
                className="link-underline-brighten"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Read the archive →
              </Link>
            </div>
            <div style={{ maxWidth: "320px" }}>
              <p className="section-label" style={{ marginBottom: "1.25rem" }}>Follow along</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.78, color: "#9c9690", marginBottom: "1.5rem" }}>
                Instagram is the discovery layer. The website is the archive.
              </p>
              <a
                href="https://www.instagram.com/capitalloss"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline-brighten"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                @capitalloss on Instagram →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
