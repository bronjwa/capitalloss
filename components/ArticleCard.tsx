"use client";

import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { format } from "date-fns";

type Props = {
  article: ArticleMeta;
  variant?: "default" | "compact" | "large" | "featured";
};

export default function ArticleCard({ article, variant = "default" }: Props) {
  const { slug, frontmatter, readingTime } = article;
  const date = format(new Date(frontmatter.date), "MMM d, yyyy");

  if (variant === "featured") {
    return (
      <Link href={`/articles/${slug}`} style={{ display: "block" }}>
        <article style={{ padding: "2.5rem 0 3rem", cursor: "pointer" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <span className="category-tag">{frontmatter.category}</span>
            <span style={{ color: "#3a3734", fontSize: "0.7rem" }}>—</span>
            <span className="meta-text">{date}</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 400,
            color: "#ede8df",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            marginBottom: "1.25rem",
          }}>
            {frontmatter.title}
          </h2>
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#9c9690",
            maxWidth: "580px",
            marginBottom: "1.5rem",
          }}>
            {frontmatter.excerpt}
          </p>
          <span style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#c0392b",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}>
            Read →
          </span>
        </article>
      </Link>
    );
  }

  if (variant === "large") {
    return (
      <Link href={`/articles/${slug}`} style={{ display: "block" }}>
        <article
          style={{ padding: "2.5rem 0", cursor: "pointer", transition: "opacity 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
            <span className="category-tag">{frontmatter.category}</span>
            <span style={{ color: "#333", fontSize: "0.7rem" }}>—</span>
            <span className="meta-text">{date}</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 400,
            color: "#ede8df",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "1rem",
          }}>
            {frontmatter.title}
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#9c9690", maxWidth: "600px", marginBottom: "1rem" }}>
            {frontmatter.excerpt}
          </p>
          <span className="meta-text">{readingTime}</span>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/articles/${slug}`} style={{ display: "block" }}>
        <article
          style={{
            padding: "1.25rem 0",
            borderTop: "1px solid #2a2a2a",
            display: "flex",
            justifyContent: "space-between",
            gap: "1.5rem",
            alignItems: "flex-start",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "#ede8df",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              marginBottom: "0.4rem",
            }}>
              {frontmatter.title}
            </h3>
            <span className="category-tag">{frontmatter.category}</span>
          </div>
          <span className="meta-text" style={{ whiteSpace: "nowrap", paddingTop: "0.1rem" }}>{date}</span>
        </article>
      </Link>
    );
  }

  // Default card
  return (
    <Link href={`/articles/${slug}`} style={{ display: "block" }}>
      <article
        style={{
          borderTop: "1px solid #2a2a2a",
          padding: "1.75rem 0",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.85rem", alignItems: "center" }}>
          <span className="category-tag">{frontmatter.category}</span>
          <span style={{ fontSize: "0.65rem", color: "#333" }}>—</span>
          <span className="meta-text">{date}</span>
        </div>
        <h3 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
          fontWeight: 400,
          color: "#ede8df",
          lineHeight: 1.18,
          letterSpacing: "-0.018em",
          marginBottom: "0.65rem",
        }}>
          {frontmatter.title}
        </h3>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#9c9690", marginBottom: "0.85rem" }}>
          {frontmatter.excerpt}
        </p>
        <span className="meta-text">{readingTime}</span>
      </article>
    </Link>
  );
}
