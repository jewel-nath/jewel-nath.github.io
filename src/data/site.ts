// Every word on the home page lives here, so the page and its parts only lay it out.
// Written from the hub's profile/identity.md ("Words to use everywhere") and its projects/ files.
import type { ImageMetadata } from 'astro';
import portrait from '../assets/home/portrait.jpg';
import nikoFitting from '../assets/home/robot-niko-2022-11-24-jewel-fitting-arm.jpg';
import nikoFull from '../assets/home/robot-niko-2022-11-29-full-robot.jpg';
import orbiFront from '../assets/orbibot/v1/v1-2025-09-24-pi5-build-front.jpg';
import orbiSide from '../assets/orbibot/v1/v1-2025-09-24-pi5-build-side.jpg';
import orbiFigure from '../assets/reports/orbibot-v1-system-architecture.png';
import nikoFigure from '../assets/reports/robot-niko-system-overview.png';
import conveyFigure from '../assets/conveysort-arm/conveysort-arm-system-overview.png';
import enviroFigure from '../assets/envirobot/envirobot-system-overview.png';

export interface Link {
  label: string;
  href: string;
  icon?: string;
}

export interface Picture {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Video {
  src: string;
  poster: string;
  label: string;
  caption?: string;
}

export interface Clip extends Video {
  when: string;
}

// Clips named by date and subject, each with a poster of the same name.
export function clipsIn(folder: string) {
  return (name: string, when: string, caption: string): Clip => ({
    src: `${folder}/${name}.mp4`,
    poster: `${folder}/${name}.jpg`,
    label: caption,
    caption,
    when,
  });
}

export interface Fact {
  label: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const site = {
  name: 'Jewel Nath',
  url: 'https://jewelnath.dev',
  title: 'Jewel Nath: AI agents, automation and robots',
  // The short tagline, standing alone.
  description: 'Software engineer at Orbitax. I also build AI agents and automation, and love bringing AI into robotics.',
  headline: ['Software Engineer', 'AI Agents & Automation', 'Robotics'],
  // The intro under the headline.
  lead: {
    before: 'At Orbitax, I build .NET backend services for an international tax compliance platform. I also build ',
    ai: 'AI agents',
    middle: ' for smart solutions, and ',
    robots: 'bring AI into robots',
    after: '. I like to see my code work on a physical robot.',
  },
  location: 'Dhaka, Bangladesh',
  portrait: { src: portrait, alt: 'Jewel Nath' } satisfies Picture,
  source: 'https://github.com/jewel-nath/jewel-nath.github.io',
};

// The public copy of the CV: no phone number, and Orbitax's work in general words.
export const cv = {
  href: '/jewel-nath-cv.pdf',
  fileName: 'Jewel-Nath-CV.pdf',
};

// In the agreed order, leaving out the site itself.
export const profiles: Link[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jewelnath/', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com/jewel-nath', icon: 'gh' },
  { label: 'YouTube', href: 'https://www.youtube.com/@jewelnathdev', icon: 'yt' },
  { label: 'X', href: 'https://x.com/jewelnathdev', icon: 'x' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0002-6609-6378', icon: 'orcid' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=kmQQHAQAAAAJ', icon: 'cap' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Jewel-Nath-2', icon: 'rg' },
];

// Focus 10, AI first.
export const interests = ['AI Agents', 'MCP', 'RAG', 'Claude Code', 'Python', 'C# / .NET', 'TypeScript', 'Next.js', 'ROS 2', 'STM32 Firmware'];

export interface Update {
  when: string;
  html: string;
}

// Newest first. Short lines; a link only where there is something to read.
export const latest: Update[] = [
  {
    when: '28–29 Oct 2026',
    html: 'Published the <a href="/robot-niko#report"><b>Robot Niko</b></a>, <a href="/envirobot#report"><b>EnviroBot</b></a> and <a href="/conveysort-arm#report"><b>ConveySort-Arm</b></a> technical reports with DOIs, with the teams as co-authors.',
  },
  {
    when: '27 Oct 2026',
    html: 'Published the <a href="https://doi.org/10.5281/zenodo.23696694"><b>OrbiBot V1</b> technical report</a> on Zenodo, ORCID and ResearchGate.',
  },
  { when: '19 Sep 2026', html: "<b>RoboAI Shop's</b> AI parts planner went live." },
  {
    when: 'Sep 2026',
    html: '<a href="/orbibot#v2"><b>OrbiBot V2</b></a> designed in FreeCAD and KiCad: the full schematic, and all 176 parts placed.',
  },
  { when: 'Aug 2026', html: 'Became <b>Software Engineer</b> at Orbitax.' },
];

export interface Feature {
  id: string;
  name: string;
  status: string;
  years: string;
  context?: string;
  lead: string;
  part: { label: string; text: string };
  stats: Stat[];
  tags: string[];
  links: (Link & { primary?: boolean })[];
}

export const orbibotFeature = {
  feature: {
    id: 'orbibot',
    name: 'OrbiBot V1',
    status: 'Built and driven',
    years: '2025 – 2026',
    context: 'Orbitax, in my free time',
    lead: 'A mecanum robot I welded, wired and programmed. It mapped rooms with LiDAR, drove itself with Nav2 and took commands from an AI agent.',
    part: {
      label: 'My part',
      text: 'all of it: the frame, the electronics, new firmware for the STM32 motor board, the ROS 2 stack, the web dashboard and the agent.',
    },
    stats: [
      { value: '12', label: 'ROS 2 packages' },
      { value: '58', label: 'agent tools' },
      { value: '100 Hz', label: 'PID per wheel, on my firmware' },
    ],
    tags: ['ROS 2 Jazzy', 'Nav2', 'slam_toolbox', 'STM32', 'FreeRTOS', 'MCP', 'React'],
    links: [
      { label: 'Project page', href: '/orbibot', icon: 'arrow', primary: true },
      { label: 'Report · DOI', href: 'https://doi.org/10.5281/zenodo.23696694', icon: 'doc' },
      { label: 'Code', href: 'https://github.com/jewel-nath/orbibot-v1', icon: 'code' },
      { label: '13 videos', href: '/orbibot#v1-videos', icon: 'play' },
    ],
  } satisfies Feature,
  photos: [
    {
      src: orbiFront,
      alt: 'OrbiBot V1 from the front: a welded stainless-steel frame on four mecanum wheels, a LiDAR on top, and a Raspberry Pi 5 above the STM32 motor board.',
      caption: 'On its Raspberry Pi 5, September 2025',
    },
    {
      src: orbiSide,
      alt: 'OrbiBot V1 from the side, on a desk.',
      caption: 'Side view · Sep 2025',
    },
  ] satisfies Picture[],
  video: {
    src: '/media/orbibot/v1/v1-2025-07-20-pi5-gamepad-slam-map.mp4',
    poster: '/media/orbibot/v1/v1-2025-07-20-pi5-gamepad-slam-map.jpg',
    label: 'OrbiBot V1 on its Raspberry Pi 5, with its gamepad and the SLAM map in RViz',
    caption: 'Pi 5, gamepad and a SLAM map · Jul 2025',
  } satisfies Video,
};

export const nikoFeature = {
  feature: {
    id: 'niko',
    name: 'Robot Niko',
    status: 'Built',
    years: '2022',
    context: 'Quanta Robotics',
    lead: 'A life-size, 3D-printed humanoid assistant that talks, greets the people it knows with a handshake, and follows faces with its head.',
    part: {
      label: 'My part',
      text: 'the programming, the 3D printing, the assembly, the servo tuning and the arm motions, with the team at Quanta Robotics.',
    },
    stats: [
      { value: '27', label: 'servos: head, eyes, jaw, arms, fingers' },
      { value: '51', label: 'questions in its answer bank, as published' },
      { value: '13', label: 'diagrams in its report' },
    ],
    tags: ['Python', 'Raspberry Pi', 'OpenCV', 'face_recognition', 'PCA9685', '3D printing'],
    links: [
      { label: 'Project page', href: '/robot-niko', icon: 'arrow', primary: true },
      { label: 'Report · DOI', href: 'https://doi.org/10.5281/zenodo.23719561', icon: 'doc' },
      { label: 'Code', href: 'https://github.com/jewel-nath/robot-niko', icon: 'code' },
      { label: '5 videos', href: '/robot-niko#video', icon: 'play' },
    ],
  } satisfies Feature,
  photos: {
    full: { src: nikoFull, alt: 'Robot Niko, finished: a white 3D-printed humanoid on a stand, with NIKO printed on its chest.', caption: 'Finished · 29 Nov 2022' },
    fitting: { src: nikoFitting, alt: "Jewel fitting one of Niko's arms.", caption: 'Fitting an arm' },
  },
  gif: {
    src: '/media/projects/robot-niko-2022-12-06-head-follows-face.gif',
    alt: "Niko's head turning to follow a face",
    caption: 'Head follows a face',
  },
};

export const teamOsFeature = {
  feature: {
    id: 'team-os',
    name: 'AI powered Team OS',
    status: 'Live',
    years: '2026',
    context: 'RoboAI',
    lead: "One app where a small team runs its projects, tasks, people, time and expenses, and asks AI to do the work, with a person's approval for anything risky.",
    part: {
      label: 'The safety design',
      text: "every AI action runs under the user's own permissions; risky tools ask first, and money moves only with a person's approval.",
    },
    stats: [
      { value: '158', label: 'MCP tools' },
      { value: '33', label: 'confirm-first tools' },
      { value: '8', label: 'approval-only money tools' },
    ],
    tags: ['MCP', 'OAuth 2.1', 'PKCE', 'Next.js', 'TypeScript', 'Supabase'],
    links: [{ label: 'Visit teamos.site', href: 'https://teamos.site', icon: 'arrow', primary: true }],
  } satisfies Feature,
};

export interface Report {
  kind: string;
  title: string;
  authors: string[];
  doi: string;
  researchGate: string;
  figure: Picture;
  bibtex: string;
}

export const reports: Report[] = [
  {
    kind: 'Technical report · v1.0 · Zenodo · Oct 2026',
    title:
      'OrbiBot V1: A Mecanum Mobile Robot with Microcontroller-Level Real-Time Control, a ROS 2 Navigation Stack, and a Tool-Using LLM Agent — Design and Bench Evaluation',
    authors: ['J. Nath'],
    doi: '10.5281/zenodo.23696694',
    researchGate: 'https://www.researchgate.net/publication/416980928',
    figure: { src: orbiFigure, alt: 'The system architecture figure from the OrbiBot V1 report.', caption: 'From the OrbiBot V1 report: the system architecture' },
    bibtex: `@techreport{nath2026orbibot,
  author = {Nath, Jewel},
  title = {OrbiBot V1: A Mecanum Mobile Robot with Microcontroller-Level Real-Time Control, a ROS 2 Navigation Stack, and a Tool-Using LLM Agent -- Design and Bench Evaluation},
  institution = {Zenodo},
  type = {Technical report},
  number = {v1.0},
  year = {2026},
  month = oct,
  doi = {10.5281/zenodo.23696694}
}`,
  },
  {
    kind: 'Technical report · v1.1 · Zenodo · Oct 2026',
    title: 'Robot Niko: A Life-Size 3D-Printed Humanoid Assistant on a Raspberry Pi — System Design and Build',
    authors: ['J. Nath', 'S. Mondol', 'T. B. Parves', 'M. M. K. Mahin', 'A. Chakraborty'],
    doi: '10.5281/zenodo.23719561',
    researchGate: 'https://www.researchgate.net/publication/417001196',
    figure: { src: nikoFigure, alt: 'The system overview figure from the Robot Niko report.', caption: 'From the Robot Niko report: the system overview' },
    bibtex: `@techreport{nath2026niko,
  author = {Nath, Jewel and Mondol, Shanjit and Bin Parves, Tousif and Khan Mahin, Md Mohiuddin and Chakraborty, Anik},
  title = {Robot Niko: A Life-Size 3D-Printed Humanoid Assistant on a Raspberry Pi -- System Design and Build},
  institution = {Zenodo},
  type = {Technical report},
  number = {v1.1},
  year = {2026},
  month = oct,
  doi = {10.5281/zenodo.23719561}
}`,
  },
  {
    kind: 'Technical report · v1.0 · Zenodo · Oct 2026',
    title: 'EnviroBot: A Mobile Robotic Arm that Detects and Picks Up Waste — Design, YOLOv8 Waste Detection and Prototype',
    authors: ['J. Nath', 'T. J. Toma', 'T. Akter'],
    doi: '10.5281/zenodo.23739491',
    researchGate: 'https://www.researchgate.net/publication/417065818',
    figure: { src: enviroFigure, alt: 'The system overview figure from the EnviroBot report.', caption: 'From the EnviroBot report: the system overview' },
    bibtex: `@techreport{nath2026envirobot,
  author = {Nath, Jewel and Toma, Tasmiara Jahan and Akter, Tanjina},
  title = {EnviroBot: A Mobile Robotic Arm that Detects and Picks Up Waste -- Design, YOLOv8 Waste Detection and Prototype},
  institution = {Zenodo},
  type = {Technical report},
  number = {v1.0},
  year = {2026},
  month = oct,
  doi = {10.5281/zenodo.23739491}
}`,
  },
  {
    kind: 'Technical report · v1.0 · Zenodo · Oct 2026',
    title: 'ConveySort-Arm: A Low-Cost Vision-Guided Sorting Cell with a Conveyor Belt and a Six-Servo Arm — Design and Prototype',
    authors: ['J. Nath', 'S. A. Chowdhury'],
    doi: '10.5281/zenodo.23741975',
    researchGate: 'https://www.researchgate.net/publication/417066215',
    figure: { src: conveyFigure, alt: 'The system overview figure from the ConveySort-Arm report.', caption: 'From the ConveySort-Arm report: the system overview' },
    bibtex: `@techreport{nath2026conveysort,
  author = {Nath, Jewel and Chowdhury, Shafiul Alam},
  title = {ConveySort-Arm: A Low-Cost Vision-Guided Sorting Cell with a Conveyor Belt and a Six-Servo Arm -- Design and Prototype},
  institution = {Zenodo},
  type = {Technical report},
  number = {v1.0},
  year = {2026},
  month = oct,
  doi = {10.5281/zenodo.23741975}
}`,
  },
];

export const orcid = { id: '0009-0002-6609-6378', href: 'https://orcid.org/0009-0002-6609-6378' };

export interface VideoProject {
  name: string;
  status: string;
  years: string;
  text: string;
  tags: string[];
  page: string;
  code: string;
  video: Video;
}

export const videoProjects: VideoProject[] = [
  {
    name: 'ConveySort-Arm',
    status: 'Built and run',
    years: '2024 · RoboAI',
    text: 'A conveyor belt and a six-servo arm that sort blocks by size, with a webcam and OpenCV.',
    tags: ['OpenCV', 'Arduino', 'Python'],
    page: '/conveysort-arm',
    code: 'https://github.com/jewel-nath/conveysort-arm',
    video: {
      src: '/media/conveysort-arm/conveysort-arm-2024-11-18-arm-camera-and-conveyor.mp4',
      poster: '/media/conveysort-arm/conveysort-arm-2024-11-18-arm-camera-and-conveyor.jpg',
      label: 'ConveySort-Arm: the webcam watches the belt, and the arm takes a block off it and sets it down',
    },
  },
  {
    name: 'EnviroBot',
    status: 'Built',
    years: '2023 – 2024 · with my team',
    text: 'A rover with a robot arm that tells paper, plastic and other waste apart with YOLOv8, and picks it up.',
    tags: ['YOLOv8', 'Python', 'Servo arm'],
    page: '/envirobot',
    code: 'https://github.com/jewel-nath/envirobot',
    video: {
      src: '/media/envirobot/envirobot-2024-01-11-trash-collecting.mp4',
      poster: '/media/envirobot/envirobot-2024-01-11-trash-collecting.jpg',
      label: 'EnviroBot picking a cube up off the floor',
    },
  },
];

export interface SmallProject {
  name: string;
  status: string;
  years: string;
  text: string;
  icon: string;
  link: Link;
}

export const smallProjects: SmallProject[] = [
  {
    name: "RoboAI Shop's parts planner",
    status: 'Live',
    years: '2026 · RoboAI',
    text: "Describe the robot you want to build, and AI lists the parts from the shop's stock; the server, not the AI, adds up the price.",
    icon: 'cart',
    link: { label: 'shop.roboai.one', href: 'https://shop.roboai.one' },
  },
  {
    name: 'Agentic robotics skills',
    status: 'Written',
    years: '2026',
    text: '29 skills that teach AI coding assistants to work on robots: ROS 2, Nav2, MoveIt 2, simulation and embedded code. Parts are adapted from two Apache-2.0 projects, credited in the repo.',
    icon: 'book',
    link: { label: 'Code on GitHub', href: 'https://github.com/jewel-nath/agentic-robotics' },
  },
  {
    name: 'Pi Car',
    status: 'Built',
    years: '2022 – 2023',
    text: 'A Raspberry Pi car that follows lines, avoids obstacles, and drives by keyboard, phone or live video.',
    icon: 'car',
    link: { label: 'Code on GitHub', href: 'https://github.com/jewel-nath/pi-car' },
  },
  {
    name: 'Line follower',
    status: 'Built',
    years: '2023 · team CoU Bots',
    text: 'An Arduino line follower with PID steering. Runner-up at EEE Day 2023, BAIUST.',
    icon: 'trophy',
    link: { label: 'Code on GitHub', href: 'https://github.com/jewel-nath/line-follower-robot' },
  },
];

export interface Role {
  place: string;
  title: string;
  when: string;
  earlier?: string;
  text: string;
}

export const roles: Role[] = [
  {
    place: 'Orbitax',
    title: 'Software Engineer',
    when: 'Aug 2026 – present',
    earlier: 'Associate Software Engineer, May 2024 – Jul 2026',
    text: 'Backend services in .NET, reliable background workflows and Angular features for an international tax compliance platform used by multinational companies.',
  },
  {
    place: 'RoboAI',
    title: 'Founder & Technical Advisor',
    when: 'Oct 2023 – present',
    text: "The AI startup I founded, now run by my juniors, whom I advise. I built its AI products: a team workspace where AI handles the tasks, and a shop where AI plans a robot's parts.",
  },
  {
    place: 'School of Robotics, Cumilla',
    title: 'Programming & Robotics Trainer, part time',
    when: 'Mar 2021 – Mar 2024',
    text: 'Taught robotics and programming at 30 schools and colleges in 10 upazilas, in workshops with the Cumilla DC Office, and trained students for the National High School Programming Contest.',
  },
  {
    place: 'Quanta Robotics',
    title: 'Co-Founder & Robotics Programmer',
    when: 'May 2019 – Dec 2023',
    text: 'Co-founded the robotics team that built Robot Niko, a life-size 3D-printed humanoid assistant. I worked on every part: its programming, 3D printing, assembly and arm motions.',
  },
];

export const education = {
  degree: 'B.Sc. Engineering in ICT',
  place: 'Comilla University',
  when: '2019 – 2024',
};

export interface Award {
  title: string;
  detail: string;
  when: string;
  href?: string;
}

export const awards: Award[] = [
  {
    title: 'Codeforces Specialist (max rating 1509)',
    detail: '1,200+ problems solved, as CodeCell',
    when: 'Jan 2021',
    href: 'https://codeforces.com/profile/CodeCell',
  },
  {
    title: 'Runner-up, Line Follower Robot contest',
    detail: 'EEE Day 2023, BAIUST, with team CoU Bots',
    when: 'Dec 2023',
  },
];

export interface Skill {
  area: string;
  skills: string;
  shownIn?: string;
}

// The nine groups, as agreed; "shown in" names the work that proves each, where one does.
export const skills: Skill[] = [
  { area: 'Languages', skills: 'C#, Python, TypeScript, JavaScript, C++', shownIn: 'Orbitax, OrbiBot, Team OS, the earlier robots' },
  { area: 'AI engineering', skills: 'AI agents, MCP servers, LLM tool calling, RAG, structured outputs, Ollama, LiteLLM', shownIn: "Team OS, OrbiBot's agent, RoboAI Shop's planner, aiTutor" },
  { area: 'AI dev tools', skills: 'Claude Code (skills, subagents, rules), Codex, Cursor, AI code review, spec-driven development', shownIn: "RoboAI's repositories, this site" },
  { area: 'Backend & data', skills: '.NET 10, ASP.NET Core, CQRS, background workflows, Node.js, MongoDB, PostgreSQL, Supabase', shownIn: 'Orbitax, Team OS, RoboAI Shop' },
  { area: 'Frontend', skills: 'Angular, Next.js, Tailwind', shownIn: 'Orbitax, Team OS, RoboAI Shop' },
  { area: 'Robotics & vision', skills: 'ROS 2 Jazzy, Nav2, SLAM, robot_localization, MoveIt, URDF, RViz, Gazebo, MuJoCo; OpenCV, YOLOv8, MediaPipe, PyTorch', shownIn: 'OrbiBot, Robot Niko, EnviroBot, ConveySort-Arm, Sign Language Detection' },
  { area: 'Embedded & hardware', skills: 'STM32 firmware, PID control, ESP32, Arduino, Raspberry Pi, KiCad, FreeCAD (Python-scripted), 3D printing', shownIn: "OrbiBot's firmware, CAD and board, Robot Niko, the earlier robots" },
  { area: 'Testing', skills: 'Playwright, NUnit, pytest, Vitest', shownIn: 'Team OS, Orbitax' },
  { area: 'DevOps & infra', skills: 'Git, Linux, Docker, Vercel, Cloudflare R2, systemd services on Raspberry Pi', shownIn: "Team OS, this site, Robot Niko's start-up service" },
];

export const buildLog = {
  text: "I post OrbiBot's build log on YouTube, LinkedIn and X, one step of the build at a time.",
  links: [
    { label: 'Playlists on YouTube', href: 'https://www.youtube.com/@jewelnathdev/playlists', icon: 'yt' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jewelnath/', icon: 'in' },
    { label: 'X', href: 'https://x.com/jewelnathdev', icon: 'x' },
  ] satisfies Link[],
};
