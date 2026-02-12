import type { Metadata } from "next";
import { getAllPosts } from "@/../lib/blog";
import PostCard from "@/../components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog — New Plains LLC",
  description:
    "Updates, insights, and stories from New Plains LLC — an AI innovation studio building practical tools for everyday workflows.",
  openGraph: {
    title: "Blog — New Plains LLC",
    description:
      "Updates, insights, and stories from New Plains LLC.",
    url: "https://newplains.dev/blog",
    siteName: "New Plains LLC",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="font-heading text-4xl font-bold text-brand-charcoal sm:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-lg text-brand-charcoal/60">
            Updates, insights, and stories from the New Plains studio.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-brand-charcoal/50">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.frontmatter.excerpt}
                author={post.frontmatter.author}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
