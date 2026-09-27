import { OrganismData } from '../types/organism';

export const SUPPLEMENTARY_ORGANISMS: OrganismData[] = [
  {
    id: 'chelonia-mydas',
    commonName: 'Green Sea Turtle',
    scientificName: 'Chelonia mydas',
    category: 'Reptiles',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Reptilia',
      order: 'Testudines',
      family: 'Cheloniidae',
      genus: 'Chelonia',
      species: 'Chelonia mydas'
    },
    conservationStatus: 'Endangered',
    habitat: 'Tropical and subtropical coastal waters, seagrass meadows, coral reefs',
    sizeRange: '0.9 – 1.2 meters carapace length',
    massRange: '110 – 190 kg',
    lifespan: '70 – 80+ years',
    diet: 'Strictly herbivorous as adults (Seagrasses and marine macroalgae)',
    nativeRange: 'Circumglobal in tropical and subtropical ocean waters',
    diagramVisualType: 'turtle',
    summary: 'Chelonia mydas is a marine reptile characterized by a rigid fused bony carapace (ribs and vertebrae fused to dermal bone plates), salt-excreting lachrymal glands, paddle-shaped flippers with high aspect ratio thrust, an exceptionally slow metabolic rate allowing 5-hour breath-holding dives, and geomagnetic navigation capabilities for natal homing.',
    hotspots: [
      {
        id: 'st1',
        name: 'Fused Bony Carapace & Plastron',
        system: 'skeletal',
        x: 52,
        y: 45,
        description: 'Bony armor consisting of modified expanded ribs, dorsal vertebrae, and dermal bones covered in keratin scutes.',
        histologicalDetails: 'Dense cortical osteoderm plates covered with thin keratinized rhamphothecal scutes.',
        physiologicalFunction: 'Provides rigid structural armor against shark predators and serves as an anchor for powerful pectoral flipper muscles.',
        evolutionarySignificance: 'Pectoral and pelvic girdles have uniquely evolved to sit *inside* the ribcage, an anatomical configuration unique to turtles.',
        specialAdaptation: 'Ventral plastron is streamlined to minimize hydrodynamic boundary-layer drag during oceanic migrations.'
      },
      {
        id: 'st2',
        name: 'Cranial Salt Glands (Lachrymal Glands)',
        system: 'specialized',
        x: 22,
        y: 32,
        description: 'Enlarged modified tear glands behind the orbit that excrete concentrated sodium chloride solution twice as salty as seawater.',
        histologicalDetails: 'Branching tubular secretory units packed with Na+/K+ ATPase pumps and mitochondria.',
        physiologicalFunction: 'Eliminates excess salt ingested while drinking seawater and grazing on marine seagrasses, maintaining osmotic balance.',
        evolutionarySignificance: 'Critical physiological adaptation allowing air-breathing reptiles to survive indefinitely in hypertonic ocean environments.',
        specialAdaptation: 'Gives the appearance of "crying" when females haul out on sandy beaches to lay eggs.'
      },
      {
        id: 'st3',
        name: 'Flippers & Hydrodynamic Pectoral Engine',
        system: 'muscular',
        x: 35,
        y: 60,
        description: 'Elongated hyperphalangeal forelimbs modified into rigid hydrodynamic wings that generate lift-based underwater flight.',
        histologicalDetails: 'Dense, fibrous connective tissue sheath encasing elongated finger bones with powerful coracobrachialis muscles.',
        physiologicalFunction: 'Flaps forelimbs in figure-eight wingstrokes creating continuous forward propulsion with minimal energy expenditure.',
        evolutionarySignificance: 'Transition from walking claws to true marine hydrofoils over 120 million years of testudine evolution.',
        specialAdaptation: 'Rear flippers act as rudders for directional steering and excavation scoops during beach nesting.'
      },
      {
        id: 'st4',
        name: 'Microbial Fermentation Cecum & Herbivore Gut',
        system: 'digestive',
        x: 62,
        y: 50,
        description: 'Enlarged hindgut and cecum harboring cellulolytic symbiotic bacteria to ferment tough cellulose in seagrasses.',
        histologicalDetails: 'Microvillar enterocytes lined with dense mucus layers and anaerobic bacterial biofilms producing volatile fatty acids (VFAs).',
        physiologicalFunction: 'Converts fibrous seagrass cell walls into absorbable acetate and butyrate fatty acids for metabolic energy.',
        evolutionarySignificance: 'The only modern marine reptile with an exclusively herbivorous adult diet.',
        specialAdaptation: 'Green color of their body fat (which gave them their common name) derives from ingested plant chlorophyll pigments.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Keratinous Scutes & Scaled Fluke Dermis',
        overview: 'Hard beta-keratin scutes overlaying bone, with flexible leathery skin on neck and limbs.',
        keyStructures: ['Carapace scutes', 'Plastron scutes', 'Tomium (keratin beak)'],
        physiologicalMechanism: 'Provides physical abrasion protection against coral heads and reduces cutaneous water loss.',
        cellularComposition: 'Beta-keratinized stratified epithelium with melanocyte pigment patterns.',
        adaptiveAdvantage: 'High puncture resistance with low hydrodynamic drag.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Endocranial Carapace & Internal Shoulder Girdle',
        overview: 'Dorsal shell composed of 50+ fused bones; unique anatomical condition where shoulders lie inside rib cage.',
        keyStructures: ['Neural, costal, and marginal bones', 'Entoplastron', 'Hypoplastron', 'Serrate keratin beak'],
        physiologicalMechanism: 'Lacks teeth; utilizes a sharp serrated keratin tomium to shear marine grass blades.',
        cellularComposition: 'Dense osteon bone reinforced with vascular periosteum.',
        adaptiveAdvantage: 'Impenetrable core shield with integrated swimming muscle attachment.'
      },
      muscular: {
        id: 'muscular',
        name: 'Pectoral Flight Muscles & Inelastic Shell Breathing',
        overview: 'Massive internal pectoral and pelvic muscles operating the flippers and lung ventilation.',
        keyStructures: ['Pectoralis major', 'Deltoideus', 'Transversus abdominis (lung pump)'],
        physiologicalMechanism: 'Because the ribcage is rigid bone, lungs cannot expand via rib movement; specialized abdominal muscles squeeze viscera to inflate lungs.',
        cellularComposition: 'Oxidative muscle fibers rich in myoglobin.',
        adaptiveAdvantage: 'Allows efficient lift-based swimming across thousands of miles of open ocean.'
      },
      nervous: {
        id: 'nervous',
        name: 'Geomagnetic Navigation & Pineal Complex',
        overview: 'Central brain integrated with magnetic field receptors and high olfactory acuity.',
        keyStructures: ['Magnetoreceptive cells', 'Olfactory bulbs', 'Pineal light window'],
        physiologicalMechanism: 'Detects Earth’s geomagnetic inclination angle and intensity, creating a bicoordinate magnetic map for natal homing.',
        cellularComposition: 'Magnetite-containing sensory neurons in the ethmoid region.',
        adaptiveAdvantage: 'Guides turtles across thousands of miles of featureless ocean back to the exact beach where they were born 30 years prior.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Three-Chambered Heart with Intracardiac Shunt',
        overview: 'Two atria and a partially divided ventricle capable of physiological right-to-left shunting.',
        keyStructures: ['Sinus venosus', 'Cavum venosum', 'Cavum pulmonale', 'Right-to-left shunt'],
        physiologicalMechanism: 'During prolonged dives, heart rate drops to 1–2 BPM, and deoxygenated blood bypasses the lungs to conserve oxygen.',
        cellularComposition: 'Nucleated reptile erythrocytes with high oxygen-binding capacity.',
        adaptiveAdvantage: 'Allows resting dives lasting up to 5 hours on the ocean floor without surfacing.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'High-Volume Lungs & Visceral Diaphragmatic Muscle',
        overview: 'Spongy multi-chambered lungs attached to the underside of the dorsal carapace.',
        keyStructures: ['Multicameral lungs', 'Transversus & Obliquus abdominis muscles', 'Reinforced bronchi'],
        physiologicalMechanism: 'Abdominal muscles pull viscera downward to expand lungs, achieving rapid gas exchange at the surface.',
        cellularComposition: 'Septated faveolar parenchyma with high capillary density.',
        adaptiveAdvantage: 'High oxygen extraction during brief surface intervals between deep foraging dives.'
      },
      digestive: {
        id: 'digestive',
        name: 'Esophageal Papillae & Microbial Fermenting Hindgut',
        overview: 'Esophagus lined with hundreds of sharp, backward-pointing keratin papillae preventing food regurgitation when expelling seawater.',
        keyStructures: ['Esophageal papillae', 'Digestive stomach', 'Enlarged microbial cecum', 'Long colon'],
        physiologicalMechanism: 'Swallows seagrass and water, compresses esophagus to expel seawater while papillae trap every blade of food.',
        cellularComposition: 'Keratinized conical papillae with mucus-secreting goblet cells.',
        adaptiveAdvantage: 'Prevents ingesting lethal volumes of saltwater while feeding underwater.'
      },
      specialized: {
        id: 'specialized',
        name: 'Temperature-Dependent Sex Determination (TSD)',
        overview: 'Embryonic developmental mechanism where nest incubation sand temperature determines hatchling sex.',
        keyStructures: ['Aromatase enzyme pathway', 'Gonadal tissue receptors'],
        physiologicalMechanism: 'Incubation temperatures above 29.1°C produce females; cooler temperatures below 29°C produce males ("hot chicks, cool dudes").',
        cellularComposition: 'Thermosensitive ion channels modulating cytochrome P450 aromatase gene expression during embryonic gonadal differentiation.',
        adaptiveAdvantage: 'Synchronizes population sex ratios with environmental climate patterns.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Geomagnetic Natal Homing Navigation',
        description: 'Inbuilt magnetic map sense directing adult turtles across thousands of ocean miles back to their birthplace.',
        eraOrOrigin: 'Cretaceous (~110 Ma)',
        ecologicalAdvantage: 'Guarantees nesting occurs on beaches with proven incubation success.'
      },
      {
        title: 'Esophageal Papillae Seawater Expulsion',
        description: 'Downward-pointing keratin spikes that trap swallowed food while seawater is squeezed out before digestion.',
        eraOrOrigin: 'Late Jurassic / Early Cretaceous',
        ecologicalAdvantage: 'Allows underwater feeding on low-calorie seagrass without fatal osmotic salt toxicity.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Cardiovascular Diving',
        adaptation: 'Right-to-left intracardiac shunt (bypasses lungs during 5-hour resting dives)',
        vsHumans: 'Humans have obligate separation of pulmonary/systemic circuits; cannot shunt blood past lungs',
        ecologicalRole: 'Extremophile dive endurance for benthic sleeping and foraging.'
      },
      {
        system: 'Skeletal Girdle',
        adaptation: 'Shoulder and pelvic girdles are inside the ribcage (fused carapace)',
        vsHumans: 'Human ribcage is internal; clavicles and scapulae sit external to ribs',
        ecologicalRole: 'Provides absolute hydrodynamic armor against apex marine predators.'
      }
    ],
    funFacts: [
      'Green sea turtles can hold their breath underwater for up to 5 hours by slowing their heart rate down to a single beat every few minutes.',
      'Their navigation system is so precise that female turtles travel over 2,000 km across open ocean and land on the exact few hundred meters of beach where they hatched decades earlier.',
      'The inside of their throat is lined with hundreds of sharp, finger-like spikes (papillae) that prevent food from slipping out when they purge seawater.'
    ],
    physiologicalMetrics: [
      { label: 'Submerged Dive Duration', value: '4 – 5', unit: 'Hours', notes: 'Resting/sleeping dive state' },
      { label: 'Diving Heart Rate', value: '1 – 3', unit: 'BPM', notes: 'Extreme bradycardia' },
      { label: 'Salt Gland Concentration', value: '2x', unit: 'Seawater', notes: 'Hypertonic brine excretion' },
      { label: 'Carapace Thickness', value: '25 – 40', unit: 'mm', notes: 'Fused osteoderm bone & scutes' }
    ]
  },
  {
    id: 'aurelia-aurita',
    commonName: 'Moon Jellyfish',
    scientificName: 'Aurelia aurita',
    category: 'Invertebrates',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Cnidaria',
      class: 'Scyphozoa',
      order: 'Semaeostomeae',
      family: 'Ulmaridae',
      genus: 'Aurelia',
      species: 'Aurelia aurita'
    },
    conservationStatus: 'Least Concern',
    habitat: 'Coastal lagoons, bays, estuaries, open epipelagic oceans worldwide',
    sizeRange: '25 – 40 cm bell diameter',
    massRange: '150 – 500 g (95–96% water content)',
    lifespan: '6 – 12 months (Medusa stage) / Years (Polyp colony)',
    diet: 'Planktivorous (Microscopic copepods, rotifers, larval mollusks, protozoans)',
    nativeRange: 'Worldwide temperate and tropical marine waters',
    diagramVisualType: 'jellyfish',
    summary: 'Aurelia aurita is a diploblastic cnidarian displaying radical anatomical simplicity and high biomechanical energy efficiency. It lacks a brain, heart, lungs, and blood, functioning via a decentralized nerve net, rhopalia sensory niches (with statocysts and rhopalial ocelli), four horseshoe-shaped gastric gonads, and cnidocyte micro-harpoons that fire with the acceleration of a bullet.',
    hotspots: [
      {
        id: 'j1',
        name: 'Rhopalia Sensory Centers & Statocysts',
        system: 'nervous',
        x: 50,
        y: 12,
        description: 'Eight marginal sensory pits around the bell rim containing gravity-sensing statocysts and light-sensing ocelli.',
        histologicalDetails: 'Calcium sulfate statolith crystal resting on sensory cilia, paired with pigment cup ocelli and pacemaker nerve nodes.',
        physiologicalFunction: 'Detects gravitational orientation, ambient sunlight, and sets the pulsing pace of the swimming bell muscles.',
        evolutionarySignificance: 'Earliest specialized sensory organ cluster in the animal kingdom, preceding true brains by 100 million years.',
        specialAdaptation: 'When the jellyfish tilts, the heavy statolith presses against cilia, automatically triggering corrective swimming pulses.'
      },
      {
        id: 'j2',
        name: 'Cnidocyte Micro-Harpoon Batteries',
        system: 'specialized',
        x: 32,
        y: 65,
        description: 'Microscopic stinging capsules on tentacles containing coiled barbed tubules that discharge via explosive osmotic pressure.',
        histologicalDetails: 'Nematocyst capsule pressurized to 150 atmospheres, triggered by a mechanical cnidocil bristle.',
        physiologicalFunction: 'Fires a venomous tubule into microscopic plankton prey in under 700 nanoseconds with 5,000,000 G acceleration.',
        evolutionarySignificance: 'One of the fastest cellular mechanical events in the biological universe.',
        specialAdaptation: 'Mild toxin that immobilizes plankton but is completely harmless and painless to human skin.'
      },
      {
        id: 'j3',
        name: 'Four Horseshoe-Shaped Gastric Gonads',
        system: 'digestive',
        x: 50,
        y: 38,
        description: 'Distinctive translucent purple/pink cloverleaf structures in the center of the translucent umbrella bell.',
        histologicalDetails: 'Endodermal gastrodermal epithelium lining four radial gastric pouches rich in hydrolytic digestive enzymes.',
        physiologicalFunction: 'Dual-function organs acting as the primary digestive stomach and gametogenic reproductive tissue.',
        evolutionarySignificance: 'Radial gastrovascular cavity distributing nutrients directly to all tissues via branched radial canals.',
        specialAdaptation: 'Cilia lining the gastric canals continuously circulate digested fluid without needing blood vessels.'
      },
      {
        id: 'j4',
        name: 'Mesoglea Hydrostatic Bell & Passive Vortex Recoil',
        system: 'muscular',
        x: 70,
        y: 40,
        description: 'Acellular elastic gelatinous umbrella bell that uses passive vortex recoil to achieve the most energetically efficient swimming of any animal.',
        histologicalDetails: 'Dense water-collagen gel matrix containing 96% seawater, collagen microfibrils, and amoeboid wandering cells.',
        physiologicalFunction: 'Circular coronal muscles contract to expel water; the elastic mesoglea snaps back passively, generating a second vortex of free thrust.',
        evolutionarySignificance: 'Lowest cost of transport (energy expended per meter traveled per unit mass) of all swimming organisms on Earth.',
        specialAdaptation: 'Allows the jellyfish to swim continuously 24 hours a day without metabolic exhaustion.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Epidermal Monolayer & Mucus Sheet',
        overview: 'Single-cell-thick outer epidermis coated with sticky, protective antimicrobial mucus.',
        keyStructures: ['Epidermis layer', 'Mucus-secreting gland cells', 'Microscopic marginal cilia'],
        physiologicalMechanism: 'Cilia beat synchronously to sweep captured plankton trapped in sticky mucus toward the oral arms.',
        cellularComposition: 'Epitheliomuscular cells, gland cells, sensory bipolar neurons, and cnidocytes.',
        adaptiveAdvantage: 'The entire bell surface acts as a giant passive filter-feeding web.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Elastic Mesoglea Hydrostatic Matrix',
        overview: 'Acellular gelatinous layer sandwiched between the outer epidermis and inner gastrodermis.',
        keyStructures: ['Mesoglea matrix', 'Fibrillar collagen network', 'Umbrella coronal ring'],
        physiologicalMechanism: 'Acts as an elastic spring: when muscles contract the bell, the mesoglea deforms and automatically springs back.',
        cellularComposition: '96% water, type II-like collagen nanofibrils, hyaluronic acid-like glycosaminoglycans.',
        adaptiveAdvantage: 'Zero metabolic cost for bell re-expansion (free mechanical elastic recoil).'
      },
      muscular: {
        id: 'muscular',
        name: 'Coronal Epitheliomuscular Ring',
        overview: 'Subumbrella circular muscle sheet capable of synchronized rhythmic contractions.',
        keyStructures: ['Coronal muscle ring', 'Radial muscle bands', 'Oral arm flexors'],
        physiologicalMechanism: 'Contraction decreases subumbrella volume, jetting water downward and creating low-pressure suction above the bell.',
        cellularComposition: 'Epitheliomuscular cells possessing basal myofibril striations with high calcium sensitivity.',
        adaptiveAdvantage: 'Generates propulsive vortex rings with unmatched hydrodynamic efficiency.'
      },
      nervous: {
        id: 'nervous',
        name: 'Decentralized Diffuse Nerve Net (2 Subsystems)',
        overview: 'Two interconnected nerve networks: a fast motor nerve net (MNN) and a diffuse sensory nerve net (DNN).',
        keyStructures: ['8 Rhopalia sensory centers', 'Motor nerve net (MNN)', 'Diffuse nerve net (DNN)'],
        physiologicalMechanism: 'Pacemaker cells in rhopalia fire spontaneous action potentials that propagate across the nerve net to trigger bell pulses.',
        cellularComposition: 'Non-polarized, bidirectional chemical synapses and gap junction electrical synapses.',
        adaptiveAdvantage: 'Resilient architecture: if half the jellyfish is damaged or cut away, the remaining half continues pulsing and functioning.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Gastrovascular Branched Radial Canal Network',
        overview: 'Complete absence of heart and blood vessels; nutrients are transported directly via a branched canal system.',
        keyStructures: ['Central stomach', '8 Adradial canals', '8 Perradial canals', 'Ring canal'],
        physiologicalMechanism: 'Ciliated gastrodermal cells create internal fluid currents that distribute digested nutrients throughout the bell.',
        cellularComposition: 'Flagellated endodermal cells generating continuous micro-circulation.',
        adaptiveAdvantage: 'Zero vascular pumping organs required to maintain tissue homeostasis.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Direct Cutaneous Diffusion (Lacks Lungs & Gills)',
        overview: 'Every cell in the two-layer body plan is within 1–2 cell diameters of oxygenated ambient seawater.',
        keyStructures: ['Epidermal surface', 'Gastrodermal lining'],
        physiologicalMechanism: 'Dissolved oxygen in seawater diffuses directly across cell membranes; metabolic CO2 diffuses out.',
        cellularComposition: 'Ultrathin cell membranes with high surface-area-to-living-tissue-mass ratio.',
        adaptiveAdvantage: 'Thrives in hypoxic coastal "dead zones" where fish and crustaceans suffocate.'
      },
      digestive: {
        id: 'digestive',
        name: 'Manubrium, 4 Oral Arms & Gastrovascular Cavity',
        overview: 'Central mouth surrounded by four fluttering oral arms leading to the four gastric pouches.',
        keyStructures: ['Manubrium (mouth)', '4 Frilly oral arms', '4 Gastric pouches', 'Gastric filaments'],
        physiologicalMechanism: 'Gastric filaments secrete proteolytic enzymes that digest plankton extracellularly, followed by phagocytic uptake.',
        cellularComposition: 'Enzyme-secreting digestive cells, nutrient-absorbing amoebocytes.',
        adaptiveAdvantage: 'Blind gut (mouth is also anus) simplifies internal architecture and reduces structural overhead.'
      },
      specialized: {
        id: 'specialized',
        name: 'Metagenic Lifecycle & Polyp Strobilation',
        overview: 'Biphasic lifecycle alternating between benthic asexual polyp (scyphistoma) and pelagic sexual medusa.',
        keyStructures: ['Planula larva', 'Scyphistoma polyp', 'Strobila stack', 'Ephyra baby jellyfish'],
        physiologicalMechanism: 'Environmental temperature cues trigger the polyp to slice into a stack of 10–20 saucer-like ephyrae that swim away.',
        cellularComposition: 'Stem cells (interstitial cells) capable of infinite regenerative and transdifferentiative renewal.',
        adaptiveAdvantage: 'Enables explosive population blooms (thousands of jellyfish per cubic meter) when seasonal food surges.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Passive Vortex Recoil Swimming',
        description: 'Uses elastic kinetic recovery of the mesoglea to create a secondary suction vortex for zero energy cost.',
        eraOrOrigin: 'Ediacaran / Early Cambrian (~550 Ma)',
        ecologicalAdvantage: 'Lowest energy consumption of any swimming organism on Earth.'
      },
      {
        title: 'Nematocyst Explosive Micro-Harpoons',
        description: 'Cellular capsules firing venomous barbed threads at 5,000,000 G acceleration within 700 nanoseconds.',
        eraOrOrigin: 'Precambrian (~600 Ma)',
        ecologicalAdvantage: 'Instantly captures agile microscopic zooplankton despite lacking jaws or grasping claws.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Locomotion Efficiency',
        adaptation: 'Passive vortex recoil swimming (Lowest cost of transport in the animal kingdom)',
        vsHumans: 'Humans spend massive metabolic energy during swimming (low hydrodynamic efficiency ~2–5%)',
        ecologicalRole: 'Continuous 24/7 oceanic drift foraging with almost negligible caloric burn.'
      },
      {
        system: 'Nervous System',
        adaptation: 'Brainless decentralized diffuse nerve net + 8 rhopalia sensory pacemakers',
        vsHumans: 'Humans have centralized cephalized encephalon and spinal cord',
        ecologicalRole: 'Immune to fatal centralized trauma; can regenerate full symmetry from pieces.'
      }
    ],
    funFacts: [
      'A moon jellyfish is 95% to 96% water, and if removed from the ocean and placed in the sun, it will evaporate until almost nothing is left.',
      'They have no brain, no heart, no lungs, and no blood, yet they have thrived in Earth’s oceans for over 500 million years — outliving the dinosaurs.',
      'Their swimming method is scientifically proven to be the most energetically efficient form of locomotion ever discovered in any animal on Earth.'
    ],
    physiologicalMetrics: [
      { label: 'Water Content', value: '95 – 96', unit: '%', notes: 'Elastic gelatinous mesoglea' },
      { label: 'Nematocyst Acceleration', value: '5,000,000', unit: 'G', notes: 'Fires in under 700 nanoseconds' },
      { label: 'Energy Cost of Transport', value: '0.9', unit: 'J/kg/m', notes: 'Lowest of all swimming animals' },
      { label: 'Sensory Rhopalia Count', value: '8', unit: 'Units', notes: 'Equidistant around bell perimeter' }
    ]
  },
  {
    id: 'ambystoma-mexicanum',
    commonName: 'Axolotl (Mexican Walking Fish)',
    scientificName: 'Ambystoma mexicanum',
    category: 'Amphibians',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Amphibia',
      order: 'Urodela',
      family: 'Ambystomatidae',
      genus: 'Ambystoma',
      species: 'Ambystoma mexicanum'
    },
    conservationStatus: 'Critically Endangered',
    habitat: 'High-altitude freshwater lacustrine canals of Lake Xochimilco, Mexico City',
    sizeRange: '15 – 30 cm length',
    massRange: '100 – 250 g',
    lifespan: '10 – 15 years',
    diet: 'Carnivorous (Worms, crustaceans, small teleost fish, insect larvae)',
    nativeRange: 'Endemic exclusively to Lake Xochimilco basin, Valley of Mexico',
    diagramVisualType: 'frog',
    summary: 'The axolotl is a neotenic salamander that retains its juvenile aquatic larval features throughout its entire adult life without undergoing metamorphosis. Its biology features feathery external gills, suction feeding mechanics, and near-miraculous epimorphic regeneration capabilities — capable of perfectly regrowing lost limbs, heart ventricles, spinal cords, and portions of its brain without scar tissue.',
    hotspots: [
      {
        id: 'ax1',
        name: 'Feathery External Branchial Gills',
        system: 'respiratory',
        x: 28,
        y: 28,
        description: 'Three pairs of branching external gills behind the head lined with thousands of micro-filaments (fimbriae).',
        histologicalDetails: 'Vascularized gill rami covered with thin non-keratinized respiratory epithelium and ciliated cells.',
        physiologicalFunction: 'Extracts oxygen directly from ambient water; axolotls rhythmically flap their gills to clear stagnant water boundary layers.',
        evolutionarySignificance: 'Classic morphological marker of neoteny (retaining larval aquatic respiration into sexual maturity).',
        specialAdaptation: 'Quad-modal respiration: can breathe via external gills, primitive lungs, cutaneous skin, and buccopharyngeal membranes.'
      },
      {
        id: 'ax2',
        name: 'Epimorphic Blastema Regeneration Matrix',
        system: 'specialized',
        x: 65,
        y: 55,
        description: 'Specialized cellular dedifferentiation zone that forms at amputated wound sites to regrow complete anatomical organs.',
        histologicalDetails: 'Wound epidermis converts into an apical epithelial cap (AEC), signaling mature cells to revert into pluripotential blastema stem cells.',
        physiologicalFunction: 'Regrows exact duplicates of bones, nerves, muscles, blood vessels, and skin without forming fibrous scar tissue.',
        evolutionarySignificance: 'Highest regenerative capacity among all tetrapod vertebrates on Earth.',
        specialAdaptation: 'Can regenerate lost sections of the cerebral cortex, spinal cord, and up to 50% of the cardiac ventricle.'
      },
      {
        id: 'ax3',
        name: 'Obligate Neotenic Endocrine Pathway (Thyroid Axis)',
        system: 'nervous',
        x: 22,
        y: 38,
        description: 'Genetically programmed deficiency in thyroid-stimulating hormone (TSH) release preventing terrestrial metamorphosis.',
        histologicalDetails: 'Pituitary gland produces low bioavailable thyrotropin, keeping thyroid gland dormant unless stimulated with iodine/thyroxine.',
        physiologicalFunction: 'Maintains larval tail fin, external gills, and aquatic physiology while reaching full sexual maturity.',
        evolutionarySignificance: 'Evolutionary adaptation to stable ancient lake environments where staying aquatic offered higher survival than dry land.',
        specialAdaptation: 'If injected with exogenous thyroxine hormone, an axolotl will lose its gills and metamorphose into a terrestrial salamander.'
      },
      {
        id: 'ax4',
        name: 'Buccal Suction Vacuum Feeding Apparatus',
        system: 'digestive',
        x: 18,
        y: 45,
        description: 'Wide, flat mouth that snaps open in milliseconds, creating a powerful negative pressure vortex that inhales prey whole.',
        histologicalDetails: 'Depressor mandibulae and hyoid muscles connected to flexible cartilaginous branchial arches.',
        physiologicalFunction: 'Drops the floor of the mouth instantaneously, sucking in water, worms, and small fish without chewing.',
        evolutionarySignificance: 'Preserves ancestral sarcopterygian fish-like aquatic suction biomechanics.',
        specialAdaptation: 'Vestigial larval teeth (pedicellate teeth) function only to grip slippery prey, not to chew.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Moist Cutaneous Respiration Membrane',
        overview: 'Thin, scaleless, highly permeable skin rich in mucous and granular poison glands.',
        keyStructures: ['Leydig cells', 'Mucus gland network', 'Dorsal fin fold'],
        physiologicalMechanism: 'Permits direct gas and water exchange; keeps skin lubricated and protected against aquatic pathogens.',
        cellularComposition: 'Non-keratinized stratified epithelium with Leydig cells providing structural antimicrobial defense.',
        adaptiveAdvantage: 'Enables continuous cutaneous breathing and swift scar-free wound re-epithelialization.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Paedomorphic Cartilage-Heavy Endoskeleton',
        overview: 'Skeleton with high proportions of persistent uncalcified hyaline cartilage.',
        keyStructures: ['Chondrocranium', 'Branchial arches', 'Vertebral column with notochord remnants'],
        physiologicalMechanism: 'Retains juvenile cartilaginous flexibility, providing lightweight support in buoyant freshwater lakes.',
        cellularComposition: 'Chondrocytes in hyaline matrix, incomplete endochondral ossification.',
        adaptiveAdvantage: 'Rapid cellular remodeling and bone regeneration following traumatic injury.'
      },
      muscular: {
        id: 'muscular',
        name: 'Segmented Trunk Myomeres & Aquatic Fin Muscles',
        overview: 'Lateral W-shaped muscle blocks (myomeres) driving lateral sinusoidal swimming propulsion.',
        keyStructures: ['Epaxial & Hypaxial myomeres', 'Hyoid depressors', 'Fin wave flexors'],
        physiologicalMechanism: 'Sinusoidal body waves propel the axolotl through aquatic weeds, supplemented by limb paddle strokes.',
        cellularComposition: 'Striated muscle fibers with high regenerative dedifferentiation plasticity.',
        adaptiveAdvantage: 'High maneuverability in shallow muddy canal floors.'
      },
      nervous: {
        id: 'nervous',
        name: 'Regenerative Spinal Cord & Lateral Line System',
        overview: 'Central nervous system equipped with electroreceptive and mechanoreceptive lateral lines.',
        keyStructures: ['Cerebral hemispheres', 'Spinal cord with ependymal cells', 'Lateral line neuromasts'],
        physiologicalMechanism: 'Detects micro-vibrations and bioelectric fields of prey in murky water; ependymal cells can regrow complete transected spinal cords.',
        cellularComposition: 'Radial glial cells acting as regenerative neural stem cells throughout adulthood.',
        adaptiveAdvantage: 'Complete recovery from catastrophic spinal cord severance and paralysis.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Three-Chambered Amphibian Heart & Gill Arches',
        overview: 'Two atria and a single ventricle directing blood to external gills, lungs, and skin.',
        keyStructures: ['Sinus venosus', 'Left & Right atria', 'Single ventricle', 'Bulbus cordis'],
        physiologicalMechanism: 'Pumps mixed oxygenated and deoxygenated blood; ventricle can regenerate up to 50% of its tissue if excised.',
        cellularComposition: 'Cardiomyocytes capable of re-entering the cell cycle to undergo mitosis and replace damaged heart tissue.',
        adaptiveAdvantage: 'Unsurpassed cardiovascular self-repair.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Quad-Modal Respiration (Gills, Lungs, Skin, Mouth)',
        overview: 'Utilizes four separate pathways for gas exchange depending on water temperature and oxygenation.',
        keyStructures: ['3 Pairs of external gills', 'Primitive saccular lungs', 'Cutaneous capillaries', 'Buccopharyngeal mucosa'],
        physiologicalMechanism: 'Uses external gills primarily; gulps surface air with lungs when water oxygen drops; absorbs oxygen across skin.',
        cellularComposition: 'Ultrathin capillary beds in gill fimbriae and alveolar sacs.',
        adaptiveAdvantage: 'Can survive in warm, stagnant, low-oxygen canals that would kill strictly gill-breathing fish.'
      },
      digestive: {
        id: 'digestive',
        name: 'Suction Buccal Cavity & Short Carnivore Gut',
        overview: 'Rapid expansion of pharyngeal cavity draws in whole prey into a straight stomach and short intestine.',
        keyStructures: ['Buccal floor pump', 'Pedicellate teeth', 'Proteolytic stomach', 'Cloaca'],
        physiologicalMechanism: 'Hydrodynamic suction draws food into the esophagus in under 15 milliseconds.',
        cellularComposition: 'Enzyme-secreting gastric mucosa and microvillar enterocytes.',
        adaptiveAdvantage: 'Effortless ambush capture of aquatic invertebrates.'
      },
      specialized: {
        id: 'specialized',
        name: 'Epimorphic Blastema Cellular Reprogramming',
        overview: 'Ability to dedifferentiate mature somatic cells into pluripotent progenitor cells to regenerate complete appendages.',
        keyStructures: ['Apical epithelial cap (AEC)', 'Blastema cell mass', 'Positional memory Hox genes'],
        physiologicalMechanism: 'Following amputation, cells lose differentiated identity, divide rapidly, and read positional Hox memory to regrow missing parts.',
        cellularComposition: 'Dedifferentiated blastema cells, resident satellite cells, and macrophages clearing debris.',
        adaptiveAdvantage: 'Immunity to permanent amputation, scar tissue, and organ loss from predator attacks.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Complete Neoteny (Paedomorphosis)',
        description: 'Reaches sexual maturity while retaining juvenile aquatic gills, tail fin, and limb morphology.',
        eraOrOrigin: 'Pleistocene (~100,000 years ago)',
        ecologicalAdvantage: 'Exploited permanent aquatic habitat of Lake Xochimilco without competing with terrestrial land animals.'
      },
      {
        title: 'Perfect Epimorphic Regeneration',
        description: 'Regrows limbs, organs, heart, and central nervous tissue without fibrous scarring.',
        eraOrOrigin: 'Deep Amphibian Ancestry (~350 Ma)',
        ecologicalAdvantage: 'Survives aggressive nip attacks and cannibalistic bites from conspecifics during mating and territory skirmishes.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Tissue Regeneration',
        adaptation: 'Forms blastema to regrow whole limbs, heart muscle, spinal cord, and brain tissue without scarring',
        vsHumans: 'Humans form non-functional fibrotic collagen scar tissue and cannot regrow lost limbs or spinal cords',
        ecologicalRole: 'Complete anatomical restoration after severe predatory trauma.'
      },
      {
        system: 'Metamorphosis',
        adaptation: 'Obligate neoteny (retains external gills and aquatic larval body into sexual adulthood)',
        vsHumans: 'Humans undergo strict developmental stages with permanent loss of embryonic plasticity',
        ecologicalRole: 'Permanent specialization for shallow freshwater lacustrine canals.'
      }
    ],
    funFacts: [
      'Axolotls can regenerate the exact same limb up to several times without a single defect or scar, with every bone and muscle identical to the original.',
      'They can accept organ transplants (including eyes and portions of the brain) from other axolotls with zero immunological rejection.',
      'The word "Axolotl" comes from the ancient Aztec Nahuatl language, named after Xolotl, the Aztec god of fire, dogs, and transformative lightning.'
    ],
    physiologicalMetrics: [
      { label: 'Limb Regrowth Time', value: '40 – 60', unit: 'Days', notes: 'Full functional anatomical replica' },
      { label: 'External Gill Pairs', value: '3', unit: 'Pairs', notes: 'Feathery fimbriae' },
      { label: 'Regenerative Ventricle Limit', value: '50', unit: '% of Heart', notes: 'Regrows without fibrotic failure' },
      { label: 'Respiration Modes', value: '4', unit: 'Systems', notes: 'Gills, lungs, skin, buccopharyngeal' }
    ]
  }
];
