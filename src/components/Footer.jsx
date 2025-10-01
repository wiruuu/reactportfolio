import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-card bg-primary/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()}. All opinions are my own. Website made using React + Vite.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-transform duration-200"
        >
          Get in touch!
        </a>
      </div>


    </footer>
  )
}