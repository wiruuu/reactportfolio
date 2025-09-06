import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, WholeWord } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-muted-foreground mb-6">
  <div className="grid grid-cols-2 gap-4 w-full md:flex md:flex-wrap md:gap-6">
    <div className="flex items-center justify-center md:justify-start gap-2">
      <Calendar className="h-4 w-4" />
      <span>{new Date(post.date).toLocaleDateString()}</span>
    </div>
    <div className="flex items-center justify-center md:justify-start gap-2">
      <WholeWord className="h-4 w-4" />
      <span>{post.wordCount}</span>
    </div>
    <div className=" px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap w-fit mx-auto md:ml-0 lg:ml-0 lg:my-auto">
      {post.category}
    </div>
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 text-primary text-sm hover:text-primary/30 bg-primary/10 rounded-full px-3 py-1 font-medium transition-colors w-fit lg:ml-full -mx-auto"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Blog list</span>
    </Link>
  </div>
</div>


        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-8xl text-center mb-8">{post.image}</div>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {post.content}
          </ReactMarkdown>
        </div>

      </div>
    </article>
  );
};
