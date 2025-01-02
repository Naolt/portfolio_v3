import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { MyService } from "@/components/my-service";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-[2000px] w-full px-8 overflow-x-hidden">
      <Header />
      <Hero />
      <Experience />
      <MyService />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
