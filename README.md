# Students Guidance Cell · Zeal and Zest to Be

A student-first website for the **Students Guidance Cell (SGC)** at C. Abdul Hakeem College of Engineering and Technology, Melvisharam. The garden motif represents student growth; SGC is a student-led guidance community.

The visual identity pairs the official SGC fist emblem and its blue, orange and yellow colours with a custom sunrise-to-orbit palette of violet, coral, sea-glass and citrus. SGC’s motto, **“Zeal and Zest to Be,”** and its student-first principle—**for, by, and with the students**—anchor the experience.

Built with Next.js 16, React 19, Tailwind CSS 4 and Lucide.

## Pages

- `/` — Our purpose and the student-led mission.
- `/people` — Published member profiles and publicly listed LinkedIn pages.
- `/events` — Event archive with locally saved SGC-published photographs and source links.
- `/today` — Current initiatives and recent member achievements.
- `/alumni` — Selected public alumni records and a channel for confirmed alumni stories.

The shared navigation remains available across all pages. Public member and alumni information is reproduced as published; unlisted profile details are not inferred.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Use `npm run lint` to check the source, `npm run build` to create a production build and `npm start` to serve it.

## Local media

Event photographs published by SGC are saved locally in `public/images/events/` and displayed in the event archive. Each event record in [`src/data/events.json`](./src/data/events.json) contains the local image path, its public source image URL and an event-update link. The Revibe ’26 hero photograph and SGC brand emblem are retained at `public/images/sgc-revibe-2026.jpg` and `public/images/sgc-logo.png`. Member portraits are locally saved from SGC’s [published team page](https://teamsgc.in/team) in `public/images/members/`, using each member’s name as the filename. The 23 published member names, roles, LinkedIn links, and local portrait paths are stored in [`src/data/members.json`](./src/data/members.json).

Student-achievement highlights, current-activity notices, and selected alumni profiles are maintained in [`src/data/achievements.json`](./src/data/achievements.json), [`src/data/current-activities.json`](./src/data/current-activities.json), and [`src/data/alumni.json`](./src/data/alumni.json). Their descriptions and source links are based on SGC’s [published events](https://teamsgc.in/events), [announcements and achievement updates](https://github.com/sgc-cahcet/sgc-cahcet/blob/main/src/data/data.tsx), [session page](https://teamsgc.in/daily-sessions), and [public alumni records](https://github.com/sgc-cahcet/sgc-cahcet/blob/main/src/data/alumni_data.tsx). Tentative plans are labeled as tentative. Alumni career details are reproduced as published and may have changed. Achievements are not represented as alumni accomplishments unless the attribution is confirmed.

## Verified source concept and content

- [The main SGC repository](https://github.com/sgc-cahcet/sgc-cahcet) describes an organization established in 2010 by Tanveer Ahmed and Mohammed Imran to help students reach career goals. Its product features include announcements, achievement stories, event discovery, a member directory, daily learning sessions, feedback and suggestions, searchable updates, pinned notices, and an events calendar. The README identifies Supabase as the feedback system.
- The repository’s `team_data.tsx` supplies the names, roles, year/department, portrait and LinkedIn URL used for the team cards. The website source team page is the public check for that roster.
- Its `data.tsx` and `events_data.tsx` hold announcement, student achievement and event details. Those are the factual basis for the events and achievements represented here; the original event, team and session pages remain linked for full updates.
- [The SGC organization profile](https://github.com/sgc-cahcet/Students-Guidance-Cell) describes the mission as helping college students attain their career goals and gives the organization’s contact details.
- SGC’s public site: [About](https://teamsgc.in/about), [team](https://teamsgc.in/team), [events](https://teamsgc.in/events), [weekly sessions](https://teamsgc.in/daily-sessions).

This is an editorial homepage, not a replacement backend: live announcements, calendars, search, pinned notices and Supabase-powered feedback remain on the linked SGC properties. Alumni stories are invited through the contact link; profiles and contributions are not attributed until verified by SGC.
# SGC-Reboot
# SGC-Reboot
# SGC-Reboot
