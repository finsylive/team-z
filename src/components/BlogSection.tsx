"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section id="mini-blogs" className="w-full max-w-[1200px] pb-20 mx-auto px-4">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-[3rem] font-semibold tracking-[-1px] max-md:text-[2rem]">
          Mini Blogs
        </h2>
        <Link
          href="#"
          className="text-[#1a1a1a] font-medium border-b border-[#1a1a1a] pb-[2px] hover:opacity-70 transition-opacity"
        >
          View all posts
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {blogPosts.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[30px] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2 group h-full"
            >
              <div className="h-[240px] overflow-hidden relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-[25px]">
                <span className="text-[0.85rem] text-[#888] mb-[10px] block uppercase tracking-[0.5px] font-medium">
                  {post.date}
                </span>
                <h3 className="text-[1.3rem] font-semibold mb-[15px] leading-[1.4] text-[#1a1a1a]">
                  {post.title}
                </h3>
                <span className="text-[0.9rem] font-semibold text-[#1a1a1a] inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#555] hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
