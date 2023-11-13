import { glob } from 'glob';
import fs from 'fs/promises';
import { build } from 'esbuild';

const files = glob.sync('*.spec.js');
for (const file of files) {
  const fileContent = await fs.readFile(file, 'utf-8');
  runModule(fileContent + 'import {run} from "./core.js";run();');
}

async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
  });
  new Function(result.outputFiles[0].text)();
}
