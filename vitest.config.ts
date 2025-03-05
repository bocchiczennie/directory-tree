import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Reactのテストを行うためにjsdomを指定
    globals: true,        // describe, testなどをグローバルに利用可能に
  }
});