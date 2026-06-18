"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import GetStartedDialog from "@/components/GetStartedDialog";

export default function StartProjectButton({
  label = "Start a project",
  className = "group mt-7 inline-flex items-center gap-2 rounded-full bg-[#00DD88] px-7 py-3 font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5",
}: {
  label?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {label}
        <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <GetStartedDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
