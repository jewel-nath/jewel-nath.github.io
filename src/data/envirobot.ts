// Every word and picture on /envirobot, written from the hub's projects/envirobot.md, its media
// index and the EnviroBot report (v1.0). EnviroBot is "built": it detects, labels and picks up
// waste. It does not sort into separate bins or collect on its own.
import appControl from '../assets/envirobot/envirobot-app-control.png';
import armChain from '../assets/envirobot/envirobot-arm-chain.png';
import armModelRviz from '../assets/envirobot/envirobot-2023-09-14-arm-model-rviz.jpg';
import finishedSide from '../assets/envirobot/envirobot-2024-01-11-finished-robot-side.jpg';
import armOnRover from '../assets/envirobot/envirobot-2024-01-14-report-arm-on-rover-build.jpg';
import controlApp from '../assets/envirobot/envirobot-2024-01-14-report-control-app.png';
import finishedFront from '../assets/envirobot/envirobot-2024-01-14-report-finished-robot-1.jpg';
import roverBase from '../assets/envirobot/envirobot-2024-01-14-report-rover-base.jpg';
import autonomyPipeline from '../assets/envirobot/envirobot-autonomy-pipeline.png';
import confusionMatrix from '../assets/envirobot/envirobot-confusion-matrix.png';
import datasetPipeline from '../assets/envirobot/envirobot-dataset-pipeline.png';
import systemOverview from '../assets/envirobot/envirobot-system-overview.png';
import timeline from '../assets/envirobot/envirobot-timeline.png';
import trainingAccuracy from '../assets/envirobot/envirobot-training-accuracy.png';
import wiring from '../assets/envirobot/envirobot-wiring.png';
import type { DatedPicture, Figure, Intro, Lesson, Results, Team, Topic } from './project';
import { clipsIn, type Fact, type Picture, type Video } from './site';

const media = '/media/envirobot';
const clip = clipsIn(media);

export const intro: Intro = {
  title: 'EnviroBot',
  status: 'Built',
  lead: 'A rover with a six-servo arm that finds waste with a camera and picks it up off the floor. Built at Comilla University with my team: a YOLOv8 model labels plastic, paper and trash, and an Arduino drives the arm and the wheels.',
  role: 'with the team, its design, build and tests; I also put its ROS 2 model online and wrote its report',
  years: '2023 – 2024',
};

// What the project proves, for a reader with a minute.
export const shows: Fact[] = [
  { label: 'Waste detection', value: 'A YOLOv8 model trained on a 1,700-image dataset in three classes; in the team’s evaluation it labelled 91–94% of each class correctly' },
  { label: 'Mobile manipulation', value: 'A six-servo arm on a steel rover that reaches down and picks objects up off the floor' },
  { label: 'Two controllers', value: 'In its design, vision on a Raspberry Pi and all motion on an Arduino, joined by a serial link, with a phone app over Bluetooth' },
  { label: 'ROS 2', value: 'The arm modelled in URDF and moved joint by joint in RViz' },
];

export const lead = {
  text: 'A four-wheel rover on a stainless steel base carries a six-servo aluminium arm with a gripper, a mesh bin and a camera. The arm sits at the front, so it reaches the floor in front of the robot without the base in its way.',
  photo: {
    src: finishedSide,
    alt: 'EnviroBot finished: a rover on a steel base with a servo arm raised over a mesh bin.',
    caption: 'Finished · 11 Jan 2024',
  } satisfies Picture,
  video: {
    src: `${media}/envirobot-2024-01-11-trash-collecting.mp4`,
    poster: `${media}/envirobot-2024-01-11-trash-collecting.jpg`,
    label: 'EnviroBot reaching down and picking a small cube up off the floor',
    caption: 'Picking a cube up off the floor · Jan 2024',
  } satisfies Video,
};

// Short silent clips. The detector's screen recording is padded to 16:9, not cropped.
export const clips = [
  {
    title: 'The detector and the robot',
    upright: false,
    ratio: '16 / 9',
    items: [
      clip('envirobot-2024-01-11-yolo-detection-test', 'Jan 2024', 'The detector running live on a laptop, boxing and naming objects as they come into view. This version also has a metal class.'),
      clip('envirobot-2024-01-11-arm-and-motor-test', 'Jan 2024', 'An arm test on the floor: the arm reaches down to a small box. The rover is on a power cable.'),
      clip('envirobot-2024-01-11-robot-close-up', 'Jan 2024', 'The finished robot up close: the arm, the bin, the battery and the boards'),
    ],
  },
  {
    title: 'Later',
    upright: true,
    items: [clip('envirobot-2024-05-11-driving-test', 'May 2024', 'A driving test of the rover with its arm, on mecanum wheels')],
  },
];

export const build = {
  timeline: [
    { src: roverBase, when: 'By Jan 2024', caption: 'The steel base with a gear motor at each corner, from below and above.', alt: 'The steel rover base with its four gear motors and wheels, two photos.' },
    { src: armOnRover, when: 'By Jan 2024', caption: 'The arm fitted at the front of the base, before the wiring.', alt: 'The servo arm fitted on the steel rover base, with tools around it.' },
    { src: finishedFront, when: 'Jan 2024', caption: 'Finished, from the front: the camera, the bin and the boards.', alt: 'EnviroBot from the front: the camera under the arm, the mesh bin and the Raspberry Pi.' },
  ] satisfies DatedPicture[],
  timelineFigure: {
    src: timeline,
    caption: 'EnviroBot from the earliest dated image of the arm’s model to the later driving test (from the report)',
    alt: 'A timeline of EnviroBot from September 2023 to May 2024.',
  } satisfies Figure,
};

export const how = {
  text: 'The robot splits its work between two boards. In its design, a Raspberry Pi reads the camera and runs the detector; an Arduino Uno moves the arm and the wheels, and takes commands from the Pi over a serial link and from a phone over Bluetooth.',
  overview: {
    src: systemOverview,
    caption: 'System overview, from the EnviroBot report',
    alt: 'The system overview diagram: the Raspberry Pi and camera, the Arduino with the servo and motor drivers, and the phone app.',
  } satisfies Figure,
  facts: [
    { label: 'Base', value: 'A 14-inch stainless steel plate, a 12 V gear motor at each corner' },
    { label: 'Arm', value: 'An aluminium six-servo kit: waist, shoulder, elbow, wrist pitch and roll, gripper' },
    { label: 'Vision', value: 'A USB webcam under the arm, and a Raspberry Pi 3 B in the design' },
    { label: 'Motion', value: 'An Arduino Uno, a PCA9685 servo driver and two BTS7960 motor drivers' },
    { label: 'Control', value: 'A phone app made in MIT App Inventor, over Bluetooth' },
    { label: 'Power', value: 'A 3-cell LiPo battery, 11.1 V, 2200 mAh' },
    { label: 'Software', value: 'YOLOv8 trained in Google Colab; the arm in URDF for ROS 2 Humble' },
  ] satisfies Fact[],
  topics: [
    {
      id: 'detection',
      title: 'Finding waste',
      text: [
        'The team’s dataset holds 1,700 images in three classes, plastic, paper and trash, many of them from an earlier project in the department. Each item is labelled with a box and a class; some images had their brightness changed or were shifted or rotated to enlarge the set, and all were resized to 512 by 384 pixels.',
        'The detector is YOLOv8 in its large size, trained for 50 epochs in Google Colab. It finds the objects in an image and names them in one pass of the network.',
      ],
      figures: [
        { src: confusionMatrix, caption: 'The detector’s confusion matrix, from the team’s evaluation' },
        { src: datasetPipeline, caption: 'From images to a trained detector' },
        { src: trainingAccuracy, caption: 'Training over 50 epochs' },
      ],
    },
    {
      id: 'control',
      title: 'Driving it from a phone',
      text: [
        'Before any autonomy, the team made the robot fully controllable by hand. The app has a pair of buttons for each joint, a slider for the arm’s speed, and buttons to save a sequence of positions, run it back and reset; other buttons drive the rover.',
        'Each motor and each servo was brought up on its own from the Arduino’s serial monitor. Every servo’s starting, lowest and highest angles were found and written down, so the arm’s commands stay within each joint’s range.',
      ],
      figures: [
        { src: controlApp, caption: 'The app’s arm screen', alt: 'The phone app’s arm screen: buttons for each joint, a speed slider, and Save, Run and Reset.' },
        { src: appControl, caption: 'Each command, from the phone to a joint or a wheel' },
      ],
      sideBySide: true,
    },
    {
      id: 'wiring',
      title: 'Two boards',
      text: [
        'The Pi and the Arduino talk over a serial link. The Arduino reaches the servo driver over I²C and drives each pair of wheels through its own BTS7960. Keeping all motion on the Arduino meant the arm and the wheels could be driven from the phone without the Pi.',
      ],
      figures: [{ src: wiring, caption: 'The wiring, pin by pin, from the team’s circuit diagram' }],
    },
    {
      id: 'arm',
      title: 'The arm in ROS 2',
      text: [
        'The arm is modelled in URDF as a ROS 2 package: six controlled joints from the waist to the gripper, each with limits on its travel. The team first moved the model joint by joint in RViz, in September 2023.',
        'The full autonomous pick-up was designed on top of it: the detector picks a target, MoveIt plans the arm’s path, and the Arduino moves the joints. The detector and the pick-up were each shown on video on their own; MoveIt stayed in the design, and joining them into one program is the next step.',
      ],
      figures: [
        { src: armModelRviz, caption: 'The arm’s model in RViz, September 2023', alt: 'The arm’s URDF model in RViz, with a slider for each joint.' },
        { src: armChain, caption: 'The arm’s joints, their axes and their ranges' },
        { src: autonomyPipeline, caption: 'The autonomous pick-up, as designed' },
      ],
    },
  ] satisfies Topic[],
};

// From the team's report of 14 January 2024. The pick-ups were filmed, not measured.
export const results: Results = {
  kind: 'Team’s evaluation',
  note: 'In the team’s evaluation of the detector: the share of each class it labelled correctly.',
  stats: [
    { value: '91%', label: 'of paper' },
    { value: '94%', label: 'of plastic' },
    { value: '92%', label: 'of trash' },
    { value: '1,700', label: 'images in its dataset, in three classes' },
  ],
};

export const team: Team = {
  text: 'EnviroBot was built at Comilla University by Tasmiara Jahan Toma, Tanjina Akter and me, supervised by Amena Begum, Assistant Professor of ICT. We designed, built and tested it together; I put its ROS 2 model into its public repository and wrote its technical report.',
  members: ['Jewel Nath', 'Tasmiara Jahan Toma', 'Tanjina Akter'],
  note: 'The robot was presented at Comilla University in January 2024.',
  credits: [
    { what: 'Detector', text: 'Ultralytics YOLOv8 (AGPL-3.0)', href: 'https://github.com/ultralytics/ultralytics' },
    { what: 'Control app', text: 'built in MIT App Inventor', href: 'https://appinventor.mit.edu/' },
  ],
  creditsNote: 'The robot’s ROS 2 model is in its public repository.',
};

export const lessons: Lesson[] = [
  {
    title: 'Build the base for the arm',
    text: 'The arm, not the rover, set the design: we chose a steel base and four geared motors to carry it, at the cost of a heavier robot.',
  },
  {
    title: 'Manual control first',
    text: 'The phone app let us test and calibrate every joint and the drive before any autonomy.',
  },
  {
    title: 'Reuse data, and name the metric',
    text: 'An earlier project’s images, enlarged with augmentation, gave a usable detector. Recording which metric each number is, and keeping background images, would have made the evaluation stronger.',
  },
];

export const report = {
  doi: '10.5281/zenodo.23739491',
  code: 'https://github.com/jewel-nath/envirobot',
};
