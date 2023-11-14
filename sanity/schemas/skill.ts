import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "skill",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
