import { defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "projectName",
      type: "string",
      title: "Project Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "technologies",
      type: "array",
      title: "Technologies Used",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "demo",
      type: "url",
      title: "Project Demo Link",
    }),
    defineField({
      name: "github",
      type: "url",
      title: "Github Repo Link",
    }),
  ],
});

export type ProjectType = {
  _type: "projects";
  _id: string;
  image: string;
  projectName: string;
  description: string;
  technologies: string[];
  demo: string;
  github: string;
};
