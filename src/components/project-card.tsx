"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Icon } from "@iconify/react";
import { ProjectType } from "@/sanity/schemaTypes/project-section";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="mb-12 w-full sm:max-w-[350px]">
      <PinContainer
        title="View Project"
        href={project.demo ? project.demo : project.github}
        className="w-full h-full"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {project.projectName}
          </h3>

          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{project.description}</span>
          </div>
          <div className="flex gap-2 my-2">
            {project.technologies.map((skill, index) => (
              <Icon key={index} icon={skill} className="w-4 h-4" />
            ))}
          </div>

          <Image
            src={urlFor(project.image).url() as string}
            alt={project.projectName}
            width={300}
            height={300}
            className="flex flex-1 w-full rounded-lg mt-4 "
          />
        </div>
      </PinContainer>
    </div>
  );
}
