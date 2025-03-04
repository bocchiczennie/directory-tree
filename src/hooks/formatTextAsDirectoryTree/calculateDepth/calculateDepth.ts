/**
 * 文字列の先頭の空白・タブ数を返す
 *
 * @param text 文字列
 * @returns 先頭の空白数
 */
export const calculateDepth = (text: string): number => {
    return text.match(/^\s+/)?.[0].length ?? 0;
}