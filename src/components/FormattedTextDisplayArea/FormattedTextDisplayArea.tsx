"use client";

import { useFormat } from "@/hooks";
import { CodeMirrorEditor } from "../CodeMirrorEdditor/CodeMirrorEdditor";
import {CopyButton} from "@/components/CopyButton/CopyButton";
import {ClickableLine} from "@/components/ClickableLine/ClickableLine";
import styles from "./FormattedTextDisplayArea.module.css";

export const FormattedTextDisplayArea = () => {
    const { text, setText, formattedLines } = useFormat();

    return (
            <div className={styles.wrapper}>
                <CodeMirrorEditor value={text} onChangeValue={setText} />
                <CopyButton className={styles.button} text={formattedLines.map((line) => line.displayText).join("\n")} />
                <div
                    className={styles.formattedTextarea}
                >
                    {formattedLines.map((formattedLine, index) => (
                        <ClickableLine
                            key={index}
                            formattedLine={formattedLine}
                        />
                    ))}
                </div>
            </div>
    )
}