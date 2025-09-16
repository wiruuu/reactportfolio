import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, WholeWord } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { ScrollTop } from "../components/ScrollTop";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
const root = getComputedStyle(document.documentElement);
const primary = root.getPropertyValue("--primary").trim();
const foreground = root.getPropertyValue("--foreground").trim();

ChartJS.register(ArcElement, Tooltip);

export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [colors, setColors] = useState({ primary: "", foreground: "" });

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    setColors({
      primary: `hsl(${root.getPropertyValue("--primary").trim()})`,
      foreground: `hsl(${root.getPropertyValue("--foreground").trim()})`,
    });
  }, []); // run once on mount

  useEffect(() => {
    let hideTimeout;

    const handleScroll = () => {
      setVisible(true); // show once user scrolls
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setVisible(false), 3000);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // subtract footer height if present
      const footerHeight =
        document.querySelector("footer")?.offsetHeight || 200;

      const totalScroll = docHeight - winHeight - footerHeight;
      const percent = Math.min((scrollTop / totalScroll) * 100, 100);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
    };
  }, []);


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
    <article className="pt-20 pb-10 px-4 min-h-screen relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mt-20 text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <p className="mb-8 font-medium">{post.excerpt}</p>
          <div className="flex flex-col md:flex-row text-muted-foreground mb-6 gap-4">
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

        <div className="prose prose-lg max-w-none text-left">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Scroll progress pie chart */}
      <div
        className={`invisible lg:visible fixed bottom-6 left-6 w-10 h-10 z-50 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
          }`}
      >
        <Doughnut
          data={{
            datasets: [
              {
                data: [progress, 100 - progress],
                backgroundColor: [colors.primary, colors.foreground],
                borderWidth: 0,
              },
            ],
          }}
          options={{
            cutout: "80%",
            plugins: { tooltip: { enabled: false }, legend: { display: false } },
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-[0.65rem] font-semibold text-foreground">
          {Math.round(progress)}%
        </div>
      </div>

      <ScrollTop />
    </article>
  );
};
