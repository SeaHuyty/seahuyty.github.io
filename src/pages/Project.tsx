import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

import projects from "../assets/projects";

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  languages: string[];
  image: string[];
  github?: string;
  live?: string;
  description: string;
  collaboration?: string;
}

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(projects.map(p => p.category)));

  // Filter projects by selected category
  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  // Smooth scroll to section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <Navbar />
    <div className="relative px-6 md:px-10">

      {/* Header */}
      <div className="flex flex-col items-center mt-6 mb-6 text-center">
        <h1
          style={{ fontFamily: "Times New Roman, Times, serif", fontStyle: "italic" }}
          className="text-5xl md:text-7xl mb-4"
        >
          {t.projectsTitle}
        </h1>
        <p className="text-gray-500 max-w-2xl">
          {selectedCategory 
            ? language === 'en' 
              ? `Explore my ${selectedCategory.toLowerCase()} projects`
              : `ស្វែងរកគម្រោង${selectedCategory}របស់ខ្ញុំ`
            : t.projectsSubtitle
          }
        </p>
      </div>

      {/* Category List View */}
      {!selectedCategory ? (
        <div className="flex flex-col gap-10 px-4 md:px-20 mt-16 mb-20">
          {categories.map((category) => {
            const categoryProjects = projects.filter(p => p.category === category);
            return (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="group cursor-pointer border-b border-gray-200 dark:border-gray-800 pb-6 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl mb-2 group-hover:opacity-60 transition-opacity duration-200">
                      {category}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {categoryProjects.length} {categoryProjects.length === 1 ? t.project : t.projectsPlural}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-all duration-200 group-hover:translate-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {/* Floating Sidebar Menu - Only show when viewing projects */}
      <div
        className="fixed top-16 sm:top-20 left-2 sm:left-4 md:left-8 z-50"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="p-2 cursor-pointer rounded-md">
          <svg 
            className={`w-5 h-5 sm:w-6 sm:h-6 ${isOpen ? "text-black dark:text-white" : "text-gray-400"} transition-colors duration-200`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div
          className={`flex flex-col items-start mt-2 space-y-1 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {filteredProjects.map((project: Project) => (
            <button
              key={project.id}
              onClick={() => handleScroll(project.id)}
              className="text-sm text-left py-1 px-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200 flex justify-start"
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Back Button - Bottom left */}
      <div className="fixed bottom-8 left-2 sm:left-4 md:left-8 z-50">
        <button
          onClick={() => setSelectedCategory(null)}
          className="flex items-center gap-2 p-2 cursor-pointer rounded-md text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">{language === 'en' ? 'Back' : 'ត្រលប់'}</span>
        </button>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-20">
        {filteredProjects.map((project: Project) => (
          <div key={project.id} id={project.id} 
            className={project.id === "1" ? "flex flex-col lg:flex-row gap-4 px-4 md:px-20 mt-8 sm:mt-10 lg:mt-16" : "flex flex-col lg:flex-row gap-4 px-4 md:px-20 mt-16 sm:mt-20 lg:mt-36"}
          >
            {/* Title */}
            <div className="flex-1">
              <p className="text-3xl md:text-5xl mb-4">{project.title}</p>
            </div>

            {/* Details */}
            <div className="flex-1 lg:flex-[3] flex flex-col gap-4">
              <ImageCarousel images={project.image} />
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col flex-1 text-sm gap-3">
                  <div>
                    <p><span className="text-gray-500">TYPE</span> {project.type}</p>
                    <p><span className="text-gray-500">TECH STACK</span> {project.languages.join(", ")}</p>
                  </div>
                  <div className="text-left flex flex-col items-start">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline">
                        Github Repository
                      </a>
                    )}
                    { project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="underline">
                        Live
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex-[2]">
                  <p>{project.description}</p>
                </div>
              </div>
              { project.collaboration && <p className="text-sm text-gray-400">{project.collaboration}</p>}
            </div>
          </div>
        ))}
      </div>
        </>
      )}

    </div>
    <Footer />
    </>
  );
}

export default Projects;