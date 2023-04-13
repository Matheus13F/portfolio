import { defineField, defineType } from "sanity";

export default defineType({
  name: "background",
  title: "Background",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "hardSkill",
      title: "Hard Skill",
      type: "string",
    }),
    defineField({
      name: "hardSkillPoints",
      title: "Hard Skill Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "string",
    }),
    defineField({
      name: "toolsPoints",
      title: "Tools Points",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
