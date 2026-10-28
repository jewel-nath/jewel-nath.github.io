// Every word and picture on /robot-niko, written from the hub's projects/robot-niko.md, its media
// index and the Niko report (v1.1). Niko is "built": it claims only what the code and the videos
// show, and repeats none of the press's claims.
import fittingArm from '../assets/home/robot-niko-2022-11-24-jewel-fitting-arm.jpg';
import fullRobot from '../assets/home/robot-niko-2022-11-29-full-robot.jpg';
import systemOverview from '../assets/reports/robot-niko-system-overview.png';
import modelFront from '../assets/robot-niko/robot-niko-2022-08-model-front.jpg';
import printedHand from '../assets/robot-niko/robot-niko-2022-08-16-printed-hand.jpg';
import headAndFrame from '../assets/robot-niko/robot-niko-2022-11-02-head-and-frame.jpg';
import headAndChest from '../assets/robot-niko/robot-niko-2022-11-08-head-and-chest.jpg';
import waistGear from '../assets/robot-niko/robot-niko-2022-11-23-waist-gear.jpg';
import onWheeledBase from '../assets/robot-niko/robot-niko-2022-11-29-on-wheeled-base.jpg';
import electronics from '../assets/robot-niko/robot-niko-2022-12-04-electronics-close.jpg';
import launchDay from '../assets/robot-niko/robot-niko-2022-12-06-jewel-on-launch-day.jpg';
import btvInterview from '../assets/robot-niko/robot-niko-2022-12-14-btv-interview.jpg';
import faceRecognition from '../assets/robot-niko/robot-niko-face-recognition.png';
import followFace from '../assets/robot-niko/robot-niko-follow-face.png';
import handGestures from '../assets/robot-niko/robot-niko-hand-gestures.png';
import handshake from '../assets/robot-niko/robot-niko-handshake.png';
import servoMap from '../assets/robot-niko/robot-niko-servo-map.png';
import softwareMap from '../assets/robot-niko/robot-niko-software-map.png';
import timeline from '../assets/robot-niko/robot-niko-timeline.png';
import voicePipeline from '../assets/robot-niko/robot-niko-voice-pipeline.png';
import type { DatedPicture, Figure, Intro, Lesson, Team, Topic } from './project';
import { clipsIn, type Fact, type Picture, type Video } from './site';

const media = '/media/robot-niko';
const clip = clipsIn(media);

export const intro: Intro = {
  title: 'Robot Niko',
  status: 'Built',
  lead: 'A life-size, 3D-printed humanoid assistant, built in 2022 with my team at Quanta Robotics. It wakes to "Hey Niko", answers questions with a jaw that moves as it speaks, turns its head to follow a face, and greets the people it knows with a handshake.',
  role: 'every part of it: the programming, the 3D printing, the assembly, the servo tuning and the arm motions',
  years: '2022',
};

// What the project proves, for a reader with a minute.
export const shows: Fact[] = [
  { label: 'Motion', value: '27 servos on two PCA9685 boards, driven from one Raspberry Pi as one set of channels, with a library of gestures' },
  { label: 'Voice', value: 'An on-device wake word, an online assistant, and its own question bank, with a jaw that moves as it speaks' },
  { label: 'Vision', value: 'OpenCV face detection that steers the head, and face recognition that greets people by name' },
  { label: 'The build', value: "InMoov's open design, 3D-printed, assembled and wired by the team, from a 3D model in August to a finished robot in November" },
];

// The five videos of December 2022, the only footage of the finished robot working. With sound.
export interface Demo extends Video {
  when: string;
  length: string;
  youtube?: string;
}

function demo(name: string, when: string, length: string, caption: string, youtube?: string): Demo {
  return { src: `${media}/${name}.mp4`, poster: `${media}/${name}.jpg`, label: caption, caption, when, length, youtube };
}

export const demos: Demo[] = [
  demo('robot-niko-2022-12-06-greeting-handshake', '6 Dec 2022', '1 min 44 s', 'Two people come up to Niko one at a time. It greets each one and shakes their hand.'),
  demo(
    'robot-niko-2022-12-06-head-follows-face',
    '6 Dec 2022',
    '53 s',
    'Its head turns to follow the face of a person walking left and right in front of it.',
    'https://youtu.be/6iEj3AY1AlA',
  ),
  demo('robot-niko-2022-12-07-introducing-itself', '7 Dec 2022', '41 s', 'Niko introduces itself.', 'https://youtu.be/Iotg0E8AKoU'),
  demo('robot-niko-2022-12-07-question-and-answer', '7 Dec 2022', '3 min', 'Two of the team ask Niko questions, and it answers them.'),
  demo('robot-niko-2022-12-07-driving-on-base', '7 Dec 2022', '57 s', 'Niko on its wheeled base, driven around the lab.'),
];

export const build = {
  text: "Niko's body is InMoov, Gaël Langevin's open design for a humanoid, whose parts print on a home 3D printer. We built its head, torso, two arms and two five-fingered hands, on a metal stand over a wheeled base. Where InMoov usually runs on Arduino boards and MyRobotLab, Niko runs from one Raspberry Pi 4 with its own Python code.",
  hero: [
    {
      src: fullRobot,
      alt: 'Robot Niko, finished: a white 3D-printed humanoid on a stand, with NIKO printed on its chest.',
      caption: 'Finished · 29 Nov 2022',
    },
    {
      src: onWheeledBase,
      alt: 'Niko finished, standing in the lab, its stand on a black box with wheels.',
      caption: 'On its wheeled base · 29 Nov 2022',
    },
  ] satisfies Picture[],
  // Two short upright clips from before it was finished, shown silent.
  clips: [
    {
      title: 'Before it was finished',
      upright: true,
      items: [
        clip('robot-niko-2022-08-07-virtual-model', 'Aug 2022', "Niko's 3D model in Blender, its joints posed on the timeline"),
        clip('robot-niko-2022-11-03-head-test', 'Nov 2022', 'A head test: the head turns, and the mouth moves'),
      ],
    },
  ],
  timeline: [
    { src: modelFront, when: 'Aug 2022', caption: 'The 3D model, made from InMoov’s parts in Blender, its name on the chest.', alt: "A render of Niko's 3D model from the front, NIKO on its chest." },
    { src: printedHand, when: '16 Aug 2022', caption: 'One printed hand: five jointed fingers, pulled by tendons.', alt: 'A 3D-printed hand laid flat on a red desk, part numbers written on it.' },
    { src: headAndFrame, when: '2 Nov 2022', caption: 'The head on its frame, its eyes in.', alt: "Niko's head on its frame on the lab desk, a bench power supply beside it." },
    { src: headAndChest, when: '8 Nov 2022', caption: 'The head on the chest, “NIKO” printed on it.', alt: 'The head on the chest, NIKO printed on it; the waist and wiring still open.' },
    { src: waistGear, when: '23 Nov 2022', caption: 'From the side: the worm gear that turns the waist.', alt: 'Niko from the side, the head in profile, a black worm gear at the waist.' },
    { src: fittingArm, when: '24 Nov 2022', caption: 'Me fitting an arm at the shoulder.', alt: "Jewel holding a new arm in place at Niko's shoulder." },
    { src: electronics, when: '4 Dec 2022', caption: 'Inside the back: the Raspberry Pi 4 between the two servo boards.', alt: "Close on the electronics in Niko's back: a Raspberry Pi 4 in the middle, a servo board on each side, servo leads labelled on tape." },
    { src: launchDay, when: '6 Dec 2022', caption: 'Launch day, with a camera on its chest and a screen at its base.', alt: 'Jewel in a Team NIKO shirt pointing at Niko in the lab.' },
    { src: btvInterview, when: '14 Dec 2022', caption: 'Interviewed beside Niko by Bangladesh Television.', alt: 'Jewel answering a BTV reporter beside Niko in the lab.' },
  ] satisfies DatedPicture[],
  timelineFigure: {
    src: timeline,
    caption: 'Niko in 2022, from the first work to the public launch (from the report)',
    alt: 'A timeline of Niko in 2022, from the first work to the public launch.',
  } satisfies Figure,
};

export const how = {
  text: 'One Raspberry Pi 4 runs every program. It moves the servos through two PCA9685 boards, hears and speaks through a USB sound card, and sees through a USB camera on its chest.',
  overview: {
    src: systemOverview,
    caption: 'System overview, from the Niko report',
    alt: 'The system overview diagram: the Raspberry Pi, the two servo boards and 27 servos, and the voice and vision devices.',
  } satisfies Figure,
  facts: [
    { label: 'Computer', value: 'Raspberry Pi 4, running Python, started by systemd' },
    { label: 'Servo boards', value: 'Two PCA9685 boards, 16 channels each, set to 60 Hz' },
    { label: 'Servos', value: '27: head 1, neck 3, eyes 2, jaw 1, and per arm a shoulder, omoplate, rotation, bicep, wrist and five fingers' },
    { label: 'Camera', value: 'USB, on the chest' },
    { label: 'Sound', value: 'A USB sound card, its microphone and speaker shared by every program' },
    { label: 'Lights', value: 'Listening and speaking lights' },
    { label: 'Screen', value: 'A 7-inch screen at the base' },
    { label: 'Base', value: 'Two motors under the stand' },
  ] satisfies Fact[],
  topics: [
    {
      id: 'motion',
      title: 'Motion',
      text: [
        'Every move goes through one function, servoMove(n, angle). It takes a channel from 0 to 26 and an angle from 0 to 180°, turns the angle into a pulse, and writes it to the first board for channels below 16 or the second board for the rest. No other code needs to know which board a joint is on.',
        'Each gesture is a short Python function that steps joints through angles with pauses between them; most arm moves step one degree every 0.1 s. The handshake reaches out, turns the wrist, closes the fingers halfway for two seconds, opens them and draws back, in about 18.5 s as programmed.',
      ],
      figures: [
        { src: servoMap, caption: "The servo map: every joint's channel and starting angle" },
        { src: handshake, caption: 'The handshake as programmed: four joints over time' },
        { src: handGestures, caption: 'The hand poses in the gesture library' },
      ],
    },
    {
      id: 'voice',
      title: 'Voice',
      text: [
        'Niko listens for "Hey Niko" with a Porcupine wake word that runs on the Pi. Then the online assistant transcribes the question, and Niko checks it against its own question bank first. The bank is kept in a YAML file (51 questions in 152 phrasings in the published code), so a new answer is an edit to a file, not to the program. Anything else goes to the assistant.',
        'Its own answers are spoken in its own voice, and while it speaks its jaw moves between 70° and 110°, holding each for 0.2 s.',
      ],
      figures: [{ src: voicePipeline, caption: 'One spoken exchange, from the wake word to the answer' }],
    },
    {
      id: 'vision',
      title: 'Vision',
      text: [
        'To follow a face, the camera finds it with OpenCV’s face detector, and the head turns by one fixed rule: the further the face from the middle of the picture, the further the head turns. The camera is fixed on the chest, so the picture does not move as the head turns.',
        'To greet people, each one is enrolled once: eight photos for training and two for testing. Each face becomes a 128-number encoding, and a k-nearest-neighbour classifier names it. Once a name has been on screen for ten frames, Niko says hello and shakes that person’s hand.',
      ],
      figures: [
        { src: faceRecognition, caption: 'Face recognition: enrolment and training, then live greeting' },
        { src: followFace, caption: 'The head-turn rule: head angle against where the face is' },
      ],
    },
    {
      id: 'software',
      title: 'Software',
      text: [
        'A systemd service starts the voice program at boot and restarts it if it stops. The vision programs and the launch speech start on demand, and share modules for the servos, the gestures, the lights and speech. Secrets, such as the wake word’s access key, are read from a file outside the repository.',
      ],
      figures: [{ src: softwareMap, caption: 'The software: the voice program, the programs started on demand, and the modules they share' }],
    },
  ] satisfies Topic[],
};

export const team: Team = {
  text: 'Niko was built by Quanta Robotics, the robotics team I co-founded at Comilla University, at the FabLab of the Deputy Commissioner’s Office in Cumilla. With the team, I 3D-printed and assembled its body; I tuned its 27 servos, planned its arm motions as servo sequences, and led its programming; most of the commits in its repository are mine.',
  // In the report's author order; I lead the list.
  members: ['Jewel Nath', 'Shanjit Mondol', 'Tousif Bin Parves', 'Md Mohiuddin Khan Mahin', 'Anik Chakraborty'],
  note: 'Niko was launched in public on 6 December 2022. Six news outlets reported it, and Bangladesh Television interviewed me beside it.',
  credits: [
    { what: 'Body', text: 'InMoov, by Gaël Langevin (CC BY-NC 3.0)', href: 'https://inmoov.fr/' },
    { what: 'Voice program and installers', text: "started from Shivasiddharth's GassistPi (MIT, with two conditions)", href: 'https://github.com/shivasiddharth/GassistPi' },
    { what: 'Face recognition', text: "from the k-NN camera example in Adam Geitgey's face_recognition (MIT)", href: 'https://github.com/ageitgey/face_recognition' },
    { what: 'Service installer', text: "from Google's AIY projects, through GassistPi (Apache 2.0)", href: 'https://github.com/google/aiyprojects-raspbian' },
  ],
  creditsNote: "Each file taken from another project keeps its own licence notice; Niko's own code is under the MIT licence.",
};

export const lessons: Lesson[] = [
  {
    title: 'Open hardware shortens the road',
    text: 'Building on InMoov took a student team from a 3D model to a finished life-size humanoid in about four months, and left our effort for the software that makes it useful.',
  },
  {
    title: 'One small computer is enough',
    text: 'A single Raspberry Pi ran the voice, the vision and 27 servos. The PCA9685 boards hold each servo’s pulse on their own, so the Pi only sends new angles.',
  },
  {
    title: 'A local answer bank keeps it in character',
    text: 'An online assistant answers general questions well, but knows nothing about the robot. Matching Niko’s own questions first let it answer about itself and the FabLab in its own voice.',
  },
];

export const report = {
  doi: '10.5281/zenodo.23719561',
  code: 'https://github.com/jewel-nath/robot-niko',
};
