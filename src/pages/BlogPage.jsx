import { useState, useMemo, useEffect } from "react";
import { BlogCard } from "../components/Blog/BlogCard";
import { BlogSearch } from "../components/Blog/BlogSearch";
import { BlogPagination } from "../components/Blog/BlogPagination";
import { blogPosts } from "../data/blogPosts";
import { HeartCrack, Grid, List } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { BlogList } from "../components/Blog/BlogList";

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Load initial viewMode from localStorage (default "grid")
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "grid";
  });

  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Save viewMode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const navigate = useNavigate();

  const handlePostClick = (postSlug) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <section className="pt-40 px-4 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog <span className="text-primary">posts</span>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-4 w-full">
          <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* View Toggle Button */}
        <div className="flex items-center gap-2 justify-center py-5">
          <span className="text-sm text-muted-foreground">View:</span>
          <div className="flex bg-muted rounded-md p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              aria-label="Grid view"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              aria-label="List view"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          {searchTerm && (
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          )}
        </div>

        {viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          /* List View */
          <BlogList posts={currentPosts} onPostClick={handlePostClick} />
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-5 flex justify-center"> 
              <HeartCrack className="w-20 h-20 text-primary" /> 
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse all categories.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};
