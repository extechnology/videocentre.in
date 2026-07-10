import { useMemo, useRef, useState } from "react";
import type { Category } from "../data/categories";
import { galleries } from "../data/galleries";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Gallery from "../components/home/Gallery";
import AboutStrip from "../components/home/AboutStrip";
import type { Gallery as GalleryType } from "../data/galleries";

const HomePage = () => {
  const [active, setActive] = useState<Category>("weddings");
  const [images, setImages] = useState<GalleryType[]>(galleries);
  const galleryRef = useRef<HTMLDivElement>(null);
  const current = useMemo(() => images?.filter((image)=> image?.category === active), [images, active]);
  const remove = (id: number) => {
    setImages((prev) => {
      return {
        ...prev,
        [active]: prev[active].filter((u) => u.id !== id),
      }
    });
  };

  const selectCategory = (id: Category) => {
    setActive(id);
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);
  };

  return (
    <div>
      <Hero />
      <Categories 
      active={active}
      selectCategory={selectCategory}
      />
      <Gallery
      current={current}
      active={active}
      galleryRef={galleryRef}
      remove={remove}
       />
      <AboutStrip />
    </div>
  );
};

export default HomePage;
