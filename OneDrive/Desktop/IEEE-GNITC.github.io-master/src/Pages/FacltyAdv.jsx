import React, { useRef } from 'react';
import MemItem from "@/components/Items/MemItem";
import FacultyInfoPrimary from "@/info/facultyinfoprimary";
import FacultyInfoSecondary from "@/info/facultyinfosecondary";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function FacltyAdv() {
  // Autoplay logic with reset-to-first behavior
  const createAutoplayPlugin = () =>
    Autoplay(
      {
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      },
      (embla) => {
        embla.on('select', () => {
          const lastIndex = embla.scrollSnapList().length - 1;
          if (embla.selectedScrollSnap() === lastIndex) {
            setTimeout(() => {
              embla.scrollTo(0);
            }, 3000); // Wait before resetting to first
          }
        });
      }
    );

  const renderCarousel = (dataArray) => (
    <Carousel
      opts={{ align: "start", loop: false }}
      plugins={[createAutoplayPlugin()]}
    >
      <CarouselContent className="-ml-2">
        {dataArray.map((data, index) => (
          <CarouselItem
            key={index}
            className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <MemItem
              memimg={data.img}
              memname={data.name}
              memrole={data.role}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );

  return (
    <div>
      <div id="advisors">
        <div className="faclty mt-8 w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-10 ml-1">

          {/* Heading - Faculty Coordinators */}
          <h2 className="text-white text-2xl md:text-3xl font-semibold mt-8 mb-6 text-left ml-9">
            Faculty Coordinators
          </h2>

          {/* Carousel – Primary Faculty */}
          <div className="memcard overflow-hidden mb-16">
            {renderCarousel(FacultyInfoPrimary)}
          </div>

          {/* Heading - Faculty Advisors */}
          <h2 className="text-white text-2xl md:text-3xl font-semibold mt-8 mb-6 text-left ml-9">
            Faculty Advisors
          </h2>

          {/* Carousel – Secondary Faculty */}
          <div className="memcard overflow-hidden mb-16">
            {renderCarousel(FacultyInfoSecondary)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacltyAdv;
