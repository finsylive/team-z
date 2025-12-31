export const projects = [
  {
    id: 3,
    title: "Exatone",
    description: "A science-driven, adaptive workout tracking app.",
    tags: ["Mobile App", "Development", "UI/UX Design"],
    image: "/images/projects/exatone.jpeg",
    content: `Case Study: Exatone
A science-driven, adaptive workout tracking app

1. What problem were we trying to solve?
Workout tracking felt fragmented, manual, and limited to notes or poorly designed apps.
Existing fitness apps lacked scientific accuracy in muscle tracking and failed to adapt to diverse goals (sports performance, fat loss, muscle gain, across genders).
There was no simple system that could log workouts effortlessly while still giving meaningful insights into muscle usage, recovery, and imbalance.

2. What did we build, and what decisions mattered?
We built Exatone, a cross-platform workout tracking app that lets users log workouts in seconds while the system handles history, recovery, and muscle analysis.
The core decision was to keep the input extremely simple (exercise, reps, weight) and push all complexity into the backend logic and data modeling.
We chose Flutter for cross-platform consistency and Supabase for scalable, migration-friendly backend infrastructure, while consciously compromising on absolute biomechanical precision due to real-world gym machine variability.

3. What changed or what did we learn because of it?
During beta testing, Exatone became a habit-forming tool, users instinctively logged workouts without friction, validating the UX direction.
A single UX change (slider-based input instead of keyboard entry) drastically improved usability, reinforcing that small interaction decisions can have outsized impact.
We learned that data quality is foundational, leading us to rework muscle-involvement datasets and postpone rushed AI features in favor of rebuilding them properly, including a future “Spot” feature, a real-time adaptive gym advisor.

One-line takeaway
Exatone taught us that great products are built by obsessing over data foundations, reducing user effort to the minimum, and letting insights emerge naturally from consistent use.`,
  },
  {
    id: 4,
    title: "Freso (Dhaara)",
    description: "A scalable B2B logistics and delivery management platform.",
    tags: ["Web App", "Mobile App", "Logistics", "B2B"],
    image: "/images/projects/fresho.jpeg",
    content: `Case Study: Freshio (Freso / Dhaara)
A scalable B2B logistics and delivery management platform

1. What problem were we trying to solve?
Regional distributors lacked a single system to manage products, orders, logistics partners, and customers across multiple regions.
Existing solutions were either fragmented (separate tools for admin, logistics, and customers) or not built for B2B workflows like KYC, regional pricing, and delivery assignment.
There was a clear need for a unified platform that could handle multi-role access, real-time order flow, and cross-platform usage without duplicating backend logic.

2. What did we build, and what decisions mattered?
We built Freshio (Dhaara), a full-stack B2B logistics system consisting of a Next.js web platform (admin, logistics, customer portals) and a Flutter mobile app for customers.
A key architectural decision was using a single shared Supabase backend for web and mobile, enabling one source of truth, unified authentication, and real-time sync across platforms.
We designed strict role-based access control (Super Admin, Regional Admin, Logistics Partner, Customer) enforced at the database level using RLS, reducing application-layer complexity while improving security and scalability.

3. What changed or what did we learn because of it?
The system successfully supported end-to-end order flow, from regional product listing and KYC to delivery OTP verification, validating the shared-backend architecture.
We learned that enforcing business logic at the database level (RLS + schema design) dramatically simplifies multi-platform development and reduces bugs.
If rebuilt, we would modularize analytics and reporting earlier, as operational data quickly became valuable for regional decision-making once the platform was in use.

One-line takeaway
Freshio demonstrates how a well-designed shared backend and role-driven architecture can power complex B2B logistics workflows across web and mobile without duplication.`,
  },
  {
    id: 5,
    title: "Ments",
    description: "A cross-college collaboration and mentorship platform.",
    tags: ["Mobile App", "Collaboration", "Mentorship"],
    image: "/images/projects/ments.png",
    content: `Case Study: Ments
A cross-college collaboration and mentorship platform

1. What problem were we trying to solve?
Students and early-stage builders lacked a single platform to showcase real work, find collaborators across colleges, and get actionable mentorship.
Existing platforms focused either on social networking or static portfolios, with little support for live project status, team formation, or structured guidance.
There was no ecosystem that meaningfully connected entrepreneurs, mentors, and facilitators while keeping project-building at the center.

2. What did we build, and what decisions mattered?
We built Ments, a cross-platform application that allows users to showcase projects, find teammates, connect with mentors, and collaborate beyond institutional boundaries.
The app was built using Flutter to ensure a consistent experience across Android and iOS, enabling rapid iteration while maintaining performance.
We deliberately designed Ments as an entrepreneur-first platform, prioritizing project workflows and collaboration mechanics over vanity metrics or generic social feeds.

3. What changed or what did we learn because of it?
Early usage validated that users cared more about working together on real projects than passive networking.
We learned that clear role separation (builders, mentors, facilitators) is essential to avoid noise and maintain high signal quality in collaborations.
If rebuilt, we would invest earlier in discovery and matching logic to help users find the right collaborators and mentors faster.

One-line takeaway
Ments shows how focusing on real work instead of social interaction can create a more meaningful collaboration ecosystem.`,
  },
  {
    id: 6,
    title: "Dark Academia Portfolio",
    description: "A highly personalized, narrative-driven portfolio website.",
    tags: ["Web Design", "Development", "Branding"],
    image: "/images/projects/portfolio.jpeg",
    content: `Case Study: Personal Portfolio: Dark Academia Edition
A highly personalized, narrative-driven portfolio website

1. What problem were we trying to solve?
The client was a creative professional who felt that standard, minimalist portfolio templates stripped away her personality. She didn't just want to display work; she wanted the website itself to be an extension of her artistic identity.
The challenge was to balance a "chaotic" and deeply personal aesthetic with the functional requirements of a professional portfolio. It needed to be quirky enough to be memorable, but usable enough to get her hired.

2. What did we build, and what decisions mattered?
We built a bespoke Next.js website that defied conventional grid layouts in favor of a narrative-driven experience.
*   **Aesthetic Direction:** We committed to a "Dark Academia" vibe, using deep earth tones, serif typography, and texture overlays. We incorporated custom graphics inspired by her own design work to make every pixel feel authored.
*   **UX Design:** We borrowed interaction patterns from old-school computer interfaces—draggable windows, retro cursors, and raw text styling. This created a sense of nostalgia and "digital tactility."
*   **Content Strategy:** Instead of standard "About" copy, we deep-dived into her social media presence to extract specific mannerisms and "easter eggs," weaving them into the site's micro-copy.

3. What changed or what did we learn because of it?
The outcome was a site that felt undeniably "her." The client reported that the site successfully filtered for the *right* kind of employers—those who valued creativity and voice over corporate sterility.
We learned that in personal branding, distinctiveness beats polish. By leaning into the "chaos" of her creative process rather than hiding it, we created a digital space that felt human and authentic.

One-line takeaway
A portfolio shouldn't just show your work; it should show how your mind works.`,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Product Design",
    date: "Oct 24, 2023",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    content: `Digital product design is evolving rapidly. As we move further into the decade, we're seeing a shift towards more immersive, personalized, and ethical design practices.

    Key trends include:
    1. AI-Driven Personalization: Interfaces that adapt to user behavior in real-time.
    2. Neomorphism and Glassmorphism: The return of depth and texture in UI.
    3. Accessibility First: Designing for everyone, not just the majority.
    
    The future belongs to products that not only solve problems but do so with empathy and foresight. Designers must balance aesthetics with functionality and ethical considerations.`,
  },
  {
    id: 2,
    title: "How to Scale Your Startup Effectively",
    date: "Nov 02, 2023",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    content: `Scaling a startup is a delicate balancing act. It requires maintaining your company culture while expanding your team and customer base.

    Strategies for effective scaling:
    - Automate Processes: Use tools to handle repetitive tasks.
    - Hire for Culture Fit: Skills can be taught; attitude cannot.
    - Focus on Customer Retention: It's cheaper to keep existing customers than to acquire new ones.
    
    Remember, growth should be sustainable. Premature scaling is one of the top reasons why startups fail.`,
  },
  {
    id: 3,
    title: "Web Development Trends for 2024",
    date: "Nov 15, 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
    content: `The web development landscape is constantly shifting. Staying ahead means keeping an eye on emerging technologies and frameworks.

    What to watch in 2024:
    - Server Components: React Server Components are changing how we build full-stack apps.
    - Edge Computing: Moving logic closer to the user for faster response times.
    - No-Code/Low-Code Integration: Developers are using these tools to speed up prototyping.
    
    Whether you are a frontend or backend developer, adaptability is your most valuable skill.`,
  },
];
