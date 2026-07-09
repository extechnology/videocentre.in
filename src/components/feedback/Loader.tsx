import { Play } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-primary" />

          {/* Film Holes */}
          <div className="absolute left-1 top-4 flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-sm bg-primary" />
            ))}
          </div>

          <div className="absolute right-1 top-4 flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-sm bg-primary" />
            ))}
          </div>

          <Play className="h-8 w-8 fill-current text-primary" />
        </div>

        <div className="text-center">
          <h2 className="font-display text-3xl">
            Video <span className="text-primary">Center</span>
          </h2>

          <p className="mt-2 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Loading Gallery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
