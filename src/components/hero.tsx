import { client } from "@/sanity/lib/client";
import { HeroSectionType } from "@/sanity/schemaTypes/hero-section";
import WaterFillingLogo from "./water-filling-logo";

const HERO_QUERY = `*[
  _type == "heroSection"
] | order(_updatedAt desc) [0]`;

const options = { next: { revalidate: 30 } };

export default async function Hero() {
  const heroContent = await client.fetch<HeroSectionType>(
    HERO_QUERY,
    {},
    options
  );

  if (!heroContent) {
    return null;
  }

  const { heading, subheading } = heroContent;

  const headingWhiteColored = heading
    .split(" ")
    .slice(0, heading.split(" ").length - 2)
    .join(" ");
  const headingHighlighted = heading.split(" ").slice(-2).join(" ");

  return (
    <section
      className="w-full max-w-screen-xl mx-auto pt-32 pb-16 grid grid-cols-12"
      id="hero"
    >
      <div className="space-y-6 col-span-full md:col-span-10 lg:col-span-8">
        <h1 className="text-5xl font-bold">
          {headingWhiteColored}{" "}
          <span className="text-accent-accentSecondary">
            {" "}
            {headingHighlighted}
          </span>
        </h1>
        <p className="text-zinc-400">{subheading}</p>
      </div>
    </section>
  );
}
