import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The ice maker sounds like it's chewing gravel at 3 a.m., then serves one cube, like a vending machine with stage fright.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
