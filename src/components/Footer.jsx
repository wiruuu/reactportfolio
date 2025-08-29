import { Smile } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-card border-t border-border mt-auto flex-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} me. all rights reserved
        </p>

        <a 
          href="#hero" 
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex-shrink-0"
        >
          <Smile size={20} />
        </a>
      </div>
    </footer>
  )
}