import Link from "next/link";
import { Icon } from "@iconify/react";

import ContactForm from "./contact-form";

type SocialType = {
  label: string;
  icon: string;
  link: string;
};
export const SOCIALS: SocialType[] = [
  {
    label: "LinkedIn",
    icon: "fa-brands:linkedin",
    link: "https://linkedin.com/in/naolt",
  },
  {
    label: "GitHub",
    icon: "fa-brands:github",
    link: "fa-brands:github",
  },
  {
    label: "Email",
    icon: "fa-solid:envelope",
    link: "mailto:naol.delesa.official@gmail.com",
  },
];

export default function Contact() {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-32 grid grid-cols-12">
      <header className="space-y-4 w-[427px] col-span-8">
        <h1 className="text-3xl font-semibold col-span-full">
          Let’s work together
        </h1>
        <p className="text-zinc-400 col-span-6">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        {/* socials */}
        <div className="flex gap-4 col-span-full">
          {SOCIALS.map((social, index) => (
            <Link href={social.link} key={index}>
              <Icon icon={social.icon} className="w-6 h-6 text-zinc-100" />
            </Link>
          ))}
        </div>
      </header>
      <div className="col-span-3">
        <ContactForm />
      </div>
    </section>
  );
}
