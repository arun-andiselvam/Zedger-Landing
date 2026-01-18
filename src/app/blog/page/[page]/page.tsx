import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import { getAllPosts } from "@/lib/blog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 9;

interface Props {
  params: Promise<{ page: string }>;
}

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  // Generate pages 2 onwards (page 1 is /blog)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog - Page ${page} | Zedger`,
    description: `Read the latest articles on managing shared expenses - Page ${page}`,
  };
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page } = await params;
  const currentPage = Number(page);
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  // Redirect to main blog if page 1 or invalid
  if (currentPage < 2 || currentPage > totalPages) {
    notFound();
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SubHeroSection
        title="Blog"
        subtitle="Tips, insights, and guides for managing shared expenses effectively."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-coca-gray-light rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.coverImage && (
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {post.authorImage && (
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      )}
                      <span className="text-xs text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    <time className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav className="flex items-center justify-center gap-2 mt-12">
            {/* Previous */}
            <Link
              href={currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground bg-coca-gray-light rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              <Link
                href="/blog"
                className="w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg bg-coca-gray-light text-foreground hover:bg-gray-200 transition-colors"
              >
                1
              </Link>
              {Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((page) => (
                <Link
                  key={page}
                  href={`/blog/page/${page}`}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-colors ${
                    page === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "bg-coca-gray-light text-foreground hover:bg-gray-200"
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>

            {/* Next */}
            {currentPage < totalPages ? (
              <Link
                href={`/blog/page/${currentPage + 1}`}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground bg-coca-gray-light rounded-lg hover:bg-gray-200 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground bg-coca-gray-light rounded-lg opacity-50 cursor-not-allowed">
                Next
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </nav>

          {/* Post count */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Showing {startIndex + 1}-{Math.min(startIndex + POSTS_PER_PAGE, allPosts.length)} of {allPosts.length} posts
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
