import Image from "next/image";
import Logo from "../../public/Logo.svg";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src={Logo}
        alt="Logo"
        width={46}
        height={46}
        className="animate-ping"
      />
    </div>
  );
}
