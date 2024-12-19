import path from 'node:path';
import process from 'node:process';
import fs from 'node:fs';

const buildDir = 'dist';
const pagesDir = 'docs';

const target = process.argv?.[2] || 'latest';
const sourceDir = path.join(import.meta.dirname, buildDir);
const targetDir = path.join(import.meta.dirname, pagesDir, target);

console.log(`Publishing contents from:\n    ${sourceDir}\nto:\n    ${targetDir}`);
if(fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });