import type { Writing } from '../types';
import { technoFeudalismWriting } from './technoFeudalism';
import { wargamingAiAlignmentWriting } from './wargamingAiAlignment';
import { aiDataEconomyWriting } from './aiDataEconomy';
import { latentAstronautsWriting } from './latentAstronauts';
import { sailorsOfThePossibleWriting } from './sailorsOfThePossible';
import { sailorsOfTheLatentMultiverseWriting } from './sailorsOfTheLatentMultiverse';
import { aWarningWriting } from './aWarning';

export {
  technoFeudalismWriting,
  wargamingAiAlignmentWriting,
  aiDataEconomyWriting,
  latentAstronautsWriting,
  sailorsOfThePossibleWriting,
  sailorsOfTheLatentMultiverseWriting,
  aWarningWriting,
};

export const writings: Writing[] = [
  technoFeudalismWriting,
  wargamingAiAlignmentWriting,
  aiDataEconomyWriting,
  latentAstronautsWriting,
  sailorsOfThePossibleWriting,
  sailorsOfTheLatentMultiverseWriting,
  aWarningWriting,
];

export const newestWritings: Writing[] = [...writings].sort(
  (a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
);

export const popularWritings: Writing[] = [...writings].sort(
  (a, b) => b.views - a.views
);
