import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["packages/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    globals: true,
    watch: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "clover", "json", "json-summary"],
      include: ["packages"],
      exclude: [
        "**/dist",
        "**/bin",
        "**/@types",
        "packages/theme",
        "packages/**/tests",
        "packages/test",
        "packages/nextjs",
      ],
    },
    setupFiles: ["./scripts/setup-test.ts"],
  },
})
