import type { Writing } from '../types';

export const sailorsOfThePossibleWriting: Writing = {
  title: "Sailors of the Possible",
  detailTitle: "Sailors of the Possible",
  excerpt: "Generated worlds, human explorers, and mining the multiverse for things worth bringing home",
  slug: "sailors-of-the-possible",
  publicationDate: "September 10, 2026",
  views: 984200,
  series: {
    name: "The Latent Multiverse",
    part: 2,
    totalParts: 3,
    prevSlug: "latent-astronauts",
    prevTitle: "The Latent Astronauts",
    nextSlug: "sailors-of-the-latent-multiverse",
    nextTitle: "Sailors of the Latent Multiverse"
  },
  content: `> Generated worlds, human explorers, and mining the multiverse for things worth bringing home.

---

## Nobody put the seahorses there

When computers first drew the Mandelbrot set around 1980, the rule behind it could fit on a napkin. Pick a point on a plane and treat it as a number. Start with zero, square it, and add your number. Then square the result and add your number again, over and over. If the result never runs off toward infinity, the point belongs to the set. That is the whole recipe. Yet as mathematicians zoomed into the edge of the shape it produces, they found spiraling tails, branching filaments, and miniature versions of the entire set nested inside it without end. One region, crowded with curls, is still called Seahorse Valley.

Nobody designed the seahorses. They were implied by the rule from the start, waiting at a particular address. The people who first saw them did what explorers have always done: they went somewhere, found something, and named it.

One detail in that story matters enormously. In the Mandelbrot set, the location and the parameter are the same thing. A point's coordinates are the number you feed into the formula. Choosing where to look means choosing the input, and choosing the input means going somewhere.

Now scale that up from a fractal to a universe. Suppose an AI system can take a set of starting parameters and unfold a complete, explorable world from them. The parameters might be a seed number, a sentence, an image, or a list of physical constants. Those parameters are coordinates too. Each setting is an address in an unimaginably vast space of possible worlds. The screen or headset that shows you one of them starts to look less like a game and more like a window. Push far enough and the technology becomes hard to distinguish from a portal: a way to look into other universes, send probes through, walk around, and come back with whatever you find.

[[SEAHORSE_VALLEY]]

I think this idea is more right than it first sounds. It is missing one crucial piece, which I'll come to. And it points toward what could become one of the great human occupations of this century. That occupation is prospecting a fog-covered multiverse of generated worlds for new tools, designs, and understanding, then carrying them back to the one universe where they can actually be used.

## The seed is the address

Game designers have been building universes out of coordinates for decades. No Man's Sky contains roughly 18 quintillion planets, and none of them need to be stored anywhere. Each is computed on demand from the game's rules and its location, so anyone who travels to the same spot finds the same mountains, oceans, and creatures. In Minecraft, entering a seed unfolds an identical world for everyone who uses it, which is why players trade seeds like directions.

In one remarkable episode, a group of players pooled their home computers to identify, among quintillions of possible seeds, the single world that matched a small, blurry screenshot that had shipped with an early version of the game. They succeeded. That was astronomy in its purest form: a faint image, a vast sky of possibilities, and a hunt for the place where the picture was taken.

This has a strange philosophical consequence. A seeded world isn't really created when the program runs. It is fully specified in advance by the rules and the seed, just as every digit of pi is fixed before anyone calculates it. Running the program doesn't bring the world into existence so much as look it up.

AI is widening what a seed can specify. By 2025, Google DeepMind's Genie 3 could turn a line of text into an interactive world, generated in real time, that a person or an AI agent could move through for a few minutes. Systems like that are early and imperfect, but nothing says the parameters of future worlds must stop at landscapes and weather. They could include the strength of gravity, the speed of light, the rules of chemistry, the number of dimensions. At that point the address space is no longer a map of places. It is a map of possible physics.

Philosophers got here first. Leibniz pictured God surveying infinitely many possible worlds and choosing one to make real. David Lewis argued that all possible worlds are equally real, and that "actual" just means "the one we happen to be in." The physicist Max Tegmark has proposed that every mathematical structure exists physically. If anything like this is true, a world generator doesn't invent universes. It tunes into them, like a radio finding stations that were broadcasting all along. And if it isn't true, that matters less than you might think, because of a basic fact about every exploration humans have ever undertaken.

## Every telescope is already a screen

No one has ever seen a distant galaxy directly. The James Webb Space Telescope collects infrared light our eyes can't detect and converts it into numbers. It sends those numbers to Earth, where they are mapped onto visible colors. The Mars rovers don't show us Mars either. They transmit data, usually relayed through orbiting spacecraft, which computers assemble into pictures. Even ordinary vision works this way. Your brain never touches the world. It receives electrical signals and constructs a model of what probably caused them.

Real exploration, in other words, is a chain: a world, a sensor, a stream of data, a rendering on a display. Exploring a generated world is the same chain with a virtual sensor. At the screen, the two are identical. A pixel carries no label saying where it came from.

This is why the progression from screens to headsets maps so neatly onto the history of space exploration. A flat screen showing a generated world is a telescope. An AI agent dropped into that world, sending back footage and measurements, is a robotic probe. It plays the role of the Surveyor landers NASA sent to confirm that the Moon's surface would hold a spacecraft before any astronaut went. A virtual reality headset that puts a human body inside the scene is the crewed landing. DeepMind has explicitly described its world models as training grounds for AI agents, so in a primitive sense the probes are already launching.

If the interface can't tell a real world from a generated one, what can? Philip K. Dick offered the best test I know: *"Reality is that which, when you stop believing in it, doesn't go away."* A place is real to an explorer when it pushes back. It stays put when you look away, gives the same answer to everyone who asks, and can surprise you. Above all, it can tell you no.

A well-built generated world passes. The Mandelbrot set looks the same to every visitor, and it astonished the very people who knew its formula. John Conway invented the Game of Life, a grid universe governed by a handful of rules. He suspected that no pattern in it could grow forever, and offered a small cash prize to anyone who could settle the question. Soon afterward a team at MIT found the glider gun, a pattern that fires an endless stream of moving shapes. Conway's own universe had told its creator no.

What fails is a world that bends to your wishes. Generative systems have often behaved more like dreams than places: turn around and the room has quietly rearranged itself; expect a waterfall and one appears. A world that gives you what you expect can't teach you anything, because it only reflects you back. Learned models also drift toward the familiar; a system trained on footage of Earth dreams in Earth's accent.

So the engineering goal that matters most is stubbornness: worlds as rich as dreams and as lawful as physics. Those worlds will probably come from pairing learned models with explicit rules that can't be sweet-talked. To the degree we manage that, the difference between a generated universe and a glimpse through a portal really does begin to dissolve.

## Known rules, unknown consequences

Here is the obvious objection. An AI-generated world comes from a model trained on data from our universe. How could anything genuinely new be inside it?

The answer is one of the most underrated facts in science: knowing the rules is not the same as knowing their consequences. In 1929 the physicist Paul Dirac observed that the laws underlying all of chemistry were already completely known. The only trouble was that the equations were far too complicated to solve. Much of the chemistry and materials science of the following century explored the consequences of laws written down before the Great Depression. Every battery and semiconductor invented since was implicit in those equations. Someone still had to find it.

Stephen Wolfram named this gap computational irreducibility. For many systems there is no shortcut to knowing what they will do; you have to run the process and watch. That is exactly why a fog of war hangs over worlds whose rules we fully understand. The map is already determined, but it stays dark until someone computes it. In these worlds, computation is the travel itself, and processing power is the rocket fuel. Like rocket fuel, it is expensive, which is why knowing where to go matters so much.

We have already seen what happens when explorers push into unvisited regions of a space with known rules. Go has been played for thousands of years, and its rules fit on an index card. In 2016, in its second game against Lee Sedol, DeepMind's AlphaGo played a move so strange that many commentators took it for a mistake. The program itself estimated that a human would choose it about one time in ten thousand. Move 37 was brilliant. Generations of players had simply never traveled to that part of the board.

The story didn't end with the machine's victory. A 2023 study of millions of professional moves found that human play improved markedly after AlphaGo appeared. The improvement came with humans playing more novel moves. Explorers had gone somewhere new, and people carried the discoveries home.

Science is following the same pattern. AlphaFold predicted structures for more than 200 million proteins. In 2025, AlphaEvolve found a way to multiply four-by-four matrices of complex numbers using 48 multiplications instead of 49, improving on a method that had stood since 1969. Neither result required new laws of nature, only a trip to where no one had been. That is the first and largest category of treasure in the generated multiverse: not alien physics, but the unexplored consequences of our own.

## Souvenirs from stranger places

But what about worlds whose laws differ from ours? Surely anything that depends on those laws won't work back home.

History suggests that is too pessimistic. For about two thousand years, mathematicians tried to prove Euclid's parallel postulate. It says that through a point not on a given line, exactly one line can be drawn that never meets it. In the nineteenth century Lobachevsky, Bolyai, and Riemann asked what happens if you abandon it. They found entire consistent geometries in which space curves and a triangle's angles no longer add up to 180 degrees. For decades this looked like a tour of an imaginary country. Then Einstein needed a mathematics of curved space to describe gravity, and Riemann's geometry was waiting for him. The foreign world described home more accurately than the geometry everyone had assumed.

The "imaginary" numbers that Renaissance mathematicians treated as useful nonsense made a similar journey. They now sit at the heart of quantum mechanics.

Other worlds teach by contrast. The Game of Life has physics nothing like ours, yet it contains moving objects, factories that build other objects, patterns that copy themselves, and even universal computers. No object ever came back from that universe, but an idea did: complexity, computation, and something like reproduction can arise from almost nothing.

Physicists take similar trips on paper. In 2006 a team of theorists imagined a universe with the weak nuclear force removed entirely. They concluded that, with a few other constants adjusted, it could still form stars, forge elements, and support chemistry. That visit taught us something about our own universe: which of its features are essential for a habitable cosmos and which are just how things happened to turn out.

Robotics offers the most literal version. In 2019 OpenAI trained a robot hand to solve a Rubik's Cube, and it didn't train in one simulated world. It trained across an ever-shifting crowd of them, with friction, mass, cube size, and other properties randomized again and again. The goal was for reality to look like just one more variation. The robot learned to live in our universe by growing up in many.

Some souvenirs travel inside people. Einstein's breakthroughs began as expeditions into imagined worlds: what would you see riding alongside a beam of light, or falling freely inside a closed box? Generated worlds are thought experiments that other people can walk into. Researchers at MIT built a game, A Slower Speed of Light, in which light slows down as you play until relativity's distortions become visible to the naked eye. Hyperbolica lets players stroll through curved space. A physicist who has spent a hundred hours living in four dimensions may bring back something no dataset can hold: intuition. Probes return with measurements. Only people return with changed minds.

## Fool's gold and the assay office

Every gold rush produces more pyrite than gold. Generated worlds will not be short of treasure; they will be flooded with things that look like treasure.

A learned world model is not an equation solver. It has absorbed patterns, and patterns can be convincing without being correct. In 2025, researchers trained an AI model on planetary orbits and found it predicted them extremely well. But when they probed the law of gravity it had implicitly learned, they found a patchwork of shortcuts rather than Newton. A world rendered by a system like that could look perfectly physical while being quietly, systematically wrong. Explorers might return with a gorgeous engine design that only worked because the simulated friction was too forgiving.

Even careful computational discovery needs scrutiny. When DeepMind announced hundreds of thousands of predicted stable crystals through its GNoME project, some materials scientists questioned how many were genuinely novel or useful. Roboticists call the general problem the sim-to-real gap, and every serious explorer will have to learn to respect it.

So the most important building in the prospecting town won't be the saloon. It will be the assay office, where ore gets tested before anyone pays for it. Here that means proof checkers for mathematics, rigorous physics simulators, and robotic labs that synthesize and test new materials. Last comes the old-fashioned experiment, performed in the one universe we can't regenerate.

[[ASSAY_OFFICE]]

This is the missing piece, and here is the twist: it doesn't break the portal analogy. Imagine a true portal into a parallel universe with slightly different constants. A superconductor found there might not superconduct here; a medicine in their chemistry might be a poison in ours. A real interdimensional trader would need an assay office just as badly. Verification comes with any trade between worlds, generated or otherwise.

Seen from the explorer's chair, a lawful generated world and a real parallel universe are the same kind of thing: an independent source of information that must be checked before it is trusted. What makes a generated universe valuable, then, is lawfulness. Its rules must hold firmly enough that the only remaining question is how well they match ours.

That also tells us which treasures travel well:

• **Mathematical truths travel perfectly.** A theorem proven anywhere is proven everywhere, and a computer can check the proof.
• **Algorithms travel whenever their problem exists on both sides.** That is why better ways to multiply matrices or play Go come straight home.
• **Designs, materials, and molecules travel only as well as the simulated physics matched ours.** They must be tested.
• **Laws of physics never travel directly.** A law found in a generated world arrives here as a hypothesis for our telescopes and colliders to judge.
• **Intuitions travel inside the explorers.** The only test is whether they help people think better.

Cosmologists already run the physics case in reverse. The CAMELS project generates thousands of simulated universes with different settings. Researchers use them to learn how to read our universe's true settings from the real sky, which amounts to searching the multiverse for the coordinates of home.

The physicist David Deutsch argues that knowledge grows through conjecture and criticism, bold guesses harshly tested. In those terms, the generated multiverse is the most powerful conjecture engine ever built, and our universe is the final critic. The multiverse proposes; reality disposes.

The border will need customs officers as well as assayers. Nick Bostrom has compared invention to drawing balls from an urn: most are beneficial, but a rare few could be catastrophic. Mining the multiverse means reaching into that urn faster than ever before.

## Mapping the fog

If AI agents can scout ten thousand worlds in the time a person explores one, why would humans be involved at all?

The answer lies in the shape of the space. Jorge Luis Borges imagined a library that holds every possible book. Somewhere on its shelves are the true story of every life and an accurate account of the future. Yet the library is nearly useless, because every meaningful sentence drowns in oceans of gibberish, and its librarians wander for lifetimes without finding anything. The generated multiverse is Borges's library with physics. Nearly every random world is barren, just as nearly every random chain of amino acids folds into nothing useful. Generating worlds is cheap. Finding the ones worth visiting is the whole problem.

That makes navigation the scarce skill, and navigation depends on a sense of what is interesting. This is hard to automate, because important discoveries often lie beyond paths that no objective would recommend. The AI researchers Kenneth Stanley and Joel Lehman saw this in Picbreeder, an online experiment where people evolved images by choosing which ones would "breed." Stanley arrived at a picture of a car by way of a picture of an alien face; no one searching for a car would have started there. Their conclusion was that ambitious discoveries usually can't be reached by aiming straight at them. You collect interesting stepping stones and see where they lead.

Serendipity works the same way. Arno Penzias and Robert Wilson spent months fighting a faint hiss in their radio antenna, at one point evicting the pigeons nesting inside it. Eventually they realized they were hearing the afterglow of the Big Bang. A system optimizing for its assigned task files that under noise. A curious person asks what it is.

Treasure is also defined by human needs, so humans have to help decide what counts. There is precedent for amateurs doing real science in virtual spaces. In 2011, players of Foldit, a protein-folding puzzle game, helped crack the structure of a viral enzyme that had stumped researchers for over a decade, and they did it within weeks. Humanity already spends billions of hours exploring virtual worlds for fun. It isn't hard to imagine a meaningful share of that time becoming expeditions, with the entertainment economy gradually shading into a discovery economy.

The division of labor will probably resemble modern space science. Agents will do the vast survey work, charting millions of worlds and flagging anomalies. AI trained on human notions of what's interesting will help steer them, an approach researchers are already testing. Human explorers will go where the flags cluster, bringing judgment, taste, and the wandering attention that notices what no one was looking for.

Picture an ordinary afternoon a few decades from now. A materials engineer puts on a headset and loads coordinates that a survey agent flagged overnight. It is a world running our physics faithfully, seeded with a mix of elements nobody has tried. She walks through a forest of crystal growth at a scale where atoms are the size of marbles. She notices a lattice flexing in a way it shouldn't, and tags it. By evening, a robotic lab on another continent is trying to make it. Most days, nothing survives the assay. Some days, something does.

A culture will grow around that work. Coordinates will be traded and hoarded like treasure maps. Guilds will specialize in regions of parameter space. People will fight over whether anyone can own a discovery made at an address anyone could have typed. There will be famous places, the way Seahorse Valley is famous. There will be legends of worlds whose coordinates were lost, like the old prospectors' tales of the Lost Dutchman's Mine.

There will be harder questions, too. The prospectors of the California Gold Rush didn't ask whether the land was empty, and the people already living there paid a terrible price. Generated worlds may someday grow rich enough to contain something like minds. Then explorers will face that question again in a stranger form: is this place empty, or is someone home?

## The return

A familiar failure mode waits at the edge of all this. In 1974 the philosopher Robert Nozick asked whether you would plug into an "experience machine" that could give you any life you wanted, indistinguishable from reality. Most people say no; they want their lives to touch the actual world. But handed infinite worlds, some will choose the machine anyway. They will become tourists who never come back, settled into universes tuned to flatter them.

An explorer is defined less by how far they go than by what they bring back. Joseph Campbell found the same shape in hero myths across the world. The hero leaves ordinary life, endures an ordeal in a realm of wonders, and returns bearing a gift that renews the world left behind. The return is the point. An astronaut who reaches the Moon and never comes home is a tragedy, not a mission.

Here the portal made of parameters reveals its hidden advantage. A science-fiction portal might let us haul back matter: exotic elements, alien machines. A generated world can send back only information. But consider what our universe actually lacks. It isn't atoms. Every atom needed for a working fusion reactor, or for a medicine not yet invented, is already here. What's missing are the arrangements: the designs, recipes, proofs, and ideas.

The steam engine required no new matter, only a new idea about arranging iron, water, and fire. Deutsch makes a version of this point too, arguing that anything the laws of physics permit can be achieved given the right knowledge. Innovation has always been information. A portal that carries only information carries the one thing that was ever truly scarce.

After the 1890 census, the superintendent of the U.S. Census declared that the American frontier line no longer existed. Frederick Jackson Turner soon built a famous argument around what a nation shaped by its frontier would become without one. The frontier of generated worlds can't close like that. The space of possible universes is effectively infinite, and every map we draw reveals more darkness at its edges. The fog lifts only where someone goes, and there will always be more fog.

The word astronaut means "star sailor." The people who explore generated worlds will be sailing through something larger than space: the whole range of what could be. Most voyages will return empty. Some will return with fool's gold. A few will come back carrying a proof, a molecule, a strategy, or a new way of seeing. Each will have been found in a universe that exists only as an address, and made real in the one universe where it can matter. Nobody will have put those treasures there, any more than anyone put the seahorses in the Mandelbrot set. But somebody will still have to go and find them.`,
};
