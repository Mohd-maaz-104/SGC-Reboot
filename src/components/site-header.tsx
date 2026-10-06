"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  GraduationCap,
  Menu,
  Search,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "About SGC", icon: BookOpenText },
  { href: "/people", label: "People", icon: UsersRound },
  { href: "/today", label: "Work & Recognition", icon: Sparkles },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/alumni", label: "Alumni", icon: GraduationCap },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Automatically close mobile menu on route changes
  useEffect(() => {
    if (pathname) {
      setIsOpen(false);
    }
  }, [pathname]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Accessible Mobile Top Bar */}
      <header className="mobile-header">
        <button
          type="button"
          className="mobile-menu-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link className="mobile-brand" href="/" aria-label="Student Guidance Cell home">
          <div className="mobile-brand-emblem">
            <Image src="/images/sgc-logo.png" alt="" width={32} height={32} priority />
          </div>
          <span className="mobile-brand-title">
            SGC <span>CAHCET</span>
          </span>
        </Link>

        <Link className="mobile-search-trigger" href="/search" aria-label="Search SGC directory">
          <Search size={20} />
        </Link>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Over Drawer */}
      <aside
        className={`mobile-drawer ${isOpen ? "open" : ""}`}
        aria-label="Mobile navigation drawer"
        aria-hidden={!isOpen}
      >
        <div className="mobile-drawer-header">
          <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
            <span className="brand-emblem">
              <Image src="/images/sgc-logo.png" alt="" width={42} height={42} priority />
            </span>
            <span className="brand-wordmark">
              SGC<span>STUDENT GUIDANCE CELL</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <p className="sidebar-label">EXPLORE SGC</p>
        <nav aria-label="Mobile navigation links" className="mobile-nav-links">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`mobile-nav-item ${pathname === href ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link
            className="mobile-search-btn"
            href="/search"
            onClick={() => setIsOpen(false)}
          >
            <Search size={18} />
            <span>Search SGC Directory</span>
          </Link>
          <a
            className="mobile-join-btn"
            href="https://teamsgc.in/join"
            target="_blank"
            rel="noreferrer"
          >
            <span>Join SGC Community</span>
            <ArrowUpRight size={17} />
          </a>
          <span className="sidebar-motto">“ZEAL AND ZEST TO BE” · ESTD 2010</span>
        </div>
      </aside>

      {/* Desktop Persistent Sidebar */}
      <aside aria-label="SGC site navigation" className="site-sidebar">
        <Link className="brand" href="/" aria-label="Student Guidance Cell home">
          <span className="brand-emblem">
            <Image src="/images/sgc-logo.png" alt="" width={44} height={44} priority />
          </span>
          <span className="brand-wordmark">
            SGC<span>STUDENT GUIDANCE CELL</span>
          </span>
        </Link>
        <p className="sidebar-label">EXPLORE SGC</p>
        <nav aria-label="Main navigation" className="primary-nav">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link
              aria-current={pathname === href ? "page" : undefined}
              href={href}
              key={href}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <Link className="header-search" href="/search" aria-label="Search SGC information">
          <Search aria-hidden="true" size={17} />
          <span>Search</span>
        </Link>
        <a className="header-join" href="https://teamsgc.in/join" target="_blank" rel="noreferrer">
          <span>Join SGC</span>
          <ArrowUpRight size={16} />
        </a>
        <span className="sidebar-motto">ZEAL AND ZEST TO BE</span>
      </aside>
    </>
  );
}
