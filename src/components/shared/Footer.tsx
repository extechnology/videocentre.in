import { Play } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
      <footer
        id="contact"
        className="mt-5 border-t border-border bg-secondary/40"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-4 w-4" fill="currentColor" />
              </span>
              <span className="font-display text-xl">
                Video <span className="text-primary">Center</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A curated portfolio of cinematic stories, quiet moments and grand
              landscapes.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="story-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="story-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Get in touch
            </h4>
            <p className="mt-4 text-sm">hello@videocenter.studio</p>
            <p className="text-sm text-muted-foreground">Available worldwide</p>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Video Center. All rights reserved.
        </div>
      </footer>
    );
}

export default Footer