import { NextResponse } from "next/server";
import { getAllPosts } from "@/../lib/blog";

const SITE_URL = "https://newplains.dev";
const SITE_NAME = "New Plains LLC";
const SITE_DESCRIPTION =
  "AI innovation studio building practical tools that bring the power of AI to everyday workflows.";

/**
 * Escape XML special characters in a string.
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Format a date string as RFC 2822 (e.g. "Mon, 08 Jun 2026 00:00:00 +0000").
 */
function formatRfc2822(dateStr: string): string {
  const date = new Date(dateStr);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const dayName = days[date.getUTCDay()];
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const mins = String(date.getUTCMinutes()).padStart(2, "0");
  const secs = String(date.getUTCSeconds()).padStart(2, "0");

  return `${dayName}, ${day} ${month} ${year} ${hours}:${mins}:${secs} +0000`;
}

export async function GET() {
  const posts = getAllPosts();

  const itemsXml = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.frontmatter.excerpt)}</description>
      <pubDate>${formatRfc2822(post.frontmatter.date)}</pubDate>
      <author>${escapeXml(post.frontmatter.author)}</author>
    </item>`
    )
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${formatRfc2822(new Date().toISOString())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml ? `\n${itemsXml}` : ""}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}