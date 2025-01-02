import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Your Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      type: "string",
      title: "Subheading",
      validation: (rule) => rule.required(),
    }),
  ],
});

export type HeroSectionType = {
  _type: "heroSection";
  _id: string;
  name: string;
  title: string;
  heading: string;
  subheading: string;
};
