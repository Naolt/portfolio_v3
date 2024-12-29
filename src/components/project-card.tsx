"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { ProjectType } from "./projects";
import { Icon } from "@iconify/react";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="w-full flex items-center justify-center">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {project.title}
          </h3>

          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{project.description}</span>
          </div>
          <div className="flex gap-2 my-2">
            {project.technologies.map((skill, index) => (
              <Icon key={index} icon={skill.icon} className="w-4 h-4" />
            ))}
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
