import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-[120px] pb-20 px-4">
      <article className="max-w-[800px] mx-auto">
        <div className="mb-10">
          <span className="text-[#666] mb-4 block uppercase tracking-[0.5px] font-medium">
            {post.date}
          </span>
          <h1 className="text-[3rem] font-semibold leading-[1.2] mb-8 text-[#1a1a1a]">
            {post.title}
          </h1>
        </div>

        <div className="w-full h-[400px] relative rounded-[30px] overflow-hidden mb-12 shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-[#333] leading-relaxed whitespace-pre-line text-lg">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  );
}
