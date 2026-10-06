import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Sparkles,
  Trophy,
} from "lucide-react";
import PageHeading from "@/components/page-heading";
import achievements from "@/data/achievements.json";
import currentActivities from "@/data/current-activities.json";
import workSessions from "@/data/work-sessions.json";

export default function TodayPage() {
  return (
    <main className="page-main inner-page" id="main-content">
      <PageHeading
        eyebrow="SGC · WORK & RECOGNITION"
        title={
          <>
            Work worth <em>recognising.</em>
          </>
        }
        description="Explore the technical projects, state and national victories, placement milestones, and daily hands-on sessions of the Student Guidance Cell."
      />

      {/* Section 1: Work with Recognition / Achievements */}
      <section aria-labelledby="achievements-heading" className="recognition-section">
        <div className="section-kicker section-kicker-light">
          <span>01</span> WORK WITH RECOGNITION
        </div>
        <div className="today-intro">
          <h2 id="achievements-heading">
            Celebrated milestones<br />
            &amp; <em>national honors.</em>
          </h2>
          <p>
            Official accomplishments, hackathon victories, and placements earned by SGC members,
            verified directly from the Cell’s published records.
          </p>
        </div>

        <div className="recognition-grid">
          {achievements.map((achievement, index) => (
            <article
              className="recognition-card"
              id={`achievement-${index}`}
              key={achievement.title}
            >
              <div className="recognition-card-media">
                <Image
                  alt={achievement.title}
                  className="recognition-card-image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={achievement.image}
                  priority={index < 2}
                />
                <span className="recognition-card-badge">
                  <Trophy size={13} aria-hidden="true" />
                  <span>{achievement.badge}</span>
                </span>
                <span className="recognition-card-category">{achievement.category}</span>
              </div>

              <div className="recognition-card-body">
                <p className="recognition-card-people">{achievement.people}</p>
                <h3 className="recognition-card-title">{achievement.title}</h3>
                <p className="recognition-card-detail">{achievement.detail}</p>

                {achievement.link && (
                  <a
                    className="recognition-card-link"
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View official recognition post for ${achievement.title}`}
                  >
                    <span>View Recognition</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2: Technical Sessions & Hands-On Work */}
      <section aria-labelledby="work-sessions-heading" className="work-sessions-section">
        <div className="section-kicker">
          <span>02</span> HANDS-ON TECHNICAL SESSIONS
        </div>
        <div className="today-intro">
          <h2 id="work-sessions-heading">
            Knowledge in <em>practice.</em>
          </h2>
          <p>
            From generative AI architectures to personal finance and spontaneous communication,
            take a closer look at the workshops and activities driving student growth.
          </p>
        </div>

        <div className="work-grid">
          {workSessions.map((session) => (
            <article className="work-card" key={session.id}>
              <div className="work-card-media">
                <Image
                  alt={session.title}
                  className="work-card-image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={session.localImage}
                />
                <span className="work-card-tag">{session.tag}</span>
              </div>

              <div className="work-card-body">
                <div className="work-card-meta">
                  <span>{session.category}</span>
                  <span>·</span>
                  <span>{session.date}</span>
                </div>
                <h3 className="work-card-title">{session.title}</h3>
                <p className="work-card-desc">{session.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Current Priorities & Roadmap */}
      <section aria-labelledby="initiatives-heading" className="today-section">
        <div className="section-kicker">
          <span>03</span> CURRENT INITIATIVES &amp; ROADMAP
        </div>
        <div className="today-intro">
          <h2 id="initiatives-heading">
            Learn something.<br />
            Share it forward.
          </h2>
          <p>
            SGC’s ongoing efforts to make peer learning continuous, accessible, and structured
            through modern tools and dedicated teams.
          </p>
        </div>

        <div className="initiative-list">
          {currentActivities.map((activity, index) => (
            <article className="initiative-card" id={`initiative-${index}`} key={activity.title}>
              <span className="initiative-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="initiative-icon">
                {index === 3 ? <CalendarDays /> : <Sparkles />}
              </div>
              <div>
                <span className="initiative-status">{activity.status}</span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
              <a
                href={activity.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read SGC's source for ${activity.title}`}
              >
                Source <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <p className="source-note">
          Official recognition data and session photographs are gathered directly from the published
          records of SGC at C. Abdul Hakeem College of Engineering and Technology (teamsgc.in).
        </p>
      </section>
    </main>
  );
}
