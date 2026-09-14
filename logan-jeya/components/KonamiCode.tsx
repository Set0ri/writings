
import React, { useState, memo, useEffect, useCallback } from 'react';
import {
    DpadUpIcon,
    DpadDownIcon,
    DpadLeftIcon,
    DpadRightIcon,
    NintendoBIcon,
    NintendoAIcon,
    BoltIcon,
    SparklesIcon,
    XIcon
} from './Icons';

export const konamiSequence = [
    { key: 'ArrowUp', Icon: DpadUpIcon },
    { key: 'ArrowUp', Icon: DpadUpIcon },
    { key: 'ArrowDown', Icon: DpadDownIcon },
    { key: 'ArrowDown', Icon: DpadDownIcon },
    { key: 'ArrowLeft', Icon: DpadLeftIcon },
    { key: 'ArrowRight', Icon: DpadRightIcon },
    { key: 'ArrowLeft', Icon: DpadLeftIcon },
    { key: 'ArrowRight', Icon: DpadRightIcon },
    { key: 'b', Icon: NintendoBIcon },
    { key: 'a', Icon: NintendoAIcon },
];

const successMessagePart1 = "Hehe, congratulations.";
const successMessagePart2 = "I left my treasure in one piece, but beware, here they be dragons.";
const successMessagePart3 = "Good luck and my help if you need:";
const successMessagePart4 = "luffydengineer@gmail.com";

interface KonamiCodeProps {
    isKonamiActive: boolean;
    setIsKonamiActive: (isActive: boolean) => void;
    animations: boolean;
    children: React.ReactNode;
    trackerOffsetClass?: string;
    trackerPositionClass?: string;
    konamiIndex: number;
    location?: 'home' | 'writing' | 'other';
}

// A purely decorative cyber-text component that "decrypts" itself
const CyberText = memo(({ text, delay = 0, onComplete, className }: { text: string; delay?: number; onComplete?: () => void; className?: string }) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";

    useEffect(() => {
        let timeoutId: number;
        let intervalId: number;
        let currentIndex = 0;
        
        // Delay start
        timeoutId = window.setTimeout(() => {
            intervalId = window.setInterval(() => {
                if (currentIndex >= text.length) {
                    clearInterval(intervalId);
                    setDisplayText(text);
                    setIsComplete(true);
                    if (onComplete) onComplete();
                    return;
                }

                const scrambled = text.split('').map((char, idx) => {
                    if (idx < currentIndex) return text[idx];
                    if (char === ' ') return ' ';
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');

                setDisplayText(scrambled);
                currentIndex += 1; // Speed of decryption
            }, 30);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, delay, onComplete]);

    return (
        <span className={`${isComplete ? 'text-inherit drop-shadow-[0_0_5px_currentColor]' : 'text-accent'} font-mono transition-all duration-300 ${className || ''}`}>
            {displayText}
        </span>
    );
});

const KonamiCode: React.FC<KonamiCodeProps> = ({ 
    isKonamiActive, 
    setIsKonamiActive, 
    animations, 
    children, 
    konamiIndex, 
    trackerOffsetClass = 'top-8', 
    trackerPositionClass = 'absolute -left-28',
    location = 'other'
}) => {
    const [pulsingIndex, setPulsingIndex] = useState<number | null>(null);
    const [bootSequence, setBootSequence] = useState<'idle' | 'booting' | 'ready'>('idle');
    const [countdown, setCountdown] = useState(100);
    const [hintActive, setHintActive] = useState(false);
    
    // Stages: 'initial' (hidden) -> 'falling' (drop in) -> 'waving' (sine wave) -> 'finished' (static)
    const [iconAnimationStage, setIconAnimationStage] = useState<'initial' | 'falling' | 'waving' | 'finished'>('initial');

    // Reset logic
    const resetKonami = useCallback(() => {
        setIsKonamiActive(false);
        setBootSequence('idle');
        setIconAnimationStage('initial');
        setCountdown(100);
        setHintActive(false);
    }, [setIsKonamiActive]);

    // Pulse animation for tracker
    useEffect(() => {
        if (konamiIndex > 0 && konamiIndex <= konamiSequence.length) {
            setPulsingIndex(konamiIndex - 1);
            const timer = setTimeout(() => setPulsingIndex(null), 200);
            return () => clearTimeout(timer);
        }
    }, [konamiIndex]);

    // Random hint logic (wiggles the first arrow)
    useEffect(() => {
        if (isKonamiActive || konamiIndex > 0) {
            setHintActive(false);
            return;
        }

        // If you've ever entered the code, hints only appear on the homepage
        const hasTriggered = typeof window !== 'undefined' && localStorage.getItem('konami_ever_triggered') === 'true';
        if (hasTriggered && location !== 'home') {
            return;
        }

        let timeoutId: number;
        
        const scheduleHint = () => {
            // Random interval between 4s and 10s
            let nextInterval = Math.floor(Math.random() * 6000) + 4000;

            // On essay pages, make timing 10x larger
            if (location === 'writing') {
                nextInterval *= 10;
            }

            timeoutId = window.setTimeout(() => {
                setHintActive(true);
                // Remove hint after 1000ms
                setTimeout(() => {
                    setHintActive(false);
                    scheduleHint();
                }, 1000); 
            }, nextInterval);
        };

        scheduleHint();
        return () => clearTimeout(timeoutId);
    }, [isKonamiActive, konamiIndex, location]);

    // Boot sequence logic & Animation Staging
    useEffect(() => {
        if (isKonamiActive) {
            // Mark as triggered in persistent storage
            if (typeof window !== 'undefined') {
                localStorage.setItem('konami_ever_triggered', 'true');
            }

            window.scrollTo(0, 0);
            setBootSequence('booting');
            setIconAnimationStage('initial');

            // Sequence Timing:
            // 0ms: Modal opens (booting)
            // 100ms: Icons start falling (staggered)
            const fallTimer = setTimeout(() => setIconAnimationStage('falling'), 100);
            
            // 1200ms: Fall complete. Start sine wave (staggered)
            const waveTimer = setTimeout(() => setIconAnimationStage('waving'), 1400);

            // 2600ms: Wave complete. Icons settle.
            const finishTimer = setTimeout(() => setIconAnimationStage('finished'), 2800);

            // 2800ms: Text begins decrypting
            const textTimer = setTimeout(() => setBootSequence('ready'), 3000);

            return () => {
                clearTimeout(fallTimer);
                clearTimeout(waveTimer);
                clearTimeout(finishTimer);
                clearTimeout(textTimer);
            };
        } else {
            setBootSequence('idle');
            setIconAnimationStage('initial');
        }
    }, [isKonamiActive]);

    // Countdown timer logic
    useEffect(() => {
        let interval: number;
        if (bootSequence === 'ready') {
            interval = window.setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 0) {
                        resetKonami();
                        return 0;
                    }
                    return prev - 0.25; // Slower drain for dramatic effect
                });
            }, 25); 
        }
        return () => clearInterval(interval);
    }, [bootSequence, resetKonami]);

    // Side Tracker HUD
    const trackerJsx = (
        <div className={`hidden md:flex flex-col items-center transition-all duration-500 ${isKonamiActive ? 'opacity-0 -translate-x-20' : 'opacity-100'} ${trackerOffsetClass} ${trackerPositionClass}`}>
            <div 
                className={`${animations ? 'animate-fade-in-up opacity-0' : ''} flex flex-col items-center gap-3`}
                style={animations ? { animationDelay: '300ms' } : {}}
            >
                {konamiSequence.map(({ Icon }, index) => {
                    const isActivated = index < konamiIndex;
                    const isPulsing = index === pulsingIndex;
                    const isHinting = index === 0 && hintActive && konamiIndex === 0;

                    const spaceClass = (index === 8 || index === 9) ? 'mt-1' : '';
                    
                    let stateClasses = 'text-gray-500 opacity-20';
                    if (isActivated) {
                         stateClasses = 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]';
                    } else if (isHinting) {
                        // Simulating "act as if its pressed" with a wiggle, matching glow of activated state
                        stateClasses = 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]';
                    }

                    return (
                        // Wiggle animation applied to container to avoid transform conflict with scale-110 on Icon
                        <div key={index} className={`relative ${spaceClass} ${isHinting ? 'animate-wiggle' : ''}`}>
                            <Icon 
                                className={`w-5 h-5 transition-all duration-150 ${stateClasses} ${isPulsing ? 'scale-125 brightness-200 drop-shadow-[0_0_12px_rgba(255,255,255,1)]' : ''}`}
                                filled={true} 
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen w-full">
            {trackerJsx}

            {/* Main Content Overlay */}
            <div className={`
                fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95
                transition-all duration-700 ease-in-out
                ${isKonamiActive ? 'opacity-100 pointer-events-auto backdrop-blur-xl' : 'opacity-0 pointer-events-none'}
            `}>
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10" />
                <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full pointer-events-none z-10 opacity-20" />

                {/* Terminal Window */}
                <div className={`
                    relative w-full max-w-2xl mx-4 overflow-hidden bg-[#050505] border border-white/10 rounded-lg shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]
                    transition-all duration-500 transform
                    ${bootSequence !== 'idle' ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}
                `}>
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="h-4 w-[1px] bg-white/10" />
                            <span className="font-mono text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
                                Classified // Level 5
                            </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-accent tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            SECURE_CHANNEL_ACTIVE
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center relative min-h-[320px]">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-[0.03]" 
                             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                        />

                        {/* Animated Icons Container */}
                        <div className="mb-12 relative z-20 h-16 flex items-end justify-center gap-3 sm:gap-4">
                            {konamiSequence.map(({ Icon }, i) => (
                                <div 
                                    key={i}
                                    className={`
                                        transition-opacity duration-300
                                        ${iconAnimationStage === 'initial' ? 'opacity-0' : 'opacity-100'}
                                        ${iconAnimationStage === 'falling' ? 'animate-fall-in' : ''}
                                        ${iconAnimationStage === 'waving' ? 'animate-sine-pop' : ''}
                                    `}
                                    style={{ 
                                        animationDelay: `${i * 60}ms`, 
                                        animationFillMode: 'both' 
                                    }}
                                >
                                    <Icon 
                                        className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" 
                                        filled={true}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Decryption Sequence */}
                        {bootSequence === 'ready' && (
                            <div className="w-full max-w-lg relative z-20 animate-fade-in">
                                <div className="bg-white/5 border-l-2 border-accent p-6 text-left backdrop-blur-sm shadow-inner relative overflow-hidden">
                                    {/* Strawhat Symbol */}
                                    <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none transform -rotate-12">
                                        <img 
                                            src="https://i.imgur.com/uWz4D63.png" 
                                            alt="Strawhat" 
                                            className="w-32 h-32 grayscale brightness-150" 
                                        />
                                    </div>

                                    <div className="font-mono text-xs text-accent mb-2 tracking-wider uppercase opacity-70">
                                        Message Decrypted:
                                    </div>
                                    <div className="font-mono text-sm md:text-base leading-relaxed text-white/90 relative z-10">
                                        <div className="mb-3">
                                            <span className="font-bold text-[#FFD700] drop-shadow-[0_0_3px_rgba(255,215,0,0.5)]">
                                                <CyberText text={successMessagePart1} delay={300} />
                                            </span>
                                        </div>
                                        <div className="mb-4">
                                            <span className="text-gray-200">
                                                <CyberText text={successMessagePart2} delay={1000} />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400 mr-2">
                                                <CyberText text={successMessagePart3} delay={3500} />
                                            </span>
                                            <span className="font-bold text-accent drop-shadow-[0_0_3px_rgba(var(--accent),0.5)]">
                                                <CyberText text={successMessagePart4} delay={4600} />
                                            </span>
                                            <span className="animate-cursor-blink inline-block w-2 h-4 bg-accent ml-1 align-middle shadow-[0_0_8px_currentColor]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer / Self Destruct */}
                    <div className="bg-[#0a0a0a] border-t border-white/10 px-6 py-4 relative z-20">
                         <div className="flex justify-between items-end text-white/40 mb-3 font-mono text-[10px] uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <span className="text-red-500 animate-pulse">⚠</span>
                                Protocol: Auto-Destruct
                            </span>
                            <span className="text-red-500 font-bold text-base tabular-nums">
                                {(countdown / 10).toFixed(2)}s
                            </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-all duration-100 ease-linear"
                                style={{ width: `${countdown}%` }} 
                            />
                        </div>
                    </div>
                </div>
                
                {/* Manual Terminate Button */}
                <button 
                    onClick={resetKonami}
                    className="mt-12 group relative px-8 py-3 overflow-hidden rounded-sm bg-transparent text-white font-mono text-xs tracking-[0.3em] uppercase border border-white/10 hover:border-white/30 transition-all duration-300 focus:outline-none"
                >
                    <span className="relative z-10 opacity-50 group-hover:opacity-100 transition-opacity">Terminate Session</span>
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
            </div>

            {/* Main Content (Hidden when Konami is Active) */}
            <div className={`
                transition-opacity duration-500 ease-in-out
                ${isKonamiActive ? 'opacity-0' : 'opacity-100'}
            `}>
                {children}
            </div>
        </div>
    );
};

export default memo(KonamiCode);
