/**
 * Technical skills — source: resume "Areas of Expertise".
 *
 * `context` tells visitors where a skill was used:
 *   - 'professional' → used in employment (see experience.js)
 *   - 'learning'     → currently developing through personal projects
 */
export const skillGroups = [
  {
    category: 'Backend',
    context: 'professional',
    skills: [
      'PHP',
      'Laravel',
      'Symfony',
      'Slim',
      'Lumen',
      'CodeIgniter',
      'RESTful API development',
      'Microservices',
      'Eloquent ORM',
      'Doctrine ORM',
      'Webhooks, jobs & queues',
      'OOP, SOLID & design patterns',
    ],
  },
  {
    category: 'Databases',
    context: 'professional',
    skills: ['MySQL', 'PostgreSQL', 'NoSQL', 'Redis', 'Elasticsearch', 'Database design & optimisation'],
  },
  {
    category: 'Frontend',
    context: 'professional',
    skills: ['Vue.js', 'Angular', 'JavaScript', 'jQuery', 'AJAX', 'HTML5', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Testing & quality',
    context: 'professional',
    skills: ['PHPUnit', 'TDD', 'Selenium WebDriver'],
  },
  {
    category: 'DevOps, monitoring & tools',
    context: 'professional',
    skills: [
      'Docker',
      'Rancher (Kubernetes)',
      'Jenkins',
      'Git',
      'Makefile',
      'Webpack',
      'Grafana',
      'Linux CLI',
      'WSL2',
      'Postman',
      'AWS (working knowledge)',
    ],
  },
  {
    category: 'AI-assisted development',
    context: 'professional',
    skills: [
      'Claude Code',
      'AI coding agents',
      'Refactoring, debugging & test generation',
      'AI-generated code review & validation',
    ],
  },
  {
    category: 'Practices & documentation',
    context: 'professional',
    skills: ['Agile (Scrum)', 'Code reviews', 'UML', 'OpenAPI', 'Scramble'],
  },
  {
    category: 'Currently learning',
    context: 'learning',
    note: 'Explored through hands-on personal projects.',
    skills: ['Go (Golang)', 'Gin', 'Goroutines & channels', 'Concurrent programming', 'gRPC', 'Protocol Buffers'],
  },
]
