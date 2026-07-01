import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, existsSync, readdirSync, rmSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// The viewer renders the graph client-side (JS), so a crawler that does not run
// JS sees no structured data — only the noscript fallback. Embed the canonical
// graph.jsonld as an in-page `<script type="application/ld+json">` block in the
// served page's <head> so the concept graph is crawler-readable structured data
// on an already-indexed page (authorship-strategy ADR-0009 served-page markup).
// Reads the canonical root graph.jsonld at build time — single source of truth,
// no drift.
function injectGraphJsonld() {
  return {
    name: 'inject-graph-jsonld',
    transformIndexHtml() {
      const src = resolve(__dirname, '..', 'graph.jsonld');
      // Escape '<' so a string value containing '</script>' cannot break out of
      // the inline script. '<' is valid inside JSON strings, and JSON
      // structure has no bare '<', so the JSON-LD stays parseable.
      const jsonld = readFileSync(src, 'utf-8').replace(/</g, '\\u003c');
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: jsonld,
          injectTo: 'head' as const,
        },
      ];
    },
  };
}

function copyGraphJsonld() {
  return {
    name: 'copy-graph-jsonld',
    buildStart() {
      const src = resolve(__dirname, '..', 'graph.jsonld');
      const destDir = resolve(__dirname, 'public');
      if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
      copyFileSync(src, resolve(destDir, 'graph.jsonld'));
    },
    configureServer() {
      const src = resolve(__dirname, '..', 'graph.jsonld');
      const destDir = resolve(__dirname, 'public');
      if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
      copyFileSync(src, resolve(destDir, 'graph.jsonld'));
    },
  };
}

// outDir is `../docs`, which also holds committed source that the build does NOT
// regenerate (notably `docs/adr/`). Vite's built-in `emptyOutDir: true` wipes the
// whole directory on every build, deleting those files. Instead we keep
// `emptyOutDir: false` and clean only the build-generated entries ourselves,
// preserving the keep-list below.
const PRESERVE_IN_DOCS = ['adr', '.nojekyll', 'CNAME'];

function cleanOutDirExcept(keep: string[]) {
  return {
    name: 'clean-out-dir-except',
    buildStart() {
      const outDir = resolve(__dirname, '..', 'docs');
      if (!existsSync(outDir)) return;
      for (const entry of readdirSync(outDir)) {
        if (keep.includes(entry)) continue;
        rmSync(resolve(outDir, entry), { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  base: '/attention-not-self/',
  plugins: [react(), copyGraphJsonld(), injectGraphJsonld(), cleanOutDirExcept(PRESERVE_IN_DOCS)],
  build: {
    outDir: '../docs',
    // Do not let Vite wipe the whole dir; cleanOutDirExcept handles it. See note above.
    emptyOutDir: false,
  },
});
