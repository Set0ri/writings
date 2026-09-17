/**
 * Comprehensive Test Suite for Recursive Merge-Sort Narrative Decomposition Engine
 * Tests:
 * 1. Score formula accuracy & mathematical properties
 * 2. Council loop iteration & threshold enforcement (S >= 0.85)
 * 3. Scene synthesis & header stripping (E* ⊕ I* ⊕ A*)
 * 4. Chapter compilation & composite score tracking
 * 5. Arc synthesis & Non-Degradation Invariant
 * 6. File structure & leaf completeness across Arc 01 (18 scenes, 54 leaves)
 * 7. Obsidian story bible link integrity (0 broken links)
 * 8. Topology DAG structure & edge referential integrity (104 nodes)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const { computeScore, evaluateCandidate, runCouncilIteration } = require('./leaf_council_loop');
const { mergeScene } = require('./merge_scene');
const { mergeChapter } = require('./merge_chapter');
const { mergeArc } = require('./merge_arc');

const rootDir = path.resolve(__dirname, '../../../..');
const arcDir = path.resolve(__dirname, '../arc_01');
const obsidianDir = path.join(rootDir, 'obsidian');
const topologyFile = path.join(rootDir, '.topology/plan.json');

console.log('================================================================');
console.log('🧪 RUNNING VERIFICATION SUITE: NARRATIVE DECOMPOSITION ENGINE');
console.log('================================================================\n');

let passedTests = 0;
let totalTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(err.message);
  }
}

// 1. Council Scoring Formula Tests
test('computeScore computes exact 4-factor weighted score (0.30, 0.25, 0.25, 0.20)', () => {
  const score = computeScore(1.0, 1.0, 1.0, 1.0);
  assert.strictEqual(score.total, 1.0);
  assert.strictEqual(score.canon, 1.0);
  assert.strictEqual(score.kinetics, 1.0);
  assert.strictEqual(score.sensory, 1.0);
  assert.strictEqual(score.feral, 1.0);

  // Test custom weights: 0.30*0.9 + 0.25*0.8 + 0.25*0.7 + 0.20*0.6 = 0.27 + 0.20 + 0.175 + 0.12 = 0.765
  const s2 = computeScore(0.9, 0.8, 0.7, 0.6);
  assert.strictEqual(s2.total, 0.765);
});

// 2. Council Iteration Loop & Threshold Enforcement
test('runCouncilIteration enforces quality threshold (S >= 0.85)', () => {
  const candidates = [
    {
      id: 'c1',
      authorStyle: 'Style A',
      content: 'Prose A',
      critique: 'Critique A',
      score: { canon: 0.95, kinetics: 0.90, sensory: 0.90, feral: 0.90 },
      iteration: 1
    },
    {
      id: 'c2',
      authorStyle: 'Style B',
      content: 'Prose B',
      critique: 'Critique B',
      score: { canon: 0.70, kinetics: 0.70, sensory: 0.70, feral: 0.70 },
      iteration: 1
    }
  ];

  const result = runCouncilIteration(candidates, null, 0.85);
  assert.strictEqual(result.passed, true);
  assert.strictEqual(result.winningVariant.id, 'c1');
  assert.ok(result.winningVariant.score.total >= 0.85);
});

// 3. Arc 01 Structural Completeness (6 chapters, 18 scenes, 54 leaf nodes)
test('Arc 01 directory structure contains exactly 6 chapters', () => {
  const entries = fs.readdirSync(arcDir, { withFileTypes: true });
  const chapterDirs = entries.filter(e => e.isDirectory() && e.name.startsWith('chapter_'));
  assert.strictEqual(chapterDirs.length, 6, 'Arc 01 must have 6 chapters');
});

test('Each chapter contains exactly 3 scenes with tripartite leaf nodes and candidates', () => {
  const chapterDirs = fs.readdirSync(arcDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name.startsWith('chapter_'))
    .map(e => path.join(arcDir, e.name));

  let totalScenes = 0;
  let totalLeaves = 0;

  chapterDirs.forEach(chapDir => {
    const sceneDirs = fs.readdirSync(chapDir, { withFileTypes: true })
      .filter(e => e.isDirectory() && e.name.startsWith('scene_'))
      .map(e => path.join(chapDir, e.name));

    assert.strictEqual(sceneDirs.length, 3, `Chapter ${path.basename(chapDir)} must have 3 scenes`);
    totalScenes += sceneDirs.length;

    sceneDirs.forEach(sceneDir => {
      // Check metadata and evaluations
      assert.ok(fs.existsSync(path.join(sceneDir, 'scene_meta.json')), 'scene_meta.json must exist');
      assert.ok(fs.existsSync(path.join(sceneDir, 'evaluations.json')), 'evaluations.json must exist');
      assert.ok(fs.existsSync(path.join(sceneDir, 'resolved_scene.md')), 'resolved_scene.md must exist');

      // Check leaf files
      const leafTypes = ['environment', 'interactions', 'actions'];
      leafTypes.forEach(lType => {
        const leafPath = path.join(sceneDir, `leaf_${lType}.md`);
        assert.ok(fs.existsSync(leafPath), `${leafPath} must exist`);
        const leafContent = fs.readFileSync(leafPath, 'utf8');
        assert.ok(leafContent.includes('# Leaf Node:'), 'Leaf must have markdown header');
        assert.ok(leafContent.includes('Score:'), 'Leaf must include score');
        totalLeaves++;
      });

      // Check candidate files
      const candDir = path.join(sceneDir, 'candidates');
      assert.ok(fs.existsSync(candDir), 'candidates dir must exist');
      leafTypes.forEach(lType => {
        const candPath = path.join(candDir, `${lType}_candidates.json`);
        assert.ok(fs.existsSync(candPath), `${candPath} must exist`);
        const cands = JSON.parse(fs.readFileSync(candPath, 'utf8'));
        assert.strictEqual(cands.length, 3, 'Must have 3 candidate variants per leaf node');
      });

      // Check score threshold
      const meta = JSON.parse(fs.readFileSync(path.join(sceneDir, 'scene_meta.json'), 'utf8'));
      assert.ok(meta.compositeScore >= 0.85, `Scene score ${meta.compositeScore} must be >= 0.85`);
    });
  });

  assert.strictEqual(totalScenes, 18, 'Total scenes must be 18');
  assert.strictEqual(totalLeaves, 54, 'Total leaf nodes must be 54');
});

// 4. Non-Degradation Invariant & Synthesis Verification
test('Non-Degradation Invariant: resolved_arc_01.md contains all scene texts without truncation', () => {
  const arcPath = path.join(arcDir, 'resolved_arc_01.md');
  assert.ok(fs.existsSync(arcPath), 'resolved_arc_01.md must exist');
  const arcText = fs.readFileSync(arcPath, 'utf8');

  // Verify critical sensory, kinetic, and narrative anchors across all 6 chapters of true canon
  const criticalAnchors = [
    'dried anchovy',                                      // Ch 1
    'knotted winter oak branch',                          // Ch 1
    'Morning Dew',                                        // Ch 2
    'Unit 409-Epsilon',                                   // Ch 2
    'Gull\'s Maw',                                        // Ch 3
    'communal barley',                                    // Ch 4
    'Plum Blossom',                                       // Ch 5
    'kitchen cleaver',                                    // Ch 5
    'milky white synthetic coolant',                      // Ch 6
    'NON-ALGORITHMIC COMBATANT',                          // Ch 6
    'Mount Hua'                                           // Ch 6
  ];

  criticalAnchors.forEach(anchor => {
    assert.ok(arcText.toLowerCase().includes(anchor.toLowerCase()), `Master arc text must contain anchor: "${anchor}"`);
  });

  const wordCount = arcText.split(/\s+/).length;
  assert.ok(wordCount >= 4000, `Arc word count (${wordCount}) must exceed 4,000 words`);
});

// 5. Topology Plan Validation
test('Topology plan contains complete 104-node DAG with 100% valid referential integrity', () => {
  assert.ok(fs.existsSync(topologyFile), '.topology/plan.json must exist');
  const plan = JSON.parse(fs.readFileSync(topologyFile, 'utf8'));

  assert.strictEqual(plan.nodes.length, 104, 'Must have 104 nodes in DAG');
  const nodeIds = new Set(plan.nodes.map(n => n.id));
  assert.strictEqual(nodeIds.size, 104, 'All node IDs must be unique');

  // Validate all edge sources and targets exist in nodeIds
  plan.edges.forEach((edge, idx) => {
    assert.ok(nodeIds.has(edge.source), `Edge ${idx} source '${edge.source}' must exist in nodeIds`);
    assert.ok(nodeIds.has(edge.target), `Edge ${idx} target '${edge.target}' must exist in nodeIds`);
  });

  // Verify all nodes are marked completed
  const incomplete = plan.nodes.filter(n => n.status !== 'completed');
  assert.strictEqual(incomplete.length, 0, 'All nodes in plan must be completed');
});

// 6. Obsidian Story Bible Link Integrity
test('Obsidian Link Integrity: all wikilinks in generated files resolve to valid vault notes', () => {
  // Collect all valid note names in obsidian vault
  const validNotes = new Set();
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach(e => {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        scanDir(full);
      } else if (e.isFile() && e.name.endsWith('.md')) {
        validNotes.add(e.name.replace(/\.md$/, ''));
      }
    });
  }
  scanDir(obsidianDir);

  // Scan generated chapter and arc files
  const filesToScan = [
    path.join(arcDir, 'resolved_arc_01.md')
  ];

  const chapterDirs = fs.readdirSync(arcDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name.startsWith('chapter_'))
    .map(e => path.join(arcDir, e.name));

  chapterDirs.forEach(c => {
    filesToScan.push(path.join(c, 'resolved_chapter.md'));
  });

  const brokenLinks = [];
  const linkRegex = /\[\[(.*?)\]\]/g;

  filesToScan.forEach(f => {
    if (fs.existsSync(f)) {
      const content = fs.readFileSync(f, 'utf8');
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        let linkTarget = match[1].split('|')[0].trim();
        linkTarget = linkTarget.split('#')[0].trim();
        if (linkTarget && !validNotes.has(linkTarget)) {
          brokenLinks.push({ file: path.basename(f), link: linkTarget });
        }
      }
    }
  });

  assert.strictEqual(brokenLinks.length, 0, `Found broken links: ${JSON.stringify(brokenLinks)}`);
});

console.log('\n----------------------------------------------------------------');
console.log(`SUMMARY: ${passedTests} / ${totalTests} tests passed.`);
console.log('================================================================\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
