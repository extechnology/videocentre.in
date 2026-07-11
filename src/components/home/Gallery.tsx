// import { useState } from "react";
import type { Category } from "../../data/categories";
import { Reveal } from "../../animations/Reveal";
// import { X } from "lucide-react";
// import { galleries } from "../../data/galleries";
import type { Gallery as GalleryType } from "../../data/galleries";
import { useNavigate } from "react-router-dom";

const Gallery = ({
  current,
  active,
  galleryRef,
  // remove,
}: {
  current: GalleryType[];
  active: Category;
  galleryRef: React.RefObject<HTMLElement | null>;
  // remove: (id: number) => void;
}) => {
  // const [images, setImages] = useState<GalleryType[]>(galleries);
  const navigate = useNavigate();

  console.log(current, "in gallery section current");
  console.log(active, "in gallery section active");
  console.log(galleryRef, "in gallery section galleryRef");

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
                {/* <button
                  onClick={() =>
                    setImages((p) => ({ ...p, [active]: galleries[active] }))
                  }
                  className="rounded-full border border-primary/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Restore
                </button> */}
              </div>
            </div>
          </Reveal>
        ) : (
          <div
            key={active}
            className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:balance]"
          >
            {current.map((url, i) => (
              <Reveal
                key={url.id}
                delay={(i % 6) * 80}
                className="mb-5 break-inside-avoid"
              >
                <div className="group relative overflow-hidden rounded-sm bg-muted shadow-sm">
                  <img
                    onClick={() => navigate(`/gallery/${url.id}`)}
                    src={url.thumbnail}
                    alt=""
                    loading="lazy"
                    className="block cursor-pointer w-full transition-transform duration-900 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                    <h3 className="font-display text-white mt-2 text-3xl tracking-wide">
                      {url.title}
                    </h3>
                    <p className="text-[0.65rem] text-white uppercase tracking-[0.3em] opacity-80">
                      {url.description}
                    </p>
                  </div>
                  {/* <button
                    onClick={() => remove(url.id)}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground opacity-0 shadow-md backdrop-blur transition-all duration-300 hover:bg-destructive hover:text-destructive-foreground group-hover:opacity-100 focus:opacity-100"
                    aria-label="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button> */}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
