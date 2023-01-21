import { execa } from 'execa'
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

// Copy src/types
await execa('cp', [
	'-R',
	fileURLToPath(new URL('../src/types', types)),
	fileURLToPath(new URL('./types', types)),
])
