import * as esbuild from 'esbuild'

await esbuild.build({
	entryPoints: ['./src/components/index.js'],
	bundle: true,
	outfile: 'cdn/index.js',
})

await esbuild.build({
	entryPoints: ['./src/css/index.css'],
	bundle: true,
	outfile: 'cdn/index.css',
})
