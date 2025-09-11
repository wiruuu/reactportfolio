import { content as blog1 } from '../content/20250731';
import { content as blog2 } from '../content/20250804';
import { content as blog3 } from '../content/20250812';
import { content as blog4 } from '../content/20250815';
import { content as blog5 } from '../content/20250830';
import { content as blog6 } from '../content/20250901';
import { content as blog7 } from '../content/20250905';
import { content as blog8 } from '../content/20250911';
import { Flower2, Pi, Gem, Infinity, Leaf} from 'lucide-react';
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
    excerpt: "American primacy and the new world order",
    content: blog3,
    date: "2025-08-12",
    category: "Politics",
    slug: "kishore-mahbubani",
    image: ArrowLeftRight
  },
  {
    id: 4,
    title: "Arguments against same-sex marriage",
    excerpt: "How sound are they?",
    content: blog4,
    date: "2025-08-15",
    category: "Politics",
    slug: "arguments-same-sex-marriage",
    image: Gem
  },
  {
    id: 5,
    title: "Pricing exotic options (1)",
    excerpt: "From vanilla to exotic",
    content: blog5,
    date: "2025-08-30",
    category: "Quantitative finance",
    slug: "exotic-options-1",
    image: Flower2
  },
  {
    id: 6,
    title: "Infinite sums involving hyperbolic functions",
    excerpt: "Special functions arise again",
    content: blog6,
    date: "2025-09-01",
    category: "Mathematics",
    slug: "infinite-sum-hyperbolic",
    image: Infinity
  },
  {
    id: 7,
    title: "Musings on the state of nature",
    excerpt: "A historical glance at hypothetical primitive society",
    content: blog7,
    date: "2025-09-05",
    category: "Philosophy",
    slug: "musings-state-of-nature",
    image: Leaf
  },
  {
    id: 8,
    title: "Celebrating death and moral collapse",
    excerpt: "Is it acceptable to celerbrate a person's death?",
    content: blog8,
    date: "2025-09-11",
    category: "Philosophy",
    slug: "celebrating-death",
    image: Leaf
  },
].map((post) => {
  const wordCount = getWordCount(post.content);
  return {
    ...post,
    wordCount,
  };
});