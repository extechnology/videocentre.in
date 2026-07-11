import { useParams } from "react-router-dom";
import { galleries } from "../data/galleries";
const GalleryPage = () => {
  const { id } = useParams();
  const gallery = galleries.find((gallery) => gallery.id === Number(id));
  console.log(gallery, "in gallery page");
  return (
    <div className="columns-1 gap-4 space-y-5 sm:columns-2 lg:columns-3 xl:columns-4 px-5 py-6">
      {gallery?.gallery.map((image, index) => (
        <div
          key={index}
          className="group relative mb-5 break-inside-avoid overflow-hidden bg-neutral-100"
        >
          <img
            src={image}
            alt={`${gallery.title} ${index + 1}`}
            loading="lazy"
            className="w-full object-cover rounded-md transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

          {/* View icon */}
          {/* <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="border border-white/60 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              View
            </span>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
