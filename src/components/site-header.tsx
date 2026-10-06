"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  GraduationCap,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";

const navigation = [
  { href: "/", label: "About SGC", icon: BookOpenText },
  { href: "/people", label: "People", icon: UsersRound },
  { href: "/today", label: "Activities", icon: Sparkles },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/alumni", label: "Alumni", icon: GraduationCap },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
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
  );
}
