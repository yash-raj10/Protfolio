import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "link",
      type: "url",
    }),
    defineField({
      name: "mainImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
  ],
});
