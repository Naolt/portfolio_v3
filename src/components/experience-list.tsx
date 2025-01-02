"use client";
import { cn, formatDate, formatDuration } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { WorkExperienceType } from "@/sanity/schemaTypes/experience-section";
import { urlFor } from "@/sanity/lib/image";

export function ExperienceList({
  experiences,
}: {
  experiences: WorkExperienceType[];
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex gap-6 md:gap-12 w-full">
      <div className="flex flex-col gap-2 w-fit">
        {experiences.map((experience, index) => (
          <Button
            key={index}
            className="min-w-32 justify-start hidden md:flex"
            size={"lg"}
            variant={index == activeTab ? "secondary" : "ghost"}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={urlFor(experience.logo).url() as string}
              width={24}
              height={24}
              alt="company logo"
            />
            <p>{experience.company}</p>
          </Button>
        ))}
        {experiences.map((experience, index) => (
          <Button
            key={index}
            size={"icon"}
            variant={index == activeTab ? "secondary" : "ghost"}
            onClick={() => setActiveTab(index)}
            className="flex items-center justify-center md:hidden"
          >
            <Image
              src={urlFor(experience.logo).url() as string}
              width={24}
              height={24}
              alt="company logo"
            />
          </Button>
        ))}
      </div>
      <div className="max-w-[456px]">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={cn(
              "flex-col gap-2",
              index == activeTab ? "flex" : "hidden"
            )}
          >
            <h3 className="text-2xl text-zinc-100 font-semibold">
              {experience.title} @ {experience.company}
            </h3>
            <p className="text-zinc-400 text-sm tracking-wider">
              {formatDate(experience.startDate)} -{" "}
              {!experience.present ? formatDate(experience.endDate) : "Present"}{" "}
              • {formatDuration(experience.startDate, experience.endDate)}
            </p>
            <p className="text-zinc-400 text-sm">{experience.location}</p>
            {experience.accomplishments.map((accomplishment, index) => (
              <p key={index} className="text-zinc-400 text-sm flex gap-1">
                <Check className="min-w-4 min-h-4 mr-2 text-accent-accentSecondary" />
                {accomplishment}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
