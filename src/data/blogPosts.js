import { content as blog1 } from '../content/20250731';
import { content as blog2 } from '../content/20250804';
import { content as blog3 } from '../content/20250812';
import { content as blog4 } from '../content/20250815';
import { content as blog5 } from '../content/20250830';
import { content as blog6 } from '../content/20250901';
import { Pi } from 'lucide-react';

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
    slug: "2025-07-31",
    image: Pi
  },
  // {
  //   id: 2,
  //   title: "Blog 2",
  //   excerpt: "2",
  //   content: blog2,
  //   date: "2025-08-04",
  //   category: "Economics",
  //   slug: "mastering-css-grid-layout",
  //   image: "🎨"
  // },
  // {
  //   id: 3,
  //   title: "Blog 3",
  //   excerpt: "3",
  //   content: blog3,
  //   date: "2025-08-12",
  //   category: "Data Science",
  //   slug: "typescript-best-practices",
  //   image: "🔒"
  // },
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