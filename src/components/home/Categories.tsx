import { Reveal } from "../../animations/Reveal";
import { categories } from "../../data/categories";

const Categories = ({ active, selectCategory }: any) => {
  return (
    <div>
      <section id="portfolio" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const isActive = active === c.id;
            return (
              <Reveal key={c.id} delay={i * 120}>
                <button
                  onClick={() => selectCategory(c.id)}
                  className={`group relative block w-full overflow-hidden rounded-sm text-left transition-all duration-500 ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-4 ring-offset-background"
                      : ""
                  }`}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                    <img
                      src={c.cover}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] opacity-80">
                      {c.subtitle}
                    </p>
                    <h3 className="font-display mt-2 text-3xl tracking-wide">
                      {c.title}
                    </h3>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Categories;
