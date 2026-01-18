import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import { getAllPosts } from "@/lib/blog";
import Script from "next/script";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Tips & Insights for Managing Shared Expenses",
  description:
    "Read the latest articles on managing shared expenses, family budgeting, trip expense tracking, and personal finance tips from the Zedger team.",
  keywords: [
    "expense management blog",
    "shared expenses tips",
    "family budget advice",
    "personal finance blog",
    "money management tips",
    "expense tracking guide",
  ],
  openGraph: {
    title: "Blog - Tips & Insights for Managing Shared Expenses | Zedger",
    description:
      "Read the latest articles on managing shared expenses and personal finance tips.",
    url: "https://tryzedger.com/blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zedger Blog",
      },
    ],
  },
  twitter: {
    title: "Blog - Tips & Insights | Zedger",
    description:
      "Read the latest articles on managing shared expenses and personal finance tips.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tryzedger.com/blog",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Zedger Blog",
  description: "Tips and insights for managing shared expenses",
  url: "https://tryzedger.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Zedger",
    logo: {
      "@type": "ImageObject",
      url: "https://tryzedger.com/images/logo.png",
    },
  },
};

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const posts = allPosts.slice(0, POSTS_PER_PAGE);

  return (
    <main className="min-h-screen overflow-hidden">
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header />
      <SubHeroSection
        title="Blog"
        subtitle="Tips, insights, and guides for managing shared expenses effectively."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <>
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
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-2 mt-12">
                  {/* Previous - disabled on page 1 */}
                  <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground bg-coca-gray-light rounded-lg opacity-50 cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </span>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    <span className="w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg bg-primary text-primary-foreground">
                      1
                    </span>
                    {Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((page) => (
                      <Link
                        key={page}
                        href={`/blog/page/${page}`}
                        className="w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg bg-coca-gray-light text-foreground hover:bg-gray-200 transition-colors"
                      >
                        {page}
                      </Link>
                    ))}
                  </div>

                  {/* Next */}
                  {totalPages > 1 ? (
                    <Link
                      href="/blog/page/2"
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
              )}

              {/* Post count */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Showing 1-{Math.min(POSTS_PER_PAGE, allPosts.length)} of {allPosts.length} posts
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
