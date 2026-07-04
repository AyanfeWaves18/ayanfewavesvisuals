import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a1a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-lg tracking-tight sm:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          <img src={logo.url} alt="Ayanfe Waves Visuals logo" className="h-8 w-8 rounded-full object-cover" />
          <span>
            <span className="text-primary">Ayanfe</span>
            <span className="text-foreground"> Waves </span>
            <span className="text-foreground">Visuals</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "font-mono text-sm text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${mobileOpen ? "text-primary" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="flex flex-col items-end gap-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile nav card */}
      {mobileOpen && (
        <div className="px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-4 rounded-md border border-primary/30 bg-[#0a0a1a]/95 p-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-base text-foreground transition-colors hover:text-primary"
                activeProps={{ className: "font-mono text-base text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
