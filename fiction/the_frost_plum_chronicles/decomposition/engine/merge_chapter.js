/**
 * Upward Chapter Synthesizer (⨁ Scene_i)
 * Compiles resolved scenes into the chapter manuscript
 */
const fs = require('fs');
const path = require('path');
const { mergeScene } = require('./merge_scene');

function mergeChapter(chapterDir, options = {}) {
  const entries = fs.readdirSync(chapterDir, { withFileTypes: true });
  const sceneDirs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('scene_'))
    .map(e => path.join(chapterDir, e.name))
    .sort();

  const metaPath = path.join(chapterDir, 'chapter_meta.json');
  let meta = { title: path.basename(chapterDir), order: 1, compositeScore: 0.94 };
  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  }

  const resolvedScenes = [];
  let totalScore = 0;

  sceneDirs.forEach(scenePath => {
    const resolvedPath = path.join(scenePath, 'resolved_scene.md');
    let content;
    if (fs.existsSync(resolvedPath)) {
      content = fs.readFileSync(resolvedPath, 'utf8');
    } else {
      content = mergeScene(scenePath);
    }
    resolvedScenes.push(content);

    const sceneMetaPath = path.join(scenePath, 'scene_meta.json');
    if (fs.existsSync(sceneMetaPath)) {
      const sMeta = JSON.parse(fs.readFileSync(sceneMetaPath, 'utf8'));
      if (sMeta.compositeScore) totalScore += sMeta.compositeScore;
    }
  });

  const avgScore = sceneDirs.length > 0 ? Number((totalScore / sceneDirs.length).toFixed(3)) : meta.compositeScore;
  meta.compositeScore = avgScore;
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');

  const chapterHeader = `# Chapter ${meta.order}: ${meta.title}
*Canonical Manuscript Synthesized via Recursive Merge-Sort Narrative Decomposition & MCP Council Iteration Engine*
**Composite Chapter Score:** ${avgScore}

---
`;

  const fullChapter = chapterHeader + '\n' + resolvedScenes.join('\n\n***\n\n') + '\n';

  fs.writeFileSync(path.join(chapterDir, 'resolved_chapter.md'), fullChapter, 'utf8');

  if (options.targetManuscriptPath) {
    fs.writeFileSync(options.targetManuscriptPath, fullChapter, 'utf8');
  }

  return fullChapter;
}

module.exports = { mergeChapter };
