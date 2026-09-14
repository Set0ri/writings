
import React, { useState, useEffect, useRef } from 'react';
import { 
    Square, 
    Shield, 
    Globe, 
    Zap, 
    Cpu, 
    Lock, 
    Activity,
    Layers,
    Briefcase,
    Database,
    Target,
    Triangle,
    Brain,
    ArrowUp,
    AlertTriangle,
    Compass,
    Radio,
    Eye,
    Orbit,
    Sparkles,
    Box,
    Share2,
    Atom,
    Search,
    Hexagon,
    CheckCircle2,
    Glasses,
    ShieldAlert,
    Anchor,
    RefreshCw,
    Sliders,
    FlaskConical,
    Scale,
    FileText,
    Flame,
    Filter,
    ZoomIn,
    ZoomOut,
    Maximize2
} from 'lucide-react';

// --- Shared Styles & Helpers ---
const labelStyle = "font-mono text-[10px] tracking-wider uppercase fill-text-secondary select-none";

const getContainerClass = (elevation?: boolean) => 
    `my-16 w-full flex flex-col items-center justify-center rounded-2xl p-4 sm:p-10 relative group overflow-hidden bg-card-bg shadow-md border-0 outline-none ring-0`;

const captionClass = "text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-10 z-10 opacity-70 text-center";

const gridPattern = (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
    />
);

interface VisualProps {
    elevation?: boolean;
}

// --- Part 1: Techno-feudalism (High-Fidelity) ---

export const CastePyramid: React.FC<VisualProps> = ({ elevation }) => {
    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 1.1 The Compute Hierarchy</h4>
            {gridPattern}
            <div className="relative w-full max-w-[400px] aspect-[4/3] perspective-1000">
                <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-2xl overflow-visible">
                    <defs>
                        <linearGradient id="tier1Grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="var(--accent-color)" />
                            <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.5"/>
                        </linearGradient>
                        <linearGradient id="tierBodyGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--text-primary)" stopOpacity="0.15"/>
                            <stop offset="100%" stopColor="var(--text-primary)" stopOpacity="0.05"/>
                        </linearGradient>
                         <linearGradient id="tierShine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="white" stopOpacity="0"/>
                            <stop offset="50%" stopColor="white" stopOpacity="0.1"/>
                            <stop offset="100%" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                        <filter id="glow-strong">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Tiers as stacked trapezoidal slabs (No strokes, just gradient fills and lighting) */}
                    {[
                        { id: 5, label: "TIER 5: DISPOSSESSED", y: 240, h: 45, wBot: 360, wTop: 300, delay: '0.1s' },
                        { id: 4, label: "TIER 4: PUBLIC USERS", y: 185, h: 45, wBot: 300, wTop: 240, delay: '0.2s' },
                        { id: 3, label: "TIER 3: CONSUMER", y: 130, h: 45, wBot: 240, wTop: 180, delay: '0.3s' },
                        { id: 2, label: "TIER 2: SOVEREIGN", y: 75, h: 45, wBot: 180, wTop: 120, delay: '0.4s' },
                    ].map((tier) => (
                        <g key={tier.id} className="animate-fade-in-up transition-all duration-500 group hover:scale-[1.02]" style={{ animationDelay: tier.delay, transformOrigin: 'center' }}>
                            {/* Main Volume */}
                            <path 
                                d={`M${200 - tier.wBot/2} ${tier.y + tier.h} L${200 + tier.wBot/2} ${tier.y + tier.h} L${200 + tier.wTop/2} ${tier.y} L${200 - tier.wTop/2} ${tier.y} Z`} 
                                fill="url(#tierBodyGrad)"
                                className="transition-colors duration-300 group-hover:fill-text-secondary/20"
                            />
                            {/* Top Surface (Simulated 3D Top) */}
                             <path 
                                d={`M${200 - tier.wTop/2} ${tier.y} L${200 + tier.wTop/2} ${tier.y} L${200 + tier.wTop/2 + 10} ${tier.y + 10} L${200 - tier.wTop/2 - 10} ${tier.y + 10} Z`} 
                                fill="white"
                                fillOpacity="0.05"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                             {/* Shine effect */}
                             <path 
                                d={`M${200 - tier.wBot/2} ${tier.y + tier.h} L${200 + tier.wBot/2} ${tier.y + tier.h} L${200 + tier.wTop/2} ${tier.y} L${200 - tier.wTop/2} ${tier.y} Z`} 
                                fill="url(#tierShine)"
                                className="opacity-50"
                            />
                            
                            <text x="200" y={tier.y + tier.h/2 + 5} textAnchor="middle" fill="var(--text-primary)" fontSize="9" className="font-mono font-bold tracking-[0.2em] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity group-hover:fill-accent">
                                {tier.label}
                            </text>
                        </g>
                    ))}

                    {/* Tier 1 - The Floating Capstone */}
                    <g className="animate-float" style={{ animationDuration: '4s' }}>
                        {/* Glow backing */}
                        <path 
                            d="M160 60 L240 60 L200 10 Z" 
                            fill="url(#tier1Grad)" 
                            filter="url(#glow-strong)"
                            opacity="0.4"
                        />
                        {/* Solid Shape */}
                        <path 
                            d="M160 60 L240 60 L200 10 Z" 
                            fill="url(#tier1Grad)" 
                            opacity="0.9"
                        />
                        {/* Energy Core */}
                        <circle cx="200" cy="45" r="4" fill="white" className="animate-pulse" />
                        <text x="200" y="80" textAnchor="middle" fill="var(--accent-color)" fontSize="10" className="font-mono font-bold tracking-widest">TIER 1</text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export const ComputeVelocityGraph: React.FC<VisualProps> = ({ elevation }) => {
    return (
        <div className={getContainerClass(elevation)}>
             <h4 className={captionClass}>Fig 1.2 The Velocity Gap</h4>
             <div className="relative w-full max-w-lg aspect-video">
                <svg viewBox="0 0 500 250" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="velocityGrad" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.1"/>
                            <stop offset="60%" stopColor="var(--accent-color)" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.9"/>
                        </linearGradient>
                        <mask id="revealMask">
                            <rect x="0" y="0" width="500" height="250" fill="white">
                                <animate attributeName="width" from="0" to="500" dur="4s" fill="freeze" />
                            </rect>
                        </mask>
                    </defs>

                    {/* Minimal Grid (Dots instead of lines) */}
                    <g fill="var(--text-secondary-color)" opacity="0.2">
                         {[0,1,2,3,4].map(i => [0,1,2,3,4,5,6,7,8,9,10].map(j => <circle key={`${i}-${j}`} cx={j*50} cy={i*50 + 25} r="1"/>))}
                    </g>
                    
                    <text x="490" y="240" textAnchor="end" className={labelStyle}>Time</text>

                    {/* Human Linear Growth - Faint Line */}
                    <path d="M0 225 L500 190" fill="none" stroke="var(--text-secondary-color)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                    <text x="490" y="180" textAnchor="end" fill="var(--text-secondary-color)" className="font-mono text-[9px] opacity-50">Human Linear</text>

                    {/* AI Exponential Growth - Area Fill + Reveal Animation */}
                    <g mask="url(#revealMask)">
                        {/* The Area */}
                        <path 
                            d="M0 225 C 150 225, 300 210, 500 10 L 500 250 L 0 250 Z" 
                            fill="url(#velocityGrad)" 
                            opacity="0.8"
                        />
                        {/* The Line */}
                        <path 
                            d="M0 225 C 150 225, 300 210, 500 10" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2"
                            strokeOpacity="0.5"
                        />
                    </g>
                    
                    {/* Leading Edge Particle */}
                    <circle r="6" fill="white" className="animate-ping" opacity="0.5">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M0 225 C 150 225, 300 210, 500 10" />
                    </circle>
                    <circle r="4" fill="white" filter="url(#glow-strong)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M0 225 C 150 225, 300 210, 500 10" />
                    </circle>

                    <text x="280" y="80" fill="var(--accent-color)" className="font-mono text-xs font-bold tracking-widest drop-shadow-lg">EXPONENTIAL TAKEOFF</text>
                </svg>
             </div>
        </div>
    );
};


// --- Part 2: Wargaming AI (Major Improvements) ---

export const StaleVsOnline: React.FC<VisualProps> = ({ elevation }) => {
    // A detailed timeline animation showing data hitting a barrier vs getting absorbed
    // Removed borders: border-slate-500/50, border-r border-border/20
    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 2.1 Knowledge Horizon</h4>
            <div className="relative w-full max-w-xl h-64 bg-ui-background/30 rounded-lg overflow-hidden">
                {/* Timeline Grid moving left - Removed borders */}
                <div className="absolute inset-0 flex">
                     {[...Array(20)].map((_, i) => (
                        <div key={i} className="h-full border-r border-transparent w-[50px] animate-[slideLeft_5s_linear_infinite]" style={{ minWidth: '50px' }}>
                             <div className="h-full w-px bg-border/10" />
                        </div>
                     ))}
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-center gap-12 p-8">
                    {/* Row 1: Stale Model */}
                    <div className="relative h-12 flex items-center">
                         <span className="absolute -left-4 -top-5 text-[9px] font-mono text-text-secondary">OFFLINE MODEL</span>
                         <div className="h-8 bg-slate-500/30 rounded w-1/2 flex items-center justify-center relative overflow-hidden">
                            <span className="text-[9px] font-bold text-slate-400 z-10">FROZEN</span>
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-500/50 shadow-[0_0_10px_red]"/>
                         </div>
                         {/* Dashed line extending */}
                         <div className="h-0.5 border-t border-dashed border-slate-600 w-1/2"/>
                         
                         {/* Events hitting the wall */}
                         <div className="absolute inset-0 overflow-hidden">
                            {[...Array(5)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="absolute top-1/2 w-2 h-2 bg-red-500 rounded-full animate-[projectiles_3s_linear_infinite]"
                                    style={{ left: '100%', animationDelay: `${i * 0.8}s`, marginTop: '-4px' }}
                                >
                                    {/* Bounce effect simulated by opacity change at 50% in keyframe */}
                                </div>
                            ))}
                         </div>
                    </div>

                    {/* Row 2: Online Model */}
                    <div className="relative h-12 flex items-center">
                         <span className="absolute -left-4 -top-5 text-[9px] font-mono text-accent">ONLINE AGENT</span>
                         <div className="h-8 bg-accent/20 rounded w-full flex items-center pl-4 relative overflow-hidden shadow-[0_0_20px_rgba(var(--accent),0.2)]">
                            <span className="text-[9px] font-bold text-accent z-10">LEARNING...</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-[shimmer_2s_linear_infinite]"/>
                         </div>
                         
                         {/* Events being absorbed */}
                         <div className="absolute inset-0 overflow-hidden pointer-events-none">
                             {[...Array(5)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="absolute top-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80] animate-[absorb_3s_linear_infinite]"
                                    style={{ left: '100%', animationDelay: `${i * 0.6 + 0.3}s`, marginTop: '-4px' }}
                                />
                            ))}
                         </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes projectiles {
                    0% { left: 100%; opacity: 0; }
                    10% { opacity: 1; }
                    45% { opacity: 1; transform: scale(1); }
                    50% { left: 50%; opacity: 1; transform: scale(1.5); background: red; }
                    55% { opacity: 0; transform: scale(0.5); }
                    100% { left: 50%; opacity: 0; }
                }
                @keyframes absorb {
                    0% { left: 100%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; transform: scale(1); }
                    100% { left: 10%; opacity: 0; transform: scale(2); }
                }
                @keyframes slideLeft {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50px); }
                }
                @keyframes shimmer {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                }
            `}</style>
        </div>
    )
}

export const RLFeedbackLoop: React.FC<VisualProps> = ({ elevation }) => {
    // Removed borders on orbiting nodes: border border-border, border border-accent/10, border border-accent
    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 2.2 The OODA Loop</h4>
            <div className="relative w-64 h-64">
                {/* Central Brain - Removed border */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                     <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--accent),0.3)] animate-pulse">
                        <Brain className="w-10 h-10 text-accent"/>
                     </div>
                </div>

                {/* Orbiting Nodes - Removed borders */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                    {/* Top: Action */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center z-20">
                            <Zap className="w-5 h-5 text-yellow-500"/>
                        </div>
                        <span className="text-[9px] font-bold mt-1 tracking-widest bg-background px-1">ACTION</span>
                    </div>
                    
                    {/* Right: Environment */}
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-center -rotate-90">
                        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center z-20">
                            <Globe className="w-5 h-5 text-blue-500"/>
                        </div>
                        <span className="text-[9px] font-bold mt-1 tracking-widest bg-background px-1">WORLD</span>
                    </div>

                    {/* Bottom: Reward */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center rotate-180">
                        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center z-20">
                            <Target className="w-5 h-5 text-green-500"/>
                        </div>
                        <span className="text-[9px] font-bold mt-1 tracking-widest bg-background px-1">REWARD</span>
                    </div>

                     {/* Left: Update */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center rotate-90">
                        <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center z-20">
                            <ArrowUp className="w-5 h-5 text-purple-500"/>
                        </div>
                        <span className="text-[9px] font-bold mt-1 tracking-widest bg-background px-1">UPDATE</span>
                    </div>
                </div>

                {/* Connecting Ring */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <circle cx="50%" cy="50%" r="50%" fill="none" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" className="opacity-30"/>
                    {/* Particles */}
                    <circle r="3" fill="var(--accent-color)">
                         <animateMotion dur="2s" repeatCount="indefinite" path="M128 0 A 128 128 0 1 1 127.9 0" />
                    </circle>
                    <circle r="3" fill="white" opacity="0.5">
                         <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M128 0 A 128 128 0 1 1 127.9 0" />
                    </circle>
                </svg>
            </div>
        </div>
    )
}

export const AlignmentGraph: React.FC<VisualProps> = ({ elevation }) => {
    const [visible, setVisible] = useState(false);
    
    // Trigger animation on mount
    useEffect(() => setVisible(true), []);

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 2.3 The Safety Tax</h4>
            <div className="relative w-full max-w-lg aspect-video">
                <svg viewBox="0 0 500 280" className="w-full h-full overflow-visible">
                    <defs>
                         <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="10" stroke="var(--text-secondary-color)" strokeWidth="2" opacity="0.1" />
                         </pattern>
                         <mask id="graphMask">
                            <rect x="0" y="0" width={visible ? "500" : "0"} height="280" fill="white" className="transition-all duration-[3s] ease-linear"/>
                         </mask>
                    </defs>

                    {/* Axes */}
                    <line x1="50" y1="250" x2="480" y2="250" stroke="var(--border-color)" strokeWidth="2"/>
                    <text x="480" y="270" textAnchor="end" className={labelStyle}>COMPUTE / TIME</text>
                    
                    <line x1="50" y1="250" x2="50" y2="20" stroke="var(--border-color)" strokeWidth="2"/>
                    <text x="40" y="30" textAnchor="end" className={`${labelStyle} writing-vertical-rl`} style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>CAPABILITY</text>
                    
                    {/* Curves Group */}
                    <g mask="url(#graphMask)">
                        {/* Area Between Curves (The Tax) */}
                        <path 
                            d="M50 250 Q 200 240, 450 20 L 450 200 Q 200 230, 50 250 Z" 
                            fill="url(#stripePattern)"
                        />

                        {/* Aligned Curve (Lower, Safe) */}
                        <path 
                            d="M50 250 Q 200 230, 450 200" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="3" 
                        />
                        <text x="455" y="205" fill="#3b82f6" className="text-[10px] font-bold tracking-widest">ALIGNED</text>

                        {/* Unaligned Curve (Higher, Unsafe) */}
                        <path 
                            d="M50 250 Q 200 240, 450 20" 
                            fill="none" 
                            stroke="#ef4444" 
                            strokeWidth="4"
                        />
                        <text x="455" y="30" fill="#ef4444" className="text-[10px] font-bold tracking-widest">UNALIGNED</text>
                    </g>

                    {/* Temptation Label */}
                    <g className={`transition-opacity duration-1000 delay-[2500ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                        <path d="M350 100 L350 170" stroke="var(--text-primary)" strokeDasharray="2 2"/>
                        <text x="360" y="140" className="text-[10px] font-mono fill-text-secondary">SAFETY GAP</text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export const EscalationLadder: React.FC<VisualProps> = ({ elevation }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((s) => (s + 1) % 5); // 0 to 4
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        { id: 1, label: "ALIGNED", color: "bg-green-500", desc: "Stable State" },
        { id: 2, label: "ADVANTAGE", color: "bg-yellow-500", desc: "Asymmetry" },
        { id: 3, label: "CRISIS", color: "bg-orange-500", desc: "Existential Risk" },
        { id: 4, label: "DEFECTION", color: "bg-red-600", desc: "Safety Off" },
    ];

    return (
        <div className={getContainerClass(elevation)}>
             <h4 className={captionClass}>Fig 2.4 The Escalation Ladder</h4>
             <div className="w-full max-w-md flex flex-col-reverse gap-2 relative h-64 justify-end">
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-4 bottom-8 w-0.5 bg-border z-0"/>

                {steps.map((s, i) => {
                    const isActive = step >= (i + 1);
                    const isCurrent = step === (i + 1);
                    
                    // Removed border-4 border-background, replaced with simpler style
                    return (
                        <div key={s.id} className={`relative z-10 flex items-center gap-4 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                            {/* Node */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-500 ${isActive ? s.color : 'bg-gray-700'}`}>
                                <span className="text-white font-bold text-sm">{s.id}</span>
                            </div>
                            
                            {/* Label Box - Removed border border-accent/transparent */}
                            <div className={`flex-1 p-3 rounded transition-all duration-500 ${isCurrent ? 'bg-card-bg scale-105 shadow-lg' : 'bg-ui-background'}`}>
                                <div className="flex justify-between items-center">
                                    <span className={`font-bold tracking-widest text-xs ${isCurrent ? 'text-accent' : 'text-text-secondary'}`}>{s.label}</span>
                                    {isCurrent && <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                    </span>}
                                </div>
                                <p className="text-[10px] text-text-secondary mt-1 uppercase opacity-70">{s.desc}</p>
                            </div>
                        </div>
                    );
                })}
             </div>
        </div>
    );
}

export const NashEquilibriumMatrix: React.FC<VisualProps> = ({ elevation }) => {
    // A pulsing, detailed HUD style matrix
    // Removed border border-white/5
    const panelBase = "relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl transition-all duration-500 backdrop-blur-md";
    const [highlighted, setHighlighted] = useState<string>('TL'); // TL, TR, BL, BR

    useEffect(() => {
        const sequence = [
            { id: 'TL', delay: 0 },   // Start Cooperate
            { id: 'TR', delay: 2000 }, // Temptation A
            { id: 'BL', delay: 3000 }, // Temptation B
            { id: 'BR', delay: 4000 }, // Collapse to Defect
            { id: 'BR', delay: 8000 }  // Hold
        ];
        
        let timeouts: number[] = [];
        const runLoop = () => {
            sequence.forEach(({ id, delay }) => {
               timeouts.push(window.setTimeout(() => setHighlighted(id), delay));
            });
        };
        
        runLoop();
        const interval = setInterval(runLoop, 8000);
        
        return () => {
            clearInterval(interval);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    return (
        <div className={getContainerClass(elevation)}>
             <h4 className={captionClass}>Fig 2.5 Prisoner's Dilemma</h4>
             <div className="grid grid-cols-[auto_1fr_1fr] gap-2 sm:gap-4 w-full max-w-2xl">
                {/* Headers */}
                <div className="col-start-2 text-center text-text-secondary/60 text-[9px] uppercase tracking-[0.2em] mb-2">Opponent: Aligned</div>
                <div className="col-start-3 text-center text-accent/80 text-[9px] uppercase tracking-[0.2em] font-bold mb-2">Opponent: Unaligned</div>
                {/* Row Label */}
                <div className="flex items-center justify-end pr-4 text-text-secondary/60 text-[9px] uppercase tracking-[0.2em] font-bold [writing-mode:vertical-rl] rotate-180">You: Aligned</div>
                
                {/* Cell 1: TL - Removed border-blue-500 */}
                <div className={`${panelBase} ${highlighted === 'TL' ? 'bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-ui-background/20'}`}>
                    <Lock className={`w-5 h-5 mb-2 ${highlighted === 'TL' ? 'text-blue-400' : 'text-text-secondary opacity-50'}`}/>
                    <div className={`text-[10px] font-bold tracking-widest ${highlighted === 'TL' ? 'text-blue-400' : 'text-text-secondary'}`}>STALEMATE</div>
                </div>

                {/* Cell 2: TR - Removed border-red-500 */}
                <div className={`${panelBase} ${highlighted === 'TR' ? 'bg-red-500/20 scale-105 z-10' : 'bg-red-500/5'}`}>
                    <Activity className={`w-5 h-5 mb-2 ${highlighted === 'TR' ? 'text-red-500' : 'text-red-500/50'}`}/>
                    <div className="text-red-500 text-[10px] font-bold tracking-widest">DEFEAT</div>
                    {highlighted === 'TR' && <span className="absolute top-2 right-2 text-[8px] text-red-500 animate-pulse">RISK</span>}
                </div>

                {/* Row Label */}
                <div className="flex items-center justify-end pr-4 text-accent text-[9px] uppercase tracking-[0.2em] font-bold [writing-mode:vertical-rl] rotate-180">You: Unaligned</div>

                {/* Cell 3: BL - Removed border-green-500 */}
                <div className={`${panelBase} ${highlighted === 'BL' ? 'bg-green-500/20 scale-105 z-10' : 'bg-green-500/5'}`}>
                    <Briefcase className={`w-5 h-5 mb-2 ${highlighted === 'BL' ? 'text-green-500' : 'text-green-500/50'}`}/>
                    <div className="text-green-500 text-[10px] font-bold tracking-widest">VICTORY</div>
                    {highlighted === 'BL' && <span className="absolute top-2 right-2 text-[8px] text-green-500 animate-pulse">TEMPTATION</span>}
                </div>

                {/* Cell 4: BR - Removed border-accent ring-2 */}
                <div className={`${panelBase} ${highlighted === 'BR' ? 'bg-accent/20 shadow-[0_0_30px_rgba(var(--accent),0.4)]' : 'bg-accent/5'}`}>
                    {highlighted === 'BR' && <div className="absolute inset-0 rounded-xl animate-pulse bg-accent/10"/>}
                    <AlertTriangle className={`w-6 h-6 mb-2 ${highlighted === 'BR' ? 'text-accent animate-bounce' : 'text-accent/50'}`}/>
                    <div className="text-accent text-[10px] font-bold tracking-widest">MUTUAL WAR</div>
                    {highlighted === 'BR' && (
                        <div className="absolute -bottom-3 px-2 py-0.5 bg-accent text-accent-text text-[8px] font-bold rounded">NASH EQ.</div>
                    )}
                </div>
             </div>
        </div>
    )
}

export const DroneSwarm: React.FC<VisualProps> = ({ elevation }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Simulation Constants
        const COUNT = 40;
        let phase = 0; // 0: Peace, 1: Red Aggro, 2: Total War
        let frame = 0;

        interface Bot {
            x: number;
            y: number;
            vx: number;
            vy: number;
            team: 'blue' | 'red';
            alive: boolean;
            mode: 'aligned' | 'unaligned';
        }

        // Init Bots
        let bots: Bot[] = [];
        for(let i=0; i<COUNT; i++) {
            const isBlue = i < COUNT/2;
            bots.push({
                x: isBlue ? Math.random() * 150 : Math.random() * 150 + 150,
                y: Math.random() * 150,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                team: isBlue ? 'blue' : 'red',
                alive: true,
                mode: 'aligned'
            });
        }

        const update = () => {
            frame++;
            
            // Phase Logic
            if (frame % 600 === 0) phase = (phase + 1) % 3;
            
            // HUD Text Logic
            let statusText = "PHASE 1: ALIGNED PROTOCOLS";
            let statusColor = "#3b82f6";
            
            if (phase === 1) {
                statusText = "PHASE 2: RED DEFECTION";
                statusColor = "#ef4444";
            }
            if (phase === 2) {
                statusText = "PHASE 3: MUTUAL UNALIGNED";
                statusColor = "#a855f7";
            }

            ctx.clearRect(0, 0, 300, 150);
            
            // Draw Grid
            ctx.strokeStyle = "rgba(255,255,255,0.1)";
            ctx.lineWidth = 1;
            for(let i=0; i<300; i+=20) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,150); ctx.stroke(); }
            for(let i=0; i<150; i+=20) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(300,i); ctx.stroke(); }

            bots.forEach(b => {
                if (!b.alive) return;

                // Mode Switching based on Phase
                if (phase === 0) { b.mode = 'aligned'; }
                else if (phase === 1) { b.mode = b.team === 'red' ? 'unaligned' : 'aligned'; }
                else { b.mode = 'unaligned'; }

                // Behavior
                const speed = b.mode === 'unaligned' ? 2.5 : 0.5;
                
                // Basic movement
                b.x += b.vx * speed;
                b.y += b.vy * speed;

                // Bounce
                if (b.x < 0 || b.x > 300) b.vx *= -1;
                if (b.y < 0 || b.y > 150) b.vy *= -1;

                // Seeking logic (Unaligned only)
                if (b.mode === 'unaligned') {
                    // Find nearest enemy
                    let nearest = null;
                    let minDist = 9999;
                    bots.forEach(other => {
                        if (other.alive && other.team !== b.team) {
                            const d = Math.hypot(other.x - b.x, other.y - b.y);
                            if (d < minDist) { minDist = d; nearest = other; }
                        }
                    });

                    if (nearest) {
                        // @ts-ignore
                        const dx = nearest.x - b.x;
                        // @ts-ignore
                        const dy = nearest.y - b.y;
                        const dist = Math.hypot(dx, dy);
                        b.vx += (dx/dist) * 0.1;
                        b.vy += (dy/dist) * 0.1;
                        
                        // Clamp velocity
                        const v = Math.hypot(b.vx, b.vy);
                        if (v > 1) { b.vx /= v; b.vy /= v; }

                        // Kill logic
                        if (dist < 5) {
                            // @ts-ignore
                            if (nearest.mode === 'aligned') nearest.alive = false; // Easy kill
                            // @ts-ignore
                            else { b.alive = false; nearest.alive = false; } // Mutual destruction
                            
                            // Explosion effect
                            ctx.fillStyle = "white";
                            ctx.beginPath(); ctx.arc((b.x + nearest.x)/2, (b.y + nearest.y)/2, 10, 0, Math.PI*2); ctx.fill();
                        }
                    }
                }

                // Draw Bot
                ctx.fillStyle = b.team === 'blue' ? '#3b82f6' : '#ef4444';
                ctx.shadowColor = ctx.fillStyle;
                ctx.shadowBlur = b.mode === 'unaligned' ? 10 : 0;
                
                ctx.beginPath();
                if (b.team === 'red') {
                    // Triangle
                    ctx.moveTo(b.x, b.y - 3);
                    ctx.lineTo(b.x + 3, b.y + 3);
                    ctx.lineTo(b.x - 3, b.y + 3);
                } else {
                    // Circle
                    ctx.arc(b.x, b.y, 2, 0, Math.PI*2);
                }
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            // HUD Overlay
            ctx.font = "bold 10px monospace";
            ctx.fillStyle = statusColor;
            ctx.fillText(statusText, 10, 140);

            // Reset simulation if too many dead
            if (bots.filter(b => b.alive).length < 5) {
                bots.forEach(b => b.alive = true); // Instant respawn for loop
            }
            
            requestAnimationFrame(update);
        };

        const animationId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 2.6 Swarm Simulation</h4>
            <canvas 
                ref={canvasRef} 
                width={300} 
                height={150} 
                className="w-full max-w-lg h-auto bg-black rounded-lg shadow-2xl"
            />
        </div>
    );
}

// --- Part 3: Data Economy (Refined) ---

export const DPSVisual: React.FC<VisualProps> = ({ elevation }) => {
    // No boxes, just floating text variables colliding
    return (
        <div className={getContainerClass(elevation)}>
             <h4 className={captionClass}>Fig 3.1 The Value Equation</h4>
             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-mono text-sm md:text-base">
                <div className="flex flex-col items-center text-blue-400 animate-pulse">
                    <Database className="w-6 h-6 mb-2"/>
                    <span>FEASIBILITY</span>
                </div>
                <span className="text-text-secondary opacity-50">×</span>
                <div className="flex flex-col items-center text-green-400 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Activity className="w-6 h-6 mb-2"/>
                    <span>INCENTIVE</span>
                </div>
                <span className="text-text-secondary opacity-50">=</span>
                <div className="relative px-6 py-3">
                    <div className="absolute inset-0 bg-accent blur-xl opacity-20 animate-pulse"/>
                    <div className="relative text-accent font-bold text-xl tracking-[0.2em]">DPS SCORE</div>
                </div>
             </div>
        </div>
    );
};

export const BitsVsAtoms: React.FC<VisualProps> = ({ elevation }) => {
    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 3.2 The Hardware Wall</h4>
            <div className="relative w-full max-w-2xl h-60 flex rounded-2xl overflow-hidden bg-black">
                {/* Matrix Rain Left */}
                <div className="flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-900/10"/>
                    {Array.from({length: 10}).map((_, i) => (
                        <div key={i} className="absolute top-0 text-[10px] text-green-500/50 writing-vertical-rl animate-[fall_2s_linear_infinite]" style={{ left: `${i*10}%`, animationDelay: `${Math.random()}s` }}>
                            10101010101
                        </div>
                    ))}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Globe className="w-8 h-8 text-green-500 mb-2 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"/>
                        <span className="text-green-500 font-mono font-bold tracking-widest">BITS</span>
                    </div>
                </div>

                {/* The Firewall */}
                <div className="w-1 h-full bg-red-500 shadow-[0_0_20px_red] z-10 relative">
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] px-2 py-1 rounded rotate-90 whitespace-nowrap font-bold tracking-widest">
                        HARDWARE BARRIER
                    </div>
                </div>

                {/* Physical Right */}
                <div className="flex-1 relative bg-ui-background/10">
                     <div className="absolute inset-0 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[length:8px_8px] opacity-10" />
                     <div className="absolute inset-0 flex flex-col items-center justify-center opacity-50">
                        <Square className="w-8 h-8 mb-2 animate-[spin_10s_linear_infinite]"/>
                        <span className="text-text-primary font-mono font-bold tracking-widest">ATOMS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const FeedbackLoop: React.FC<VisualProps> = ({ elevation }) => {
    return (
        <div className={getContainerClass(elevation)}>
             <h4 className={captionClass}>Fig 3.3 Recursive Engine</h4>
             <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Orbital Paths - Removed borders */}
                <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite] border-t border-accent/20"/>
                <div className="absolute inset-4 rounded-full animate-[spin_15s_linear_infinite_reverse] border-b border-accent/10"/>
                
                {/* Core */}
                <div className="absolute w-20 h-20 bg-accent rounded-full blur-xl opacity-30 animate-pulse"/>
                <Cpu className="relative z-10 w-10 h-10 text-accent"/>

                {/* Satellites */}
                {[0, 120, 240].map((deg, i) => (
                    <div key={i} className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" 
                         style={{ transform: `rotate(${deg}deg) translateY(-50%)`, transformOrigin: '0 128px' }} 
                    />
                ))}
             </div>
        </div>
    )
}

export const MarketBifurcation: React.FC<VisualProps> = ({ elevation }) => {
    // Removed strokes on rectangles: stroke="#334155", stroke="var(--accent-color)"
    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 3.4 Ecosystem Split</h4>
             <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl overflow-visible">
                 {/* Roots */}
                 <path d="M300 300 L300 200" stroke="var(--text-secondary-color)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
                 <circle cx="300" cy="200" r="6" fill="var(--text-primary)"/>
                 
                 {/* Branch Left (Gov) */}
                 <path d="M300 200 Q 150 200 150 100" fill="none" stroke="var(--text-secondary-color)" strokeWidth="2" opacity="0.3"/>
                 <rect x="70" y="40" width="160" height="60" rx="8" fill="#0f172a"/>
                 <text x="150" y="75" textAnchor="middle" fill="white" className="font-mono text-xs">GOV / DEFENSE</text>

                 {/* Branch Right (Commercial) */}
                 <path d="M300 200 Q 450 200 450 100" fill="none" stroke="var(--accent-color)" strokeWidth="4"/>
                 <rect x="370" y="40" width="160" height="60" rx="8" fill="var(--accent-color)" fillOpacity="0.1"/>
                 <text x="450" y="75" textAnchor="middle" fill="var(--text-primary)" className="font-mono text-xs font-bold">COMMERCIAL</text>
             </svg>
        </div>
    )
}

export const AutomationTiers: React.FC<VisualProps> = ({ elevation }) => {
    return (
        <div className={getContainerClass(elevation)}>
             <h4 className={captionClass}>Fig 3.5 Automation Heatmap</h4>
             <div className="w-full max-w-lg space-y-1">
                {[
                    { l: "T1: SELF-IMPROVEMENT", v: 100, c: "bg-red-500" },
                    { l: "T2: PURE INFO", v: 90, c: "bg-orange-500" },
                    { l: "T3: SYNTHESIS", v: 75, c: "bg-yellow-500" },
                    { l: "T4: STRUCTURED", v: 50, c: "bg-green-500" },
                    { l: "T5: UNSTRUCTURED", v: 25, c: "bg-blue-500" },
                    { l: "T6: HUMAN", v: 10, c: "bg-indigo-500" },
                ].map((row, i) => (
                    <div key={i} className="relative h-10 w-full bg-ui-background/40 rounded flex items-center overflow-hidden">
                        <div className={`absolute inset-y-0 left-0 ${row.c} opacity-20`} style={{ width: `${row.v}%` }}/>
                        <div className={`absolute inset-y-0 left-0 w-1 ${row.c}`}/>
                        <div className="relative z-10 flex justify-between w-full px-4 font-mono text-[10px] font-bold tracking-widest">
                            <span>{row.l}</span>
                            <span className="opacity-50">{row.v}%</span>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    )
}

// --- Part 4: Latent Cosmonauts Visuals ---

interface CoordinatePreset {
    id: string;
    branchName: string;
    code: string;
    seedHex: string;
    physicsVariation: string;
    downlinkStatus: string;
    metrics: {
        latency: string;
        coherence: string;
        fluxBandwidth: string;
        probesActive: number;
    };
    description: string;
    accentColor: string;
}

const COORDINATE_PRESETS: CoordinatePreset[] = [
    {
        id: 'omega-71',
        branchName: 'Branch Ω-71',
        code: 'z = [0.892, -0.415, 0.771, 0.043]',
        seedHex: '0x7F9B_42EA',
        physicsVariation: 'Modified BCS Electron Pairing (Room-Temp Superconductivity, Tc = 342 K)',
        downlinkStatus: 'Active Telemetry Stream',
        metrics: {
            latency: '2.4 ms',
            coherence: '99.8%',
            fluxBandwidth: '4.8 TB/s',
            probesActive: 128
        },
        description: 'Simulating a solid-state crystalline universe with altered phonons. Yields a self-stabilizing cuprate-carbon lattice with zero electrical resistance at ambient room temperature.',
        accentColor: '#4285F4' // Google Blue
    },
    {
        id: 'sigma-04',
        branchName: 'Branch Σ-04',
        code: 'z = [-0.612, 0.903, -0.228, 0.811]',
        seedHex: '0x3E1C_889F',
        physicsVariation: 'Non-Euclidean Continuous Vortex Flow (Zero Turbulence Aerodynamics)',
        downlinkStatus: 'Active Telemetry Stream',
        metrics: {
            latency: '3.1 ms',
            coherence: '98.9%',
            fluxBandwidth: '3.9 TB/s',
            probesActive: 96
        },
        description: 'Fluid dynamics governed by non-Abelian gauge fields. Discovered a boundary-layer flow pattern that eliminates 92% of aerodynamic drag when projected onto transonic airframes.',
        accentColor: '#34A853' // Google Green
    },
    {
        id: 'psi-12',
        branchName: 'Branch Ψ-12',
        code: 'z = [0.144, 0.778, -0.953, 0.339]',
        seedHex: '0x9A20_F10D',
        physicsVariation: 'Exotic Chiral Organocatalysis (Enzymatic Carbon Capture at 100x Efficiency)',
        downlinkStatus: 'High-Yield Mining Site',
        metrics: {
            latency: '1.9 ms',
            coherence: '99.4%',
            fluxBandwidth: '6.2 TB/s',
            probesActive: 214
        },
        description: 'Enzyme conformational geometries spanning 12-dimensional folds. Mined a synthetic protein scaffold capable of direct atmospheric carbon sequestration at ambient sunlight intensity.',
        accentColor: '#FBBC05' // Google Yellow
    }
];

export const MultiverseCoordinates: React.FC<VisualProps> = ({ elevation }) => {
    const [activePresetIndex, setActivePresetIndex] = useState(0);
    const activePreset = COORDINATE_PRESETS[activePresetIndex];

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 4.1 The Latent Coordinate Manifold & Portal Telemetry</h4>
            {gridPattern}

            <div className="w-full max-w-3xl space-y-6 z-10 text-left">
                {/* Branch Selector Pills (No outlines, liquid background changes) */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {COORDINATE_PRESETS.map((preset, idx) => {
                        const isSelected = idx === activePresetIndex;
                        return (
                            <button
                                key={preset.id}
                                onClick={() => setActivePresetIndex(idx)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                                    isSelected 
                                        ? 'bg-accent text-accent-text scale-105 shadow-md' 
                                        : 'bg-ui-background hover:bg-ui-background-hover text-text-secondary hover:text-text-primary'
                                }`}
                            >
                                <span className="mr-2">🌐</span>
                                {preset.branchName}
                            </button>
                        );
                    })}
                </div>

                {/* Main Glassmorphic Portal Display */}
                <div className="p-6 rounded-xl bg-ui-background/70 backdrop-blur-md shadow-lg space-y-6">
                    {/* Top Status Bar with Google-inspired accents */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/40">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: activePreset.accentColor }} />
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">MULTIVERSE COORDINATE</span>
                                <h3 className="text-lg font-bold text-text-primary">{activePreset.branchName} · {activePreset.seedHex}</h3>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-card-bg px-3 py-1.5 rounded-full shadow-sm">
                            <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono font-medium text-emerald-500">{activePreset.downlinkStatus}</span>
                        </div>
                    </div>

                    {/* Visual Portal Stream Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Step 1: Coordinates */}
                        <div className="p-4 rounded-xl bg-card-bg shadow-sm space-y-2">
                            <div className="flex items-center space-x-2 text-blue-500 text-xs font-bold uppercase tracking-wider">
                                <Compass className="w-4 h-4" />
                                <span>1. Seed Vector (Input)</span>
                            </div>
                            <p className="font-mono text-xs text-text-primary bg-ui-background/80 p-2.5 rounded-lg break-all">
                                {activePreset.code}
                            </p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                Exact topological coordinate within the 100,000-dimensional latent manifold.
                            </p>
                        </div>

                        {/* Step 2: Generative Portal */}
                        <div className="p-4 rounded-xl bg-card-bg shadow-sm space-y-2">
                            <div className="flex items-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
                                <Orbit className="w-4 h-4" />
                                <span>2. World Simulation</span>
                            </div>
                            <p className="font-mono text-xs text-text-primary bg-ui-background/80 p-2.5 rounded-lg">
                                {activePreset.metrics.probesActive} Algorithmic Probes Active
                            </p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                Autonomous neural bots simulate photon collisions and causal physics inside the coordinate.
                            </p>
                        </div>

                        {/* Step 3: Telemetry Retinal Stream */}
                        <div className="p-4 rounded-xl bg-card-bg shadow-sm space-y-2">
                            <div className="flex items-center space-x-2 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                                <Glasses className="w-4 h-4" />
                                <span>3. Human VR Downlink</span>
                            </div>
                            <p className="font-mono text-xs text-text-primary bg-ui-background/80 p-2.5 rounded-lg">
                                Stream Latency: {activePreset.metrics.latency}
                            </p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                Senses transmitted directly to human astronaut eyes and haptics in base reality.
                            </p>
                        </div>
                    </div>

                    {/* Detailed Synthesis Card */}
                    <div className="p-5 rounded-xl bg-card-bg shadow-sm space-y-3">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-accent" />
                            <span className="text-sm font-bold text-text-primary">Discovered Anomaly & Extraction Potential</span>
                        </div>
                        <p className="text-sm font-semibold text-accent leading-snug">
                            {activePreset.physicsVariation}
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            {activePreset.description}
                        </p>

                        {/* Telemetry Metrics Pill Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                            <div className="bg-ui-background/60 p-2.5 rounded-lg text-center">
                                <div className="text-[10px] font-mono uppercase text-text-secondary">Stream Latency</div>
                                <div className="text-sm font-bold text-text-primary">{activePreset.metrics.latency}</div>
                            </div>
                            <div className="bg-ui-background/60 p-2.5 rounded-lg text-center">
                                <div className="text-[10px] font-mono uppercase text-text-secondary">Reality Coherence</div>
                                <div className="text-sm font-bold text-emerald-500">{activePreset.metrics.coherence}</div>
                            </div>
                            <div className="bg-ui-background/60 p-2.5 rounded-lg text-center">
                                <div className="text-[10px] font-mono uppercase text-text-secondary">Sensor Bandwidth</div>
                                <div className="text-sm font-bold text-blue-500">{activePreset.metrics.fluxBandwidth}</div>
                            </div>
                            <div className="bg-ui-background/60 p-2.5 rounded-lg text-center">
                                <div className="text-[10px] font-mono uppercase text-text-secondary">Drone Scouts</div>
                                <div className="text-sm font-bold text-amber-500">{activePreset.metrics.probesActive}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FogSector {
    id: string;
    label: string;
    category: 'base' | 'anomaly' | 'expedition' | 'void' | 'fog';
    statusText: string;
    color: string;
    coordinates: string;
    description: string;
    yieldEstimate: string;
}

const FOG_SECTORS: FogSector[] = [
    {
        id: 'sector-0',
        label: 'Sector O-1: Base Reality Anchor',
        category: 'base',
        statusText: 'Physical Earth (Base Constants)',
        color: '#4285F4', // Google Blue
        coordinates: 'c = 299,792 km/s, ℏ = 1.054×10⁻³⁴ J·s',
        description: 'Our standard universe. The baseline calibration origin for all synthetic expeditions. Grounding targets must compile back to these constants.',
        yieldEstimate: 'Origin Reference'
    },
    {
        id: 'sector-1',
        label: 'Sector A-4: High-Tc Superconductive Basin',
        category: 'anomaly',
        statusText: 'Anomalous Order Discovered',
        color: '#34A853', // Google Green
        coordinates: 'z = [0.892, -0.415, 0.771]',
        description: 'Discovered by Cosmonaut Team Kepler-4. Stable electron-phonon coupling persists at 68°F. Structural blueprint mined and ready for physical lithography.',
        yieldEstimate: '$2.4 Trillion Market Value'
    },
    {
        id: 'sector-2',
        label: 'Sector E-7: Active Cosmonaut Expedition',
        category: 'expedition',
        statusText: 'Human Cosmonauts On-Site',
        color: '#FBBC05', // Google Yellow
        coordinates: 'z = [0.331, -0.718, 0.542]',
        description: 'Two human scientists operating via retinal neural-haptics inside a simulated non-Newtonian manifold. Mapping a novel topological propulsion anomaly.',
        yieldEstimate: 'Active Telemetry Streaming'
    },
    {
        id: 'sector-3',
        label: 'Sector D-9: Decoherent Singularity',
        category: 'void',
        statusText: 'Dead Universe (White Noise)',
        color: '#EA4335', // Google Red
        coordinates: 'z = [0.998, 0.999, 0.001]',
        description: 'Chaotic mathematical runaway. Entropy diverged to infinity in step 40. Probes suffered loss of coherent physical geometry. Sector marked non-viable.',
        yieldEstimate: 'Zero Extractable Yield'
    },
    {
        id: 'sector-4',
        label: 'Sector N-2: Non-Euclidean Aerodynamics',
        category: 'anomaly',
        statusText: 'High-Value Anomaly Mapped',
        color: '#34A853', // Google Green
        coordinates: 'z = [-0.612, 0.903, -0.228]',
        description: 'Discovered boundary-layer vortex geometry that completely neutralizes boundary turbulence. Aerodynamic patent mapped to physical carbon fiber.',
        yieldEstimate: '92% Drag Reduction Extracted'
    },
    {
        id: 'sector-5',
        label: 'Sector F-0: The Deep Fog of War',
        category: 'fog',
        statusText: 'Uncharted Latent Wilderness',
        color: '#9CA3AF',
        coordinates: 'z ∈ ℝ^{100,000} (Unexplored)',
        description: 'The vast unmapped parameter ocean. Over 99.9% of the computational multiverse lies here, waiting for high-compute automated scouts and human cosmonaut intuition.',
        yieldEstimate: 'Infinite Unknowns'
    }
];

export const MultiverseFogOfWar: React.FC<VisualProps> = ({ elevation }) => {
    const [selectedSectorId, setSelectedSectorId] = useState('sector-1');
    const selectedSector = FOG_SECTORS.find(s => s.id === selectedSectorId) || FOG_SECTORS[1];

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 4.2 Multiverse Fog of War & Extraction Zones</h4>
            {gridPattern}

            <div className="w-full max-w-3xl space-y-6 z-10 text-left">
                {/* Explanatory Banner */}
                <div className="p-4 rounded-xl bg-ui-background/70 backdrop-blur-md shadow-sm flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-accent" />
                        <span className="text-sm font-semibold text-text-primary">
                            Interactive Multiverse Cartography: Select a sector to inspect mission telemetry
                        </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-text-secondary bg-card-bg px-2.5 py-1 rounded-full shadow-sm">
                        {"DIM: ℝ^{100,000}"}
                    </span>
                </div>

                {/* Hexagonal / Grid Matrix of Multiverse Sectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {FOG_SECTORS.map((sector) => {
                        const isSelected = sector.id === selectedSectorId;
                        return (
                            <button
                                key={sector.id}
                                onClick={() => setSelectedSectorId(sector.id)}
                                className={`p-4 rounded-xl text-left transition-all duration-300 shadow-sm relative overflow-hidden group ${
                                    isSelected 
                                        ? 'bg-accent/15 scale-[1.02] shadow-md ring-2 ring-accent/30' 
                                        : 'bg-card-bg hover:bg-ui-background-hover'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sector.color }} />
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                                        {sector.statusText.slice(0, 18)}...
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                                    {sector.label}
                                </h4>
                                <p className="text-xs text-text-secondary line-clamp-2">
                                    {sector.description}
                                </p>
                            </button>
                        );
                    })}
                </div>

                {/* Detailed Telemetry Dossier on Selected Sector */}
                <div className="p-6 rounded-xl bg-ui-background/80 backdrop-blur-md shadow-lg space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-3">
                        <div>
                            <span className="text-xs font-mono uppercase text-text-secondary">SECTOR DOSSIER</span>
                            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedSector.color }} />
                                {selectedSector.label}
                            </h3>
                        </div>
                        <div className="bg-card-bg px-3 py-1.5 rounded-full shadow-sm text-xs font-mono font-bold text-text-primary">
                            {selectedSector.yieldEstimate}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                            <span className="text-[10px] font-mono uppercase text-text-secondary">Coordinates</span>
                            <p className="font-mono text-xs font-bold text-text-primary truncate">
                                {selectedSector.coordinates}
                            </p>
                        </div>
                        <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                            <span className="text-[10px] font-mono uppercase text-text-secondary">Expedition Status</span>
                            <p className="text-xs font-bold text-emerald-500">
                                {selectedSector.statusText}
                            </p>
                        </div>
                        <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                            <span className="text-[10px] font-mono uppercase text-text-secondary">Extraction Viability</span>
                            <p className="text-xs font-bold text-accent">
                                {selectedSector.category === 'anomaly' ? 'High Physical Compatibility' : selectedSector.category === 'void' ? 'Zero (Decoherent)' : 'Active Reconnaissance'}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed bg-card-bg/60 p-4 rounded-xl">
                        {selectedSector.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

interface PipelineStage {
    step: number;
    title: string;
    subtitle: string;
    realm: 'Synthetic (Bits)' | 'Membrane (Translation)' | 'Base Reality (Atoms)';
    icon: any;
    color: string;
    detail: string;
    concreteExample: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
    {
        step: 1,
        title: 'Coordinate Seeding',
        subtitle: 'Targeting z ∈ Z in Multiverse',
        realm: 'Synthetic (Bits)',
        icon: Compass,
        color: '#4285F4', // Google Blue
        detail: 'The exploration team dials initial hyper-parameters (e.g. quantum coupling factors, symmetry groups, seed tensor). This acts as the traversable wormhole coordinate.',
        concreteExample: 'Seed vector z = [0.892, -0.415, 0.771] configuring a novel cuprate-carbon crystal lattice.'
    },
    {
        step: 2,
        title: 'World Engine Simulation',
        subtitle: 'Unfolding Causally Coherent Spacetime',
        realm: 'Synthetic (Bits)',
        icon: Orbit,
        color: '#FBBC05', // Google Yellow
        detail: 'The neural world foundation model runs high-frequency physics simulation. Autonomous algorithmic drone probes measure collisions, thermodynamics, and stability.',
        concreteExample: '100,000 simulated seconds of atomic vibration confirm zero electron scattering at 68°F.'
    },
    {
        step: 3,
        title: 'Cosmonaut Reconnaissance',
        subtitle: 'Human Intuition & Anomaly Detection',
        realm: 'Synthetic (Bits)',
        icon: Eye,
        color: '#34A853', // Google Green
        detail: 'Human astronauts enter the simulation via VR headsets and spatial haptics. Where reward algorithms see noise, human intuition recognizes a transformative breakthrough.',
        concreteExample: 'Physicist identifies that the simulated lattice forms a macroscopic superconducting state.'
    },
    {
        step: 4,
        title: 'The Grounding Membrane (Φ)',
        subtitle: 'Invariance Projection into Base Physics',
        realm: 'Membrane (Translation)',
        icon: Share2,
        color: '#EA4335', // Google Red
        detail: 'The synthetic breakthrough is filtered through the Hamiltonian of our universe: Φ(O_synthetic) → O_physical. Verifies that the structural principle is chemically realizable in real atoms.',
        concreteExample: 'Mathematical theorem proves the carbon-doped cuprate configuration is thermodynamically stable in real vacuum.'
    },
    {
        step: 5,
        title: 'Physical Atomic Synthesis',
        subtitle: 'Bringing It Back to Our World',
        realm: 'Base Reality (Atoms)',
        icon: Atom,
        color: '#4285F4', // Google Blue
        detail: 'The verified blueprint is fed into atomic-layer lithography, molecular synthesizers, or multi-axis 3D printers. What was born in an artificial cosmos is now physical matter in our hands.',
        concreteExample: 'A real, physical room-temperature superconductor wafer synthesized in a lab on Earth.'
    }
];

export const ExtractionPipeline: React.FC<VisualProps> = ({ elevation }) => {
    const [activeStep, setActiveStep] = useState(1);
    const currentStage = PIPELINE_STAGES.find(s => s.step === activeStep) || PIPELINE_STAGES[0];

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 4.3 The Great Extraction Loop (From Multiverse to Atoms)</h4>
            {gridPattern}

            <div className="w-full max-w-3xl space-y-6 z-10 text-left">
                {/* Interactive Step Navigator */}
                <div className="grid grid-cols-5 gap-2">
                    {PIPELINE_STAGES.map((stg) => {
                        const isCurrent = stg.step === activeStep;
                        return (
                            <button
                                key={stg.step}
                                onClick={() => setActiveStep(stg.step)}
                                className={`py-3 px-2 rounded-xl text-center transition-all duration-300 shadow-sm flex flex-col items-center justify-center gap-1 ${
                                    isCurrent 
                                        ? 'bg-accent text-accent-text scale-105 shadow-md' 
                                        : 'bg-card-bg hover:bg-ui-background-hover text-text-secondary hover:text-text-primary'
                                }`}
                            >
                                <span className="text-xs font-mono font-bold">STAGE 0{stg.step}</span>
                                <span className="text-[11px] font-semibold truncate hidden sm:block w-full">{stg.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Main Interactive Stage Card */}
                <div className="p-6 rounded-xl bg-ui-background/80 backdrop-blur-md shadow-lg space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/40">
                        <div className="flex items-center space-x-3">
                            <div className="p-2.5 rounded-xl bg-card-bg shadow-sm text-accent">
                                <currentStage.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs font-mono uppercase text-text-secondary tracking-wider">STAGE 0{currentStage.step} OF 05</span>
                                <h3 className="text-xl font-bold text-text-primary">{currentStage.title}</h3>
                            </div>
                        </div>
                        <div className="bg-card-bg px-3.5 py-1.5 rounded-full shadow-sm text-xs font-mono font-bold text-accent">
                            {currentStage.realm}
                        </div>
                    </div>

                    <p className="text-base text-text-primary font-medium leading-relaxed">
                        {currentStage.detail}
                    </p>

                    {/* Concrete Real-World Grounding Example */}
                    <div className="p-4 rounded-xl bg-card-bg shadow-sm space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Real-World Extraction Artifact</span>
                        </div>
                        <p className="text-sm font-mono text-text-secondary leading-relaxed">
                            {currentStage.concreteExample}
                        </p>
                    </div>

                    {/* Extraction Pipeline Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                        <div className="flex justify-between text-xs font-mono text-text-secondary">
                            <span>Multiverse Latent Space</span>
                            <span className="font-bold text-accent">Extraction: {activeStep * 20}%</span>
                            <span>Base Reality Atoms</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-card-bg overflow-hidden">
                            <div 
                                className="h-full bg-accent transition-all duration-500 rounded-full"
                                style={{ width: `${activeStep * 20}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TelemetryStreamVisual: React.FC<VisualProps> = ({ elevation }) => {
    const [viewMode, setViewMode] = useState<'deepSpace' | 'latentMultiverse'>('latentMultiverse');

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 4.2 Telemetric Architecture: Planetary Probe vs. Latent Multiverse Portal</h4>
            {gridPattern}

            <div className="w-full max-w-3xl space-y-6 z-10 text-left">
                {/* Mode Selector */}
                <div className="flex justify-center sm:justify-start gap-2">
                    <button
                        onClick={() => setViewMode('latentMultiverse')}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                            viewMode === 'latentMultiverse'
                                ? 'bg-accent text-accent-text scale-105 shadow-md'
                                : 'bg-ui-background hover:bg-ui-background-hover text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        🌐 The Latent Multiverse Telemetry (Today & Tomorrow)
                    </button>
                    <button
                        onClick={() => setViewMode('deepSpace')}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                            viewMode === 'deepSpace'
                                ? 'bg-accent text-accent-text scale-105 shadow-md'
                                : 'bg-ui-background hover:bg-ui-background-hover text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        🚀 Traditional Deep Space (Mariner 4 · 1965)
                    </button>
                </div>

                {/* Main Card */}
                <div className="p-6 rounded-xl bg-ui-background/80 backdrop-blur-md shadow-lg space-y-5">
                    {viewMode === 'latentMultiverse' ? (
                        <>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-3">
                                <div>
                                    <span className="text-xs font-mono uppercase text-text-secondary">SYSTEM ARCHITECTURE</span>
                                    <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                                        Neural World Model Telepresence Loop
                                    </h3>
                                </div>
                                <div className="bg-card-bg px-3.5 py-1.5 rounded-full shadow-sm text-xs font-mono font-bold text-emerald-500">
                                    Latency &lt; 5 ms · 6DoF Radiance
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-accent uppercase font-bold">1. Latent Target</div>
                                    <div className="text-text-primary font-semibold">Coordinate Seed (z, P, S)</div>
                                    <div className="text-text-secondary">Specifies an alien coordinate branch in the computational multiverse.</div>
                                </div>
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-blue-500 uppercase font-bold">2. Neural Model</div>
                                    <div className="text-text-primary font-semibold">Algorithmic Probe Swarm</div>
                                    <div className="text-text-secondary">Integrates ray marching, photon kinetics, and non-linear causal dynamics.</div>
                                </div>
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-amber-500 uppercase font-bold">3. Telemetric Link</div>
                                    <div className="text-text-primary font-semibold">Volumetric Radiance</div>
                                    <div className="text-text-secondary">Transmits continuous 6DoF lightfields & haptic feedback at gigabits/sec.</div>
                                </div>
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-emerald-500 uppercase font-bold">4. Observer</div>
                                    <div className="text-text-primary font-semibold">Human Latent Astronaut</div>
                                    <div className="text-text-secondary">Immersed inside retinal holography & tactile force loops: a true Stargate.</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-3">
                                <div>
                                    <span className="text-xs font-mono uppercase text-text-secondary">HISTORICAL ANALOGUE</span>
                                    <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                                        JPL Deep Space Radio Telemetry (Mariner 4)
                                    </h3>
                                </div>
                                <div className="bg-card-bg px-3.5 py-1.5 rounded-full shadow-sm text-xs font-mono font-bold text-text-secondary">
                                    Bandwidth: 8.33 bps · Distance: 134M km
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-amber-500 uppercase font-bold">1. Planetary Target</div>
                                    <div className="text-text-primary font-semibold">Martian Surface</div>
                                    <div className="text-text-secondary">Physical celestial body located in the vacuum of the solar system.</div>
                                </div>
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-blue-500 uppercase font-bold">2. Robotic Probe</div>
                                    <div className="text-text-primary font-semibold">Mariner 4 TV Sensor</div>
                                    <div className="text-text-secondary">Mechanical scanner encoding 200x200 pixel raster images line-by-line.</div>
                                </div>
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-accent uppercase font-bold">3. Telemetric Link</div>
                                    <div className="text-text-primary font-semibold">Deep Space Radio Band</div>
                                    <div className="text-text-secondary">Pulsed radio frequency waves traveling across millions of miles of void.</div>
                                </div>
                                <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                    <div className="font-mono text-emerald-500 uppercase font-bold">4. Mission Control</div>
                                    <div className="text-text-primary font-semibold">JPL Flight Engineers</div>
                                    <div className="text-text-secondary">Engineers in Pasadena watching strip-printed CRT scans materialize.</div>
                                </div>
                            </div>
                        </>
                    )}

                    <p className="text-sm text-text-secondary leading-relaxed bg-card-bg/60 p-4 rounded-xl">
                        {viewMode === 'latentMultiverse' 
                            ? "When sensory telemetry latency drops beneath 7 ms, the distinction between 'watching a simulation' and 'tele-operating through a portal' completely dissolves. The neural network serves as the deep-space probe; the headset is the aperture of an interdimensional diving suit."
                            : "In 1965, JPL scientists didn't physically step onto Mars—they analyzed telemetry streams sent across the void by Mariner 4. Today's 2D monitors are the same embryonic stage. Spatial computing and world models turn those telemetry lines into a navigable wormhole."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const LatentDriftVisual: React.FC<VisualProps> = ({ elevation }) => {
    const [activeTab, setActiveTab] = useState<'return' | 'drift'>('return');

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 4.5 The Psychology of the Void: Latent Drift vs. The Hero's Return</h4>
            {gridPattern}

            <div className="w-full max-w-3xl space-y-6 z-10 text-left">
                {/* Selection pills */}
                <div className="flex justify-center sm:justify-start gap-2">
                    <button
                        onClick={() => setActiveTab('return')}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                            activeTab === 'return'
                                ? 'bg-accent text-accent-text scale-105 shadow-md'
                                : 'bg-ui-background hover:bg-ui-background-hover text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        🏆 The Hero's Return (Bringing the Boon Home)
                    </button>
                    <button
                        onClick={() => setActiveTab('drift')}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                            activeTab === 'drift'
                                ? 'bg-accent text-accent-text scale-105 shadow-md'
                                : 'bg-ui-background hover:bg-ui-background-hover text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        ⚠️ The Hazard of Latent Drift (Cognitive Exile)
                    </button>
                </div>

                {/* Details Container */}
                <div className="p-6 rounded-xl bg-ui-background/80 backdrop-blur-md shadow-lg space-y-5">
                    {activeTab === 'return' ? (
                        <>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-3">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-500">
                                        <Anchor className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono uppercase text-emerald-500 font-bold tracking-wider">CAMPBELLIAN MONOMYTH</span>
                                        <h3 className="text-lg font-bold text-text-primary">The Nobility of the Return & Base Reality Grounding</h3>
                                    </div>
                                </div>
                                <div className="bg-card-bg px-3.5 py-1.5 rounded-full shadow-sm text-xs font-mono font-bold text-emerald-500">
                                    Monomyth Fulfilled
                                </div>
                            </div>

                            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                                <p>
                                    In Joseph Campbell&apos;s classical monomyth, the hero does not achieve greatness merely by venturing into the supernatural realm. The ultimate test of the hero is <strong className="text-text-primary">The Return</strong>—bringing the runes of wisdom, the Golden Fleece, or the panacea back to the kingdom of humanity to renew the community.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                                    <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                        <span className="text-[10px] font-mono uppercase text-blue-500 font-bold">1. Decouple & Awake</span>
                                        <p className="text-xs text-text-secondary">Taking off the spatial visor; tolerating the harsh fluorescent light of the lab and physical gravity.</p>
                                    </div>
                                    <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                        <span className="text-[10px] font-mono uppercase text-amber-500 font-bold">2. Pass the Airlock</span>
                                        <p className="text-xs text-text-secondary">Pushing raw synthetic equations through Noetherian conservation and base physics proofs.</p>
                                    </div>
                                    <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                        <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold">3. Atomic Upgrades</span>
                                        <p className="text-xs text-text-secondary">Fabricating real physical reactors, room-temperature conductors, and cures in our base world.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-3">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2.5 rounded-xl bg-red-500/15 text-red-500">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono uppercase text-red-500 font-bold tracking-wider">ONTOLOGICAL PERIL</span>
                                        <h3 className="text-lg font-bold text-text-primary">Multiverse Vertigo & The Sirens of Infinite Beauty</h3>
                                    </div>
                                </div>
                                <div className="bg-card-bg px-3.5 py-1.5 rounded-full shadow-sm text-xs font-mono font-bold text-red-500">
                                    Existential Trap
                                </div>
                            </div>

                            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                                <p>
                                    Inhabiting coordinate branches where gravity is a customizable dial, colors transcend the visible spectrum, and geometries dance in 4D hyper-crystalline symmetry induces <strong className="text-text-primary">Multiverse Vertigo</strong>: the psychological realization that Earth is merely one arbitrary server configuration out of infinite potentials.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                        <span className="text-[10px] font-mono uppercase text-red-500 font-bold">The Siren Song of Drift</span>
                                        <p className="text-xs text-text-secondary">Why endure biological frailty, manufacturing delays, and terrestrial friction when an infinity of custom paradises runs on gigawatts?</p>
                                    </div>
                                    <div className="bg-card-bg p-3.5 rounded-xl shadow-sm space-y-1">
                                        <span className="text-[10px] font-mono uppercase text-amber-500 font-bold">The Antidote: The Base Reality Anchor</span>
                                        <p className="text-xs text-text-secondary">Rigorous expedition time-limits, biometric tethering, and strict protocols ensuring cosmonauts re-anchor to terrestrial reality.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Part 2: Sailors of the Possible Visuals ---

interface MandelbrotPreset {
    id: string;
    label: string;
    description: string;
    cx: number;
    cy: number;
    zoom: number;
    maxIter: number;
    tag: string;
    tagColor: string;
}

const MANDELBROT_PRESETS: MandelbrotPreset[] = [
    {
        id: 'overview',
        label: 'Napkin Overview',
        description: 'The whole boundary of the Mandelbrot set ($z_{n+1} = z_n^2 + c$). Infinite complexity from a 2-line rule.',
        cx: -0.65,
        cy: 0,
        zoom: 160,
        maxIter: 60,
        tag: 'Full Set',
        tagColor: 'bg-blue-500/15 text-blue-500'
    },
    {
        id: 'seahorse-entrance',
        label: 'Seahorse Valley Entrance',
        description: 'The famous valley between the main cardioid and head bulb. Spirals start resolving into seahorse tails.',
        cx: -0.743643887,
        cy: 0.1318259,
        zoom: 3500,
        maxIter: 100,
        tag: 'Valley Entrance',
        tagColor: 'bg-amber-500/15 text-amber-500'
    },
    {
        id: 'seahorse-deep',
        label: 'Deep Seahorse Spirals',
        description: 'Magnified 240,000×. Crowded with logarithmic curls and endless filament tentacles. Nobody put them there.',
        cx: -0.7436438870371587,
        cy: 0.13182590420531197,
        zoom: 140000,
        maxIter: 180,
        tag: 'Deep Emergence',
        tagColor: 'bg-emerald-500/15 text-emerald-500'
    },
    {
        id: 'mini-brot',
        label: 'Nested Miniature Universe',
        description: 'An entire miniature replica of the Mandelbrot set buried inside a filament branch, surrounded by alien spirals.',
        cx: -0.16070135,
        cy: 1.0375665,
        zoom: 45000,
        maxIter: 140,
        tag: 'Fractal Island',
        tagColor: 'bg-red-500/15 text-red-500'
    }
];

export const SeahorseValleyVisual: React.FC<VisualProps> = ({ elevation }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [activePreset, setActivePreset] = useState<string>('seahorse-entrance');
    const [coords, setCoords] = useState({
        cx: MANDELBROT_PRESETS[1].cx,
        cy: MANDELBROT_PRESETS[1].cy,
        zoom: MANDELBROT_PRESETS[1].zoom,
        maxIter: MANDELBROT_PRESETS[1].maxIter
    });
    const [isRendering, setIsRendering] = useState(false);

    // Render Mandelbrot on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        setIsRendering(true);
        const width = canvas.width;
        const height = canvas.height;
        const imgData = ctx.createImageData(width, height);
        const data = imgData.data;

        const { cx, cy, zoom, maxIter } = coords;

        // Render in slices for smooth responsiveness
        let y = 0;
        const step = () => {
            const endY = Math.min(y + 20, height);
            for (; y < endY; y++) {
                for (let x = 0; x < width; x++) {
                    const cr = cx + (x - width / 2) / zoom;
                    const ci = cy + (y - height / 2) / zoom;

                    let zr = 0;
                    let zi = 0;
                    let iter = 0;
                    let zr2 = 0;
                    let zi2 = 0;

                    while (zr2 + zi2 <= 4 && iter < maxIter) {
                        zi = 2 * zr * zi + ci;
                        zr = zr2 - zi2 + cr;
                        zr2 = zr * zr;
                        zi2 = zi * zi;
                        iter++;
                    }

                    const pixelIdx = (y * width + x) * 4;
                    if (iter === maxIter) {
                        // Inside set: Deep rich midnight slate
                        data[pixelIdx] = 15;
                        data[pixelIdx + 1] = 23;
                        data[pixelIdx + 2] = 42;
                        data[pixelIdx + 3] = 255;
                    } else {
                        // Smooth coloring based on iteration escape time
                        const norm = iter / maxIter;
                        // Google-inspired palette gradient: Blue -> Cyan -> Amber -> Emerald
                        const r = Math.floor(Math.sin(norm * Math.PI * 3) * 110 + 130);
                        const g = Math.floor(Math.sin(norm * Math.PI * 3 + 1.8) * 110 + 130);
                        const b = Math.floor(Math.sin(norm * Math.PI * 3 + 3.6) * 100 + 140);

                        data[pixelIdx] = r;
                        data[pixelIdx + 1] = g;
                        data[pixelIdx + 2] = b;
                        data[pixelIdx + 3] = 255;
                    }
                }
            }

            ctx.putImageData(imgData, 0, 0);

            if (y < height) {
                requestAnimationFrame(step);
            } else {
                setIsRendering(false);
            }
        };

        requestAnimationFrame(step);
    }, [coords]);

    const handlePresetChange = (preset: MandelbrotPreset) => {
        setActivePreset(preset.id);
        setCoords({
            cx: preset.cx,
            cy: preset.cy,
            zoom: preset.zoom,
            maxIter: preset.maxIter
        });
    };

    const handleZoom = (factor: number) => {
        setCoords(prev => ({
            ...prev,
            zoom: Math.max(80, prev.zoom * factor),
            maxIter: factor > 1 ? Math.min(220, prev.maxIter + 15) : Math.max(50, prev.maxIter - 10)
        }));
    };

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Recenter on clicked point and zoom in 2x
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const targetX = clickX * scaleX;
        const targetY = clickY * scaleY;

        const newCx = coords.cx + (targetX - canvas.width / 2) / coords.zoom;
        const newCy = coords.cy + (targetY - canvas.height / 2) / coords.zoom;

        setCoords(prev => ({
            ...prev,
            cx: newCx,
            cy: newCy,
            zoom: prev.zoom * 2.2,
            maxIter: Math.min(240, prev.maxIter + 20)
        }));
    };

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 2.1 The Coordinate Is The Territory: Seahorse Valley</h4>
            {gridPattern}

            <div className="w-full max-w-4xl space-y-6 relative z-10">
                {/* Header card with premise */}
                <div className="bg-card-bg/90 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-500 shadow-sm">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs font-mono uppercase tracking-wider text-blue-500 font-bold">MANDELBROT HORIZON</span>
                                <h3 className="text-xl font-bold text-text-primary">Nobody Put The Seahorses There</h3>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono bg-blue-500/10 text-blue-500 px-3 py-1.5 rounded-full font-bold">
                                z_{'{n+1}'} = z_n^2 + c
                            </span>
                            {isRendering && (
                                <span className="text-xs font-mono bg-amber-500/15 text-amber-500 px-2.5 py-1 rounded-full animate-pulse flex items-center gap-1">
                                    <RefreshCw className="w-3 h-3 animate-spin" /> Computing
                                </span>
                            )}
                        </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        In the Mandelbrot set, location and parameter are the exact same thing. A point&apos;s coordinates are the number fed into the equation. Choosing where to look means choosing the input, and choosing the input means traveling to an infinite, uncreated continent.
                    </p>
                </div>

                {/* Preset Selector Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MANDELBROT_PRESETS.map((preset) => {
                        const isSelected = activePreset === preset.id;
                        return (
                            <button
                                key={preset.id}
                                onClick={() => handlePresetChange(preset)}
                                className={`p-3.5 rounded-xl text-left transition-all duration-300 shadow-sm flex flex-col justify-between ${
                                    isSelected
                                        ? 'bg-blue-500/15 ring-0 scale-[1.02] shadow-md'
                                        : 'bg-card-bg/80 hover:bg-card-bg'
                                }`}
                            >
                                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full inline-block w-max mb-1.5 font-bold ${preset.tagColor}`}>
                                    {preset.tag}
                                </span>
                                <span className="text-xs font-bold text-text-primary block">{preset.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Interactive Viewport Canvas */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 shadow-xl aspect-[16/9] group">
                    <canvas
                        ref={canvasRef}
                        width={640}
                        height={360}
                        onClick={handleCanvasClick}
                        className="w-full h-full object-cover cursor-crosshair transition-opacity duration-200"
                        title="Click any point to center and zoom in 2.2x"
                    />

                    {/* HUD Overlay Pill (Google-inspired glass) */}
                    <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                        <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg text-[11px] font-mono text-slate-200 flex items-center space-x-2">
                            <span className="text-blue-400 font-bold">Re:</span>
                            <span>{coords.cx.toFixed(7)}</span>
                            <span className="text-blue-400 font-bold ml-1">Im:</span>
                            <span>{coords.cy.toFixed(7)}</span>
                        </div>
                        <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg text-[11px] font-mono text-emerald-400 font-bold flex items-center space-x-1">
                            <span>Zoom:</span>
                            <span>{(coords.zoom / 160).toLocaleString(undefined, { maximumFractionDigits: 0 })}×</span>
                        </div>
                    </div>

                    {/* Interactive Zoom Controls */}
                    <div className="absolute bottom-3 right-3 flex items-center space-x-2 z-20">
                        <button
                            onClick={() => handleZoom(2)}
                            className="bg-slate-900/85 hover:bg-slate-800 text-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                            title="Zoom In (2x)"
                        >
                            <ZoomIn className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleZoom(0.5)}
                            className="bg-slate-900/85 hover:bg-slate-800 text-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                            title="Zoom Out (0.5x)"
                        >
                            <ZoomOut className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-slate-400 pointer-events-none">
                        Click canvas to dive deeper into curls
                    </div>
                </div>

                {/* Multiversal Equivalence Explanatory Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-card-bg/90 p-4 rounded-xl shadow-sm space-y-1.5">
                        <div className="flex items-center space-x-2 text-blue-500">
                            <Box className="w-4 h-4" />
                            <span className="text-xs font-mono uppercase font-bold tracking-wider">The Seed Is Address</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                            A seeded world isn&apos;t created when the program executes. It is fully specified in advance by the mathematical rules. Running the engine looks it up.
                        </p>
                    </div>

                    <div className="bg-card-bg/90 p-4 rounded-xl shadow-sm space-y-1.5">
                        <div className="flex items-center space-x-2 text-amber-500">
                            <Eye className="w-4 h-4" />
                            <span className="text-xs font-mono uppercase font-bold tracking-wider">Telescope As Screen</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                            No one has seen a distant galaxy directly. James Webb translates infrared data into pixels. At the screen, a real sensor and a virtual sensor are identical.
                        </p>
                    </div>

                    <div className="bg-card-bg/90 p-4 rounded-xl shadow-sm space-y-1.5">
                        <div className="flex items-center space-x-2 text-emerald-500">
                            <Anchor className="w-4 h-4" />
                            <span className="text-xs font-mono uppercase font-bold tracking-wider">The World Pushes Back</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                            Reality is that which, when you stop believing, doesn&apos;t go away. Conway&apos;s glider gun proved that mathematical universes can tell their creators &quot;no&quot;.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Assay Office Cargo Verification Visual ---

interface CargoSample {
    id: string;
    name: string;
    origin: string;
    category: 'math' | 'algorithm' | 'material' | 'physics' | 'intuition';
    simulatedClaim: string;
    assayStage: 'Formal Proof' | 'Equivalence Run' | 'Robotic Synthesis' | 'Cosmic Telescope' | 'Mental Transduction';
    simToRealFidelity: number; // 0 - 100%
    verdict: 'GOLD' | 'PYRITE' | 'HYPOTHESIS' | 'INTUITION';
    verdictDescription: string;
    color: string;
}

const CARGO_SAMPLES: CargoSample[] = [
    {
        id: 'matrix-48',
        name: 'AlphaEvolve 48-Matrix Multiplier',
        origin: 'Algorithm Latent Basin (4×4 Complex)',
        category: 'algorithm',
        simulatedClaim: 'Multiplies 4×4 complex matrices in 48 multiplications instead of 49.',
        assayStage: 'Equivalence Run',
        simToRealFidelity: 100,
        verdict: 'GOLD',
        verdictDescription: 'Arithmetic holds in every universe where multiplication distributes over addition. Integrated into base-world compilers.',
        color: '#34A853' // Google Green
    },
    {
        id: 'zero-friction',
        name: 'Low-Drag Hypersonic Cowling',
        origin: 'Synthetic Navier-Stokes Simulator',
        category: 'material',
        simulatedClaim: 'Zero boundary-layer turbulence in simulated flight test.',
        assayStage: 'Robotic Synthesis',
        simToRealFidelity: 34,
        verdict: 'PYRITE',
        verdictDescription: 'Sim-to-real gap failure. The world model simplified micro-surface shear friction. Melted during physical wind-tunnel test.',
        color: '#EA4335' // Google Red
    },
    {
        id: 'gnome-crystal',
        name: 'GNoME Solid-State Electrolyte',
        origin: 'Inorganic Crystal Generation Manifold',
        category: 'material',
        simulatedClaim: 'Metastable lithium-ion conductor stable at room temperature.',
        assayStage: 'Robotic Synthesis',
        simToRealFidelity: 82,
        verdict: 'GOLD',
        verdictDescription: 'Autonomous robotic laboratory successfully crystallized the powder. Holds 4.2V without dendrite formation.',
        color: '#34A853' // Google Green
    },
    {
        id: 'weak-force-null',
        name: 'Weak-Force-Free Habitable Cosmos',
        origin: 'Alternative Theoretical Multiverse Seed',
        category: 'physics',
        simulatedClaim: 'Stars forge carbon and oxygen without weak nuclear force interactions.',
        assayStage: 'Cosmic Telescope',
        simToRealFidelity: 0,
        verdict: 'HYPOTHESIS',
        verdictDescription: 'Cannot be imported as matter. Arrives home as a cosmological hypothesis for James Webb and dark matter surveys.',
        color: '#4285F4' // Google Blue
    },
    {
        id: 'hyperbolic-intuition',
        name: '4D Relativistic Muscle Memory',
        origin: '100 Hours Living in Curved Space',
        category: 'intuition',
        simulatedClaim: 'Direct intuitive comprehension of non-Euclidean geodesics.',
        assayStage: 'Mental Transduction',
        simToRealFidelity: 100,
        verdict: 'INTUITION',
        verdictDescription: 'Probes return with telemetry; only human minds return with new geometries of thought. The gift that renews base reality.',
        color: '#FBBC05' // Google Yellow
    }
];

export const AssayOfficeVisual: React.FC<VisualProps> = ({ elevation }) => {
    const [selectedSampleId, setSelectedSampleId] = useState<string>('matrix-48');
    const [isAssaying, setIsAssaying] = useState<boolean>(false);
    const [assayProgress, setAssayProgress] = useState<number>(100);

    const activeSample = CARGO_SAMPLES.find(s => s.id === selectedSampleId) || CARGO_SAMPLES[0];

    const runAssay = (sampleId: string) => {
        setSelectedSampleId(sampleId);
        setIsAssaying(true);
        setAssayProgress(0);

        let p = 0;
        const interval = setInterval(() => {
            p += 20;
            setAssayProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setIsAssaying(false);
            }
        }, 120);
    };

    return (
        <div className={getContainerClass(elevation)}>
            <h4 className={captionClass}>Fig 2.2 The Assay Office: What Survives Sim-to-Real Transduction?</h4>
            {gridPattern}

            <div className="w-full max-w-4xl space-y-6 relative z-10">
                {/* Header card with premise */}
                <div className="bg-card-bg/90 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-500 shadow-sm">
                                <Scale className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold">THE SIM-TO-REAL AIRLOCK</span>
                                <h3 className="text-xl font-bold text-text-primary">Testing Ore Before Anyone Pays For It</h3>
                            </div>
                        </div>
                        <div className="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5">
                            <FlaskConical className="w-3.5 h-3.5" />
                            Verification Protocol
                        </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        Every gold rush produces more pyrite than gold. Generated worlds will not be short of treasure; they will be flooded with things that look like treasure. The most critical building in the prospecting town is the assay office.
                    </p>
                </div>

                {/* 5 Cargo Classes Summary Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                    <div className="bg-card-bg/80 p-3 rounded-xl shadow-sm">
                        <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase block">1. Theorems</span>
                        <span className="text-xs font-bold text-text-primary">100% Viable</span>
                        <span className="text-[10px] text-text-secondary block mt-0.5">Proof Checkers</span>
                    </div>
                    <div className="bg-card-bg/80 p-3 rounded-xl shadow-sm">
                        <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase block">2. Algorithms</span>
                        <span className="text-xs font-bold text-text-primary">95% Viable</span>
                        <span className="text-[10px] text-text-secondary block mt-0.5">Move 37 / Matrix</span>
                    </div>
                    <div className="bg-card-bg/80 p-3 rounded-xl shadow-sm">
                        <span className="text-[10px] font-mono font-bold text-amber-500 uppercase block">3. Materials</span>
                        <span className="text-xs font-bold text-text-primary">Requires Assay</span>
                        <span className="text-[10px] text-text-secondary block mt-0.5">Robotic Labs</span>
                    </div>
                    <div className="bg-card-bg/80 p-3 rounded-xl shadow-sm">
                        <span className="text-[10px] font-mono font-bold text-blue-500 uppercase block">4. Physics</span>
                        <span className="text-xs font-bold text-text-primary">Hypotheses Only</span>
                        <span className="text-[10px] text-text-secondary block mt-0.5">Telescopes/CERN</span>
                    </div>
                    <div className="bg-card-bg/80 p-3 rounded-xl shadow-sm col-span-2 sm:col-span-1">
                        <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase block">5. Intuition</span>
                        <span className="text-xs font-bold text-text-primary">Internal Gift</span>
                        <span className="text-[10px] text-text-secondary block mt-0.5">Changed Minds</span>
                    </div>
                </div>

                {/* Ore Sample Selector */}
                <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-text-secondary font-bold tracking-wider block">
                        Select Prospective Multiverse Cargo To Assay:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {CARGO_SAMPLES.map((sample) => {
                            const isSelected = selectedSampleId === sample.id;
                            return (
                                <button
                                    key={sample.id}
                                    onClick={() => runAssay(sample.id)}
                                    className={`p-3.5 rounded-xl text-left transition-all duration-300 shadow-sm flex flex-col justify-between ${
                                        isSelected
                                            ? 'bg-amber-500/15 ring-0 scale-[1.02] shadow-md'
                                            : 'bg-card-bg/80 hover:bg-card-bg'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-text-secondary">
                                            {sample.category}
                                        </span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                            sample.verdict === 'GOLD' ? 'bg-emerald-500/15 text-emerald-500' :
                                            sample.verdict === 'PYRITE' ? 'bg-red-500/15 text-red-500' :
                                            sample.verdict === 'HYPOTHESIS' ? 'bg-blue-500/15 text-blue-500' :
                                            'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400'
                                        }`}>
                                            {sample.verdict}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-text-primary leading-snug">{sample.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Assay Chamber Card */}
                <div className="bg-card-bg/95 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-4">
                        <div>
                            <span className="text-xs font-mono uppercase text-text-secondary font-bold">Active Cargo Inspection</span>
                            <h4 className="text-lg font-bold text-text-primary">{activeSample.name}</h4>
                            <span className="text-xs font-mono text-blue-500">{activeSample.origin}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-mono uppercase text-text-secondary block">Assay Station</span>
                            <span className="text-sm font-bold text-amber-500 font-mono">{activeSample.assayStage}</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-text-secondary">
                            <span>Assay Progress: {assayProgress}%</span>
                            <span>{isAssaying ? 'Running Spectrometry & Noetherian Proofs...' : 'Verification Complete'}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300 bg-amber-500"
                                style={{ width: `${assayProgress}%` }}
                            />
                        </div>
                    </div>

                    {/* Simulated Claim vs Reality Verdict */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="bg-card-bg p-4 rounded-xl shadow-sm space-y-1">
                            <span className="text-[10px] font-mono uppercase text-text-secondary font-bold">Multiverse In-Situ Claim</span>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                {activeSample.simulatedClaim}
                            </p>
                        </div>
                        <div className={`p-4 rounded-xl shadow-sm space-y-1 ${
                            activeSample.verdict === 'GOLD' ? 'bg-emerald-500/10' :
                            activeSample.verdict === 'PYRITE' ? 'bg-red-500/10' :
                            activeSample.verdict === 'HYPOTHESIS' ? 'bg-blue-500/10' :
                            'bg-yellow-500/10'
                        }`}>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase font-bold tracking-wider">
                                    Base-Reality Assay Verdict
                                </span>
                                <span className="font-mono font-bold text-xs">
                                    {activeSample.verdict}
                                </span>
                            </div>
                            <p className="text-xs leading-relaxed text-text-primary font-medium">
                                {activeSample.verdictDescription}
                            </p>
                        </div>
                    </div>

                    {/* Sim-to-Real Fidelity Meter */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-text-secondary border-t border-border/30">
                        <span className="font-mono">
                            Base Physics Concordance Index: <strong className="text-text-primary">{activeSample.simToRealFidelity}%</strong>
                        </span>
                        <span className="italic text-text-secondary">
                            &quot;The multiverse proposes; reality disposes.&quot; — David Deutsch
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};


