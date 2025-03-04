import { describe, expect, it } from "vitest";
import { resolveFullPath } from "./resolveFullPath";

describe("resolveFullPath", () => {
    const directories: { dirName: string; depth: number }[] = [
        { dirName: "/", depth: 0 },
        { dirName: "src", depth: 1 },
        { dirName: "app", depth: 2 },
        { dirName: "page.tsx", depth: 3 },
        { dirName: "components", depth: 2 },
        { dirName: "index.ts", depth: 3 },
        { dirName: ".gitignore", depth: 1 },
        { dirName: "next.config.ts", depth: 1 },
        { dirName: "package.json", depth: 1 },
        { dirName: "package.lock.json", depth: 1 },
        { dirName: "tsconfig.json", depth: 1 },
    ];

    it("ルートパスを正しく解決すること", () => {
        const result = resolveFullPath(0, directories);
        expect(result).toBe("/");
    })

    it("srcパスを正しく解決すること", () => {
        const result = resolveFullPath(1, directories);
        expect(result).toBe("/src");
    })

    it("ネストされたコンポーネントのパスを正しく解決すること", () => {
        const result = resolveFullPath(3, directories);
        expect(result).toBe("/src/app/page.tsx");
    });

    it("兄弟ディレクトリのパスを正しく解決すること", () => {
        const result = resolveFullPath(4, directories);
        expect(result).toBe("/src/components");
    });

    it("ルートディレクトリ直下のファイルのパスを正しく解決すること", () => {
        const result = resolveFullPath(7, directories);
        expect(result).toBe("/next.config.ts");
    });

    it("無効なインデックスに対して空文字列を返すこと", () => {
        const result = resolveFullPath(9999, directories);
        expect(result).toBe("");
    });

    it("空のディレクトリ配列を適切に処理すること", () => {
        const result = resolveFullPath(0, []);
        expect(result).toBe("");
    });
});