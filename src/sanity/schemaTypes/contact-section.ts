import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "Email Address",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone Number",
    }),
    defineField({
      name: "linkedin",
      type: "url",
      title: "LinkedIn",
    }),
    defineField({
      name: "github",
      type: "url",
      title: "GitHub",
    }),
  ],
});

export type ContactType = {
  _type: "contactInfo";
  _id: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};
