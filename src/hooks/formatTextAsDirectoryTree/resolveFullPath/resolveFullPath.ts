/**
 * ディレクトリツリーのフルパスを生成する
 *
 * @param targetIndex 処理対象のインデックス
 * @param directories 全ての行
 * @returns 処理対象の行のフルパス
 */

export const resolveFullPath = (
    targetIndex: number,
    directories: { dirName: string; depth: number }[]
): string => {
    const selectedItem = directories[targetIndex];

    if (!selectedItem) return "";
    const path = [selectedItem.dirName];
    let currentDepth = selectedItem.depth;

    for (let i = targetIndex - 1; i >= 0; i--) {
        const item = directories[i];
        if (item && item.depth < currentDepth) {
            path.unshift(item.dirName);
            currentDepth = item.depth;
            if (currentDepth === 0) break;
        }
    }

    return path.join("/").replace("//", "/").replace(/\s*\/\s*/g, "/");
}