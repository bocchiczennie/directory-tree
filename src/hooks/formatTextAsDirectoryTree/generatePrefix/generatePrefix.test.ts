import { describe, expect, it } from "vitest";
import { generatePrefix } from "./generatePrefix";

describe("generatePrefix", () => {
    it("各行に正しいプレフィックスが生成されること", () => {
        const allLines = [
            { dirName: "/", depth: 1, isLast: false },
            { dirName: " src/", depth: 2, isLast: false },
            { dirName: "  app/", depth: 3, isLast: false },
            { dirName: "   page.tsx", depth: 4, isLast: true },
            { dirName: "   components/", depth: 3, isLast: true },
            { dirName: "   button", depth: 4, isLast: true },
            { dirName: ".gitignore", depth: 1, isLast: false },
        ]

        expect(generatePrefix(allLines[0], allLines)).toBe("├─ ");
        expect(generatePrefix(allLines[1], allLines)).toBe("│  ├─ ");
        expect(generatePrefix(allLines[2], allLines)).toBe("│  │  ├─ ");
        expect(generatePrefix(allLines[3], allLines)).toBe("│  │  │  └─ ");
        expect(generatePrefix(allLines[4], allLines)).toBe("│  │  └─ ");
        expect(generatePrefix(allLines[5], allLines)).toBe("│  │     └─ ");
        expect(generatePrefix(allLines[6], allLines)).toBe("├─ ");
    })
})