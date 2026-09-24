import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ProjectGrid, pageWrap } from "@/components/portfolio";
import { projects } from "@/lib/portfolio-data";

const archiveTags = ["SaaS", "LMS", "Healthcare", "Dashboards", "Security", "Responsive", "Mobile"];
export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Ahmed Ali" },
      {
        name: "description",
        content:
          "SaaS, LMS, healthcare, dashboard, responsive, and mobile interface work by Ahmed Ali.",
      },
      { property: "og:title", content: "Selected Work — Ahmed Ali" },
      { property: "og:description", content: "Selected product design and UI/UX case studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});
function Work() {
  return (
    <>
      <PageIntro
        index="01"
        eyebrow="Selected work"
        title="Products, systems, and interface redesigns."
      >
        <p>
          Seven focused project stories covering education, logistics, healthcare, dashboards,
          home security, responsive systems, and mobile experiences.
        </p>
      </PageIntro>
      <section className="border-t border-line bg-paper">
        <div className={`${pageWrap} pb-20 pt-10 sm:pb-28 sm:pt-14 lg:pb-32`}>
          <header className="border-b border-line pb-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Index</p>
                <p className="mt-3 font-display text-3xl leading-none text-ink sm:text-4xl">
                  {String(projects.length).padStart(2, "0")} case studies
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                2024 — 2026
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {archiveTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-paper-2 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </header>
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
