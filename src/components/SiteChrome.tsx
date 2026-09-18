import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import gpclogo from "../assets/gpclogo.png";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="brand-lockup" aria-label="Gospel Pillars Nigeria 2 Division home">
          <img src={gpclogo} alt="Gospel Pillars" className="brand-logo" width="56" height="56" />
          <span className="leading-none">
            <span className="block font-display text-lg text-ink">GOSPEL PILLARS</span>
            <span className="mt-1 block font-mono text-[9px] uppercase text-brand-soft">Nigeria 2 Division</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {link.label}
            </Link>
          ))}
          <Link to="/" hash="chapters" className="nav-link">Locations</Link>
          <Link to="/" hash="gallery" className="nav-link">Gallery</Link>
        </nav>

        <Link to="/contact" className="button-outline hidden sm:inline-flex">Find a location</Link>
        <button className="icon-button md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link to="/" hash="chapters" onClick={() => setOpen(false)}>Locations</Link>
          <Link to="/" hash="gallery" onClick={() => setOpen(false)}>Gallery</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand text-sand">
      <div className="site-container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="brand-lockup">
              <img src={gpclogo} alt="Gospel Pillars" className="brand-logo brand-logo-footer" width="56" height="56" />
              <span className="leading-none">
                <span className="block font-display text-lg">GOSPEL PILLARS</span>
                <span className="mt-1 block font-mono text-[9px] uppercase text-sand/60">Nigeria 2 Division</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-sand/70">A church family growing through worship, teaching, and spiritual transformation in churches, communities, and campus fellowships.</p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-sand/80">
              <Link to="/about">About us</Link><Link to="/" hash="chapters">Locations</Link><Link to="/" hash="gallery">Gallery</Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold">Get in touch</p>
            <div className="mt-5 grid gap-3 text-sm text-sand/80">
              <a href="mailto:hello@gospelpillars.org.gh">hello@gospelpillars.org.gh</a>
              <span>Nigeria</span>
              <Link to="/contact">Send a message</Link>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-sand/15 pt-7 text-xs text-sand/50">
          <p>© 2026 Gospel Pillars Nigeria 2 Division.</p><p>Built for every community.</p>
        </div>
      </div>
    </footer>
  );
}