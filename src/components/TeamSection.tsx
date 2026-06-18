"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  experience?: string;
  almaMater?: string;
  image: string;
  // Optional per-photo zoom/crop so framing matches the rest of the row.
  imgClass?: string;
};

const teamMembers: TeamMember[] = [
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
  {
    id: 5,
    name: "Shrishti",
    role: "Web Developer",
    experience: "2 Years Experience",
    image: "/images/team/shrishti-profile.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="mx-auto w-full max-w-[1240px] px-4 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-[3rem] font-semibold tracking-[-1px] max-md:text-[2rem]">
          Our{" "}
          <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            Team
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-5 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-[30px] bg-white p-5 text-center transition-transform duration-300 hover:-translate-y-[5px]"
          >
            <div className="relative mb-5 h-[300px] w-full overflow-hidden rounded-[20px] bg-[#eee]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className={`object-cover ${member.imgClass ?? ""}`}
                priority={index < 3}
                unoptimized
              />
            </div>
            <h3 className="mb-[5px] text-[1.5rem] font-semibold text-[#1a1a1a]">
              {member.name}
            </h3>
            <p className="mb-1 text-[1rem] font-medium text-[#00A368]">
              {member.role}
            </p>
            {member.experience && (
              <p className="text-[0.9rem] text-[#666]">{member.experience}</p>
            )}
            {member.almaMater && (
              <p className="mt-2 text-[0.85rem] font-medium uppercase tracking-wide text-[#888]">
                {member.almaMater}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
