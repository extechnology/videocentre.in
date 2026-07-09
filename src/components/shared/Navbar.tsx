import { useState } from "react";
import { Play, Menu } from "lucide-react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 md:grid-cols-3">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Play className="h-4 w-4" fill="currentColor" />
          </span>
          <span className="font-display truncate text-xl tracking-wide">
            Video <span className="text-primary">Center</span>
          </span>
        </a>
        <nav className="hidden justify-center gap-8 text-sm uppercase tracking-[0.18em] text-muted-foreground md:flex">
          <a className="story-link hover:text-foreground" href="#top">
            Home
          </a>
          <a className="story-link hover:text-foreground" href="#portfolio">
            Portfolio
          </a>
          <a className="story-link hover:text-foreground" href="#about">
            About
          </a>
          <a className="story-link hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
        <div className="hidden justify-end md:flex">
          <a
            href="#contact"
            className="rounded-full border border-primary/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Book
          </a>
        </div>
        <button
          className="justify-self-end rounded-md border border-border p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#top" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar

