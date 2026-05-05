import Image from "next/image";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Activities from "@/components/activities";
import Music from "@/components/music";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans dark:bg-black">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Activities />
      <Music />
    </div>
  );
}
