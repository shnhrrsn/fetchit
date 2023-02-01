import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execa = promisify(execFile)
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
