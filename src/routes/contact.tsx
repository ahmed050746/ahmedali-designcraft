import { createFileRoute } from "@tanstack/react-router";
import { Availability, ContactMethods, pageWrap } from "@/components/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ahmed Ali — Product Designer" },
      {
        name: "description",
        content:
          "Discuss UI/UX, SaaS, LMS, dashboard, responsive design, or design-system work with Ahmed Ali.",
      },
      { property: "og:title", content: "Contact Ahmed Ali — Product Designer" },
      { property: "og:description", content: "Start a conversation about your product interface." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-paper pt-16">
        <div className={`${pageWrap} py-16 sm:py-24`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="eyebrow">05 / Contact</p>
            <Availability />
          </div>
          <h1 className="mt-6 max-w-[16ch] font-serif text-4xl leading-[1.04] sm:text-6xl">
            Have a product that needs a better interface?
          </h1>
          <p className="mt-6 max-w-[54ch] text-base leading-7 text-ink-soft">
            Email, phone, and LinkedIn are the fastest ways to reach me. I work remotely and I am
            based in Karachi, Pakistan. Selected freelance work is welcome.
          </p>
          <div className="mt-10">
            <ContactMethods size="cards" />
          </div>
        </div>
      </section>
    </>
  );
}
