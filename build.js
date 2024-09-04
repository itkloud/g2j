const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: './bin/g2j.js',
  bundle: true,
  platform: 'node',
  target: ['node14'],
  external: ['fs', 'path'],
  banner: {
    js: '#!/usr/bin/env node',
  },
}).catch(() => process.exit(1));