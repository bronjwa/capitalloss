import type { Metadata } from "next";
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
      <main style={{ flex: 1, paddingTop: "56px" }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(4rem, 10vw, 8rem) 2rem clamp(3rem, 7vw, 5rem)",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#e8e2d6",
            }}
          >
            The mistakes
            <br />
            behind ambition.
          </h1>
        </section>

        {/* Manifesto body */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(3rem, 6vw, 5rem) 2rem",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.7rem)",
                lineHeight: 1.5,
                color: "#c0bab0",
                fontStyle: "italic",
                marginBottom: "3rem",
                letterSpacing: "-0.01em",
              }}
            >
              People share wins publicly. The most valuable lessons usually
              come from mistakes, wrong turns, bad timing, poor decisions,
              missed opportunities, and things falling apart.
            </p>

            <div
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.78,
                color: "#7a7470",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <p>
                Capitalloss exists to document those moments and the lessons
                inside them. This is an editorial archive built around one
                central idea: the mistakes behind ambition.
              </p>
              <p>
                The project explores the real losses people take while trying
                to build something meaningful — businesses, creative careers,
                side hustles, artistic lives, reputations, momentum, money,
                time, confidence, relationships, and opportunities.
              </p>
              <p>
                It should not feel like a startup website, a personal
                portfolio, or a generic blog. It should not feel like it is
                yelling advice at people. It should feel more like:{" "}
                <em style={{ color: "#9a9490", fontStyle: "italic" }}>
                  Here is what happened. Here is what it cost. Here is what
                  can be learned from it.
                </em>
              </p>
            </div>

            {/* Separator */}
            <div
              style={{
                margin: "3.5rem 0",
                width: "40px",
                height: "1px",
                backgroundColor: "#b03030",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.78,
                color: "#7a7470",
              }}
            >
              Eventually, Capitalloss will grow to include conversations with
              founders, artists, operators, and creatives — people who built
              something real and paid a real price for it. For now, the
              archive is being assembled one entry at a time.
            </p>
          </div>
        </section>

        {/* Brand statement */}
        <section
          style={{
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
            padding: "clamp(4rem, 8vw, 6rem) 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <blockquote
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "#e8e2d6",
                fontStyle: "italic",
                maxWidth: "760px",
                margin: 0,
              }}
            >
              "The cost of building something real is rarely spoken about
              openly. That silence is what Capitalloss is here to end."
            </blockquote>
          </div>
        </section>

        {/* Instagram CTA */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(3.5rem, 7vw, 5rem) 2rem clamp(4rem, 8vw, 6rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              maxWidth: "480px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#4a4744",
              }}
            >
              Follow along
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                color: "#c0bab0",
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              The Instagram is the discovery layer. The website is the
              archive.
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
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              @capitalloss on Instagram →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
