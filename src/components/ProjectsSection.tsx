import { useState } from "react";

import ImageCarousel from "./ImageCarousel";
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

function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  // Get unique categories
  const categories = Array.from(new Set(projects.map(p => p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter projects by selected category
  const filteredProjects = projects.filter(p => p.category === selectedCategory) as Project[];
  const project = filteredProjects[currentIndex];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  return (
    <div id="projects" className="relative">

      {/* Header */}
      <div className="flex flex-col items-start mt-6 mb-6 text-left">
        <h3 className="text-lg sm:text-xl font-bold mb-4">
          {t.projectsTitle}
        </h3>
        <p className="text-base sm:text-md leading-relaxed">
          {t.projectsSubtitle}
        </p>
      </div>

      {/* Category Toggle */}
      <div className="flex justify-start gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 ${
              selectedCategory === category
                ? "text-black dark:text-white"
                : "text-gray-500 hover:text-black dark:hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Section */}
      {project && (
        <div id={project.id} className="flex flex-col lg:flex-row gap-4 mt-8 sm:mt-10 lg:mt-16">
          {/* Title */}
          <div className="flex-1">
            <p className="text-3xl md:text-5xl mb-4">{project.title}</p>
          </div>

          {/* Details */}
          <div className="flex-1 lg:flex-[3] flex flex-col gap-4">
            <ImageCarousel images={project.image} />
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-[2]">
                <p>{project.description}</p>
              </div>
            </div>
            { project.collaboration && <p className="text-sm text-gray-400">{project.collaboration}</p>}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div className="flex justify-end gap-2 mt-10 mb-4">
        <button
          onClick={() => setCurrentIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length)}
          aria-label={language === 'en' ? 'Previous project' : 'គម្រោងមុន'}
          className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((i) => (i + 1) % filteredProjects.length)}
          aria-label={language === 'en' ? 'Next project' : 'គម្រោងបន្ទាប់'}
          className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}

export default ProjectsSection;
