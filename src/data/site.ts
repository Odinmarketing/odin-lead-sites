// ============================================================
// SITE DATA — one repo, many leads.
// Each lead in `leads` becomes its own site at /<slug> (+ /about, /contact).
//
// FILL SCOPE (the structure decision):
//   HOME      = per-lead BESPOKE fill. Scraped-and-rewritten REWRITEABLE copy
//               goes here in slice 3. This is the ONLY page with HARD-CLAIM slots
//               (credentials, testimonials, stats).
//   ABOUT     = SHARED template content (OMH's own story/values). Same across all
//               leads. No hard-claim slots.
//   CONTACT   = SHARED template content. A static CTA pointing to our channel.
//               Lead-agnostic except the STRUCTURED phone/email. No hard-claim.
//
// CATEGORIES (see FILL-RULES.md):
//   STRUCTURED  -> clean facts (Apollo/Airtable/scrape). Bracket placeholder now.
//   REWRITEABLE -> rewritten from the lead's OWN scraped copy. Lorem ipsum now.
//   HARD-CLAIM  -> NEVER auto-fill. Stays an obvious [bracket] placeholder always.
//
// TEST PHASE (current): all placeholder. NO Airtable, NO scraping, NO real content.
// ============================================================

export interface Lead {
  slug: string;
  company: {
    name: string;
    logo: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    yearsInBusiness: string;
    credentials: string[];
  };
  nav: {
    links: { label: string; href: string }[];
    cta: { label: string; href: string };
  };
  home: any;
  about: any;
  contact: any;
  cta: { eyebrow?: string; headline: string; line: string };
  // Option A: per-lead accent (their brand color) applied to the accent token ONLY.
  // Omit -> page uses the default OMH gold. accentDk is a darker shade for hover.
  accent?: string;
  accentDk?: string;
}

// ------------------------------------------------------------
// SHARED TEMPLATE CONTENT — identical for every lead.
// Not bespoke-filled per lead. Lightly tuned OMH content lives here.
// ------------------------------------------------------------

// REWRITEABLE (shared) — static contact CTA copy. Lead-agnostic.
// Used on HOME (where the form used to sit) and on CONTACT.
const SHARED_CTA = {
  eyebrow: "Start here",
  headline: "Lorem ipsum dolor sit amet.",
  line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
};

// SHARED about content (OMH's own story/values). No hard-claim slots.
const SHARED_ABOUT = {
  // REWRITEABLE (shared)
  hero: {
    eyebrow: "Lorem ipsum",
    headline: "Lorem ipsum dolor sit amet.",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  // REWRITEABLE (shared)
  story: {
    heading: "Lorem ipsum",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  // REWRITEABLE (shared)
  values: {
    eyebrow: "Lorem ipsum",
    heading: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      { label: "LOREM IPSUM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
      { label: "DOLOR SIT", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
      { label: "AMET CONSECTETUR", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
    ],
  },
};

// SHARED contact content. The CTA itself comes from SHARED_CTA. No hard-claim slots.
const SHARED_CONTACT = {
  // REWRITEABLE (shared)
  hero: {
    eyebrow: "Lorem ipsum",
    headline: "Lorem ipsum dolor sit amet.",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
};

// ------------------------------------------------------------
// PER-LEAD BESPOKE HOME — the only page filled per lead in slice 3.
// `label` only varies the obvious name placeholder so the demo pages differ.
// ------------------------------------------------------------
function makeHome(base: string) {
  return {
    // REWRITEABLE (bespoke) — hero rewritten from their hero copy.
    // Headline kept short (<= 8 words). Subhead names industry + core problem.
    hero: {
      eyebrow: "Lorem ipsum · dolor sit",
      headline: "Lorem ipsum dolor sit amet consectetur elit.",
      sub: "Lorem ipsum dolor sit amet for industrial operators, consectetur adipiscing elit sed.",
      // CTA escalation, level 1 (low friction): early CTA + secondary text link.
      primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
      secondaryCta: { label: "Download the spec sheet", href: "#" },
    },
    // HARD-CLAIM (home only) — 3 hard differentiators in the hero spec panel.
    // Labels, values, and units are all bracket placeholders, never invented.
    heroSpec: [
      { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
    ],
    // HARD-CLAIM (home only) — thin trust strip proof line under the hero.
    heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
    // REWRITEABLE (bespoke) — buyer's pain in their language.
    problems: {
      eyebrow: "Lorem ipsum",
      heading: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      items: [
        { label: "LOREM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
        { label: "IPSUM", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." },
        { label: "DOLOR", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
      ],
    },
    // REWRITEABLE (bespoke) — MAP THEIR SERVICES HERE.
    ledger: {
      eyebrow: "Lorem ledger",
      heading: "Lorem ipsum dolor sit amet.",
      rows: [
        { spec: "01", capability: "Lorem ipsum dolor", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { spec: "02", capability: "Sit amet consectetur", detail: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { spec: "03", capability: "Adipiscing elit sed", detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
        { spec: "04", capability: "Tempor incididunt", detail: "Duis aute irure dolor in reprehenderit in voluptate velit." },
      ],
    },
    // REWRITEABLE (bespoke) — real process from their copy. No invented numbers.
    process: {
      eyebrow: "Lorem process",
      heading: "Lorem ipsum dolor sit amet consectetur.",
      steps: [
        { n: "1", title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed." },
        { n: "2", title: "Dolor sit", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { n: "3", title: "Consectetur", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
        { n: "4", title: "Adipiscing", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
      ],
    },
    // REWRITEABLE (bespoke, home only) — scroll-driven process flow diagram.
    // 3 node labels as bracket slots, lorem-safe; filled from their real process later.
    flow: {
      eyebrow: "Lorem ipsum",
      heading: "Lorem ipsum dolor sit amet flow.",
      steps: ["[Step one]", "[Step two]", "[Step three]"],
    },
    // HARD-CLAIM (home only) — stats. figure/unit/label/context all brackets.
    // figure feeds the count-up via data-count; brackets make it no-op gracefully.
    stats: {
      eyebrow: "Lorem ipsum",
      heading: "Lorem ipsum dolor sit amet.",
      items: [
        { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
      ],
    },
    // CTA escalation, level 2 (medium): mid-page quote band.
    ctaMid: {
      // REWRITEABLE (shared framing)
      heading: "Lorem ipsum dolor sit amet consectetur.",
      label: "Request a quote",      // medium-friction CTA
      href: `${base}/contact`,
    },
    // HARD-CLAIM (home only) — dedicated trust band: client logos + cert badges.
    trustBand: {
      // REWRITEABLE heading
      heading: "Lorem ipsum dolor sit amet.",
      logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
      certs: ["[Cert badge]", "[Compliance badge]"],
    },
    // HARD-CLAIM (home only) — testimonials. NEVER auto-fill. All fields brackets.
    proof: {
      eyebrow: "[Proof: real results only]",
      heading: "[Add real customer results]",
      testimonials: [
        { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
      ],
    },
    // CTA escalation, level 3 (high): final hard close, reuses static contact CTA.
    endCta: {
      eyebrow: "Book a scope call",
      headline: "Lorem ipsum dolor sit amet consectetur.",
      line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    // MIXED — questions generic; ANSWERS are HARD-CLAIM-prone -> bracket placeholders.
    faq: {
      eyebrow: "Lorem ipsum",
      heading: "Lorem ipsum dolor sit amet?",
      items: [
        { q: "Lorem ipsum dolor sit amet?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        { q: "Consectetur adipiscing elit?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        { q: "Sed do eiusmod tempor incididunt?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
      ],
    },
  };
}

function makeLead(slug: string, label: string): Lead {
  const base = `/${slug}`;
  return {
    slug,
    company: {
      // STRUCTURED — lead's business name (Airtable). Placeholder in test.
      name: `[Company Name (${label})]`,
      // STRUCTURED — lead's logo image URL. Empty in test -> Header shows CSS-mark fallback.
      logo: "",
      // REWRITEABLE — one-line tagline rewritten from their site. Lorem in test.
      tagline: "Lorem ipsum dolor sit amet consectetur.",
      // STRUCTURED — Airtable Phone.
      phone: "[(555) 555-0100]",
      // STRUCTURED — Airtable Email.
      email: "[email@company.com]",
      // STRUCTURED — Airtable / scraped address.
      address: "[City, State]",
      // HARD-CLAIM (rendered on home only) — years in business. Never auto-fill.
      yearsInBusiness: "[##]",
      // HARD-CLAIM (rendered on home only via CredentialStrip) — cert/stat strip.
      credentials: [
        "[Add a certification]",
        "[Add years in business]",
        "[Add a key metric]",
        "[Add a key metric]",
      ],
    },

    nav: {
      // STRUCTURED (routing) — slug-aware nav.
      links: [
        { label: "Home", href: base },
        { label: "About", href: `${base}/about` },
        { label: "Contact", href: `${base}/contact` },
      ],
      // REWRITEABLE — header CTA points at the on-page contact CTA.
      cta: { label: "Talk to us", href: `${base}/contact` },
    },

    home: makeHome(base),     // PER-LEAD bespoke fill
    about: SHARED_ABOUT,      // SHARED template content
    contact: SHARED_CONTACT,  // SHARED template content
    cta: SHARED_CTA,          // SHARED static CTA copy (home + contact)
  };
}

// ------------------------------------------------------------
// REAL LEAD — Stat Logistics International (slice 3).
// Mapped from: Airtable record (structured) + Firecrawl scrape of statlogistics.com
// (rewriteable). Raw source saved at outputs/statlogistics.com-scrape.json.
// Each filled slot is tagged with its category. REWRITEABLE slots trace ONLY to
// their scraped copy, no added facts. HARD-CLAIM slots stay bracketed.
// ------------------------------------------------------------
function statLogisticsLead(): Lead {
  const base = "/stat-logistics";
  return {
    slug: "stat-logistics",
    company: {
      name: "Stat Logistics International",            // STRUCTURED (Airtable)
      logo: "",                                          // STRUCTURED: no clean current logo. Their homepage shows the WP theme placeholder; the only image asset (og:image SetSail.png, 2012, reads "SET SAIL") is stale/mismatched and not displayed on their site -> use clean wordmark fallback, not a guessed asset.
      tagline: "Domestic, air, and ocean freight forwarding for California shippers.", // REWRITEABLE (their meta description + title)
      phone: "(510) 783-7355",                          // STRUCTURED (Airtable +15107837355)
      email: "patrick@statlogistics.com",               // STRUCTURED (Airtable)
      address: "[City, State]",                          // STRUCTURED: no clean address in Airtable/scrape -> bracket
      yearsInBusiness: "[##]",                           // HARD-CLAIM: never auto-fill
      credentials: [                                     // HARD-CLAIM: never auto-fill
        "[Add a certification]",
        "[Add years in business]",
        "[Add a key metric]",
        "[Add a key metric]",
      ],
    },
    nav: {
      links: [
        { label: "Home", href: base },
        { label: "About", href: `${base}/about` },
        { label: "Contact", href: `${base}/contact` },
      ],
      cta: { label: "Talk to us", href: `${base}/contact` },
    },
    home: {
      hero: {
        eyebrow: "Freight forwarding · 3PL",            // REWRITEABLE (their title)
        headline: "Your cargo, moved the most direct way.", // REWRITEABLE ("goods will always move in the most direct manner")
        sub: "STAT Logistics arranges air, ocean, and 3PL freight forwarding, and monitors every shipment for on time delivery.", // REWRITEABLE (services + Our Commitment)
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [                                         // HARD-CLAIM: differentiators/figures never invented
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"], // HARD-CLAIM
      problems: {                                         // REWRITEABLE (all from Our Commitment / freight-forwarder copy)
        eyebrow: "What we manage",
        heading: "Freight problems, handled before they reach you.",
        items: [
          { label: "LATE RECEIPT", text: "Issues in transit can cause late receipt of your goods, so our personnel monitor each shipment from beginning to end." },
          { label: "VISIBILITY", text: "Without shipment visibility you cannot measure on time performance, so transit time reports are available to all clients." },
          { label: "COST", text: "Striking deals with each carrier on your own costs more, so we use negotiated rates to ship your product for less." },
        ],
      },
      ledger: {                                           // REWRITEABLE (their services)
        eyebrow: "Capabilities",
        heading: "What STAT Logistics handles.",
        rows: [
          { spec: "01", capability: "Air freight forwarding", detail: "Our Air Import department handles your needs from any point in the world in a timely and cost efficient manner." },
          { spec: "02", capability: "Ocean freight forwarding", detail: "From consolidated shipments, LCL, to full container loads, FCL, including inbound freight from Asia." },
          { spec: "03", capability: "3PL warehousing", detail: "Third party logistics warehousing with product fulfillment and pick, pack and ship distribution." },
          { spec: "04", capability: "Customs and documentation", detail: "Document preparation, cargo insurance, and Customs brokerage across your shipments." },
        ],
      },
      process: {                                          // REWRITEABLE (their "what is a freight forwarder" + Our Commitment)
        eyebrow: "How it works",
        heading: "How STAT Logistics moves your freight.",
        steps: [
          { n: "1", title: "Tell us where", text: "You tell us where your cargo needs to go." },
          { n: "2", title: "We arrange it", text: "We make all of the arrangements using negotiated carrier rates." },
          { n: "3", title: "We monitor", text: "Our personnel monitor each shipment from beginning to end." },
          { n: "4", title: "We report", text: "Transit time reports let you measure on time performance." },
        ],
      },
      flow: {                                             // REWRITEABLE (same source as process)
        eyebrow: "Process",
        heading: "Input to delivery, monitored throughout.",
        steps: ["You tell us where", "We arrange and negotiate", "We monitor and report"],
      },
      stats: {                                            // HARD-CLAIM items; heading lorem (no source figures)
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: {                                           // template CTA framing (no source) -> lorem heading
        heading: "Lorem ipsum dolor sit amet consectetur.",
        label: "Request a quote",
        href: `${base}/contact`,
      },
      trustBand: {                                        // HARD-CLAIM
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {                                            // HARD-CLAIM: testimonials never auto-filled
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {                                           // REWRITEABLE (their "you tell us where" framing)
        eyebrow: "Book a scope call",
        headline: "Let us move your next shipment.",
        line: "Tell us where your freight needs to go, and we will make the arrangements.",
      },
      faq: {                                              // MIXED: Q1/Q2 answers REWRITEABLE from their explainer; rest bracketed
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "What is a freight forwarder?", a: "A freight forwarder is to cargo what a travel agent is to your vacation. You tell us where your cargo needs to go and we make the arrangements, using negotiated carrier rates so you can ship for less." },
          { q: "What does a freight forwarder handle?", a: "Freight consolidation, document preparation, cargo insurance, door to door capability, shipment visibility, and Customs brokerage." },
          { q: "Lorem ipsum dolor sit amet?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,      // SHARED template content (not bespoke-filled)
    contact: SHARED_CONTACT,  // SHARED template content
    cta: SHARED_CTA,          // SHARED static CTA copy
    // Option A accent: re-extracted from their LIVE rendered homepage (screenshot),
    // og:image logo ignored. #729199 (muted slate). Passed contrast (3.20 vs off-white, 5.46 vs ink).
    accent: "#729199",
    accentDk: "#5E777E",      // darker shade for the CTA hover fill-wipe
  };
}

// ------------------------------------------------------------
// REAL LEAD — Platinum Enterprises Inc. (slice 5, score 72).
// Mapped from Airtable (structured) + Firecrawl scrape of platinum-enterprises.com.
// Accent: live-extracted #23593D failed contrast -> fell back to OMH gold (no accent field).
// DID NOT USE: their "RODNEY F." testimonial (HARD-CLAIM stays bracketed).
// ------------------------------------------------------------
function platinumLead(): Lead {
  const base = "/platinum-enterprises";
  return {
    slug: "platinum-enterprises",
    company: {
      name: "Platinum Enterprises Inc.",                 // STRUCTURED (Airtable)
      logo: "/leads/platinum-enterprises/logo.png",       // STRUCTURED: their real logo (alt "Platinum Enterprises Logo"), pulled into repo
      tagline: "Specialized heavy haul and freight transport in Riverside, CA.", // REWRITEABLE (title + description)
      phone: "(951) 684-3444",                            // STRUCTURED (Airtable +19516843444)
      email: "victor@platinum-enterprises.com",           // STRUCTURED (Airtable)
      address: "Riverside, CA",                            // STRUCTURED (scrape description "based out of Riverside, CA")
      yearsInBusiness: "[##]",                             // HARD-CLAIM
      credentials: [                                       // HARD-CLAIM
        "[Add a certification]",
        "[Add years in business]",
        "[Add a key metric]",
        "[Add a key metric]",
      ],
    },
    nav: {
      links: [
        { label: "Home", href: base },
        { label: "About", href: `${base}/about` },
        { label: "Contact", href: `${base}/contact` },
      ],
      cta: { label: "Talk to us", href: `${base}/contact` },
    },
    home: {
      hero: {
        eyebrow: "Heavy haul · Oversized loads",          // REWRITEABLE (their services)
        headline: "Specialized transportation for oversized, heavy loads.", // REWRITEABLE (their "SPECIALIZED TRANSPORTATION" + "oversized loads")
        sub: "Platinum Enterprises handles oversized loads out of Riverside, CA with an experienced team and a well-maintained fleet.", // REWRITEABLE (their description)
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [                                          // HARD-CLAIM
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"], // HARD-CLAIM
      problems: {                                          // REWRITEABLE (non-testimonial copy: fleet, safety, customer types)
        eyebrow: "What we handle",
        heading: "Oversized freight, handled with safety and quality assurance.",
        items: [
          { label: "RELIABILITY", text: "An unreliable or poorly maintained truck stalls an oversized move, so we run a reliable, well-maintained fleet." },
          { label: "SAFETY", text: "Oversized loads carry real risk, so we prioritize safety and quality assurance on every haul." },
          { label: "FIT", text: "Large industrial shippers and growing businesses need transport that scales, which is what we provide." },
        ],
      },
      ledger: {                                            // REWRITEABLE service names; details lorem (no per-service copy on their site)
        eyebrow: "Capabilities",
        heading: "What Platinum Enterprises hauls.",
        rows: [
          { spec: "01", capability: "RGN / low bed services", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { spec: "02", capability: "Landoll trailer services", detail: "Sed do eiusmod tempor incididunt ut labore et dolore magna." },
          { spec: "03", capability: "Rollback truck services", detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
          { spec: "04", capability: "Heavy haul / oversized loads", detail: "Duis aute irure dolor in reprehenderit in voluptate velit." },
        ],
      },
      process: {                                           // REWRITEABLE; no process copy on their site -> lorem
        eyebrow: "Lorem process",
        heading: "Lorem ipsum dolor sit amet consectetur.",
        steps: [
          { n: "1", title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed." },
          { n: "2", title: "Dolor sit", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
          { n: "3", title: "Consectetur", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
          { n: "4", title: "Adipiscing", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
        ],
      },
      flow: {                                              // REWRITEABLE; no process copy -> bracket placeholders
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet flow.",
        steps: ["[Step one]", "[Step two]", "[Step three]"],
      },
      stats: {                                             // HARD-CLAIM items; heading lorem
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: {
        heading: "Lorem ipsum dolor sit amet consectetur.",
        label: "Request a quote",
        href: `${base}/contact`,
      },
      trustBand: {                                         // HARD-CLAIM
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {                                             // HARD-CLAIM: their RODNEY F. testimonial deliberately NOT used
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {                                            // REWRITEABLE (their "NEED A RELIABLE FREIGHT PARTNER... give us a call")
        eyebrow: "Talk to us",
        headline: "Need a reliable freight partner?",
        line: "See what Platinum Enterprises can do for you. Give us a call.",
      },
      faq: {                                               // no Q&A on their site -> lorem Q + bracketed A
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "Lorem ipsum dolor sit amet?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Consectetur adipiscing elit?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Sed do eiusmod tempor incididunt?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    // Option A accent: their real brand green from the logo. Passes contrast
    // (5.76 dark-text-on-accent, 3.04 vs off-white, 5.76 on dark sections).
    accent: "#02A64B",
    accentDk: "#028D40",
  };
}

// Two dummy leads (gold default accent) + real mapped leads.
export const leads: Lead[] = [
  makeLead("lorem-industrial", "Demo A"),
  makeLead("ipsum-logistics", "Demo B"),
  statLogisticsLead(),
  platinumLead(),
];

export function getLead(slug: string): Lead | undefined {
  return leads.find((l) => l.slug === slug);
}
