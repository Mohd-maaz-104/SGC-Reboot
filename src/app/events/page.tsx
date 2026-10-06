import EventCard from "@/components/event-card";
import PageHeading from "@/components/page-heading";
import events from "@/data/events.json";

export default function EventsPage() {
  return (
    <main className="page-main inner-page" id="main-content">
      <PageHeading
        eyebrow="SGC IN ACTION"
        title={<>Ideas become<br /><em>experiences.</em></>}
        description="Workshops, conversations, competitions and shared learning—an illustrated selection from SGC’s published event archive."
      />
      <div className="archive-note">
        <span>EVENT PHOTO ARCHIVE</span>
        <p>Each event is paired with a locally saved photograph published by SGC, plus links to its source and event update.</p>
      </div>
      <section aria-label="SGC events and workshops" className="event-grid">
        {events.map((event) => <EventCard event={event} key={event.slug} />)}
      </section>
      <p className="source-note">Dates, descriptions and images are drawn from SGC’s public event archive and linked updates. This is a curated selection, not a complete institutional record.</p>
    </main>
  );
}
