import { content as blog1 } from '../content/20250731';
import { content as blog2 } from '../content/20250804';
import { content as blog3 } from '../content/20250812';
import { content as blog4 } from '../content/20250815';
import { content as blog5 } from '../content/20250830';
import { content as blog6 } from '../content/20250901';
import { Pi } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { ArrowLeftRight } from 'lucide-react';

const getWordCount = (text) => {
  if (!text) return 0;
  return text
    .replace(/[#_*`>~\-]/g, "") // strip simple markdown
    .trim()
    .split(/\s+/).length;
};


export const blogPosts = [
  {
    id: 1,
    title: "An interesting product",
    excerpt: "Special functions arise in special places",
    content: blog1,
    date: "2025-07-31",
    category: "Mathematics",
    slug: "interesting-product",
    image: Pi
  },
  {
    id: 2,
    title: "On emotivism and truth-aptness",
    excerpt: "Thoughts on ethical emotivism",
    content: blog2,
    date: "2025-08-04",
    category: "Philosophy",
    slug: "on-emotivism",
    image: ThumbsUp
  },
  {
    id: 3,
    title: "Kishore Mahbubani and political contrarianism",
    excerpt: "What is Singapore up to?",
    content: blog3,
    date: "2025-08-12",
    category: "Politics",
    slug: "kishore-mahbubani",
    image: ArrowLeftRight
  },
  // {
  //   id: 4,
  //   title: "Blog 4",
  //   excerpt: "4",
  //   content: blog4,
  //   date: "2025-08-15",
  //   category: "Quantitative Finance",
  //   slug: "building-scalable-apis-nodejs",
  //   image: "🚀"
  // },
  // {
  //   id: 5,
  //   title: "Blog5",
  //   excerpt: "5",
  //   content: blog5,
  //   date: "2025-08-30",
  //   category: "Algo Trading",
  //   slug: "introduction-machine-learning",
  //   image: "🤖"
  // },
  // {
  //   id: 6,
  //   title: "Blog6",
  //   excerpt: "6",
  //   content: blog6,
  //   date: "2025-09-01",
  //   category: "Machine Learning",
  //   slug: "web-performance-optimization",
  //   image: "⚡"
  // }
].map((post) => {
  const wordCount = getWordCount(post.content);
  return {
    ...post,
    wordCount,
  };
});