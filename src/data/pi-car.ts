// Every word and picture on /pi-car, written from the hub's projects/pi-car.md, its media index
// and the pi-car repository. Pi Car is "built". It has no report, so the page ends with the code.
// Don't claim face following: the code follows by distance. The IR board has five sensors, but
// the code reads three.
import firstBuild from '../assets/pi-car/pi-car-2022-04-18-first-build-camera-servos.jpg';
import firstChassis from '../assets/pi-car/pi-car-2022-04-18-first-chassis.jpg';
import sideCloseUp from '../assets/pi-car/pi-car-2022-04-18-side-close-up.jpg';
import onDesk from '../assets/pi-car/pi-car-2022-05-04-on-desk.jpg';
import acrylicSide from '../assets/pi-car/pi-car-2022-05-06-acrylic-side.jpg';
import underglow from '../assets/pi-car/pi-car-2022-05-06-underglow.jpg';
import inTheLab from '../assets/pi-car/pi-car-2022-06-29-jewel-at-desk-with-car.jpg';
import type { DatedPicture, Intro, Team } from './project';
import { clipsIn, type Fact, type Picture, type Video } from './site';

const media = '/media/pi-car';
const clip = clipsIn(media);

export const intro: Intro = {
  title: 'Pi Car',
  status: 'Built',
  lead: 'A Raspberry Pi 3 car with several driving modes: it follows a line, avoids obstacles, stops at a table’s edge, has a simple follow mode, and drives from the keyboard or from a panel with its camera’s live video.',
  role: 'built and coded by me alone, as my university project at Comilla University',
  years: '2022 – 2023',
};

// What the project proves, for a reader with a minute.
export const shows: Fact[] = [
  { label: 'Driving modes', value: 'Line following with IR sensors, obstacle avoidance with an ultrasonic sensor on a servo, an edge stop and a follow mode' },
  { label: 'Live video control', value: 'A window with the camera’s live video and four arrow buttons, used through VNC from a phone or a laptop' },
  { label: 'Hardware from Python', value: 'Motors, three servos, the ultrasonic and IR sensors and a buzzer, all on the Raspberry Pi’s GPIO pins' },
  { label: 'A solo build', value: 'From a wooden chassis on 18 April 2022 to clear acrylic by 4 May, built and coded by me' },
];

export const lead = {
  text: 'Four geared motors carry a clear acrylic body, with a Raspberry Pi 3 on top. At the front, the camera looks around on two servos and an ultrasonic sensor turns on a third; under the nose, an IR board watches the floor.',
  photo: {
    src: acrylicSide,
    alt: 'Pi Car from the side on a desk: a clear acrylic body on four wheels, the Raspberry Pi on top and the camera at the front.',
    caption: 'Rebuilt on clear acrylic · May 2022',
  } satisfies Picture,
  video: {
    src: `${media}/pi-car-2022-05-06-obstacle-avoidance.mp4`,
    poster: `${media}/pi-car-2022-05-06-obstacle-avoidance.jpg`,
    label: 'Pi Car driving on a tiled floor and turning away from obstacles',
    caption: 'Avoiding obstacles · May 2022',
  } satisfies Video,
};

// Short silent clips, from the same days as the photos.
export const clips = [
  {
    title: 'On the desk and the track',
    upright: false,
    ratio: '16 / 9',
    items: [
      clip('pi-car-2022-05-06-line-following-1', 'May 2022', 'Following a tape line on the floor with its IR sensors'),
      clip('pi-car-2022-05-06-edge-stop', 'May 2022', 'Stopping at the edge of the desk when its IR sensors lose the floor, and driving on when it is moved back'),
      clip('pi-car-2022-05-06-camera-panel-driving', 'May 2022', 'Driven from the camera panel on a laptop, with the car’s live video on the screen'),
      clip('pi-car-2022-05-04-desk-walkaround', 'May 2022', 'A walk around the car on the desk, just rebuilt on clear acrylic'),
    ],
  },
  {
    title: 'Upright',
    upright: true,
    items: [
      clip('pi-car-2022-05-06-object-following', 'May 2022', 'The follow mode: it drives forward while something is within 15 cm'),
      clip('pi-car-2022-05-06-line-following-2', 'May 2022', 'The same line, filmed from above'),
    ],
  },
];

export const build = {
  timeline: [
    { src: firstBuild, when: '18 Apr 2022', caption: 'The first build taking shape: a Raspberry Pi 3 and a breadboard on a wooden chassis.', alt: 'The first build from the front: a Raspberry Pi 3, a breadboard, the camera and the ultrasonic sensor on servos, on a wooden chassis.' },
    { src: sideCloseUp, when: '18 Apr 2022', caption: 'Up close: the Pi, the camera on two servos and the wiring.', alt: 'The side of the first build up close: the Raspberry Pi, the camera and the wiring.' },
    { src: firstChassis, when: '18 Apr 2022', caption: 'The same night, from the side: four geared motors, the battery pack and the Pi on the top deck.', alt: 'The first wooden chassis from the side, with four geared motors and a battery pack.' },
    { src: onDesk, when: '4 May 2022', caption: 'Rebuilt on clear acrylic, its camera up.', alt: 'Pi Car on a desk with its camera raised.' },
    { src: underglow, when: '6 May 2022', caption: 'In the dark, its five-sensor line board lit red at the front.', alt: 'Pi Car in the dark, the line sensor board at its front lit red.' },
    { src: inTheLab, when: '29 Jun 2022', caption: 'Me with the car in the ICT lab at Comilla University, its program on the monitor.', alt: 'Jewel at a lab desk with Pi Car, the car’s program on the monitor behind.' },
  ] satisfies DatedPicture[],
};

export const how = {
  text: 'Everything runs on the Raspberry Pi, in Python. Each mode is its own program: two read the IR sensors, two the ultrasonic sensor, one drives from the keyboard, and the panel shows the camera with arrow buttons.',
  facts: [
    { label: 'Brain', value: 'A Raspberry Pi 3; Python with RPi.GPIO, gpiozero, OpenCV, Tkinter and pygame' },
    { label: 'Drive', value: 'Four geared DC motors on a motor driver' },
    { label: 'Servos', value: 'Three: two point the camera, one turns the ultrasonic sensor' },
    { label: 'Senses', value: 'The Pi camera, an HC-SR04 ultrasonic sensor, and a five-sensor IR board, of which the code reads three' },
    { label: 'Also', value: 'A buzzer' },
    { label: 'Body', value: 'Clear acrylic since May 2022; a wooden chassis before it' },
  ] satisfies Fact[],
  modes: [
    { label: 'Line', value: 'Follows a tape line with three IR sensors' },
    { label: 'Obstacles', value: 'Avoids obstacles with the ultrasonic sensor, which a servo turns to look around' },
    { label: 'Edge stop', value: 'Stops when its IR sensors lose the floor at a table’s edge' },
    { label: 'Follow', value: 'Drives forward while something is within 15 cm of the ultrasonic sensor' },
    { label: 'Keyboard', value: 'W and S set the speed, A and D steer, Q stops' },
    { label: 'Panel', value: 'A window with the camera’s live video and four arrow buttons; used from a phone or a laptop through VNC' },
  ] satisfies Fact[],
};

export const team: Team = {
  text: 'Pi Car was my university project at Comilla University. I built and coded it alone, mostly in the ICT department’s lab. Two parts of the code follow published examples.',
  members: [],
  credits: [
    { what: 'Ultrasonic sensor', text: 'Tutorials for Raspberry Pi: Using a Raspberry Pi distance sensor', href: 'https://tutorials-raspberrypi.com/raspberry-pi-ultrasonic-sensor-hc-sr04/' },
    { what: 'Keyboard driving', text: 'Ingmar Stapel’s RobotControl.py and L298NHBridge.py', href: 'https://github.com/custom-build-robots/Motor-Driver-L298N-H-Bridge' },
  ],
  creditsNote: 'Both are credited in the car’s repository too.',
};

export const code = {
  href: 'https://github.com/jewel-nath/pi-car',
  label: 'Pi Car’s code on GitHub',
  about: 'Every mode is in its repository, with its pin map and how to run each mode on a Raspberry Pi.',
};
