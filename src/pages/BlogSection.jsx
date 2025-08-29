import { useState } from "react";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

export const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "John Doe",
      category: "React",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout",
      excerpt: "A comprehensive guide to CSS Grid Layout and how to create complex responsive designs with ease.",
      date: "2024-01-10",
      readTime: "8 min read",
      author: "Jane Smith",
      category: "CSS",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      excerpt: "Discover the best practices for writing clean and maintainable TypeScript code in your projects.",
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Mike Johnson",
      category: "TypeScript",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to build robust and scalable RESTful APIs using Node.js and Express framework.",
      date: "2023-12-28",
      readTime: "10 min read",
      author: "Sarah Wilson",
      category: "Node.js",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Introduction to Machine Learning",
      excerpt: "A beginner's guide to understanding machine learning concepts and algorithms.",
      date: "2023-12-20",
      readTime: "12 min read",
      author: "David Brown",
      category: "ML",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Web Performance Optimization",
      excerpt: "Techniques and strategies to optimize your website performance and improve user experience.",
      date: "2023-12-15",
      readTime: "7 min read",
      author: "Emily Davis",
      category: "Performance",
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-40 px-4 bg-background items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog & Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and thoughts on web development, 
            design, and technology.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-card text-foreground"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-4xl">📝</div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse all categories.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};