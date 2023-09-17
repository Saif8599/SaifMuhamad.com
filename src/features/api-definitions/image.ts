export interface ImageJson {
  id: number;
  title: string;
  url: string;
  focal_point?: {
    x: number;
    y: number;
  } | null;
}
