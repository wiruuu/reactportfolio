import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="relative z-10 bg-card group rounded-xl overflow-hidden shadow-xs card-hover shadow-lg hover:shadow-xl 
                 transition-all duration-300 border border-border hover:border-primary/20 block
                 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]"
    >
      {/* Image/Icon */}
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <div className="text-6xl">{post.image}</div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {post.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center text-sm text-muted-foreground mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap w-full">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Read More Indicator */}
        <div className="w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium text-primary">
          Read More
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};
