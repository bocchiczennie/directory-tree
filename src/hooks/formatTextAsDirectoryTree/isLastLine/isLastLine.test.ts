import { describe, expect, it } from "vitest";
import { isLastLine } from "./isLastLine";

describe("isLastLine", () => {

    /**
     * root
     *  └── dir1
     */
    it("次の行が存在しない場合はtrueを返すこと", () => {
        const currentLine = { dirName: "dir1", depth: 1 };
        const result = isLastLine(currentLine, undefined, []);
        expect(result).toBe(true);
    });

    /**
     * root
     *  └── dir1
     */
    it("次の行の深さが現在の行よりも小さい場合はtrueを返すこと", () => {
        const currentLine = { dirName: "dir1", depth: 2 };
        const nextLine = { dirName: "dir2", depth: 1 };
        const result = isLastLine(currentLine, nextLine, []);
        expect(result).toBe(true);
    });

    /**
     * root
     *  └── dir1
     *      └── dir2
     *          └── dir3
     *              └── dir4
     */
    it("後続の行の深さが現在の行よりも大きい場合はtrueを返すこと", () => {
        const currentLine = { dirName: "dir1", depth: 1 };
        const nextLine = { dirName: "dir2", depth: 2 };
        const subsequentLines = [
            { dirName: "dir3", depth: 3 },
            { dirName: "dir4", depth: 4 },
        ];
        const result = isLastLine(currentLine, nextLine, subsequentLines);
        expect(result).toBe(true);
    });

    /**
     * root
     *  ├── dir1
     *  │   └── file.txt
     *  └── dir2
     *      └── dir3
     */
    it("後続行の中に現在と同じ深さの行が存在し、かつその行の深さが現在の行よりも大きい場合はfalseを返すこと", () => {
        const currentLine = { dirName: "dir1", depth: 2 };
        const nextLine = { dirName: "file.txt", depth: 3 };
        const subsequentLines = [
            { dirName: "dir2", depth: 2 },
            { dirName: "dir3", depth: 3 },
        ];

        const result = isLastLine(currentLine, nextLine, subsequentLines);
        expect(result).toBe(false);
    })
})