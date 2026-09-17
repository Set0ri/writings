/**
 * Upward Arc Synthesizer (⨁ Chapter_j or ⨁ Scene_i)
 * Compiles resolved chapters/scenes into the master arc manuscript
 */
const fs = require('fs');
const path = require('path');
const { mergeChapter } = require('./merge_chapter');
const { mergeScene } = require('./merge_scene');

function mergeArc(arcDir, options = {}) {
  const entries = fs.readdirSync(arcDir, { withFileTypes: true });

  // Check if arc contains chapters or direct scenes
  const chapterDirs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('chapter_'))
    .map(e => path.join(arcDir, e.name))
    .sort();

  const sceneDirs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('scene_'))
    .map(e => path.join(arcDir, e.name))
    .sort();

  const metaPath = path.join(arcDir, 'arc_meta.json');
  let meta = {
    title: options.arcTitle || 'Arc 01: The Return to Southfall & The Broken Meridian',
    order: options.order || 1,
    compositeScore: 0.94
  };
  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  }

  const resolvedSections = [];
  let totalScore = 0;

  if (chapterDirs.length > 0) {
    chapterDirs.forEach(chapPath => {
      const resolvedPath = path.join(chapPath, 'resolved_chapter.md');
      let content;
      if (fs.existsSync(resolvedPath)) {
        content = fs.readFileSync(resolvedPath, 'utf8');
      } else {
        content = mergeChapter(chapPath);
      }
      resolvedSections.push(content);

      const chapMetaPath = path.join(chapPath, 'chapter_meta.json');
      if (fs.existsSync(chapMetaPath)) {
        const cMeta = JSON.parse(fs.readFileSync(chapMetaPath, 'utf8'));
        if (cMeta.compositeScore) totalScore += cMeta.compositeScore;
      }
    });
    meta.compositeScore = Number((totalScore / chapterDirs.length).toFixed(3));
  } else if (sceneDirs.length > 0) {
    sceneDirs.forEach(scenePath => {
      const resolvedPath = path.join(scenePath, 'resolved_scene.md');
      let content;
      if (fs.existsSync(resolvedPath)) {
        content = fs.readFileSync(resolvedPath, 'utf8');
      } else {
        content = mergeScene(scenePath);
      }
      resolvedSections.push(content);

      const sceneMetaPath = path.join(scenePath, 'scene_meta.json');
      if (fs.existsSync(sceneMetaPath)) {
        const sMeta = JSON.parse(fs.readFileSync(sceneMetaPath, 'utf8'));
        if (sMeta.compositeScore) totalScore += sMeta.compositeScore;
      }
    });
    meta.compositeScore = Number((totalScore / sceneDirs.length).toFixed(3));
  }

  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');

  const arcHeader = `# ARC ${meta.order < 10 ? '0' + meta.order : meta.order}: ${meta.title.toUpperCase()}
*Canonical Manuscript Synthesized via Recursive Merge-Sort Narrative Decomposition & MCP Council Iteration Engine*
**Composite Arc Council Score:** ${meta.compositeScore}

---
`;

  const fullArc = arcHeader + '\n\n' + resolvedSections.join('\n\n---\n\n') + '\n';

  const outputFileName = options.outputFileName || 'resolved_arc_01.md';
  fs.writeFileSync(path.join(arcDir, outputFileName), fullArc, 'utf8');

  if (options.targetManuscriptPath) {
    fs.writeFileSync(options.targetManuscriptPath, fullArc, 'utf8');
  }

  return fullArc;
}

module.exports = { mergeArc };
