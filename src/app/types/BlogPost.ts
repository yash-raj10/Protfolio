import { PortableTextBlock } from "sanity";
import { Category } from "./Category";

export type BlogPost = {
  _id: string;
  title: string;
  link: string;
  mainImage: string;
  body: PortableTextBlock;
  publishedAt: string;
  categories: Category[];
};
