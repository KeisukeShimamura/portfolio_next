export type Work = {
  id: string;
  name: string;
  body: string;
  image: Image;
  skill: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export type Image = {
  url: string;
  height: number;
  width: number;
}
