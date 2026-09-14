
import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon } from './Icons';

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="rounded-lg overflow-hidden bg-[#1e1e1e] border border-border my-6 shadow-lg group font-mono text-sm">
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#333]">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">{language}</span>
            </div>
            <div className="relative">
                 <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-2 rounded-md bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent z-10"
                    aria-label="Copy code"
                    title="Copy to clipboard"
                >
                    {isCopied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <ClipboardIcon className="w-4 h-4" />}
                </button>
                <div className="overflow-x-auto p-4">
                    <pre className="leading-relaxed text-[#d4d4d4] m-0">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeBlock;
