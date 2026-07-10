import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>

          <h1 className="font-display mt-4 max-w-3xl text-3xl leading-tight md:text-4xl">
            Let's create something worth watching.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you're looking for photography, cinematic videos,
            commercial productions, or event coverage, we'd love to hear
            about your project.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-10 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Contact Information
          </p>

          <h2 className="font-display mt-3 text-3xl">
            We'd love to hear from you.
          </h2>

          <p className="mt-5 text-muted-foreground leading-8">
            Tell us about your project, preferred shooting dates,
            location, or any questions you may have. We'll get back to
            you as soon as possible.
          </p>

          <div className="mt-12 space-y-8">

            <div className="flex gap-5">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  hello@videocenter.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-medium">Studio</h3>
                <p className="text-muted-foreground">
                  Calicut, Kerala, India
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-medium">Working Hours</h3>
                <p className="text-muted-foreground">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm md:p-8">

          <h2 className="font-display text-3xl">
            Send a Message
          </h2>

          <form className="mt-10 space-y-4">

            <div>
              <label className="mb-2 block text-sm">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-border bg-background px-4 py-2 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-border bg-background px-4 py-2 outline-none transition focus:border-primary"
              />
            </div>

            {/* <div>
              <label className="mb-2 block text-sm">
                Subject
              </label>

              <input
                type="text"
                placeholder="Wedding Shoot"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div> */}

            <div>
              <label className="mb-2 block text-sm">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-border bg-background px-4 py-2 outline-none transition focus:border-primary"
              />
            </div>

            <button
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-2 text-primary-foreground transition hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>

          </form>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;