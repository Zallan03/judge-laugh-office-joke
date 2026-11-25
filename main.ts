// Make the AI Judge Laugh
// Writes one office-life joke (one line, max 200 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Our meeting could have been an email. The email could have been a shrug. The shrug is now a recurring calendar invite.";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-200`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
