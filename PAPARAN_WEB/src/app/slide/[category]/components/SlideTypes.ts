/**
 * SlideTypes.ts
 * Global interfaces for the Sukabumi Strategic Portal data structures.
 */

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  trend?: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon?: string;
}

export interface Slide {
  id: number;
  section?: string;
  title: string;
  subtitle: string;
  body: string;
  layout: string;
  icon?: string;
  image?: string;
  features?: any[];
  metrics?: any[];
  highlights?: string[];
}

export interface MasterData {
  [category: string]: Slide[];
}
