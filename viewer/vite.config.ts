import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

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
  plugins: [react(), copyGraphJsonld(), cleanOutDirExcept(PRESERVE_IN_DOCS)],
  build: {
    outDir: '../docs',
    // Do not let Vite wipe the whole dir; cleanOutDirExcept handles it. See note above.
    emptyOutDir: false,
  },
});
