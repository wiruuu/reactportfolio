import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, WholeWord } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { Fragment } from "react";

export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-20 px-4 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mt-20 text-3xl md:text-4xl font-bold text-foreground mb-8">
            {post.title}
          </h1>
          <div className="flex flex-col md:flex-row text-muted-foreground mb-6 gap-4">
            {/* date + word count + category */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <WholeWord className="h-4 w-4" />
                <span>{post.wordCount} words</span>
              </div>
              <div className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap">
                {post.category}
              </div>
            </div>
            <div className="flex justify-center md:justify-start md:ml-auto">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap transition-colors hover:bg-primary/20"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Blog list</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Content */}
        {/* <div className="prose prose-lg max-w-none text-left">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {post.content}
          </ReactMarkdown>
        </div> */}
        <div className="prose prose-lg max-w-none text-left">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};
