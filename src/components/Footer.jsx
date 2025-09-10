import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-card border-t border-border mt-auto flex-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Ethan Choi. All rights reserved + all opinions are my own. Website made using React + Vite.
        </p>
      </div>
    </footer>
  )
}