import { calculateDepth } from "./calculateDepth/calculateDepth";
import { generatePrefix } from "./generatePrefix/generatePrefix";
import { isLastLine } from "./isLastLine/isLastLine";
import { resolveFullPath } from "./resolveFullPath/resolveFullPath";
import { separateLines } from "./separateLines/separateLines";
import { FormattedLine } from "@/types/formattedLine";

export const formatTextAsDirectoryTree = (text: string) => {
    const formattedLines: FormattedLine[] = separateLines(text)
        .map((line) => ({ dirName: line, depth: calculateDepth(line) }))
        .map((line, index, array) => ({
            ...line,
            isLast: isLastLine(line, array[index + 1], array.slice(index + 1))
        }))
        .map((line, index, array) => {
            return {
                displayText: line.dirName.replace(/^\s+/, generatePrefix(line, array)),
                fullPath: resolveFullPath(index, array)
            }
        });
    return formattedLines;
}