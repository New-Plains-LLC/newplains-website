import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export default function PostCard({
  slug,
  title,
  date,
  excerpt,
  author,
}: PostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="rounded-xl border border-brand-wheat-light/40 bg-brand-cream p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-copper/50">
        <time
          dateTime={date}
          className="text-sm font-medium text-brand-copper"
        >
          {formattedDate}
        </time>

        <h2 className="mt-2 font-heading text-xl font-semibold text-brand-charcoal group-hover:text-brand-copper transition-colors duration-300">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">
          {excerpt}
        </p>

        <p className="mt-4 text-xs text-brand-charcoal/50">By {author}</p>
      </article>
    </Link>
  );
}
