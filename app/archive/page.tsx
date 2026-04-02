import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles, CATEGORIES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Archive",
  description: "All entries in the Capitalloss archive.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ArchivePage({ searchParams }: Props) {
  const { category } = await searchParams;
  const all = getAllArticles();

  const filtered = category
    ? all.filter(
        (a) => a.frontmatter.category.toLowerCase() === category.toLowerCase()
      )
    : all;

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "56px" }}>
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(3.5rem, 8vw, 6rem) 2rem 2rem",
          }}
        >
          {/* Page header */}
          <div style={{ marginBottom: "3rem", borderBottom: "1px solid #1a1a1a", paddingBottom: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#4a4744",
                marginBottom: "1rem",
              }}
            >
              {all.length} {all.length === 1 ? "entry" : "entries"}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 400,
                color: "#e8e2d6",
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
              }}
            >
              Archive
            </h1>
          </div>

          {/* Category filters */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "0",
            }}
          >
            <a
              href="/archive"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: !category ? "#e8e2d6" : "#4a4744",
                textDecoration: "none",
                borderBottom: `1px solid ${!category ? "#e8e2d6" : "transparent"}`,
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
            >
              All
            </a>
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={`/archive?category=${cat.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color:
                    category?.toLowerCase() === cat.toLowerCase()
                      ? "#e8e2d6"
                      : "#4a4744",
                  textDecoration: "none",
                  borderBottom: `1px solid ${
                    category?.toLowerCase() === cat.toLowerCase()
                      ? "#e8e2d6"
                      : "transparent"
                  }`,
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                {cat}
              </a>
            ))}
          </div>
        </section>

        {/* Article list */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem 6rem",
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "5rem 0",
                borderTop: "1px solid #1a1a1a",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.4rem",
                  color: "#3a3734",
                  fontStyle: "italic",
                }}
              >
                Nothing here yet.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                gap: "0 3rem",
              }}
            >
              {filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
