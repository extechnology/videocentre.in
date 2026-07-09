import { useState } from "react";
import type { Category } from "../../data/categories";
import { Reveal } from "../../animations/Reveal";
import { X } from "lucide-react";
import { galleries } from "../../data/galleries";

const Gallery = ({
  current,
  active,
  galleryRef,
  remove,
}: {
  current: string[];
  active: Category;
  galleryRef: React.RefObject<HTMLElement | null>;
  remove: (url: string) => void;
}) => {
  const [images, setImages] = useState<Record<Category, string[]>>(galleries);

  console.log(images);

  return (
    <div>
      <section
        ref={galleryRef}
        className="mx-auto max-w-7xl px-5 pt-20 sm:px-8"
      >
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Gallery
              </p>
              <h2 className="font-display mt-2 text-4xl capitalize sm:text-5xl">
                {active}
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {current.length} image{current.length === 1 ? "" : "s"}
            </p>
          </div>
        </Reveal>

        {current.length === 0 ? (
          <Reveal>
            <div className="rounded-md border border-dashed border-border py-24 text-center text-muted-foreground">
              You've removed every image in this collection.
              <div className="mt-4">
                <button
                  onClick={() =>
                    setImages((p) => ({ ...p, [active]: galleries[active] }))
                  }
                  className="rounded-full border border-primary/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Restore
                </button>
              </div>
            </div>
          </Reveal>
        ) : (
          <div
            key={active}
            className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]"
          >
            {current.map((url, i) => (
              <Reveal
                key={url}
                delay={(i % 6) * 80}
                className="mb-5 break-inside-avoid"
              >
                <div className="group relative overflow-hidden rounded-sm bg-muted shadow-sm">
                  <img
                    src={url}
                    alt=""
                    loading="lazy"
                    className="block w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                  <button
                    onClick={() => remove(url)}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground opacity-0 shadow-md backdrop-blur transition-all duration-300 hover:bg-destructive hover:text-destructive-foreground group-hover:opacity-100 focus:opacity-100"
                    aria-label="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery