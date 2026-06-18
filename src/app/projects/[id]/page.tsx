import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/lib/data";
import { SITE_URL, breadcrumbLd, jsonLdScript } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const clean = (s: string) => s.replace(/\*\*/g, "").replace(/^\*\s*/, "");

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return { title: "Project not found" };

  const cover = (project as { cover?: string }).cover ?? project.image;
  return {
    title: `${project.title}: ${project.tags.slice(0, 2).join(" & ")} Case Study`,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      type: "article",
      title: `${project.title} | TEAMZ Case Study`,
      description: project.description,
      url: `/projects/${project.id}`,
      images: cover ? [cover] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | TEAMZ Case Study`,
      description: project.description,
      images: cover ? [cover] : undefined,
    },
  };
}

function CaseStudyBody({ content }: { content: string }) {
  const blocks = content
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
  // First block is "Case Study: Title \n tagline" — already shown in the header.
  const sections = blocks.slice(1);

  return (
    <div className="mt-14 flex flex-col gap-12 max-md:mt-10 max-md:gap-10">
      {sections.map((block, i) => {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        const heading = lines[0];
        const body = lines.slice(1);

        if (/one-line takeaway/i.test(heading)) {
          return (
            <div
              key={i}
              className="rounded-[20px] border border-[#00DD88]/30 bg-[#00DD88]/[0.06] p-8 max-md:p-6"
            >
              <div className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
                Takeaway
              </div>
              <p className="text-[1.3rem] font-medium leading-[1.4] tracking-[-0.3px] text-[#1a1a1a] max-md:text-[1.1rem]">
                {clean(body.join(" "))}
              </p>
            </div>
          );
        }

        const match = heading.match(/^(\d+)\.\s*(.*)/);

        return (
          <div key={i}>
            <h2 className="mb-4 flex items-baseline gap-3 text-[1.55rem] font-semibold leading-[1.2] tracking-[-0.5px] text-[#1a1a1a] max-md:text-[1.3rem]">
              {match && (
                <span className="text-[1.05rem] font-semibold text-[#00A368]">
                  0{match[1]}
                </span>
              )}
              <span>{match ? match[2] : clean(heading)}</span>
            </h2>
            <div className="flex flex-col gap-3 text-[1.05rem] leading-[1.75] text-[#555] max-md:text-base">
              {body.map((line, j) => (
                <p key={j}>{clean(line)}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  // Detail page uses the full-frame original poster (cover) when available,
  // since the card scenes (…1.png) have empty copy-space on one side.
  const cover = (project as { cover?: string }).cover ?? project.image;

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} case study`,
    description: project.description,
    url: `${SITE_URL}/projects/${project.id}`,
    image: cover ? `${SITE_URL}${cover}` : undefined,
    keywords: project.tags.join(", "),
    creator: { "@id": `${SITE_URL}/#organization` },
    provider: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <main className="min-h-screen px-5 pb-24 pt-[130px] max-md:px-4 max-md:pt-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(projectLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/projects" },
            { name: project.title, path: `/projects/${project.id}` },
          ]),
        )}
      />
      <article className="mx-auto max-w-[860px]">
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center gap-2 text-[0.92rem] font-medium text-[#666] transition-colors hover:text-[#1a1a1a]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to work
        </Link>

        <div className="mb-9">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
              Project Case Study
            </span>
          </div>
          <h1 className="mb-6 text-[3rem] font-semibold leading-[1.05] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.2rem]">
            {project.title}
          </h1>
          <p className="mb-7 max-w-[600px] text-[1.2rem] leading-[1.5] text-[#666] max-md:text-[1.05rem]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#00DD88]/40 bg-[#00DD88]/10 px-4 py-2 text-sm font-medium text-[#00A368]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {cover ? (
          <div className="w-full overflow-hidden rounded-[24px] bg-[#0a0b0d]">
            <Image
              src={cover}
              alt={project.title}
              width={1600}
              height={1000}
              sizes="(max-width: 900px) 100vw, 860px"
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
        ) : (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-[#0a0b0d]">
            <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00DD88]/14 blur-[90px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-[0.8rem] font-medium text-white/55">
                Preview coming soon
              </span>
            </div>
          </div>
        )}

        <CaseStudyBody content={project.content} />
      </article>
    </main>
  );
}
