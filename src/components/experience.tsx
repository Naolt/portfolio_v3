import { client } from "@/sanity/lib/client";
import { ExperienceList } from "./experience-list";
import { WorkExperienceType } from "@/sanity/schemaTypes/experience-section";

const EXPERIENCE_QUERY = `*[
  _type == "workExperience"
] | order(startDate desc)`;

const options = { next: { revalidate: 30 } };

export default async function Experience() {
  const experiences = await client.fetch<WorkExperienceType[]>(
    EXPERIENCE_QUERY,
    {},
    options
  );

  return (
    <section
      className="w-full max-w-screen-xl mx-auto pt-32 grid grid-cols-12"
      id="experience"
    >
      <header className="col-span-full space-y-4">
        <h1 className="text-3xl font-semibold">Work Experience</h1>
        <p className="text-zinc-400">
          I’ve had the opportunity to work at some amazing places
        </p>
      </header>
      <div className="mt-16 col-span-full">
        {<ExperienceList experiences={experiences} />}
      </div>
    </section>
  );
}
