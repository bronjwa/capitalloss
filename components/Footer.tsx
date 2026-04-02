"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        marginTop: "auto",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.05rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#e8e2d6",
              }}
            >
              Capitalloss
            </span>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.78rem",
                color: "#4a4744",
                letterSpacing: "0.02em",
                maxWidth: "320px",
                lineHeight: 1.6,
              }}
            >
              An editorial archive of mistakes, losses, and lessons from
              ambitious lives.
            </p>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "/archive", label: "Archive" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#4a4744",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#9a9490")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#4a4744")
                }
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "0.72rem", color: "#2e2e2e", letterSpacing: "0.05em" }}>
            © {year} Capitalloss
          </span>
          <span style={{ fontSize: "0.72rem", color: "#2e2e2e", letterSpacing: "0.05em" }}>
            @capitalloss
          </span>
        </div>
      </div>
    </footer>
  );
}
