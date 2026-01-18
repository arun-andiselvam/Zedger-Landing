import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage?: string;
  coverImage?: string;
  tags: string[];
  category: string;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage?: string;
  coverImage?: string;
  tags: string[];
  category: string;
  readingTime: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || 'Zedger Team',
        authorImage: data.authorImage || '/images/logo.png',
        coverImage: data.coverImage || null,
        tags: data.tags || [],
        category: data.category || 'General',
        readingTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Zedger Team',
    authorImage: data.authorImage || '/images/logo.png',
    coverImage: data.coverImage || null,
    tags: data.tags || [],
    category: data.category || 'General',
    readingTime: stats.text,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPostMeta[] {
  const allPosts = getAllPosts();

  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit);
}
