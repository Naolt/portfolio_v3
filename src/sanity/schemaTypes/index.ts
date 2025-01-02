import { type SchemaTypeDefinition } from "sanity";
import { contactInfo } from "./contact-section";
import { workExperience } from "./experience-section";
import { heroSection } from "./hero-section";
import { myService } from "./service-section";
import { projects } from "./project-section";
import { resumeInfo } from "./resume-section";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    workExperience,
    myService,
    projects,
    contactInfo,
    resumeInfo,
  ],
};
