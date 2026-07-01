import { useState, useEffect } from "react";
import { data } from "../assets/archive";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

// TypeScript interfaces
interface ImageData {
  url: string;
  alt: string;
}

interface ArchivePost {
  title: string;
  images: ImageData[];
  size: {
    width: number;
    height: number;
  };
}

interface HoverImageCollectionProps {
  images: ImageData[];
  size: {
    width: number;
    height: number;
  };
  onHover: (isHovering: boolean) => void;
  isMobile?: boolean;
}

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Parent container animation (controls stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // delay between each child
    },
  },
};

// Each child’s animation (title/image)
const itemVariants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const } },
};

function Archives() {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-6 lg:gap-10 mt-5 sm:mt-9 lg:mt-10">
        {/* Left column: Titles - hidden on mobile */}
        <motion.div 
          className="hidden lg:flex flex-col flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          <h1
            style={{ fontFamily: "Times New Roman, Times, serif", fontStyle: "italic" }}
            className="text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-10 lg:mb-15 text-black dark:text-white"
          >
            {t.archivesTitle}
          </h1>
          {data.map((post: ArchivePost, index: number) => (
            <motion.div key={index}
              variants={itemVariants}
            >
              <h2
                className={`mb-6 uppercase text-xs transition-colors duration-300 ${
                  hoveringIndex === index ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {post.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Single column with title and image together */}
        <div className="lg:hidden">
          <h1
            style={{ fontFamily: "Times New Roman, Times, serif", fontStyle: "italic" }}
            className="text-4xl sm:text-5xl mb-8 text-black dark:text-white"
          >
            {t.archivesTitle}
          </h1>
          <motion.div 
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            {data.map((post: ArchivePost, index: number) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3">
                <h2 className="uppercase text-xs text-gray-500 dark:text-gray-400">
                  {post.title}
                </h2>
                <HoverImageCollection
                  images={post.images}
                  size={post.size}
                  onHover={(isHovering) => setHoveringIndex(isHovering ? index : null)}
                  isMobile={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: 4-column staggered grid */}
        <motion.div 
          className="hidden lg:grid grid-cols-4 gap-x-6 gap-y-6 w-full justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          {data.map((post: ArchivePost, index: number) => {
            // Determine stagger: colIndex = index % 4
            const colIndex = index % 4;
            const staggerClass =
              colIndex === 0 || colIndex === 2 ? "mb-10" : "mt-14";

            return (
              <motion.div key={index} className={staggerClass} variants={itemVariants}>
                <HoverImageCollection
                  images={post.images}
                  size={post.size}
                  onHover={(isHovering) => setHoveringIndex(isHovering ? index : null)}
                  isMobile={false}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

/** Displays images in a collection with hover slideshow */
function HoverImageCollection({ images, size, onHover, isMobile = false }: HoverImageCollectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (hovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hovering, images.length]);

  const handleMouseEnter = () => {
    setHovering(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setCurrentIndex(0);
    onHover(false);
  };

  return (
    <div
      className={`overflow-hidden shadow-md dark:shadow-gray-800 ${isMobile ? 'w-full' : ''}`}
      style={isMobile ? { height: '250px' } : { width: `${size.width}px`, height: `${size.height}px` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
      />
    </div>
  );
}

export default Archives;