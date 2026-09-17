/**
 * Master Arc 02 Narrative Decomposition & Merge-Sort Synthesis Engine
 * Scales the 3-Tier Recursive Engine to Arc 02: Chapters 07 to 12
 * 
 * Chapter 07: The Weeds of Mount Hua
 * Chapter 08: The Debt Collectors & The Oak Stick
 * Chapter 09: The Courtyard of Broken Bones
 * Chapter 10: The Sealed Library & The Stolen Scrolls
 * Chapter 11: The Plum Blossom Sword Heart Awakens
 * Chapter 12: The First Bloom
 */

const fs = require('fs');
const path = require('path');
const { computeScore, runCouncilIteration } = require('./leaf_council_loop');
const { mergeScene } = require('./merge_scene');
const { mergeChapter } = require('./merge_chapter');
const { mergeArc } = require('./merge_arc');

const { ch07Data, ch08Data } = require('./arc_02_data_ch07_ch08');
const { ch09Data, ch10Data } = require('./arc_02_data_ch09_ch10');
const { ch11Data, ch12Data } = require('./arc_02_data_ch11_ch12');

const chapters = [ch07Data, ch08Data, ch09Data, ch10Data, ch11Data, ch12Data];

const baseDir = path.resolve(__dirname, '..');
const arcDir = path.join(baseDir, 'arc_02');
const bookChaptersDir = path.resolve(baseDir, '../book_1/chapters');
const topologyDir = path.resolve(baseDir, '../../../.topology');

// Ensure root directories exist
if (!fs.existsSync(arcDir)) fs.mkdirSync(arcDir, { recursive: true });
if (!fs.existsSync(bookChaptersDir)) fs.mkdirSync(bookChaptersDir, { recursive: true });
if (!fs.existsSync(topologyDir)) fs.mkdirSync(topologyDir, { recursive: true });

console.log('================================================================');
console.log('🚀 EXECUTING RECURSIVE MERGE-SORT DECOMPOSITION FOR ARC 02');
console.log('   "The Mud & The Blossom" (Mount Hua Revival)');
console.log('================================================================\n');

let totalLeavesCount = 0;
let totalScenesCount = 0;
let totalChaptersCount = 0;
const topologyNodes = [];
const topologyEdges = [];

// Topology Root Node
topologyNodes.push({
  id: 'goal-arc-02',
  label: 'Arc 02: The Mud & The Blossom',
  type: 'milestone',
  role: 'Narrative Architect & Council Lead',
  description: 'Master recursive merge-sort decomposition of Chapters 07 to 12 into 18 scenes and 54 tripartite leaf nodes.',
  status: 'completed',
  priority: 'critical'
});

chapters.forEach((chapter, chapIdx) => {
  totalChaptersCount++;
  const chapDir = path.join(arcDir, chapter.id);
  if (!fs.existsSync(chapDir)) fs.mkdirSync(chapDir, { recursive: true });

  const chapNumStr = chapter.order < 10 ? `0${chapter.order}` : `${chapter.order}`;
  const chapNodeId = `ch-${chapNumStr}`;
  topologyNodes.push({
    id: chapNodeId,
    label: `Chapter ${chapNumStr}: ${chapter.title}`,
    type: 'task',
    role: 'Chapter Lead',
    description: `Decomposition and upward synthesis of Chapter ${chapNumStr}`,
    status: 'completed',
    priority: 'high'
  });
  topologyEdges.push({ source: 'goal-arc-02', target: chapNodeId, label: 'chapter_decomposition' });

  const sceneMetaList = [];
  let chapterTotalScore = 0;

  chapter.scenes.forEach((scene, sceneIdx) => {
    totalScenesCount++;
    const sceneDir = path.join(chapDir, scene.id);
    const candidatesDir = path.join(sceneDir, 'candidates');
    if (!fs.existsSync(candidatesDir)) fs.mkdirSync(candidatesDir, { recursive: true });

    const sceneNodeId = `ch${chapNumStr}-s${scene.order}`;
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
      const leafNodeId = `ch${chapNumStr}-s${scene.order}-leaf-${lType.charAt(0)}`;
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
      leafOrder: scene.leafOrder || ['environment', 'interactions', 'actions'],
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
    const sceneMergeNodeId = `ch${chapNumStr}-s${scene.order}-merge`;
    topologyNodes.push({
      id: sceneMergeNodeId,
      label: `Merge S${scene.order}: ${scene.title} (S=${compSceneScore})`,
      type: 'task',
      role: 'Scene Synthesizer',
      description: `Upward synthesis of tripartite leaves (I* ⊕ A* ⊕ E*)`,
      status: 'completed',
      priority: 'high'
    });
    topologyEdges.push({ source: `ch${chapNumStr}-s${scene.order}-leaf-e`, target: sceneMergeNodeId, label: 'E*' });
    topologyEdges.push({ source: `ch${chapNumStr}-s${scene.order}-leaf-i`, target: sceneMergeNodeId, label: 'I*' });
    topologyEdges.push({ source: `ch${chapNumStr}-s${scene.order}-leaf-a`, target: sceneMergeNodeId, label: 'A*' });
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
  const targetManuscript = path.join(bookChaptersDir, `chapter_${chapNumStr}.md`);
  mergeChapter(chapDir, { targetManuscriptPath: targetManuscript });
  chapterMeta.status = 'merged';
  fs.writeFileSync(path.join(chapDir, 'chapter_meta.json'), JSON.stringify(chapterMeta, null, 2), 'utf8');

  // Topology Chapter Merge Node
  const chapMergeNodeId = `ch-${chapNumStr}-merge`;
  topologyNodes.push({
    id: chapMergeNodeId,
    label: `Merge Chapter ${chapNumStr}: ${chapter.title} (S=${compChapScore})`,
    type: 'task',
    role: 'Chapter Synthesizer',
    description: `Upward compilation of all scenes into canonical Chapter ${chapNumStr} manuscript`,
    status: 'completed',
    priority: 'critical'
  });
  chapter.scenes.forEach(s => {
    topologyEdges.push({ source: `ch${chapNumStr}-s${s.order}-merge`, target: chapMergeNodeId, label: `S${s.order}` });
  });

  console.log(`✅ Chapter ${chapNumStr}: ${chapter.title} - Merged (Score: ${compChapScore})`);
});

// Merge Arc 02 Master Manuscript
const arcManuscriptPath = path.join(arcDir, 'resolved_arc_02.md');
mergeArc(arcDir, {
  arcTitle: 'Arc 02: The Mud & The Blossom (Clan Revival)',
  order: 2,
  outputFileName: 'resolved_arc_02.md'
});

// Final Arc Merge Node in Topology
const arcMergeNodeId = 'arc-02-merge';
topologyNodes.push({
  id: arcMergeNodeId,
  label: 'Master Arc 02 Synthesis: The Mud & The Blossom',
  type: 'milestone',
  role: 'Master Synthesizer & Council Archon',
  description: 'Compilation of all 6 chapters (18 scenes, 54 leaf nodes) into canonical Arc 02 manuscript.',
  status: 'completed',
  priority: 'critical'
});

chapters.forEach(c => {
  const chapNumStr = c.order < 10 ? `0${c.order}` : `${c.order}`;
  topologyEdges.push({ source: `ch-${chapNumStr}-merge`, target: arcMergeNodeId, label: `Ch ${chapNumStr}` });
});

// Write Topology Plan
const topologyPlan = {
  id: 'arc-02-the-mud-and-the-blossom',
  title: 'Arc 02: The Mud & The Blossom - Recursive Merge-Sort Engine',
  description: 'Complete 3-tier recursive merge-sort narrative decomposition across Chapters 07 to 12 (18 scenes, 54 tripartite leaves) with multi-round MCP Council iteration loops.',
  author: 'Antigravity Living Identity & 6-Seat Inner Council',
  version: '2.0.0',
  totalNodes: topologyNodes.length,
  totalEdges: topologyEdges.length,
  nodes: topologyNodes,
  edges: topologyEdges
};

fs.writeFileSync(path.join(topologyDir, 'plan_arc_02.json'), JSON.stringify(topologyPlan, null, 2), 'utf8');

console.log('\n================================================================');
console.log('🎉 ARC 02 RECURSIVE DECOMPOSITION & MERGE-SORT COMPLETE!');
console.log(`   Chapters Processed: ${totalChaptersCount}`);
console.log(`   Scenes Processed:   ${totalScenesCount}`);
console.log(`   Leaf Nodes Locked:  ${totalLeavesCount}`);
console.log(`   Topology DAG Nodes: ${topologyNodes.length}`);
console.log(`   Master Arc File:    ${arcManuscriptPath}`);
console.log('================================================================\n');
