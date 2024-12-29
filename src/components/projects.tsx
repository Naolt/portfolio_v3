import { ProjectCard } from "./project-card";

export type TechnologyType = {
  name: string;
  icon: string;
};

export type ProjectType = {
  title: string;
  description: string;
  technologies: TechnologyType[];
  image: string;
  github: string;
  demo: string;
};

const PROJECTS: ProjectType[] = [
  {
    title: "Eskalate",
    description:
      "Built a new feature that allowed users to listen to music while they were sleeping while they were sleeping",
    technologies: [
      { name: "React", icon: "devicon:react" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "TailwindCSS", icon: "devicon:tailwindcss" },
    ],
    image: "",
    github: "https://github.com/naolt",
    demo: "https://eskalate.io",
  },
  {
    title: "Eskalate",
    description:
      "Built a new feature that allowed users to listen to music while they were sleeping while they were sleeping",
    technologies: [
      { name: "React", icon: "devicon:react" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "TailwindCSS", icon: "devicon:tailwindcss" },
    ],
    image: "",
    github: "",
    demo: "https://eskalate.io",
  },
  {
    title: "Eskalate",
    description:
      "Built a new feature that allowed users to listen to music while they were sleeping while they were sleeping",
    technologies: [
      { name: "React", icon: "devicon:react" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "TailwindCSS", icon: "devicon:tailwindcss" },
    ],
    image: "",
    github: "",
    demo: "https://eskalate.io",
  },
  {
    title: "Eskalate",
    description:
      "Built a new feature that allowed users to listen to music while they were sleeping while they were sleeping",
    technologies: [
      { name: "React", icon: "devicon:react" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "TailwindCSS", icon: "devicon:tailwindcss" },
    ],
    image: "",
    github: "",
    demo: "https://eskalate.io",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-screen-xl mx-auto pt-32 grid grid-cols-12 gap-6">
      <header className="col-span-full space-y-4 mb-12">
        <h1 className="text-3xl font-semibold">
          I've been building a lot of things
        </h1>
      </header>
      <div className="col-span-full flex gap-6 flex-wrap">
        {PROJECTS.map((project, index) => (
          <div key={index} className="col-span-3 mb-12">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
