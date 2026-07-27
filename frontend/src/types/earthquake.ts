export interface Earthquake {
  id: string;
  location: string;
  magnitude: number;
  depth: number;
  position: [number, number];
  time: number;
}