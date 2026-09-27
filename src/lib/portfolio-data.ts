export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  role: string;
  contribution: string;
  platform: string;
  scope: string;
  challenge: string;
  approach: string;
  decisions: string[];
  visual: "learning" | "logistics" | "health" | "data" | "responsive" | "mobile";
  imageSrc: string;
  imageAlt: string;
  coverSrc?: string;
  coverAlt?: string;
  screensSrc?: string;
  screensAlt?: string;
  screensNote?: string;
  beforeSrc?: string;
  beforeAlt?: string;
  afterSrc?: string;
  afterAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "edbanz",
    number: "01",
    name: "EdBanz",
    category: "SaaS · LMS · EdTech · Product Design",
    description: "An AI-powered connected education platform unifying teaching, learning, and academic operations—featuring specialized AI agents for automated reporting and content creation.",
    role: "UI/UX Engineer · Product Designer",
    contribution: "Designed the product experience from the ground up, including major platform interfaces, dashboards, virtual classroom experiences, academic workflows, and responsive layouts.",
    platform: "Responsive web platform",
    scope: "Built from the early product stage with a focus on scalable UI patterns and consistent product experiences.",
    challenge: "Bring several connected academic workflows into one interface without making the product feel fragmented or difficult to learn.",
    approach: "The work began with the system: shared navigation, clear information hierarchy, reusable patterns, and responsive behavior that could support new workflows as the platform evolved.",
    decisions: ["Keep frequent academic actions close to context.", "Use repeatable patterns across student and staff workflows.", "Treat mobile layouts as re-prioritized experiences, not compressed desktop screens."],
    visual: "learning",
    imageSrc: "/images/edbanz-case.png",
    coverSrc: "/images/edbanz-cover.png",
    screensSrc: "/images/edbanz-screens.png",
    imageAlt: "EdBanz AI Assistance and Specialized Agents screen with content creation, report generation, and classroom AI agents",
    coverAlt: "EdBanz AI Assistance and Specialized Agents screen with content creation, report generation, and classroom AI agents",
    screensAlt: "EdBanz AI content generation workflow from prompt configuration to generated quiz outputs",
    screensNote: "A step-by-step preview of the AI Content Generation Workflow—showing how educators move seamlessly from prompt setup to instantly generated assessments and lesson plans.",
  },
  {
    slug: "ipsilon",
    number: "02",
    name: "Ipsilon",
    category: "Marketplace · Logistics · SaaS",
    description: "A two-sided logistics marketplace connecting businesses and logistics providers across Europe.",
    role: "UI/UX Designer",
    contribution: "Redesigned approximately 50% of the existing product interface, improving visual consistency, usability, hierarchy, and responsive behavior.",
    platform: "Responsive web marketplace",
    scope: "The engagement focused on selected parts of the existing interface. It was not a complete product redesign and did not include creating new features.",
    challenge: "Improve clarity across information-dense marketplace screens while respecting the product structure and functionality already in place.",
    approach: "Selected flows were audited for hierarchy, spacing, component consistency, and responsive behavior before their interface treatment was refined.",
    decisions: ["Preserve existing product logic and feature scope.", "Create clearer distinction between primary and supporting information.", "Make dense operational views easier to scan at smaller widths."],
    visual: "logistics",
    imageSrc: "/images/ipsilon-case.png",
    coverSrc: "/images/ipsilon-cover.png",
    screensSrc: "/images/ipsilon-screens.png",
    imageAlt: "Ipsilon landing page hero with transport quotes, delivery van, quote form, and key benefits",
    screensAlt: "Ipsilon carrier dashboard UI redesign showing before and after mobile layouts",
    screensNote: "A side-by-side comparison of the Carrier Dashboard redesign—improving information density, status visibility, and quote tracking for logistics providers.",
  },
  {
    slug: "nhg-hospital-management",
    number: "03",
    name: "NHG Hospital Management System",
    category: "Healthcare · Dashboard · SaaS",
    description: "A hospital management platform featuring targeted UI redesigns—such as the Form Builder modal—to simplify complex operational workflows and data-heavy interfaces.",
    role: "UI/UX Designer",
    contribution: "Redesigned selected features and screens to improve usability, hierarchy, visual consistency, and responsive presentation.",
    platform: "Responsive web application",
    scope: "The work covered selected features and screens rather than ownership of the complete hospital management system.",
    challenge: "Make dense operational information easier to understand while preserving the precision expected from a healthcare workflow.",
    approach: "The selected screens were reorganized around task priority, stronger labels, calmer density, and consistent states across tables and summaries.",
    decisions: ["Use contrast sparingly to signal priority.", "Keep operational tables dense but legible.", "Expose status and context without adding visual noise."],
    visual: "health",
    imageSrc: "/images/nhg-cover.png",
    coverSrc: "/images/nhg-cover.png",
    screensSrc: "/images/nhg-screens.png",
    imageAlt: "Healthware form builder modal redesign showing before and after add-field UI",
    coverAlt: "Healthware form builder modal redesign showing before and after add-field UI",
    screensAlt: "Healthware field selection component redesign showing before and after add-field modal",
    screensNote: "A before-and-after breakdown of the Field Selection component—redesigning complex modal interactions to improve visual hierarchy and selection clarity for clinical staff.",
  },
  {
    slug: "dashboard-data-interfaces",
    number: "04",
    name: "Dashboard & Data Interfaces",
    category: "Dashboard · SaaS · Data Visualization",
    description: "Centralized dashboard organizing announcements, class schedules, course activities, and academic metrics seamlessly.",
    role: "UI/UX Engineer",
    contribution: "Explored information architecture, visual hierarchy, chart framing, tables, filtering patterns, and responsive states across selected dashboard concepts.",
    platform: "Responsive web dashboards",
    scope: "A focused collection of interface explorations rather than one client product.",
    challenge: "Give users enough information to make decisions without allowing data density to overwhelm the page.",
    approach: "Each exploration starts with the decision a screen needs to support, then organizes summary, comparison, detail, and action around that priority.",
    decisions: ["Lead with actionable summaries.", "Use tables for precision and charts for pattern recognition.", "Preserve context when layouts reorganize on mobile."],
    visual: "data",
    imageSrc: "/images/dashboard-case.png",
    imageAlt: "EdBanz unified teacher dashboard with announcements, courses, calendar, and class schedule",
    screensSrc: "/images/dashboard-screens.png",
    screensAlt: "EdBanz responsive dashboard architecture showing desktop and mobile layouts",
    screensNote: "Demonstrating how complex dashboard components—such as active schedules, announcements, and calendars—adapt responsively from desktop interfaces to streamlined mobile layouts.",
  },
  {
    slug: "cctv",
    number: "05",
    name: "CCTV",
    category: "Mobile · Security · App Store",
    description: "Apple Store mockups for a home CCTV and access product — visitor management, guest activity, vehicle access, and household control as one mobile story.",
    role: "UI/UX Designer · Product Designer",
    contribution: "Designed App Store presentation mockups that place live product screens in device frames and pair each composition with one clear access job.",
    platform: "iOS · Apple App Store",
    scope: "App Store visual mockups for a home security and access-management product. The work focused on presentation, hierarchy, and feature storytelling rather than a full product build.",
    challenge: "A security product has many jobs — visitors, vehicles, household access, and live activity. The store page has to explain that without looking like an operations dashboard.",
    approach: "Each device frame carries one task. A calm brand field and short feature lines keep the screens readable at marketing scale while the UI stays close to the real product.",
    decisions: [
      "Give each mockup a single job so the store page can be scanned.",
      "Keep product UI large enough to read inside the device frame.",
      "Use a calm brand field so the phones, not decoration, carry the story.",
    ],
    visual: "mobile",
    imageSrc: "/images/cctv-case.png",
    coverSrc: "/images/cctv-cover.png",
    screensSrc: "/images/cctv-screens.png",
    imageAlt: "App Store screenshots suite for Faircape Security access control and visitor features",
    coverAlt: "App Store screenshots suite for Faircape Security access control and visitor features",
    screensAlt: "App Store screenshot mockup for Faircape Security household access control",
    screensNote: "A close-up view of the App Store screenshot mockups—highlighting household access control features, readable in-frame UI, and clear feature headlines.",
  },
  {
    slug: "responsive-interface-redesigns",
    number: "06",
    name: "Responsive Interface Redesigns",
    category: "Responsive Design · UI/UX",
    description: "Before and after of the Ipsilon carrier dashboard on a smaller screen — a denser quote list refined into a clearer status overview and empty state.",
    role: "UI/UX Engineer",
    contribution: "Refined the mobile carrier dashboard for hierarchy, scanning, and empty-state clarity while keeping the same product jobs.",
    platform: "Mobile · Responsive web",
    scope: "A selected before-and-after of the Ipsilon carrier dashboard on smaller screens, not a complete product redesign.",
    challenge: "Protect quote status, earnings, and next actions when the layout has less space and more competing copy.",
    approach: "The existing mobile screen was audited for density and priority, then recomposed so status comes first and empty states explain the next step.",
    decisions: ["Lead with counts and earnings instead of long instructional copy.", "Make Browse Listings the primary action in both loaded and empty states.", "Keep awaiting, active, and delivered jobs as a simple status set."],
    visual: "responsive",
    imageSrc: "/images/responsive-after.webp",
    imageAlt: "Ipsilon carrier dashboard after the responsive redesign, with clearer stats and an empty quote state",
    coverSrc: "/images/responsive-after.webp",
    coverAlt: "Ipsilon carrier dashboard after the responsive redesign, with clearer stats and an empty quote state",
    screensSrc: "/images/responsive-after.webp",
    screensAlt: "Ipsilon carrier dashboard after the responsive redesign, with clearer stats and an empty quote state",
    beforeSrc: "/images/responsive-before.webp",
    beforeAlt: "Ipsilon carrier dashboard before the redesign, with dense instructional copy and a quote list",
    afterSrc: "/images/responsive-after.webp",
    afterAlt: "Ipsilon carrier dashboard after the responsive redesign, with clearer stats and an empty quote state",
  },
  {
    slug: "mobile-product-interfaces",
    number: "07",
    name: "Mobile Product Interfaces",
    category: "Mobile App · UI/UX",
    description: "Selected mobile application screens and interface explorations created with a focus on usability, visual clarity, and platform-appropriate interaction patterns.",
    role: "UI/UX Designer",
    contribution: "Created selected mobile flows, interface patterns, and screen explorations with attention to comfortable reach, clear states, and focused content.",
    platform: "Mobile applications",
    scope: "A curated set of mobile interface explorations.",
    challenge: "Keep essential tasks direct and legible within a small viewport and platform-specific interaction model.",
    approach: "Flows are reduced to their essential decisions, with progressive disclosure and familiar interaction patterns used to control complexity.",
    decisions: ["Give each screen a clear primary task.", "Use progressive disclosure for secondary detail.", "Design empty, loading, and completed states as part of the flow."],
    visual: "mobile",
    imageSrc: "/images/mobile-product-cover.png",
    imageAlt: "Ipsilon carrier dashboard on dual gold iPhone mockups showing delivered jobs and quote stats",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: "hello@ahmedali.io",
    href: "mailto:hello@ahmedali.io",
  },
  {
    label: "Phone",
    value: "+92332-1319363",
    href: "tel:+923321319363",
  },
  {
    label: "LinkedIn",
    value: "/in/ahmedali",
    href: "https://www.linkedin.com/in/ahmedali",
    external: true,
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
  },
] as const;

export const services = [
  ["Product & UI/UX Design", "Designing interfaces for SaaS platforms, web applications, dashboards, LMS products, and digital products."],
  ["Design Systems", "Creating reusable components, visual rules, spacing systems, typography systems, and scalable UI patterns."],
  ["Responsive Design", "Transforming desktop interfaces into practical mobile and tablet experiences."],
  ["Dashboard & SaaS Design", "Designing complex information-heavy products with clear hierarchy and efficient workflows."],
  ["Prototyping", "Creating realistic interactive Figma prototypes for product validation and stakeholder presentations."],
  ["UI Implementation Support", "Using HTML/CSS knowledge to collaborate effectively with developers and understand real-world implementation constraints."],
] as const;

export const processSteps = [
  ["Understand", "Understand the product, users, business context, and requirements."],
  ["Structure", "Define information architecture, user flows, and content hierarchy."],
  ["Design", "Create wireframes, visual direction, components, and high-fidelity interfaces."],
  ["Validate", "Review usability, interactions, responsiveness, and design consistency."],
  ["Refine", "Iterate based on feedback and prepare the experience for implementation."],
  ["Deliver", "Provide organized Figma files, components, prototypes, and implementation-ready specifications."],
] as const;

export type Insight = { slug: string; title: string; excerpt: string; category: string; date: string; time: string; paragraphs: string[] };
export const insights: Insight[] = [
  { slug: "saas-dashboard-hierarchy", title: "Designing Better SaaS Dashboards: Start With Hierarchy", excerpt: "Why information order should decide the layout before a single component is placed.", category: "SaaS Design", date: "Aug 18, 2026", time: "6 min read", paragraphs: ["A dashboard is not a collection of cards. It is a decision surface. Before choosing a chart or arranging widgets, define what someone needs to notice, understand, and act on.", "Good hierarchy separates orientation from investigation. A concise summary helps people understand the current state; supporting views let them compare; details stay available without competing for first attention.", "Responsive dashboard design makes that hierarchy explicit. When space becomes limited, priority determines what remains visible, what moves, and what becomes progressive disclosure."] },
  { slug: "responsive-beyond-smaller", title: "Why Responsive Design Is More Than Making Things Smaller", excerpt: "Rethinking structure and hierarchy for smaller screens instead of shrinking the desktop.", category: "Responsive Design", date: "Jul 29, 2026", time: "5 min read", paragraphs: ["A smaller screen changes more than dimensions. It changes how content is scanned, how controls are reached, and how much context can remain visible at once.", "Strong responsive work starts by ranking tasks. Related information may stack, secondary controls may move behind a clear action, and wide tables may become focused summaries with accessible detail.", "The goal is not visual sameness across devices. It is consistent understanding and capability, expressed through the right composition for each context."] },
  { slug: "scalable-figma-systems", title: "Building Scalable UI Systems in Figma", excerpt: "Components, tokens, and naming that hold up as a product grows.", category: "Design Systems", date: "Jun 12, 2026", time: "7 min read", paragraphs: ["A useful design system makes common decisions easier without removing judgment. Its value comes from clear rules, not from the number of components it contains.", "Start with foundations that explain hierarchy: typography, spacing, color roles, and states. Components should then encode repeatable product behavior rather than preserve one screenshot.", "Naming and documentation matter because a system is collaborative. Designers and developers should be able to understand what a pattern is for, where it changes, and what should remain consistent."] },
  { slug: "figma-to-front-end", title: "From Figma to Front-End: Designing With Implementation in Mind", excerpt: "How front-end knowledge shapes cleaner, more buildable designs.", category: "Design & Development", date: "May 21, 2026", time: "6 min read", paragraphs: ["Implementation awareness improves design decisions before handoff. It helps distinguish a reusable pattern from a one-off arrangement and reveals where content can break an otherwise polished screen.", "Thinking in layout rules, states, and constraints makes responsive behavior easier to communicate. It also helps conversations focus on intent instead of pixel-by-pixel translation.", "Designers do not need to write production code to collaborate well, but understanding HTML and CSS creates a shared language for feasibility, accessibility, and quality."] },
];