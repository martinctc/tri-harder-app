import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
}

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  readingTime: readTime,
  tags,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/40 hover:bg-slate-800/50"
    >
      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-600/10 px-2.5 py-0.5 text-xs text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-slate-400">{excerpt}</p>

      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {readTime}
        </span>
      </div>
    </Link>
  );
}
