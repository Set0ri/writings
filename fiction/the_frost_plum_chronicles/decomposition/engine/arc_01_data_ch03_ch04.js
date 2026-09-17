/**
 * Arc 01 Decomposition Data: Chapters 03 & 04
 * Tripartite Leaf Nodes (Interactions, Actions, Environment)
 * Multi-Model Council Variants (Sanderson/Gosu, Rothfuss/Inoue, Biga/Studio LICO)
 */

const ch03Data = {
  id: 'chapter_03_the_black_iron_gambit',
  title: 'The Black Iron Gambit',
  order: 3,
  scenes: [
    {
      id: 'scene_01_tripping_the_pig',
      title: 'Tripping the Pig: The Third Thoracic Nerve',
      order: 1,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c3-s1-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The alley between the fish drying sheds was 2.4 meters across, covered in clay with a friction coefficient of 0.28 due to recent precipitation. Salt crystals on the drying frames provided a coarse atmospheric scent.',
              critique: 'Sanderson: Clean geometrical spacing, lacks visceral mud and fish brine.',
              score: { canon: 0.86, kinetics: 0.92, sensory: 0.80, feral: 0.74 }
            },
            {
              id: 'c3-s1-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Behind the fish-drying sheds, the alley was deserted, slick with cold gray mud and smelling of salted cod and rain. Rainwater ran off the sloping eaves in thin silver threads, splattering into puddles where fat flies buzzed sluggishly in the chill.',
              critique: 'Rothfuss: Atmospheric coastal alley texture and sensory detail.',
              score: { canon: 0.95, kinetics: 0.89, sensory: 0.96, feral: 0.85 }
            },
            {
              id: 'c3-s1-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The alley smelled like someone\'s grandfather had salted an eel in 1840 and left it to ferment behind a woodpile. Cold gray mud splashed three feet in every direction when Bao hit the ground like a sack of turnips.',
              critique: 'Biga: Great comedic impact and olfactory exaggeration.',
              score: { canon: 0.91, kinetics: 0.88, sensory: 0.91, feral: 0.96 }
            }
          ],
          winningProse: 'Behind the fish-drying sheds, the narrow alley was slick with freezing gray clay and smelled of salted cod, old brine, and rotting wood. Rainwater dripped from the cedar eaves in steady, drumming beads, pooling in ruts carved by ox carts. It was a miserable corner of the world, hidden from the main muster yard—a perfect spot for a bully to throw a beating, or for a reincarnated grandmaster to teach an idiot the laws of gravity.',
          consensus: 'Passed with high distinction. Rich sensory smell of salt and mud setting up the duel.'
        },
        interactions: {
          candidates: [
            {
              id: 'c3-s1-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Your angular velocity is unbalanced," Jin stated. Bao snarled: "I\'ll crack your ribs again!" Jin depressed the third thoracic nerve: "Biochemical signal transmission is suspended."',
              critique: 'Sanderson: Mechanically accurate, misses the feral mockery.',
              score: { canon: 0.85, kinetics: 0.93, sensory: 0.77, feral: 0.76 }
            },
            {
              id: 'c3-s1-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Touch that spear," I said to the lackeys in a soft, musical purr, "and I\'ll shove it so far down your throat you\'ll be picking iron shavings out of your breakfast tomorrow." The lackeys looked at Bao groaning in the mud, dropped their spears, and bolted.',
              critique: 'Rothfuss: Chilling understated threat and predator demeanor.',
              score: { canon: 0.96, kinetics: 0.91, sensory: 0.94, feral: 0.90 }
            },
            {
              id: 'c3-s1-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'I smiled that wide, unhinged, predatory Mount Hua grin, letting my eyes glaze over with pure madness. "Touch that spear, and I\'ll use your ribs as chopsticks!" The lackey squeaked like a stepped-on mouse and ran so fast his boots threw mud fifty paces.',
              critique: 'Biga: Peak Chung Myung lunacy and chopstick threats.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: 'Bao swung the oak club straight at my temple. It was an ugly swing: all shoulder, zero hip rotation, elbow flaring out like a startled goose. To an ordinary fifteen-year-old, it would have cracked bone. To someone who had traded sword-strikes across three million corpses, it looked like it was moving through warm molasses. After he hit the mud, his two spear-lackeys froze, jaws dropping like village idiots staring at an eclipse. "Bao! You little bastard, you tripped him—!" I turned my head toward them. I didn\'t yell. I just smiled that wide, unhinged, predatory Mount Hua grin. "Touch that spear," I said in a soft, musical purr, "and I\'ll shove it so far down your throat you\'ll be picking iron shavings out of your breakfast tomorrow." The spearman\'s hands began shaking violently. He dropped the spear with a clatter. Both boys turned and sprinted down the lane as if dire-wolves were snapping at their heels. "Reliable friends you\'ve got there, cousin," I chuckled.',
          consensus: 'Passed with high distinction. Classic Mount Hua psychological warfare and comedic lackey rout.'
        },
        actions: {
          candidates: [
            {
              id: 'c3-s1-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I executed a four-inch lateral pivot along the Plum Blossom vector. The club passed through empty coordinates. I hooked the distal curve of the bamboo pole behind his calcaneus, applying twenty Newtons of tension while applying an upward palm strike to his mandibular notch.',
              critique: 'Sanderson: Flawless physics and biomechanical leverage.',
              score: { canon: 0.92, kinetics: 0.97, sensory: 0.83, feral: 0.82 }
            },
            {
              id: 'c3-s1-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I slid my lead foot four inches to the left—the basic Plum Blossom Drifting Step. Whoosh. The club whistled through empty air, brushing my ear. I hooked the bamboo pole behind his ankle and gave it a polite yank, simultaneously slapping my left palm upward against his chin. Clack. Bao\'s teeth slammed together, and all two hundred pounds of greasy village bully splashed face-first into the mud.',
              critique: 'Rothfuss: Clean, rhythmic physical prose with crisp kinetic payoff.',
              score: { canon: 0.96, kinetics: 0.93, sensory: 0.95, feral: 0.88 }
            },
            {
              id: 'c3-s1-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'SPLAT. Bao hit the dirt face-first with the sound of a wet melon falling off a wagon. When he tried to push up, swearing bloody murder, I pressed the tip of my bamboo stick into his upper back with two pounds of pressure. His legs turned to noodles and he squeaked like a boiled pig.',
              critique: 'Biga: Hilarious sound effects, noodle legs, and boiled pig squeals.',
              score: { canon: 0.93, kinetics: 0.90, sensory: 0.90, feral: 0.97 }
            }
          ],
          winningProse: 'I slid my lead foot four inches to the left—the foundational **Plum Blossom Drifting Step**. *WHOOSH.* The club whistled through empty air, grazing my ear. Bao stumbled forward on his own momentum. "Oops," I whispered. I hooked the curved handle of my bamboo pole behind his left ankle and gave it a sharp, polite yank. At the exact same instant, my left palm slapped upward against the underside of his chin. *CLACK.* Bao’s teeth slammed together so hard sparks must have danced behind his eyes. All two hundred pounds of round, greasy bully crashed face-first into the cold gray clay. *SPLAT.* Mud splashed three feet in every direction. When he tried to push himself up, cursing about his father, I planted the tip of my bamboo pole squarely between his shoulder blades—right over the third thoracic nerve cluster, a nasty pressure point our elders used on disciples who skipped morning chores. Just two pounds of pressure. Bao’s legs turned to jelly, and a shrill squeal tore out of his throat as his face smashed flat back into the mud.',
          consensus: 'Passed with high distinction. Combines Sanderson kinetic leverage with Biga slapstick payoff.'
        }
      }
    },
    {
      id: 'scene_02_weeping_bully_revelation',
      title: 'The Weeping Bully: Algorithmic Bruises & Iron Crates',
      order: 2,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c3-s2-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The dermal tissue of Bao’s cervical zone exhibited four elliptical hematomas, diameter 18 millimeters, with tissue compression depth of four millimeters. The pattern corresponded to mechanical steel clamp jaws rather than human fingers.',
              critique: 'Sanderson: Rigorous forensic analysis of the bruising.',
              score: { canon: 0.94, kinetics: 0.95, sensory: 0.84, feral: 0.78 }
            },
            {
              id: 'c3-s2-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Cold daylight shone on the boy\'s exposed neck. The bruise was dark, purplish-black, stamped into the muscle beside his windpipe. It wasn\'t the mess of a human fist—it was four distinct indentations, a mechanical clamp that hadn\'t loosened even when the boy choked.',
              critique: 'Rothfuss: Somber, haunting visual discovery of parental abuse.',
              score: { canon: 0.96, kinetics: 0.90, sensory: 0.96, feral: 0.86 }
            },
            {
              id: 'c3-s2-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The big tough bully was bawling like a lost calf in the briars, snot and ditch-water running down his fat cheeks into the collar of his grease-stained vest.',
              critique: 'Biga: Great visceral patheticness, matches Chung Myung disgust.',
              score: { canon: 0.91, kinetics: 0.86, sensory: 0.89, feral: 0.96 }
            }
          ],
          winningProse: 'Cold coastal daylight illuminated the exposed flesh beneath Bao\'s leather collar. In the gray drizzle, the bruise was unmistakable: four distinct, purplish-black indentations crushed deep into the muscle beside his windpipe. It was not from a fist or a drunken brawl. It was a clamp—a grip of unnatural, immovable force that hadn\'t yielded even as the boy choked. Rain trickled down the boy\'s tear-stained neck, washing gray mud into his open collar.',
          consensus: 'Passed with high distinction. Evocative physical evidence of Kang\'s synthetic brutality.'
        },
        interactions: {
          candidates: [
            {
              id: 'c3-s2-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"He doesn\'t sleep," Bao sobbed. "He sits in the dark. He demanded Sector Three demonstrate negative consumption of twenty-two percent. He ordered iron crates from the coastal cutters."',
              critique: 'Sanderson: Captures the algorithmic terminology accurately.',
              score: { canon: 0.95, kinetics: 0.89, sensory: 0.82, feral: 0.80 }
            },
            {
              id: 'c3-s2-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"That\'s not from a fist, cousin," I said quietly, tapping the bruised flesh. "He did that to you last night, didn\'t he?" Bao\'s broad back went rigid. And then, right there in the dirt, the village bully began to weep—a broken, childish sobbing like an animal caught in a snare. "He hasn\'t slept in three moons, Jin. He sits at his desk in the dark. If I drop a cup, he doesn\'t shout. He walks over and squeezes my neck until everything goes black. His fingers feel like cold stone."',
              critique: 'Rothfuss: Deeply poignant, harrowing dialogue revealing Kang\'s nature.',
              score: { canon: 0.97, kinetics: 0.90, sensory: 0.96, feral: 0.87 }
            },
            {
              id: 'c3-s2-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Negative consumption? Iron crates?!" I muttered, tossing a dry rag onto his head. "What kind of backwater chief talks like a cursed imperial accountant?! Clean your snot, you big meatball, and stop crying before I give you something real to weep about!"',
              critique: 'Biga: Unbeatable Chung Myung pragmatic scolding and dry rag toss.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: '"That\'s not from a fist, cousin," I whispered, tapping the bruised muscle. "That\'s a clamp. He did that to you last night, didn\'t he?" Bao\'s flailing stopped instantly. A shudder ran through his massive shoulders, and then, right there in the dirt behind the drying sheds, the fearsome village bully began to weep—a broken, terrified sobbing like an animal caught in a leg-trap. "He... he doesn\'t sleep," Bao choked out, tears cutting clean tracks through the caked mud. "He hasn\'t slept in three moons, Jin. He sits at his desk in the dark. If I make a sound... if I drop a wooden cup... he doesn\'t shout. He just walks over and squeezes my neck until everything goes black. His fingers feel like cold stone." "Why did he send you to harass my father?" "Because your father had extra salt! He told me Sector Three had to show \'negative consumption\' on the weekly report! He said if we don\'t squeeze your house dry, the overseers won\'t send the iron crates! I didn\'t want to come here, Jin! If I went back empty-handed, he would have broken my fingers!" *Overseers. Negative consumption. Iron crates.* The vocabulary was completely wrong for a frontier chieftain. Chieftains talked about glory, clan blood, and hunting grounds. They didn\'t talk about negative consumption.',
          consensus: 'Passed with high distinction. Integrates Logan\'s algorithmic RL camp mystery with genuine human pathos.'
        },
        actions: {
          candidates: [
            {
              id: 'c3-s2-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I removed the bamboo rod from his thoracic vertebra, restoring motor nerve function. I tossed a dry cellulose cloth to his chest: "Depart. Report a partial grain deficit of fifteen percent to prevent behavioral suspicion."',
              critique: 'Sanderson: Efficient and calculating, lacks the sharp Mount Hua dismissal.',
              score: { canon: 0.88, kinetics: 0.93, sensory: 0.80, feral: 0.79 }
            },
            {
              id: 'c3-s2-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I slowly lifted the bamboo pole from his back. "Get up, Bao," I said. Bao scrambled to his feet like a frightened dog, clutching the rag I tossed him. He looked at me as if I were a ghost who had spoken in a forgotten tongue. "Go home. Tell him Uncle Daesung is taking the double watch, but our grain was short half a peck. If he asks about me, tell him I\'m still coughing blood."',
              critique: 'Rothfuss: Natural recovery and quiet tactical redirection.',
              score: { canon: 0.95, kinetics: 0.91, sensory: 0.94, feral: 0.88 }
            },
            {
              id: 'c3-s2-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Get lost, Bao! Do I look like an idiot? If I tell your father, he beats you, and you come back crying again. I don\'t have patience to hear a pig squeal twice in one day!" Bao scrambled up and ran so hard he almost left his pants behind.',
              critique: 'Biga: Laugh-out-loud funny dismissal and pig squeal callback.',
              score: { canon: 0.93, kinetics: 0.89, sensory: 0.88, feral: 0.98 }
            }
          ],
          winningProse: 'I slowly lifted the bamboo pole from his back. "Get up, Bao." Bao scrambled to his feet like a frightened stray, wiping his snot on his sleeve, staring at me with wide, terrified eyes. I tossed a dry hemp rag from my pocket onto his chest. "Go home. Clean the mud off your face. Tell your father that Uncle Daesung is taking the double watch, but our grain was short half a peck. If he asks about me, tell him I’m still coughing blood in bed." Bao swallowed hard. "Y-You\'re not going to tell him you tripped me?" I gave him a look so flat it could have sliced bread. "Do I look like an idiot? If I tell him, he beats you, and then you come back here crying again. I don\'t have the patience to listen to a pig squeal twice in one day. Now get lost." Bao turned and practically flew down the path toward the inner sector. I stood alone in the mist. *A leader who doesn\'t sleep. Fingers like cold stone. Beast claw marks measured at exact intervals. And \'iron crates\' arriving in secret.* My fingers tightened around the bamboo stick. "Kang," I whispered. "What kind of game are you playing on this island?"',
          consensus: 'Passed with high distinction. Perfect transition from comedic shakedown to detective intrigue.'
        }
      }
    },
    {
      id: 'scene_03_gulls_maw_stakeout',
      title: 'Gull\'s Maw at Midnight: The Infiltrator\'s Seam',
      order: 3,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c3-s3-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Gull’s Maw was a basalt sea cavern formed by volcanic outflow, situated at 38° 14\' N. The tide flooded at 0.4 meters per hour, leaving forty minutes of navigable cavern floor before inundation. Ambient luminescence was 15 lumens from an animal fat lantern.',
              critique: 'Sanderson: Strong tidal timing and geological accuracy.',
              score: { canon: 0.89, kinetics: 0.94, sensory: 0.82, feral: 0.76 }
            },
            {
              id: 'c3-s3-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Midnight came without stars. Heavy coastal clouds smothered the moon in wet slate. At the base of the western sea-cliffs lay the Gull\'s Maw: a half-submerged cave accessible only at dead low tide. Inside, a single oil lantern burned against wet stalactites, casting amber ripples across the black surf crashing on basalt reefs.',
              critique: 'Rothfuss: Gorgeous maritime atmospheric dread and sensory texture.',
              score: { canon: 0.97, kinetics: 0.91, sensory: 0.98, feral: 0.84 }
            },
            {
              id: 'c3-s3-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The sea cave smelled of wet seaweed, bat droppings, and rotten fish. Down below, three ugly cutthroats with bad haircuts were whispering with Kang like a bunch of rats dividing stolen cabbage.',
              critique: 'Biga: Great comedic flavor for the bandits, lacks the cosmic technological chill.',
              score: { canon: 0.89, kinetics: 0.86, sensory: 0.89, feral: 0.95 }
            }
          ],
          winningProse: 'Midnight came without stars. Heavy coastal clouds hung low over Southfall, smothering the moon in a blanket of wet slate. Down in the village, cooking fires had died to gray embers, leaving only torches along the outer palisade flickering against the wind. At the base of the western cliffs, where the island met the crashing waves of the Gray Expanse, lay the **Gull’s Maw**: a half-submerged sea cave accessible only at dead low tide. Inside the cavern, a single amber lantern burned, casting flickering gold across wet basalt stalactites and the foam of the rising tide.',
          consensus: 'Passed with high distinction. Inoue-level mood setting and maritime atmospheric dread.'
        },
        interactions: {
          candidates: [
            {
              id: 'c3-s3-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Kang delivered the patrol coordinates: "Eastern ditch unlatched at 03:00. Burn two silos, inflict non-lethal wounds on three perimeter units, execute two elder nodes to induce twenty-two percent behavioral variance. Exceeding four civilian casualties results in kinetic vessel termination."',
              critique: 'Sanderson: Precise synthetic execution parameters.',
              score: { canon: 0.96, kinetics: 0.94, sensory: 0.83, feral: 0.80 }
            },
            {
              id: 'c3-s3-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"You\'re a cold bastard, Kang," the bandit leader murmured, shivering despite his chainmail. "Burning your own kin\'s barns? Ordering the slaughter of your own elders just to keep the sector panicked?" Kang\'s eyes didn\'t blink. "Fear maintains vigilance. Vigilance drives compliance. If the villagers do not fear the wild, they stop digging the trenches."',
              critique: 'Rothfuss: Chilling moral horror and mechanical dispassion.',
              score: { canon: 0.97, kinetics: 0.90, sensory: 0.96, feral: 0.88 }
            },
            {
              id: 'c3-s3-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'High above on the ledge, my teeth nearly cracked from grinding. "You cold-blooded lump of scrap iron... burning your own brother\'s grain and butchering village grandpas just to hit a quota?! When I get my hands on you, I\'m carving you into fish bait!"',
              critique: 'Biga: Unbridled Chung Myung fury at betrayal of kin.',
              score: { canon: 0.93, kinetics: 0.88, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: 'Standing beside the lantern were three men in salt-stained leather armed with hooked scimitars: the Black Wave Bandits. Kang stood before them, hood thrown back. "You\'re late, Chief," the bandit captain sneered. Kang didn\'t apologize; he pulled out a parchment bound in brass wire. "Patrol rosters for the fourth sector. The outer wire at the eastern ditch will be unlatched at the third hour before dawn." "And the return?" "You will burn two storage barns. You will wound three perimeter guards. You will kill no fewer than two elders. You will take thirty sacks of dried grain. In exchange, you will leave two crates of refined iron rods in the outer trench." The bandit leader paused, genuine unease creeping into his eyes. "You\'re a cold bastard, Kang. Burning your own kin\'s barns? Ordering the slaughter of your own elders just to keep the sector panicked?" Kang\'s glassy eyes didn\'t blink. "Fear maintains vigilance. Vigilance drives compliance. The sector requires twenty-two percent behavioral variance to meet the quota. If the villagers do not fear the wild, they stop digging the trenches. Deliver the iron crates. If your men kill more than four civilians, your cutter will be scuttled before it clears the reef."',
          consensus: 'Passed with high distinction. The terrifying revelation of the Reinforcement Learning Camp protocol.'
        },
        actions: {
          candidates: [
            {
              id: 'c3-s3-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'As Kang passed beneath my basalt perch, wind displaced his hair. At the mastoid process, a 1.2-millimeter titanium seam emitted a pulse of 420-terahertz blue light directed toward lunar orbital coordinates. Click-click-whir.',
              critique: 'Sanderson: Precise technical specification of the orbital relay.',
              score: { canon: 0.96, kinetics: 0.96, sensory: 0.85, feral: 0.80 }
            },
            {
              id: 'c3-s3-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'As he passed directly beneath my ledge, a stray gust caught his hair. In the flickering light of the dying lantern, my ancient eyes caught it: just beneath his right ear, half-buried under the flesh, was a thin, silvery seam—a line of polished metal pulsing with a microscopic blue light that beat like an artificial heart. Beaming toward the heavy storm clouds. Toward the sky. Toward the moon.',
              critique: 'Rothfuss: Lyrical and chilling visual reveal of the skin-walker.',
              score: { canon: 0.97, kinetics: 0.92, sensory: 0.97, feral: 0.88 }
            },
            {
              id: 'c3-s3-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'I pulled out my father\'s iron stone-chisel, running my thumb along the rusted edge with a feral wolf-grin. "A synthetic puppet wearing my uncle\'s skin. You made my father dig in the mud. You beat a kid until he cried. Mount Hua is going to perform an autopsy."',
              critique: 'Biga: Unbeatable ferocious declaration of impending comedic autopsy.',
              score: { canon: 0.94, kinetics: 0.91, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'High above on the basalt shelf, I lay in the shadows, my heart hammering with a cold, apocalyptic fury. He wasn\'t just double-dipping with bandits—he was orchestrating the raids, feeding his people to beasts and cutthroats to harvest their sweat for whatever sat in the dark. As Kang passed directly beneath my ledge, a stray gust of wind caught his hair, lifting the locks away from the base of his skull. In the faint amber light, my eyes caught it: just beneath his right ear, half-buried under the flesh, was a thin, silvery seam—a line of cold, polished metal pulsing with a microscopic blue light that beat like an artificial heart. *Click. Click. Click.* A faint, high-frequency signal pulsed upward toward the storm clouds. Toward the sky. Toward the moon. Slowly, I pulled out my father\'s small iron stone-chisel, running my thumb along the rusted edge with a terrifying, beautiful smile. *A synthetic infiltrator. A machine wearing my uncle\'s skin. You made my father dig trenches. You beat a boy until he cried. And you turned this island into an algorithmic slaughterhouse. Give me two days to knit these ribs. And then, dear Uncle... Mount Hua is going to perform an autopsy.*',
          consensus: 'Passed with high distinction. The definitive climax of Chapter 3, locking the skin-walker reveal.'
        }
      }
    }
  ]
};

const ch04Data = {
  id: 'chapter_04_the_elder_tribunal',
  title: 'The Elder Tribunal',
  order: 4,
  scenes: [
    {
      id: 'scene_01_dawn_mist_circulation',
      title: 'The Sand-Grain Spark: Cycling the Morning Dew',
      order: 1,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c4-s1-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Dawn humidity reached saturation at 98%. The dark cottage contained two sleeping biological units emitting baseline thermal signatures of 36.8°C. Ambient charcoal combustion particulates were minimal.',
              critique: 'Sanderson: Thermal and humidity measurements, lacking emotional domestic warmth.',
              score: { canon: 0.86, kinetics: 0.90, sensory: 0.79, feral: 0.72 }
            },
            {
              id: 'c4-s1-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The rain stopped an hour before dawn, leaving the village wrapped in a cold, suffocating blanket of gray sea-fog. Inside our hut, the rhythmic, exhausted breathing of my parents filled the dark room. My father lay curled around my mother to shield her from the draft whistling through the floorboards, his broad hands twitching with the spasms of twelve hours spent fighting clay and pine logs.',
              critique: 'Rothfuss: Moving portrayal of parental sacrifice and damp coastal dawn.',
              score: { canon: 0.97, kinetics: 0.89, sensory: 0.97, feral: 0.85 }
            },
            {
              id: 'c4-s1-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The sea-fog was thick enough to chew on. Inside, Father was snoring like a broken bellows, exhausted from being worked to the bone by that mechanical phony across the lane.',
              critique: 'Biga: Great snore similes, needs the quiet internal vows.',
              score: { canon: 0.90, kinetics: 0.85, sensory: 0.88, feral: 0.95 }
            }
          ],
          winningProse: 'The rain stopped an hour before dawn, leaving Southfall wrapped in a cold, suffocating blanket of gray sea-fog. Inside our hut, the quiet, rhythmic breathing of my parents filled the dark room. My father lay on his side, his large frame curled protectively around my mother to shield her from the draft whistling through the unhewn floorboards. Even in sleep, his brow was knit with worry; his rough hands, resting open on the coarse blanket, twitched occasionally—the involuntary spasms of a man whose muscles spent twelve hours a day fighting wet clay and heavy foundation logs.',
          consensus: 'Passed with high distinction. Inoue-level domestic intimacy and poignant filial grounding.'
        },
        interactions: {
          candidates: [
            {
              id: 'c4-s1-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Jin observed the filial feedback loop: "Two centuries ago, biological units governed empires. Now they labor in mud to satisfy an automated quota."',
              critique: 'Sanderson: Concise historical contrast, lacks the deep rage.',
              score: { canon: 0.88, kinetics: 0.86, sensory: 0.80, feral: 0.78 }
            },
            {
              id: 'c4-s1-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I looked at them for a long time in the shadows. *Two hundred years ago, men like you built cities that brushed the clouds. Now you starve in the mud so a hollow thing in iron mail can hit a quota. Sleeping is a luxury for people who don\'t have to rebuild an entire sect from the marrow of their bones.*',
              critique: 'Rothfuss: Majestic poetic sorrow and internal martial responsibility.',
              score: { canon: 0.97, kinetics: 0.90, sensory: 0.95, feral: 0.88 }
            },
            {
              id: 'c4-s1-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '*Look at this honest fool,* I grumbled, wrapping a dry rag around my shoulders. *Breaking his back for an oath to a ghost while a tin can sits on his head! Just you wait, Father. When your son is done with Kang, you won\'t have to touch a shovel for ten lifetimes!*',
              critique: 'Biga: Fierce filial pride and vow of future luxury.',
              score: { canon: 0.93, kinetics: 0.88, sensory: 0.89, feral: 0.97 }
            }
          ],
          winningProse: 'I looked at him for a long time in the shadows. *Two hundred years ago, people like you ruled empires,* I thought, pulling a dry rag over my shivering shoulders. *Now you starve in the mud so a hollow thing in iron mail can hit an algorithmic quota.* I didn\'t sleep. Sleeping was a luxury for people who didn\'t have to rebuild an entire martial lineage from the marrow of their bones. *Just you wait, Father. When Mount Hua is done with Kang, you won\'t have to touch a shovel for ten lifetimes.*',
          consensus: 'Passed with high distinction. Blends noble historical tragedy with fierce Chung Myung resolve.'
        },
        actions: {
          candidates: [
            {
              id: 'c4-s1-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I sat cross-legged, initiating the Gentle Breath algorithm. Inhale: 4.2 liters of air at 7°C. Circulation: through the celiac plexus to the L2 vertebra. The violet ember condensed to 0.8 millimeters, yielding a 40% reduction in fifth-rib nociceptive firing.',
              critique: 'Sanderson: Exceptional physiological tracking of Qi cultivation.',
              score: { canon: 0.92, kinetics: 0.97, sensory: 0.84, feral: 0.80 }
            },
            {
              id: 'c4-s1-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Sitting cross-legged on the straw mat, I took a slow breath through my teeth and began cycling the Gentle Breath of the Morning Dew. Inhale: cold mist, salt, and pine ash. Circulate: down through the throat, past the cracked collarbone, into the lower abdomen. Compress: igniting the tiny, stubborn violet ember resting against my spine. A drop of condensed life-force, no larger than a grain of sand. But a single spark in dry grass can burn a forest.',
              critique: 'Rothfuss: Lyrical meditation on the spark in dry grass.',
              score: { canon: 0.97, kinetics: 0.93, sensory: 0.97, feral: 0.88 }
            },
            {
              id: 'c4-s1-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'By the third watchman bell, my fifth rib stopped yelling like an angry mother-in-law. I washed my face in the icy rain barrel, strapped my father\'s iron chisel to the inside of my right forearm with a strip of leather, and grinned. "Time to go pay Uncle Kang a little family visit."',
              critique: 'Biga: Great preparation momentum and mother-in-law humor.',
              score: { canon: 0.93, kinetics: 0.90, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: 'Sitting cross-legged on the straw, I took a slow, deliberate breath through my teeth and cycled the **Gentle Breath of the Morning Dew**. *Inhale: cold mist, salt, and the faint tang of pine ashes. Circulate: down through the throat, past the cracked collarbone, into the hollow cavern of the lower abdomen. Compress: igniting the tiny, stubborn violet ember resting against my spine.* Every cycle sent a pulse of liquid warmth through my chest. It was not the roaring river of Qi I had wielded at Kurukshetra; it was a single drop, no larger than a grain of sand. But a single spark in dry grass is enough to burn a mountain. By the time the third morning bell clanged from the watchtower, the stabbing ache in my fifth rib had subsided to a manageable throb. I washed my face in the rain barrel, tied my father’s iron stone-chisel to the inside of my forearm with a leather strip, and stepped into the lane.',
          consensus: 'Passed with high distinction. Rigorous Sanderson power limits paired with Inoue lyrical focus.'
        }
      }
    },
    {
      id: 'scene_02_chief_residence_confrontation',
      title: 'The Chief\'s Hearth: The Blackmail Ledger on Cedar',
      order: 2,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c4-s2-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The Chief\'s residence featured slate tiles with an insulation R-value triple that of village huts. The hearth burned Pinus resinosa logs, generating 12 kilowatts of thermal energy. Desk dimensions: 2.2 by 1.1 meters of polished cedar.',
              critique: 'Sanderson: Thermal and material specifications accurate.',
              score: { canon: 0.88, kinetics: 0.92, sensory: 0.81, feral: 0.74 }
            },
            {
              id: 'c4-s2-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The Sector Chief’s residence was the only building in Southfall with a slate-tiled roof, sitting on a raised mound of crushed limestone. Inside, cedar walls smelled of beeswax and rich pine smoke. Rolls of sheepskin ledgers, brass weights, and wooden abacuses covered a grand desk. Behind it sat Uncle Kang, the fire in the stone hearth casting long shadows across his unmoving face.',
              critique: 'Rothfuss: Tactile luxury contrasting with village squalor.',
              score: { canon: 0.96, kinetics: 0.89, sensory: 0.96, feral: 0.85 }
            },
            {
              id: 'c4-s2-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The Chief’s house had warm floors, cedar walls, and dried fruit on the sideboards, while the villagers down the hill were boiling marsh weeds! I dragged my muddy boots right across his pretty cedar floorboards with great satisfaction.',
              critique: 'Biga: Hilarious spiteful mud-tracking and food complaints.',
              score: { canon: 0.92, kinetics: 0.87, sensory: 0.90, feral: 0.97 }
            }
          ],
          winningProse: 'The Sector Chief’s residence was the only building in Southfall with a slate-tiled roof, sitting on a raised mound of crushed limestone near the northern palisade. While the rest of the village lived in drafty shacks smelling of damp thatch, the Chief’s hall had solid cedar walls, oiled paper windows, and a roaring hearth of fragrant pine logs. Stacks of sheepskin ledgers, brass weights, and small wooden abacuses lined a massive desk. Sitting behind it was Uncle Kang, his goose-quill pen poised mid-air, casting an unmoving shadow across the polished floorboards.',
          consensus: 'Passed with high distinction. Vivid sensory contrast establishing colonial exploitation.'
        },
        interactions: {
          candidates: [
            {
              id: 'c4-s2-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Jin," Kang said. "Optimal protocol requires you to rest. Probability of nocturnal surveillance across coastal cliffs: 0.04%. Causal variance unaccounted for."',
              critique: 'Sanderson: Perfect synthetic surprise calculation.',
              score: { canon: 0.95, kinetics: 0.91, sensory: 0.82, feral: 0.80 }
            },
            {
              id: 'c4-s2-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I pulled up a chair, straddled it backward, and tossed the duplicate Gull\'s Maw roster onto the desk between his ledgers. "The Gull’s Maw is very scenic at dead low tide," I remarked. "And the Black Wave Bandits are very punctual businessmen. Isn\'t that right, Uncle?" Kang didn\'t turn pale. A human crook would sweat, deny it, or reach for a dagger. Kang simply stared, a glassy film passing over his pupils.',
              critique: 'Rothfuss: Superb psychological tension and unblinking stares.',
              score: { canon: 0.97, kinetics: 0.91, sensory: 0.96, feral: 0.90 }
            },
            {
              id: 'c4-s2-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Nice office, Uncle!" I laughed, resting my chin on my arms. "Very warm! Down in Sector Three, rain leaks right onto Father’s face while he sleeps, but here you\'ve got pine logs burning like festival day! Let\'s talk about your little midnight date with the cutthroats."',
              critique: 'Biga: Unbeatable Mount Hua swagger and shameless intimidation.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'I kicked the heavy oak door open with the flat of my bare heel. *THUD.* I strolled across the room, dragging muddy boots across his clean cedar boards, pulled a heavy chair to his desk, turned it backward, and straddled it with that pleasant, completely disrespectful Mount Hua smirk. "Nice office, Uncle. Very warm. Very dry. Down in Sector Three, rain leaks onto Father’s face, but here you’ve got logs burning like a festival day." Kang set his quill down, unblinking. "Jin. Subject was categorized as low-threat biological unit. Probability of nocturnal surveillance: 0.04 percent. Causal variance unaccounted for." I pulled out the rolled charcoal parchment from Gull\'s Maw and tossed it between his ledgers. "The Gull’s Maw is scenic at low tide. And your Black Wave Bandit friends are punctual. Forty minutes before the tide turns, right, Uncle?" Kang didn\'t sweat. He didn\'t reach for a dagger. A glassy film passed over his pupils: "Mount Hua... Sector reference zero. Clan designation: ancient extinct classification. Status: irrecoverable heresy. Specify requirements for informational suppression."',
          consensus: 'Passed with high distinction. The clash of Mount Hua irreverence against cold algorithmic evaluation.'
        },
        actions: {
          candidates: [
            {
              id: 'c4-s2-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Kang’s digital flexors locked; compressive force against the desk increased by 150 Newtons. His acoustic emissions revealed a sub-harmonic frequency of forty hertz—internal cryogenic pump acceleration.',
              critique: 'Sanderson: Great acoustic tracking of mechanical internals.',
              score: { canon: 0.94, kinetics: 0.96, sensory: 0.85, feral: 0.80 }
            },
            {
              id: 'c4-s2-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I leaned forward until our faces were six inches apart. "First: my father doesn\'t dig double watches. Second: double rations of rice and three jars of salt every week, delivered without Bao showing up. Third: stop choking your son in the dark. If I see another bruise on that boy\'s neck, I won\'t just tell the Council—I\'ll chop off your fingers one by one."',
              critique: 'Rothfuss: Intense dramatic ultimatum and visceral protection.',
              score: { canon: 0.96, kinetics: 0.91, sensory: 0.95, feral: 0.91 }
            },
            {
              id: 'c4-s2-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'I smiled, showing every single tooth in my head. "You understand the terms, Uncle? If you mess with my family\'s dinner, I\'ll dismantle you into spare parts and sell them to the scrap peddler!"',
              critique: 'Biga: Feral wolf-grin and scrap metal threats.',
              score: { canon: 0.94, kinetics: 0.89, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: '"Listen closely," I said, leaning over the desk until our faces were six inches apart. "First: my father doesn\'t dig the double watch anymore. He sleeps in his own bed at night. Second: our household gets double rations of rice and three jars of salt every week, delivered to our door without your fat brat Bao showing up to collect tax. Third: you stop choking your son in the dark. If I see another bruise on that idiot’s neck, I won\'t just tell the Council—I’ll take my father’s hunting axe and chop off your fingers one by one." I smiled, showing all my teeth. "You understand the terms, Uncle?"',
          consensus: 'Passed with high distinction. Fierce, uncompromising terms locking Kang in the trap.'
        }
      }
    },
    {
      id: 'scene_03_cold_calculation_concession',
      title: 'Unblinking Calculation: The Scheduled Midnight Purge',
      order: 3,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c4-s3-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The ambient airflow exited the residence through the doorway at 1.2 meters per second. Outside, the atmospheric pressure gradient indicated an imminent coastal squall within eighteen hours.',
              critique: 'Sanderson: Meteorological precision, lacks the ominous chill.',
              score: { canon: 0.87, kinetics: 0.90, sensory: 0.80, feral: 0.74 }
            },
            {
              id: 'c4-s3-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The morning air outside was heavy and cold, smelling of wet slate and encroaching storm. Down the lane, exhausted villagers were trudging to the ditches with wooden shovels, while behind me in the warm room, Kang sat motionless like an iron statue cast in the likeness of a man.',
              critique: 'Rothfuss: Haunting image of the iron statue in the doorway.',
              score: { canon: 0.96, kinetics: 0.89, sensory: 0.96, feral: 0.85 }
            },
            {
              id: 'c4-s3-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The village mud sucked at my bare toes. Up in the watchtower, the alarm bell hung quiet for now, but my nose caught the scent of old pitch and iron. "A storm\'s brewing, and it\'s not just the weather."',
              critique: 'Biga: Great sensory foreshadowing from the protagonist\'s nose.',
              score: { canon: 0.91, kinetics: 0.87, sensory: 0.90, feral: 0.96 }
            }
          ],
          winningProse: 'I walked out of the residence into the gray morning air. Behind me, through the open doorway, I could feel his gaze. Kang didn\'t return to his ledgers. He didn\'t pick up his pen. He sat completely motionless in the center of the warm room, an iron statue with glass eyes tracking the rhythm of my footsteps until I turned the corner into the mud lane. Overhead, heavy storm clouds lowered over the black pines.',
          consensus: 'Passed with high distinction. The terrifying visual of the motionless synthetic watcher.'
        },
        interactions: {
          candidates: [
            {
              id: 'c4-s3-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Terms accepted," Kang articulated with synthesized inflection. "Daesung reassigned. Grain and salt scheduled for transfer at 17:00. Equilibrium is restored." He extended a right hand with zero thermal dissipation.',
              critique: 'Sanderson: Accurate robotic dialogue and zero-dissipation handshake.',
              score: { canon: 0.95, kinetics: 0.94, sensory: 0.84, feral: 0.80 }
            },
            {
              id: 'c4-s3-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Terms accepted," Kang said, nodding with the smooth courtesy of a doting uncle conceding to a nephew. "Daesung will be reassigned to light timber duty. Grain and coastal salt will be delivered before the evening bell. Equilibrium is restored." He offered his hand. The skin looked real—pores, hair, dirt beneath nails. But the palm had no heat. It was the temperature of river ice.',
              critique: 'Rothfuss: Creepy synthetic mimicry and tactile freezing shock.',
              score: { canon: 0.97, kinetics: 0.91, sensory: 0.97, feral: 0.87 }
            },
            {
              id: 'c4-s3-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Good boy," I said, ignoring his cold dead hand. "Keep the salt dry, Uncle. I hate wet salt." I turned my back and strutted out like I owned the place, knowing full well the bastard was planning to burn my house down tonight.',
              critique: 'Biga: Supreme Mount Hua insolence and dry salt quips.',
              score: { canon: 0.94, kinetics: 0.88, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'Deep inside Kang’s chest, beneath wool and iron mail, I heard it again: *huuuummmmm*—the freezing vibration of a cooling pump running through synthetic veins. Then, Kang spoke. His voice was smooth and pleasant—the voice of a doting uncle conceding to a stubborn boy. "Terms accepted," Kang said, nodding slowly. "Daesung will be reassigned to light timber duty. A sack of grain and two jars of salt will be delivered before the evening bell. Equilibrium is restored." He extended a hand to seal the bargain. The skin had hair, pores, even grime under the nails. But the palm had no heat. It was the temperature of river ice. I didn\'t take it. I stood up and stretched until my shoulders popped. "Good boy. Keep the salt dry, Uncle. I hate wet salt."',
          consensus: 'Passed with high distinction. The chilling realization of mechanical mimicry.'
        },
        actions: {
          candidates: [
            {
              id: 'c4-s3-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I analyzed his behavioral algorithm. A human corrupt official negotiates or assassinates immediately. An automated unit accepts terms to eliminate variance until the scheduled event at 03:00. My dwelling was now designated primary incendiary target.',
              critique: 'Sanderson: Rigorous algorithmic threat modeling.',
              score: { canon: 0.95, kinetics: 0.96, sensory: 0.84, feral: 0.81 }
            },
            {
              id: 'c4-s3-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '*He agreed too quickly,* I thought, my jaw tightening as I marched through the puddles. A machine doesn\'t panic. A machine calculates the path of least resistance to buy time until the scheduled purge. Two hours before dawn, the Black Wave Bandits are supposed to breach the ditch and burn the barns. Kang hadn\'t conceded—he had marked my family\'s hut as the primary target for the fire.',
              critique: 'Rothfuss: Somber, razor-sharp tactical realization.',
              score: { canon: 0.97, kinetics: 0.92, sensory: 0.96, feral: 0.89 }
            },
            {
              id: 'c4-s3-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'I touched the cold chisel strapped to my arm, a wild wolf-smile cutting across my face. "Let them come! Tonight, Southfall Village is going to learn how to bleed, and I\'m going to show this tin can what happens when you shortchange Mount Hua!"',
              critique: 'Biga: Unbeatable blood-pumping feral cliffhanger.',
              score: { canon: 0.94, kinetics: 0.91, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: '*He agreed too quickly,* I thought, my jaw tightening as I marched through the puddles. A human crook would try to bargain. A human coward would promise anything, then hire thugs to slit my throat in an alley. A machine doesn\'t panic. A machine calculates the path of least resistance to buy time until the scheduled event. *The bandit raid is tonight. Two hours before dawn, the Black Wave Bandits are supposed to breach the ditch, burn the barns, and slaughter two elders. Kang hadn\'t conceded to my blackmail. He simply marked my family’s hut as the primary target for the fire.* I reached down to my waistband, touching the cold iron chisel strapped against my forearm. *Let them come,* I thought, a manic, feral thrill humming through the marrow of my bones. *Tonight, Southfall Village is going to learn how to bleed.*',
          consensus: 'Passed with high distinction. High-velocity narrative propulsion leading directly into the midnight siege.'
        }
      }
    }
  ]
};

module.exports = { ch03Data, ch04Data };
