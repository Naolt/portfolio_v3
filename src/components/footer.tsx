import Link from "next/link";
import { SOCIALS } from "./contact";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center flex-col gap-5 pb-16">
      <div className="flex gap-4 col-span-full">
        {SOCIALS.map((social, index) => (
          <Link href={social.link} key={index}>
            <Icon icon={social.icon} className="w-6 h-6 text-zinc-300" />
          </Link>
        ))}
      </div>
      <p>
        Design inspired by <i>ui.aceternity.com</i> and Built By{" "}
        <i> Naol Tamrat</i>
      </p>
    </footer>
  );
}
