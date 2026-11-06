import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogList, { POSTS_PER_PAGE } from "@/components/blog-list";
import { getAllPosts } from "@/lib/blog";

const totalPages = () => Math.ceil(getAllPosts().length / POSTS_PER_PAGE);

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: Math.max(totalPages() - 1, 0) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export function generateMetadata({ params }: { params: { page: string } }): Metadata {
  return {
    title: `Blog - Page ${params.page} | Zedger`,
    description:
      "Read the latest articles on managing shared expenses, family budgeting, trip expense tracking, and personal finance tips from the Zedger team.",
    alternates: { canonical: `https://www.tryzedger.com/blog/page/${params.page}` },
  };
}

export default function BlogPageN({ params }: { params: { page: string } }) {
  const n = Number(params.page);
  if (!Number.isInteger(n) || n < 1 || n > totalPages()) notFound();
  if (n === 1) redirect("/blog");
  return <BlogList page={n} />;
}
