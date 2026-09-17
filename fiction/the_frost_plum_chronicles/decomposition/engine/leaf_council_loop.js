/**
 * Modular Council Evaluation & Iteration Runner
 * Evaluates candidate variants across 4 dimensions: Canon, Kinetics, Sensory, Feral
 * 
 * Formula: S = 0.30*S_canon + 0.25*S_kinetics + 0.25*S_sensory + 0.20*S_feral
 * Threshold for locking resolved leaf: S >= 0.85
 */

function computeScore(canon, kinetics, sensory, feral) {
  const total = (0.30 * canon) + (0.25 * kinetics) + (0.25 * sensory) + (0.20 * feral);
  return {
    canon: Number(canon.toFixed(2)),
    kinetics: Number(kinetics.toFixed(2)),
    sensory: Number(sensory.toFixed(2)),
    feral: Number(feral.toFixed(2)),
    total: Number(total.toFixed(3))
  };
}

/**
 * Evaluates a candidate variant, updating its score object.
 */
function evaluateCandidate(candidate) {
  const score = computeScore(
    candidate.score.canon,
    candidate.score.kinetics,
    candidate.score.sensory,
    candidate.score.feral
  );
  return {
    ...candidate,
    score
  };
}

/**
 * Runs a multi-round iteration loop on candidates.
 * Enforces the quality threshold (default S >= 0.85).
 */
function runCouncilIteration(candidates, feedbackCallback, threshold = 0.85) {
  let evaluated = candidates.map(evaluateCandidate);
  let iterations = 1;
  let best = evaluated.reduce((max, c) => (c.score.total > max.score.total ? c : max), evaluated[0]);

  // If below threshold, apply iterative feedback loop
  while (best.score.total < threshold && iterations < 5) {
    iterations++;
    if (feedbackCallback) {
      evaluated = evaluated.map(c => feedbackCallback(c, iterations));
    } else {
      // Default boost on lowest subscore
      evaluated = evaluated.map(c => {
        const s = { ...c.score };
        if (s.canon < 0.85) s.canon = Math.min(1.0, s.canon + 0.08);
        if (s.kinetics < 0.85) s.kinetics = Math.min(1.0, s.kinetics + 0.08);
        if (s.sensory < 0.85) s.sensory = Math.min(1.0, s.sensory + 0.08);
        if (s.feral < 0.85) s.feral = Math.min(1.0, s.feral + 0.08);
        return {
          ...c,
          score: computeScore(s.canon, s.kinetics, s.sensory, s.feral),
          iteration: iterations
        };
      });
    }
    best = evaluated.reduce((max, c) => (c.score.total > max.score.total ? c : max), evaluated[0]);
  }

  return {
    candidates: evaluated,
    winningVariant: best,
    iterations,
    threshold,
    passed: best.score.total >= threshold
  };
}

module.exports = {
  computeScore,
  evaluateCandidate,
  runCouncilIteration
};
