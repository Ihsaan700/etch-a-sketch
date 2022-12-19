require('esbuild').build({
  entryPoints: ['index.js'],
  bundle: true,
  minify: true,
  watch: false,
  sourcemap: true,
  outfile: 'dist/index.js',
}).catch(() => process.exit(1))
