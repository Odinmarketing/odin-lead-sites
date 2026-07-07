// ============================================================
// SHARED TEMPLATE CONTENT — identical for every lead.
// Moved out of site.ts so the auto-generated leads file (autoLeads.ts,
// written by odin-pipeline/run-pipeline.js) can import the same objects
// without creating a runtime circular import with site.ts.
// Not bespoke-filled per lead. Lightly tuned OMH content lives here.
// ============================================================

// REWRITEABLE (shared) — static contact CTA copy. Lead-agnostic.
// Used on HOME (where the form used to sit) and on CONTACT.
export const SHARED_CTA = {
  eyebrow: "Start here",
  headline: "Lorem ipsum dolor sit amet.",
  line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
};

// SHARED about content (OMH's own story/values). No hard-claim slots.
export const SHARED_ABOUT = {
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
export const SHARED_CONTACT = {
  // REWRITEABLE (shared)
  hero: {
    eyebrow: "Lorem ipsum",
    headline: "Lorem ipsum dolor sit amet.",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
};
