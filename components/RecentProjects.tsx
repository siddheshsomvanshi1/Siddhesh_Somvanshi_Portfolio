import React, { useState } from "react";
import { Project, projects } from "../data/index"; // Ensure the path is correct
import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ProjectModal";

const RecentProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedProject(id);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative group cursor-pointer"
              key={item.id}
              onClick={() => openModal(item.id)}
            >
              <PinContainer title={item.title}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
              </PinContainer>
            </div>
          ))}
        </div>

        {/* Modal Component */}
        {selectedProject && (
          <ProjectModal
            project={projects.find((proj) => proj.id === selectedProject)!}
            closeModal={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
