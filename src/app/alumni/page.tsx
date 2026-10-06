import { ArrowUpRight } from "lucide-react";
import PageHeading from "@/components/page-heading";
import alumni from "@/data/alumni.json";

const years = Array.from(new Set(alumni.map((person) => person.year)));

export default function AlumniPage() {
  return (
    <main className="page-main inner-page" id="main-content">
      <PageHeading
        eyebrow="THE SGC COMMUNITY · BEYOND CAMPUS"
        title={<>Experience worth<br /><em>passing on.</em></>}
        description="A selection of graduates and career details from SGC’s public alumni records. A shared community can continue long after campus."
      />
      <section aria-label="Selected alumni profiles" className="alumni-directory">
        {years.map((year) => (
          <section aria-labelledby={`alumni-${year}`} className="alumni-cohort" key={year}>
            <h2 id={`alumni-${year}`}>{year}<span>GRADUATES</span></h2>
            <div className="alumni-grid">
              {alumni.map((person, index) => person.year === year ? (
                <article className="alumni-card" id={`alumni-${index}`} key={person.name}>
                  <span className="alumni-department">{person.department}</span>
                  <h3>{person.name}</h3>
                  <p>{person.position}</p>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn profile <ArrowUpRight size={15} />
                  </a>
                </article>
              ) : null)}
            </div>
          </section>
        ))}
      </section>
      <section aria-labelledby="alumni-involvement" className="alumni-invitation">
        <p className="page-eyebrow"><span aria-hidden="true" /> KEEP THE CIRCLE GROWING</p>
        <h2 id="alumni-involvement">Your experience<br />can open a door.</h2>
        <p>Alumni stories, mentoring and contributions can be featured after the former member confirms the details.</p>
        <a className="primary-action" href="mailto:studentguidancecell.cahcet@gmail.com?subject=SGC%20Alumni%20Story">
          Share an alumni update <ArrowUpRight size={16} />
        </a>
      </section>
      <p className="source-note">Selected records from SGC’s public alumni data. Career information is reproduced as published and may have changed. Please confirm details with the alumnus before relying on them.</p>
    </main>
  );
}
