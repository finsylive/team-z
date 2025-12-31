"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-[1200px] pb-20 mx-auto px-4">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-[3rem] font-semibold tracking-[-1px] max-md:text-[2rem]">
          Best Projects
        </h2>
        <Link
          href="/projects"
          className="text-[#1a1a1a] font-medium border-b border-[#1a1a1a] pb-[2px] hover:opacity-70 transition-opacity"
        >
          See all projects
        </Link>
      </div>

      <div className="flex overflow-x-auto gap-[30px] pb-10 -mx-4 px-4 scrollbar-hide snap-x">
        {projects.map((project, index) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`} 
            className="block h-full min-w-[600px] max-md:min-w-[85vw] snap-center"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[30px] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2 group h-full"
            >
              <div className="w-full h-[350px] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-[30px]">
                <div className="flex gap-[10px] mb-[15px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#f0f0f0] px-[14px] py-[6px] rounded-[20px] text-[0.8rem] font-medium text-[#555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[1.8rem] font-semibold mb-[10px]">
                  {project.title}
                </h3>
                <p className="text-[#666] leading-[1.5]">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
