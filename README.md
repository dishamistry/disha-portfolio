# Disha Mistry — Portfolio

Personal software engineering portfolio built with **Vue 3** (Composition API, `<script setup>`), **Vite** and plain CSS.

## Requirements

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ 
- npm 

## Local development

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server at http://localhost:5173
```

Other scripts:

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run build`   | Production build into `dist/`                      |
| `npm run preview` | Serve the production build locally to check it     |
| `npm run lint`    | Check JavaScript and Vue files with ESLint         |

## Project structure

```
src/
├── data/                 ← all website content lives here
│   ├── profile.js        name, headline, summary, contact links
│   ├── experience.js     employment history
│   ├── projects.js       personal projects
│   ├── skills.js         skills grouped by category
│   ├── education.js      degrees and course certificates
│   └── navigation.js     header menu items
├── components/           one component per page section, plus small shared ones
├── composables/          useActiveSection (highlights the current nav item)
├── styles/
│   ├── variables.css     design tokens: colours, fonts, spacing (light + dark)
│   ├── base.css          reset and element defaults
│   └── utilities.css     container, buttons, tags, cards
├── utils/dates.js        date formatting
├── App.vue
└── main.js
```

## Editing content

The files in `src/data/` are the **single source of truth**. Components only read from them, so you never need to edit a `.vue` file to update your content.

- **Add a job**: add an object to `experience` in `experience.js` with `startDate`/`endDate` as `"YYYY-MM"` (or `"YYYY-MM-DD"`). For a current role, use `endDate: null` and `isCurrent: true`. Set `countsTowardExperience: false` to leave a role out of the total. The list is sorted newest-first automatically.
- **Experience totals are calculated, never typed in**: the overall total (with overlapping months merged) and each role's duration are worked out from those dates every time the page loads, so they move on each month by themselves. In `profile.js` text, `{experienceYears}` becomes e.g. "7+ years" and `{experienceDuration}` becomes e.g. "7 years and 6 months". If any counted role has an invalid date, the site shows "several years" instead of a possibly wrong number.
- **Add a project**: add an object to `projects.js`. Use `type: 'personal'` or `type: 'learning'`, and set `featured: false` to hide a project without deleting it.
- **Add skills**: edit the `skills` arrays in `skills.js`. Groups with `context: 'learning'` are marked "In progress".


Empty fields are hidden automatically, so the site never shows a blank or broken link.

To restyle the site, change the tokens in `src/styles/variables.css`. Dark mode follows the visitor's system setting.
