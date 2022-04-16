import { execa } from 'execa'
import { promises as fs } from 'fs'
import { globby } from 'globby'
import { fileURLToPath } from 'url'

const types = new URL('../types/', import.meta.url)

// Clear out old types
await execa('rm', ['-fr', fileURLToPath(types)])

// Generate typs
await execa('yarn', [
	'tsc',
	'-p',
	'jsconfig.json',
	'--noEmit',
	'false',
	'--declaration',
	'--emitDeclarationOnly',
	'--outDir',
	'types',
])

// Symlink src/types
await fs.symlink('../src/types/', new URL('types', types))

// Rename all .d.cts files to .d.ts
for (const file of await globby('**/*.cts', { cwd: fileURLToPath(types) })) {
	await fs.rename(
		new URL(`./${file}`, types),
		new URL(`./${file.substring(0, file.length - 4)}.ts`, types),
	)
}

// Strip extensions from .d.ts
for (const file of await globby('**/*.d.ts', { cwd: fileURLToPath(types) })) {
	const url = new URL(`./${file}`, types)
	await fs.writeFile(
		url,
		await fs.readFile(url).then(file => file.toString().replace(/\.(cjs|js)/g, '')),
	)
}
