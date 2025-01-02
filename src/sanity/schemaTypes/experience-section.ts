import { defineField, defineType } from "sanity";

export const workExperience = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Company logo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      type: "string",
      title: "Company Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Job Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      type: "date",
      title: "Start Date",
    }),
    defineField({
      name: "endDate",
      type: "date",
      title: "End Date",
    }),
    defineField({
      name: "present",
      type: "boolean",
      title: "Present",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "accomplishments",
      type: "array",
      title: "Accomplishments",
      of: [{ type: "string" }],
    }),
  ],
});

export type WorkExperienceType = {
  _type: "workExperience";
  _id: string;
  logo: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  present: boolean;
  location: string;
  accomplishments: string[];
};
