"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  Search,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import activities from "@/data/current-activities.json";
import achievements from "@/data/achievements.json";
import alumni from "@/data/alumni.json";
import events from "@/data/events.json";
import members from "@/data/members.json";

type SearchSection = "Events" | "People" | "Current" | "Alumni";
type SearchItem = {
  title: string;
  section: SearchSection;
  description: string;
  href: string;
};

const searchItems: SearchItem[] = [
  ...events.map((event) => ({
    title: event.name,
    section: "Events" as const,
    description: `${event.category}. ${event.description}`,
    href: `/events#event-${event.slug}`,
  })),
  ...members.map((person, index) => ({
    title: person.name,
    section: "People" as const,
    description: person.role,
    href: `/people#person-${index}`,
  })),
  ...activities.map((activity, index) => ({
    title: activity.title,
    section: "Current" as const,
    description: `${activity.status}. ${activity.description}`,
    href: `/today#initiative-${index}`,
  })),
  ...achievements.map((achievement, index) => ({
    title: achievement.title,
    section: "Current" as const,
    description: `${achievement.people}. ${achievement.detail}`,
    href: `/today#achievement-${index}`,
  })),
  ...alumni.map((person, index) => ({
    title: person.name,
    section: "Alumni" as const,
    description: `${person.year} · ${person.department} · ${person.position}`,
    href: `/alumni#alumni-${index}`,
  })),
];

const filters: { label: string; value: SearchSection | "All"; icon: typeof Search }[] = [
  { label: "All", value: "All", icon: Search },
  { label: "Events", value: "Events", icon: CalendarDays },
  { label: "People", value: "People", icon: UsersRound },
  { label: "Current", value: "Current", icon: Sparkles },
  { label: "Alumni", value: "Alumni", icon: GraduationCap },
];

const popularSearches = ["AI workshop", "committee", "alumni", "knowledge transfer"];

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<SearchSection | "All">("All");
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery && section === "All") return [];

    return searchItems.filter((item) => {
      const matchesSection = section === "All" || item.section === section;
      const searchableText = `${item.title} ${item.description} ${item.section}`.toLocaleLowerCase();
      return matchesSection && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [normalizedQuery, section]);

  const showResults = normalizedQuery.length > 0 || section !== "All";

  return (
    <div className="search-explorer">
      <div className="search-input-wrap">
        <Search aria-hidden="true" size={22} />
        <label className="visually-hidden" htmlFor="sgc-search">Search SGC information</label>
        <input
          autoComplete="off"
          id="sgc-search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “AI workshop”, a name, or “alumni”"
          type="search"
          value={query}
        />
        {query && (
          <button aria-label="Clear search" className="search-clear" onClick={() => setQuery("")} type="button">
            <X size={18} />
          </button>
        )}
      </div>

      <fieldset className="search-filters">
        <legend className="visually-hidden">Filter SGC information by section</legend>
        {filters.map(({ label, value, icon: Icon }) => (
          <button
            aria-pressed={section === value}
            className={section === value ? "search-filter search-filter-active" : "search-filter"}
            key={value}
            onClick={() => setSection(value)}
            type="button"
          >
            <Icon aria-hidden="true" size={15} />
            {label}
          </button>
        ))}
      </fieldset>

      {showResults ? (
        <section aria-live="polite" aria-label="Search results" className="search-results">
          <p className="search-result-count">
            {results.length === 1 ? "1 result" : `${results.length} results`}
            {normalizedQuery && <> for <strong>“{query.trim()}”</strong></>}
          </p>
          {results.length > 0 ? (
            <div className="search-result-list">
              {results.map((result) => (
                <Link className="search-result" href={result.href} key={`${result.section}-${result.href}`}>
                  <span className="search-result-section">{result.section}</span>
                  <span className="search-result-copy">
                    <strong>{result.title}</strong>
                    <span>{result.description}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-empty-state">
              <span aria-hidden="true">✳</span>
              <h2>No matching information found</h2>
              <p>Try a different name or topic, or choose another section.</p>
            </div>
          )}
        </section>
      ) : (
        <section aria-labelledby="popular-searches-heading" className="search-start">
          <h2 id="popular-searches-heading">Popular starting points</h2>
          <p>Search across published events, team profiles, current initiatives, achievements and alumni.</p>
          <div className="popular-searches">
            {popularSearches.map((term) => (
              <button key={term} onClick={() => setQuery(term)} type="button">{term}<ArrowUpRight size={14} /></button>
            ))}
          </div>
          <div className="search-start-links">
            <Link href="/today">Browse current initiatives <ArrowUpRight size={15} /></Link>
            <Link href="/events">Open the event archive <ArrowUpRight size={15} /></Link>
            <Link href="/people">Meet the SGC team <ArrowUpRight size={15} /></Link>
          </div>
        </section>
      )}
    </div>
  );
}
