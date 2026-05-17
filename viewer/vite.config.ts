import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
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

export default defineConfig({
  base: '/attention-not-self/',
  plugins: [react(), copyGraphJsonld()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});
