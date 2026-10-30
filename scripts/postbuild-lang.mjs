/**
 * Sets <html lang="it"> on every exported page under out/it/.
 *
 * The App Router has one root layout, and it renders <html lang="en">. A page
 * cannot change the <html> element it is rendered into, so the Italian pages
 * shipped as lang="en" with an Italian body — a mixed signal for search
 * engines and screen readers. Splitting the app into two root layouts would
 * fix it at the source but rewrites the whole tree; the export is static, so
 * rewriting the attribute in the built HTML is exact and cheap.
 *
 * Runs after `next build` (see package.json). Fails the build if out/it/ has
 * pages and none of them could be rewritten, so a markup change in the layout
 * cannot silently undo this.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'out', 'it');

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  const nested = await Promise.all(
    entries.map((e) => (e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : [])),
  );
  return nested.flat();
}

const files = await htmlFiles(ROOT);
let changed = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const next = html.replace(/<html lang="en"/, '<html lang="it"');
  if (next !== html) {
    await writeFile(file, next);
    changed += 1;
  }
}
if (files.length > 0 && changed === 0) {
  console.error('postbuild-lang: no <html lang="en"> found under out/it/ — check app/layout.tsx');
  process.exit(1);
}
console.log(`postbuild-lang: ${changed}/${files.length} Italian page(s) set to lang="it"`);
