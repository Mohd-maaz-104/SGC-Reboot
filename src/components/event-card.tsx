import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Event = (typeof import("@/data/events.json"))[number];

export default function EventCard({ event }: { event: Event }) {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${event.date}T12:00:00Z`));

  return (
    <article className="event-card" id={`event-${event.slug}`}>
      <figure className="event-card-image">
        <Image
          alt={event.imageAlt}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
          src={event.image}
        />
        <figcaption>SGC published event photograph</figcaption>
      </figure>
      <div className="event-card-content">
        <div className="event-card-meta">
          <time dateTime={event.date}>{formattedDate}</time>
          <span>{event.category}</span>
        </div>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <div className="event-card-links">
          <a href={event.link} target="_blank" rel="noreferrer">
            Event update <ArrowUpRight size={15} />
          </a>
          <a href={event.sourceImage} target="_blank" rel="noreferrer">
            Photo source <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
