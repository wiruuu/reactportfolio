import { Calendar, Clock } from "lucide-react";

export const BlogList = ({ posts, onPostClick }) => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onPostClick(post.slug)}
        >
          {/* Image/Icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
            {post.image}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-1">
              <div className="flex items-center gap-3">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground truncate m-0">{post.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
            </div>
            <p className="text-left text-muted-foreground text-sm py-1">{post.excerpt}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

