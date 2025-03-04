import { useDebounce } from "ahooks";
import { useState } from "react";
import { formatTextAsDirectoryTree } from "@/hooks/formatTextAsDirectoryTree/formatTextAsDirectoryTree";

const defaultValue = `/
 src
  app
   page.tsx
  components
   button
    Button.tsx
 .gitignore
 next.config.ts
 package.json
 package.lock.json
 tsconfig.json
`;

export const useFormat = () => {
    const [text, setText] = useState<string>(defaultValue);
    const debouncedValue = useDebounce(text, { wait: 300 });
    const formattedLines = formatTextAsDirectoryTree(debouncedValue);

    return { text, setText, formattedLines };
};