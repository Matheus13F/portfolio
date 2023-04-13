import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      description: "Here goes the testimonial",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "linkToPage",
      title: "Link To Page",
      type: "url",
    }),
    //defineField({
    //  name: "progress",
    //  title: "Progress",
    //  type: "number",
    //  description: "Progress of skill from 0 to 100",
    //  validation: (Rule) => Rule.min(0).max(100),
    //}),
  ],
});
