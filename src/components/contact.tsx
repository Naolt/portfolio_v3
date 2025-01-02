import Link from "next/link";
import { Icon } from "@iconify/react";

import ContactForm from "./contact-form";
import { ContactType } from "@/sanity/schemaTypes/contact-section";
import { client } from "@/sanity/lib/client";

const CONTACT_QUERY = `*[_type == "contactInfo"] | order(_updatedAt desc) [0]`;

const options = { next: { revalidate: 30 } };

export default async function Contact() {
  const contactInfo = await client.fetch<ContactType>(
    CONTACT_QUERY,
    {},
    options
  );

  if (!contactInfo) {
    return null;
  }

  const { email, phone, linkedin, github } = contactInfo;

  const SOCIALS = [
    { icon: "material-symbols:mail-rounded", link: `mailto:${email}` },
    { icon: "akar-icons:linkedin-fill", link: linkedin },
    { icon: "akar-icons:github-fill", link: github },
    { icon: "si:phone-fill", link: `tel:${phone}` },
  ];

  return (
    <section
      className="w-full max-w-screen-xl mx-auto py-32 flex gap-12 flex-wrap"
      id="contact"
    >
      <header className="space-y-4 w-full md:max-w-[427px] md:w-1/3 ">
        <h1 className="text-3xl font-semibold w-full">Let’s work together</h1>
        <p className="text-zinc-400 w-full">
          Looking to hire a software engineer or get your project developed?
          Let’s connect and turn your ideas into reality!
        </p>
        {/* socials */}
        <div className="flex gap-4 flex-1">
          {SOCIALS.map((social, index) => (
            <Link href={social.link} key={index}>
              <Icon icon={social.icon} className="w-6 h-6 text-zinc-100" />
            </Link>
          ))}
        </div>
      </header>
      <div className="flex justify-start flex-1 lg:justify-end ">
        <ContactForm />
      </div>
    </section>
  );
}
