import { ProjectType } from "@/sanity/schemaTypes/project-section";
import { ProjectCard } from "./project-card";
import { client } from "@/sanity/lib/client";

const PROJECTS_QUERY = `*[
  _type == "projects"
]`;

const options = { next: { revalidate: 30 } };

export default async function Projects() {
  const projects = await client.fetch<ProjectType[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  return (
    <section
      className="w-full max-w-screen-xl mx-auto pt-32 flex flex-col gap-6"
      id="projects"
    >
      <header className="w-full space-y-4 mb-12">
        <h1 className="text-3xl font-semibold">
          I&apos;ve been building a lot of things
        </h1>
      </header>
      <div className="w-full flex gap-6 flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className="mb-12 w-full sm:max-w-[350px] relative">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
