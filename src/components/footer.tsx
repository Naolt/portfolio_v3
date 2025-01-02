import Link from "next/link";
import { Icon } from "@iconify/react";
import { client } from "@/sanity/lib/client";
import { ContactType } from "@/sanity/schemaTypes/contact-section";

const CONTACT_QUERY = `*[_type == "contactInfo"]`;

const options = { next: { revalidate: 30 } };

export default async function Footer() {
  const contactInfo = await client.fetch<ContactType[]>(
    CONTACT_QUERY,
    {},
    options
  );

  if (!contactInfo) {
    return null;
  }

  const { email, phone, linkedin, github } = contactInfo[0];

  const SOCIALS = [
    { icon: "material-symbols:mail-rounded", link: `mailto:${email}` },
    { icon: "akar-icons:linkedin-fill", link: linkedin },
    { icon: "akar-icons:github-fill", link: github },
    { icon: "si:phone-fill", link: `tel:${phone}` },
  ];

  return (
    <footer className="w-full flex items-center justify-center flex-col gap-5 pb-16">
      <div className="flex gap-4 col-span-full">
        {SOCIALS.map((social, index) => (
          <Link href={social.link} key={index}>
            <Icon icon={social.icon} className="w-6 h-6 text-zinc-300" />
          </Link>
        ))}
      </div>
      <p className="text-center">
        Design inspired by <i>ui.aceternity.com</i> and Built By{" "}
        <i> Naol Tamrat</i>
      </p>
      <span className="text-center">
        &copy; 2025 All rights reserved. Built with Next.js
      </span>
    </footer>
  );
}
