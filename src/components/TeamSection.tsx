"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Ayushman Singh",
    role: "Frontend Web Developer",
    experience: "2 Years Experience",
    almaMater: "IIT Madras",
    image: "/images/team/ayushman-profile.jpeg",
  },
  {
    id: 2,
    name: "Rajkamal",
    role: "Backend & Cloud Engineer",
    experience: "2 Years Experience",
    almaMater: "IIT Madras",
    image: "/images/team/rajkamal-profile.jpeg",
  },
  {
    id: 3,
    name: "Shiryash",
    role: "App Developer",
    experience: "3 Years Experience",
    almaMater: "IIT Madras",
    image: "/images/team/shiryash-profile.jpeg",
  },
  {
    id: 4,
    name: "Naveen",
    role: "UI/UX Designer",
    experience: "2 Years Experience",
    almaMater: "IIT Madras",
    image: "/images/team/Naveen-profile.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full max-w-[1200px] py-20 mx-auto px-4">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-[3rem] font-semibold tracking-[-1px] max-md:text-[2rem]">
          Our Team
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-[30px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-[30px] text-center transition-transform duration-300 hover:-translate-y-[5px]"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden mb-5 bg-[#eee]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority={index < 3}
              />
            </div>
            <h3 className="text-[1.5rem] font-semibold mb-[5px] text-[#1a1a1a]">
              {member.name}
            </h3>
            <p className="text-[1rem] font-medium text-[#a8f348] mb-1">{member.role}</p>
            <p className="text-[0.9rem] text-[#666]">{member.experience}</p>
            <p className="text-[0.85rem] text-[#888] mt-2 font-medium uppercase tracking-wide">{member.almaMater}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}