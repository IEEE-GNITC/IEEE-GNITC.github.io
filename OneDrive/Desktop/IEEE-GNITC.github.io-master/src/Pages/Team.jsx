import React, { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import MemItem from '@/components/Items/MemItem';
import TeamInfoGNITC from '@/info/teaminfognitc';
import TeamInfoGNIT from '@/info/teaminfognit';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState('GNITC');

  const plugin = useRef(
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
            }, 3000);
          }
        });
      }
    )
  );

  const renderCarousel = (dataArray) => (
    <Carousel opts={{ align: 'start', loop: false }} plugins={[plugin.current]}>
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
    <div id="team">
      <div className="faclty mt-0 w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-10 pb-6"> {/* Reduced bottom padding */}
        {/* Toggle Buttons */}
        <div className="flex gap-4 justify-center mb-6"> {/* Reduced bottom margin */}
          <button
            onClick={() => setSelectedTeam('GNITC')}
            className={`px-6 py-2 rounded-xl font-semibold border ${
              selectedTeam === 'GNITC'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600'
            }`}
          >
            GNITC
          </button>
          <button
            onClick={() => setSelectedTeam('GNIT')}
            className={`px-6 py-2 rounded-xl font-semibold border ${
              selectedTeam === 'GNIT'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600'
            }`}
          >
            GNIT
          </button>
        </div>

        {/* GNITC Carousel */}
        {selectedTeam === 'GNITC' && (
          <>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4 mb-4 text-left ml-4">
              TEAM - GNITC
            </h2>
            <div className="memcard overflow-hidden mb-4"> {/* Reduced from mb-6 */}
              {renderCarousel(TeamInfoGNITC)}
            </div>
          </>
        )}

        {/* GNIT Carousel */}
        {selectedTeam === 'GNIT' && (
          <>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4 mb-4 text-left ml-4">
              TEAM - GNIT
            </h2>
            <div className="memcard overflow-hidden mb-4"> {/* Reduced from mb-6 */}
              {renderCarousel(TeamInfoGNIT)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Team;
