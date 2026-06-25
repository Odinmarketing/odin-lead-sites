# B2B Lead-Magnet Template (Astro)

A 3-page conversion template for B2B / industrial / professional-services clients:
**Home**, **About**, **Contact**. Built for psychological fit with industrial buyers
(plant managers, ops directors, procurement): proof over gloss, risk removal, one
clear path to a qualified lead.

---

## What's in here

```
src/
├── data/site.ts              ← ALL copy + company facts. Edit this first.
├── styles/global.css         ← Design tokens. Rebrand the whole site here.
├── layouts/Base.astro        ← Head, fonts, schema, header/footer wrapper
├── components/
│   ├── Header.astro          ← Sticky nav, single amber CTA, mobile toggle
│   ├── Footer.astro          ← Grouped nav + closing CTA
│   ├── CredentialStrip.astro ← Trust-signal bar (the proof device, home only)
│   └── ContactCTA.astro      ← Static contact CTA (phone/email, no form)
└── pages/
    ├── index.astro           ← Root dev index: lists generated lead sites
    └── [slug]/
        ├── index.astro       ← Home per lead: full bespoke conversion sequence
        ├── about.astro       ← Shared OMH story/values
        └── contact.astro     ← Shared static contact CTA
```

---

## Run it

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output in dist/
```

Fully static. There are no forms and no API routes: these are cold-outreach hook
sites and the whole conversion happens off-site (phone, email, a real conversation).
The contact action is a static CTA that links to the lead's phone and email.

---

## Customizing for a client (in order)

1. **`src/data/site.ts`** — replace every `{{placeholder}}`. This drives all three
   pages. Nothing client-specific is hardcoded in the page files.
2. **`src/styles/global.css`** — `:root` block. To apply OMH brand: set
   `--c-accent: #BA9238`, `--c-ink: #141413`, `--c-paper: #FAF9F5`, and swap the
   font families to Poppins (also update the font `<link>` in `Base.astro`).
3. **Lead magnet wiring** — set `MAKE_LEAD_WEBHOOK` and `MAKE_CONTACT_WEBHOOK`
   env vars, or change the form `action` props.
4. **Favicon** — `public/favicon.svg` uses the accent color; swap if needed.

---

## The CRO logic (why each block exists)

**Home conversion sequence:**
1. Hero — outcome-first headline (`[outcome] without [pain]`), two CTAs to serve
   both "ready to buy" and "still researching" visitors.
2. Spec-sheet card — the signature device. Reads like an engineering datasheet,
   signals operational competence to a technical buyer.
3. Credential strip — trust signals immediately after the hero (certs, years, volume).
4. Problem block — names the buyer's pain (downtime/risk/margin) in their language.
5. Capability ledger — what they get, stated plainly. Numbered because it's a real list.
6. Process — a true 4-step sequence, so the numbering is earned, not decorative.
7. Proof — hard stats + two attributed testimonials (availability heuristic).
8. Lead magnet — the gated form, placed after value is established.
9. FAQ — objection handling (lead time, volume, spec changes, low-commitment start).
10. Final CTA — single action: book a scope call.

**Form rules applied (form-cro):**
- 3 visible required fields (name, email, company); phone optional.
- Labels always visible, not placeholder-only.
- Value-stated submit button, not "Submit".
- Privacy assurance + honeypot anti-spam.
- Inline validation on blur, proper mobile keyboards (`inputmode`), 48px tap targets.

**Psychology levers (marketing-psychology):**
- Loss aversion (the cost-of-status-quo problem block)
- Authority + social proof (credential strip, stats, testimonials)
- Hick's Law (one primary CTA per section, amber reserved for primary action only)
- Status-quo bias / risk reduction (low-commitment first step in FAQ + contact copy)
- Specificity over hedging throughout (real numbers beat ranges)

---

## Accessibility / quality floor

- Skip link, visible keyboard focus, `prefers-reduced-motion` respected.
- Single-column responsive down to 390px.
- Semantic landmarks, `aria-current` on active nav, labeled form errors.
- LocalBusiness JSON-LD in `Base.astro` (fills from `site.ts`).

---

## Notes for Josiah

- The amber accent is deliberately reserved for primary CTAs only. Don't add it to
  secondary elements or the "act now" signal dilutes.
- Color/type are CSS variables, so OMH-tokenizing this is a one-file change.
- The team avatars render initials from the name string; `{{Name}}` shows `{` until
  you fill real names.
- Recommend A/B testing the hero headline and the lead-form button copy first;
  those move the needle most on this page type.
