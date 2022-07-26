import { Skill } from "./skill";

export type Work = {
  id: string;
  name: string;
  body: string;
  mainImage: Image;
  url: string;
  skill: Skill[];
  images: ImageCustomField[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export type ImageCustomField = {
  image: Image;
}

export type Image = {
  url: string;
  height: number;
  width: number;
}
