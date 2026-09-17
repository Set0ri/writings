/**
 * Modular Council Evaluation & Iteration Runner
 * Evaluates candidate variants across 4 dimensions: Canon, Kinetics, Sensory, Feral
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

module.exports = { computeScore };
