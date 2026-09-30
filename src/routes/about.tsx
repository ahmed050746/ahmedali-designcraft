import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionHeading, pageWrap } from "@/components/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ahmed Ali — UI/UX Engineer" },
      {
        name: "description",
        content:
          "Ahmed Ali combines product design, design systems, responsive interface design, and front-end understanding.",
      },
      { property: "og:title", content: "About Ahmed Ali — UI/UX Engineer" },
      {
        property: "og:description",
        content: "Product designer working between interface design and implementation.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const skills = {
  Design: [
    "Figma",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Responsive Design",
    "UI/UX Design",
    "Product Design",
    "Information Architecture",
    "Interaction Design",
  ],
  Development: ["HTML", "CSS", "JavaScript", "React", "Responsive Front-end Development"],
  Tools: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Visual Studio Code",
    "GitHub",
    "Cursor",
  ],
};

function About() {
  return (
    <>
      <PageIntro
        index="02"
        eyebrow="About"
        title="A designer who understands both interfaces and the code behind them."
      >
        <p>
          I&apos;m Ahmed Ali, a UI/UX Engineer and Product Designer with a strong focus on creating
          practical, scalable, and user-centered digital products.
        </p>
      </PageIntro>
      <section className="border-t border-line bg-paper">
        <div className={`${pageWrap} grid gap-14 py-20 lg:grid-cols-12 lg:py-24`}>
          <div className="lg:col-span-7">
            <p className="eyebrow">How I work</p>
            <div className="mt-6 space-y-6 text-lg leading-8 text-ink-soft">
              <p>
                My work sits between design and development. I use Figma to create interfaces,
                prototypes, responsive systems, and reusable components while my front-end knowledge
                helps me understand how those designs translate into real products.
              </p>
              <p>
                I enjoy working on complex products where information architecture, usability,
                consistency, and responsive behavior matter.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[var(--shadow-soft)] sm:grid-cols-3">
              <div className="bg-paper-2 py-5 pl-5 pr-4">
                <dt className="font-mono text-[14px] uppercase text-ink-soft">Focus</dt>
                <dd className="mt-2 text-sm font-semibold">Product interfaces</dd>
              </div>
              <div className="bg-paper-2 px-4 py-5">
                <dt className="font-mono text-[14px] uppercase text-ink-soft">Approach</dt>
                <dd className="mt-2 text-sm font-semibold">Systems thinking</dd>
              </div>
              <div className="col-span-2 bg-paper-2 py-5 pl-5 sm:col-span-1 sm:pl-4">
                <dt className="font-mono text-[14px] uppercase text-ink-soft">Bridge</dt>
                <dd className="mt-2 text-sm font-semibold">Design + front-end</dd>
              </div>
            </dl>
          </div>
          <aside className="lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
            <p className="eyebrow">Current / Recent</p>
            <div className="surface-card relative mt-6 p-6">
              <span className="absolute -left-[37px] top-8 hidden size-2 rounded-full bg-coral lg:block" />
              <p className="font-mono text-[14px] uppercase text-ink-soft">Product design practice</p>
              <h2 className="mt-3 font-serif text-2xl">UI/UX Engineer — Softbanz</h2>
              <p className="mt-4 text-sm leading-6 text-ink-soft">
                Product interface design · SaaS/LMS design · Design systems · Responsive interfaces ·
                Figma workflows · Front-end collaboration · UI implementation understanding
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="border-t border-line bg-paper-2">
        <div className={`${pageWrap} py-20`}>
          <SectionHeading
            index="03 / Practice"
            title="Skills & tools"
            text="A focused toolkit for structuring, designing, prototyping, and collaborating on real digital products."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items], groupIndex) => (
              <section key={group} className="surface-card p-6">
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <h3 className="font-serif text-xl">{group}</h3>
                  <span className="rounded-full bg-ink px-2.5 py-0.5 font-mono text-[14px] font-semibold text-white">
                    0{groupIndex + 1}
                  </span>
                </div>
                <ul className="mt-3 grid grid-cols-2 gap-x-4">
                  {items.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 border-b border-line py-3 text-sm last:border-0"
                    >
                      <span className="font-mono text-[14px] text-ink-soft">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
