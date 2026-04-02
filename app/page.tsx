import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getFeaturedArticle, getRecentArticles, getAllArticles, CATEGORIES } from "@/lib/articles";

export default function Home() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles(6, featured?.slug);
  const all = getAllArticles();

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "60px" }}>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section style={{
          borderBottom: "1px solid #2a2a2a",
          padding: "clamp(4rem, 10vw, 7rem) 2rem clamp(3rem, 6vw, 4.5rem)",
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
              <div style={{ maxWidth: "760px" }}>
                <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                  An editorial archive — mistakes, losses &amp; lessons
                </p>
                <h1 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  color: "#ede8df",
                }}>
                  The cost<br />of ambition.
                </h1>
              </div>
              <p style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "#6e6a66",
                maxWidth: "340px",
                paddingBottom: "0.25rem",
              }}>
                People share wins publicly. The most valuable lessons come from
                mistakes, wrong turns, and things falling apart.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <section style={{ borderBottom: "1px solid #2a2a2a", backgroundColor: "#0d0d0d" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            gap: "0",
          }}>
            {[
              { value: all.length.toString(), label: "Entries published" },
              { value: CATEGORIES.length.toString(), label: "Categories" },
              { value: "Daily", label: "New content" },
            ].map(({ value, label }, i) => (
              <div key={i} style={{
                padding: "1.25rem 2.5rem 1.25rem 0",
                marginRight: "2.5rem",
                borderRight: i < 2 ? "1px solid #2a2a2a" : "none",
                paddingRight: i < 2 ? "2.5rem" : "0",
              }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.6rem",
                  color: "#ede8df",
                  lineHeight: 1,
                  marginBottom: "0.2rem",
                }}>
                  {value}
                </p>
                <p className="section-label">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured ───────────────────────────────────────────────────── */}
        {featured && (
          <section style={{ borderBottom: "1px solid #2a2a2a" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "start" }}>
                {/* Main featured */}
                <div>
                  <div style={{ borderBottom: "1px solid #2a2a2a", padding: "1.5rem 0 0" }}>
                    <p className="section-label" style={{ marginBottom: "0" }}>Featured</p>
                  </div>
                  <ArticleCard article={featured} variant="featured" />
                </div>

                {/* Sidebar: recent compact */}
                {recent.length > 0 && (
                  <div style={{ borderLeft: "1px solid #2a2a2a", paddingLeft: "2.5rem", paddingTop: "1.5rem", paddingBottom: "2.5rem" }}>
                    <p className="section-label" style={{ marginBottom: "0", borderBottom: "1px solid #2a2a2a", paddingBottom: "1.5rem" }}>
                      Latest
                    </p>
                    {recent.slice(0, 5).map((a) => (
                      <ArticleCard key={a.slug} article={a} variant="compact" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Browse by category ─────────────────────────────────────────── */}
        <section style={{ borderBottom: "1px solid #2a2a2a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
              <p className="section-label">Browse</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/archive?category=${cat.toLowerCase()}`}
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#9c9690",
                      border: "1px solid #2a2a2a",
                      padding: "0.35rem 0.85rem",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    className="link-dim"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Recent grid ────────────────────────────────────────────────── */}
        {recent.length > 0 && (
          <section style={{ borderBottom: "1px solid #2a2a2a" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
              <div style={{ borderBottom: "1px solid #2a2a2a", padding: "1.5rem 0 0" }}>
                <p className="section-label">Recent entries</p>
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                gap: "0 4rem",
              }}>
                {recent.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
              <div style={{ padding: "2rem 0 3rem", borderTop: "1px solid #2a2a2a" }}>
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
                  View full archive →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── Manifesto pullquote ────────────────────────────────────────── */}
        <section style={{ padding: "clamp(4rem, 8vw, 6rem) 2rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <blockquote style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "#ede8df",
              fontStyle: "italic",
              maxWidth: "820px",
              borderLeft: "2px solid #c0392b",
              paddingLeft: "2rem",
              margin: 0,
            }}>
              "The most expensive lessons are the ones nobody talks about openly.
              Capitalloss exists to change that."
            </blockquote>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
