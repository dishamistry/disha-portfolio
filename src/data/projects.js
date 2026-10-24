/**
 * Personal projects — source: resume "GitHub Projects".
 * Repository links point to the matching public repositories on github.com/dishamistry.
 *
 * `type` distinguishes project kinds on the site:
 *   - 'personal'  → completed personal project
 *   - 'learning'  → hands-on project exploring a technology I'm currently learning
 *
 * Set `featured: false` to hide a project without deleting it.
 */
export const projects = [
  {
    title: 'Laravel Modular Multi-Tenant API',
    description:
      'A modular Laravel REST API demonstrating modular architecture and database-per-tenant isolation.',
    technologies: ['Laravel', 'PHP', 'REST API', 'Multi-tenancy'],
    repoUrl: 'https://github.com/dishamistry/laravel-modular-multitenant-api',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Go Shift Scheduling gRPC API',
    description:
      'A Go project exploring shift scheduling with gRPC and Protocol Buffers. Work in progress.',
    technologies: ['Go', 'gRPC', 'Protocol Buffers'],
    repoUrl: 'https://github.com/dishamistry/go-shift-scheduling-grpc',
    type: 'learning',
    featured: true,
  },
  {
    title: 'Choicedeck OpenAI API',
    description:
      'A Laravel 12 application with a Vue 3 and TypeScript frontend built on Inertia 2, shadcn-vue and Vite, integrating the OpenAI API.',
    technologies: ['Laravel 12', 'Vue 3', 'TypeScript', 'Inertia 2', 'shadcn-vue', 'Vite', 'OpenAI API'],
    repoUrl: 'https://github.com/dishamistry/choicedeck-ai',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Telco Plans and Applications',
    description: 'A Laravel 11 application for telco plans and applications, covered by PHPUnit tests.',
    technologies: ['Laravel 11', 'PHP', 'PHPUnit'],
    repoUrl: 'https://github.com/dishamistry/telco-plan-applications',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Health Management',
    description:
      'A Laravel 11 application that uses Docker and a Makefile to make local development easy.',
    technologies: ['Laravel 11', 'PHP', 'Docker', 'Makefile'],
    repoUrl: 'https://github.com/dishamistry/health-management',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Lumen JWT Auth API',
    description: 'User authentication API built with Lumen using JSON Web Tokens (JWT).',
    technologies: ['Lumen', 'PHP', 'JWT', 'REST API'],
    repoUrl: 'https://github.com/dishamistry/lumen-laravel',
    type: 'personal',
    featured: true,
  },
  {
    title: 'MVC using Core PHP',
    description: 'A custom MVC structure built with object-oriented PHP, PDO, Composer and routing.',
    technologies: ['PHP', 'OOP', 'PDO', 'Composer'],
    repoUrl: 'https://github.com/dishamistry/MVC-using-Core-PHP',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Currency Converter CLI Tool',
    description: 'A core PHP command-line tool for currency conversion and profit calculation.',
    technologies: ['PHP', 'CLI'],
    repoUrl: 'https://github.com/dishamistry/currency-converter',
    type: 'personal',
    featured: true,
  },
]

export const projectTypeLabels = {
  personal: 'Personal project',
  learning: 'Learning project',
}

export const featuredProjects = projects.filter((project) => project.featured)
