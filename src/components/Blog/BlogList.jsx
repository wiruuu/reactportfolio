import { Calendar, Clock, WholeWord } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogList = ({ posts }) => {
  return (
    <div className="relative z-20 flex flex-col gap-4 mb-12">
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.slug}`}
          className="group flex items-center gap-4 p-4 border rounded-lg bg-card hover:shadow-md hover:border-primary/30 transition-all"
        >
          {/* Image/Icon */}
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
            {post.image}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Top row: responsive layout */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-1">
              {/* Category + Title */}
              <div className="flex items-center gap-2">
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors m-0">
                  {post.title}
                </h3>
              </div>

              {/* Date + Read time */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground flex-shrink-0">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <WholeWord className="h-3 w-3" />
                  <span>{post.wordCount}</span>
                  <p> words</p>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-muted-foreground text-left text-sm mt-2 line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
