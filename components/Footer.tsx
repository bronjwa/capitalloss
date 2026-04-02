"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid #2a2a2a", padding: "3.5rem 2rem 2.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "2.5rem",
        }}>
          <div>
            <Link href="/" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#ede8df",
              display: "block",
              marginBottom: "0.75rem",
            }}>
              Capitalloss
            </Link>
            <p style={{
              fontSize: "0.82rem",
              color: "#6e6a66",
              lineHeight: 1.6,
              maxWidth: "300px",
            }}>
              An editorial archive of mistakes, losses, and lessons from ambitious lives.
            </p>
          </div>

          {/* Nav columns */}
          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.67rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a4744", marginBottom: "1rem" }}>
                Read
              </p>
              {[
                { href: "/", label: "Home" },
                { href: "/archive", label: "Archive" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  display: "block",
                  fontSize: "0.82rem",
                  color: "#6e6a66",
                  marginBottom: "0.6rem",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c8c2b8")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6e6a66")}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div>
              <p style={{ fontSize: "0.67rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a4744", marginBottom: "1rem" }}>
                Legal
              </p>
              {[
                { href: "/legal/disclaimer", label: "Disclaimer" },
                { href: "/legal/privacy", label: "Privacy Policy" },
                { href: "/legal/terms", label: "Terms of Use" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  display: "block",
                  fontSize: "0.82rem",
                  color: "#6e6a66",
                  marginBottom: "0.6rem",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c8c2b8")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6e6a66")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: "1.5rem",
          borderTop: "1px solid #1e1e1e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <span style={{ fontSize: "0.72rem", color: "#3a3734" }}>
            © {year} Capitalloss. All rights reserved.
          </span>
          <span style={{ fontSize: "0.72rem", color: "#3a3734" }}>
            For editorial and informational purposes only.
          </span>
        </div>
      </div>
    </footer>
  );
}
