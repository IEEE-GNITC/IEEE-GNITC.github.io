import React from "react";
import EventInfo, { moreInfo1, moreInfo2 } from "../info/events";
import Autoplay from "embla-carousel-autoplay";
import EventImageItem1 from "@/components/Items/EventImageItem1";
import EventImageItem2 from "@/components/Items/EventImageItem2";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CardItem from "@/components/Items/CardItem";

function Events() {
  return (
    <div id="events" className="px-4 py-8">
      <div className="h-full">
        {/* Header */}
        <div className="eventsbg w-full">
          <div className="flex justify-between items-center mt-10 md:mt-12 px-4 md:px-6">
            <div className="heading ml-4 md:ml-11 text-3xl md:text-5xl font-bold text-white">Events</div>
          </div>
        </div>

        {/* First Carousel and Info Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-10">
          {/* Carousel Side */}
          <div className="w-full md:w-3/5 flex justify-center md:justify-end px-4 md:px-0">
            <div className="memcard w-full md:w-[95%] border-4 border-white rounded-xl p-2 bg-gray-900">
              <Carousel
                className="w-full"
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 3000 })]}
              >
                <CarouselContent>
                  {moreInfo1.map((data, index) => (
                    <CarouselItem className="basis-full px-2 md:px-4" key={index}>
                      <div className="w-full flex justify-center md:justify-start">
                        <div className="rounded-xl overflow-hidden max-h-[300px] md:max-h-[450px] w-[90%] md:w-full">
                          <EventImageItem1 img={data.img} />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Text Side */}
          <div className="bg-slate-900 text-white p-4 md:p-6 rounded-2xl w-full md:w-2/5 max-h-[700px] overflow-y-auto text-center">
            <p className="mb-4 leading-relaxed text-justify text-sm md:text-base">
              On June 5, 2024, the Valedictory Function was held, where cash
              prizes and certificates were awarded to the winners. The top
              prize of Rs. 21,100 was awarded to the team from Anurag
              University, Telangana, comprising P. Karthik Rao, B. Venu Gopal,
              P. Sahithi Reddy, and V. Charitha Reddy. The second prize of Rs.
              11,100 went to the team from Rajalakshmi Engineering College,
              Tamil Nadu, including Shaun Orlando M, Shivani S. R., and Sarathi.
              The third prize of Rs. 5,500 was given to the team from Acropolis
              Institute of Technology and Research, Madhya Pradesh.
            </p>
            <div className="hidden md:block text-left">
              <h3 className="font-bold text-lg mb-2">
                The Valedictory Function featured several distinguished guests:
              </h3>
              <ul className="space-y-1 text-sm leading-relaxed">
                <li><strong>Chief Guest:</strong> Dr. Krithika Sutrave</li>
                <li><strong>Guest of Honor:</strong> Dr. Mousmi Ajay Chaurasia</li>
                <li>Dr. M.A. Jabbar</li>
                <li>Mr. G. Kapil Kumar</li>
                <li>Mr. U. Arjun</li>
                <li>Dr. K. Venkata Rao</li>
                <li>Dr. Rishi Sayal</li>
                <li>Dr. Harish Kundra</li>
                <li>Dr. Geeta Tripathi</li>
                <li>Dr. Ch Ravindra</li>
                <li>Support: Sardar Gagandeep Singh Kohli, Dr. H. S. Saini</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Carousel */}
        <div className="flex justify-center mt-14 mb-16">
          <div className="memcard w-full md:w-[90%] border-4 border-white rounded-xl p-2 bg-gray-900">
            <Carousel
              className="w-full"
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {moreInfo2.map((data, index) => (
                  <CarouselItem className="basis-full md:basis-1/3 px-2 md:pl-10" key={index}>
                    <div className="w-full flex justify-center md:justify-start">
                      <div className="rounded-xl overflow-hidden max-h-[300px] md:max-h-[450px] w-[90%] md:w-full">
                        <EventImageItem2 img={data.img} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Card Event Section */}
        <div className="cerodrag px-2 md:px-6 mb-10">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {EventInfo.map((eve) => (
                <CarouselItem className="m-2" key={eve.id}>
                  <CardItem
                    cardImg={eve.img}
                    cardContent={eve.content}
                    cardTitlee={eve.title}
                    cardLink={eve.link}
                    registerComponent={eve.register}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
              <div className="flex gap-4 md:gap-10">
                <CarouselPrevious />
                <CarouselNext />
              </div>
              <a href="/#/events" className="w-full md:w-auto">
                <button className="btn1 text-white border-2 rounded-xl text-lg w-full md:w-auto px-4 py-2">
                  View All
                </button>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
