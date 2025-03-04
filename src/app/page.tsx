import { FormattedTextDisplayArea } from "@/components/FormattedTextDisplayArea/FormattedTextDisplayArea";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <h1 className="text-4xl text-center font-bold sm:text-left font-[family-name:var(--font-geist-mono)]">Directory Tree</h1>
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <p className="text-md">Please input the plain text of your directory structure into the provided textarea.<br/>Adding a space at the beginning of the text will convert it into a formatted directory structure!</p>
                </ol>
                <FormattedTextDisplayArea />
            </main>
        </div>
    );
}
