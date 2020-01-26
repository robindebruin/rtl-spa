export interface ShowType {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: (string | null)[] | null;
  status: string;
  runtime: number;
  premiered: string;
  officialSite?: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: NetworkOrWebChannel | null;
  webChannel?: WebChannel | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
export interface Schedule {
  time: string;
  days?: (string | null)[] | null;
}
export interface Rating {
  average?: number | null;
}
export interface NetworkOrWebChannel {
  id: number;
  name: string;
  country: Country;
}
export interface Country {
  name: string;
  code: string;
  timezone: string;
}
export interface WebChannel {
  id: number;
  name: string;
  country?: Country1 | null;
}
export interface Country1 {
  name: string;
  code: string;
  timezone: string;
}
export interface Externals {
  tvrage: number;
  thetvdb?: number | null;
  imdb?: string | null;
}
export interface Image {
  medium: string;
  original: string;
}
export interface Links {
  self: SelfOrPreviousepisodeOrNextepisode;
  previousepisode: SelfOrPreviousepisodeOrNextepisode;
  nextepisode?: SelfOrPreviousepisodeOrNextepisode1 | null;
}
export interface SelfOrPreviousepisodeOrNextepisode {
  href: string;
}
export interface SelfOrPreviousepisodeOrNextepisode1 {
  href: string;
}
