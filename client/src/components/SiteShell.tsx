import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  Moon,
  Phone,
  Send,
  Sun,
  X,
  Youtube,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const LINKS = {
  youtube: "https://www.youtube.com/@MyEnglish-lz9sp",
  tiktok: "https://www.tiktok.com/@yared_my_english",
  instagram: "https://www.instagram.com/my_e_n_g_l_i_s_h/",
  telegram: "https://t.me/myEng_123",
  phone: "0968901570",
};

const navItems = [
  ["Home", "/"],
  ["Find your level", "/level-test"],
  ["Programs", "/programs"],
  ["Exam prep", "/exam-prep"],
  ["Free lessons", "/free-lessons"],
  ["About", "/about"],
  ["Results", "/results"],
  ["FAQ", "/faq"],
] as const;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  // Hidden unless <ThemeProvider switchable> is set in App.tsx
  if (!toggleTheme) return null;
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const className = compact ? "social-icon-link" : "social-text-link";

  return (
    <div
      className={compact ? "social-icons" : "social-text-links"}
      aria-label="My English social channels"
    >
      <a
        className={className}
        href={LINKS.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="My English on YouTube"
        title="YouTube"
      >
        <Youtube size={18} />
        {!compact && <span>YouTube</span>}
      </a>
      <a
        className={className}
        href={LINKS.tiktok}
        target="_blank"
        rel="noreferrer"
        aria-label="My English on TikTok"
        title="TikTok"
      >
        <span className="tiktok-glyph" aria-hidden="true">
          ♪
        </span>
        {!compact && <span>TikTok</span>}
      </a>
      <a
        className={className}
        href={LINKS.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="My English on Instagram"
        title="Instagram"
      >
        <Instagram size={17} />
        {!compact && <span>Instagram</span>}
      </a>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-container header-inner">
          <Link
            href="/"
            className="brand-lockup"
            onClick={closeMenu}
            aria-label="My English home"
          >
            <span className="brand-logo-frame">
              <img src="/assets/my-english-logo.jpg" alt="" />
            </span>
            <span className="brand-copy">
              <strong>My English</strong>
              <small>Learn with Yared</small>
            </span>
          </Link>

          <nav
            id="primary-navigation"
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                aria-current={location === href ? "page" : undefined}
                className={location === href ? "nav-link active" : "nav-link"}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMenu} className="nav-contact">
              Talk to Yared
            </Link>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button
              className="mobile-menu-button"
              type="button"
              onClick={() => setMenuOpen(open => !open)}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <div className="footer-brand-block">
            <Link href="/" className="brand-lockup footer-lockup">
              <span className="brand-logo-frame">
                <img src="/assets/my-english-logo.jpg" alt="" />
              </span>
              <span className="brand-copy">
                <strong>My English</strong>
                <small>Your bridge to the world</small>
              </span>
            </Link>
            <p>
              English classes online and in person, taught by Yared Alemayehu.
            </p>
          </div>

          <div className="footer-links-block">
            <p className="footer-label">Explore</p>
            <Link href="/programs">Programs</Link>
            <Link href="/exam-prep">Exam preparation</Link>
            <Link href="/free-lessons">Free lessons</Link>
            <Link href="/about">About Yared</Link>
          </div>

          <div className="footer-links-block">
            <p className="footer-label">Get in touch</p>
            <a href={`tel:${LINKS.phone}`}>
              <Phone size={16} aria-hidden="true" /> {LINKS.phone}
            </a>
            <a href={LINKS.telegram} target="_blank" rel="noreferrer">
              <Send size={16} aria-hidden="true" /> Telegram
            </a>
            <Link href="/contact">Contact page</Link>
          </div>

          <div className="footer-social-block">
            <p className="footer-label">Follow</p>
            <SocialLinks compact />
            <p className="footer-small">Free English lessons and updates.</p>
            <a
              className="footer-telegram"
              href={LINKS.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Message on Telegram <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} My English</span>
          <Link href="/faq">
            Questions? Read the FAQ <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* Kept so other pages that import it keep working. */
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>
  );
}

/* The small label above headings is no longer shown (kicker is ignored). */
export function PageHero({
  title,
  description,
  children,
  tone = "cream",
}: {
  kicker?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  tone?: "cream" | "teal";
}) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="site-container page-hero-inner">
        <h1>{title}</h1>
        <p className="page-hero-description">{description}</p>
        {children}
      </div>
    </section>
  );
}

/* The eyebrow label is no longer shown. */
export function SectionHeading({
  title,
  description,
  link,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  link?: { label: string; href: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && (
        <Link href={link.href} className="text-link">
          {link.label}
        </Link>
      )}
    </div>
  );
}

export function ProgramTicket({
  name,
  tagline,
  description,
  features,
  featured = false,
}: {
  name: string;
  tagline: string;
  description: string;
  tone?: "mint" | "sun" | "peach";
  features: string[];
  featured?: boolean;
}) {
  return (
    <article className={`ticket-card ${featured ? "ticket-featured" : ""}`}>
      <p className="ticket-tagline">{tagline}</p>
      <h3>{name}</h3>
      <p className="ticket-description">{description}</p>
      <ul className="ticket-features">
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="ticket-footer">
        <span className="ticket-price">Ask about current fees</span>
        <Link
          className="ticket-button"
          href={`/contact?program=${encodeURIComponent(name)}`}
          aria-label={`Ask about the ${name} program`}
        >
          <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function SocialProof({ compact = false }: { compact?: boolean }) {
  const figures = [
    { value: "143K", label: "YouTube subscribers", href: LINKS.youtube },
    { value: "593.8K", label: "TikTok followers", href: LINKS.tiktok },
    { value: "69.3K", label: "Instagram followers", href: LINKS.instagram },
  ];

  return (
    <section
      className={`social-proof ${compact ? "social-proof-compact" : ""}`}
      aria-label="My English social channels"
    >
      <div className="site-container social-proof-inner">
        <p className="social-proof-lead">
          Learners already follow Yared online.
        </p>
        <div className="social-proof-stats">
          {figures.map(figure => (
            <a
              key={figure.label}
              href={figure.href}
              target="_blank"
              rel="noreferrer"
              className="social-stat"
            >
              <strong>{figure.value}</strong>
              <span>{figure.label}</span>
            </a>
          ))}
        </div>
        <p className="social-proof-note">
          Figures provided by My English. Counts change over time.
        </p>
      </div>
    </section>
  );
}

export function LessonPreview({
  title,
  category,
  videoId,
  href,
}: {
  title: string;
  category: string;
  videoId: string;
  href: string;
}) {
  return (
    <article className="lesson-preview">
      <a
        className="lesson-thumb"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch ${title} on YouTube`}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
        />
        <span className="play-button" aria-hidden="true">
          <span>▶</span>
        </span>
        <span className="video-platform">YouTube</span>
      </a>
      <div className="lesson-preview-copy">
        <span className="lesson-category">{category}</span>
        <h3>{title}</h3>
        <a href={href} target="_blank" rel="noreferrer" className="text-link">
          Watch the lesson
        </a>
      </div>
    </article>
  );
}

export function ActionBand({
  title,
  description,
  primary = "Ask about classes",
}: {
  title: string;
  description: string;
  primary?: string;
}) {
  return (
    <section className="action-band">
      <div className="site-container action-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="action-band-actions">
          <Link className="button button-light" href="/contact">
            {primary}
          </Link>
          <a className="action-phone" href={`tel:${LINKS.phone}`}>
            <Phone size={16} aria-hidden="true" /> {LINKS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
