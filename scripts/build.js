import * as esbuild from 'esbuild'

await esbuild.build({
	entryPoints: ['./src/index.js'],
	bundle: true,
	outfile: 'cdn/index.js',
})
