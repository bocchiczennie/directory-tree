/**
 * 現在の行がその深さにおける最後の行かを判定する
 *
 * @param currentLine 現在の行
 * @param nextLine 次の行
 * @param linesAfterCurrent 現在の行以降の行
 * @returns 現在の行がその深さにおける最後の行か
 */

export const isLastLine = (
    currentLine: { dirName: string; depth: number },
    nextLine: { dirName: string; depth: number } | undefined,
    linesAfterCurrent: { dirName: string; depth: number }[]
): boolean => {
    return (
        !nextLine ||
        nextLine.depth < currentLine.depth ||
        linesAfterCurrent.every((line) => line.depth > currentLine.depth) ||
        (linesAfterCurrent[
            linesAfterCurrent.findIndex((line) => line.depth <= currentLine.depth)
        ]?.depth ?? 0) < currentLine.depth
    )
}