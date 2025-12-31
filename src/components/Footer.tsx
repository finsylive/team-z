"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "mailto:teamzments@gmail.com" },
    { label: "News", href: "/#mini-blogs" },
  ],
  services: [
    { label: "App Development", href: "/#services" },
    { label: "Product Design and Branding", href: "/#services" },
    { label: "Web Development", href: "/#services" },
    { label: "Digital Marketing", href: "/#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white rounded-t-[40px] pt-20 pb-10 px-[60px] mt-10 max-md:px-5 max-md:rounded-t-[20px] max-md:pt-10">
      <div className="max-w-[1200px] mx-auto flex justify-between items-start flex-wrap gap-10 max-md:flex-col">
        <div>
          <div className="relative w-[150px] h-[50px] mb-8">
            <Image 
              src="/images/teamz-dark-logo-transparent.png" 
              alt="TEAMZ" 
              fill 
              className="object-contain object-left" 
            />
          </div>
          <h2 className="text-[3rem] leading-[1.1] mb-[30px] font-semibold max-md:text-[2rem]">
            Let&apos;s discuss
            <br />
            your project.
          </h2>
          <Link
            href="mailto:teamzments@gmail.com"
            className="inline-block bg-[#a8f348] text-[#1a1a1a] px-8 py-4 rounded-[30px] font-semibold transition-transform duration-200 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex gap-[60px] max-md:flex-col max-md:gap-[30px]">
          <div>
            <h4 className="text-[#888] mb-5 font-medium text-[0.9rem] uppercase tracking-[1px]">
              Company
            </h4>
            <ul className="list-none">
              {footerLinks.company.map((link) => (
                <li key={link.label} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-white text-base transition-colors duration-200 hover:text-[#a8f348]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#888] mb-5 font-medium text-[0.9rem] uppercase tracking-[1px]">
              Services
            </h4>
            <ul className="list-none">
              {footerLinks.services.map((link) => (
                <li key={link.label} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-white text-base transition-colors duration-200 hover:text-[#a8f348]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-[60px] pt-[30px] border-t border-white/10 flex justify-between items-center text-[#666] text-[0.9rem] max-md:flex-col max-md:gap-4 max-md:text-center">
        <div>
          <p>&copy; 2025 TEAMZ Agency. All rights reserved.</p>
          <p className="mt-1">A subsidiary of <Link href="https://ments.app" className="hover:text-white transition-colors">Ments (ments.app)</Link></p>
        </div>
        <p>Privacy Policy &bull; Terms of Service</p>
      </div>
    </footer>
  );
}