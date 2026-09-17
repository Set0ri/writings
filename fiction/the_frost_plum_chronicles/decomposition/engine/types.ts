/**
 * Recursive Merge-Sort Narrative Decomposition Engine
 * Type Definitions
 */

export type LeafType = 'interactions' | 'actions' | 'environment';

export interface CouncilScore {
  canon: number;     // Weight: 0.30 - Fidelity to Logan's notes & canon axioms
  kinetics: number;  // Weight: 0.25 - Sanderson/Gosu physical & biological limits
  sensory: number;   // Weight: 0.25 - Rothfuss/Inoue sensory resonance & acoustics
  feral: number;     // Weight: 0.20 - Biga/LICO feral swagger & cathartic comedic timing
  total: number;     // Weighted sum: 0.30*canon + 0.25*kinetics + 0.25*sensory + 0.20*feral
}

export interface CandidateVariant {
  id: string;
  authorStyle: string; // e.g. 'Sanderson / Gosu', 'Rothfuss / Inoue', 'Biga / Studio LICO'
  content: string;
  critique: string;
  score: CouncilScore;
  iteration: number;
}

export interface LeafEvaluationSummary {
  winningScore: CouncilScore;
  councilConsensus: string;
  critiqueSummary: string;
}

export interface SceneEvaluationsRecord {
  sceneId: string;
  title: string;
  order: number;
  threshold: number;
  leaves: Record<LeafType, LeafEvaluationSummary>;
  compositeSceneScore: number;
  timestamp: string;
}

export interface SceneLeafState {
  resolved: boolean;
  score: number;
  winningVariantId?: string;
  lastUpdated?: string;
}

export interface SceneMetadata {
  id: string;
  title: string;
  order: number;
  compositeScore?: number;
  leaves: Record<LeafType, SceneLeafState>;
  status: 'pending' | 'in_progress' | 'ready_to_merge' | 'merged';
}

export interface ChapterMetadata {
  id: string;
  title: string;
  order: number;
  compositeScore?: number;
  scenes: SceneMetadata[];
  status: 'pending' | 'in_progress' | 'ready_to_merge' | 'merged';
}

export interface ArcDecomposition {
  id: string;
  title: string;
  chapters?: ChapterMetadata[];
  scenes?: SceneMetadata[];
  status: 'in_progress' | 'completed';
  lastMergedAt?: string;
}
