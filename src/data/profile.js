/**
 * Personal profile — name, headline, summary and contact links.
 *
 * Source: resume (synopsis + header). Empty strings mean "not provided";
 * any component that uses them hides the related element automatically.
 */
export const profile = {
  name: 'Disha Mistry',
  headline: 'Software Engineer',
  tagline: 'Backend development with PHP, Laravel, Symfony and SQL',
  location: 'Melbourne, Victoria, Australia',

  // Short introduction used in the hero section.
  intro:
    'I’m a software engineer with {experienceYears} of experience in backend development. I build RESTful APIs and microservices, design databases, write automated tests with PHPUnit, and modernise legacy applications.',

  // Longer professional summary used in the About section (one string per paragraph).
  summary: [
    'I’m a software engineer with {experienceDuration} of experience in backend development, primarily using PHP, Laravel, Symfony and SQL. My work centres on developing RESTful APIs and microservices, database design, automated testing with PHPUnit, and modernising legacy applications.',
    'I’m familiar with frontend technologies including Vue.js and Angular, and with development tools such as Docker, Git and Grafana. I have working knowledge of AWS cloud services.',
    'I currently use Claude Code to support everyday development tasks, reviewing AI-generated code for correctness, maintainability and alignment with project requirements. Outside of work, I’m expanding my backend expertise through hands-on projects using Go, gRPC and Protocol Buffers.',
    'I’m experienced in Agile environments and collaborative code reviews, and I care about delivering maintainable software.',
  ],

  // Core focus areas shown as short highlights in the About section.
  focusAreas: [
    'RESTful APIs & microservices',
    'Database design & optimisation',
    'Automated testing with PHPUnit',
    'Legacy code modernisation',
    'AI-assisted development & code review',
  ],

  // Profile photo shown in the hero. `src` is relative to the /public folder.
  // Set `src: ''` to hide the photo.
  photo: {
    src: 'images/profile.jpg',
    alt: 'Portrait of Disha Mistry',
  },

  // Used by the hero "Contact me" button and the Contact section.
  // Set to '' to hide every email link on the site.
  email: 'mistrydisha1301@gmail.com',
  resumeUrl: 'documents/resumeDisha.pdf',
  resumeFileName: 'Disha-Mistry-Resume.pdf', // name used for the downloaded file

  links: [
    {
      label: 'GitHub',
      icon: 'github',
      url: 'https://github.com/dishamistry',
      display: 'github.com/dishamistry',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/disha-mistry-423aaa157/',
      display: 'linkedin.com/in/disha-mistry-423aaa157',
    },
  ],

  repositoriesUrl: 'https://github.com/dishamistry?tab=repositories',
}
