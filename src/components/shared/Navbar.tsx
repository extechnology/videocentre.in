import { useState } from "react";
import { Play, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <Play className="h-5 w-5 fill-current" />
          </div>

          <h1 className="font-display text-2xl tracking-wide">
            Video <span className="text-primary">Center</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#top"
            className="relative text-sm uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Home
          </a>

          <a
            href="#about"
            className="relative text-sm uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            About
          </a>

          <Link
            to="/contact"
            className="relative text-sm uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition hover:scale-105 hover:shadow-lg"
          >
            Book
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-border p-2 transition hover:bg-muted md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-border h-screen flex items-center justify-center bg-background transition-all duration-300 md:hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 px-6 py-6">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium text-center uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium text-center uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
          >
            About
          </a>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-2xl font-medium text-center uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
          >
            Contact
          </Link>

          {/* <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-3xl font-medium text-center rounded-full bg-primary px-5 py-3 uppercase tracking-[0.25em] text-primary-foreground"
          >
            Book
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
