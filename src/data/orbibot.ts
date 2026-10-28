// Every word and picture on /orbibot, written from the hub's projects/orbibot.md, its showcase
// pages and the V1 report. Status words are the project's own. V1 is the Raspberry Pi 5 robot:
// the mini PC starts with V2. V3 waits for Orbitax's OK, and V4 is never shown.
import firstBuild from '../assets/orbibot/v1/v1-2025-06-13-first-build-blue-underglow.jpg';
import frameTop from '../assets/orbibot/v1/v1-2025-06-12-frame-top-view-rplidar.jpg';
import frameWelding from '../assets/orbibot/v1/v1-2025-06-11-frame-welding-still.jpg';
import homeNavigation from '../assets/orbibot/v1/v1-2026-01-08-home-navigation-still.jpg';
import pi5Front from '../assets/orbibot/v1/v1-2025-09-24-pi5-build-front.jpg';
import pi5Side from '../assets/orbibot/v1/v1-2025-09-24-pi5-build-side.jpg';
import realsenseFront from '../assets/orbibot/v1/v1-2025-11-25-realsense-front-office.jpg';
import boardAngle from '../assets/orbibot/v2/v2-board-3d-angle.png';
import boardTop from '../assets/orbibot/v2/v2-board-3d-top.png';
import renderFront from '../assets/orbibot/v2/v2-render-front.png';
import renderRear from '../assets/orbibot/v2/v2-render-rear-three-quarter.png';
import renderSide from '../assets/orbibot/v2/v2-render-side.png';
import renderThreeQuarter from '../assets/orbibot/v2/v2-render-three-quarter.png';
import sheetMcu from '../assets/orbibot/v2/v2-schematic-mcu.png';
import sheetMotors from '../assets/orbibot/v2/v2-schematic-motors.png';
import sheetPower from '../assets/orbibot/v2/v2-schematic-power.png';
import sheetSensors from '../assets/orbibot/v2/v2-schematic-sensors-io.png';
import architecture from '../assets/reports/orbibot-v1-system-architecture.png';
import { clipsIn, type Fact, type Picture, type Video } from './site';

export interface Part {
  title: string;
  text: string;
  edges: string[];
}

// The tappable diagram on the home page and on /orbibot.
export const parts: Record<string, Part> = {
  dashboard: {
    title: 'Browser dashboard',
    text: 'Shows battery, motors, the live map and the camera, and drives the base. It never touches hardware: every command goes through the same ROS 2 topics as everything else.',
    edges: ['top'],
  },
  agent: {
    title: 'LLM agent',
    text: 'Gives Gemini, Claude, Kimi or a local Ollama model 58 robot tools, through an HTTP API, a terminal client and an MCP server, with a safety layer on its direct motion tools.',
    edges: ['top'],
  },
  ros: {
    title: 'Raspberry Pi 5 · ROS 2 Jazzy',
    text: 'Maps with slam_toolbox, fuses wheel odometry and the IMU in an EKF, and navigates with Nav2 and its MPPI controller in omnidirectional mode.',
    edges: ['top', 'mid'],
  },
  lidar: {
    title: 'RPLIDAR A1',
    text: 'The laser scanner the robot maps and localises with.',
    edges: [],
  },
  firmware: {
    title: 'STM32 firmware',
    text: "My own firmware, replacing the vendor's closed one: a 100 Hz PID loop per wheel, encoder counting, odometry, and a 2 s timeout that stops the motors if the Pi goes quiet.",
    edges: ['mid', 'low'],
  },
  wheels: {
    title: 'Four mecanum wheels',
    text: 'Geared DC motors with Hall-effect encoders on a welded stainless-steel frame, so the robot drives in any direction and turns on the spot.',
    edges: ['low'],
  },
};

const clip = clipsIn('/media/orbibot/v1/videos');

export const architectureFigure = {
  href: architecture.src,
  caption: 'System architecture, from the OrbiBot V1 report',
};

export const versions = [
  { id: 'v1', name: 'V1', status: 'Built and driven', when: '2025 – 2026' },
  { id: 'v2', name: 'V2', status: 'Designed, then parked', when: 'Aug – Sep 2026' },
];

export const intro = {
  title: 'OrbiBot',
  lead: 'My own robot, beside my job. V1 is the one I built: I welded its frame, wired it, wrote its firmware and its ROS 2 software, and gave it an AI agent. V2 was designed in CAD and then parked.',
  role: 'everything, from the welding and wiring to the firmware, ROS 2, the dashboard and the agent',
  years: '2025 to now',
};

// What the project proves, for a reader with a minute.
export const shows: Fact[] = [
  { label: 'Robotics software', value: 'ROS 2 Jazzy, LiDAR mapping with slam_toolbox, an EKF, and Nav2 navigation with MPPI for mecanum wheels' },
  { label: 'Embedded', value: 'My own STM32 motor firmware: PID at 100 Hz per wheel, with a 2-second safety stop' },
  { label: 'AI agent', value: '58 robot tools for Gemini, Claude, Kimi or a local model, and for any client through an MCP server' },
  { label: 'Hardware design', value: "A frame welded by hand; V2's platform drawn in FreeCAD and its controller board in KiCad" },
];

export const v1 = {
  hero: {
    src: pi5Front,
    alt: 'OrbiBot V1 from the front: a welded stainless-steel frame on four mecanum wheels, a LiDAR on top, and a Raspberry Pi 5 above the STM32 motor board.',
    caption: 'On its Raspberry Pi 5, September 2025',
  } satisfies Picture,
  video: {
    src: '/media/orbibot/v1/v1-2025-07-20-pi5-gamepad-slam-map.mp4',
    poster: '/media/orbibot/v1/v1-2025-07-20-pi5-gamepad-slam-map.jpg',
    label: 'OrbiBot V1 on its Raspberry Pi 5, with its gamepad and the SLAM map in RViz',
    caption: 'Pi 5, gamepad and a SLAM map · Jul 2025',
  } satisfies Video,
  text: 'A welded stainless-steel frame on four mecanum wheels, so it drives in any direction and turns on the spot. Two computers share the work: an STM32 motor board runs everything with a deadline, and a Raspberry Pi 5 runs everything that needs a map, a model or a network.',
  facts: [
    { label: 'Frame', value: 'Stainless steel, welded by hand' },
    { label: 'Wheels', value: 'Four 100 mm steel mecanum wheels' },
    { label: 'Motors', value: 'Four JGB37-520 geared DC motors, 1:30, with Hall-effect encoders' },
    { label: 'Motor board', value: 'STM32F103 (Yahboom ROSMaster V3.0), running my own firmware' },
    { label: 'Computer', value: 'Raspberry Pi 5, 8 GB, Ubuntu 24.04' },
    { label: 'Sensors', value: 'RPLIDAR A1; later a RealSense D435 at the front; ICM-20948 IMU' },
    { label: 'Power', value: '4S LiFePO4 pack of 32140 cells, 12.8 V' },
    { label: 'Software', value: 'ROS 2 Jazzy, in 12 packages I wrote' },
  ] satisfies Fact[],
  wrote: [
    {
      title: 'Firmware',
      text: "My own firmware for the STM32 motor board, in place of the vendor's closed one: motor PID at 100 Hz, quadrature encoders, the IMU, wheel odometry, a binary serial protocol, settings kept in flash, and a 2-second timeout that stops the motors if the host goes quiet.",
    },
    {
      title: '12 ROS 2 packages',
      text: 'An EKF that fuses wheel odometry with a Madgwick-filtered IMU, mapping with slam_toolbox and AMCL on saved maps, Nav2 with the MPPI controller in its omnidirectional mode, and a frontier explorer re-implemented in Python from m-explore-ros2.',
    },
    {
      title: 'The dashboard',
      text: 'React and TypeScript, reaching ROS 2 through rosbridge over a WebSocket, with the camera over WebRTC: battery, motors, odometry, the IMU, the live map, the camera, and driving. Every command goes through the same ROS 2 topics as everything else.',
    },
    {
      title: 'orbibot_agent',
      text: 'An AI layer with 58 robot tools that runs on Gemini, Claude, Kimi or a local model through Ollama, with three ways in: an HTTP API, a terminal client and an MCP server, and a safety layer on its direct motion tools.',
    },
  ],
  // From the V1 report: measured on the bench, with the wheels off the ground.
  bench: {
    note: 'Measured on the bench, with the wheels off the ground, as the report describes.',
    results: [
      { value: '1.3–9.3 %', label: 'how far chassis velocity was from the command' },
      { value: '1.82–2.12 s', label: 'to stop after the last command, with a 2 s timeout' },
      { value: '1.02 m/s', label: 'what the velocity clamp held a 3 m/s command to' },
      { value: '0.1 %', label: 'between the four motors at the speed limit' },
    ],
  },
  timeline: [
    { src: frameWelding, caption: 'Welding the frame.', when: 'Jun 2025', alt: 'Welding the stainless-steel frame, with the mecanum wheels already on.' },
    { src: frameTop, caption: 'The frame from above, with the LiDAR.', when: 'Jun 2025', alt: 'The welded frame from above, with the RPLIDAR A1 mounted on it.' },
    { src: firstBuild, caption: 'The first electronics, with a blue underglow.', when: 'Jun 2025', alt: 'The first build: the frame with a LiDAR on top and blue lights underneath.' },
    { src: pi5Side, caption: 'The Raspberry Pi 5 build.', when: 'Sep 2025', alt: 'OrbiBot V1 with its Raspberry Pi 5, from the side.' },
    { src: realsenseFront, caption: 'Rebuilt, with a RealSense D435 at the front.', when: 'Nov 2025', alt: 'OrbiBot V1 with an Intel RealSense depth camera at the front.' },
    { src: homeNavigation, caption: 'Navigating on a map of my home, watched in RViz.', when: 'Jan 2026', alt: 'A laptop showing RViz: a map of a home with the robot model on it.' },
  ] satisfies (Picture & { when: string })[],
  // Short silent clips from the build log, oldest first within each group. The dashboard
  // recordings are cropped below the browser bar and cut to their first 45 seconds.
  clips: [
    {
      title: 'Building it',
      upright: true,
      items: [
        clip('v1-2025-06-11-frame-welding', 'Jun 2025', 'Welding the stainless-steel frame, with the mecanum wheels fitted'),
        clip('v1-2025-06-13-first-electronics-walkaround', 'Jun 2025', 'The first electronics on the frame: the LiDAR, the motor board and a blue underglow'),
        clip('v1-2025-06-29-desk-wheel-test', 'Jun 2025', 'The first build on a desk'),
        clip('v1-2025-06-30-wheels-lifted-motor-test', 'Jun 2025', 'A motor test, with the wheels lifted off the desk'),
      ],
    },
    {
      title: 'Mapping and driving',
      upright: true,
      items: [
        clipsIn('/media/orbibot/v1')('v1-2025-07-20-pi5-gamepad-slam-map', 'Jul 2025', 'On its Raspberry Pi 5, with its gamepad and a SLAM map in RViz'),
        clip('v1-2026-01-08-home-navigation-run-1', 'Jan 2026', 'A map of my home in RViz, then the robot driving on the floor'),
        clip('v1-2026-01-08-home-navigation-run-2', 'Jan 2026', 'A second run at home'),
      ],
    },
    {
      title: 'Checking each sensor',
      upright: true,
      items: [
        clip('v1-2026-01-12-imu-tilt-check-rviz', 'Jan 2026', 'Tilted by hand: the model in RViz tilts with the IMU'),
        clip('v1-2026-01-12-wheel-encoder-hand-turn', 'Jan 2026', 'A wheel turned by hand, read by its encoder'),
        clip('v1-2026-01-12-wheel-joints-rviz-check', 'Jan 2026', 'Wheels turned by hand: the wheel frames turn in RViz'),
        clip('v1-2026-01-12-lidar-scan-rviz-check', 'Jan 2026', 'A card moved in front of the LiDAR: the scan changes in RViz'),
      ],
    },
    {
      title: 'The dashboard',
      upright: false,
      items: [
        clip('v1-2026-02-09-control-dashboard-teleop-camera', 'Feb 2026', 'Driving from the browser, with the live camera and the map'),
        clip('v1-2026-02-09-control-dashboard-home-map', 'Feb 2026', 'Mapping my home from the browser'),
      ],
    },
  ],
  lessons: [
    {
      title: 'Put the deadlines on the microcontroller',
      text: "PID, encoders and the stop timeout run on the STM32. By design, a busy Pi or dashboard shouldn't make the wheels stutter (not yet tested under load), and the next robot's computer can change without touching the firmware.",
    },
    {
      title: 'A 2D LiDAR sees one flat slice',
      text: 'A table top above it or a low box below it does not exist to the LiDAR. That is why V1 got a depth camera.',
    },
    {
      title: 'Maps in a browser are a bandwidth problem',
      text: 'The dashboard was designed around what the robot has to serialise and send, not around how the page looks.',
    },
  ],
};

export const v2 = {
  turntable: {
    src: '/media/orbibot/v2/v2-render-turntable.mp4',
    poster: '/media/orbibot/v2/v2-render-turntable-poster.jpg',
    label: 'The V2 CAD layout turning once',
    caption: 'The CAD layout turning once. The colours are for display only.',
  } satisfies Video,
  why: "V1's hand-welded steel frame had alignment problems: the wheels never sat quite straight, and the frame was heavy. V2 replaced it with a body of light 4 mm acrylic plates, designed in CAD to be laser cut, and its own controller board.",
  facts: [
    { label: 'Size', value: '280 × 260 mm' },
    { label: 'Mass', value: 'About 5.6 kg, on paper' },
    { label: 'Wheels', value: "V1's four 100 mm mecanum wheels" },
    { label: 'Computer', value: 'A Beelink SER5 Pro mini PC on a rear plate, through a 19 V boost' },
    { label: 'Sensors', value: 'RPLIDAR A1 on top, RealSense D435 low at the front, ToF sensors front and rear' },
    { label: 'Power', value: '4S LiFePO4 pack with its BMS, on the bottom deck' },
    { label: 'Controller', value: 'My own board: an STM32F446RET6 with four DRV8874 motor drivers' },
  ] satisfies Fact[],
  views: [
    {
      src: renderThreeQuarter,
      alt: 'OrbiBot V2 in CAD, three-quarter view from the front: a two-deck platform on four mecanum wheels with a LiDAR on top.',
      caption: 'Three-quarter',
    },
    { src: renderFront, alt: 'OrbiBot V2 from the front.', caption: 'Front' },
    { src: renderSide, alt: 'OrbiBot V2 from the side.', caption: 'Side' },
    { src: renderRear, alt: 'OrbiBot V2 from the rear, three-quarter view.', caption: 'Rear three-quarter' },
  ] satisfies Picture[],
  board: [
    { src: boardAngle, alt: 'The V2 controller board in a KiCad 3D render, at an angle.', caption: 'The controller board, angled' },
    { src: boardTop, alt: 'The V2 controller board in a KiCad 3D render, from the top.', caption: 'From the top' },
  ] satisfies Picture[],
  sheets: [
    { src: sheetPower, alt: 'Schematic sheet: power.', caption: 'Power' },
    { src: sheetMcu, alt: 'Schematic sheet: the microcontroller.', caption: 'Microcontroller' },
    { src: sheetMotors, alt: 'Schematic sheet: the four motor drivers.', caption: 'Motors' },
    { src: sheetSensors, alt: 'Schematic sheet: sensors and IO.', caption: 'Sensors and IO' },
  ] satisfies Picture[],
  schematicPdf: '/media/orbibot/v2/v2-schematic.pdf',
  progress: [
    { label: 'Schematic', done: 5, total: 5, unit: 'sheets', note: 'ERC with no errors' },
    { label: 'Parts placed', done: 176, total: 176, unit: 'parts', note: 'Ground planes poured, DRC with no errors' },
    { label: 'Connections routed', done: 0, total: 304, unit: 'connections', note: 'Routing had not started' },
  ],
  parked: 'On 10 September 2026 the goal changed to a different robot. I archived V2 with every decision and its reasoning: parked, not cancelled, instead of left half finished.',
};

export const report = {
  doi: '10.5281/zenodo.23696694',
  href: 'https://doi.org/10.5281/zenodo.23696694',
  researchGate: 'https://www.researchgate.net/publication/416980928',
  code: 'https://github.com/jewel-nath/orbibot-v1',
};
