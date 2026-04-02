"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/archive", label: "Archive" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid #1a1a1a",
        backgroundColor: "rgba(10, 10, 10, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#e8e2d6",
            textDecoration: "none",
          }}
        >
          Capitalloss
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.73rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: pathname === href ? "#e8e2d6" : "#6a6460",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#e8e2d6")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  pathname === href ? "#e8e2d6" : "#6a6460")
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
