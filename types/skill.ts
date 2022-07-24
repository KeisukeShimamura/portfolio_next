import { Image } from "./work";

export type Skill = {
  id: string;
  name: string;
  score: number;
  note: string;
  icon: Image;
  category: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}