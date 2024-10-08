"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Define the interface for the TimelineEntry
interface TimelineEntry {
  title: string;
  company?: string; // Company is now optional
  content: React.ReactNode;
  link: string; // Updated to be a string link
}

// Example data for the timeline entries
const data: TimelineEntry[] = [
  {
    title: "Software Developer Internship",
    company: "Incronix Technology Pvt Ltd",
    content: <div>{/* Your content here */}</div>,
    link: "https://incronix.com/", // Corrected link format
  },
  {
    title: "Placement Coordinator",
    company: "Indira Group of Institutes",
    content: (
      <div>
        <p>
          Mar 2023 – Jul 2023 | Pune
          <br />
          • Built and maintained strong relationships with employers and
          industry clients to create placement opportunities.
          <br />
          • Coordinated campus recruitment drives and events.
          <br />• Managed the placement process, including scheduling interviews
          and handling communication between students and recruiters.
        </p>
      </div>
    ),
    link: "https://indiraedu.com/", // Corrected link format
  },
  // Add more entries as needed
];

// Timeline component
export const Timeline = ({ data = [] }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="work experience">
      <div
        className="w-full bg-white dark:bg-slate-900 font-sans md:px-10 rounded-3xl"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-6xl mb-2 text-black dark:text-white max-w-5xl text-center justify-center">
            Work Experience
          </h2>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-6 md:pt-0 md:gap-2 mb-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>

                <div className="relative flex flex-col">
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-100 dark:text-neutral-100">
                    {item.title}
                  </h3>
                  {item.company && ( // Render company only if it exists
                    <h4 className="hidden md:block text-lg md:pl-20 text-neutral-600 dark:text-neutral-400">
                      <a
                        href={item.link} // Use the link from data
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.company}
                      </a>
                    </h4>
                  )}
                </div>
              </div>

              <div className="relative pl-20 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-100 dark:text-neutral-100">
                  {item.title}
                </h3>
                {item.company && (
                  <h4 className="md:hidden block text-xl mb-4 text-left text-neutral-600 dark:text-neutral-400">
                    <a
                      href={item.link} // Use the link from data
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  </h4>
                )}
                {item.content}
              </div>
            </div>
          ))}

          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
