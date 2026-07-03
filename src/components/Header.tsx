import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

const ACCENT = "#64ffda";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a1a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-mono text-xl tracking-tight" onClick={() => setMobileOpen(false)}>
          <span style={{ color: ACCENT }}>Ayanfe</span>
          <span className="text-foreground">waves</span>
          <span style={{ color: ACCENT }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ style: { color: ACCENT } }}
              activeOptions={{ exact: link.to === "/" }}
            >
              <span style={{ color: ACCENT }}>0{i + 1}.</span> {link.label}
            </Link>
          ))}
          <a
            href="#resume"
            className="rounded border px-4 py-1.5 font-mono text-sm transition-colors hover:bg-[rgba(100,255,218,0.1)]"
            style={{ color: ACCENT, borderColor: ACCENT }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: mobileOpen ? ACCENT : undefined }}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="flex flex-col items-end gap-1.5">
              <span className="block h-px w-6 bg-foreground" />
              <span className="block h-px w-6 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile nav card */}
      {mobileOpen && (
        <div className="px-4 pb-4 md:hidden">
          <nav
            className="flex flex-col gap-4 rounded-md border p-6"
            style={{ borderColor: "rgba(100,255,218,0.25)", background: "rgba(10,10,26,0.95)" }}
          >
            {links.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-base text-foreground transition-colors"
                activeProps={{ style: { color: ACCENT } }}
                activeOptions={{ exact: link.to === "/" }}
              >
                <span style={{ color: ACCENT }}>0{i + 1}.</span> {link.label}
              </Link>
            ))}
            <a
              href="#resume"
              onClick={() => setMobileOpen(false)}
              className="mt-2 self-start rounded border px-4 py-1.5 font-mono text-sm transition-colors hover:bg-[rgba(100,255,218,0.1)]"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
