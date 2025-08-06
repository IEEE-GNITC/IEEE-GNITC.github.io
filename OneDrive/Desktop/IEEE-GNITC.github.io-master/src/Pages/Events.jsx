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
    <div
      id="events"
      className="px-4 py-12 backdrop-blur-lg bg-black/30 text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-8 animate-fadeIn">
        <h2 className="text-5xl md:text-6xl font-extrabold transition-all duration-700 animate-pulse hover:scale-105">
          🎉 Events
        </h2>
        <p className="text-lg md:text-xl text-white/80 mt-2 animate-fadeInUp">
          📅 2024
        </p>
      </div>

      {/* First Carousel + Text Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center animate-slideIn">
        {/* Carousel */}
        <div className="w-full md:w-3/5 flex justify-center">
          <div className="w-full border border-white/20 backdrop-blur-lg rounded-3xl p-4 bg-gradient-to-br from-white/10 to-black/30 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <Carousel
              className="w-full"
              opts={{ align: "center", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {moreInfo1.map((data, index) => (
                  <CarouselItem
                    className="basis-full px-2 flex justify-center"
                    key={index}
                  >
                    <div
                      className="rounded-2xl overflow-hidden max-h-[450px] w-full md:w-[90%] transform transition-transform duration-700 hover:scale-105 animate-fadeInUp shadow-xl animate-fadeInUp animate-delay-500"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <EventImageItem1 img={data.img} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Text Info */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-white/10 to-black/30 text-white rounded-3xl p-6 shadow-2xl backdrop-blur-md max-h-[600px] overflow-y-auto transition-all duration-300 hover:scale-[1.02]">
          <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
            On June 5, 2024, the Valedictory Function was held, where cash prizes and certificates were awarded to the winners. The top prize of Rs. 21,100 was awarded to the team from Anurag University, Telangana, comprising P. Karthik Rao, B. Venu Gopal, P. Sahithi Reddy, and V. Charitha Reddy. The second prize of Rs. 11,100 went to the team from Rajalakshmi Engineering College, Tamil Nadu, including Shaun Orlando M, Shivani S. R., and Sarathi. The third prize of Rs. 5,500 was given to the team from Acropolis Institute of Technology and Research, Madhya Pradesh.
          </p>
          <h3 className="font-bold text-lg mb-2">Distinguished Guests:</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
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

      {/* Second Carousel */}
      <div className="mt-16 mb-10 animate-fadeInUp">
        <div className="w-full border border-white/20 backdrop-blur-md rounded-2xl p-3 bg-black/20 shadow-2xl transition-all duration-300 hover:scale-[1.01]">
          <Carousel
            className="w-full"
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent>
              {moreInfo2.map((data, index) => (
                <CarouselItem
                  className="basis-full md:basis-1/3 px-2"
                  key={index}
                >
                  <div className="rounded-xl overflow-hidden max-h-[450px] w-full transition-transform duration-500 hover:scale-105">
                    <EventImageItem2 img={data.img} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-10 animate-fadeIn">
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

          <div className="flex justify-between items-center mt-6">
            <CarouselPrevious className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 hover:scale-110 transition-transform" />
            <CarouselNext className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 hover:scale-110 transition-transform" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Events;