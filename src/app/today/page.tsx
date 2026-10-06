import { ArrowUpRight, CalendarDays, CircleCheck, Sparkles } from "lucide-react";
import PageHeading from "@/components/page-heading";
import achievements from "@/data/achievements.json";
import currentActivities from "@/data/current-activities.json";

export default function TodayPage() {
  return (
    <main className="page-main inner-page" id="main-content">
      <PageHeading
        eyebrow="SGC · CURRENT PRIORITIES"
        title={<>What we are<br /><em>growing now.</em></>}
        description="An up-to-date view of SGC initiatives, public plans and recent member achievements—grounded in the cell’s published updates."
      />
      <section aria-labelledby="initiatives-heading" className="today-section">
        <div className="section-kicker"><span>01</span> CURRENT INITIATIVES</div>
        <div className="today-intro">
          <h2 id="initiatives-heading">Learn something.<br />Share it forward.</h2>
          <p>SGC’s activities create ways to learn together, hear from peers and make useful knowledge easier to revisit.</p>
        </div>
        <div className="initiative-list">
          {currentActivities.map((activity, index) => (
            <article className="initiative-card" id={`initiative-${index}`} key={activity.title}>
              <span className="initiative-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="initiative-icon">{index === 3 ? <CalendarDays /> : <Sparkles />}</div>
              <div>
                <span className="initiative-status">{activity.status}</span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
              <a href={activity.link} target="_blank" rel="noreferrer" aria-label={`Read SGC's source for ${activity.title}`}>
                Source <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <p className="source-note">The academic activity calendar is explicitly marked tentative by SGC; dates and plans can change. See the linked sources for the latest status.</p>
      </section>

      <section aria-labelledby="achievements-heading" className="today-achievements">
        <div className="section-kicker section-kicker-light"><span>02</span> RECENT ACHIEVEMENTS</div>
        <div className="today-intro">
          <h2 id="achievements-heading">Work worth<br /><em>recognising.</em></h2>
          <p>Projects, competitions and opportunities reported in SGC’s published member-achievement updates.</p>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement, index) => (
            <article className="achievement-card" id={`achievement-${index}`} key={achievement.title}>
              <CircleCheck aria-hidden="true" />
              <div>
                <p>{achievement.people}</p>
                <h3>{achievement.title}</h3>
                <span>{achievement.detail}</span>
              </div>
              <a href={achievement.link} target="_blank" rel="noreferrer" aria-label={`View source for ${achievement.title}`}>
                Source <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
        <p className="today-disclaimer">SGC’s posts do not consistently identify current or former membership; achievements are therefore attributed to the named members without assuming alumni status.</p>
      </section>
    </main>
  );
}
