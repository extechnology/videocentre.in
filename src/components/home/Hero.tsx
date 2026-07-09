import { Reveal } from "../../animations/Reveal"


const Hero = () => {
  return (
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Portfolio
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            A collection of <span className="italic text-primary">stories</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Choose a category below to open its gallery. Each frame is a moment
            worth keeping — remove any you don't want to see.
          </p>
        </Reveal>
      </section>
  );
}

export default Hero