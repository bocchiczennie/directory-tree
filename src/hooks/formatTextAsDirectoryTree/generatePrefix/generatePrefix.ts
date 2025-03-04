/**
 * 深さに応じたプレフィックス（接頭辞）を生成する
 *
 * @param currentLine 現在の行
 * @param allLines 全ての行
 * @return プレフィックス
 */

export const generatePrefix = (
    currentLine: { dirName: string; depth: number; isLast: boolean },
    allLines: { dirName: string; depth: number; isLast: boolean }[]
): string => {
    let prefix = "";

    for (let i = 1; i < currentLine.depth; i++) {
        const previousLinesSameDepth = allLines
        .slice(0, allLines.indexOf(currentLine))
        .reverse()
        .find((l) => l.depth === i);

        if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
            prefix += "│  ";
        }
        else {
            prefix += "   ";
        }
    }

    prefix += currentLine.isLast ? "└─ " : "├─ ";

    return prefix;
}