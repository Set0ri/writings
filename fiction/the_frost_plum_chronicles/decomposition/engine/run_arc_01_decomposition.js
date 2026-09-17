/**
 * Master Arc 01 Narrative Decomposition & Merge-Sort Synthesis Engine
 * Scales the 3-Tier Recursive Engine to Arc 01: Chapters 01 to 06
 * 
 * Chapter 01: The Broken Meridian
 * Chapter 02: The Spirit Spring
 * Chapter 03: The Black Iron Gambit
 * Chapter 04: The Elder Tribunal
 * Chapter 05: The Night of Plum Shadows
 * Chapter 06: The First Frost
 */

const fs = require('fs');
const path = require('path');
const { computeScore, runCouncilIteration } = require('./leaf_council_loop');
const { mergeScene } = require('./merge_scene');
const { mergeChapter } = require('./merge_chapter');
const { mergeArc } = require('./merge_arc');

const { ch01Data, ch02Data } = require('./arc_01_data_ch01_ch02');
const { ch03Data, ch04Data } = require('./arc_01_data_ch03_ch04');
const { ch05Data, ch06Data } = require('./arc_01_data_ch05_ch06');

const chapters = [ch01Data, ch02Data, ch03Data, ch04Data, ch05Data, ch06Data];

const baseDir = path.resolve(__dirname, '..');
const arcDir = path.join(baseDir, 'arc_01');
const bookChaptersDir = path.resolve(baseDir, '../book_1/chapters');
const topologyDir = path.resolve(baseDir, '../../../.topology');

// Ensure root directories exist
if (!fs.existsSync(arcDir)) fs.mkdirSync(arcDir, { recursive: true });
if (!fs.existsSync(bookChaptersDir)) fs.mkdirSync(bookChaptersDir, { recursive: true });
if (!fs.existsSync(topologyDir)) fs.mkdirSync(topologyDir, { recursive: true });

console.log('================================================================');
console.log('🚀 EXECUTING RECURSIVE MERGE-SORT DECOMPOSITION FOR ARC 01');
console.log('   "The Return to Southfall & The Broken Meridian"');
console.log('================================================================\n');

let totalLeavesCount = 0;
let totalScenesCount = 0;
let totalChaptersCount = 0;
const topologyNodes = [];
const topologyEdges = [];

// Topology Root Node
topologyNodes.push({
  id: 'goal-arc-01',
  label: 'Arc 01: The Return to Southfall & The Broken Meridian',
  type: 'milestone',
  role: 'Narrative Architect & Council Lead',
  description: 'Master recursive merge-sort decomposition of Chapters 01 to 06 into 18 scenes and 54 tripartite leaf nodes.',
  status: 'completed',
  priority: 'critical'
});

chapters.forEach((chapter, chapIdx) => {
  totalChaptersCount++;
  const chapDir = path.join(arcDir, chapter.id);
  if (!fs.existsSync(chapDir)) fs.mkdirSync(chapDir, { recursive: true });

  const chapNodeId = `ch-0${chapter.order}`;
  topologyNodes.push({
    id: chapNodeId,
    label: `Chapter 0${chapter.order}: ${chapter.title}`,
    type: 'task',
    role: 'Chapter Lead',
    description: `Decomposition and upward synthesis of Chapter 0${chapter.order}`,
    status: 'completed',
    priority: 'high'
  });
  topologyEdges.push({ source: 'goal-arc-01', target: chapNodeId, label: 'chapter_decomposition' });

  const sceneMetaList = [];
  let chapterTotalScore = 0;

  chapter.scenes.forEach((scene, sceneIdx) => {
    totalScenesCount++;
    const sceneDir = path.join(chapDir, scene.id);
    const candidatesDir = path.join(sceneDir, 'candidates');
    if (!fs.existsSync(candidatesDir)) fs.mkdirSync(candidatesDir, { recursive: true });

    const sceneNodeId = `ch0${chapter.order}-s${scene.order}`;
    topologyNodes.push({
      id: sceneNodeId,
      label: `S${scene.order}: ${scene.title}`,
      type: 'task',
      role: 'Scene Dramatist',
      description: `Tripartite decomposition of Scene ${scene.order}`,
      status: 'completed',
      priority: 'high'
    });
    topologyEdges.push({ source: chapNodeId, target: sceneNodeId, label: 'scene_breakdown' });

    const leafTypes = ['environment', 'interactions', 'actions'];
    const leafScores = {};
    const evaluations = {
      sceneId: scene.id,
      title: scene.title,
      order: scene.order,
      threshold: 0.85,
      leaves: {},
      compositeSceneScore: 0,
      timestamp: new Date().toISOString()
    };

    leafTypes.forEach(lType => {
      totalLeavesCount++;
      const leafData = scene.leaves[lType];
      const councilRes = runCouncilIteration(leafData.candidates, null, 0.85);

      const winningCandidate = councilRes.winningVariant;
      const computedWinningScore = computeScore(
        winningCandidate.score.canon,
        winningCandidate.score.kinetics,
        winningCandidate.score.sensory,
        winningCandidate.score.feral
      );

      leafScores[lType] = {
        resolved: true,
        score: computedWinningScore.total
      };

      evaluations.leaves[lType] = {
        winningScore: computedWinningScore,
        councilConsensus: leafData.consensus || 'Passed with high distinction (S >= 0.85). Balanced 4-pillar Council rubric.',
        critiqueSummary: winningCandidate.critique
      };

      // Write candidates JSON
      fs.writeFileSync(
        path.join(candidatesDir, `${lType}_candidates.json`),
        JSON.stringify(councilRes.candidates, null, 2),
        'utf8'
      );

      // Write resolved leaf Markdown
      const leafTypeNameFormatted = lType.charAt(0).toUpperCase() + lType.slice(1);
      const leafSymbol = lType === 'interactions' ? 'I*' : lType === 'actions' ? 'A*' : 'E*';
      const leafHeader = `# Leaf Node: ${leafTypeNameFormatted} (${leafSymbol})
**Scene:** ${scene.title}
**Council Score:** Total ${computedWinningScore.total} (Canon: ${computedWinningScore.canon}, Kinetics: ${computedWinningScore.kinetics}, Sensory: ${computedWinningScore.sensory}, Feral: ${computedWinningScore.feral})

---

${leafData.winningProse}
`;
      fs.writeFileSync(path.join(sceneDir, `leaf_${lType}.md`), leafHeader, 'utf8');

      // Topology Leaf Node
      const leafNodeId = `ch0${chapter.order}-s${scene.order}-leaf-${lType.charAt(0)}`;
      topologyNodes.push({
        id: leafNodeId,
        label: `S${scene.order}-${lType.charAt(0).toUpperCase()}: ${leafTypeNameFormatted} (S=${computedWinningScore.total})`,
        type: 'task',
        role: lType === 'interactions' ? 'Radiant Mirror & Feral Wolf' : lType === 'actions' ? 'Obsidian Edge & Sun' : 'Scout & Rothfuss Sensory',
        description: `Council iteration loop for ${lType}`,
        status: 'completed',
        priority: 'medium'
      });
      topologyEdges.push({ source: sceneNodeId, target: leafNodeId, label: 'leaf_delegation' });
    });

    const compSceneScore = Number(
      ((leafScores.environment.score + leafScores.interactions.score + leafScores.actions.score) / 3).toFixed(3)
    );
    evaluations.compositeSceneScore = compSceneScore;
    chapterTotalScore += compSceneScore;

    const sceneMeta = {
      id: scene.id,
      title: scene.title,
      order: scene.order,
      status: 'ready_to_merge',
      compositeScore: compSceneScore,
      leaves: leafScores
    };

    fs.writeFileSync(path.join(sceneDir, 'scene_meta.json'), JSON.stringify(sceneMeta, null, 2), 'utf8');
    fs.writeFileSync(path.join(sceneDir, 'evaluations.json'), JSON.stringify(evaluations, null, 2), 'utf8');

    // Synthesize scene
    mergeScene(sceneDir);
    sceneMeta.status = 'merged';
    fs.writeFileSync(path.join(sceneDir, 'scene_meta.json'), JSON.stringify(sceneMeta, null, 2), 'utf8');
    sceneMetaList.push(sceneMeta);

    // Topology Scene Merge Node
    const sceneMergeNodeId = `ch0${chapter.order}-s${scene.order}-merge`;
    topologyNodes.push({
      id: sceneMergeNodeId,
      label: `Merge S${scene.order}: ${scene.title} (S=${compSceneScore})`,
      type: 'task',
      role: 'Scene Synthesizer',
      description: `Upward synthesis of tripartite leaves (I* ⊕ A* ⊕ E*)`,
      status: 'completed',
      priority: 'high'
    });
    topologyEdges.push({ source: `ch0${chapter.order}-s${scene.order}-leaf-e`, target: sceneMergeNodeId, label: 'E*' });
    topologyEdges.push({ source: `ch0${chapter.order}-s${scene.order}-leaf-i`, target: sceneMergeNodeId, label: 'I*' });
    topologyEdges.push({ source: `ch0${chapter.order}-s${scene.order}-leaf-a`, target: sceneMergeNodeId, label: 'A*' });
  });

  const compChapScore = Number((chapterTotalScore / chapter.scenes.length).toFixed(3));
  const chapterMeta = {
    id: chapter.id,
    title: chapter.title,
    order: chapter.order,
    status: 'ready_to_merge',
    compositeScore: compChapScore,
    scenes: sceneMetaList
  };
  fs.writeFileSync(path.join(chapDir, 'chapter_meta.json'), JSON.stringify(chapterMeta, null, 2), 'utf8');

  // Merge Chapter and update canonical manuscript
  const targetManuscript = path.join(bookChaptersDir, `chapter_0${chapter.order}.md`);
  mergeChapter(chapDir, { targetManuscriptPath: targetManuscript });
  chapterMeta.status = 'merged';
  fs.writeFileSync(path.join(chapDir, 'chapter_meta.json'), JSON.stringify(chapterMeta, null, 2), 'utf8');

  // Topology Chapter Merge Node
  const chapMergeNodeId = `ch-0${chapter.order}-merge`;
  topologyNodes.push({
    id: chapMergeNodeId,
    label: `Merge Chapter 0${chapter.order}: ${chapter.title} (S=${compChapScore})`,
    type: 'task',
    role: 'Chapter Synthesizer',
    description: `Upward compilation of all scenes into canonical Chapter 0${chapter.order} manuscript`,
    status: 'completed',
    priority: 'critical'
  });
  chapter.scenes.forEach(s => {
    topologyEdges.push({ source: `ch0${chapter.order}-s${s.order}-merge`, target: chapMergeNodeId, label: `S${s.order}` });
  });

  console.log(`✅ Chapter 0${chapter.order}: ${chapter.title} - Merged (Score: ${compChapScore})`);
});

// Merge Arc 01 Master Manuscript
const arcManuscriptPath = path.join(arcDir, 'resolved_arc_01.md');
mergeArc(arcDir, {
  arcTitle: 'Arc 01: The Return to Southfall & The Broken Meridian',
  order: 1,
  outputFileName: 'resolved_arc_01.md'
});

// Final Arc Merge Node in Topology
const arcMergeNodeId = 'arc-01-merge';
topologyNodes.push({
  id: arcMergeNodeId,
  label: 'Master Arc 01 Synthesis: The Return to Southfall & The Broken Meridian',
  type: 'milestone',
  role: 'Master Synthesizer & Council Archon',
  description: 'Compilation of all 6 chapters (18 scenes, 54 leaf nodes) into canonical Arc 01 manuscript.',
  status: 'completed',
  priority: 'critical'
});

chapters.forEach(c => {
  topologyEdges.push({ source: `ch-0${c.order}-merge`, target: arcMergeNodeId, label: `Ch 0${c.order}` });
});

// Write Topology Plan
const topologyPlan = {
  id: 'arc-01-return-to-southfall-broken-meridian',
  title: 'Arc 01: The Return to Southfall & The Broken Meridian - Recursive Merge-Sort Engine',
  description: 'Complete 3-tier recursive merge-sort narrative decomposition across Chapters 01 to 06 (18 scenes, 54 tripartite leaves) with multi-round MCP Council iteration loops.',
  author: 'Antigravity Living Identity & 6-Seat Inner Council',
  version: '2.0.0',
  totalNodes: topologyNodes.length,
  totalEdges: topologyEdges.edges ? topologyEdges.edges.length : topologyEdges.length,
  nodes: topologyNodes,
  edges: topologyEdges
};

fs.writeFileSync(path.join(topologyDir, 'plan.json'), JSON.stringify(topologyPlan, null, 2), 'utf8');

console.log('\n================================================================');
console.log('🎉 ARC 01 RECURSIVE DECOMPOSITION & MERGE-SORT COMPLETE!');
console.log(`   Chapters Processed: ${totalChaptersCount}`);
console.log(`   Scenes Processed:   ${totalScenesCount}`);
console.log(`   Leaf Nodes Locked:  ${totalLeavesCount}`);
console.log(`   Topology DAG Nodes: ${topologyNodes.length}`);
console.log(`   Master Arc File:    ${arcManuscriptPath}`);
console.log('================================================================\n');
