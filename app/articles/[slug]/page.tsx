import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getRecentArticles,
} from "@/lib/articles";

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
      <main style={{ flex: 1, paddingTop: "56px" }}>
        {/* Article header */}
        <header
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(3.5rem, 8vw, 6.5rem) 2rem 0",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          {/* Breadcrumb */}
          <div style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/archive"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#4a4744",
                textDecoration: "none",
              }}
            >
              ← Archive
            </Link>
          </div>

          {/* Category */}
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#b03030",
              marginBottom: "1.5rem",
            }}
          >
            {frontmatter.category}
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "#e8e2d6",
              maxWidth: "820px",
              marginBottom: "2rem",
            }}
          >
            {frontmatter.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              lineHeight: 1.55,
              color: "#7a7470",
              maxWidth: "640px",
              fontStyle: "italic",
              marginBottom: "2.5rem",
            }}
          >
            {frontmatter.excerpt}
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              paddingBottom: "2.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                color: "#4a4744",
              }}
            >
              {date}
            </span>
            <span style={{ fontSize: "0.7rem", color: "#2e2e2e" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.72rem",
                color: "#4a4744",
                letterSpacing: "0.04em",
              }}
            >
              {readingTime}
            </span>
          </div>
        </header>

        {/* Article body */}
        <article
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 2rem 0",
          }}
        >
          <div
            className="prose-cl"
            style={{ margin: "0 auto" }}
          >
            <MDXRemote source={content} />
          </div>
        </article>

        {/* Divider */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "5rem auto 0",
            padding: "0 2rem",
          }}
        >
          <hr style={{ border: "none", borderTop: "1px solid #1a1a1a" }} />
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2rem 6rem",
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
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#3a3734",
                }}
              >
                More entries
              </span>
              <span style={{ flex: 1, height: "1px", backgroundColor: "#1a1a1a" }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                gap: "0 3rem",
              }}
            >
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
