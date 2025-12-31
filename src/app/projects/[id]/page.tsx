import { projects } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-[120px] pb-20 px-4">
      <article className="max-w-[800px] mx-auto">
        <div className="mb-10">
          <span className="text-[#666] mb-4 block">Project Case Study</span>
          <h1 className="text-[3rem] font-semibold leading-[1.2] mb-6">
            {project.title}
          </h1>
          <div className="flex gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#f0f0f0] px-4 py-2 rounded-full text-sm font-medium text-[#555]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-[400px] relative rounded-[30px] overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#666] mb-8 leading-relaxed">
            {project.description}
          </p>
          <div className="text-[#333] leading-relaxed whitespace-pre-line">
            {project.content}
          </div>
        </div>
      </article>
    </main>
  );
}
