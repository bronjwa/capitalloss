import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getFeaturedArticle, getRecentArticles } from "@/lib/articles";

export default function Home() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles(8, featured?.slug);

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "56px" }}>
        {/* Hero / Manifesto */}
        <section
          style={{
            padding: "clamp(5rem, 14vw, 10rem) 2rem clamp(4rem, 10vw, 7rem)",
            maxWidth: "1200px",
            margin: "0 auto",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#b03030",
                marginBottom: "2rem",
              }}
            >
              An editorial archive
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#e8e2d6",
                marginBottom: "2.5rem",
              }}
            >
              The cost
              <br />
              of ambition.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#6a6460",
                maxWidth: "520px",
              }}
            >
              People share wins publicly. The most valuable lessons usually
              come from mistakes, wrong turns, and things falling apart.
              Capitalloss documents those moments.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "2.5rem 0 0",
                marginBottom: "0",
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#3a3734",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Featured
              </span>
              <span
                style={{
                  flex: 1,
                  height: "1px",
                  backgroundColor: "#1a1a1a",
                }}
              />
            </div>
            <ArticleCard article={featured} variant="large" />
          </section>
        )}

        {/* Recent Articles */}
        {recent.length > 0 && (
          <section
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "3rem 0 0",
                marginBottom: "0",
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#3a3734",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Recent
              </span>
              <span
                style={{
                  flex: 1,
                  height: "1px",
                  backgroundColor: "#1a1a1a",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                gap: "0 3rem",
              }}
            >
              {recent.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            <div
              style={{
                padding: "3rem 0 4rem",
                borderTop: "1px solid #1a1a1a",
                marginTop: "0",
              }}
            >
              <Link
                href="/archive"
                className="link-underline-brighten"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                View all entries →
              </Link>
            </div>
          </section>
        )}

        {/* Empty state */}
        {!featured && recent.length === 0 && (
          <section
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "5rem 2rem",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.5rem",
                color: "#3a3734",
                fontStyle: "italic",
              }}
            >
              The archive is being assembled.
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
