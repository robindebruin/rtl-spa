export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Image;
  summary: string;
  _links: Links;
}
export interface Image {
  medium: string;
  original: string;
}
export interface Links {
  self: Self;
}
export interface Self {
  href: string;
}
