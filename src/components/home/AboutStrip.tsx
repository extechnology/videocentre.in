import { Reveal } from "../../animations/Reveal";


const AboutStrip = () => {
  return (
    <div>
      <section
        id="about"
        className="mx-auto mt-24 max-w-4xl px-5 text-center sm:px-8"
      >
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            About
          </p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl">
            Cinematic frames, honest moments.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Video Center is a small studio devoted to slow looking — patient
            work with real light, real people and real places. We travel where
            the story lives.
          </p>
        </Reveal>
      </section>
    </div>
  );
}

export default AboutStrip