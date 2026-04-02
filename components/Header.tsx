"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      borderBottom: "1px solid #2a2a2a",
      backgroundColor: "rgba(10,10,10,0.95)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Wordmark */}
        <Link href="/" style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.15rem",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#ede8df",
        }}>
          Capitalloss
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {[
            { href: "/archive", label: "Archive" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: pathname === href ? "#ede8df" : "#6e6a66",
                transition: "color 0.2s",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
