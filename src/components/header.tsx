import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-between w-full max-w-screen-xl mx-auto mt-8">
      <NavLinks />

      <Button>Resume</Button>
    </header>
  );
}

const LINKS = [
  {
    label: "Home",
    href: "home",
  },
  {
    label: "About",
    href: "about",
  },
  {
    label: "Experience",
    href: "work",
  },
  {
    label: "Projects",
    href: "projects",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

function NavLinks() {
  return (
    <nav className="flex p-2 gap-2 bg-cardBg rounded-lg">
      <Image src={Logo} alt="Logo" width={23} height={23} className="ml-2" />
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={`#${link.href}`}
          className="py-2 px-4 font-semibold hover:bg-zinc-700 rounded-md"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
