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

- **Add a job**: add an object to `experience` in `experience.js`. Use `"YYYY-MM"` for `start`/`end`, and `end: null` for a current role. The list is sorted newest-first automatically.
- **Add a project**: add an object to `projects.js`. Use `type: 'personal'` or `type: 'learning'`, and set `featured: false` to hide a project without deleting it.
- **Add skills**: edit the `skills` arrays in `skills.js`. Groups with `context: 'learning'` are marked "In progress".
- **Add your email or résumé PDF**: these weren't in the source résumé, so they're empty in `profile.js`:
  - `email: 'you@example.com'` adds an Email card to the Contact section.
  - `resumeUrl`: put the PDF in `public/` (e.g. `public/Disha-Mistry-Resume.pdf`) and set `resumeUrl: 'Disha-Mistry-Resume.pdf'`. This adds a "Download résumé" button to the hero. Use a relative path without a leading `/` so it works under the GitHub Pages sub-path.
- **Certificates**: fill in `issuer` or `url` in `education.js` to show them.

Empty fields are hidden automatically, so the site never shows a blank or broken link.

To restyle the site, change the tokens in `src/styles/variables.css`. Dark mode follows the visitor's system setting.
