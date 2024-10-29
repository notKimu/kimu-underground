import { defineConfig } from "mdsx";

export const mdsxConfig = defineConfig({
  extensions: [".md"],
  blueprints: {
    default: {
      path: "src/lib/blueprints/story.svelte",
    },
  },
});
