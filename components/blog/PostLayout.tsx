import Link from "next/link";

interface PostLayoutProps {
  title: string;
  date: string;
  author: string;
  children: React.ReactNode;
}

export default function PostLayout({
  title,
  date,
  author,
  children,
}: PostLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-copper hover:text-brand-copper-light transition-colors"
        >
          <span aria-hidden="true">&larr;</span> Back to Blog
        </Link>

        {/* Header */}
        <header className="mt-8 mb-10 border-b border-brand-wheat-light/40 pb-8">
          <h1 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-brand-charcoal/60">
            <time dateTime={date}>{formattedDate}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{author}</span>
          </div>
        </header>

        {/* MDX content */}
        <article className="prose prose-lg max-w-none text-brand-charcoal/90 prose-headings:font-heading prose-headings:text-brand-charcoal prose-a:text-brand-copper prose-a:underline-offset-2 hover:prose-a:text-brand-copper-light prose-strong:text-brand-charcoal prose-blockquote:border-l-brand-copper prose-blockquote:text-brand-charcoal/70">
          {children}
        </article>
      </div>
    </main>
  );
}
