export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  summary?: string;
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
    name: "AI Assistant",
    category: "SaaS · LMS · EdTech · Product Design",
    description: "An AI-powered workspace helping educators instantly generate course content, lesson plans, quizzes, and detailed student performance analytics with ease.",
    summary: "An AI workspace for course content, lesson plans, quizzes, and student performance analytics.",
    role: "UI/UX Engineer · Product Designer",
    contribution: "Designed the product experience from the ground up, including major platform interfaces, dashboards, virtual classroom experiences, academic workflows, and responsive layouts.",
    platform: "Web platform",
    scope: "Designed an AI-powered assistant workspace within Edbanz that allows educators to generate course content, lesson plans, quizzes, and detailed student analytics instantly.",
    challenge: "Integrating AI content generation into daily teaching workflows without creating a fragmented experience or overwhelming teachers with complex tools.",
    approach: "The work began with the system: shared navigation, clear information hierarchy, reusable patterns, and responsive behavior that could support new workflows as the platform evolved.",
    decisions: ["Keep frequent academic actions close to context.", "Use repeatable patterns across student and staff workflows.", "Treat mobile layouts as re-prioritized experiences, not compressed desktop screens."],
    visual: "learning",
    imageSrc: "/images/edbanz-case.png",
    coverSrc: "/images/ai-assistant-cover.png",
    screensSrc: "/images/edbanz-screens-v6.png",
    imageAlt: "AI Assistant and Specialized Agents screen with content creation, report generation, and classroom AI agents",
    coverAlt: "AI Assistant and Specialized Agents screen with content creation, report generation, and classroom AI agents",
    screensAlt: "AI Assistant content generation workflow from prompt configuration to generated quiz outputs",
    screensNote: "A curated preview showing key steps of the user flow and interface hierarchy",
  },
  {
    slug: "gamified-battle-arena-results",
    number: "02",
    name: "Gamified Battle Arena Results",
    category: "Gamification · Product Design · SaaS",
    description: "A gamified learning interface that boosts student participation and motivation through live battle results, team performance graphs, and final leaderboards.",
    summary: "Live battle results, team performance, and leaderboards that keep competitive outcomes easy to scan.",
    role: "UI/UX Designer",
    contribution: "Designed results and ranking interfaces that make competitive outcomes easy to scan—highlighting winners, stats, and next actions without overwhelming the player.",
    platform: "Web · Product interface",
    scope: "Focused on post-battle results presentation, hierarchy, and motivational feedback rather than a full game-client build.",
    challenge: "Competitive results screens can feel dense and demotivating. The interface needs to celebrate performance while remaining clear for every player in the arena.",
    approach: "Outcomes were structured around a clear hierarchy—result first, key stats second, deeper breakdowns third—so players understand what happened and what to do next.",
    decisions: [
      "Lead with the match outcome before secondary metrics.",
      "Keep rankings and stats scannable at a glance.",
      "Use hierarchy and contrast to motivate without visual noise.",
    ],
    visual: "logistics",
    imageSrc: "/images/battle-arena-case.png",
    coverSrc: "/images/battle-arena-cover.png",
    screensSrc: "/images/battle-arena-screens-v2.png",
    imageAlt: "Battle Final Result screen with victory summary, team performance graph, and final leaderboard",
    coverAlt: "Battle Final Result screen with victory summary, team performance graph, and final leaderboard",
    screensAlt: "Battle Arena workflow from list of battles and create battle setup to final results and leaderboards",
    screensNote: "Key workflow highlights across three core stages: browsing battle lists, reviewing participating teams, and analyzing final performance results.",
  },
  {
    slug: "student-reward-marketplace",
    number: "03",
    name: "Student Reward Marketplace",
    category: "EdTech · Marketplace · Gamification · SaaS",
    description: "A gamified motivation ecosystem where teachers and management award Novas coins for high performance, top attendance, and timely assignments. Students can redeem these earned coins in the campus marketplace for personalized LMS themes, cafeteria items, and essential stationery.",
    summary: "Students redeem Novas coins for themes, cafeteria items, and stationery in a campus marketplace.",
    role: "UI/UX Designer",
    contribution: "Designed marketplace and reward-redemption flows that keep catalogs scannable, balances clear, and redemption steps simple for students.",
    platform: "Web application",
    scope: "Focused on reward catalog, balance visibility, and redemption journeys rather than a full platform rebuild.",
    challenge: "Reward systems can feel cluttered. Students need to understand what they earned, what they can redeem, and what happens next without friction.",
    approach: "The experience was structured around clarity first—points and status up front, rewards grouped for scanning, and redemption steps reduced to the essentials.",
    decisions: [
      "Keep points and eligibility visible before browsing rewards.",
      "Make reward cards scannable with clear cost and status.",
      "Simplify redemption confirmation so motivation is not lost mid-flow.",
    ],
    visual: "health",
    imageSrc: "/images/student-reward-case.png",
    coverSrc: "/images/student-reward-cover.png",
    screensSrc: "/images/student-reward-screens.png",
    imageAlt: "Student Reward Marketplace home with Novas balance, LMS themes, cafeteria, and stationery rewards",
    coverAlt: "Student Reward Marketplace home with Novas balance, LMS themes, cafeteria, and stationery rewards",
    screensAlt: "Student Reward Marketplace flow from catalog and theme preview through checkout to purchase success",
    screensNote: "A multi-step preview of the Student Reward Marketplace—showing how students browse rewards, preview themes, confirm Novas checkout, and complete a successful redemption.",
  },
  {
    slug: "dashboard-data-interfaces",
    number: "04",
    name: "Dashboard & Data Interfaces",
    category: "Dashboard · SaaS · Data Visualization",
    description: "Centralized dashboard organizing announcements, class schedules, course activities, and academic metrics seamlessly.",
    summary: "Announcements, class schedules, course activity, and academic metrics in one dashboard.",
    role: "UI/UX Engineer",
    contribution: "Explored information architecture, visual hierarchy, chart framing, tables, filtering patterns, and responsive states across selected dashboard concepts.",
    platform: "Web dashboards",
    scope: "A focused collection of interface explorations rather than one client product.",
    challenge: "Give users enough information to make decisions without allowing data density to overwhelm the page.",
    approach: "Each exploration starts with the decision a screen needs to support, then organizes summary, comparison, detail, and action around that priority.",
    decisions: ["Lead with actionable summaries.", "Use tables for precision and charts for pattern recognition.", "Preserve context when layouts reorganize on mobile."],
    visual: "data",
    imageSrc: "/images/dashboard-case.png",
    imageAlt: "AI Assistant unified teacher dashboard with announcements, courses, calendar, and class schedule",
    screensSrc: "/images/dashboard-screens-v2.png",
    screensAlt: "AI Assistant responsive dashboard architecture showing desktop and mobile layouts",
    screensNote: "Demonstrating how complex dashboard components—such as active schedules, announcements, and calendars—adapt responsively from desktop interfaces to streamlined mobile layouts.",
  },
  {
    slug: "connected-learning-ecosystem",
    number: "05",
    name: "Connected Learning Ecosystem",
    category: "EdTech · Mobile · SaaS · Product Design",
    description: "An AI-powered mobile education platform seamlessly connecting teachers, students, parents, and management to deliver real-time classroom interactions, progress tracking, and academic insights.",
    summary: "A mobile platform linking teachers, students, parents, and management in real time.",
    role: "UI/UX Designer · Product Designer",
    contribution: "Designed multi-audience product narratives and App Store–ready compositions that show live teaching, parent visibility, and AI progress reporting as one coherent mobile ecosystem.",
    platform: "iOS · Mobile product",
    scope: "Mobile presentation and feature storytelling across teacher, parent, and student journeys. Focused on hierarchy, clarity at marketing scale, and a unified product language.",
    challenge: "A learning platform serves different jobs for teachers, parents, and students. The story has to feel connected without turning into a crowded feature dump.",
    approach: "Each frame carries one clear job—updates, live teaching, family overview, or AI reports—so the ecosystem reads as progressive and intentional rather than fragmented.",
    decisions: [
      "Give each composition a single job so the story can be scanned.",
      "Keep product UI large enough to read inside the device frame.",
      "Use a calm brand field so the phones, not decoration, carry the story.",
    ],
    visual: "mobile",
    imageSrc: "/images/connected-learning-case.png",
    coverSrc: "/images/connected-learning-cover.png",
    screensSrc: "/images/connected-learning-case.png",
    imageAlt: "Connected Learning Ecosystem mobile story covering dashboard, live class, parent overview, and AI progress reports",
    coverAlt: "Connected Learning Ecosystem mobile story covering dashboard, live class, parent overview, and AI progress reports",
    screensAlt: "Connected Learning Ecosystem mobile frames for teacher updates, live teaching, and AI student progress",
    screensNote: "A multi-frame preview of the Connected Learning Ecosystem—showing how teacher updates, live classes, parent oversight, and AI progress reports work together as one product language.",
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: "ahmedtcc@zohomail.com",
    href: "mailto:ahmedtcc@zohomail.com",
  },
  {
    label: "Phone",
    value: "+92332-1319363",
    href: "tel:+923321319363",
  },
  {
    label: "LinkedIn",
    value: "in/ahmed-tcc",
    href: "https://www.linkedin.com/in/ahmed-tcc",
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