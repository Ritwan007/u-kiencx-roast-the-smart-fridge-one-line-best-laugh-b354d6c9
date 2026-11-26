import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The ice maker sounds like it's chewing gravel at 3 a.m., then serves one cube, like a vending machine with stage fright.";

// The gate requires 1-160 UTF-8 chars, not only whitespace: refuse to write
// a line that would fail it, so a bad edit can never ship a dead entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
