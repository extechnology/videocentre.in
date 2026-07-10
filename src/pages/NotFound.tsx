import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">
          Error 404
        </p>

        <h1 className="font-display mt-6 text-5xl leading-none sm:text-6xl lg:text-7xl">
          Lost in the
          <span className="block text-primary">Gallery</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          The page you're looking for doesn't exist, may have been moved, or is
          no longer available. Let's get you back to exploring our collection.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Home className="h-4 w-4" />
            Back Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="h-px w-40 bg-border" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
