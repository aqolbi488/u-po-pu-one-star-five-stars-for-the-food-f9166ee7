import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star for a species that queues to applaud its own landings, but five stars for the fried potato sticks that made all three of my stomachs file for citizenship.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
