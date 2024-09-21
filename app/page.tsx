"use client";

import { navItems, timelineData, cards } from "@/data"; // Adjust the import path
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import About from "@/components/About";
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { Timeline } from "@/components/ui/timeline";
import { ExpandableScroll } from "@/components/ui/ExpandableScroll";
import { motion } from "framer-motion";

const Home = () => {
  // Define subtle animations
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideInFromBottom: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slideInFromLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    slideInFromRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <ContainerScroll titleComponent="">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animations.fadeIn}
            transition={{ duration: 0.8 }} // Slower duration
          >
            <Hero />
          </motion.div>
        </ContainerScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animations.slideInFromLeft}
          transition={{ duration: 0.8 }} // Slower duration
        >
          <Grid />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animations.slideInFromBottom}
          transition={{ duration: 0.8 }} // Slower duration
        >
          <About />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animations.slideInFromBottom}
          transition={{ duration: 0.8 }} // Slower duration
        >
          <Timeline data={timelineData} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animations.slideInFromRight}
          transition={{ duration: 0.8 }} // Slower duration
        >
          <RecentProjects />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animations.fadeIn}
          transition={{ duration: 0.8 }} // Slower duration
        >
          <ExpandableScroll cards={cards} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animations.fadeIn}
          transition={{ duration: 0.8 }} // Slower duration
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
