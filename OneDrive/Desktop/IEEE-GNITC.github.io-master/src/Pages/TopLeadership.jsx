import React from 'react';
import MemItem from "@/components/Items/MemItem";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import leadersinfo from "@/info/leadersinfo";

function TopLeadership() {
  return (
    <div>
      <div className="min-h-screen" id="TopLeadership">
        <p>.</p>

        <div className="faclty mt-44 md:mt-8 w-full h-auto overflow-hidden">
          {/* Heading adjusted to the right */}
          <div className="heading text-lg ml-9 mt-8 ">Top Leadership</div>

          {/* Cards */}
          <div className="flex m-10 flex-col md:flex-row justify-between flex-wrap">
            {leadersinfo.map((data, index) => (
              <div className="m-5 mt-10" key={index}>
                <MemItem
                  memimg={data.img}
                  memname={data.name}
                  memrole={data.role}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLeadership;
