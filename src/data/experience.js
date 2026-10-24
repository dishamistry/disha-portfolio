/**
 * Employment history — source: resume "Work Experience".
 *
 * `start` / `end` use "YYYY-MM" so the list can be sorted reliably;
 * `end: null` means "Present". Entries are sorted newest-first by
 * `sortedExperience`, so the order below does not matter.
 */
export const experience = [
  {
    company: 'Aussie Broadband',
    role: 'Software Engineer Level 3',
    employmentType: '12-month contract · Full-time',
    start: '2026-01',
    end: null,
    techStack: {
      Backend: ['PHP', 'Laravel 13', 'RESTful APIs'],
      Frontend: ['Vue.js'],
      Database: ['SQL', 'Redis', 'Elasticsearch'],
      Testing: ['PHPUnit'],
      'DevOps & Tools': ['Rancher', 'Kubernetes', 'Docker', 'Grafana', 'Laravel Horizon', 'Laravel Health'],
      Tools: ['GitLab', 'Slack', 'Postman', 'Colima', 'Claude Code'],
      Methodology: ['Agile (Scrum)'],
      'Operating systems': ['macOS'],
    },
    highlights: [
      'Develop and maintain RESTful APIs within a modular Laravel application for a multi-tenant environment, supporting communication between backend services.',
      'Modernised legacy code by migrating selected modules to Laravel, improving maintainability and aligning them with the application’s modern architecture.',
      'Created Grafana dashboards using structured logs.',
      'Use Claude Code for AI-assisted development, reviewing and validating AI-generated code to support implementation and maintain code quality.',
      'Use Rancher (Kubernetes) to access pods, troubleshoot issues, port-forward database connections and support UAT deployments.',
    ],
  },
  {
    company: 'Sequoia Financial Group',
    role: 'Software Engineer Level 2',
    employmentType: '',
    start: '2022-12',
    end: '2026-01',
    techStack: {
      Backend: ['PHP', 'Symfony (3.4 → 5.4)', 'Slim', 'Microservices', 'OAuth2'],
      Frontend: ['Vue.js'],
      Database: ['SQL', 'SleekDB (NoSQL)', 'Redis'],
      Testing: ['PHPUnit', 'TDD', 'Selenium WebDriver'],
      'DevOps & Tools': ['Docker', 'Git', 'Webpack', 'Makefile'],
      Tools: ['Bitbucket', 'Jira', 'Confluence', 'Slack', 'PuTTY', 'Postman'],
      Methodology: ['Agile (Scrum)'],
      'Operating systems': ['Windows', 'WSL2'],
    },
    highlights: [
      'Developed and maintained RESTful APIs in a microservices architecture, enabling secure and scalable inter-service communication.',
      'Upgraded Symfony from v3.4 to v5.4.',
      'Integrated third-party payment gateways.',
      'Worked with Dockerised environments and WSL2 for smooth local development.',
      'Contributed to unit and feature testing using PHPUnit and Selenium.',
      'Integrated APIs on the frontend using Vue.js.',
    ],
  },
  {
    company: 'Gateway Group of Companies',
    role: 'Senior Software Engineer',
    employmentType: '',
    start: '2021-04',
    end: '2022-06',
    techStack: {
      Backend: ['PHP', 'Laravel'],
      Database: ['SQL'],
      Frontend: ['AJAX'],
      'DevOps & Tools': ['Git', 'Jenkins', 'Azure dev tools','PuTTY'],
      'Cloud & Others': ['AWS EC2', 'Postman'],
      Methodology: ['Agile (Scrum)'],
      'Operating systems': ['Windows'],
    },
    highlights: [
      'Developed custom data filtration APIs to support client-specific reporting and analytics.',
      'Maintained and enhanced a client’s web application for the automobile industry, adding new features and supporting existing functionality.',
      'Communicated with clients to understand requirements and provide ongoing technical support.',
      'Participated in Agile sprint planning, team discussions and task estimation.',
    ],
  },
  {
    company: 'AGILE Infoways Pvt. Ltd.',
    role: 'Web Developer',
    employmentType: '',
    start: '2019-06',
    end: '2021-03',
    techStack: {
      Backend: ['PHP', 'Laravel', 'CodeIgniter', 'Lumen'],
      Frontend: ['Angular', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'],
      Database: ['SQL'],
      'Tools & APIs': ['Git', 'Postman', 'Google APIs', 'Stripe', 'Mailchimp', 'DigitalOcean', 'PuTTY', 'Monday.com'],
      Methodology: ['Agile (Scrum)'],
      'Operating systems': ['Ubuntu'],
    },
    highlights: [
      'Created RESTful APIs for the frontend team to consume in mobile applications.',
      'Integrated third-party APIs including Google Maps (location services), Stripe (payment processing) and Mailchimp (email campaigns).',
      'Designed and maintained database schemas and wrote optimised SQL queries.',
      'Built and maintained features such as notifications, SMS, email, deep links, payment gateway integration and scoring systems.',
      'Worked on API integration in Angular.',
    ],
  },
  {
    company: 'ArsenalTech Pvt. Ltd.',
    role: 'Intern',
    employmentType: 'Internship',
    start: '2018-12',
    end: '2019-05',
    techStack: {
      Backend: ['PHP', 'Laravel', 'WordPress'],
      Frontend: ['jQuery', 'JavaScript', 'AJAX'],
      Database: ['SQL'],
    },
    highlights: [
      'Helped with backend development using Laravel and core PHP.',
      'Worked on basic frontend tasks using jQuery and AJAX.',
      'Learned how to customise WordPress and manage databases.',
    ],
  },
]

/** Experience sorted newest-first (current roles always on top). */
export const sortedExperience = [...experience].sort((a, b) => {
  const endA = a.end ?? '9999-12'
  const endB = b.end ?? '9999-12'
  if (endA !== endB) return endB.localeCompare(endA)
  return b.start.localeCompare(a.start)
})
