// The shapes every project page's words and pictures take. Each project's own data file fills them.
import type { ImageMetadata } from 'astro';
import type { Fact, Picture, Stat } from './site';

export interface Intro {
  title: string;
  status: string;
  lead: string;
  role: string;
  years: string;
}

// A report figure: drawn on white, shown whole, opened large on a tap.
export interface Figure {
  src: ImageMetadata;
  caption: string;
  alt?: string;
}

export interface Topic {
  id: string;
  title: string;
  text: string[];
  figures: Figure[];
  // Figures side by side, as for a tall phone screenshot beside its diagram.
  sideBySide?: boolean;
}

export type DatedPicture = Picture & { when: string };

export interface Credit {
  what: string;
  text: string;
  href: string;
}

export interface Team {
  text: string;
  // In the report's author order, with me first.
  members: string[];
  note?: string;
  credits: Credit[];
  creditsNote: string;
}

export interface Lesson {
  title: string;
  text: string;
}

export interface Results {
  // The project's own status word for the numbers: measured, computed, ...
  kind: string;
  note: string;
  stats: Stat[];
}

export type { Fact };
