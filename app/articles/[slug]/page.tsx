import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticleBySlug, getAllArticleSlugs, getRecentArticles } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { frontmatter, content, readingTime } = article;
  const date = format(new Date(frontmatter.date), "MMMM d, yyyy");
  const related = getRecentArticles(3, slug);

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "60px" }}>

        {/* Article header */}
        <header style={{ borderBottom: "1px solid #2a2a2a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5.5rem) 2rem 0" }}>

            {/* Breadcrumb */}
            <div style={{ marginBottom: "2.5rem" }}>
              <Link href="/archive" style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6e6a66",
                transition: "color 0.2s",
              }}
                className="link-brighten"
              >
                ← Archive
              </Link>
            </div>

            {/* Category */}
            <p className="category-tag" style={{ marginBottom: "1.5rem" }}>
              {frontmatter.category}
            </p>

            {/* Title */}
            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              color: "#ede8df",
              maxWidth: "860px",
              marginBottom: "2rem",
            }}>
              {frontmatter.title}
            </h1>

            {/* Excerpt / dek */}
            <p style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              lineHeight: 1.55,
              color: "#9c9690",
              maxWidth: "640px",
              fontStyle: "italic",
              marginBottom: "2.5rem",
            }}>
              {frontmatter.excerpt}
            </p>

            {/* Meta row */}
            <div style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              paddingBottom: "2.5rem",
            }}>
              <span className="meta-text">{date}</span>
              <span style={{ color: "#2a2a2a", fontSize: "0.7rem" }}>·</span>
              <span className="meta-text">{readingTime}</span>
            </div>
          </div>
        </header>

        {/* Disclaimer banner */}
        <div style={{ borderBottom: "1px solid #1e1e1e", backgroundColor: "#0d0d0d" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0.9rem 2rem" }}>
            <p style={{
              fontSize: "0.72rem",
              color: "#4a4744",
              letterSpacing: "0.02em",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}>
              Editorial content based on publicly documented sources. For informational purposes only.{" "}
              <Link href="/legal/disclaimer" style={{ color: "#6e6a66", textDecoration: "underline", textDecorationColor: "#333" }}>
                Full disclaimer →
              </Link>
            </p>
          </div>
        </div>

        {/* Article body */}
        <article style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem 0" }}>
          <div className="prose-cl">
            <MDXRemote source={content} />
          </div>
        </article>

        {/* Divider */}
        <div style={{ maxWidth: "1200px", margin: "4rem auto 0", padding: "0 2rem" }}>
          <div className="divider" />
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 6rem" }}>
            <div style={{ padding: "2rem 0 0" }}>
              <p className="section-label">More entries</p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "0 4rem",
            }}>
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="compact" />
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
