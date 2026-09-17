/**
 * Upward Arc Synthesizer (⨁ S_i)
 * Compiles all resolved scenes into the master manuscript
 */
const fs = require('fs');
const path = require('path');

function mergeArc(arcDir, targetManuscriptPath) {
  const entries = fs.readdirSync(arcDir, { withFileTypes: true });
  const sceneDirs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('scene_'))
    .map(e => path.join(arcDir, e.name))
    .sort();

  const resolvedScenes = [];

  sceneDirs.forEach(scenePath => {
    const resolvedPath = path.join(scenePath, 'resolved_scene.md');
    if (fs.existsSync(resolvedPath)) {
      const content = fs.readFileSync(resolvedPath, 'utf8');
      resolvedScenes.push(content);
    }
  });

  const arcHeader = `# PROLOGUE: THE DHARMA AT KURUKSHETRA
*Canonical Manuscript Synthesized via Recursive Merge-Sort Narrative Decomposition & MCP Council Iteration Engine*

---
`;

  const fullArc = arcHeader + '\n' + resolvedScenes.join('\n\n---\n\n');

  fs.writeFileSync(path.join(arcDir, 'resolved_prologue_arc.md'), fullArc, 'utf8');
  if (targetManuscriptPath) {
    fs.writeFileSync(targetManuscriptPath, fullArc, 'utf8');
  }

  return fullArc;
}

module.exports = { mergeArc };
