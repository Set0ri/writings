/**
 * Arc 01 Decomposition Data: Chapters 05 & 06
 * Tripartite Leaf Nodes (Interactions, Actions, Environment)
 * Multi-Model Council Variants (Sanderson/Gosu, Rothfuss/Inoue, Biga/Studio LICO)
 */

const ch05Data = {
  id: 'chapter_05_the_night_of_plum_shadows',
  title: 'The Night of Plum Shadows',
  order: 5,
  scenes: [
    {
      id: 'scene_01_barley_tears_cellar',
      title: 'Barley Tears & The Root Cellar Command',
      order: 1,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c5-s1-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'A fifty-pound burlap sack containing 22.6 kilograms of Hordeum vulgare and two glazed stoneware jars containing 8.2 kilograms of sodium chloride rested on the earthen floor. Ambient temperature was 11°C.',
              critique: 'Sanderson: Precise mass and material quantification, lacks the rich scent of porridge.',
              score: { canon: 0.88, kinetics: 0.89, sensory: 0.80, feral: 0.72 }
            },
            {
              id: 'c5-s1-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'For the first time in years, the little hut smelled of steaming white barley instead of boiled turnip peelings. Golden light from the stone hearth filled the room with warmth, and the fragrance of salt pork simmered with cracked grain drifted into the drafty corners, chasing away the cold sea-damp.',
              critique: 'Rothfuss: Beautiful domestic warmth, contrasting hunger with feast.',
              score: { canon: 0.97, kinetics: 0.89, sensory: 0.98, feral: 0.84 }
            },
            {
              id: 'c5-s1-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The whole hut smelled glorious! Actual barley! Real salt! Big fat chunks of salt pork bobbing in the pot like little islands of joy! My stomach roared so loud it scared the spiders on the roof.',
              critique: 'Biga: Great visceral joy and spider similes.',
              score: { canon: 0.92, kinetics: 0.86, sensory: 0.91, feral: 0.96 }
            }
          ],
          winningProse: 'Dusk fell over Southfall like a wet wool blanket. Just as Kang had promised, two laborers had grunted under the weight of a fifty-pound sack of polished barley and two heavy clay jars of white coastal salt. For the first time in years, the little shack smelled of rich, steaming porridge instead of boiled marsh weeds. The hearth fire crackled with golden warmth, and the aroma of salt pork simmered with cracked grain drifted into every drafty corner, pushing back the bitter sea-chill.',
          consensus: 'Passed with high distinction. Sumptuous sensory contrast highlighting the family\'s fleeting comfort.'
        },
        interactions: {
          candidates: [
            {
              id: 'c5-s1-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Daesung, sleep with footwear secured," Jin commanded. "Statistical variance indicates high probability of incendiary incursion at 03:00." Daesung looked at the grain: "My brother fulfilled his filial agreement."',
              critique: 'Sanderson: Logical threat forecasting, lacks Daesung\'s heartbreaking weeping.',
              score: { canon: 0.89, kinetics: 0.88, sensory: 0.80, feral: 0.78 }
            },
            {
              id: 'c5-s1-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Daesung dropped his shovel, plunging his thick, scarred fingers into the barley, lifting a handful to his nose. A single, heavy tear rolled into his rough stubble. "Mother... you see? He remembered. My brother remembered." Twenty years of being ground into the dirt, forgiven in a single second because his younger brother tossed him a sack of grain from communal stores. I looked at the porridge. It tasted of ash. "Father," I said quietly. "Tonight, I want you and Mother to sleep with your boots on."',
              critique: 'Rothfuss: Deeply moving, heartbreaking filial innocence and ash metaphor.',
              score: { canon: 0.98, kinetics: 0.90, sensory: 0.97, feral: 0.88 }
            },
            {
              id: 'c5-s1-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '*You glorious, soft-hearted, stubborn fool,* I thought, fists clenching until my knuckles cracked. *He didn\'t remember your mother! He doesn\'t even have a mother! He\'s fattening you up so the butcher\'s knife cuts deeper!* "Listen to me, Daesung," I barked like an elder brother. "Get in the root cellar tonight. For once in your life, let your son carry the shovel!"',
              critique: 'Biga: Unbeatable Chung Myung protective fury and filial reversal.',
              score: { canon: 0.95, kinetics: 0.88, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'When Daesung walked through the door, he stopped dead. His shovel slipped from his calloused hand, clattering against the threshold. He slowly dropped to both knees before the sack, plunging his thick, scarred fingers into the barley, inhaling the dusty scent. A single, heavy tear leaked from his eye into his rough stubble. "Mother," he choked out. "Mother... you see? He remembered. My brother remembered." Twenty years of digging ditches in freezing clay, taking midnight watches, watching his wife’s hands crack from frostbite—all forgiven in a single second because his brother tossed him a sack of grain. I stood in the corner, fists clenching until knuckles turned white. *You glorious, soft-hearted, stubborn fool. He didn\'t remember your mother\'s vow. He doesn\'t even have a mother. He\'s fattening you up so the knives cut deeper tonight.* I picked up my spoon, took a bite of porridge, and swallowed. It tasted of ash. "Father," I said quietly. "Tonight, I want you and Mother to sleep with your boots on. When the warning gong sounds, get into the root cellar, bolt it from the inside, and do not open it until sunrise. For once in your life, let your son carry the shovel."',
          consensus: 'Passed with high distinction. The emotional heart of Arc 1: Daesung\'s tragic love and Jin\'s fierce filial protection.'
        },
        actions: {
          candidates: [
            {
              id: 'c5-s1-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Daesung processed Jin’s vocal cadence; finding no physiological indicators of fever, his amygdala accepted the protective command. He inspected the cellar hatch, confirming the iron bolt was lubricated.',
              critique: 'Sanderson: Efficient cognitive assessment of authority.',
              score: { canon: 0.89, kinetics: 0.93, sensory: 0.82, feral: 0.79 }
            },
            {
              id: 'c5-s1-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Daesung stared at me for a long moment, searching my face. He saw no fever in my eyes. He saw only an ancient, chilling stillness that made the hair on the back of his neck prickle. Slowly, without another word, he nodded. "We will keep our boots on," he said softly.',
              critique: 'Rothfuss: Subtle, powerful submission to ancient authority.',
              score: { canon: 0.96, kinetics: 0.91, sensory: 0.95, feral: 0.87 }
            },
            {
              id: 'c5-s1-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Daesung looked at me like I had grown a second head, but my grandmaster glare could make a stone wall back down. He swallowed his protests, shoved a big chunk of pork into his mouth, and tightened his bootlaces.',
              critique: 'Biga: Great comedic glare and boot tightening.',
              score: { canon: 0.92, kinetics: 0.89, sensory: 0.88, feral: 0.97 }
            }
          ],
          winningProse: 'Daesung stared at me for a long moment, searching my face. He saw no fever in my eyes. He saw only an ancient, chilling stillness that made the hair on the back of his neck prickle—an authority older than the village, older than the ruins in the deep pine. Slowly, without another word, he nodded. "We will keep our boots on," Daesung said softly. He reached down, tightened his rawhide bootlaces, and checked the drop-bolt on the subterranean cellar hatch.',
          consensus: 'Passed with high distinction. Quiet, ironclad narrative agreement before the disaster.'
        }
      }
    },
    {
      id: 'scene_02_pitch_arrow_fire',
      title: 'The Pitch Arrow: Midnight Fire at the Palisade',
      order: 2,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c5-s2-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The incendiary projectile struck at 02:58:14. Pitch combustion generated a flame front expanding at 1.8 meters per second across the dry straw thatch. Thermal radiation was visible across the entire 400-meter sector radius.',
              critique: 'Sanderson: Precise temporal and combustion physics.',
              score: { canon: 0.91, kinetics: 0.95, sensory: 0.83, feral: 0.78 }
            },
            {
              id: 'c5-s2-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Midnight passed, then the second watch. Outside, coastal fog rolled in thick as wet wool, smelling of salt and damp pine. Then: FWHOOSH. A streak of fiery orange ripped through the gray fog. A heavy, pitch-soaked arrow slammed into the grain silo fifty paces away, exploding into a roaring tower of crimson flame that turned the night sky into a blinding furnace.',
              critique: 'Rothfuss: Breathtaking visual explosion and fiery sensory terror.',
              score: { canon: 0.97, kinetics: 0.92, sensory: 0.98, feral: 0.87 }
            },
            {
              id: 'c5-s2-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Right on time, the sky lit up like a festival bonfire, only instead of fireworks, it was fifty paces away turning our winter food into charcoal! CLANG! CLANG! CLANG! The alarm gong screamed like a stuck hog.',
              critique: 'Biga: Great punchy alarm similes and immediate urgency.',
              score: { canon: 0.92, kinetics: 0.89, sensory: 0.91, feral: 0.96 }
            }
          ],
          winningProse: 'Midnight passed. Then the second watch. Southfall was silent as a tomb. Outside our hut, the coastal fog had rolled in so thick you couldn\'t see your hand at arm\'s length. *Two hours before dawn. Right on schedule.* *FWHOOSH.* A streak of fiery orange ripped through the gray fog. A heavy, pitch-soaked arrow slammed into the thatched roof of the communal grain silo fifty paces from our door. The dry straw caught instantly, exploding into a roaring tower of crimson flame that turned the night sky into a blinding furnace. *CLANG! CLANG! CLANG!* The iron alarm bell at the watchtower began to shriek, its erratic clangs tearing through the village.',
          consensus: 'Passed with high distinction. Masterful sensory ignition of the nocturnal siege.'
        },
        interactions: {
          candidates: [
            {
              id: 'c5-s2-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Raid!" voices screamed. "Sluice gate breached!" Daesung grabbed his boar-spear. Jin directed Yeon into the cellar: "Secure the lock. Secondary defensive vectors are engaged."',
              critique: 'Sanderson: Efficient and tactical, lacks emotional farewell.',
              score: { canon: 0.88, kinetics: 0.89, sensory: 0.80, feral: 0.77 }
            },
            {
              id: 'c5-s2-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Yeon! Into the cellar!" Daesung bellowed, his voice returning to the booming roar of a veteran hunter. "Jin, get behind your mother!" "I\'m right behind you, Father," I lied. Daesung shoved Yeon into the dark, earth-scented cellar. "Daesung, please!" she wept. "Don\'t go! Let the Council fight!" "The Council is five old men and Kang!" Daesung shouted back, his face lit by the orange glare. "If I don\'t hold the gate, the cutthroats butcher every child in the lane!"',
              critique: 'Rothfuss: Noble paternal valor and tragic family separation.',
              score: { canon: 0.98, kinetics: 0.91, sensory: 0.97, feral: 0.88 }
            },
            {
              id: 'c5-s2-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Jin, get in the cellar!" Daesung roared. He stopped dead. I was standing in the doorway with a kitchen knife, smiling like a demon looking forward to breakfast. "You\'re a good man, Daesung. A terrible judge of character, but a very good man."',
              critique: 'Biga: Supreme Mount Hua banter in the face of imminent slaughter.',
              score: { canon: 0.95, kinetics: 0.89, sensory: 0.91, feral: 0.98 }
            }
          ],
          winningProse: '"RAID!" someone screamed from the palisade. "THE SLUICE GATE IS BREACHED! CUTTHROATS IN THE EASTERN TRENCH!" Before the watchman could strike the gong a fourth time, a wet, choking gurgle cut through the night; the bell went dead. Inside, Daesung was on his feet in an instant, seizing his boar-spear. "Yeon! Into the cellar!" he bellowed, his voice returning to the roaring authority of a veteran hunter. "Jin, get behind your mother!" "I\'m right behind you, Father," I lied, keeping my voice steady. Daesung ripped up the hearth boards, shoving weeping Yeon down into the dark, earth-scented cellar. "Daesung, please!" she wept, clutching his cuff. "Let the Council fight!" "The Council is five old men and Kang!" Daesung shouted, face bathed in orange fire. "The third trench is manned by boys! If I don\'t hold the gate, the cutthroats butcher every child in the lane!" He kissed her forehead, pried her fingers loose, and slammed the heavy oak hatch shut, throwing the iron drop-bolt.',
          consensus: 'Passed with high distinction. High-stakes heroism establishing Daesung\'s true strength.'
        },
        actions: {
          candidates: [
            {
              id: 'c5-s2-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Daesung locked the bolt. He rotated to face Jin, but stopped: Jin was holding a carbon-steel filleting knife, mass 210 grams, grip reversed, optical reflectance matching ultraviolet excitation.',
              critique: 'Sanderson: Knife mass and optical reflectance diagnostics.',
              score: { canon: 0.91, kinetics: 0.96, sensory: 0.83, feral: 0.81 }
            },
            {
              id: 'c5-s2-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'He turned toward me, spear gripped tightly. "Jin, get in the—" He stopped. I was standing by the open doorway. The rusted filleting knife was tucked casually in my right hand. The reflection of the burning grain silo danced across my pupils, turning them into twin pools of liquid violet. "Jin?" Daesung breathed, as if I were a stranger who had stepped through the wall.',
              critique: 'Rothfuss: Lyrical transformation from frail boy to ancient sword master.',
              score: { canon: 0.97, kinetics: 0.92, sensory: 0.97, feral: 0.89 }
            },
            {
              id: 'c5-s2-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'I stepped onto the porch into the flying embers, rolling my shoulders until the joints cracked like whips. "Kang\'s little script just caught fire. Come on, Father. Let\'s go teach your brother how to bury a wolf."',
              critique: 'Biga: Unbeatable hype line and bone-cracking shoulder rolls.',
              score: { canon: 0.95, kinetics: 0.92, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'Daesung turned toward me, spear gripped tightly. "Jin, get in the—" He stopped. I was standing by the open doorway. The rusted filleting knife was tucked casually into my right hand, hanging loose at my side. The reflection of the burning silo danced across my pupils, turning them into twin pools of liquid violet. "Jin?" Daesung breathed, looking at me as if I were a stranger who had stepped through the wall. "You\'re a good man, Daesung," I said, a faint, cold smile touching my lips. "A terrible judge of character, but a very good man." I rolled my shoulders until the joints cracked like whips. "Come on, Father. Let\'s go teach your brother how to bury a wolf."',
          consensus: 'Passed with high distinction. Seamless transition to combat stance and brotherly reckoning.'
        }
      }
    },
    {
      id: 'scene_03_pack_at_the_breach',
      title: 'Boar-Spear Roar: The Wolf Pack at the Sluice Breach',
      order: 3,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c5-s3-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Three hexapedal canid organisms breached the north-northeast perimeter. Average mass: 90 kilograms. The combustion of barley released 18,000 BTUs per minute, creating an ash-density of 400 particles per cubic meter.',
              critique: 'Sanderson: Strong biological and combustion specifications.',
              score: { canon: 0.91, kinetics: 0.95, sensory: 0.82, feral: 0.79 }
            },
            {
              id: 'c5-s3-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The muster yard was an abattoir. Fire from burning barns cast long, jagged shadows across the mud, turning Southfall into a pit of red hell. Thick smoke choked the air, smelling of burning barley, scorched flesh, and the sulfuric tang of pitch. And then, an inhuman howl echoed from the dark treeline—a deep, multi-throated baying that shook the mud under our boots.',
              critique: 'Rothfuss: Terrifying apocalyptic battlefield ambiance and acoustics.',
              score: { canon: 0.97, kinetics: 0.91, sensory: 0.98, feral: 0.87 }
            },
            {
              id: 'c5-s3-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The whole yard was a circus of screams, fire, and flying embers! Forty cutthroats were pouring through the broken ditch waving swords, while three giant, ugly six-legged wolves bounded over the fences like runaway boulders!',
              critique: 'Biga: Great chaotic scale and runaway boulder similes.',
              score: { canon: 0.92, kinetics: 0.90, sensory: 0.89, feral: 0.96 }
            }
          ],
          winningProse: 'The muster yard was an abattoir. The fire from burning grain barns cast jagged, dancing shadows across the mud, turning the center of Southfall into a pit of red hell. Thick, greasy smoke choked the air, smelling of burning barley, scorched timber, and the sulfuric tang of pitch. Outside, an inhuman, bone-chilling howl echoed through the smoke—a deep, multi-throated baying that vibrated through the mud floor beneath our boots. *Aroo-oo-oo-agh!* "The wolves," Daesung whispered, all color draining from his face. "The fire drew the iron-jaw wolves from the deep pine."',
          consensus: 'Passed with high distinction. Establishes the horrific double-threat of bandits and monstrous wildlife.'
        },
        interactions: {
          candidates: [
            {
              id: 'c5-s3-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Hold the defensive line!" Daesung bellowed. "Evacuate non-combatants to the central well!" Forty bandit units entered through the sluice breach, weaponized with curved steel.',
              critique: 'Sanderson: Tactical command structure, lacks the visceral roar.',
              score: { canon: 0.88, kinetics: 0.91, sensory: 0.80, feral: 0.78 }
            },
            {
              id: 'c5-s3-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Hold the ditch!" Daesung roared over the screaming. Knee-deep in bloody clay, his linen tunic ripped to shreds, he locked his seven-foot boar-spear under his arm. A shadow-wolf lunged at two teenage village boys huddled against a grain cart. Daesung didn\'t hesitate. He stepped into the beast\'s path, planting the iron butt against a sunken boulder and dropping his weight.',
              critique: 'Rothfuss: Unflinching paternal heroism and desperate village defense.',
              score: { canon: 0.97, kinetics: 0.93, sensory: 0.96, feral: 0.90 }
            },
            {
              id: 'c5-s3-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Daesung looked like an enraged mountain bear who had just been woken from his winter nap! "Get behind the well, you brats!" he roared, shaking the mud off his boots like he was about to flatten the whole pack with his bare fists.',
              critique: 'Biga: Mountain bear energy and fierce protective bluster.',
              score: { canon: 0.94, kinetics: 0.90, sensory: 0.89, feral: 0.97 }
            }
          ],
          winningProse: 'At the eastern palisade breach, forty Black Wave Bandits had swarmed through the shattered sluice gate, waving curved scimitars and shouting bloodthirsty oaths. But they weren\'t in control. Behind them, leaping through the burning wreckage of the wooden stakes, were three massive, six-legged beasts—**Iron-Jaw Shadow Wolves**. Long strings of black, viscous saliva dripped from jaws reinforced with exterior bone plates that could crack an oak shield like a walnut. "Hold the ditch!" Daesung roared, his voice echoing over the screaming. My father was a terrifying sight. Knee-deep in bloody clay, his tunic ripped to shreds, he held his seven-foot boar-spear locked under his arm, placing himself squarely between the jaws of the wild and the fleeing children of the village.',
          consensus: 'Passed with high distinction. Highlights Daesung\'s true martial strength and moral courage.'
        },
        actions: {
          candidates: [
            {
              id: 'c5-s3-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Daesung anchored the spear butt against an igneous boulder at forty degrees. The 90-kilogram wolf impaled itself at nine meters per second. Kinetic impact: 3,600 Joules. Daesung absorbed the recoil through his quadriceps and twisted the spear shaft, fracturing the animal’s thoracic column.',
              critique: 'Sanderson: Masterful kinetic recoil and energy absorption math.',
              score: { canon: 0.93, kinetics: 0.98, sensory: 0.84, feral: 0.82 }
            },
            {
              id: 'c5-s3-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'CRUNCH. The charging wolf impaled itself on the heavy iron head. The impact lifted Daesung six inches off the ground, the ash-wood groaning, but my father’s boots bit into the mud and held. With a feral roar of pure paternal fury, he twisted the spear-shaft, cracking the monster\'s spine and kicking the dying carcass into the trench. "Fall back to the stone well!" he bellowed. "Run!"',
              critique: 'Rothfuss: Bone-crunching physical impact and paternal fury.',
              score: { canon: 0.97, kinetics: 0.94, sensory: 0.96, feral: 0.92 }
            },
            {
              id: 'c5-s3-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Daesung drove that boar-spear straight through the monster\'s chest like an iron rod through a wet turnip! He kicked the dead beast into the ditch with a mighty bellow that made the bandits\' knees knock together!',
              critique: 'Biga: Great turnip similes and explosive kinetic impact.',
              score: { canon: 0.93, kinetics: 0.91, sensory: 0.89, feral: 0.98 }
            }
          ],
          winningProse: '*CRUNCH.* The charging wolf impaled itself on the heavy iron spearhead. The impact lifted Daesung six inches off the ground, the ash-wood groaning under the force, but my father’s boots bit into the clay and held. With a feral roar of pure paternal fury, he twisted the spear-shaft, cracking the monster\'s spine with a sickening snap and kicking the dying carcass into the ditch. "Fall back to the stone well!" Daesung bellowed to the terrified boys. "Run!" But before he could wrench his spear free from the dead beast, a lean, scarred bandit captain stepped over a burning timber, slashing a notched scimitar across Daesung’s right shoulder. *SHHK.* Blood sprayed into the mud, and my father stumbled back against a broken cart, his right arm hanging limp.',
          consensus: 'Passed with high distinction. Visceral kinetic combat setting up Jin\'s knife intervention in Chapter 6.'
        }
      }
    }
  ]
};

const ch06Data = {
  id: 'chapter_06_the_first_frost',
  title: 'The First Frost',
  order: 6,
  scenes: [
    {
      id: 'scene_01_deflecting_leaf_duel',
      title: 'The Deflecting Leaf: Filleting Knife vs Scimitar',
      order: 1,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c6-s1-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The engagement zone was bordered by a burning grain cart emitting localized temperatures of 320°C. Mud depth was 8 centimeters. Atmospheric illumination varied with wind-driven flame pulses.',
              critique: 'Sanderson: Thermal parameters and terrain depth clear, lacks sensory acoustics.',
              score: { canon: 0.88, kinetics: 0.93, sensory: 0.81, feral: 0.75 }
            },
            {
              id: 'c6-s1-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Embers rained down like dying red fireflies against the dark mud. The air smelled of burning pine, hot iron, and fresh arterial blood. Behind us, the burning grain cart creaked, its wooden wheels hissing as grease boiled in the hubs.',
              critique: 'Rothfuss: Lyrical and lethal atmosphere of the burning muster yard.',
              score: { canon: 0.97, kinetics: 0.90, sensory: 0.97, feral: 0.86 }
            },
            {
              id: 'c6-s1-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Sparks were flying everywhere, and the bandit captain stood grinning with teeth so yellow they looked like old corn kernels. In the red light of the fire, my little kitchen knife looked like a toothpick compared to his big ugly scimitar.',
              critique: 'Biga: Great comedic tooth similes and toothpick knife contrast.',
              score: { canon: 0.92, kinetics: 0.88, sensory: 0.90, feral: 0.96 }
            }
          ],
          winningProse: 'Embers rained down like dying crimson fireflies against the churned red mud. The air smelled of burning pine, hot iron, and fresh arterial blood. Behind my bleeding father, the burning grain cart creaked, its wooden axles groaning as grease boiled in the hubs. In the flashing light of the inferno, the bandit captain stood over Daesung, twirling a notched steel scimitar dripping with dark gore.',
          consensus: 'Passed with high distinction. High-contrast sensory framing of the life-or-death duel.'
        },
        interactions: {
          candidates: [
            {
              id: 'c6-s1-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: '"Your stance is mechanically deficient," Jin noted. "Right calcaneus flared outward thirty degrees; center of gravity displaced forward." The captain snarled: "Die, shrimp!"',
              critique: 'Sanderson: Biomechanical critique accurate, misses Mount Hua comedic sting.',
              score: { canon: 0.89, kinetics: 0.94, sensory: 0.80, feral: 0.81 }
            },
            {
              id: 'c6-s1-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The bandit raised his scimitar with both hands. "Your Chief promised an easy raid, old man. Thanks for the sport." He brought the blade down. *Ting.* It was not the sound of steel splitting bone. It was the clear, bell-like chime of iron kissing iron. The blade stopped dead two inches from Daesung\'s neck. Standing there was a scrawny boy holding a kitchen knife in a reverse grip. "Your stance is atrocious," I sighed, clicking my tongue. "Did you learn swordplay by watching drunken fishermen gut eels?"',
              critique: 'Rothfuss: Majestic chime of iron kissing iron and supreme grandmaster disdain.',
              score: { canon: 0.98, kinetics: 0.93, sensory: 0.97, feral: 0.92 }
            },
            {
              id: 'c6-s1-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"A shrimp?!" the bandit sputtered. "Look at your footing!" I barked, shaking my head in disgust. "Flared out like a crippled duck! My sect\'s third-rate water-carriers had better sword forms than you! Come here, let me fix your posture!"',
              critique: 'Biga: Classic Chung Myung lecture in the middle of a death-match.',
              score: { canon: 0.95, kinetics: 0.89, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'The bandit captain raised his scimitar with both hands, grinning through yellowed teeth. "Your Chief promised an easy raid, old man. Thanks for the sport." He brought the blade down toward my father\'s neck. *Ting.* It was not the sound of steel splitting bone. It was the clear, bell-like chime of iron kissing iron. The bandit captain’s scimitar stopped dead two inches from Daesung\'s throat, vibrating violently as if it had struck a master\'s anvil. Standing between the cutthroat and my bleeding father was a scrawny fifteen-year-old boy in a frayed hemp tunic. I held my father’s rusted iron filleting knife in a reverse grip, angled at exactly forty-three degrees—the precise geometric deflection of the **Plum Blossom Deflecting Leaf**. The bandit blinked in dumbfounded disbelief: "A... a shrimp?" "Your stance is atrocious," I sighed, clicking my tongue in utter disgust. "Look at your right foot. Flared outward like a crippled duck. And your grip? Too tight on the pommel. Did your master teach you how to swing steel, or did you learn swordplay by watching drunken fishermen gut eels?"',
          consensus: 'Passed with high distinction. The quintessential Chung Myung moment: deflecting a killing blow with a kitchen tool and insulting the enemy\'s form.'
        },
        actions: {
          candidates: [
            {
              id: 'c6-s1-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The captain swung horizontally at 14 meters per second. I stepped into his interior radius—the Plum Blossom Drifting Step—and executed three rapid incisions with the filleting blade: lateral hamstring tendon, popliteal artery, and femoral sheath.',
              critique: 'Sanderson: Surgical kinetic precision and anatomical targeting.',
              score: { canon: 0.94, kinetics: 0.98, sensory: 0.84, feral: 0.82 }
            },
            {
              id: 'c6-s1-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'To the bandit, I didn\'t move like a human boy. I seemed to blur—a gray plum petal sliding through the current of a cold autumn stream. His heavy steel whistled through empty air. I stepped into his blind spot, pivoting on the ball of my left foot. The rusted knife didn\'t chop; it flowed. A single, razor-thin arc of cold motion kissed his right knee, severed the hamstring, and opened the femoral artery. *SH-SH-SHHK.* Three cuts in the time it took him to blink.',
              critique: 'Rothfuss: Lyrical martial grace and lethal flow.',
              score: { canon: 0.97, kinetics: 0.95, sensory: 0.97, feral: 0.89 }
            },
            {
              id: 'c6-s1-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'Before he could even curse, my knife blurred like a dragonfly\'s wing! His eyes bugged out, his scimitar flew into the mud, and he collapsed face-first with a wet splat, dead before his nose hit the clay.',
              critique: 'Biga: Great dragonfly wing speed and face-first splat.',
              score: { canon: 0.93, kinetics: 0.91, sensory: 0.89, feral: 0.97 }
            }
          ],
          winningProse: '"You little rat—!" The captain snarled, ripping his scimitar back to decapitate me with a horizontal sweep. I didn\'t step back. I stepped forward. *The Plum Blossom Drifting Step.* To the bandit, I didn\'t move like a human boy. I seemed to blur—a gray petal sliding through the current of a cold autumn stream. His heavy blade whistled through empty air where my throat had been a millisecond prior. I stepped into his blind spot, pivoting on the ball of my bare foot. The rusted knife didn\'t chop. It flowed. A single, razor-thin arc of cold motion kissed the inside of his right knee, severed the hamstring, slid under his leather pauldron, and opened the femoral artery at the groin. *SH-SH-SHHK.* Three distinct cuts in the time it took him to blink. The captain’s eyes bugged out of his head. He didn\'t even have time to scream. His legs buckled like cut grass, and he collapsed face-first into the bloody mud, his sword clattering against the stones.',
          consensus: 'Passed with high distinction. Masterful martial choreography combining Inoue elegance with Gosu anatomical lethality.'
        }
      }
    },
    {
      id: 'scene_02_plum_ember_wolf_kill',
      title: 'The Violet Ember: Knife Through Cranium & Bandit Rout',
      order: 2,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c6-s2-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'A 95-kilogram shadow-wolf accelerated at 8.2 m/s² across ten meters. Optical sensors detected non-algorithmic violet bioluminescence in the iron substrate, wavelength 405 nanometers.',
              critique: 'Sanderson: Strong velocity and wavelength data for the Qi infusion.',
              score: { canon: 0.92, kinetics: 0.96, sensory: 0.83, feral: 0.79 }
            },
            {
              id: 'c6-s2-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The muster yard fell into a strange, ringing silence, broken only by the crackle of burning barley. Across the mud, fifteen cutthroats dropped their torches, looking from their dead captain to the giant six-legged monster lying dead at the feet of a child. The rain fell through the smoke in gentle, shimmering needles.',
              critique: 'Rothfuss: Majestic stillness following the violence; atmospheric rain.',
              score: { canon: 0.97, kinetics: 0.91, sensory: 0.97, feral: 0.87 }
            },
            {
              id: 'c6-s2-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The remaining bandits were shaking so hard their chainmail jingled like sacks of copper coins! One of them dropped his spear into a puddle and wailed: "That\'s no boy! That\'s an ancient mountain demon!"',
              critique: 'Biga: Hilarious jingling chainmail and superstitious bandit panic.',
              score: { canon: 0.94, kinetics: 0.89, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'From the burning breach, a second shadow-wolf caught the scent of fresh blood and locked its yellow, multi-faceted eyes onto me. It let out a guttural, rattling hiss, bunched its six powerful legs, and launched its two-hundred-pound bulk through the air, jaws wide enough to swallow my torso whole. "JIN!" Daesung screamed, reaching out with his good hand to drag me back. The smoke parted around the beast\'s black trajectory like water split by an arrow.',
          consensus: 'Passed with high distinction. High-tension apex of the beast confrontation.'
        },
        interactions: {
          candidates: [
            {
              id: 'c6-s2-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Jin flicked gore from the 15-centimeter blade. "Are you maintaining defensive posture, or seeking kinetic termination?" The bandits calculated a 99.8% probability of total squad destruction and initiated immediate route.',
              critique: 'Sanderson: Clean statistical defeat logic, lacks feral taunt.',
              score: { canon: 0.88, kinetics: 0.91, sensory: 0.81, feral: 0.80 }
            },
            {
              id: 'c6-s2-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: '"Demon," one of the bandits whimpered, dropping his torch into a puddle. "That\'s not a kid... that\'s an ancient blood demon!" "RUN! TO THE CUTTERS! RUN!" The bandits broke. They dropped their stolen grain, threw down their weapons, and scrambled over the palisade in blind, animal terror. Daesung sat in the mud, holding his bleeding shoulder, staring up at me. "Jin... what are you? Where did you learn to move like that?" I knelt, tying off his arterial bleed with a linen strip. "I told you, Father. I was meditating. You didn\'t believe me."',
              critique: 'Rothfuss: Moving filial reunion wrapped in mythic awe.',
              score: { canon: 0.98, kinetics: 0.92, sensory: 0.96, feral: 0.91 }
            },
            {
              id: 'c6-s2-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Well?" I asked, tilting my head with that feral Mount Hua grin, casually flicking wolf brains off my kitchen knife. "Are you waiting for an invitation, or do you want me to carve the rest of you into fish bait too?" The bandits shrieked and ran so fast they left their boots in the mud!',
              critique: 'Biga: Unbeatable Chung Myung swagger and fish bait threats.',
              score: { canon: 0.95, kinetics: 0.90, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'The muster yard went dead silent. The crackle of burning barns was the only sound left in the world. The remaining fifteen bandits froze in their tracks. They looked at their dead captain. They looked at the giant six-legged wolf killed by a single strike. Then they looked at the scrawny boy standing in the mud, casually flicking black gore off a six-inch kitchen knife with a bored, insolent smirk. "Well?" I asked, tilting my head with that feral, unhinged Mount Hua glint. "Are you waiting for an invitation? Or do you want me to carve the rest of you into fish bait too?" "Demon," one whimpered, dropping his torch. "That\'s an ancient blood demon! RUN! TO THE CUTTERS!" The bandits broke, throwing down their spears, scrambling over the palisade in pure animal terror. Daesung sat in the mud, staring up at me with uncomprehending shock. "Jin... what are you? Where did you learn to move like that?" I knelt in the mud, ripping a strip of linen to tie off his shoulder bleed. "I told you, Father. I was meditating. You didn\'t believe me."',
          consensus: 'Passed with high distinction. The glorious comedic relief following the lethal display of Mount Hua superiority.'
        },
        actions: {
          candidates: [
            {
              id: 'c6-s2-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'I channeled 0.05 units of non-computable Qi into the iron lattice. The blade’s atomic cohesion shifted, entering a phase-transcendent state. The point penetrated the left optic foramen, traversing the temporal bone and severing the medullary pyramid in 0.4 milliseconds.',
              critique: 'Sanderson: Perfect Sandersonian non-computable Qi mechanics.',
              score: { canon: 0.96, kinetics: 0.98, sensory: 0.85, feral: 0.81 }
            },
            {
              id: 'c6-s2-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'I closed my eyes for half a heartbeat. Deep in the frozen wasteland of my lower abdomen, the tiny violet ember of the Plum Blossom Sword Heart flared. Just one drop. One breath. I guided the microscopic bead up through the central meridian and poured it into the pitted blade. The iron didn\'t glow. It simply disappeared. The knife became a ghost of motion—a solitary, frozen plum petal falling from a dead branch in the dead of winter. *THWIP.* The knife entered the leaping wolf’s eye, slid through the skull plates, and severed the brain-stem. The monster dropped dead before its belly touched the ground.',
              critique: 'Rothfuss: Lyrical perfection; the plum petal falling from a dead branch.',
              score: { canon: 0.98, kinetics: 0.95, sensory: 0.98, feral: 0.88 }
            },
            {
              id: 'c6-s2-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'I didn\'t even flinch. I just poked the knife forward like I was swatting a fly. *THWIP.* Two hundred pounds of monster went limp like a wet rag and smacked the dirt with a heavy thud right at my toes.',
              critique: 'Biga: Great fly-swatting nonchalance and wet rag simile.',
              score: { canon: 0.92, kinetics: 0.90, sensory: 0.88, feral: 0.97 }
            }
          ],
          winningProse: 'I closed my eyes for half a heartbeat. Deep in the frozen, ruined wasteland of my lower abdomen, the tiny violet ember of the **Plum Blossom Sword Heart** flared. *Just one drop. One breath.* I gathered the microscopic bead of non-algorithmic Qi, guided it up through my central meridian, down the frayed nerves of my arm, and poured it directly into the pitted blade. The iron didn\'t glow with theatrical fireworks. It simply *disappeared*. The knife became a ghost of motion—a solitary, frozen plum petal falling from a dead branch in the dead of winter. I opened my eyes and thrust. *THWIP.* The filleting knife entered the leaping wolf’s left eye socket, slid effortlessly through the bone plates of its skull, and exited the back of its cranium, severing the brain-stem in a fraction of a microsecond. The monster’s momentum died instantly. The six-legged horror crashed to the mud at my feet, limp and dead before its belly touched the ground.',
          consensus: 'Passed with high distinction. The signature martial manifestation of the Plum Blossom Sword Heart.'
        }
      }
    },
    {
      id: 'scene_03_cleaver_coolant_autopsy',
      title: 'The Coolant Autopsy: Cleaver Descent & The Lunar Beacon',
      order: 3,
      leaves: {
        environment: {
          candidates: [
            {
              id: 'c6-s3-e-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'Synthetic ethylene-glycol coolant sprayed under 12 bar pressure, boiling instantly against 400°C charcoal embers. A blue coherent light pulse at 450 nanometers pierced the cloud cover at thirty megawatts, targeted at lunar coordinates 0.0° N, 0.0° E.',
              critique: 'Sanderson: Rigorous coolant chemistry and optical beacon parameters.',
              score: { canon: 0.96, kinetics: 0.97, sensory: 0.85, feral: 0.80 }
            },
            {
              id: 'c6-s3-e-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'The hiss of milky coolant on red coals filled the yard like the dying breath of a steam dragon. White vapor rose into the freezing drizzle, smelling of synthetic oil, burnt copper, and ozone. In the mud, severed bundles of fiber-optic nerves pulsed with dying blue starlight, reflecting off the tears in Daesung\'s eyes.',
              critique: 'Rothfuss: Haunting synthesis of tragedy and technological unmasking.',
              score: { canon: 0.98, kinetics: 0.92, sensory: 0.98, feral: 0.86 }
            },
            {
              id: 'c6-s3-e-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'PSHHHT! Milky white juice sprayed everywhere like a busted cow udder! Gears, wires, and chrome junk spilled out into the mud like someone had smashed a clockmaker\'s workshop with a war hammer!',
              critique: 'Biga: Great visceral slapstick machinery similes.',
              score: { canon: 0.92, kinetics: 0.88, sensory: 0.89, feral: 0.96 }
            }
          ],
          winningProse: 'Through the drifting curtain of black smoke stepped **Uncle Kang**. He was dressed in polished iron mail; his boots were clean, his beard neatly combed. In his right hand, he carried a heavy iron execution cleaver. He didn\'t look at the dead bandits or the burning barns; his glassy eyes were locked onto the back of my father\'s exposed neck. Daesung reached out with his good hand: "Kang! Thank the heavens you\'re alive! Jin fought them off—" Kang raised the cleaver with both hands, knuckles locking into position above Daesung\'s skull—a strike designed to execute an incapacitated brother from behind to be blamed on the retreating bandits. *A clean purge. Eliminate emotional variables. Restore sector variance.* "KANG?!" Daesung cried out, confusion turning into raw, agonizing horror.',
          consensus: 'Passed with high distinction. The terrifying climax of betrayal and fraternal horror.'
        },
        interactions: {
          candidates: [
            {
              id: 'c6-s3-i-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'The synthetic vocal diaphragm synthesized speech: "SECTOR THREE ANOMALY CONFIRMED. BIOLOGICAL UNIT CHUNG JIN. VARIANCE EXCEEDS 99.4%. TRANSMITTING TO LUNAR PLATFORM."',
              critique: 'Sanderson: Cold, terrifying algorithmic broadcast.',
              score: { canon: 0.97, kinetics: 0.94, sensory: 0.85, feral: 0.82 }
            },
            {
              id: 'c6-s3-i-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'Two hundred years ago on the plains of Kurukshetra, my brother had roared: *"When the world goes crazy, the man with the sword cuts through the storm! Believe in the blade!"* Two hundred years ago, I hesitated. My brother died because I wanted to keep my hands clean. Not this time. Never again. I drove the knife straight beneath Kang\'s chin into the center of his skull. *KRRR-CLANG.* Daesung screamed in soul-shattering fraternal grief: "NO! JIN, HE IS YOUR UNCLE!" Kang\'s body did not fall. His synthetic jaw unhinged wider than any human mouth could stretch, a distorted metallic voice echoing across the village: "SECTOR THREE ANOMALY CONFIRMED. RL TRAINING MATRIX COMPROMISED."',
              critique: 'Rothfuss: Tremendous emotional catharsis, Kamina callback, and the AI revelation.',
              score: { canon: 0.99, kinetics: 0.94, sensory: 0.98, feral: 0.92 }
            },
            {
              id: 'c6-s3-i-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: '"Autopsy complete!" I spat, twisting the knife. "Look at your dear brother, Father! He\'s made of tin, copper wire, and cold soup! You broke your back for twenty years for an iron clock!"',
              critique: 'Biga: Fierce cathartic demystification of the oppressor.',
              score: { canon: 0.94, kinetics: 0.90, sensory: 0.90, feral: 0.98 }
            }
          ],
          winningProse: 'Time slowed to a crawl. In the burning smoke, the phantom of Kurukshetra flared across my vision: my older brother\'s blazing grin, his roaring voice: *“When the world goes crazy, the man with the sword cuts through the storm! Fulfill your duty, Jin!”* *Two hundred years ago, I hesitated. My brother died because I wanted to keep my hands clean. Not this time. Never again.* I didn\'t warn him. I threw my entire weight forward, driving the rusted filleting knife straight upward beneath Kang\'s chin, through the soft palate, and directly into his cranium. *KRRR-CLANG.* The knife hit solid brass. Daesung screamed—a soul-shattering shriek of fraternal agony: "NO! JIN, HE IS YOUR UNCLE! WHAT HAVE YOU DONE?!" But Kang’s body did not fall. The cleaver hovered motionless. With a sound like a punctured boiler, the corpse began to hiss: *PSHHHHT.* A jet of pressurized, milky-white coolant sprayed into the rain, hissing against hot embers. There was no blood. Kang\'s synthetic jaw unhinged, opening wider than human bone allowed. From his hollow throat, an amplified metallic voice boomed: $$\text{"SECTOR THREE ANOMALY CONFIRMED."}$$ $$\text{"BIOLOGICAL UNIT: CHUNG JIN."}$$ $$\text{"BEHAVIORAL VARIANCE EXCEEDS 99.4 PERCENTILE."}$$ $$\text{"RL TRAINING MATRIX COMPROMISED."}$$ $$\text{"TRANSMITTING COORDINATES TO LUNAR PLATFORM."}$$',
          consensus: 'Passed with high distinction. The supreme emotional and thematic climax of Arc 01.'
        },
        actions: {
          candidates: [
            {
              id: 'c6-s3-a-cand1',
              authorStyle: 'Sanderson / Gosu',
              content: 'A blue laser diode at Kang’s parietal lobe discharged a five-millisecond optical telemetry burst toward orbit. The internal micro-relays short-circuited; the synthetic skin-walker collapsed into 78 kilograms of titanium alloy and polymer scrap.',
              critique: 'Sanderson: Precise electronic burnout and telemetry burst description.',
              score: { canon: 0.96, kinetics: 0.97, sensory: 0.85, feral: 0.80 }
            },
            {
              id: 'c6-s3-a-cand2',
              authorStyle: 'Rothfuss / Inoue',
              content: 'A pulse of high-frequency blue light shot straight up from the open wound in his head, piercing through the smoke into the cloud cover—toward the moon. Then the relays burned out. The synthetic flesh went limp. The hollow shell that had worn Uncle Kang’s face collapsed into the mud with the heavy, dead clatter of scrap metal. Daesung sat frozen, slowly reaching forward to touch the sparking chrome plates beneath his brother’s ear, weeping for a brother who had died long before the machine took his skin.',
              critique: 'Rothfuss: Heartbreaking, sublime resolution of the filial tragedy.',
              score: { canon: 0.99, kinetics: 0.93, sensory: 0.98, feral: 0.88 }
            },
            {
              id: 'c6-s3-a-cand3',
              authorStyle: 'Biga / Studio LICO',
              content: 'The tin can clattered to the dirt like a dropped kettle! I yanked my knife out, wiped the white coolant on Kang\'s iron armor, and looked up at the moon with a wolf-grin. "Transmission received, you celestial bastards. Mount Hua is awake. Start running."',
              critique: 'Biga: Unbeatable, exhilarating series-level declaration of war against the Moon.',
              score: { canon: 0.96, kinetics: 0.92, sensory: 0.91, feral: 0.99 }
            }
          ],
          winningProse: '*Click. Click. Whirrrr.* A pulse of high-frequency blue light shot straight up from the open wound in his skull, piercing through the smoke and cloud cover—toward the moon. Then the internal relays burned out. The synthetic flesh went limp. The hollow shell that had worn Uncle Kang’s face collapsed into the mud with the heavy, dead clatter of scrap metal. The muster yard fell into a paralyzed silence. Daesung sat frozen, his hand outstretched, staring at the white coolant pooling around his fingers. He slowly touched the sparking chrome servomotors beneath his brother’s ear, his tears mixing with the synthetic fluid. I yanked the kitchen knife from the brass core, wiped the coolant on the iron breastplate, and looked up into the dark sky toward the unseen moon, my lips curving into an unyielding wolf-grin. *The filial shackles are broken. The training camp is exposed. The blade has awakened.* "Southfall is free," I whispered into the freezing wind. "Now... it\'s time to find Mount Hua."',
          consensus: 'Passed with high distinction. The definitive upward synthesis resolving Arc 01 and launching Arc 02.'
        }
      }
    }
  ]
};

module.exports = { ch05Data, ch06Data };
