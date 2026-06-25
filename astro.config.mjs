import { defineConfig } from "astro/config";

export default defineConfig({
  // Static by default. If you wire the /api routes below to run server-side,
  // switch to output: "server" and add an adapter (node, netlify, vercel).
  output: "static",
  site: "https://example.com",
});
