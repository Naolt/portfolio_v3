import { defineField, defineType } from "sanity";

export const myService = defineType({
  name: "myService",
  title: "My Service",
  type: "document",
  fields: [
    defineField({
      name: "serviceTitle",
      type: "string",
      title: "Service Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serviceDescription",
      type: "text",
      title: "Service Description",
    }),
  ],
});

export type ServiceType = {
  _type: "myService";
  _id: string;
  serviceTitle: string;
  serviceDescription: string;
};
