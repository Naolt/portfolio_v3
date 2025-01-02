import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

const LINKS = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Services",
    href: "#service",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function NavLinks() {
  return (
    <div className="flex items-center gap-2">
      <MobileNav />
      <DesktopNav />
    </div>
  );
}

function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AlignLeft size={24} className="block md:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {LINKS.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link
              href={`${link.href}`}
              className="block py-2 px-4 font-semibold hover:bg-zinc-700 rounded-md w-full"
            >
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopNav() {
  return (
    <nav className="p-2 gap-2 bg-cardBg rounded-lg hidden md:flex">
      <Image src={Logo} alt="Logo" width={23} height={23} className="ml-2" />
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={`${link.href}`}
          className="py-2 px-4 font-semibold hover:bg-zinc-700 rounded-md"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
