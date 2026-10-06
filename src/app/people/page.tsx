import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";
import PageHeading from "@/components/page-heading";
import members from "@/data/members.json";

export default function PeoplePage() {
  return (
    <main className="page-main inner-page" id="main-content">
      <PageHeading
        eyebrow="THE PEOPLE OF SGC"
        title={<>A community<br />grows <em>together.</em></>}
        description="Meet the student leaders and members who make SGC a place to learn, contribute and support one another."
      />
      <div className="people-summary">
        <span>{members.length} published members</span>
        <a href="https://teamsgc.in/team" target="_blank" rel="noreferrer">View the official team page <ArrowUpRight size={15} /></a>
      </div>
      <section aria-label="SGC members" className="member-directory">
        {members.map((person, index) => {
          const [designation, department] = person.role.split(" · ");
          return (
            <article className="member-profile" id={`person-${index}`} key={person.name}>
              <div className="member-profile-image">
                <Image
                  alt={person.name === "Abishek" ? "Published placeholder image for Abishek" : `Portrait of ${person.name}`}
                  fill
                  sizes="(max-width: 560px) 44vw, (max-width: 900px) 30vw, 22vw"
                  src={person.image}
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="member-profile-copy">
                <h2>{person.name}</h2>
                <p className="member-designation">{designation}</p>
                {department && <p className="member-department">{department}</p>}
                {person.linkedin ? (
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={15} /> LinkedIn profile <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="profile-not-listed">LinkedIn profile not listed</span>
                )}
              </div>
            </article>
          );
        })}
      </section>
      <p className="source-note">Names, roles, profile links and portraits are reproduced from SGC’s published team page. Profiles link to publicly listed professional pages; no unlisted profile has been inferred.</p>
    </main>
  );
}
