import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import IEEE from "../assets/IEEE.png";
import computer_society from "../assets/computer_society.png";
import ieeecis from "../assets/ieeecis.jpg";
import ieeepes from "../assets/ieeepes.jpg";
import ieeesmc from "../assets/ieeesmc.jpg";
import communication_society from "../assets/communication_society.png";
import circuits_and_systems_society from "../assets/circuits_and_systems_society.png";

function FutureEventTimeLine() {
  return (
    <div id="events">
      <div className="overflow-hidden px-4 sm:px-8">
        <div className="eventsbg mt-24 my-48 w-full">
          <VerticalTimeline lineColor="#2196f3">
            {[
              {
                date: "25/05/2024",
                title: "Virtual Vista -1.0",
                subtitle: "IGNITE YOUR INTELLIGENCE - Computer Society",
                icon: computer_society,
              },
              {
                date: "13-6-2024",
                title: "TECH IGNITION - 1.0",
                subtitle: "IEEE Student Branch Inauguration",
                icon: IEEE,
              },
              {
                date: "14/09/2024",
                title: "ENGINEER'S DAY",
                subtitle: "IEEE STUDENT BRANCH",
                icon: IEEE,
              },
              {
                date: "28-09-2025",
                title: "IEEE DAY",
                subtitle: "Organized By - IEEE STUDENT BRANCH",
                icon: IEEE,
              },
              {
                date: "21/11/2024",
                title: "HACK ARENA",
                subtitle: "Elevating Ideas Empowering Futures",
                icon: IEEE,
              },
              {
                date: "21-04-2025",
                title: "CLOUD MASTERY BOOTCAMP",
                subtitle: "Elevate Your Skills - Computer Society",
                icon: computer_society,
              },
              {
                date: "08/02/2025",
                title: "TECH X - THE CODING BATTLE",
                subtitle: "SYSTEMS MAN AND CYBERNETICS SOCIETY",
                icon: ieeesmc,
              },
              {
                date: "14-02-2024",
                title: "Cyber Ninja",
                subtitle: "Ignite your intelligence - Computer Society",
                icon: computer_society,
              },
              {
                date: "29/03/2025",
                title: "INAUGURATION OF IEEE-PES",
                subtitle: "By Power & Energy Society",
                icon: ieeepes,
              },
              {
                date: "22-04-2024",
                title: "IEEE PES Day Celebrations",
                subtitle: "By Power & Energy Society",
                icon: ieeepes,
              },
              {
                date: "03/05/2025",
                title: "Virtual Vista 2.0",
                subtitle: "By Computer Society",
                icon: computer_society,
              },
              {
                date: "13-06-2025",
                title: "Project Expo",
                subtitle: "By Power & Energy Society",
                icon: ieeepes,
              },
            ].map((event, index) => (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--${
                  index % 2 === 0 ? "right" : "left"
                }`}
                contentStyle={{
                  background: index % 2 === 0 ? "rgb(33, 150, 243)" : "rgb(33,243,150)",
                  color: "#fff",
                  padding: "20px",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(33, 150, 243)",
                }}
                date={event.date}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  overflow: "hidden",
                  padding: "2px",
                }}
                icon={
                  <img
                    src={event.icon}
                    alt={event.title}
                    className="rounded-full w-full h-full object-cover"
                  />
                }
              >
                <h3 className="vertical-timeline-element-title text-base sm:text-lg font-semibold">
                  {event.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle text-sm sm:text-base">
                  {event.subtitle}
                </h5>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default FutureEventTimeLine;
