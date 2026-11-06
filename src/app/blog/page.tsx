import { Metadata } from "next";
import BlogList from "@/components/blog-list";

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
    url: "https://www.tryzedger.com/blog",
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
    canonical: "https://www.tryzedger.com/blog",
  },
};

export default function BlogPage() {
  return <BlogList page={1} />;
}
