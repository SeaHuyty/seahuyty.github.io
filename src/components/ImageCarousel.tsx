import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[550px]">
      {/* Image */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-60 sm:h-80 md:h-96 lg:h-[550px] object-cover select-none"
      />

      {/* Show navigation only if more than one image */}
      {images.length > 1 && (
        <>
          {/* Left zone with custom cursor */}
          <div
            onClick={prevSlide}
            className="absolute top-0 left-0 h-full w-1/2"
            style={{ cursor: "url('/left-arrow.png'), auto" }}
          />

          {/* Right zone with custom cursor */}
          <div
            onClick={nextSlide}
            className="absolute top-0 right-0 h-full w-1/2"
            style={{ cursor: "url('/right-arrow.png'), auto" }}
          />
        </>
      )}
    </div>
  );
}

export default ImageCarousel;