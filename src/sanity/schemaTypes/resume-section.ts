import { defineField, defineType } from "sanity";

export const resumeInfo = defineType({
  name: "resumeInfo",
  title: "Resumes",
  type: "document",
  fields: [
    defineField({
      name: "resume_url",
      type: "url",
      title: "Resume Link",
    }),
  ],
});

export type ResumeType = {
  _type: "resumeInfo";
  _id: string;
  resume_url: string;
};
