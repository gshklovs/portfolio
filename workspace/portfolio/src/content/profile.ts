export type SocialLink = {
  label: "LinkedIn" | "GitHub" | "Devpost" | "Email" | "Resume" | string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  link?: string;
};

export type Experience = {
  title: string;
  company: string;
  start: string;
  end: string | "Present";
  location?: string;
  bullets: string[];
};

export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  authors?: string;
  link?: string;
  description?: string;
};

export type Award = {
  title: string;
  org?: string;
  year?: string;
  link?: string;
  description?: string;
};

export type MediaAsset = {
  title: string;
  kind: "image" | "video";
  src: string;
  caption?: string;
  link?: string;
};

// Static asset references resolved by Vite
const YC_DEMO_IMG = new URL("../assets/IMG_3457.PNG", import.meta.url).href;
const FOUNDATION_IMG = new URL("../assets/Phantom Purple.jpg", import.meta.url)
  .href;

export const profile = {
  name: "Greg Shklovski",
  headline:
    "Deploying Humanoid Robots @ Foundation · Robot Learning Research · Startups",
  location: "Irvine, California",
  summary:
    "I build practical robot learning systems and fast demos for startups. My work spans on-device perception, imitation learning for manipulation, and human-in-the-loop interfaces that make robots useful in the real world.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gshklovski/" },
    { label: "GitHub", href: "https://github.com/gshklovski" },
    { label: "Devpost", href: "https://devpost.com/gshklovs" },
  ] as SocialLink[],
  skills: [
    "Python",
    "C++",
    "PyTorch",
    "CUDA",
    "TensorRT",
    "ROS 2",
    "OpenCV",
    "Open3D",
    "MediaPipe",
    "Diffusion Policy",
    "Imitation Learning",
    "TypeScript",
    "React",
    "FastAPI",
  ],
  projects: [
    {
      title: "Envision",
      description:
        "Gesture interface device + SDK with on-device Coral TPU acceleration; event-driven APIs for fine-grained hand inputs.",
      tags: ["Edge ML", "TPU", "Gesture"],
      link: "https://yasper.me/envision",
      year: "2025",
    },
    {
      title: "Hungry Monkey",
      description:
        "YC x Supabase AI hackathon – “Yelp for Holiday Hours.” FastAPI backend + React frontend. See Loom demo in outline.",
      tags: ["Web", "AI", "Hackathon"],
      link: "https://github.com/rovirmani/hungry-monkey",
      year: "2025",
    },
    {
      title: "Gesture Canvas",
      description:
        "A dynamic canvas for sketching ideas using hand-tracking gestures to draw and manipulate elements in real time.",
      tags: ["Computer Vision", "Web", "Gesture"],
      link: "https://devpost.com/gshklovs",
      year: "2024",
    },
    {
      title: "HandCode",
      description:
        "Prototype that lets you code with wrist gestures, mapping movement patterns to editor actions.",
      tags: ["HCI", "Prototype"],
      link: "https://devpost.com/gshklovs",
      year: "2024",
    },
    {
      title: "git.ar",
      description:
        "Spatial computing tool that visualizes git commit graphs in AR, supports hand-tracked merging, and uses LLMs for diff summaries.",
      tags: ["AR", "Developer Tools", "LLM"],
      link: "https://devpost.com/gshklovs",
      year: "2023",
    },
    {
      title: "YapTrack",
      description:
        "Real-time meeting guide that keeps discussions on track and turns ideas into follow-ups.",
      tags: ["Productivity", "Real-time"],
      link: "https://devpost.com/gshklovs",
      year: "2023",
    },
    {
      title: "Basket",
      description: "Collaborative grocery delivery experiment.",
      tags: ["Service Design"],
      link: "https://devpost.com/gshklovs",
      year: "2022",
    },
    {
      title: "Clock In",
      description:
        "Body-mounted dash cam to protect workers in hazardous conditions.",
      tags: ["Hardware", "IoT"],
      link: "https://devpost.com/gshklovs",
      year: "2022",
    },
  ] as Project[],
  experience: [
    {
      title: "Forward Deployed Engineer",
      company: "Foundation",
      start: "Aug 2025",
      end: "Present",
      location: "Orange County, CA",
      bullets: [
        "Deploy humanoid robots to customers; integrate hardware, perception, and control into reliable demos and pilots.",
        "Close the loop between research and deployment with a focus on safety, reliability, and iteration speed across perception, control, and demos.",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "CalPlug, Calit2 (UCI)",
      start: "Sep 2023",
      end: "Jun 2025",
      location: "Irvine, CA",
      bullets: [
        "Trained and deployed adaptive intention recognition enabling a UR-3e arm to assist with ambiguous manufacturing tasks.",
        "Built data collection, labeling, and evaluation pipelines; delivered baselines for intent and state-change recognition.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Relativity Space",
      start: "Jun 2024",
      end: "Sep 2024",
      location: "Long Beach, CA",
      bullets: [
        "Built an ETL pipeline powering the Factory Platform (Python, GraphQL).",
        "Improved data reliability and schema evolution for manufacturing workflows.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Summit Technology Laboratory",
      start: "Jan 2024",
      end: "Jun 2024",
      location: "Irvine, CA",
      bullets: [
        "Shipped two full-stack apps (C#/.NET + Angular).",
        "Implemented auth, database, file system, and calibration workflows.",
      ],
    },
  ] as Experience[],

  publications: [
    {
      title: "Envision: Gesture Interface Device",
      venue: "eScholarship — SSOE Research Symposium Dean's Awards",
      year: "2025",
      authors: "G. Shklovski, Y. De Jong, D. Dao, A. Liu",
      link: "https://escholarship.org/uc/item/9k5938wb",
      description:
        "Edge-accelerated hand-tracking device with event-driven SDK; reduced demo app size by ~80% for gesture apps.",
    },
  ] as Publication[],

  awards: [
    {
      title: "Dean’s Choice Award",
      org: "UCI School of Engineering Senior Design Showcase",
      year: "2025",
      link: "https://www.linkedin.com/posts/gshklovski_jarvis-in-real-life-after-building-activity-7306823889483898881-MhVU",
      description: "Awarded for Envision — gesture interface device and SDK.",
    },
  ] as Award[],

  media: [
    {
      title: "Hungry Monkey — YC demo photo",
      kind: "image",
      src: YC_DEMO_IMG,
      caption:
        "Demoing Hungry Monkey at YC — rescuing your last-minute holiday restaurant search.",
      link: "https://github.com/rovirmani/hungry-monkey",
    },
    {
      title: "Foundation Phantom MK1",
      kind: "image",
      src: FOUNDATION_IMG,
      caption: "Foundation Phantom MK1 — field deployment work.",
    },
    // Placeholders for upcoming assets (add files and update if available)
    // { title: 'Foundation robot', kind: 'image', src: FOUNDATION_IMG, caption: 'Deployment work', },
    // { title: 'Robot learning demo', kind: 'video', src: RESEARCH_VIDEO, caption: 'Imitation learning manipulation', },
  ] as MediaAsset[],
};
