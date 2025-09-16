import { useState, useMemo, useEffect } from "react";
import { BlogCard } from "../components/Blog/BlogCard";
import { BlogSearch } from "../components/Blog/BlogSearch";
import { BlogPagination } from "../components/Blog/BlogPagination";
import { blogPosts } from "../data/blogPosts";
import { HeartCrack, Grid, List, Tag, Search, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { BlogList } from "../components/Blog/BlogList";

export function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const storageKey = `scroll-position:${location.pathname}`;

    // ✅ Restore on mount
    const storedY = sessionStorage.getItem(storageKey);
    if (storedY !== null) {
      window.scrollTo(0, parseInt(storedY, 10));
    }

    // ✅ Save continuously while scrolling
    const saveScroll = () => {
      sessionStorage.setItem(storageKey, window.scrollY.toString());
    };
    window.addEventListener("scroll", saveScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", saveScroll);
      saveScroll(); // save one last time
    };
  }, [location.pathname]);
}


export const BlogPage = () => {
  useScrollRestoration();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [browseMode, setBrowseMode] = useState("month");

  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "grid";
  });

  const [postsPerPage, setPostsPerPage] = useState(() => {
    return parseInt(localStorage.getItem("postsPerPage") || "6", 10);
  });

  const [sortOrder, setSortOrder] = useState(() => {
    return localStorage.getItem("sortOrder") || "newest";
  });

  const [selectedMonth, setSelectedMonth] = useState("");
  const [showAllMonths, setShowAllMonths] = useState(false);

  const months = [
    { value: "2025-09", label: "Sep 2025" },
    { value: "2025-08", label: "Aug 2025" },
    { value: "2025-07", label: "July 2025" },
  ];

  const [categoryFilter, setCategoryFilter] = useState("");
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory = categoryFilter
        ? post.category === categoryFilter
        : true;

      const matchesMonth = selectedMonth
        ? post.date.startsWith(selectedMonth) // assumes YYYY-MM-DD
        : true;

      return matchesSearch && matchesCategory && matchesMonth;
    });

    posts.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

    return posts;
  }, [searchTerm, categoryFilter, selectedMonth, sortOrder]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, postsPerPage, categoryFilter, selectedMonth, sortOrder]);

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  useEffect(() => {
    localStorage.setItem("postsPerPage", postsPerPage.toString());
  }, [postsPerPage]);

  useEffect(() => {
    localStorage.setItem("sortOrder", sortOrder);
  }, [sortOrder]);

  const navigate = useNavigate();
  const handlePostClick = (postSlug) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <section className="pt-40 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog <span className="text-primary">posts</span>
          </h1>
        </div>
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>
        <p className="text-center my-6 text-body">
          Click{" "}
          <a href="/whyiwrite" className="underline hover:text-primary">
            here
          </a>{" "}
          to know why I write and what I write about.
        </p>

        {/* Search / Tags / Month */}
        {browseMode === "search" ? (
          <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-4 w-full">
            <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        ) : browseMode === "tags" ? (
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setCategoryFilter("")}
                className={`px-3 py-1 rounded-full font-medium transition-colors border border-2 border-primary/30 ${
                  categoryFilter === ""
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                All
              </button>

              {(showAllCategories ? categories : categories.slice(0, 4)).map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full font-medium transition-colors border border-2 border-primary/30 ${
                      categoryFilter === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            {categories.length > 4 && (
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-sm text-body hover:underline hover:text-primary hover:bg-primary/10 border-2 border-primary/10 rounded-full px-3 py-1"
              >
                {showAllCategories ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedMonth("")}
                className={`px-3 py-1 rounded-full font-medium transition-colors border border-2 border-primary/30 ${
                  selectedMonth === ""
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                All
              </button>

              {(showAllMonths ? months : months.slice(0, 4)).map((m) => (
                <button
                  key={m.value}
                  onClick={() => setSelectedMonth(m.value)}
                  className={`px-3 py-1 rounded-full font-medium transition-colors border border-2 border-primary/30 ${
                    selectedMonth === m.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {months.length > 4 && (
              <button
                onClick={() => setShowAllMonths(!showAllMonths)}
                className="text-sm text-body hover:underline hover:text-primary hover:bg-primary/10 border-2 border-primary/10 rounded-full px-3 py-1"
              >
                {showAllMonths ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-6">
          <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
            <div className="flex flex-row flex-wrap items-center gap-4">
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <div className="flex bg-muted rounded-md p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:underline hover:text-primary"
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md cursor-pointer ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:underline hover:text-primary"
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* Posts Per Page */}
              <div className="flex items-center gap-2">
                <div className="flex bg-muted rounded-md p-1">
                  {[3, 6, 12].map((n) => (
                    <button
                      key={n}
                      onClick={() => setPostsPerPage(n)}
                      className={`px-3 py-2 rounded-md cursor-pointer ${
                        postsPerPage === n
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:underline hover:text-primary"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sort + Browse Mode */}
          <div className="flex items-center gap-2">
            <div className="flex bg-muted rounded-md p-1 ">
              <button
                onClick={() => setSortOrder("newest")}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  sortOrder === "newest"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:underline hover:text-primary"
                }`}
              >
                New
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`px-3 py-2 rounded-md cursor-pointer ${
                  sortOrder === "oldest"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:underline hover:text-primary"
                }`}
              >
                Old
              </button>
            </div>

            {/* Search / Tags / Month toggle */}
            <div className="flex justify-center gap-2 items-center">
              <div className="flex bg-muted rounded-md p-1">
                <button
                  onClick={() => {
                    setBrowseMode("month");
                    setSearchTerm("");
                    setCategoryFilter("");
                  }}
                  className={`px-3 py-2 rounded-md cursor-pointer ${
                    browseMode === "month"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:underline"
                  }`}
                >
                  <Calendar />
                </button>
                <button
                  onClick={() => {
                    setBrowseMode("tags");
                    setSearchTerm("");
                    setSelectedMonth("");
                  }}
                  className={`px-3 py-2 rounded-md cursor-pointer ${
                    browseMode === "tags"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:underline"
                  }`}
                >
                  <Tag />
                </button>
                <button
                  onClick={() => {
                    setBrowseMode("search");
                    setCategoryFilter("");
                    setSelectedMonth("");
                  }}
                  className={`px-3 py-2 rounded-md cursor-pointer ${
                    browseMode === "search"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:underline"
                  }`}
                >
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search results */}
        <div className="text-center mb-8">
          {searchTerm && (
            <p className="text-muted-foreground">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found for "{searchTerm}"
            </p>
          )}
        </div>

        {/* Posts */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <BlogList posts={currentPosts} onPostClick={handlePostClick} />
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-5 flex justify-center">
              <HeartCrack className="w-20 h-20 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              :(
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
