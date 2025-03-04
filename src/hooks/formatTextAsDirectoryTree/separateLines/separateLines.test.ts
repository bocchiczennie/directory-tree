import { describe, expect, it } from "vitest";
import { separateLines } from "./separateLines";

describe(separateLines, () => {
    it("空文字を処理できること", () => {
        const result = separateLines("");
        expect(result).toEqual([]);
    })

    it("行を分割できること", () => {
        const input = "Line 1\nLine 2\nLine 3";
        const result = separateLines(input);
        expect(result).toEqual(["Line 1", "Line 2", "Line 3"]);
    })

    it("空白だけの行をフィルタリングできること", () => {
        const input = "Line 1\n\t\nLine 2";
        const result = separateLines(input);
        expect(result).toEqual(["Line 1", "Line 2"]);
    })
})