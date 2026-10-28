// Every word and picture on /conveysort-arm, written from the hub's projects/conveysort-arm.md, its
// media index and the ConveySort-Arm report (v1.0). The sorter is "built and run"; its ROS 2
// workspace is "written", never run, and ROS 2, MoveIt or an ESP32 never run the sort.
import armOnBase from '../assets/conveysort-arm/conveysort-arm-2024-10-05-arm-on-base.jpg';
import beltAndSensor from '../assets/conveysort-arm/conveysort-arm-2024-11-11-belt-and-sensor.jpg';
import cameraOnStand from '../assets/conveysort-arm/conveysort-arm-2024-11-16-camera-on-stand.jpg';
import conveyorFromAbove from '../assets/conveysort-arm/conveysort-arm-2024-11-16-conveyor-from-above.jpg';
import gripperAtSensor from '../assets/conveysort-arm/conveysort-arm-2024-11-16-gripper-at-sensor.jpg';
import armLiftsBlock from '../assets/conveysort-arm/conveysort-arm-2024-11-18-arm-lifts-block.jpg';
import beltStates from '../assets/conveysort-arm/conveysort-arm-belt-states.png';
import cycleTime from '../assets/conveysort-arm/conveysort-arm-cycle-time.png';
import decisionLogic from '../assets/conveysort-arm/conveysort-arm-decision-logic.png';
import jointAngles from '../assets/conveysort-arm/conveysort-arm-joint-angles.png';
import pickPlace from '../assets/conveysort-arm/conveysort-arm-pick-place.png';
import rosPackages from '../assets/conveysort-arm/conveysort-arm-ros2-packages.png';
import sizeBands from '../assets/conveysort-arm/conveysort-arm-size-bands.png';
import systemOverview from '../assets/conveysort-arm/conveysort-arm-system-overview.png';
import timeline from '../assets/conveysort-arm/conveysort-arm-timeline.png';
import visionPipeline from '../assets/conveysort-arm/conveysort-arm-vision-pipeline.png';
import wiring from '../assets/conveysort-arm/conveysort-arm-wiring.png';
import type { DatedPicture, Figure, Intro, Lesson, Results, Team, Topic } from './project';
import { clipsIn, type Fact, type Picture, type Video } from './site';

const media = '/media/conveysort-arm';
const clip = clipsIn(media);

export const intro: Intro = {
  title: 'ConveySort-Arm',
  status: 'Built and run',
  lead: 'A small sorting cell built at RoboAI from low-cost parts. A conveyor belt brings each block to a six-servo arm, a webcam and OpenCV measure it, and the arm sets it down in the place for its size.',
  role: 'with Shafiul Alam Chowdhury, its design, build and tests; the sorter’s vision program and its Arduino firmware are mine',
  years: 'Oct – Nov 2024',
};

// What the project proves, for a reader with a minute.
export const shows: Fact[] = [
  { label: 'Vision', value: 'OpenCV sizes each block by the area of its outline, and waits for eleven frames in a row to agree before it decides' },
  { label: 'Control', value: 'An Arduino runs a stepper belt that stops each block at an ultrasonic sensor, and a 15-step pick-and-place on six servos' },
  { label: 'Simple interfaces', value: 'The PC and the Arduino share one character per sort over serial' },
  { label: 'Timing', value: '35 to 38 s per sort, computed from the firmware' },
];

export const lead = {
  text: 'A belt turned by a stepper motor ends at an ultrasonic sensor. A webcam looks down at the belt, and the arm stands beside its end, where it can reach the stopped block and three set-down places around its base.',
  photo: {
    src: armLiftsBlock,
    alt: 'The arm lifting a block off the belt, with the webcam on its clamp above it.',
    caption: 'Lifting a block off the belt · 18 Nov 2024',
  } satisfies Picture,
  video: {
    src: `${media}/conveysort-arm-2024-11-18-arm-camera-and-conveyor.mp4`,
    poster: `${media}/conveysort-arm-2024-11-18-arm-camera-and-conveyor.jpg`,
    label: 'The whole cell: the webcam watches the belt, and the arm takes a block off it and sets it down',
    caption: 'The whole cell at work · Nov 2024',
  } satisfies Video,
};

// Short silent clips. The tuning window's recording is padded to 9:16, not cropped.
export const clips = [
  {
    title: 'Before the camera, and the camera’s view',
    upright: true,
    items: [
      clip('conveysort-arm-2024-11-16-belt-sensor-and-arm', 'Nov 2024', 'One full cycle: the belt brings a block to the sensor, and the arm picks it up and sets it down'),
      clip('conveysort-arm-2024-11-16-camera-detection', 'Nov 2024', 'The tuning window: blocks placed on the belt by hand, each outlined, measured and called large, medium or small'),
    ],
  },
];

export const build = {
  timeline: [
    { src: armOnBase, when: '5 Oct 2024', caption: 'The first version on one board: a cloth belt, the stepper, the sensor, an Arduino and the arm.', alt: 'The first belt, the sensor, an Arduino and the arm on one board.' },
    { src: beltAndSensor, when: '11 Nov 2024', caption: 'A black belt that ends at the sensor; a block rides toward it.', alt: 'A block riding the black belt toward the ultrasonic sensor.' },
    { src: gripperAtSensor, when: '16 Nov 2024', caption: 'The gripper closes on a block at the sensor, the stepper driver in front.', alt: 'The gripper closing on a block under the sensor.' },
    { src: conveyorFromAbove, when: '16 Nov 2024', caption: 'The conveyor from above, with the three test sizes.', alt: 'Three white blocks of three sizes on the conveyor, seen from above.' },
    { src: cameraOnStand, when: '16 Nov 2024', caption: 'The webcam on its first stand, looking down at the belt.', alt: 'The arm, a block on the belt and a webcam on a stand above it.' },
  ] satisfies DatedPicture[],
  timelineFigure: {
    src: timeline,
    caption: 'ConveySort-Arm in 2024, from the repository’s history and the dated photos and videos (from the report)',
    alt: 'A timeline of ConveySort-Arm in 2024.',
  } satisfies Figure,
};

export const how = {
  text: 'The work is split between a PC and an Arduino Uno. The PC reads the webcam and sizes the block; the Arduino runs everything that moves. The two agree on four characters: 0 sends the arm home, and 1, 2 and 3 sort a small, a medium or a large block.',
  overview: {
    src: systemOverview,
    caption: 'System overview, from the ConveySort-Arm report',
    alt: 'The system overview diagram: the PC with the webcam, the serial link, and the Arduino with the belt, the sensor and the arm.',
  } satisfies Figure,
  facts: [
    { label: 'Arm', value: 'Six servos: base, shoulder, elbow, wrist pitch, wrist roll and gripper, on a PCA9685 board' },
    { label: 'Belt', value: 'A stepper motor through a TB6600 driver' },
    { label: 'Sensor', value: 'An HC-SR04 ultrasonic sensor at the end of the belt' },
    { label: 'Controller', value: 'An Arduino Uno: the belt, the sensor and the arm' },
    { label: 'Vision', value: 'A webcam, and Python with OpenCV on a PC' },
    { label: 'Link', value: 'USB serial at 9600 baud, one character per sort' },
  ] satisfies Fact[],
  topics: [
    {
      id: 'vision',
      title: 'Sizing a block',
      text: [
        'The PC turns each camera frame grey, blurs it, and keeps only the white block on the black belt. OpenCV finds the block’s outline, and its area decides the size: under 17,000 square pixels it is small, under 28,000 medium, and anything larger is large.',
        'A single frame can be wrong while a hand passes or the block still moves. So the program sends a size only when eleven frames in a row agree, and at most once every five seconds.',
      ],
      figures: [
        { src: visionPipeline, caption: 'How the PC sizes a block' },
        { src: sizeBands, caption: 'The size classes by outline area' },
        { src: decisionLogic, caption: 'When the PC sends a size' },
      ],
    },
    {
      id: 'belt',
      title: 'The belt',
      text: [
        'The Arduino reads the ultrasonic sensor every 100 ms. With a block 7 to 45 cm away it runs the belt, and when the block is within 7 cm, at the belt’s end, it stops. It acts on a size only when the belt has stopped with a block in place, so a size sent early does no harm.',
      ],
      figures: [
        { src: beltStates, caption: 'The belt’s states, from the distance the sensor reads' },
        { src: wiring, caption: 'The Arduino’s connections' },
      ],
    },
    {
      id: 'pick',
      title: 'The pick and place',
      text: [
        'The arm sorts a block in 15 steps, each moving one joint: it reaches over the belt, grips the block, lifts it, turns its base to the block’s place, lowers it and lets go. Then it goes home, joint by joint: 21 moves in all. Two steps depend on the size: the grip closes wider for a larger block, and the base turns to 90°, 50° or 10°.',
        'Each joint moves in small steps, about 45° a second, with a pause after each move, chosen to keep the hobby servos steady.',
      ],
      figures: [
        { src: pickPlace, caption: 'The 15-step pick-and-place' },
        { src: jointAngles, caption: 'Joint angles over one sort, computed from the firmware' },
        { src: cycleTime, caption: 'The time of one sort by block size, computed from the firmware' },
      ],
    },
    {
      id: 'ros2',
      title: 'A ROS 2 workspace, written',
      text: [
        'Beside the sorter, the repository holds a ROS 2 Humble workspace for the arm: its model, a hardware interface, MoveIt and a task server. It is adapted from Antonio Brandi’s course on manipulators, changed for six servos instead of four, with the arm’s model from EnviroBot. As written, its task presets still fit the course’s arm.',
        'Running the arm from it was the next step; the project ended first, with the sorter working on its own. The workspace is written, not run, and the sorter does not use it.',
      ],
      figures: [{ src: rosPackages, caption: 'The ROS 2 workspace: ten packages, written but not run' }],
    },
  ] satisfies Topic[],
};

// Every move and pause is fixed in the firmware, so the time of a sort can be worked out.
export const results: Results = {
  kind: 'Computed',
  note: 'The time of one sort, from the command to the arm back home, worked out from the firmware as committed in 2026. Not measured over many blocks.',
  stats: [
    { value: '35.0 s', label: 'a small block' },
    { value: '36.5 s', label: 'a medium block' },
    { value: '37.9 s', label: 'a large block, whose place is furthest round' },
    { value: '21 s', label: 'of each sort is the one-second pause after each of its 21 moves' },
  ],
};

export const team: Team = {
  text: 'ConveySort-Arm is RoboAI’s work, built by Shafiul Alam Chowdhury and me. We designed, built and tested it together; the sorter’s vision program and its Arduino firmware are mine, and I put its code into its public repository and wrote its technical report.',
  members: ['Jewel Nath', 'Shafiul Alam Chowdhury'],
  credits: [
    {
      what: 'ROS 2 workspace and four sketches',
      text: 'adapted from Antonio Brandi’s course “Robotics and ROS 2 - Learn by Doing! Manipulators” (Apache 2.0)',
      href: 'https://github.com/AntoBrandi/Robotics-and-ROS-2-Learn-by-Doing-Manipulators',
    },
    { what: 'Arm model', text: 'from my team’s EnviroBot; its meshes are older, from a source not known', href: '/envirobot' },
    { what: 'ESP32 test sketch', text: 'from Ujwal Nandanwar’s RobotArm (MIT)', href: 'https://github.com/un0038998/RobotArm' },
  ],
  creditsNote: 'Each file taken from another project keeps its own licence notice; the rest of the code is under the MIT licence.',
};

export const lessons: Lesson[] = [
  {
    title: 'A physical stop makes picking easy',
    text: 'Stopping each block at the same point, with an ultrasonic sensor, let one fixed sequence pick every block. No grasp planning was needed.',
  },
  {
    title: 'Let each board do what it does well',
    text: 'The PC handled the camera and OpenCV; the Arduino handled timing and motors. One character per sort was all they needed to share.',
  },
  {
    title: 'Slow is reliable, but pauses add up',
    text: 'Small steps and a pause after each were chosen to keep the hobby servos steady, at the cost of a sort that takes over half a minute.',
  },
];

export const report = {
  doi: '10.5281/zenodo.23741975',
  code: 'https://github.com/jewel-nath/conveysort-arm',
};
