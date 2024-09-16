"use client";

import { navItems, timelineData } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import About from "@/components/About";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { Timeline } from "@/components/ui/timeline";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <ContainerScroll titleComponent={""} children={<Hero />} />
        <Grid />
        <About />
        <Timeline data={timelineData} />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
