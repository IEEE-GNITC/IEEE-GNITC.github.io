import React from "react";
import { motion } from "framer-motion";

const societies = [
  {
    name: "Team 2024",
    extraTitle: "TEAM IEEE",
    members: [
      { name: "Kasireddy Chandukiran Reddy", role: "CSM", description: "Chair" },
      { name: "Aakansha", role: "EEE", description: "Chair" },
      { name: "Mohammed Abdul Rahman", role: "CSE", description: "Vice Chair" },
      { name: "C Likitha Sai", role: "ECE", description: "Vice Chair" },
      { name: "Mohammed Raziullah Riyan", role: "AIDS", description: "Secretary" },
      { name: "Nekkanti Yashaswini", role: "CSE", description: "Secretary" },
      { name: "Kakumai Ruthvik Reddy", role: "CSM", description: "Treasury" },
      { name: "Azra Fatima", role: "CSE", description: "Treasury" },
      { name: "Kevin Paul", role: "CSM", description: "Web Master" },
      { name: "krish", role: "CSE", description: "Web Master" },
      { name: "V. Sumidha", role: "CSE", description: "Design" },
      { name: "Krishanu Chaudary", role: "", description: "Design" },
      { name: "Adari Prajna", role: "ECE", description: "Organizing Lead" },
      { name: "K. Ravi Teja", role: "CSE", description: "Organizing Lead" },
      { name: "Mohitha Vinnakota", role: "IT", description: "PR" },
      { name: "Shaik Mohemmad Ibraheem", role: "", description: "PR" },
      { name: "Enumula Uma Maheswari", role: "", description: "Student Representative" },
      { name: "Somraj Tejavat", role: "", description: "Student Representative" },
      { name: "D Naga Sree Laxmi", role: "", description: "Student Representative" },
      { name: "Bijjala Shiva Shankar", role: "IT", description: "Publicity and Marketing" },
      { name: "Ponnam Yashwanth", role: "CSE", description: "Publicity and Marketing" },
      { name: "Simran ", role: "", description: "Publicity and Marketing" },
      { name: "C. Jatin", role: "CSE", description: "Social Media" },
      { name: "Enugu Karthik Reddy", role: "CSM", description: "Social Media" },
    ],
  },
  {
    name: "CS Society",
    members: [
      { name: "Pranav Vojjala", role: "CSE", description: "Chair" },
      { name: "G. Ajitha Reddy", role: "", description: "Vice Chair" },
      { name: "P. Shivasai Karthikeya", role: "", description: "Treasury" },
      { name: "Nalla Nikhil", role: "", description: "Secretary" },
      { name: "Nishat Virdi", role: "", description: "Webmaster" },
    ],
  },
  {
    name: "Com Soc Society",
    members: [{ name: "Imran Ali", role: "", description: "Chair" }],
  },
  {
    name: "CAS Society",
    members: [{ name: "Karthikeya", role: "", description: "Chair" }],
  },
  {
    name: "SMC Society",
    members: [
      { name: "Manzoor", role: "CS AND DS", description: "Chair" },
      { name: "N Shoumik Reddy", role: "", description: "Vice Chair" },
      { name: "Jayanth", role: "", description: "Secretary" },
      { name: "Uma Santhoshi", role: "", description: "Webmaster" },
    ],
  },
  {
    name: "PEC Society",
    members: [{ name: "K. Rishi", role: "", description: "Chair" }],
  },
];

export default function PreviousTeam() {
  return (
    <div className="min-h-screen bg-transparent text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-md"
        >
          Previous Teams
        </motion.h1>

        {societies.map((society, index) => (
          <div key={index} className="mb-20">
            {/* Society Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-center mb-2 text-white"
            >
              {society.name}
            </motion.h2>

            {/* Optional Subtitle */}
            {society.extraTitle && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center text-lg text-white font-medium mb-8"
              >
                {society.extraTitle}
              </motion.p>
            )}

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {society.members.map((member, idx) => {
                const initials = member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase();

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,255,255,0.3)]"
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 text-white text-xl font-bold shadow-md mb-4">
                      {initials}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      {member.role && (
                        <p className="text-sm text-cyan-300 font-medium">{member.role}</p>
                      )}
                      <p className="text-sm text-gray-300 mt-1">{member.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
