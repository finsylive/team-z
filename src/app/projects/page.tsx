"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-20 px-4 max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-[3.5rem] font-semibold leading-[1.1] mb-6">
          Our Projects
        </h1>
        <p className="text-xl text-[#666] leading-relaxed max-w-[800px]">
          We build digital products that help businesses grow. Here are some of our best works.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        {projects.map((project, index) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
    </main>
  );
}
