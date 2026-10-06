import type { Metadata } from "next";
import PageHeading from "@/components/page-heading";
import SiteSearch from "@/components/site-search";

export const metadata: Metadata = {
  title: "Search SGC",
  description: "Search the Student Guidance Cell's published people, programmes, events and alumni information.",
};

export default function SearchPage() {
  return (
    <main className="page-main inner-page search-page" id="main-content">
      <PageHeading
        eyebrow="THE SGC KNOWLEDGE INDEX"
        title={<>Find your way<br />around <em>SGC.</em></>}
        description="One search across published SGC information—from the people and programmes to events, achievements and alumni."
      />
      <SiteSearch />
      <p className="search-scope-note">
        This index brings together information currently published on this site. For the latest details,
        follow the linked source updates or contact SGC.
      </p>
    </main>
  );
}
