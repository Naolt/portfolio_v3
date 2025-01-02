import Link from "next/link";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { ResumeType } from "@/sanity/schemaTypes/resume-section";
import { NavLinks } from "./nav-links";

const RESUME_QUERY = `
  *[_type == "resumeInfo"] | order(_updatedAt desc) [0] {
    resume_url
  }
`;
const options = { next: { revalidate: 30 } };

export default async function Header() {
  const resume = await client.fetch<ResumeType>(RESUME_QUERY, {}, options);

  return (
    <header className="flex justify-between w-full max-w-screen-xl mx-auto mt-8">
      <NavLinks />

      <Link href={resume.resume_url} passHref target="_blank">
        <Button>Resume</Button>
      </Link>
    </header>
  );
}
