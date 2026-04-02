"use client";

import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { format } from "date-fns";

type Props = {
  article: ArticleMeta;
  variant?: "default" | "compact" | "large";
};

export default function ArticleCard({ article, variant = "default" }: Props) {
  const { slug, frontmatter, readingTime } = article;
  const date = format(new Date(frontmatter.date), "MMM d, yyyy");

  if (variant === "large") {
    return (
      <Link
        href={`/articles/${slug}`}
        style={{ display: "block", textDecoration: "none" }}
      >
        <article
          style={{
            borderTop: "1px solid #1a1a1a",
            padding: "3rem 0",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          {/* Category + Date */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#b03030",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {frontmatter.category}
            </span>
            <span style={{ fontSize: "0.68rem", color: "#3a3734" }}>—</span>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                color: "#4a4744",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {date}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#e8e2d6",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: "1rem",
            }}
          >
            {frontmatter.title}
          </h2>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "#6a6460",
              maxWidth: "620px",
              marginBottom: "1.25rem",
            }}
          >
            {frontmatter.excerpt}
          </p>

          {/* Read time */}
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              color: "#3a3734",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {readingTime}
          </span>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/articles/${slug}`}
        style={{ display: "block", textDecoration: "none" }}
      >
        <article
          style={{
            padding: "1.25rem 0",
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "flex-start",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 400,
                color: "#e8e2d6",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                marginBottom: "0.35rem",
              }}
            >
              {frontmatter.title}
            </h3>
            <span
              style={{
                fontSize: "0.67rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#b03030",
              }}
            >
              {frontmatter.category}
            </span>
          </div>
          <span
            style={{
              fontSize: "0.68rem",
              color: "#3a3734",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              paddingTop: "0.1rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {date}
          </span>
        </article>
      </Link>
    );
  }

  // Default
  return (
    <Link
      href={`/articles/${slug}`}
      style={{ display: "block", textDecoration: "none" }}
    >
      <article
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "2rem 0",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.9rem", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.67rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#b03030",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {frontmatter.category}
          </span>
          <span style={{ fontSize: "0.67rem", color: "#2e2e2e" }}>—</span>
          <span
            style={{
              fontSize: "0.67rem",
              color: "#4a4744",
              letterSpacing: "0.04em",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {date}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.3rem, 2vw, 1.75rem)",
            fontWeight: 400,
            color: "#e8e2d6",
            lineHeight: 1.15,
            letterSpacing: "-0.018em",
            marginBottom: "0.7rem",
          }}
        >
          {frontmatter.title}
        </h3>

        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "#5a5754",
            marginBottom: "0.9rem",
          }}
        >
          {frontmatter.excerpt}
        </p>

        <span
          style={{
            fontSize: "0.67rem",
            letterSpacing: "0.08em",
            color: "#3a3734",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {readingTime}
        </span>
      </article>
    </Link>
  );
}
