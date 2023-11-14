import { type SchemaTypeDefinition } from "sanity";
import skill from "./schemas/skill";
import post from "./schemas/post";
import category from "./schemas/category";
import blogcontent from "./schemas/blogcontent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, category, post, blogcontent],
};
