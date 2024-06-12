import React from "react";
import { FaGithub } from "react-icons/fa6";

const TimelineView = ({ projects }) => {
  // Sort projects by serial property
  const sortedProjects = [...projects].sort((a, b) => a.serial - b.serial);

  return (
    <div className="w-full px-8 lg:px-16 py-12">
      <div className="relative flex flex-col items-center">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-sunrise-light via-sunrise to-sunset-dark h-full"></div>
        {sortedProjects.map((project, index) => (
          <div key={project.id} className="relative mb-12 w-full flex">
            <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full`}>
              {/* Project Card */}
              <div className="border border-[rgba(255,255,255,0.3)] rounded-md p-4 rounded-lg shadow-lg 
              w-full max-w-lg hover:scale-105"
                style={{boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",}}>
                <div className="flex items-center gap-4">
                  {/* Project Image */}
                  <div className="bg-gradient-to-r from-sunrise-light via-sunrise to-sunset-dark p-2 rounded-full flex-shrink-0">
                    <img
                      src={project.imgSrc}
                      alt={project.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  {/* Project Details */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-sunrise">{project.name}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">{project.time}</span>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <a href={project.gitURL} className="text-sunrise flex items-center">
                      <FaGithub className="mr-2" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-sunrise w-8 h-8 rounded-full border-4 border-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineView;
