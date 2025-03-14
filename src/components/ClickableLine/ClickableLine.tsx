import type { FC } from "react";
import styles from "./ClickableLine.module.css";
import type { FormattedLine } from "@/types/formattedLine";

type ClickableLineProps = {
    formattedLine: FormattedLine;
};

export const ClickableLine: FC<ClickableLineProps> = ({ formattedLine }) => {
    const handleCopyFullPath = () => {
        navigator.clipboard.writeText(formattedLine.fullPath);
    };

    return (
        <button
            className={styles.button}
            type="button"
            onClick={handleCopyFullPath}
        >
            {formattedLine.displayText}
        </button>
    );
};