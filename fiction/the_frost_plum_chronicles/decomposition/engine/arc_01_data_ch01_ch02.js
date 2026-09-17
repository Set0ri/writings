/**
 * Arc 01 Decomposition Data: Chapters 01 & 02
 * Tripartite Leaf Nodes (Interactions, Actions, Environment)
 * Multi-Model Council Variants (Sanderson/Gosu, Rothfuss/Inoue, Biga/Studio LICO)
 */

const ch01Data = {
  id: 'chapter_01_the_broken_meridian',
  title: 'The Broken Meridian',
  order: 1,
  scenes: [
    {
      id: 'scene_01_kurukshetra_hesitation',
      title: 'The Duty of the Blade: Kurukshetra Hesitation',
      order: 1,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c1-s1-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The sky above Kurukshetra was pressurized to seven atmospheres of ozone and pulverized hematite. Below the chariot chassis, three million iron spears stood at uniform ten-degree forward angles, vibrating with the harmonic resonance of two hundred mechanized siege engines.',
              critique: 'Sanderson: Strong atmospheric pressure metrics and mechanical arrays, lacks the poetic dread of the flags.',
              score: { canon: 0.90, kinetics: 0.92, sensory: 0.82, feral: 0.75 }
            },
            {
              id: 'c1-s1-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The sky above the battlefield was the color of bruised iron. Across the plains of Kurukshetra, three million soldiers stood in iron ranks, their spears bristling like a forest of black needles against the ash-choked wind. But the sharpest blade twisting in my gut wasn’t the vanguard—it was their damn flags. Flapping in the hot wind were the crests of my own clan, childhood friends, sword-brothers I had shared wine with, all marching under the black banners of the Great Evil.',
              critique: 'Rothfuss: Perfect sensory resonance, visceral mourning, and clan betrayal imagery.',
              score: { canon: 0.96, kinetics: 0.88, sensory: 0.97, feral: 0.88 }
            },
            {
              id: 'c1-s1-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Three million idiots covered in tin plating stood in the dirt, kicking up so much yellow dust you could choke an ox. Black banners flapped everywhere like giant crow wings, each one sporting the crests of cousins who still owed me silver from the winter gambling dens.',
              critique: 'Biga: Hilarious irreverence and debt complaints, but slightly light on the cosmic tragedy of Kurukshetra.',
              score: { canon: 0.88, kinetics: 0.85, sensory: 0.85, feral: 0.96 }
            }
          ],
          winningProse: 'The sky above the battlefield was the color of bruised iron, pressurized with ozone and pulverized hematite that tasted like copper pennies on the tongue. Across the plains of Kurukshetra, three million soldiers stood in unbroken iron ranks, their spears bristling like a forest of black needles against the hot, ash-choked wind. But the sharpest blade twisting in my gut wasn’t the enemy vanguard—it was their damn flags. Flapping in the scorched gale were the crests of my own clan: cousins, childhood friends, disciples I had beaten black and blue with wooden practice swords until they could split waterfalls, now marching under the black banners of the Great Evil.',
          consensus: 'Passed with high distinction (S >= 0.85). Blends Inoue atmospheric dread with Sanderson systemic weight and Logan clan invariants.'
        },
        interactions: {
          candidates: [
            {
              id: 'c1-s1-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Beside me on the chariot, my elder brother grabbed my forearm, measuring my galvanic skin response. "Pulse is 140, Jin. Adrenaline is blunting your trigger finger. Dharma is a binary logic state: either you turn the brass key or the line collapses."',
              critique: 'Sanderson: Clean decision-tree logic, but strips the Kamina roaring fire and brotherly warmth.',
              score: { canon: 0.85, kinetics: 0.90, sensory: 0.78, feral: 0.76 }
            },
            {
              id: 'c1-s1-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Stop scowling like an old widow, Jin!" A heavy hand slammed between my shoulder blades. Beside me stood my elder brother. Blood was spattered across his jaw, his armor was half-shattered, but his eyes burned like twin suns. "Brother," I gritted out. "Half our kin are on that line." "I see \'em!" he barked, his grin widening with red teeth. "And when this is over, I\'ll smack every single one of them until their ears ring! But right now? They\'re standing before the blade. Believe in the blade, Jin! Fulfill your Dharma!"',
              critique: 'Rothfuss: Superb emotional heft, Kamina archetype captured with blazing conviction.',
              score: { canon: 0.97, kinetics: 0.92, sensory: 0.95, feral: 0.92 }
            },
            {
              id: 'c1-s1-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Smack! My brother nearly drove my spine out my belly button. "Jin! Stop making that ugly carp face! You look like you sat on a hedgehog! When we finish cutting these three million bastards down, I\'m making you buy the celebratory dumplings!"',
              critique: 'Biga: Great slapstick violence, needs the brass cylinder sacred gravity.',
              score: { canon: 0.88, kinetics: 0.84, sensory: 0.86, feral: 0.96 }
            }
          ],
          winningProse: '"Stop scowling like an old widow, Jin!" Smack! A heavy palm slammed into the center of my back, nearly knocking the breath from my lungs. Beside me on the gilded chariot stood my elder brother. He didn\'t look like a man about to die in the greatest slaughter the continent had ever seen. He was grinning. Blood was spattered across his jaw, his breastplate was half-shattered, and his white cloak was singed black, but his eyes burned like twin suns—an absolute, immovable mountain of unhinged confidence. "Look at them, Jin!" he roared, pointing his broadsword straight at the three-million-man army. "Look at the mess this world got itself into!" "Brother," I gritted through clenched teeth. "Half our kin are on that line. The kids we raised." "I see \'em!" he barked, teeth stained red. "And when this is over, I\'ll personally smack every single one across the back of the head until their ears ring! But right now? They\'re standing in front of the blade. When the world goes crazy, the man with the sword doesn\'t sit down and cry. He cuts through the storm! Believe in the blade!"',
          consensus: 'Passed with high distinction. Captures the unshakeable Kamina sun-weight and the tragic burden of Dharma.'
        },
        actions: {
          candidates: [
            {
              id: 'c1-s1-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'My thumb hovered over the secondary brass detent. The cylinder’s compression spring required forty-five Newtons of downward pressure. Across the dirt, the vanguard accelerated to six meters per second. My flexor pollicis locked; the biological impulse failed to cross the neuromuscular junction.',
              critique: 'Sanderson: Accurate biomechanical vector, needs the visceral scream of the boots.',
              score: { canon: 0.89, kinetics: 0.95, sensory: 0.84, feral: 0.80 }
            },
            {
              id: 'c1-s1-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'He grabbed my hand, slamming it down onto the freezing brass cylinder locked at my waist—the weapon capable of leveling the entire valley. The plains shuddered as three million boots began to march. My brother laughed—a glorious, barking sound that challenged thunder—and leaped off the chariot straight toward the incoming horde. My thumb touched the firing latch. My breath caught. My hand trembled. I... I can\'t.',
              critique: 'Rothfuss: Heart-stopping hesitation and tragic emotional crescendo.',
              score: { canon: 0.96, kinetics: 0.93, sensory: 0.96, feral: 0.90 }
            },
            {
              id: 'c1-s1-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'My brother kicked the chariot railing off, howling like a maniac, and dove into the spear-wall like a lunatic jumping into a cold bath. Down below, my fingers shook so hard on the brass latch I almost dropped the damn thing in the chariot grease.',
              critique: 'Biga: Punchy kinetic energy, lacks the terrible solemnity of the hesitation.',
              score: { canon: 0.87, kinetics: 0.88, sensory: 0.82, feral: 0.95 }
            }
          ],
          winningProse: 'He reached down, grabbing my hand and slamming it down onto the brass cylinder locked at my waist—the forbidden weapon capable of leveling the entire valley. "This is Dharma, Jin! Your duty as the blade! Don\'t look at their faces! Don\'t look away! When the time comes, you turn the key, you unleash the fire, and you believe in the blade! You hear me?!" The plains shuddered. Three million boots began to march, shaking the bedrock of the continent. My brother laughed—a loud, barking, glorious sound that challenged thunder itself—and leaped off the chariot straight toward the incoming horde. My fingers gripped the brass cylinder. The metal was freezing cold. Across the dirt, I saw the faces of the people I had sworn to protect, charging forward with bloodlust in their eyes. *Turn it,* my brother\'s voice echoed in my skull. *Do your duty!* My thumb touched the firing latch. My breath caught. My hand trembled. *I... I can\'t.*',
          consensus: 'Passed with high distinction. Masterful kinetic pacing and emotional cliffhanger leading into reincarnation.'
        }
      }
    },
    {
      id: 'scene_02_anchovy_awakening',
      title: 'The Anchovy Awakening: Southfall Mud & Two Centuries',
      order: 2,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c1-s2-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The room measured three by four meters, bounded by unhewn pine timber and dried coastal moss chinking. The ambient temperature was nine degrees Celsius, with heavy maritime humidity condensing along the roof slats.',
              critique: 'Sanderson: Precise dimensional layout, needs the foul odors and sensory texture.',
              score: { canon: 0.88, kinetics: 0.86, sensory: 0.80, feral: 0.72 }
            },
            {
              id: 'c1-s2-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Rain hammered against rotting pine planks with the rhythm of an annoying drum. The air smelled foul: rancid fish guts, damp red clay, and wet dog. Gray daylight seeped through the cracks in the wall, illuminating dust motes dancing over a straw pallet caked with old sweat and willow bark shavings.',
              critique: 'Rothfuss: Rich sensory desolation and acoustic grounding.',
              score: { canon: 0.95, kinetics: 0.88, sensory: 0.96, feral: 0.86 }
            },
            {
              id: 'c1-s2-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The hut smelled like someone had pickled a dead carp inside a dirty gym sock and left it by the fire. Water dripped from the ceiling right onto my forehead with a relentless *plop-plop-plop*, mocking my glorious grandmaster resurrection.',
              critique: 'Biga: Hilarious comedic misery, matches Chung Myung disgust.',
              score: { canon: 0.90, kinetics: 0.84, sensory: 0.91, feral: 0.96 }
            }
          ],
          winningProse: 'Rain hammered against rotting pine planks with the maddening rhythm of an out-of-tune war drum. The air smelled foul: rancid mackerel guts, damp red clay, and wet dog. I lay on a bed of scratchy, moldy straw, staring up at water dripping through moss-chinked roof beams. Gray coastal daylight leaked through the timber gaps, illuminating dust motes dancing over an earth floor beaten hard by decades of impoverished bare feet. *Did the Netherworld run out of budget? Where is the Sea of Fire? Why does the afterlife smell like spoiled fish?!*',
          consensus: 'Passed with high distinction. Combines Inoue atmospheric grit with Chung Myung comedic inner outrage.'
        },
        interactions: {
          candidates: [
            {
              id: 'c1-s2-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Jin-ah!" A woman knelt by the pallet. "You have been comatose for forty-eight hours following cranial trauma from a ten-foot descent." A man held a wooden bowl. "The Great War concluded 73,000 days ago. The Heaven\'s Blade Clan exists only as an extinct taxonomic entry in folklore."',
              critique: 'Sanderson: Clinical and robotic dialogue, misses human maternal warmth and Jin\'s fury.',
              score: { canon: 0.86, kinetics: 0.84, sensory: 0.75, feral: 0.75 }
            },
            {
              id: 'c1-s2-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Jin-ah! Oh, thank the ancestors, you\'re alive!" A thin woman in a faded hemp tunic buried her wet face against my collarbone. Behind her, a broad-shouldered hunter with raw knuckles sank to his knees, his eyes brimming with tears. "The Great War, Jin? That ended two hundred years ago. The old dynasties collapsed into the sea. Nobody cares about ancient sword-clans anymore. You can\'t eat a sword."',
              critique: 'Rothfuss: Heartbreaking domestic warmth and historical melancholy.',
              score: { canon: 0.96, kinetics: 0.88, sensory: 0.95, feral: 0.86 }
            },
            {
              id: 'c1-s2-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Bandits?! Heretics?!" My left eye twitched until my cheek ached. "Those ungrateful, rotten, brain-dead bastards! We bled on the plains so their great-grandfathers could pick their noses in peace, and they call us bedtime monsters?! Just wait. When I find the historian who wrote that, I\'m beating him with an oak stick until he can\'t sit for a month!"',
              critique: 'Biga: Unbeatable Mount Hua feral rage and stick-beating vows.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.88, feral: 0.98 }
            }
          ],
          winningProse: '"Jin-ah! Oh, thank the ancestors, you\'re alive!" A woman dropped to her knees beside my straw pallet, burying her wet face against my collarbone. Behind her stood a broad-shouldered man in a patched linen shirt, holding a steaming bowl of willow-bark broth. His knees visibly buckled in relief. "You reckless little bastard," he choked out, half-laughing, half-sobbing. "Two days! What were you doing tumbling off the rocky bluff chasing a stray goat?!" A wave of foreign memories crashed into my skull: *Fifteen years old. Southfall Village. Cause of death: slipped on wet moss chasing a goat.* My left eye began twitching violently. "Father," I croaked. "The Great War. The Heaven\'s Blade Clan... where are they?" Daesung looked at me with pity. "The Great War ended two hundred years ago, Jin. The old dynasties tore each other apart. The stories say the Heaven\'s Blade Clan were wiped out, or turned into bloodthirsty bandits and heretics before the wild swallowed them." My eye twitched harder. *Bandits? Heretics?! Those ungrateful, rotten bastards! When I find whoever wrote those history books, I\'m going to beat them with a wooden stick until they can\'t sit for a month!*',
          consensus: 'Passed with high distinction. Perfectly integrates Logan\'s 200-year revelation with Chung Myung comedic pride.'
        },
        actions: {
          candidates: [
            {
              id: 'c1-s2-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I attempted to rotate the glenohumeral joint. The fifth and sixth ribs radiated acute pain, indicating a thirty percent reduction in structural integrity. My forearm diameter was 4.2 centimeters. Muscular atrophy was severe; force generation was negligible.',
              critique: 'Sanderson: Strong biomechanical diagnostics, lacks the hilarious squawking.',
              score: { canon: 0.88, kinetics: 0.95, sensory: 0.82, feral: 0.80 }
            },
            {
              id: 'c1-s2-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'My hand whipped toward my hip to draw my sword. Crack. Blinding pain shot through my ribs, and my arm flopped uselessly to my side. I raised a trembling hand to my face. The fingers were pale, scrawny, and completely devoid of sword calluses—the hands of a sickly child.',
              critique: 'Rothfuss: Evocative physical fragility and sensory shock.',
              score: { canon: 0.94, kinetics: 0.90, sensory: 0.94, feral: 0.86 }
            },
            {
              id: 'c1-s2-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"GAAAH!" The sound that flew out of my throat was a strangled squawk, like a wet chicken being stepped on by an ox. "What is this?! Chopsticks?! I have chopsticks for arms?! Where are my forearms?! Where are my damn muscles?!"',
              critique: 'Biga: Hilarious anchovy despair and physical slapstick.',
              score: { canon: 0.92, kinetics: 0.88, sensory: 0.89, feral: 0.97 }
            }
          ],
          winningProse: 'My hand instinctively whipped toward my hip, reaching for the hilt of my sword to decapitate whoever dared slap the Divine Dragon of Mount Hua—*CRACK.* A blinding, agonizing pain shot straight through my fifth rib. My arm flopped uselessly to my side, twitching like a dying eel. "Ow, ow, OW! What the hell?!" Instead of a terrifying war-cry that could shatter castle gates, the sound that flew out of my mouth was a strangled squawk, like a wet chicken being stepped on by an ox. I raised a trembling hand before my nose. The wrist was a toothpick. The fingers were pale, scrawny, and devoid of sword calluses. "Chopsticks?" I muttered in pure horror. "I have chopsticks for arms?! Where are my forearms?! Where are my muscles?!" I collapsed back into the straw, grinding my teeth. *Damn you, Samsara. When I die again, I\'m punching the King of Hell right in the teeth.*',
          consensus: 'Passed with high distinction. Sublime kinetic slapstick grounded in biological reality.'
        }
      }
    },
    {
      id: 'scene_03_bao_extortion',
      title: 'The Feral Grin: Cousin Bao & The Four-Finger Clamp',
      order: 3,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c1-s3-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The door unlatched under forty kilograms of shear force. The intruder tracked approximately two kilograms of moist red clay across the dry floorboards, introducing high levels of particulate grit.',
              critique: 'Sanderson: Too mechanical, misses the greasy lard smell and rain gust.',
              score: { canon: 0.86, kinetics: 0.91, sensory: 0.79, feral: 0.74 }
            },
            {
              id: 'c1-s3-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'A gust of cold, muddy wind blasted through the open threshold, smelling of pig lard, wet wool, and old iron. Red clay smeared the clean floor where heavy boots stomped, and the fire in the stone hearth flickered violently against the sudden draft.',
              critique: 'Rothfuss: Atmospheric and tactile, sets up the hostile intrusion well.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.95, feral: 0.85 }
            },
            {
              id: 'c1-s3-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'KABAM. The door banged flat against the clay wall, vibrating the entire shack. In barged a round, greasy teenager who looked like he had been dipped in pig fat, trailing mud everywhere like a wandering buffalo.',
              critique: 'Biga: Great comedic punchiness and caricatured bully entrance.',
              score: { canon: 0.91, kinetics: 0.86, sensory: 0.89, feral: 0.96 }
            }
          ],
          winningProse: '*KABAM.* The wooden door slammed open so hard the leather hinges groaned, smacking flat against the clay wall. A blast of muddy wind blew into the shack, thick with the stench of pig lard, wet wool, and cold clay. Standing in the threshold was a thick, round-faced youth about sixteen, wearing a heavy leather vest that smelled of grease, his boots tracking thick red mud across our clean dirt floor. Behind him loomed two older lackeys leaning on rusted hunting spears, smirking like hyenas in a melon patch.',
          consensus: 'Passed with high distinction. Crisp sensory intrusion establishing Bao\'s obnoxious entrance.'
        },
        interactions: {
          candidates: [
            {
              id: 'c1-s3-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Uncle Daesung, report to the ditch," Bao stated. "Failure to comply results in a twenty-percent ration reduction." Jin calculated the stress vectors: Daesung’s submission was driven by filial conditioning, not lack of physical strength.',
              critique: 'Sanderson: Analytical and clear, lacks the feral banter.',
              score: { canon: 0.88, kinetics: 0.88, sensory: 0.80, feral: 0.78 }
            },
            {
              id: 'c1-s3-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Next time you wander past the boundary wall, cousin," Bao hissed, leaning over my bed, "make sure you land on your throat. Save the village the grain of feeding another useless cripple." I didn\'t flinch. I looked at his collar, spotting the dark, purplish bruise shaped like four crushing adult fingers. "You talk an awful lot, little cousin," I whispered, "for a pig already bruised for the butcher."',
              critique: 'Rothfuss: Superb tension and psychological deduction.',
              score: { canon: 0.96, kinetics: 0.90, sensory: 0.95, feral: 0.91 }
            },
            {
              id: 'c1-s3-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'A slow, deranged grin spread across my bruised face—the classic Mount Hua wolf-smile that made grown martial grandmasters wet their silk robes. "Get your muddy boots off my floor before I rip your ears off and feed them to the iron-jaw wolves." Bao\'s face turned the color of curdled tofu.',
              critique: 'Biga: Unbeatable Chung Myung intimidation and curdled tofu similes.',
              score: { canon: 0.95, kinetics: 0.88, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: '"Well, look at that," Bao sneered, kicking my mother\'s wash basin aside with a wet clatter. "The dead boy woke up. Uncle Daesung, my father wants to know why you\'re sitting around gossiping. The south defense ditch isn\'t digging itself. Report to the palisade or my father cuts your ration markers." Daesung set his wooden bowl down, his broad shoulders curling forward in quiet submission: "I am coming, Bao. I will take the double shift." Bao sneered, then leaned over my straw mat: "Next time you fall, cousin, make sure you land on your throat. Save the village the grain." As he leaned in, my sharp eyes caught something beneath his collar: a dark, purplish bruise shaped like the crushing clamp of four adult fingers. *Oho. The little pig gets choked at home by his dear Sector Chief father, and comes here to play big tiger?* A slow, wide, completely unhinged grin spread across my bruised face. "You know, little cousin," I whispered, voice dripping with honeyed venom, "you talk an awful lot for a pig that\'s already been bruised for the butcher. Get your muddy boots off my floor before I rip your ears off and feed them to the iron-jaw wolves."',
          consensus: 'Passed with high distinction. Masterful balance of filial heartbreak, detective deduction, and feral comedy.'
        },
        actions: {
          candidates: [
            {
              id: 'c1-s3-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Bao\'s center of gravity shifted rearward by fifteen centimeters. His boots snagged on his hem; friction coefficients failed and he stumbled into the hearth perimeter before retreating at three meters per second.',
              critique: 'Sanderson: Clean kinematic description, lacks the comedic squeak.',
              score: { canon: 0.88, kinetics: 0.94, sensory: 0.81, feral: 0.79 }
            },
            {
              id: 'c1-s3-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Bao took an involuntary step back, clutching his throat where the bruised flesh burned. His bravado vanished like mist in a sudden draft. He turned and fled into the rain, his lackeys scrambling behind him as if the dead had reached up through the floorboards.',
              critique: 'Rothfuss: Atmospheric retreat, needs more slapstick dramatic collapse.',
              score: { canon: 0.94, kinetics: 0.90, sensory: 0.94, feral: 0.87 }
            },
            {
              id: 'c1-s3-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Y-You\'re crazy!" Bao squeaked, voice cracking into a panicked shriek as he tripped over his own feet, nearly face-planting into the fire pit. He bolted into the rain. The second the door clicked shut, I collapsed like a deflated bladder: "Ahhh! My ribs! Father, bring more soup! Your son is wasting away!"',
              critique: 'Biga: Golden comedic timing and dramatic moaning for soup.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: 'Bao took an involuntary step back, his boots tangling in his coat hem so violently he nearly tumbled backward into the stone fire pit. His skin turned the color of curdled milk. Every primal instinct in his hindbrain screamed that if he took one more step toward that bed, he was going to die. "Y-You\'re crazy," Bao squeaked, voice cracking into a panicked shriek. He bolted into the rain, shoving his two lackeys out of the way. Daesung stood by the door, dumbfounded. "Jin... what was that?" "Nothing, Father!" I said cheerfully, collapsing back into the straw with a dramatic wail. "Ahhh! My ribs! My back! Father, bring me more soup! Your son is wasting away!" Daesung shook his head and grabbed his shovel. Deep in my chest, past rusted meridians and cracked bones, a tiny violet ember stirred to life: the Plum Blossom Sword Heart. *Just you wait, world. I\'m dragging this sect back from the grave by its hair.*',
          consensus: 'Passed with high distinction. Flawless comedic reset followed by the sacred martial oath.'
        }
      }
    }
  ]
};

const ch02Data = {
  id: 'chapter_02_the_spirit_spring',
  title: 'The Spirit Spring',
  order: 2,
  scenes: [
    {
      id: 'scene_01_dirt_and_dew',
      title: 'Eating Dirt & The Gentle Breath of the Morning Dew',
      order: 1,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c2-s1-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The soil beneath my palms was composed of silt and decomposed volcanic tuff. A bowl of aqueous marsh solution with three dehydrated minnows rested on the earthen floor, emitting minimal caloric heat.',
              critique: 'Sanderson: Sterile composition, misses the cold salt and damp hearth smell.',
              score: { canon: 0.87, kinetics: 0.88, sensory: 0.79, feral: 0.72 }
            },
            {
              id: 'c2-s1-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The packed dirt of the cabin floor was cold and smelled of damp earth and old ash. Outside, the morning mist was heavy with the briny tang of sea spray and woodsmoke. Between us sat a rough clay bowl: pale broth with three dried minnows floating among boiled marsh-weed, their silver scales catching the gray dawn.',
              critique: 'Rothfuss: Lyrical sensory grounding and domestic stillness.',
              score: { canon: 0.96, kinetics: 0.89, sensory: 0.97, feral: 0.84 }
            },
            {
              id: 'c2-s1-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'My face was glued to the cold dirt floor. The soup smelled like someone had rinsed muddy river grass in pond water and tossed in three minnows that looked like they died of depression.',
              critique: 'Biga: Hilarious food description, perfectly captures Chung Myung dissatisfaction.',
              score: { canon: 0.91, kinetics: 0.85, sensory: 0.89, feral: 0.96 }
            }
          ],
          winningProse: 'The first law of martial arts is simple: a sword cannot cut without an arm behind it. And right now, my arm belonged to a fifteen-year-old who got winded pulling up his trousers. The packed dirt of the floor was freezing, smelling of damp earth, old chimney ash, and dried river reeds. Between my straw mat and the door sat a chipped clay bowl: pale, watery broth where three shriveled minnows floated among strips of boiled marsh-weed, traded at the wharf for our household\'s precious evening salt.',
          consensus: 'Passed with high distinction. Evocative sensory contrast between former grandmaster dignity and squalid reality.'
        },
        interactions: {
          candidates: [
            {
              id: 'c2-s1-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Jin, why are you on the ground?" Yeon queried. "I was conducting isometric load testing, Mother." "You are consuming dirt. Drink this protein broth; it will accelerate osteoblast synthesis."',
              critique: 'Sanderson: Too anachronistically clinical.',
              score: { canon: 0.84, kinetics: 0.89, sensory: 0.76, feral: 0.75 }
            },
            {
              id: 'c2-s1-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Jin? What are you doing on the floor?!" My mother dropped to her knees, hauling me back onto the straw like a bundle of dry hemp. "I was... meditating, Mother," I wheezed. "You were eating dirt," Yeon said softly, wiping mud from my chin with her sleeve. She pressed the wooden spoon into my fingers. "Drink it, Jin. Your father traded our evening salt ration for those minnows so your ribs would knit."',
              critique: 'Rothfuss: Deeply touching maternal tenderness and unvarnished truth.',
              score: { canon: 0.97, kinetics: 0.89, sensory: 0.96, feral: 0.88 }
            },
            {
              id: 'c2-s1-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Meditating!" I squawked, coughing out a mouthful of dirt. "A martial grandmaster is communing with the earth!" "You look like a dead flounder," Mother said, shoving a wooden spoon into my face. "Drink the fish water before I smack your ear."',
              critique: 'Biga: Great comedy, slightly too disrespectful toward gentle Yeon.',
              score: { canon: 0.89, kinetics: 0.86, sensory: 0.87, feral: 0.96 }
            }
          ],
          winningProse: '"Jin? What in the world are you doing on the floor?!" The door swung open and Yeon hurried inside, dropping her willow basket and hauling me back onto the straw mat as if I were a sack of parched grain. "I was... meditating, Mother," I wheezed, trying to maintain some shred of grandmaster dignity. "You were eating dirt," Yeon said bluntly, wiping a smear of red clay from my chin with her sleeve. "Lie still. The bone behind your ear is tender." She pressed a wooden spoon into my fingers. "Eat. Your father traded our evening salt ration at the south wharf to get those minnows." My hand stopped halfway to the bowl. In a frontier outpost like Southfall, salt wasn\'t seasoning—it was currency. "He traded the salt?" "He cares more about your ribs knitting than salt in a barrel. He took the double watch at the trench today so Sector Chief Kang wouldn\'t mark down our household."',
          consensus: 'Passed with high distinction. Perfectly grounds Daesung\'s sacrifice and maternal devotion.'
        },
        actions: {
          candidates: [
            {
              id: 'c2-s1-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I attempted a second push-up. The pectoralis major spasmed at fifteen percent maximal contraction; a tendon in the carpal tunnel popped with a shear strain of twelve megapascals. My sternum struck the clay.',
              critique: 'Sanderson: Exceptional biomechanical failure modeling.',
              score: { canon: 0.91, kinetics: 0.96, sensory: 0.82, feral: 0.81 }
            },
            {
              id: 'c2-s1-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I swallowed the broth in four gulps. It tasted of bitter mud and salt, but as the warmth trickled into my belly, I didn\'t let it waste. Closing my eyes, I drew a slow, deliberate breath through my teeth—the Gentle Breath of the Morning Dew. I guided the meager nutrients into the marrow of my cracked ribs, knitting the hairline fractures with the stubborn friction of living blood.',
              critique: 'Rothfuss: Lyrical internal cultivation and biological discipline.',
              score: { canon: 0.96, kinetics: 0.93, sensory: 0.96, feral: 0.88 }
            },
            {
              id: 'c2-s1-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"One," I grunted. My elbows vibrated like dry twigs. "Two." *Pop.* Down I went like a felled pine. "Pathetic! Miserably, outrageously pathetic!" I gulped down the minnow soup like a starving stray dog, forcing every drop of grease to patch my shattered bones.',
              critique: 'Biga: Great grit and comedic internal monologues.',
              score: { canon: 0.92, kinetics: 0.90, sensory: 0.88, feral: 0.97 }
            }
          ],
          winningProse: '"One," I grunted, pressing my palms into the cold dirt. My elbows shook violently. The muscles across my shoulder blades felt like frayed hemp cords threatening to snap. "Two." *Pop.* A tendon in my right wrist protested with a sharp, burning pinch, and my chest smacked the packed mud with an undignified *thud*. Two push-ups had my heart pounding against my ribs like a trapped sparrow. *Dantian: empty. Meridians: rusted solid. Muscles: thin as dried willow bark.* When Yeon handed me the broth, I swallowed it in four greedy gulps. I didn\'t let a drop waste. Closing my eyes, I drew a slow breath through my teeth: the Mount Hua sect\'s foundational **Gentle Breath of the Morning Dew**. I didn\'t force Qi through clogged meridians—forcing a blocked pipe only bursts the seams. Instead, I guided the meager nutrients from the fish into the marrow of my cracked ribs, knitting the hairline fractures with the stubborn friction of living blood.',
          consensus: 'Passed with high distinction. Adheres strictly to Sanderson biological limits and Mount Hua breathing techniques.'
        }
      }
    },
    {
      id: 'scene_02_filial_vow',
      title: 'The Filial Shackles: Grandmother\'s Deathbed Vow',
      order: 2,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c2-s2-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The acoustic dampening of the cedar partition reduced speech volume by twelve decibels. Outside, the atmospheric pressure dropped as coastal storm clouds approached from the southwest at fifteen knots.',
              critique: 'Sanderson: Accurate meteorological physics, lacks the intimate melancholy.',
              score: { canon: 0.85, kinetics: 0.87, sensory: 0.78, feral: 0.72 }
            },
            {
              id: 'c2-s2-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Rainwater dripped from the eaves into an empty stone trough, each drop echoing in the small room like the ticking of an iron clock. The cedar partition was dark with damp, and through the paper lattice window, the gray sky seemed to press against the thatched roof.',
              critique: 'Rothfuss: Beautiful acoustic melancholy and temporal dread.',
              score: { canon: 0.96, kinetics: 0.88, sensory: 0.96, feral: 0.82 }
            },
            {
              id: 'c2-s2-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The room was quiet enough to hear an ant sneeze. Outside, the muddy ditch water was rising, and the smell of wet thatch reminded me of an old goat barn before the spring slaughter.',
              critique: 'Biga: Funny ant similes, lacks the heavy filial tragedy.',
              score: { canon: 0.89, kinetics: 0.84, sensory: 0.88, feral: 0.94 }
            }
          ],
          winningProse: 'Rainwater dripped from the ragged thatch into a stone trough outside the sill, each drop striking with the hollow, measured tick of an ancient clock. The cedar partition separating our sleeping mats was black with coastal damp. Gray light pooled in the doorway, heavy with the scent of wet pine needles, cold river mud, and the bitter smoke of dying peat fires.',
          consensus: 'Passed with high distinction. Establishes the somber psychological cage of the household.'
        },
        interactions: {
          candidates: [
            {
              id: 'c2-s2-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Why does Daesung yield to Kang?" Jin asked. "Kang\'s physical output is fifty percent lower." Yeon explained: "A binding deathbed promise made thirty years ago enforces Daesung\'s compliance regardless of systemic inefficiency."',
              critique: 'Sanderson: Efficient behavioral economic summary, lacks emotional resonance.',
              score: { canon: 0.88, kinetics: 0.86, sensory: 0.77, feral: 0.75 }
            },
            {
              id: 'c2-s2-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Why does Father bow to him?" I asked. Yeon\'s posture stiffened. She looked toward the closed door with eyes carrying the weight of twenty bitter winters. "Your father was a hunter in the high ridges, Jin. The strongest man in the valley. But when his mother lay dying, she made him swear an oath on her ancestral tablet: \'No matter how harsh the world becomes, you must keep your brother alive. You are the elder. You must carry him.\' To your father, enduring Kang\'s greed is his filial duty. If he breaks his brother, he breaks his vow to the dead."',
              critique: 'Rothfuss: Poignant filial tragedy; the core anchor of Daesung\'s character.',
              score: { canon: 0.97, kinetics: 0.90, sensory: 0.96, feral: 0.86 }
            },
            {
              id: 'c2-s2-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"He\'s letting a fat parasite drink his blood because of an old promise?!" I fumed, grinding my molars. "If my master made me promise to carry an idiot who steals my salt, I\'d dig up his grave and complain! Good men always get choked by their own soft hearts!"',
              critique: 'Biga: Terrific Chung Myung fury at unnecessary filial martyrdom.',
              score: { canon: 0.93, kinetics: 0.87, sensory: 0.89, feral: 0.97 }
            }
          ],
          winningProse: '"Kang," I said, testing the name. "Why does Father bow to him? He\'s a tyrant who sends his fat son to shake down his own kin. Father could snap Kang\'s neck with two fingers. I saw his footing—his shoulders have iron in them." Yeon let out a soft, sad sigh carrying twenty bitter winters. "Your father was the strongest hunter in the high ridges, Jin. But when his mother lay dying of winter rot, she held his hands until her skin turned cold. She made him swear an oath on her ancestral tablet: *\'No matter what happens, no matter how harsh the world becomes, you must keep your brother alive. You are the elder. You must carry him.\'* Your father is a man who keeps his word. Kang has fed on that promise since dirt was shoveled over her grave. To your father, enduring Kang\'s greed is his filial duty. If he breaks his brother, he breaks his vow to the dead." *Dharma,* I thought, staring into the mud. In this rotting hut on the edge of the world, duty was a rusted chain wrapped around a good man\'s throat, choking him slowly so a parasite could grow fat.',
          consensus: 'Passed with high distinction. Integrates the Dharma theme with the grandmother\'s tragic deathbed vow.'
        },
        actions: {
          candidates: [
            {
              id: 'c2-s2-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'As Yeon departed, I tested my axial skeleton against a bamboo pole. The vertical load caused a three-millimeter deflection in the fifth rib. I retrieved a high-carbon iron stone-chisel, 180 grams, concealing it in my waistband.',
              critique: 'Sanderson: Strong tactile preparation and tool specifications.',
              score: { canon: 0.90, kinetics: 0.95, sensory: 0.82, feral: 0.80 }
            },
            {
              id: 'c2-s2-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The moment Yeon gathered her willow basket and went down to the river, I was on my feet. My knees wobbled, but they held. I took a bamboo walking pole from the corner, tucked my father\'s small iron chisel into my waistband, and pushed the door open into the gray morning mist.',
              critique: 'Rothfuss: Natural pacing and quiet determination.',
              score: { canon: 0.95, kinetics: 0.91, sensory: 0.94, feral: 0.88 }
            },
            {
              id: 'c2-s2-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The second the latch clicked, I sprang up like a coiled ferret. My ribs yelled at me, but I ignored them. I grabbed a stout bamboo stick and tucked an iron chisel into my belt. "Time to go see what kind of monster runs this flea-circus."',
              critique: 'Biga: High-energy ferret simile and eager troublemaking.',
              score: { canon: 0.92, kinetics: 0.90, sensory: 0.87, feral: 0.97 }
            }
          ],
          winningProse: 'The moment the wooden latch clicked behind Yeon, I was on my feet. My knees wobbled, but the Gentle Breath had done its work; the hairline fractures held under my weight. I picked up a simple bamboo walking pole from the corner of the room, tucked a small iron stone-chisel from my father\'s workbench into my waistband, and pushed the door open. *If Father won\'t break his vow,* I thought, stepping into the damp lane, *then his son will just have to solve the problem where ancestral tablets can\'t see.*',
          consensus: 'Passed with high distinction. Clear forward kinetic momentum and filial protectiveness.'
        }
      }
    },
    {
      id: 'scene_03_palisade_muster',
      title: 'The Palisade Muster: Kang\'s Mechanical Cadence',
      order: 3,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c2-s3-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The palisade was constructed from Pinus densiflora logs, average diameter 28 centimeters, sharpened to forty-five-degree points. Claw marks at heights of 1.82, 1.83, and 1.81 meters indicated non-random algorithmic testing of the perimeter defense.',
              critique: 'Sanderson: Brilliant insight into measured beast claw marks.',
              score: { canon: 0.94, kinetics: 0.95, sensory: 0.83, feral: 0.78 }
            },
            {
              id: 'c2-s3-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Southfall was a fortress built by desperate men with dull tools. Huts of turf and unhewn logs clustered behind a massive circular palisade of sharpened pine. The air smelled of crushed needles, woodsmoke, and sour beast dung. Through murder-holes, hollow-faced guards stared out into the dense, black treeline beyond the ditch.',
              critique: 'Rothfuss: Atmospheric grimness and evocative defensive fortress textures.',
              score: { canon: 0.96, kinetics: 0.91, sensory: 0.97, feral: 0.85 }
            },
            {
              id: 'c2-s3-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The village looked like someone had thrown mud, logs, and cabbage at a swamp and declared it a fortress. Villagers were dragging a dead six-legged wolf through the mud, while the blacksmith hammered bent pitchforks like he was trying to kill an invisible fly.',
              critique: 'Biga: Great colorful village description, matches Chung Myung perspective.',
              score: { canon: 0.91, kinetics: 0.86, sensory: 0.90, feral: 0.96 }
            }
          ],
          winningProse: 'Southfall was not a village. It was a fortress built by desperate men with dull tools. Huts of unhewn logs, turf roofs, and mud-chinked walls clustered tightly inside a massive circular palisade of sharpened pine trunks. The sky hung gray and heavy, smelling of crushed pine needles, woodsmoke, and the sour stench of beast dung. Every twenty paces along the rampart, men with hollow faces held crude spears tipped with chipped flint or rusted iron, staring out into the dense, black treeline. *The claw marks on the palisade aren\'t random scrambles,* I observed, reading the signs like a seasoned scout. *Every three feet along the north gate, the wood has been scraped at the exact same height—as if something was measuring the grain.*',
          consensus: 'Passed with high distinction. Integrates the subtle RL testing clue with visceral frontier grimness.'
        },
        interactions: {
          candidates: [
            {
              id: 'c2-s3-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'On the platform, Sector Chief Kang paced with invariant intervals: three strides left (2.4 seconds), two-second pause, three strides right. When a scout reported breached snare lines, Kang\'s ocular blink frequency was zero. He diverted grain from Sector Three with an algorithmic latency of 180 milliseconds.',
              critique: 'Sanderson: Superb mechanical pacing diagnostics and latency analysis.',
              score: { canon: 0.94, kinetics: 0.96, sensory: 0.84, feral: 0.80 }
            },
            {
              id: 'c2-s3-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Stand fast, men of the Third Sector!" Kang shouted. He was tall, thick-chested, dressed in polished iron mail. Around him, fifty exhausted villagers leaned on pickaxes, Daesung knee-deep in gray clay hoisting an oak foundation log. "The night-howlers breached the ditch at dawn! Give your sweat to the trench, and the Council will keep your hearths warm!" But as a scout reported cut wires, Kang didn\'t flinch. His eyelids didn\'t even flutter. His face was a mask of carved wax.',
              critique: 'Rothfuss: Dramatic rhetoric contrast with hollow, synthetic interior.',
              score: { canon: 0.96, kinetics: 0.90, sensory: 0.96, feral: 0.88 }
            },
            {
              id: 'c2-s3-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Look at this pompous bastard," I sneered behind the grain silo. "Preaching about ancestral sweat while wearing polished iron, then stealing my father\'s dinner to make up for his own incompetence! I swear, every village in the world has at least one of these blowhards who needs an oak stick across his chin!"',
              critique: 'Biga: Classic Chung Myung rage at hypocritical corrupt chieftains.',
              score: { canon: 0.92, kinetics: 0.87, sensory: 0.88, feral: 0.98 }
            }
          ],
          winningProse: '"Stand fast, men of the Third Sector!" A booming voice cut across the yard. In the center, standing on an elevated wooden platform above the trenches, was Uncle Kang, tall and broad-shouldered in polished iron mail. Around him, fifty exhausted villagers leaned on shovels, breath pluming white in freezing mist. Knee-deep in clay at the bottom of the ditch stood Daesung, hoisting an oak foundation log. "The night-howlers breached the eastern ditch at dawn," Kang shouted, pacing with slow, theatrical strides. "Give your sweat to the trench, and the Council will keep your hearths warm!" I stood behind a grain silo, watching his face. In my past life, I had watched hundreds of generals rally troops. Their eyes shifted; their chests heaved with genuine adrenaline or bloodlust. Kang had none of that. He paced the boards with an eerie, mechanical rhythm—three steps left, pause two seconds, three steps right. When a panicked scout reported severed snare wires, Kang didn\'t blink. His eyelids didn\'t twitch. His face was a mask of carved wax.',
          consensus: 'Passed with high distinction. Flawlessly plants the algorithmic, robotic demeanor of Uncle Kang.'
        },
        actions: {
          candidates: [
            {
              id: 'c2-s3-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I focused my refined sensory nodes on Kang\'s cervical spine. Biological heat emission was absent; instead, a thirty-hertz acoustic oscillation emanated from his carotid region—a liquid coolant circulation pump operating at sub-zero temperatures.',
              critique: 'Sanderson: Precise synthetic coolant vibration detection.',
              score: { canon: 0.95, kinetics: 0.95, sensory: 0.86, feral: 0.82 }
            },
            {
              id: 'c2-s3-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I touched the base of my throat, feeling the subtle resonance of my revived Sword Heart. Every living creature radiates a messy halo of biological warmth. As Kang turned, my vision narrowed. Beneath his collar and iron links, there was no warmth. There was only a cold, faint hum—like water running through frozen lead pipes.',
              critique: 'Rothfuss: Lyrical perception of synthetic absence.',
              score: { canon: 0.96, kinetics: 0.92, sensory: 0.97, feral: 0.87 }
            },
            {
              id: 'c2-s3-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'A heavy hand clamped on my shoulder, spinning me into the mud. "Well, well, look at the little rat," Bao sneered, pulling a wooden club. I pushed myself to one knee, wiping mud from my teeth. "You know, cousin, whenever a pig squeals this loud in my old days, we didn\'t give it a lesson. We just hung it from the rafters."',
              critique: 'Biga: Explosive cliffhanger hook into Chapter 3 fight.',
              score: { canon: 0.93, kinetics: 0.91, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'I touched the base of my throat, feeling the subtle resonance of my revived Sword Heart. Every living creature—beast, man, or demon—possesses an internal pulse, a messy halo of biological warmth. As Kang turned to descend the ladder, my vision narrowed on his neck. Around his collar, beneath the thick leather and iron links, there was no warmth. There was only a cold, faint hum—a vibration so low it was almost inaudible, like coolant water pulsing through frozen pipes. *What in the heavens are you?* I thought. Before I could process the chill, a heavy hand clamped down on my shoulder, spinning me violently into the clay. Standing over me was Bao, short club drawn, smirking down at me with his two spear-lackeys. "Time for a lesson, cripple." I pushed myself slowly to one knee, gripping my bamboo pole. "You know, cousin... in my old days, whenever a pig squealed this loud, we didn\'t give it a lesson. We just hung it from the rafters."',
          consensus: 'Passed with high distinction. Delivers both the chilling synthetic discovery and the action cliffhanger.'
        }
      }
    }
  ]
};

module.exports = { ch01Data, ch02Data };
