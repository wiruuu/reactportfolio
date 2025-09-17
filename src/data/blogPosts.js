import { content as blog1 } from '../content/20250625';
import { content as blog2 } from '../content/20250715';
import { content as blog3 } from '../content/20250731';
import { content as blog4 } from '../content/20250815';
import { content as blog5 } from '../content/20250825';
import { content as blog6 } from '../content/20250830';
import { content as blog7 } from '../content/20250525';
import { content as blog8 } from '../content/20250905';
import { content as blog9 } from '../content/20250911';
import { content as blog10 } from '../content/20250913';
import { content as blog11 } from '../content/20250916';
import { content as blog12 } from '../content/20250924';
import { content as blog13 } from '../content/20251006';
import { Flower2, Pi, Gem, Infinity, Leaf, Skull, SquareActivity, BookOpen, Shield, Sword, TrendingUp} from 'lucide-react';
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
    date: "2025-06-25",
    category: "Mathematics",
    slug: "interesting-product",
    image: Pi
  },
  {
    id: 2,
    title: "On emotivism and truth-aptness",
    excerpt: "Thoughts on ethical emotivism",
    content: blog2,
    date: "2025-07-15",
    category: "Philosophy",
    slug: "on-emotivism",
    image: ThumbsUp
  },
  {
    id: 3,
    title: "Kishore Mahbubani and political contrarianism",
    excerpt: "American primacy and the new world order",
    content: blog3,
    date: "2025-07-31",
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
    title: "A contemporary glance at incentive pay",
    excerpt: "Piece rates in the modern labour market",
    content: blog5,
    date: "2025-08-25",
    category: "Economics",
    slug: "incentive-pay",
    image: SquareActivity
  },
  {
    id: 6,
    title: "Pricing exotic options (1)",
    excerpt: "From vanilla to exotic",
    content: blog6,
    date: "2025-08-30",
    category: "Quantitative finance",
    slug: "exotic-options-1",
    image: Flower2
  },
  
  {
    id: 7,
    title: "Infinite sums involving hyperbolic functions (1)",
    excerpt: "Special functions arise again",
    content: blog7,
    date: "2025-05-25",
    category: "Mathematics",
    slug: "infinite-sum-hyperbolic",
    image: Infinity
  },
  {
    id: 8,
    title: "Mozi (墨子) and the state of nature",
    excerpt: "What do Chinese philosophers think of the state of nature?",
    content: blog8,
    date: "2025-09-05",
    category: "Philosophy",
    slug: "musings-state-of-nature",
    image: Leaf
  },
  {
    id: 9,
    title: "Celebrating death, and moral collapse",
    excerpt: "Is it acceptable to celebrate a person's death?",
    content: blog9,
    date: "2025-09-11",
    category: "Philosophy",
    slug: "celebrating-death",
    image: Skull
  },
  {
    id: 10,
    title: "Soup kitchens and student initiative",
    excerpt: "Why are high schoolers doing so much?",
    content: blog10,
    date: "2025-09-12",
    category: "Pedagogy",
    slug: "student-initiative",
    image: BookOpen
  },
  {
    id: 11,
    title: "I fear as if I have never feared before",
    excerpt: "Vices of youthfulness",
    content: blog11,
    date: "2025-09-16",
    category: "Essays",
    slug: "great-fear",
    image: Shield
  },
  {
    id: 12,
    title: "Structural transformation in developing nations",
    excerpt: "Industry, labour, and employment",
    content: blog12,
    date: "2025-09-24",
    category: "Economics",
    slug: "structural-transformation",
    image: TrendingUp
  },
  {
    id: 13,
    title: "Finding the righteous within Medea",
    excerpt: "Do villains have a righteous side?",
    content: blog13,
    date: "2025-10-06",
    category: "Literature",
    slug: "medea",
    image: Sword
  },
  
].map((post) => {
  const wordCount = getWordCount(post.content);
  return {
    ...post,
    wordCount,
  };
});