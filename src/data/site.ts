// Every word on the page lives here, so the page and its parts only lay it out.
import type { ImageMetadata } from 'astro';
import orbibotV1 from '../assets/orbibot-v1-2025-09-24-pi5-build-front.jpg';
import robotNiko from '../assets/robot-niko-2022-11-29-full-robot.jpg';

export interface Link {
  label: string;
  href: string;
}

export const site = {
  name: 'Jewel Nath',
  url: 'https://jewelnath.dev',
  title: 'Jewel Nath: AI agents, automation and robots',
  description:
    'I build AI agents and automation for real products, and put them on robots I build myself. Software engineer at Orbitax, founder and technical advisor of RoboAI, builder of OrbiBot.',
  headline: ['Software Engineer', 'AI Agents & Automation', 'Robotics'],
  lead: 'I build AI agents and automation for real products, and put them on robots I build myself.',
  location: 'Dhaka, Bangladesh',
  source: 'https://github.com/jewel-nath/jewel-nath.github.io',
};

// The public copy of the CV: no phone number, and Orbitax's work in general words.
export const cv = {
  href: '/jewel-nath-cv.pdf',
  fileName: 'Jewel-Nath-CV.pdf',
};

export const profiles: Link[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jewelnath/' },
  { label: 'GitHub', href: 'https://github.com/jewel-nath' },
  { label: 'YouTube', href: 'https://www.youtube.com/@jewelnathdev' },
  { label: 'X', href: 'https://x.com/jewelnathdev' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0002-6609-6378' },
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
    when: 'Since Aug 2026',
    earlier: 'Associate Software Engineer, May 2024 to Jul 2026',
    text: 'Backend services in .NET for an international tax compliance platform.',
  },
  {
    place: 'RoboAI',
    title: 'Founder & Technical Advisor',
    when: 'Since Aug 2026',
    earlier: 'Robotics & AI Automation Engineer, part time, May 2024 to Jul 2026; Founder & CEO, Oct 2023 to Apr 2024',
    text: 'The AI and robotics startup I founded, now run by my juniors: it builds AI products, adds AI to existing systems, and makes AI agents that automate work.',
  },
  {
    place: 'OrbiBot',
    title: 'Builder',
    when: 'Since 2025',
    text: 'My robot, from a welded frame to an AI agent, shared as a build log.',
  },
];

// The status words are the projects' own: a mark is filled when the thing exists and runs.
export type Status = 'live' | 'built' | 'published' | 'designed' | 'simulated';

export interface Project {
  name: string;
  context: string;
  years: string;
  status: Status;
  statusLabel: string;
  summary: string;
  stack: string;
  links: Link[];
  image?: { src: ImageMetadata; alt: string };
}

export const projects: Project[] = [
  {
    name: 'AI powered Team OS',
    context: 'RoboAI',
    years: '2026',
    status: 'live',
    statusLabel: 'Live',
    summary:
      "One app where a small company runs its projects, tasks, people, time, expenses and paperwork, and where AI does real work. Its MCP server has more than 150 tools, so Claude and ChatGPT can work inside it, always with the user's own permissions. Anything that moves money waits for a person's approval.",
    stack:
      'MCP SDK, its own OAuth 2.1 server (PKCE, dynamic client registration, rotating refresh tokens), Next.js, TypeScript and Supabase',
    links: [{ label: 'teamos.site', href: 'https://teamos.site' }],
  },
  {
    name: "RoboAI Shop's parts planner",
    context: 'RoboAI',
    years: '2026',
    status: 'live',
    statusLabel: 'Live',
    summary:
      "A student describes the robot they want to build, and the AI answers with parts from the shop's catalogue, grouped by subsystem, each with a reason. The server drops any part that isn't in the catalogue, blanks anything that looks like a price and adds up the total from the database, so the model can never invent a price.",
    stack:
      'Gemini with structured output against a schema, three models in rotation, Next.js, Supabase Postgres and Vercel',
    links: [{ label: 'shop.roboai.one', href: 'https://shop.roboai.one' }],
  },
  {
    name: 'OrbiBot V1',
    context: 'My robot',
    years: '2025 to 2026',
    status: 'built',
    statusLabel: 'Built and driven',
    summary:
      'A mecanum-wheeled robot on a stainless-steel frame I welded. I wrote its STM32 firmware and its 12 ROS 2 packages: localization that fuses the wheels with the IMU, LiDAR mapping with slam_toolbox, navigation with Nav2 and frontier exploration. It runs on a Raspberry Pi 5. A React dashboard drives it from a browser, and an AI agent controls it through 58 robot tools, on Gemini, Claude, Kimi or Ollama.',
    stack:
      'ROS 2 Jazzy, Nav2, slam_toolbox, robot_localization, STM32 with PlatformIO, React, TypeScript, rosbridge and WebRTC',
    links: [
      { label: 'Code on GitHub', href: 'https://github.com/jewel-nath/orbibot-v1' },
      { label: 'Build log on YouTube', href: 'https://www.youtube.com/@jewelnathdev/playlists' },
    ],
    image: {
      src: orbibotV1,
      alt: 'OrbiBot V1 from the front: a welded stainless-steel frame on four mecanum wheels, a LiDAR on top, and a Raspberry Pi 5 above the STM32 motor board.',
    },
  },
  {
    name: 'Robot Niko',
    context: 'Quanta Robotics',
    years: '2022',
    status: 'built',
    statusLabel: 'Built',
    summary:
      'A life-size, 3D-printed humanoid assistant, built with the Quanta Robotics team. I worked on every part of it: the 3D printing, the assembly, the servo tuning, the arm motions and the Python software on a Raspberry Pi. It wakes to "Hey Niko", holds spoken conversations, moves its jaw as it speaks, and greets the people it knows by name with a handshake.',
    stack: 'Python on a Raspberry Pi, 27 servos on two PCA9685 boards, OpenCV, face_recognition and a Porcupine wake word',
    links: [
      { label: 'Code on GitHub', href: 'https://github.com/jewel-nath/robot-niko' },
      { label: 'Video: its head follows a face', href: 'https://youtu.be/6iEj3AY1AlA' },
      { label: 'Video: it introduces itself', href: 'https://youtu.be/Iotg0E8AKoU' },
    ],
    image: {
      src: robotNiko,
      alt: 'Robot Niko, finished: a white 3D-printed humanoid head, torso, arms and hands on a stand, with NIKO printed on its chest.',
    },
  },
  {
    name: 'Agentic robotics skills',
    context: 'Open source',
    years: '2026',
    status: 'published',
    statusLabel: 'On GitHub',
    summary:
      '29 skills that teach AI coding assistants, such as Claude Code, Cursor and Windsurf, to work on robots: ROS 2, Nav2, MoveIt 2, simulation and embedded code.',
    stack: 'Agent skills for ROS 2, Nav2, MoveIt 2, simulation and embedded work',
    links: [{ label: 'agentic-robotics', href: 'https://github.com/jewel-nath/agentic-robotics' }],
  },
];

export interface EarlierRobot {
  name: string;
  years: string;
  text: string;
  code: string;
}

export const earlierRobots: EarlierRobot[] = [
  {
    name: 'EnviroBot',
    years: '2024',
    text: 'A rover with a 6-DOF arm: its camera tells paper, plastic, metal and other waste apart with YOLOv8, and the arm picks it up. My final-year project.',
    code: 'https://github.com/jewel-nath/envirobot',
  },
  {
    name: 'ConveySort-Arm',
    years: '2024',
    text: 'A six-servo arm and a conveyor belt that sort blocks by size, with a webcam, OpenCV and an Arduino.',
    code: 'https://github.com/jewel-nath/conveysort-arm',
  },
  {
    name: 'Pi Car',
    years: '2022 to 2023',
    text: 'A Raspberry Pi car that follows lines, avoids obstacles, and drives by keyboard, phone or live video.',
    code: 'https://github.com/jewel-nath/pi-car',
  },
  {
    name: 'Line follower',
    years: '2023',
    text: 'An Arduino line follower with PID steering, runner-up at BAIUST EEE Day 2023.',
    code: 'https://github.com/jewel-nath/line-follower-robot',
  },
];

export interface Skill {
  area: string;
  skills: string;
  shownIn: string;
  href?: string;
}

export const skills: Skill[] = [
  {
    area: 'AI agents and MCP',
    skills: 'MCP servers with their own OAuth 2.1, LLM tool calling, agents that run on several models',
    shownIn: "Team OS, OrbiBot's agent",
  },
  {
    area: 'AI safety',
    skills: "Human approval for money actions, confirmations the model can't skip, every AI action under the user's own permissions",
    shownIn: 'Team OS',
  },
  {
    area: 'LLM engineering',
    skills: 'Structured output against a schema, grounding in a database, server-side checks, model rotation, prompts tested before and after each change',
    shownIn: "RoboAI Shop's parts planner",
  },
  {
    area: 'RAG',
    skills: 'Textbook transcription, chunking, pgvector embeddings, answers that cite the page',
    shownIn: "aiTutor's physics questions and answers, over a 366-page textbook",
  },
  {
    area: 'AI-assisted development',
    skills: 'Claude Code with skills, subagents and headless runs; AI review agents',
    shownIn: "RoboAI's repositories",
  },
  {
    area: 'Backend',
    skills: 'C#, .NET 10, ASP.NET Core, CQRS, RabbitMQ, SQL Server, EF Core, Redis, MongoDB, Azure',
    shownIn: 'Orbitax',
  },
  {
    area: 'Web',
    skills: 'TypeScript, Next.js, React, Angular, Supabase with row-level security, Tailwind',
    shownIn: "Team OS, RoboAI Shop, OrbiBot's dashboard",
  },
  {
    area: 'Robotics',
    skills: 'ROS 2 Jazzy, Nav2, slam_toolbox, robot_localization, URDF, RViz, MuJoCo, Gazebo',
    shownIn: 'OrbiBot',
  },
  {
    area: 'Embedded and electronics',
    skills: 'STM32 firmware, PID control, ESP32, Arduino, Raspberry Pi, KiCad',
    shownIn: "OrbiBot V1's firmware, the earlier robots",
  },
  {
    area: 'Computer vision',
    skills: 'OpenCV, MediaPipe, PyTorch, YOLOv8',
    shownIn: 'Robot Niko, EnviroBot, sign-language detection',
  },
  {
    area: 'Mechanical',
    skills: 'Welding, design for 3D printing, FreeCAD scripted in Python',
    shownIn: "OrbiBot V1's frame, Robot Niko",
  },
  {
    area: 'Problem solving',
    skills: 'Codeforces Specialist, best rating 1509, more than 1,200 problems solved',
    shownIn: 'Codeforces',
    href: 'https://codeforces.com/profile/CodeCell',
  },
];

export const buildLog = {
  text: "I post OrbiBot's build log on YouTube, LinkedIn and X, one step of the build at a time. The finished Robot Niko has a playlist of its own.",
  links: [
    { label: 'Playlists on YouTube', href: 'https://www.youtube.com/@jewelnathdev/playlists' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jewelnath/' },
    { label: 'X', href: 'https://x.com/jewelnathdev' },
  ] satisfies Link[],
};
