// One Word, First Thought — make.fun bounty u-0xkianno-one-word-first-thought-106abaf8
// Writes exactly one word, the first that came to mind, to /output/entry.txt.
//
// The word: "psithurism" — the sound of wind whispering through trees.
// It is surprising (a word most readers have never met), vivid (you can hear
// it the moment you read it), and carries a spark of wit in its own sound:
// the word itself whispers. Short, specific, chosen — not filler.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "psithurism";

// Gate guard: the sealed scorer requires UTF-8 text of 1–24 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (WORD.length < 1 || WORD.length > 24 || !/\S/.test(WORD) || /\s/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
