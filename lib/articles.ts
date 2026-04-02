import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type ArticleFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  featured?: boolean;
  coverImage?: string;
  tags?: string[];
};

export type Article = {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: string;
};

export type ArticleMeta = Omit<Article, "content">;

function ensureDir() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  }
}

export function getAllArticleSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getArticleBySlug(slug: string): Article | null {
  ensureDir();
  const mdxPath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const mdPath = path.join(ARTICLES_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
    readingTime: rt.text,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getAllArticleSlugs();
  return slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      if (!article) return null;
      const { content, ...meta } = article;
      void content;
      return meta;
    })
    .filter((a): a is ArticleMeta => a !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getFeaturedArticle(): ArticleMeta | null {
  const articles = getAllArticles();
  return articles.find((a) => a.frontmatter.featured) ?? articles[0] ?? null;
}

export function getRecentArticles(count = 6, excludeSlug?: string): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.slug !== excludeSlug)
    .slice(0, count);
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter(
    (a) => a.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

export const CATEGORIES = [
  "Business",
  "Creative",
  "Founders",
  "Artists",
  "Personal",
  "Interviews",
] as const;
