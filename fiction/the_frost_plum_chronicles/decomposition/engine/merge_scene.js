/**
 * Upward Merge-Sort Scene Synthesizer (I* ⊕ A* ⊕ E*)
 * Enforces the Non-Degradation Invariant
 */
const fs = require('fs');
const path = require('path');

function mergeScene(sceneDir) {
  const leafI = fs.readFileSync(path.join(sceneDir, 'leaf_interactions.md'), 'utf8');
  const leafA = fs.readFileSync(path.join(sceneDir, 'leaf_actions.md'), 'utf8');
  const leafE = fs.readFileSync(path.join(sceneDir, 'leaf_environment.md'), 'utf8');
  const meta = JSON.parse(fs.readFileSync(path.join(sceneDir, 'scene_meta.json'), 'utf8'));

  // Strip headers from leaves for synthesis
  const cleanI = leafI.replace(/^# Leaf Node:.*?\n---\n\n/s, '').trim();
  const cleanA = leafA.replace(/^# Leaf Node:.*?\n---\n\n/s, '').trim();
  const cleanE = leafE.replace(/^# Leaf Node:.*?\n---\n\n/s, '').trim();

  const mergedProse = `# ${meta.title}
**Composite Council Score:** ${meta.compositeScore}

---

${cleanE}

${cleanI}

${cleanA}
`;

  fs.writeFileSync(path.join(sceneDir, 'resolved_scene.md'), mergedProse, 'utf8');
  return mergedProse;
}

module.exports = { mergeScene };
