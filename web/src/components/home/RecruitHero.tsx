import Image from "next/image";
import Link from "next/link";

export default function RecruitHero() {
  return (
    <section className="bg-bg-default relative flex min-h-screen items-center justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,91,170,0.12),transparent_60%),radial-gradient(circle_at_bottom,rgba(148,163,179,0.18),transparent_65%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-8">
          <div className="bg-brand-subtle/80 text-text-brand ring-border-subtle/60 inline-flex max-w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 backdrop-blur">
            <span className="bg-brand-default h-1.5 w-1.5 rounded-full" />
            Recruiting new PNUops members for 2026
          </div>

          <div className="space-y-4">
            <h1 className="text-text-primary text-4xl font-semibold tracking-tight sm:text-5xl">
              The open project club
              <br />
              for builders at PNU
            </h1>
            <p className="text-text-secondary max-w-xl text-base sm:text-lg">
              From frontend and backend to AI, design, and product. Go beyond
              classes and gain real experience with teammates at PNUops.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/opus"
              className="bg-brand-default text-text-inverse hover:bg-brand-hover focus-visible:ring-border-focus focus-visible:ring-offset-bg-default inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium shadow-sm transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              See recent projects
            </Link>
            <Link
              href="/about"
              className="border-border-default bg-bg-elevated text-text-primary hover:border-border-strong hover:bg-bg-subtle focus-visible:ring-border-focus focus-visible:ring-offset-bg-default inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium shadow-sm transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Learn more about the club
            </Link>
          </div>

          <p className="text-text-tertiary text-xs">
            * Details about the timeline and process will be announced soon.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="border-border-subtle bg-bg-elevated/80 relative w-full max-w-md rounded-3xl border p-6 shadow-lg shadow-neutral-900/5 backdrop-blur">
            <div className="mb-6 flex items-center justify-center">
              <Image
                src="/pnuops-logo.png"
                alt="PNUops logo"
                width={320}
                height={100}
                priority
              />
            </div>
            <div className="text-text-secondary space-y-3 text-sm">
              <p>
                You can place the logo file at{" "}
                <code>public/pnuops-logo.png</code> in your project and use it
                directly.
              </p>
              <p>
                We&apos;re ready to help you design a landing page that reflects
                our club&apos;s colors and typography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
