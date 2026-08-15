export const site = {
  name: "Anthony Ecom",
  legalName: "Anthony Ecom Buy-Up LLC",
  founder: "Papa Anthony Thomas",
  domain: "https://anthonyecom.com",
  address: "31 Herring St, Cartersville, GA 30120, USA",
  phone: "(470) 303-6327",
  phoneHref: "+14703036327",
  emails: {
    ceo: "ceo@anthonyecom.com",
    info: "info@anthonyecom.com",
    support: "support@anthonyecom.com",
  },
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { value: 480, prefix: "$", suffix: "k+", label: "Ad spend managed", decimals: 0 },
  { value: 4.6, prefix: "", suffix: "x", label: "Avg. blended ROAS", decimals: 1 },
  { value: 12, prefix: "", suffix: "+", label: "Brands under management", decimals: 0 },
  { value: 9.4, prefix: "", suffix: "x", label: "Best documented ROAS", decimals: 1 },
];

export const niches = [
  "Home & Kitchen",
  "Beauty & Skincare",
  "Health & Wellness",
  "Electric Mobility",
  "Jewelry & Fashion",
  "Kids & Toys",
  "Automotive",
  "Food & Beverage",
  "Pet Supplies",
  "Fitness & Sports",
  "Electronics",
  "Furniture & Decor",
];

export const painPoints = [
  {
    title: "Revenue is up. Profit is flat.",
    body: "Top-line grows every quarter, but contribution margin never moves. You are scaling activity, not a business.",
  },
  {
    title: "Branded search takes credit for everything.",
    body: "Your dashboard says 8x ROAS. Strip out people who already knew your name and the real number tells a different story.",
  },
  {
    title: "Cold traffic never turns profitable.",
    body: "Every attempt to scale beyond warm audiences burns cash for two weeks and quietly gets switched off.",
  },
  {
    title: "You don't actually know your CAC.",
    body: "Three platforms claim the same conversion. Nobody in the building can say what a new customer truly costs.",
  },
  {
    title: "Dashboards everywhere. Decisions nowhere.",
    body: "You get a weekly link full of charts and zero sentences about what changed, why, and what happens next.",
  },
  {
    title: "Scaling feels like gambling.",
    body: "Raising budgets is a coin flip. Some weeks it works, some weeks it torches margin — and nobody can explain either outcome.",
  },
];

export const services = [
  {
    slug: "google-ads",
    title: "Google Ads",
    tag: "Core Engine",
    description:
      "Search, Shopping and Performance Max rebuilt around contribution margin — not platform-reported ROAS. Our AI bidding layer watches every auction 24/7 so budget flows to what actually makes you money.",
    bullets: [
      "Non-branded growth as the primary KPI",
      "AI-assisted bid & budget pacing, reviewed daily by a senior buyer",
      "Full rebuilds of wasted-spend account structures",
    ],
  },
  {
    slug: "shopping-feed-pmax",
    title: "Shopping Feed & PMax",
    tag: "Revenue Infrastructure",
    description:
      "Most Shopping accounts underperform because of the feed, not the campaigns. We rebuild titles, attributes and supplemental feeds so the algorithm sells the right product to the right query.",
    bullets: [
      "Feed audits, restructuring & supplemental feeds",
      "PMax asset-group architecture by margin tier",
      "Query-level sculpting to protect non-branded spend",
    ],
  },
  {
    slug: "meta-paid-social",
    title: "Meta & Paid Social",
    tag: "Demand Creation",
    description:
      "Meta and YouTube used where they actually belong in your funnel. AI creative testing at machine speed — dozens of hooks and angles scored weekly, losers killed before they burn budget.",
    bullets: [
      "AI-scored creative testing sprints",
      "Full-funnel retargeting mapped to LTV",
      "UGC & static frameworks proven on our own portfolio brands",
    ],
  },
  {
    slug: "microsoft-ads",
    title: "Microsoft Ads",
    tag: "Untapped Channel",
    description:
      "The channel everyone skips. Cheaper auctions, older and wealthier buyers, and import workflows that let us mirror your winning Google structure in days — not months.",
    bullets: [
      "Direct import & restructure of proven campaigns",
      "Audience layering for high-AOV demographics",
      "Often the cheapest incremental revenue in the account",
    ],
  },
  {
    slug: "email-retention",
    title: "Email & Retention",
    tag: "Profit Multiplier",
    description:
      "Paid acquisition should never carry the whole business. Klaviyo flows, campaigns and segmentation engineered so every customer you pay for once buys three more times for free.",
    bullets: [
      "Core flow buildouts (welcome, abandon, post-purchase, win-back)",
      "AI-driven send-time & segment optimization",
      "30–40% of revenue moved off paid channels",
    ],
  },
  {
    slug: "cro-storefront",
    title: "CRO & Storefront",
    tag: "Conversion Layer",
    description:
      "Traffic is only half the equation. We run structured landing page and PDP testing — informed by session analytics and AI heatmap analysis — so the same ad spend converts more visitors.",
    bullets: [
      "Landing page & PDP test roadmaps",
      "Speed, UX and offer-architecture audits",
      "Every paid click worth more, every month",
    ],
  },
];

export const aiFeatures = [
  {
    title: "Predictive Budget Allocation",
    body: "Our models forecast which campaigns will hold efficiency at higher spend — before we raise a single budget. Scaling gated on math, not vibes.",
  },
  {
    title: "24/7 Anomaly Detection",
    body: "Tracking breaks, feeds disapprove, CPCs spike at 2am. Our systems catch it in minutes and alert a human strategist — not at the monthly report.",
  },
  {
    title: "AI Creative Intelligence",
    body: "Every hook, angle and asset scored against historical winners across our portfolio. We know what to test next before your competitors finish guessing.",
  },
  {
    title: "Profit-First Attribution",
    body: "We rebuild your measurement stack so decisions run on contribution margin and true new-customer CAC — not whichever platform shouts the loudest.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  niche: string;
  region: string;
  period: string;
  roas: number;
  revenue: string;
  summary: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "electric-mobility",
    client: "Electric Mobility Brand",
    niche: "E-Scooters & Skateboards",
    region: "US & UK",
    period: "10 weeks",
    roas: 4.55,
    revenue: "$86k",
    summary:
      "Rebuilt Search and PMax around contribution margin across two storefronts, layered AI budget pacing on top, and doubled non-branded spend while holding efficiency week over week.",
    featured: true,
  },
  {
    slug: "automotive-accessories",
    client: "Automotive Accessories Brand",
    niche: "Automotive",
    region: "US",
    period: "8 weeks",
    roas: 9.42,
    revenue: "$41k",
    summary:
      "Found the entire margin story hiding in a broken shopping feed. Rebuilt titles and attributes, restructured by margin tier, and let the AI bidding layer do the rest. Our best documented return so far.",
    featured: true,
  },
  {
    slug: "german-jewelry",
    client: "European Jewelry Brand",
    niche: "Jewelry & Fashion",
    region: "Germany",
    period: "30 days",
    roas: 6.8,
    revenue: "€22k",
    summary:
      "A holiday-window sprint: predictive budget models identified exactly which products could absorb aggressive spend, and we scaled into the season instead of reacting to it.",
    featured: true,
  },
  {
    slug: "home-decor",
    client: "Home Decor Brand",
    niche: "Home & Living",
    region: "US",
    period: "2 months",
    roas: 5.12,
    revenue: "$34k",
    summary:
      "High-SKU catalog with zero structure. We rebuilt the feed, sculpted queries away from branded terms, and turned a break-even account into the most profitable channel in the business.",
  },
  {
    slug: "sleep-wellness",
    client: "Sleep & Wellness Brand",
    niche: "Health & Wellness",
    region: "US",
    period: "6 weeks",
    roas: 3.9,
    revenue: "$18k",
    summary:
      "A compliance-heavy category everyone else refused to touch. Careful policy-safe structures plus retention flows moved a meaningful share of revenue off paid entirely.",
  },
  {
    slug: "kids-toys",
    client: "Kids & Toys Brand",
    niche: "Kids & Toys",
    region: "US",
    period: "7 weeks",
    roas: 4.7,
    revenue: "$12k",
    summary:
      "A seasonal sprint from a standing start. AI creative scoring picked the winning angles in week one; we spent the remaining six scaling them.",
  },
  {
    slug: "health-brand",
    client: "Health & Wellness Brand",
    niche: "Health & Wellness",
    region: "US",
    period: "8 weeks",
    roas: 3.13,
    revenue: "$15.5k",
    summary:
      "Rebuilt measurement first — the old account was optimizing to a conversion event that double-counted. Real numbers, then real scale.",
  },
  {
    slug: "in-house-brand",
    client: "In-House Portfolio Brand",
    niche: "eCommerce",
    region: "US",
    period: "3 months",
    roas: 4.64,
    revenue: "$52k",
    summary:
      "One of our own. Every strategy we sell gets tested here first, with our own money — three months of compounding proof that the playbook works.",
  },
];

export const resultsStats = [
  { value: 5.2, suffix: "x", label: "Average ROAS across engagements", decimals: 1 },
  { value: 9.42, suffix: "x", label: "Best documented single-account return", decimals: 2 },
  { value: 4, suffix: "", label: "Countries actively running accounts", decimals: 0 },
];

export const processSteps = [
  {
    phase: "Week 1",
    title: "Diagnose",
    body: "We audit the account, the measurement stack and the unit economics. Most engagements uncover broken tracking or wasted spend in the first seven days — you get the findings in writing either way.",
  },
  {
    phase: "Week 1–2",
    title: "Blueprint",
    body: "A written growth plan with specific deliverables, spend gates and projections from our forecasting models. No vague strategy decks — a document you could hand to any team and execute.",
  },
  {
    phase: "Week 2–4",
    title: "Build",
    body: "Tracking first, structure second, spend third. We rebuild in the right order so every dollar that follows is measured properly and allocated by the AI layer from day one.",
  },
  {
    phase: "Month 2+",
    title: "Compound",
    body: "Weekly written reporting, a fixed testing cadence, and scaling gated on an efficiency floor. Budgets rise when the math says they can — and the account compounds instead of resetting.",
  },
];

export const differentiators = [
  {
    title: "Operators, not account managers",
    body: "Anthony Ecom Buy-Up LLC owns and scales its own portfolio of eCommerce brands. Every strategy we run on your account was tested with our own money first.",
  },
  {
    title: "AI leverage, human judgment",
    body: "Our systems watch your account 24/7 and surface what matters. But a senior strategist — not a model, not a junior — makes every meaningful decision.",
  },
  {
    title: "Profit, not platform ROAS",
    body: "In-platform ROAS is a vanity number. We optimize to contribution margin and true new-customer CAC, because that is what pays your bills.",
  },
  {
    title: "Month-to-month contracts",
    body: "No twelve-month lock-in. We keep clients by compounding results, not by holding them hostage to a signature.",
  },
  {
    title: "Reporting you can actually read",
    body: "A weekly written summary of what changed, why, and what happens next — in sentences, not just dashboards.",
  },
];

export const comparison = {
  rows: [
    { label: "Optimization focus", typical: "Platform ROAS", us: "Contribution margin" },
    { label: "Contracts", typical: "6–12 month lock-in", us: "Month-to-month" },
    { label: "Who runs your account", typical: "Junior handed off after sales", us: "The strategist who audited it" },
    { label: "Measurement", typical: "Assumed to be correct", us: "Audited and rebuilt first" },
    { label: "Monitoring", typical: "Checked at the weekly call", us: "AI systems, 24/7" },
    { label: "Testing", typical: "Ad-hoc, at your expense", us: "Fixed cadence, proven on our brands" },
    { label: "Reporting", typical: "A dashboard link", us: "Written weekly analysis" },
    { label: "Scaling decisions", typical: "Raise budgets and hope", us: "Gated on an efficiency floor" },
  ],
};

export const values = [
  {
    title: "Own the number",
    body: "We sign our name to outcomes, not activity. If the number moves, we say why. If it doesn't, we say that louder.",
  },
  {
    title: "Say the real thing",
    body: "Good news and bad news travel at the same speed here. You will never learn about a problem from your P&L before you hear it from us.",
  },
  {
    title: "Win together or not at all",
    body: "Client wins first, then the team, then the agency. Month-to-month contracts keep that order honest.",
  },
  {
    title: "Test before you believe",
    body: "Opinions are hypotheses. Every strategy earns its place through data — usually on our own portfolio brands before it ever touches yours.",
  },
  {
    title: "Build the asset",
    body: "Everything we create — structures, feeds, flows, learnings — belongs to you and keeps working after we're gone. No dependencies by design.",
  },
  {
    title: "Be worth keeping",
    body: "With no lock-in, we have to re-earn the engagement every single month. That pressure is the point.",
  },
];

export const testimonials = [
  {
    quote:
      "Every previous agency reported a ROAS that never showed up in our P&L. Anthony Ecom rebuilt our tracking in week one, told us the real number was half of what we thought, and then actually improved it. That honesty is why we're still here.",
    author: "Founder",
    company: "Electric Mobility Brand, UK",
  },
  {
    quote:
      "Paid hadn't moved in months. They found a broken conversion event our old agency had been optimizing to the whole time. Eight weeks in, non-branded revenue is up 60% and I can finally read our reports without a translator.",
    author: "Operations Director",
    company: "Home & Kitchen Brand, US",
  },
  {
    quote:
      "We came in six weeks before the holiday window. Their forecasting models told us exactly which products could take aggressive budget — we finished the season at close to 7x on cold traffic. I've never seen scaling look that calm.",
    author: "eCommerce Manager",
    company: "Jewelry Brand, Germany",
  },
  {
    quote:
      "Our category is a compliance nightmare and every agency before them told us Google was impossible. They built policy-safe structures, started shifting revenue to email, and made the whole machine boring — in the best possible way.",
    author: "Managing Partner",
    company: "Health & Wellness Brand, US",
  },
];

export const faqs = [
  {
    q: "Who do you work with?",
    a: "eCommerce and DTC brands doing $20k+ per month in revenue. Below that, paid media usually isn't the constraint — and we'll tell you so on the call rather than take your money.",
  },
  {
    q: "What does 'AI-powered' actually mean here?",
    a: "Proprietary systems that monitor accounts 24/7, forecast which campaigns can absorb more budget, detect anomalies in minutes, and score creative against historical winners. Humans make every strategic decision; the AI makes sure they're making it with perfect information.",
  },
  {
    q: "How fast will I see results?",
    a: "Most brands see measurable improvement in 30–60 days. Weeks 1–4 are diagnosis and rebuilding — rushing spend onto broken tracking is how agencies burn your budget. Give it a full two months to judge fairly.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Month-to-month, always. We keep clients by compounding results, not signatures.",
  },
  {
    q: "What channels do you manage?",
    a: "Google Ads (Search, Shopping, PMax), Microsoft Ads, Meta & YouTube, email & retention (Klaviyo), and conversion-rate optimization on your storefront.",
  },
  {
    q: "How is reporting handled?",
    a: "A written weekly summary — what changed, why, and what happens next — plus a live dashboard with the metrics that actually matter: contribution margin, new-customer CAC and blended ROAS.",
  },
];

export const leadMagnet = {
  eyebrow: "Free Resource",
  title: "Know your real margins — or you don't have a real business.",
  body: "Especially in eCommerce. Our Profit Analysis Template gives you a holistic view of your true numbers — contribution margin, real CAC, break-even ROAS per product — and takes the guesswork away. The same sheet we open on day one of every engagement.",
  bullets: [
    "Contribution margin per SKU, calculated for you",
    "True new-customer CAC across all channels",
    "Break-even ROAS targets you can hand to any media buyer",
  ],
  cta: "Send Me the Free Template",
};
