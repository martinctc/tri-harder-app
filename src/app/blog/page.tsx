import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Training tips, app updates, and triathlon coaching insights from the TRI-HARDER team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Blog
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white">
            Training insights &amp; updates
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Triathlon coaching tips, training science explainers, and TRI-HARDER
            product updates.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-slate-500">No posts yet — check back soon!</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                readingTime={post.readingTime}
                tags={post.tags}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
