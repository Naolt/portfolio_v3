"use client";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

type ExperienceType = {
  companyLogo: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
};

const EXPERIENCES: ExperienceType[] = [
  {
    companyLogo:
      "https://th.bing.com/th/id/OIP.Din44az7iZZDfbsrD1kfGQHaHa?rs=1&pid=ImgDetMain",
    company: "Google",
    title: "Software Engineer",
    location: "Mountain View, CA",
    startDate: "2019-01-01",
    endDate: "2021-01-01",
    accomplishments: [
      "Built the next generation of Google Search",
      "Improved search results by 10%",
      "Reduced search latency by 5%",
    ],
  },
  {
    companyLogo:
      "https://th.bing.com/th/id/OIP.Din44az7iZZDfbsrD1kfGQHaHa?rs=1&pid=ImgDetMain",
    company: "Facebook",
    title: "Software Engineer",
    location: "Mountain View, CA",
    startDate: "2019-01-01",
    endDate: "2021-01-01",
    accomplishments: [
      "Built the next generation of Google Search",
      "Improved search results by 10%",
      "Reduced search latency by 5%",
    ],
  },
];

export default function Experience() {
  return (
    <section className="w-full max-w-screen-xl mx-auto pt-32 grid grid-cols-12">
      <header className="col-span-full space-y-4">
        <h1 className="text-3xl font-semibold">Work Experience</h1>
        <p className="text-zinc-400">I have worked at a few places</p>
      </header>
      <div className="mt-16 col-span-full">{<ExperienceList />}</div>
    </section>
  );
}

function ExperienceList() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex gap-12 w-full">
      <div className="flex flex-col gap-2 w-fit">
        {EXPERIENCES.map((experience, index) => (
          <Button
            key={index}
            className="min-w-32"
            size={"lg"}
            variant={index == activeTab ? "secondary" : "ghost"}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={"vercel.svg"}
              width={24}
              height={24}
              alt="company logo"
            />
            <p>{experience.company}</p>
          </Button>
        ))}
      </div>
      <div className="max-w-[456px]">
        {EXPERIENCES.map((experience, index) => (
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
              {formatDate(experience.endDate)}
            </p>
            <p className="text-zinc-400 text-sm">{experience.location}</p>
            {experience.accomplishments.map((accomplishment, index) => (
              <p key={index} className="text-zinc-400 text-sm flex gap-1">
                <Check className="w-4 h-4 mr-2 text-accent-accentSecondary" />
                {accomplishment}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
