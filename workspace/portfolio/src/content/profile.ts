export type SocialLink = {
  label: 'LinkedIn' | 'GitHub' | 'Devpost' | 'Email' | 'Resume' | string
  href: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  year?: string
  link?: string
}

export type Experience = {
  title: string
  company: string
  start: string
  end: string | 'Present'
  location?: string
  bullets: string[]
}

export const profile = {
  name: 'Gregory Shklovski',
  headline: 'CSE @ UCI · Class of 2025',
  location: 'Irvine, California',
  summary:
    "I'm a computer science student focused on real-time interfaces, spatial computing, and developer tooling. I build projects that blend HCI with practical utility.",
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gshklovski/' },
    { label: 'GitHub', href: 'https://github.com/gshklovski' },
    { label: 'Devpost', href: 'https://devpost.com/gshklovs' },
  ] as SocialLink[],
  skills: [
    'Python',
    'C++',
    'TypeScript',
    'React',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
    'OpenCV',
    'Firebase',
  ],
  projects: [
    {
      title: 'Gesture Canvas',
      description:
        'A dynamic canvas for sketching ideas using hand-tracking gestures to draw and manipulate elements in real time.',
      tags: ['Computer Vision', 'Web', 'Gesture'],
      link: 'https://devpost.com/gshklovs',
      year: '2024',
    },
    {
      title: 'HandCode',
      description:
        'Prototype that lets you code with wrist gestures, mapping movement patterns to editor actions.',
      tags: ['HCI', 'Prototype'],
      link: 'https://devpost.com/gshklovs',
      year: '2024',
    },
    {
      title: 'git.ar',
      description:
        'Spatial computing tool that visualizes git commit graphs in AR, supports hand-tracked merging, and uses LLMs for diff summaries.',
      tags: ['AR', 'Developer Tools', 'LLM'],
      link: 'https://devpost.com/gshklovs',
      year: '2023',
    },
    {
      title: 'YapTrack',
      description:
        'Real-time meeting guide that keeps discussions on track and turns ideas into follow-ups.',
      tags: ['Productivity', 'Real-time'],
      link: 'https://devpost.com/gshklovs',
      year: '2023',
    },
    {
      title: 'Basket',
      description: 'Collaborative grocery delivery experiment.',
      tags: ['Service Design'],
      link: 'https://devpost.com/gshklovs',
      year: '2022',
    },
    {
      title: 'Clock In',
      description: 'Body-mounted dash cam to protect workers in hazardous conditions.',
      tags: ['Hardware', 'IoT'],
      link: 'https://devpost.com/gshklovs',
      year: '2022',
    },
  ] as Project[],
  experience: [
    // Add roles from LinkedIn; placeholders below
    {
      title: 'Software Engineering Intern',
      company: 'Your Company',
      start: 'Jun 2024',
      end: 'Sep 2024',
      location: 'Remote',
      bullets: [
        'Built feature X improving Y by Z%.',
        'Owned end-to-end delivery of component A.',
      ],
    },
  ] as Experience[],
}