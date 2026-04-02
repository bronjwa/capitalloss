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
    ? all.filter((a) => a.frontmatter.category.toLowerCase() === category.toLowerCase())
    : all;

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "60px" }}>

        {/* Page header */}
        <section style={{ borderBottom: "1px solid #2a2a2a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5.5rem) 2rem 2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2rem" }}>
              <div>
                <p className="section-label" style={{ marginBottom: "1rem" }}>
                  {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
                  {category ? ` in ${category}` : " in the archive"}
                </p>
                <h1 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  fontWeight: 400,
                  color: "#ede8df",
                  lineHeight: 0.93,
                  letterSpacing: "-0.025em",
                }}>
                  Archive
                </h1>
              </div>
            </div>

            {/* Category filters */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", paddingBottom: "2rem" }}>
              <a href="/archive" style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: !category ? "#ede8df" : "#6e6a66",
                border: `1px solid ${!category ? "#ede8df" : "#2a2a2a"}`,
                padding: "0.35rem 0.85rem",
                transition: "color 0.2s, border-color 0.2s",
              }}>
                All
              </a>
              {CATEGORIES.map((cat) => {
                const active = category?.toLowerCase() === cat.toLowerCase();
                return (
                  <a key={cat}
                    href={`/archive?category=${cat.toLowerCase()}`}
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: active ? "#ede8df" : "#6e6a66",
                      border: `1px solid ${active ? "#ede8df" : "#2a2a2a"}`,
                      padding: "0.35rem 0.85rem",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                  >
                    {cat}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Article list */}
        <section>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 6rem" }}>
            {filtered.length === 0 ? (
              <div style={{ padding: "5rem 0", borderTop: "1px solid #2a2a2a" }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.4rem",
                  color: "#6e6a66",
                  fontStyle: "italic",
                }}>
                  Nothing in this category yet.
                </p>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                gap: "0 4rem",
              }}>
                {filtered.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
