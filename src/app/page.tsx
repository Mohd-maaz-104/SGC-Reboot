import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  Compass,
  GraduationCap,
  UsersRound,
} from "lucide-react";
import activities from "@/data/current-activities.json";
import events from "@/data/events.json";
import members from "@/data/members.json";

const sections = [
  {
    number: "01",
    title: "About the Cell",
    description: "Our purpose, roots, guiding principles and the people who started SGC.",
    href: "/#about-sgc",
    icon: Compass,
  },
  {
    number: "02",
    title: "Activities & updates",
    description: "Current initiatives, learning sessions and recent student achievements.",
    href: "/today",
    icon: BookOpenText,
  },
  {
    number: "03",
    title: "Events archive",
    description: "Explore workshops, competitions, symposiums and student programmes.",
    href: "/events",
    icon: CalendarDays,
  },
  {
    number: "04",
    title: "People & alumni",
    description: "Meet the current team and discover the community beyond campus.",
    href: "/people",
    icon: UsersRound,
  },
];

export default function HomePage() {
  const featuredEvent = events[0];

  return (
    <main className="portal-page" id="main-content">
      <section aria-labelledby="portal-title" className="portal-hero">
        <div className="portal-hero-copy">
          <p className="page-eyebrow"><span aria-hidden="true" /> C. ABDUL HAKEEM COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
          <h1 id="portal-title">Student<br /><em>Guidance Cell.</em></h1>
          <p className="portal-lede">
            A student-led community for learning together, building confidence and passing useful
            knowledge forward. Find the people, programmes and stories that make up SGC.
          </p>
          <div className="portal-actions">
            <Link className="portal-primary-action" href="/search">
              Explore SGC <ArrowDownRight size={17} />
            </Link>
            <Link className="portal-secondary-action" href="#about-sgc">
              About the Cell <ArrowRight size={16} />
            </Link>
          </div>
          <p className="portal-location">MELVISHARAM, TAMIL NADU <span aria-hidden="true">·</span> ESTABLISHED 2010</p>
        </div>

        <Link className="portal-feature" href={`/events#event-${featuredEvent.slug}`}>
          <Image
            alt={featuredEvent.imageAlt}
            className="portal-feature-image"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
            src={featuredEvent.image}
          />
          <span className="portal-feature-tag">FROM THE SGC ARCHIVE</span>
          <span className="portal-feature-caption">
            <span>
              <small>{featuredEvent.category}</small>
              <strong>{featuredEvent.name}</strong>
            </span>
            <span className="portal-feature-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
          </span>
        </Link>
      </section>

      <section aria-label="SGC at a glance" className="portal-facts">
        <div><span>01</span><strong>2010</strong><small>Founded at CAHCET</small></div>
        <div><span>02</span><strong>For · By · To</strong><small>The students</small></div>
        <div><span>03</span><strong>“Zeal and Zest to Be”</strong><small>SGC motto</small></div>
        <div><span>04</span><strong>{members.length} team profiles</strong><small>Published member directory</small></div>
      </section>

      <section aria-labelledby="explore-heading" className="portal-section portal-directory-section">
        <div className="portal-section-heading">
          <div>
            <p className="section-kicker"><span>01</span> THE SGC DIRECTORY</p>
            <h2 id="explore-heading">Everything starts<br />with a <em>good question.</em></h2>
          </div>
          <Link className="portal-view-all" href="/search">Search all SGC information <ArrowUpRight size={16} /></Link>
        </div>
        <div className="portal-directory-grid">
          {sections.map(({ number, title, description, href, icon: Icon }) => (
            <Link className="portal-directory-card" href={href} key={number}>
              <span className="portal-directory-number">{number}</span>
              <Icon aria-hidden="true" size={21} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="portal-card-link">Explore <ArrowUpRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-sgc" className="portal-about">
        <div className="portal-about-label">
          <p className="section-kicker"><span>02</span> WHO WE ARE</p>
          <span className="portal-about-flower" aria-hidden="true">✳</span>
        </div>
        <div className="portal-about-copy">
          <h2 id="about-sgc">Guidance grows when<br />we <em>grow together.</em></h2>
          <p>
            Founded in 2010 by the late Mr. Tanveer Ahmed and Mr. Mohammed Imran, the Student
            Guidance Cell is a student-led community at C. Abdul Hakeem College of Engineering and
            Technology. SGC creates ways for students to learn beyond the classroom, discover their
            strengths and share what they know with others.
          </p>
          <p>
            Its motto—“For the students, by the students, to the students”—puts peer learning and
            shared growth at the heart of the Cell.
          </p>
          <a className="portal-text-link" href="https://teamsgc.in/about" target="_blank" rel="noreferrer">
            Read SGC’s published about page <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section aria-labelledby="current-heading" className="portal-section portal-current">
        <div className="portal-section-heading">
          <div>
            <p className="section-kicker"><span>03</span> NOW AT SGC</p>
            <h2 id="current-heading">Learning in <em>motion.</em></h2>
          </div>
          <Link className="portal-view-all" href="/today">All updates & achievements <ArrowUpRight size={16} /></Link>
        </div>
        <div className="portal-current-list">
          {activities.slice(0, 3).map((activity, index) => (
            <article className="portal-current-item" key={activity.title}>
              <span className="portal-current-index">{String(index + 1).padStart(2, "0")}</span>
              <div><small>{activity.status}</small><h3>{activity.title}</h3></div>
              <p>{activity.description}</p>
              <a href={activity.link} target="_blank" rel="noreferrer" aria-label={`View source for ${activity.title}`}>
                Source <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Get involved with SGC" className="portal-contact">
        <div>
          <p className="section-kicker"><span>04</span> TAKE PART</p>
          <h2>Curious about<br />getting involved?</h2>
          <p>Find out about the team, browse the event archive or get in touch with the Student Guidance Cell.</p>
        </div>
        <div className="portal-contact-links">
          <Link href="/people"><UsersRound size={18} /> Meet the current team <ArrowUpRight size={16} /></Link>
          <Link href="/alumni"><GraduationCap size={18} /> Connect with alumni <ArrowUpRight size={16} /></Link>
          <a href="mailto:studentguidancecell.cahcet@gmail.com"><ArrowRight size={18} /> Contact SGC <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
