import React, { useEffect } from "react";
import { Project } from "../data/index"; // Adjust the path as needed

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // Attach event listener
    document.addEventListener("keydown", handleEsc);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  // Function to handle Visit button click
  const handleVisitClick = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div
        className="relative bg-black bg-opacity-70 p-4 rounded-lg max-w-md mx-4 w-full h-auto overflow-y-auto max-h-full"
        style={{
          scrollbarWidth: "none", // For Firefox
        }}
      >
        {/* Hide scrollbar for Chrome, Safari, and Opera */}
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <button
          className="absolute top-9 right-5 text-gray-600 hover:text-gray-900 text-3xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-full h-56 overflow-hidden flex items-center justify-center">
            <img
              src={project.img}
              alt={project.title}
              className="w-3/4 h-auto object-cover transition-transform duration-300 transform scale-90"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4 text-center">
            {project.title}
          </h2>
          <p className="text-gray-400 mt-2 text-center">{project.des}</p>

          <button
            className={`mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:ring-0 transform hover:scale-105 ${
              !project.link ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleVisitClick}
            disabled={!project.link}
          >
            Visit
          </button>

          <div className=" mt-2 flex gap-2 mt-0 mb-12">
            {project.iconLists.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`icon-${index}`}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
