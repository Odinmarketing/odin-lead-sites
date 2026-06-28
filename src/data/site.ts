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
  // CTA button text color for this lead. Omit -> default dark ink (mid/light accents).
  // Set to off-white (#FAF9F5) only when the accent is dark (decided by build-lead.js).
  accentText?: string;
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

// ============================================================
// BATCH 1 — 10 Apollo-sourced build candidates (first volume run).
// Each mapped from Airtable (structured) + Firecrawl scrape (rewriteable).
// HARD-CLAIM + image/logo slots stay bracketed. Accents from the contrast guard.
// ============================================================

// REAL LEAD — TCR Performance Inc. Accent #FEDC00 yellow (header-crop), dark button text.
function tcrPerformanceLead(): Lead {
  const base = "/tcr-performance";
  return {
    slug: "tcr-performance",
    company: {
      name: "TCR Performance Inc",
      logo: "",
      tagline: "Prototype and multi-part fabrication, machining, and welding.",
      phone: "[(555) 555-0100]",
      email: "lynn@tcrperformance.com",
      address: "Bakersfield, CA",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Fabrication · Machining",
        headline: "Virtually any fabricated assembly, built.",
        sub: "TCR Performance produces one-off prototype and multipart fabrications and assemblies, specializing in machining and TIG and MIG welding of all alloys and castings.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we handle",
        heading: "Tough fabrication projects, handled end to end.",
        items: [
          { label: "DESIGN", text: "Getting a part from idea to build is hard, so we design and engineer with SolidWorks software before we build." },
          { label: "CAPABILITY", text: "Complex one-off work needs the right tools, so our machine shop runs state of the art equipment and operators." },
          { label: "MATERIALS", text: "Sourcing the right stock slows projects down, so we stock 4130 chromoly, carbon steel, and aluminum tubing, bar, sheet, and plate." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What TCR Performance handles.",
        rows: [
          { spec: "01", capability: "Prototype fabrication", detail: "One-off prototype and multipart fabrications and assemblies." },
          { spec: "02", capability: "TIG and MIG welding", detail: "TIG and MIG welding of all alloys and castings." },
          { spec: "03", capability: "Machining", detail: "Machine shop with state of the art equipment and experienced operators." },
          { spec: "04", capability: "Design and engineering", detail: "Design and engineering of virtually any fabricated assembly using SolidWorks software." },
        ],
      },
      process: {
        eyebrow: "How it works",
        heading: "How TCR Performance builds your project.",
        steps: [
          { n: "1", title: "Design", text: "We design your components using SolidWorks design and engineering software." },
          { n: "2", title: "Engineer", text: "We engineer virtually any type of fabricated assembly to fit your project." },
          { n: "3", title: "Build", text: "Our machine shop and operators build the project with state of the art equipment." },
          { n: "4", title: "Deliver", text: "We deliver fabricated assemblies for the industries we serve." },
        ],
      },
      flow: {
        eyebrow: "Process",
        heading: "Design to build, in one shop.",
        steps: ["Design and engineer", "Machine and weld", "Build and deliver"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Talk to us",
        headline: "Tell us about your next project.",
        line: "From waterjet cutting to welding and fabrication, we are fully equipped to handle your toughest projects. Go ahead, try us.",
      },
      faq: {
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "What can TCR Performance do for you?", a: "We are fully equipped to handle your toughest projects, from waterjet cutting to welding and fabrication of all alloys and castings." },
          { q: "What materials do you work with?", a: "We offer 4130 chromoly tubing and sheet, carbon steel tubing, bar, sheet, and plate, and aluminum tubing, bar, sheet, and plate." },
          { q: "Sed do eiusmod tempor incididunt?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    accent: "#FEDC00",
    accentDk: "#D0B400",
  };
}

// REAL LEAD — Advanced Detection Systems. Accent #008ED4 blue (header logo), dark button text.
function advancedDetectionLead(): Lead {
  const base = "/advanced-detection";
  return {
    slug: "advanced-detection",
    company: {
      name: "Advanced Detection Systems",
      logo: "",
      tagline: "Industrial metal detection equipment for unique detection needs.",
      phone: "(760) 975-7168",
      email: "jamie@advanceddetection.net",
      address: "[City, State]",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Industrial metal detection",
        headline: "Where innovation meets quality.",
        sub: "Advanced Detection Systems manufactures metal detectors designed to provide reliable, easy to use and consistent metal detection for industries with unique detection needs.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "Why it matters",
        heading: "Metal detection that protects product and equipment.",
        items: [
          { label: "PRODUCT PURITY", text: "Contamination compromises product purity, so our metal detectors are built to ensure product purity for food processing and other industries." },
          { label: "EQUIPMENT", text: "Stray metal damages processing equipment, so our detectors are designed to defend processing equipment downstream." },
          { label: "RELIABILITY", text: "Inconsistent detection disrupts production, so our detectors provide reliable, easy to use and consistent metal detection." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What Advanced Detection Systems offers.",
        rows: [
          { spec: "01", capability: "Metal detection equipment", detail: "Manufacturing quality metal detection equipment for many diverse industries with unique metal detection needs." },
          { spec: "02", capability: "Industry-specific systems", detail: "Industrial metal detectors engineered to improve production processing efficiency for manufacturers in various markets worldwide." },
          { spec: "03", capability: "Service and support", detail: "Trained factory service technicians, manufacturer representatives, sales people and engineers provide expert advice and ongoing support." },
          { spec: "04", capability: "Product testing", detail: "Free product testing to get the optimum detection results for your metal detector." },
        ],
      },
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
      flow: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet flow.",
        steps: ["[Step one]", "[Step two]", "[Step three]"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Book a scope call",
        headline: "Find the right metal detector for your line.",
        line: "Get free product testing and expert support for your unique detection needs.",
      },
      faq: {
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "Do you offer product testing?", a: "Yes. We offer free product testing to get the optimum detection results for your metal detector, with a Sensitivity Guarantee indicating the optimal detection levels for your products." },
          { q: "Which industries do you work with?", a: "We have experience working with many types of customers including food processing, mining, quarry and recycling trades." },
          { q: "Sed do eiusmod tempor incididunt?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    accent: "#008ED4",
    accentDk: "#0074AE",
  };
}

// REAL LEAD — Haas Entertainment. Accent #C8B16F, dark button text.
function haasEntertainmentLead(): Lead {
  const base = "/haas-entertainment";
  return {
    slug: "haas-entertainment",
    company: {
      name: "Haas Entertainment",
      logo: "",
      tagline: "Integrating technology and design into your home, business, and vehicle.",
      phone: "(310) 850-0900",
      email: "jeff@haasentertainment.com",
      address: "[City, State]",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Residential · Commercial · Automotive",
        headline: "Technology and design, together.",
        sub: "Haas Entertainment integrates the technology of your daily life into your home, business, and vehicle.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we do",
        heading: "Technology that fits your space, not the other way around.",
        items: [
          { label: "RESIDENTIAL", text: "You will be amazed at what is possible when technology and design come together to create a space that is exactly right for you." },
          { label: "COMMERCIAL", text: "Let us remove the technological burden so you can focus on what is most important." },
          { label: "AUTOMOTIVE", text: "We integrate the technology of your daily life into your vehicle." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What Haas Entertainment handles.",
        rows: [
          { spec: "01", capability: "Home automation", detail: "Whether you are building from the ground up or adding to an existing home, we help you take advantage of the benefits smart home technology has to offer." },
          { spec: "02", capability: "Home theater", detail: "From ultra-slim LED TVs to projection systems of any size, our displays install to fit with your decor." },
          { spec: "03", capability: "System design", detail: "We work with your architects and interior designers so your system fits seamlessly into your building." },
          { spec: "04", capability: "Wired and wireless networking", detail: "No matter the scale, we design networks around your needs to keep you and your devices connected." },
          { spec: "05", capability: "Security", detail: "Built around a hard-drive digital video recorder, our surveillance systems are highly customizable to fit any home or business." },
          { spec: "06", capability: "Conference rooms", detail: "With ultra-slim LED TVs, projection displays and multi-monitor systems, we design presentation and video conferencing systems for any room." },
          { spec: "07", capability: "Aging in place", detail: "We help seniors age safely and gracefully in their own homes rather than nursing homes or assisted care facilities." },
          { spec: "08", capability: "GPS tracking", detail: "With a Haas GPS tracking system installed in your car, you can protect against theft, monitor teenage drivers and keep track of your business vehicles." },
          { spec: "09", capability: "Custom fabrications and accessories", detail: "Our fully equipped custom shop can do anything from stereos to body kits, custom wheels, floor mats and upholstery." },
        ],
      },
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
      flow: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet flow.",
        steps: ["[Step one]", "[Step two]", "[Step three]"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Talk to us",
        headline: "Ready to hire professionals for your next project?",
        line: "Contact Haas Entertainment to get started.",
      },
      faq: {
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
    accent: "#C8B16F",
    accentDk: "#A6935C",
  };
}

// REAL LEAD — Laird Manufacturing. Accent navy #073D73, white button text.
function lairdManufacturingLead(): Lead {
  const base = "/laird-manufacturing";
  return {
    slug: "laird-manufacturing",
    company: {
      name: "Laird Manufacturing",
      logo: "",
      tagline: "American made cattle feeding equipment built to last.",
      phone: "(209) 652-9143",
      email: "isaaci@lairdmfg.com",
      address: "[City, State]",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Cattle feeding equipment · American made",
        headline: "We are the exception, not the compromise.",
        sub: "Laird Manufacturing builds the most durable mixers on the market, with every inch of wear surface lined in stainless steel for the lowest total cost of ownership.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "Why Laird",
        heading: "Feeding equipment that keeps performing long after others fail.",
        items: [
          { label: "WEAR", text: "Wear surfaces fail fast, so every inch of wear surface is lined in stainless steel to maximize the life of your investment." },
          { label: "COST OF OWNERSHIP", text: "Equipment that wears out drives up cost, so our mixers are built to deliver the lowest total cost of ownership." },
          { label: "SERVICE", text: "Downtime hurts, so we back our equipment with extensive parts inventory and factory-trained service technicians." },
        ],
      },
      ledger: {
        eyebrow: "What we build",
        heading: "What Laird Manufacturing builds and carries.",
        rows: [
          { spec: "01", capability: "Vertical and stationary mixers", detail: "Premium vertical mixers and stationary feeding systems built for durability, performance, and efficiency." },
          { spec: "02", capability: "Truck-mounted units", detail: "Truck-mounted mixing units built for precision mixing and integrated delivery at scale." },
          { spec: "03", capability: "New and used equipment", detail: "New equipment plus a used equipment inventory through our factory stores." },
          { spec: "04", capability: "Parts and service", detail: "Extensive parts inventory and factory-trained service technicians backed by a nationwide dealer network." },
        ],
      },
      process: {
        eyebrow: "Built to scale",
        heading: "From precision mixing to integrated delivery.",
        steps: [
          { n: "1", title: "Design", text: "Let us design your feeding operation around automation and built to scale." },
          { n: "2", title: "Precision mixing", text: "Premium mixers deliver superior mixing consistency every cycle." },
          { n: "3", title: "Integrated delivery", text: "Truck-mounted and stationary systems handle integrated delivery." },
          { n: "4", title: "Service", text: "Parts inventory, factory-trained technicians, and our dealer network keep you running." },
        ],
      },
      flow: {
        eyebrow: "How it works",
        heading: "Automation to delivery, built to scale.",
        steps: ["Design your operation", "Precision mixing", "Integrated delivery"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Talk to us",
        headline: "Let us design your feeding operation.",
        line: "Laird keeps you feeding. Find a dealer near you and build an operation that scales.",
      },
      faq: {
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
    accent: "#073D73",
    accentDk: "#06335F",
    accentText: "#FAF9F5",
  };
}

// REAL LEAD — TMG ltd (The Machine Group). Accent #0969AD blue (header-crop), white button text.
function tmgLead(): Lead {
  const base = "/tmg";
  return {
    slug: "tmg",
    company: {
      name: "TMG ltd",
      logo: "",
      tagline: "CNC equipment, parts, service, applications, and turn-key solutions.",
      phone: "(562) 537-2681",
      email: "sreid@tmgwest.com",
      address: "[City, State]",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "CNC equipment · machine tools",
        headline: "CNC machines that make a difference.",
        sub: "TMG is a diversified CNC equipment and machine tool dealership, providing solutions for your manufacturing lines that deliver the results you need.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "Why TMG",
        heading: "CNC equipment that is solution based.",
        items: [
          { label: "RIGHT MACHINE", text: "Being locked to one builder rarely fits the job, so our broad range of manufacturers lets our application team provide the right solution regardless of machine builder." },
          { label: "BUDGET FIT", text: "World class machines should not mean one price point, so we offer a wide range of machine prices and carry both new and used CNC equipment." },
          { label: "UPTIME", text: "Sophisticated CNC machinery requires real support, so we back most manufacturers with application support, service, and the spare parts required for a long service life." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What TMG handles.",
        rows: [
          { spec: "01", capability: "Applications", detail: "Developing applications, custom solutions, and turn-key solutions is our super power." },
          { spec: "02", capability: "Service", detail: "Our trained and qualified in-house service group is dedicated to supporting your uptime requirements." },
          { spec: "03", capability: "Parts", detail: "Spare parts availability and sourcing is a specialty of TMG. Call us first, we know CNC parts." },
          { spec: "04", capability: "Financing", detail: "Our in-house financing department is ready to help companies with financing needs." },
        ],
      },
      process: {
        eyebrow: "What we integrate",
        heading: "CNC equipment options we integrate.",
        steps: [
          { n: "1", title: "Exotic materials", text: "Structural aerospace, hard metal, and other exotic metals, plus ultra-high-speed applications." },
          { n: "2", title: "MT Connect ready", text: "Connect using the MTConnect standard for more efficient operations and increased productivity." },
          { n: "3", title: "Run lights out", text: "Lights-out CNC machine tools do not require continuous operator attention, and TMG can facilitate lights-out operation." },
          { n: "4", title: "Robotics and integration", text: "Factory OEM and 3rd party option integration, with full workpiece access via articulating heads or trunnion tables." },
        ],
      },
      flow: {
        eyebrow: "Process",
        heading: "From the right machine to long service life.",
        steps: ["Find the right machine", "Integrate and commission", "Service, parts, and support"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Talk to us",
        headline: "Let us help you build the future.",
        line: "With your skills and vision, together we will build the components that shape our future, one part at a time.",
      },
      faq: {
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "What does TMG sell and support?", a: "TMG represents and supports a complete line of machine tool manufacturers, supplies parts to keep your machinery running, sells and services used equipment, and provides in-house financing." },
          { q: "Do you handle 5-axis CNC equipment?", a: "Yes. We specialize in 5-axis CNC equipment in a wide variety of configurations and sizes, accommodating various budgets, from industry workhorses to cutting-edge manufacturing technologies." },
          { q: "Sed do eiusmod tempor incididunt?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    accent: "#0969AD",
    accentDk: "#07568E",
    accentText: "#FAF9F5",
  };
}

// REAL LEAD — R & L Engineering, Inc. Accent blue #034A8C, white button text.
function rlEngineeringLead(): Lead {
  const base = "/rl-engineering";
  return {
    slug: "rl-engineering",
    company: {
      name: "R & L Engineering, Inc",
      logo: "",
      tagline: "A small-town firm with big ideas.",
      phone: "(858) 336-0449",
      email: "rfisher@rlfisher.com",
      address: "Albany, GA",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Automation · Specialty machinery",
        headline: "A small-town firm with big ideas.",
        sub: "R&L Engineering supplies automation, specialty machinery, and engineering services to manufacturers globally, leading to increased productivity and sustainability.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we solve",
        heading: "Manufacturing challenges, engineered away.",
        items: [
          { label: "PRODUCTIVITY", text: "Manufacturers need to do more with less, so we provide expertise and solutions leading to increased productivity." },
          { label: "SUSTAINABILITY", text: "Operations have to run leaner over time, so our solutions are built to increase sustainability for our customers." },
          { label: "TRUSTED PARTNER", text: "Choosing a technical provider is a risk, so we work to be our customers' trusted and preferred technical solution provider." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What R&L Engineering handles.",
        rows: [
          { spec: "01", capability: "Engineering", detail: "World-class engineering services for manufacturers globally." },
          { spec: "02", capability: "Specialty Machine Build", detail: "Specialty machinery designed and built for your operation." },
          { spec: "03", capability: "Industrial Automation", detail: "Process automation solutions that increase productivity." },
          { spec: "04", capability: "Technical Staffing", detail: "Technical staffing to support your engineering needs." },
          { spec: "05", capability: "Panel Design & Fabrication", detail: "Control panel design and fabrication for your systems." },
          { spec: "06", capability: "Machine Safety", detail: "Machine safety services to keep your operation compliant." },
        ],
      },
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
      flow: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet flow.",
        steps: ["[Step one]", "[Step two]", "[Step three]"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Book a scope call",
        headline: "Your trusted technical solution provider.",
        line: "Let R&L Engineering bring expertise and solutions that increase productivity and sustainability.",
      },
      faq: {
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
    accent: "#034A8C",
    accentDk: "#023D74",
    accentText: "#FAF9F5",
  };
}

// REAL LEAD — Brenner-Fiedler. Accent #081D5A navy (header-crop), white button text.
function brennerFiedlerLead(): Lead {
  const base = "/brenner-fiedler";
  return {
    slug: "brenner-fiedler",
    company: {
      name: "Brenner-Fiedler",
      logo: "",
      tagline: "Custom solutions for automation, pneumatic and OEM.",
      phone: "(951) 299-4100 ext 846",
      email: "dkloman@brfa.com",
      address: "Riverside, CA",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Automation · Pneumatic · OEM",
        headline: "Your needs are our priority.",
        sub: "Brenner-Fiedler delivers custom automation, pneumatic, and OEM solutions as a single source supplier, from individual components to complete turn-key systems.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we solve",
        heading: "Complex automation and pneumatic problems, solved.",
        items: [
          { label: "WORKPLACE SAFETY", text: "Open workspaces leave your people and equipment exposed, so our fully customizable, industrial strength fencing keeps your workspace protected and your employees safe." },
          { label: "GAS SUPPLY", text: "Buying nitrogen leaves you exposed to interruption, so we help you generate your own quickly, efficiently, and economically without interruption." },
          { label: "CONTROL RELIABILITY", text: "Unreliable control panels stall a line, so our UL508A certified panel shop builds panels you can rely on." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What Brenner-Fiedler delivers.",
        rows: [
          { spec: "01", capability: "Fencing solutions", detail: "Fully customizable, industrial strength safety fencing to protect your workspace and your employees." },
          { spec: "02", capability: "Analytical gas systems", detail: "Generate your own nitrogen quickly, efficiently, and economically without interruption." },
          { spec: "03", capability: "UL panel shop", detail: "Control panels you can rely on, built in our UL508A certified panel shop." },
          { spec: "04", capability: "Single source supply", detail: "A comprehensive range of products and services, from individual components to complete turn-key solutions." },
        ],
      },
      process: {
        eyebrow: "How we work",
        heading: "Support at every step of design.",
        steps: [
          { n: "1", title: "Concept", text: "We support customers from the very start, helping define the solution to your automation and pneumatic problem." },
          { n: "2", title: "Design", text: "We engineer a custom solution drawn from our broad range of products and capabilities." },
          { n: "3", title: "Deployment", text: "We see the project through deployment, from individual components to complete turn-key systems." },
          { n: "4", title: "Support", text: "Count on us for professional service, support, and innovation on every project. Consider us part of your team." },
        ],
      },
      flow: {
        eyebrow: "Process",
        heading: "Concept through deployment.",
        steps: ["Concept", "Design", "Deployment"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Book a scope call",
        headline: "Contact us today to get started.",
        line: "From a single component to a complete turn-key solution, count on us to be your single source supplier.",
      },
      faq: {
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
    accent: "#081D5A",
    accentDk: "#07184A",
    accentText: "#FAF9F5",
  };
}

// REAL LEAD — Guntert & Zimmerman (G&Z). Accent #005CA9 blue (header logo), white button text.
function guntertZimmermanLead(): Lead {
  const base = "/guntert-zimmerman";
  return {
    slug: "guntert-zimmerman",
    company: {
      name: "Guntert & Zimmerman (G&Z)",
      logo: "",
      tagline: "The industry leaders in innovation and performance.",
      phone: "(209) 603-5844",
      email: "rguntert@guntert.com",
      address: "Ripon, CA",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Slipform paving · Canal · Trenching",
        headline: "Innovation and performance in heavy paving.",
        sub: "Guntert & Zimmerman designs and manufactures specialized heavy construction machinery for slipform paving, canal lining, and high production trenching.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we engineer for",
        heading: "Equipment built to keep contractors productive.",
        items: [
          { label: "PRODUCTIVITY", text: "G&Z designs equipment that significantly increases contractor productivity while improving the quality of the finished product." },
          { label: "SERVICE LIFE", text: "Machines combine exceptional performance, ease of maintenance, and long service life for years of productive and profitable use." },
          { label: "SUPPORT", text: "Whether your machine is brand new or has logged more than 10,000 hours, G&Z stands behind its equipment with guaranteed satisfaction and unmatched support." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What Guntert & Zimmerman builds.",
        rows: [
          { spec: "01", capability: "Slipform pavers", detail: "A full range of dependable concrete slipform paving equipment for the construction of roads, highways, and airfield pavements." },
          { spec: "02", capability: "Canal equipment", detail: "Specialized canal trimming and lining equipment for building canals ranging from small irrigation ditches to the world's largest power channels." },
          { spec: "03", capability: "Eagle wheel trenchers", detail: "High production trenching for foundations, utilities, oil and gas pipelines, irrigation, and fiber optic installations." },
          { spec: "04", capability: "Material placers and texture cure", detail: "Material placers, placer spreaders, and texture cure machines that round out the paving train." },
        ],
      },
      process: {
        eyebrow: "How we design",
        heading: "Built in close partnership with end users.",
        steps: [
          { n: "1", title: "Collaborate", text: "Close partnerships with end users and ongoing collaboration in the field shape every G&Z design." },
          { n: "2", title: "Engineer", text: "We continuously develop and refine new technologies to meet the evolving needs of our customers." },
          { n: "3", title: "Build", text: "Our skilled engineering, manufacturing, service, and sales teams build equipment for exceptional performance and long service life." },
          { n: "4", title: "Support", text: "We stand behind our equipment with guaranteed satisfaction and unmatched support." },
        ],
      },
      flow: {
        eyebrow: "Process",
        heading: "Collaboration to lasting support.",
        steps: ["Collaborate in the field", "Engineer and build", "Stand behind it"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Talk to us",
        headline: "A reliable partner that exceeds expectations.",
        line: "See how G&Z equipment solutions can meet your paving, canal, and trenching needs.",
      },
      faq: {
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "What does Guntert & Zimmerman manufacture?", a: "A full range of concrete slipform paving equipment, specialized canal trimming and lining equipment, and Eagle Wheel Trenchers for high production trenching." },
          { q: "What can G&Z canal equipment handle?", a: "G&Z is the global leader in specialized canal solutions for building canals ranging from small irrigation ditches to the world's largest power channels." },
          { q: "Lorem ipsum dolor sit amet?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    accent: "#005CA9",
    accentDk: "#004B8B",
    accentText: "#FAF9F5",
  };
}

// REAL LEAD — Applied Motion Products. Accent #334D5D slate (header-crop), white button text.
function appliedMotionLead(): Lead {
  const base = "/applied-motion";
  return {
    slug: "applied-motion",
    company: {
      name: "Applied Motion Products",
      logo: "",
      tagline: "Custom motion control solutions for OEMs.",
      phone: "(831) 251-5549",
      email: "jblincoe@applied-motion.com",
      address: "[City, State]",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Motion control · OEM solutions",
        headline: "Motion control starts here.",
        sub: "Applied Motion Products designs custom motion control solutions for OEMs, including stepper motors, stepper drives, servo motors, servo drives, and integrated solutions.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we solve",
        heading: "Motion control built around your application.",
        items: [
          { label: "FIT", text: "Off the shelf motion rarely fits an OEM build, so we deliver custom motion control solutions for OEMs." },
          { label: "PERFORMANCE", text: "Underpowered drives limit throughput, so our M5 servo series pairs high power density servo motors with feature rich servo drives." },
          { label: "COST", text: "Faster, smarter, and cost effective motion is the goal, which is what the AK stepper series is built to deliver." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What Applied Motion Products builds.",
        rows: [
          { spec: "01", capability: "Stepper products", detail: "Stepper motors, stepper drives, and integrated stepper motors for motion control." },
          { spec: "02", capability: "Servo products", detail: "Servo motors, servo drives, and integrated servo motors, including the M5 servo series." },
          { spec: "03", capability: "StepSERVO products", detail: "StepSERVO motors, StepSERVO drives, and StepSERVO integrated motors." },
          { spec: "04", capability: "Linear and integrated solutions", detail: "Compact, high performance linear slides and actuators, plus all in one integrated solutions." },
        ],
      },
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
      flow: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet flow.",
        steps: ["[Step one]", "[Step two]", "[Step three]"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Talk to us",
        headline: "Motion control starts here.",
        line: "Tell us about your application and we will spec the right motion control solution.",
      },
      faq: {
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "What does Applied Motion Products make?", a: "Custom motion control solutions for OEMs, including stepper motors, stepper drives, servo motors, servo drives, and all in one integrated solutions." },
          { q: "What product lines do you offer?", a: "Stepper products, servo products, and StepSERVO products, along with linear slides and actuators." },
          { q: "Lorem ipsum dolor sit amet?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    accent: "#334D5D",
    accentDk: "#2A3F4C",
    accentText: "#FAF9F5",
  };
}

// REAL LEAD — SVT Associates, Inc. Accent blue #0154A5, white button text.
function svtAssociatesLead(): Lead {
  const base = "/svt-associates";
  return {
    slug: "svt-associates",
    company: {
      name: "SVT Associates, Inc.",
      logo: "",
      tagline: "Epitaxial engineering and custom ultra-high vacuum equipment for semiconductor research and manufacturing.",
      phone: "(408) 765-1775",
      email: "loren@svta.com",
      address: "Eden Prairie, MN",
      yearsInBusiness: "[##]",
      credentials: ["[Add a certification]", "[Add years in business]", "[Add a key metric]", "[Add a key metric]"],
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
        eyebrow: "Semiconductor equipment · Thin film",
        headline: "Custom ultra-high vacuum deposition systems.",
        sub: "SVT Associates provides solutions through epitaxial engineering and custom ultra-high vacuum equipment for semiconductor research and manufacturing.",
        primaryCta: { label: "See capabilities", href: `${base}#capabilities` },
        secondaryCta: { label: "Talk to us", href: `${base}/contact` },
      },
      heroSpec: [
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
        { label: "[DIFFERENTIATOR]", value: "[##]", unit: "[unit]" },
      ],
      heroTrust: ["[Years in business]", "[Units shipped]", "[Projects delivered]"],
      problems: {
        eyebrow: "What we solve",
        heading: "Precision thin film deposition, without the contamination.",
        items: [
          { label: "CONTAMINATION", text: "Unwanted impurities contaminate thin material layers, so our ultra-high vacuum chambers effectively eliminate them during growth and deposition." },
          { label: "CONTROL", text: "Crystalline thin films for high-performance optical and electronic devices need precise control, so our MBE systems provide flexibility and exact control." },
          { label: "INTEGRATION", text: "New equipment has to fit how you already work, so we design systems that integrate seamlessly into your existing workflows." },
        ],
      },
      ledger: {
        eyebrow: "Capabilities",
        heading: "What SVT Associates delivers.",
        rows: [
          { spec: "01", capability: "Molecular beam epitaxy systems", detail: "A leading global producer of MBE systems and other thin film deposition equipment for crystalline thin films." },
          { spec: "02", capability: "Ultra-high vacuum systems", detail: "Vacuum chambers designed for growing and depositing thin films while eliminating unwanted impurities." },
          { spec: "03", capability: "Atomic layer deposition", detail: "Thin film deposition equipment, including MBE components for our systems as well as those of our competitors." },
          { spec: "04", capability: "Design and manufacturing", detail: "We work closely with clients to understand their requirements and manufacture systems that fit their workflows." },
        ],
      },
      process: {
        eyebrow: "How it works",
        heading: "From design through training.",
        steps: [
          { n: "1", title: "Design", text: "We work closely with clients to understand their specific requirements and design systems that integrate seamlessly into their existing workflows." },
          { n: "2", title: "Manufacturing", text: "We manufacture thin film deposition equipment for electronics and materials science research, development, and manufacturing." },
          { n: "3", title: "Installation", text: "We provide setup, training, installation, and consulting on our products, peripherals, and complete turnkey solutions." },
          { n: "4", title: "Training", text: "We offer a broad range of equipment and process training for all your equipment, including our own systems and those of other manufacturers." },
        ],
      },
      flow: {
        eyebrow: "Process",
        heading: "Design, build, install, train.",
        steps: ["Design to your requirements", "Manufacture and deliver", "Install and train"],
      },
      stats: {
        eyebrow: "Lorem ipsum",
        heading: "Lorem ipsum dolor sit amet.",
        items: [
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
          { figure: "[##]", unit: "[unit]", label: "[METRIC]", context: "[One line on what this figure proves]" },
        ],
      },
      ctaMid: { heading: "Lorem ipsum dolor sit amet consectetur.", label: "Request a quote", href: `${base}/contact` },
      trustBand: {
        heading: "Lorem ipsum dolor sit amet.",
        logos: ["[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]", "[Client logo]"],
        certs: ["[Cert badge]", "[Compliance badge]"],
      },
      proof: {
        eyebrow: "[Proof: real results only]",
        heading: "[Add real customer results]",
        testimonials: [
          { quote: "[Add a real customer testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
          { quote: "[Add a second real testimonial, exact quote only]", name: "[Full name]", title: "[Title]", company: "[Company]", result: "[Quantified result]" },
        ],
      },
      endCta: {
        eyebrow: "Contact us",
        headline: "We will take care of you.",
        line: "Whether you are a researcher, scientist, or a business manufacturing high-power laser diode arrays, contact us with your questions and needs.",
      },
      faq: {
        eyebrow: "Before you ask",
        heading: "Common questions.",
        items: [
          { q: "What does SVT Associates make?", a: "We are a leading global producer of Molecular Beam Epitaxy systems and other thin film deposition equipment. Our primary products are ultra-high vacuum systems designed for growing and depositing thin films." },
          { q: "Who do you work with?", a: "Researchers, professors, scientists, and students performing R&D in thin film materials, as well as businesses that manufacture high-power laser diode arrays." },
          { q: "Sed do eiusmod tempor incididunt?", a: "[Answer from the lead's real policy, do not invent specifics]" },
          { q: "Ut enim ad minim veniam?", a: "[Answer from the lead's real policy, do not invent specifics]" },
        ],
      },
    },
    about: SHARED_ABOUT,
    contact: SHARED_CONTACT,
    cta: SHARED_CTA,
    accent: "#0154A5",
    accentDk: "#014689",
    accentText: "#FAF9F5",
  };
}

// Two dummy leads (gold default accent) + real mapped leads.
export const leads: Lead[] = [
  makeLead("lorem-industrial", "Demo A"),
  makeLead("ipsum-logistics", "Demo B"),
  statLogisticsLead(),
  platinumLead(),
  tcrPerformanceLead(),
  advancedDetectionLead(),
  haasEntertainmentLead(),
  lairdManufacturingLead(),
  tmgLead(),
  rlEngineeringLead(),
  brennerFiedlerLead(),
  guntertZimmermanLead(),
  appliedMotionLead(),
  svtAssociatesLead(),
];

export function getLead(slug: string): Lead | undefined {
  return leads.find((l) => l.slug === slug);
}
