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
};

export const projects: Project[] = [
  {
    slug: "edbanz",
    number: "01",
    name: "EdBanz",
    category: "SaaS · LMS · EdTech · Product Design",
    description: "An AI-powered connected education platform designed to bring teaching, learning, academic operations, and student management into one unified ecosystem.",
    role: "UI/UX Engineer · Product Designer",
    contribution: "Designed and developed the product experience from the ground up, including major platform interfaces, dashboards, virtual classroom experiences, academic workflows, and responsive layouts.",
    platform: "Responsive web platform",
    scope: "Built from the early product stage with a focus on scalable UI patterns and consistent product experiences.",
    challenge: "Bring several connected academic workflows into one interface without making the product feel fragmented or difficult to learn.",
    approach: "The work began with the system: shared navigation, clear information hierarchy, reusable patterns, and responsive behavior that could support new workflows as the platform evolved.",
    decisions: ["Keep frequent academic actions close to context.", "Use repeatable patterns across student and staff workflows.", "Treat mobile layouts as re-prioritized experiences, not compressed desktop screens."],
    visual: "learning",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Analytics dashboard displayed on a laptop screen for the EdBanz education platform",
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
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Product team reviewing a logistics marketplace workflow together",
  },
  {
    slug: "nhg-hospital-management",
    number: "03",
    name: "NHG Hospital Management System",
    category: "Healthcare · Dashboard · SaaS",
    description: "A hospital management platform containing complex operational workflows and data-heavy interfaces.",
    role: "UI/UX Designer",
    contribution: "Redesigned selected features and screens to improve usability, hierarchy, visual consistency, and responsive presentation.",
    platform: "Responsive web application",
    scope: "The work covered selected features and screens rather than ownership of the complete hospital management system.",
    challenge: "Make dense operational information easier to understand while preserving the precision expected from a healthcare workflow.",
    approach: "The selected screens were reorganized around task priority, stronger labels, calmer density, and consistent states across tables and summaries.",
    decisions: ["Use contrast sparingly to signal priority.", "Keep operational tables dense but legible.", "Expose status and context without adding visual noise."],
    visual: "health",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Healthcare professional using a tablet for hospital management work",
  },
  {
    slug: "dashboard-data-interfaces",
    number: "04",
    name: "Dashboard & Data Interfaces",
    category: "Dashboard · SaaS · Data Visualization",
    description: "Selected dashboard and data-heavy interface explorations focused on clarity, hierarchy, responsive behavior, and efficient information presentation.",
    role: "UI/UX Engineer",
    contribution: "Explored information architecture, visual hierarchy, chart framing, tables, filtering patterns, and responsive states across selected dashboard concepts.",
    platform: "Responsive web dashboards",
    scope: "A focused collection of interface explorations rather than one client product.",
    challenge: "Give users enough information to make decisions without allowing data density to overwhelm the page.",
    approach: "Each exploration starts with the decision a screen needs to support, then organizes summary, comparison, detail, and action around that priority.",
    decisions: ["Lead with actionable summaries.", "Use tables for precision and charts for pattern recognition.", "Preserve context when layouts reorganize on mobile."],
    visual: "data",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Data infrastructure representing complex dashboard and analytics interfaces",
  },
  {
    slug: "responsive-interface-redesigns",
    number: "05",
    name: "Responsive Interface Redesigns",
    category: "Responsive Design · UI/UX",
    description: "A collection of selected interface improvements where desktop experiences were adapted and refined for smaller screens.",
    role: "UI/UX Engineer",
    contribution: "Refined responsive layouts, component consistency, mobile usability, spacing, hierarchy, and interaction patterns.",
    platform: "Desktop · Tablet · Mobile",
    scope: "Selected responsive improvements across interface concepts.",
    challenge: "Protect task clarity and visual hierarchy when space, input method, and user context change.",
    approach: "Desktop patterns were re-evaluated by priority rather than scaled down, allowing content and controls to recompose for each breakpoint.",
    decisions: ["Reorder content around mobile task priority.", "Keep controls touch-friendly and labels visible.", "Test long content and compact widths early."],
    visual: "responsive",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Responsive website displayed on a developer workstation",
  },
  {
    slug: "mobile-product-interfaces",
    number: "06",
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
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Mobile application interface displayed on a smartphone",
  },
];

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