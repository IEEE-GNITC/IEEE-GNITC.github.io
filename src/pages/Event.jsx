import React from 'react';
import Card from '../components/EventCard';

const Event = () => {
  const cardsData = [
    {
      imgSrc: 'path-to-image-1.jpg',
      title: 'IEEE TechEthics',
      description: 'Exploring the Ethical and Societal implications of Technology....',
    },
    {
      imgSrc: 'path-to-image-2.jpg',
      title: 'Annual Conference',
      description: 'Annual day conference of the Indian Electronics Society .....',
    },
    {
      imgSrc: 'path-to-image-1.jpg',
      title: 'IEEE TechEthics',
      description: 'Exploring the Ethical and Societal implications of Technology....',
    },
    {
      imgSrc: 'path-to-image-2.jpg',
      title: 'Annual Conference',
      description: 'Annual day conference of the Indian Electronics Society .....',
    },
    
  ];

  return (
    <div className="container mx-auto my-20  border-b p-4" id='Events'>
        <span className="flex my-10  justify-center items-center md:text-5xl text-4xl font-bold">Events</span>
   
        <div className="flex flex-row gap-x-64 gap-y-12 flex-wrap items-center justify-center ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
 
        </div>
        <div className=" md:text-2xl text-xl flex font-bold justify-end text-emerald-600"> <a href="">View All</a></div>
    </div>
  );
};

export default Event;
