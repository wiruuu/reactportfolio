import { Search } from "lucide-react";

export const BlogSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-12 max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <input
          type="text"
          placeholder="Search articles by title, content, or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-card text-foreground placeholder:text-muted-foreground transition-colors duration-200"
        />
      </div>
    </div>
  );
};