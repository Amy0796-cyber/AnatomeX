import { OrganismData } from '../types/organism';

export const CURATED_ORGANISMS: OrganismData[] = [
  {
    id: 'homo-sapiens',
    commonName: 'Human (Modern Human)',
    scientificName: 'Homo sapiens',
    category: 'Mammals',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Primates',
      family: 'Hominidae',
      genus: 'Homo',
      species: 'Homo sapiens'
    },
    conservationStatus: 'Least Concern',
    habitat: 'Global terrestrial, cosmopolitan (adapted across all biomes via culture & technology)',
    sizeRange: '1.5 – 1.9 meters (Adult typical)',
    massRange: '50 – 95 kg (Adult typical)',
    lifespan: '72 – 83 years (Global average)',
    diet: 'Omnivorous',
    nativeRange: 'Originated in Eastern/Southern Africa; worldwide distribution',
    heroImage: '/src/assets/images/hero_human_anatomy_1790512072752.jpg',
    diagramVisualType: 'human',
    summary: 'Homo sapiens is a bipedal primate characterized by an exceptionally large, neocortex-dense encephalized brain capable of abstract reasoning, syntactic language, and cumulative symbolic culture. Its anatomy features upright axial posture, dexterous opposable thumbs, endurance thermoregulation via eccrine sweating, and complex metabolic feedback loops.',
    hotspots: [
      {
        id: 'h1',
        name: 'Cerebral Cortex & Encephalon',
        system: 'nervous',
        x: 50,
        y: 8,
        description: 'Highly folded tri-layered neural processing unit with ~86 billion neurons and ~100 trillion synaptic junctions.',
        histologicalDetails: 'Six-layered neocortex comprising pyramidal neurons, stellate interneurons, and extensive myelin sheathing.',
        physiologicalFunction: 'Executive cognition, language generation (Broca/Wernicke areas), sensory synthesis, and conscious motor planning.',
        evolutionarySignificance: 'Tripled in volume over the past 3 million years through positive selection on metabolic and social cooperation genes.',
        specialAdaptation: 'High glucose affinity: consumes 20% of resting basal metabolic energy despite representing only 2% of body mass.'
      },
      {
        id: 'h2',
        name: 'Trachea & Pulmonary Alveoli',
        system: 'respiratory',
        x: 48,
        y: 24,
        description: 'Bilateral lung lobes containing approximately 300–500 million microscopic alveoli providing ~100 m² of gas exchange surface.',
        histologicalDetails: 'Type I and Type II pneumocytes coated with pulmonary surfactant to diminish surface tension and prevent atelectasis.',
        physiologicalFunction: 'Tidal ventilation driving rapid oxygenation of deoxygenated erythrocyte hemoglobin and carbon dioxide expulsion.',
        evolutionarySignificance: 'Adapted for continuous aerobic endurance running through decoupled head-torso mechanics and diaphragmatic breathing.',
        specialAdaptation: 'Vocal tract elongation with descended larynx enabling modulated phonation and complex phonetic speech.'
      },
      {
        id: 'h3',
        name: 'Four-Chambered Myogenic Heart',
        system: 'circulatory',
        x: 53,
        y: 28,
        description: 'Double-circuit muscular pump generating systemic arterial blood pressures (typical 120/80 mmHg) to perfuse vital organs against gravity.',
        histologicalDetails: 'Striated branching cardiomyocytes with intercalated discs and gap junctions facilitating rapid syncytial depolarization.',
        physiologicalFunction: 'Pumps ~5 liters of blood per minute via sinoatrial node pacemaker rhythmicity through pulmonary and systemic loops.',
        evolutionarySignificance: 'Complete separation of oxygenated and deoxygenated circuits provides high-pressure systemic delivery without pulmonary edema.',
        specialAdaptation: 'Baroreceptor reflexes in carotid sinuses that rapidly modulate vascular resistance when changing posture.'
      },
      {
        id: 'h4',
        name: 'Hepatic Metabolic Engine (Liver)',
        system: 'digestive',
        x: 45,
        y: 37,
        description: 'Largest internal organ (~1.5 kg) conducting over 500 vital biochemical syntheses, glycogen storage, and xenobiotic detoxification.',
        histologicalDetails: 'Hexagonal lobules with hepatic plates of hepatocytes, Kupffer macrophages, and sinusoid capillary networks.',
        physiologicalFunction: 'Bile acid synthesis, gluconeogenesis, plasma albumin synthesis, urea cycle clearance, and lipid regulation.',
        evolutionarySignificance: 'Remarkable cellular regenerative capacity (regrowth via hepatocyte hyperplasia following partial resection).',
        specialAdaptation: 'First-pass portal vein clearance filtering nutrients and microbial antigens directly from the intestinal lumen.'
      },
      {
        id: 'h5',
        name: 'Bipedal Pelvic Girdle & Lumbar Lordosis',
        system: 'skeletal',
        x: 50,
        y: 50,
        description: 'Shortened, bowl-shaped iliac blades with an S-shaped spinal curvature that centers body center of mass over the femoral heads.',
        histologicalDetails: 'Cortical compact bone with Haversian systems (osteons) reinforced by trabecular cancellous stress vectors.',
        physiologicalFunction: 'Weight transmission during upright bipedal stride, energy conservation during pendulum walking, and shock dissipation.',
        evolutionarySignificance: 'The anatomical shift from knuckle-walking arboreal ancestors to obligate terrestrial bipedalism, freeing the hands.',
        specialAdaptation: 'Enlarged gluteus maximus anchor preventing forward trunk collapse during running.'
      },
      {
        id: 'h6',
        name: 'Quadriceps & Soleus Muscle Complex',
        system: 'muscular',
        x: 43,
        y: 68,
        description: 'Powerful antigravity leg extensor muscles equipped with long elastic Achilles tendons that store and release mechanical kinetic energy.',
        histologicalDetails: 'Mix of oxidative Type I slow-twitch endurance fibers and glycolytic Type IIa/IIx fast-twitch contractile fibers.',
        physiologicalFunction: 'Knee extension, plantar flexion, postural balance stabilization, and efficient elastic recoil during striding.',
        evolutionarySignificance: 'Exceptional endurance running biomechanics allowing persistence hunting over long distances under thermal stress.',
        specialAdaptation: 'Dense vascular capillary beds coupled with high density of subcutaneous eccrine sweat glands for continuous heat dissipation.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Integumentary System (Skin & Sweating)',
        overview: 'Multi-layered epidermis and dermis with ~2-4 million eccrine sweat glands acting as a supreme thermal cooling radiator.',
        keyStructures: ['Stratum corneum', 'Melanocyte matrix', 'Eccrine sweat glands', 'Dermal papillary capillaries'],
        physiologicalMechanism: 'Evaporative cooling allows humans to dissipate metabolic heat during high-exertion aerobic running under solar load.',
        cellularComposition: 'Stratified squamous keratinocytes, melanin granules, Langerhans immune cells, and sensory Merkel discs.',
        adaptiveAdvantage: 'Extensive fur loss combined with high sweat output enabled unmatched midday persistence hunting.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Skeletal Framework & Axial Column',
        overview: '206 articulated bones providing rigid structural leverage, calcium homeostasis, and hematopoietic marrow support.',
        keyStructures: ['S-shaped vertebral column', 'Bowl-shaped pelvis', 'Arched foot bones', 'Femoral bicondylar angle'],
        physiologicalMechanism: 'Transmits weight along axial center of gravity and acts as a biological spring system through plantar fascia and spinal discs.',
        cellularComposition: 'Osteocytes encased in mineralized hydroxyapatite matrix, osteoclasts remodeling bone, and collagen scaffolding.',
        adaptiveAdvantage: 'Bipedal alignment maximizes energetic efficiency during long-distance walking compared to quadrupeds.'
      },
      muscular: {
        id: 'muscular',
        name: 'Musculoskeletal & Contractile Apparatus',
        overview: 'Over 600 skeletal muscles controlled by motor units with high fine-motor dexterity in hand, tongue, and facial muscles.',
        keyStructures: ['Gluteus maximus', 'Opponens pollicis', 'Diaphragm', 'Achilles tendon complex'],
        physiologicalMechanism: 'Sliding filament actin-myosin contraction energized by ATP hydrolysis and regulated by calcium influx from sarcoplasmic reticulum.',
        cellularComposition: 'Multinucleated striated muscle fibers containing dense sarcomeres, myoglobin oxygen reserves, and mitochondria.',
        adaptiveAdvantage: 'Fine motor control of fingers enables tool crafting, while elastic lower limb tendons store free mechanical energy.'
      },
      nervous: {
        id: 'nervous',
        name: 'Central & Peripheral Nervous Architecture',
        overview: 'Central nervous system (encephalon and spinal cord) integrated with extensive somatic and autonomic reflex arcs.',
        keyStructures: ['Neocortex', 'Hippocampus', 'Corpus callosum', 'Vagus nerve', 'Spinal cord'],
        physiologicalMechanism: 'Action potentials propagate along myelinated axons via saltatory conduction across Nodes of Ranvier at speeds up to 120 m/s.',
        cellularComposition: 'Pyramidal neurons, astrocytes, oligodendrocytes, and microglial immune surveillance cells.',
        adaptiveAdvantage: 'Unsurpassed capacity for symbolic thinking, forward causal simulation, predictive modeling, and collective learning.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Cardiovascular Double-Loop Circuit',
        overview: 'Closed vascular network carrying ~5 liters of blood driven by a four-chambered heart through 100,000 km of vessels.',
        keyStructures: ['Left & Right ventricles', 'Aorta', 'Pulmonary artery', 'Systemic capillary beds'],
        physiologicalMechanism: 'Synchronized cardiac cycle with atrioventricular valves preventing backflow; baroreceptors actively regulating hydrostatic pressure.',
        cellularComposition: 'Enucleated erythrocytes containing hemoglobin, leukocytes for immunity, and thrombocytes for hemostasis.',
        adaptiveAdvantage: 'High systemic pressure (120 mmHg) perfuses a high-elevation cranial brain even when standing upright.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Pulmonary Ventilation & Gas Exchange',
        overview: 'Negative-pressure breathing mechanism powered by the thoracic diaphragm drawing air into microscopic alveoli.',
        keyStructures: ['Trachea with cartilage rings', 'Bronchial tree', '300 million Alveoli', 'Thoracic diaphragm'],
        physiologicalMechanism: 'Contraction of diaphragm expands thoracic cavity volume, dropping intrapleural pressure below atmospheric levels to draw air in.',
        cellularComposition: 'Ciliated pseudostratified columnar epithelium with goblet cells and ultrathin Type I alveolar pneumocytes (0.2 µm).',
        adaptiveAdvantage: 'Surfactant-stabilized alveolar architecture provides massive surface area without structural collapse.'
      },
      digestive: {
        id: 'digestive',
        name: 'Gastrointestinal & Enteric System',
        overview: 'Gastrointestinal tract spanning from mouth to colon, supported by an autonomous enteric nervous system (the "second brain").',
        keyStructures: ['Acidic stomach (pH 1.5–2)', 'Duodenum & Small intestine', 'Colon & Microbiome', 'Pancreas & Liver'],
        physiologicalMechanism: 'Enzymatic hydrolysis of carbohydrates, proteins, and lipids coupled with active and passive brush-border nutrient absorption.',
        cellularComposition: 'Enterocytes with microvillus brush border, enteroendocrine cells, parietal cells secreting HCl, and gut microbiome symbionts.',
        adaptiveAdvantage: 'Shortened gut tract compared to great apes, co-evolved with external food processing and cooking to reduce digestion energy.'
      },
      specialized: {
        id: 'specialized',
        name: 'Specialized Evolutionary Adaptations',
        overview: 'Precision grip, opposable thumbs, descended vocal tract, and ultra-dense eccrine thermal regulation.',
        keyStructures: ['Saddle carpometacarpal joint', 'Hyoid apparatus & Pharynx', 'Eccrine gland arrays'],
        physiologicalMechanism: 'Fine neuromuscular feedback loops allow independent finger articulation with micro-force graduation.',
        cellularComposition: 'High density of Meissner and Pacinian tactile mechanoreceptors on fingertips.',
        adaptiveAdvantage: 'Enables delicate manufacture of complex tools, artistic creation, and nuanced linguistic articulation.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Cranial Encephalization & Neocortex Expansion',
        description: 'Brain-to-body mass ratio (EQ ~7.5) is highest among all mammals, supporting complex social cognition and abstract tools.',
        eraOrOrigin: 'Pleistocene (~2.5 Ma - 200 ka)',
        ecologicalAdvantage: 'Allowed technological adaptation to diverse ecological niches without requiring genetic anatomical speciation.'
      },
      {
        title: 'Obligate Bipedal Locomotion',
        description: 'Reorientation of the foramen magnum, pelvic remodeling, and foot arch evolution created an energetic walking pendulum.',
        eraOrOrigin: 'Late Miocene to Pliocene (~6 Ma - 4 Ma)',
        ecologicalAdvantage: 'Drastically cut locomotion caloric expenditure and liberated forelimbs for carrying infants, food, and crafting tools.'
      },
      {
        title: 'Thermal Endurance Sweating',
        description: 'Loss of dense body hair coupled with high-density eccrine sweat glands allows cooling while running under direct midday sun.',
        eraOrOrigin: 'Early Pleistocene (~1.8 Ma)',
        ecologicalAdvantage: 'Persistence hunting: chasing furred prey until they suffered heat stroke.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Brain & Nervous',
        adaptation: '86 billion neurons with dense prefrontal neocortex',
        vsHumans: 'Reference baseline',
        ecologicalRole: 'High-order tool manufacturing, symbolic culture, agriculture, and global planetary transformation.'
      },
      {
        system: 'Thermoregulation',
        adaptation: 'Full-body eccrine evaporative perspiration',
        vsHumans: 'Reference baseline',
        ecologicalRole: 'Sustained endurance physical work across hot arid environments.'
      }
    ],
    funFacts: [
      'The human body contains enough blood vessels to circle the Earth more than 2.5 times if laid end-to-end (~100,000 km).',
      'The human eye can detect a single photon in absolute darkness, and the brain processes visual data at over 10 million bits per second.',
      'A human femur bone is stronger than solid concrete of equivalent weight and can support up to 30 times an adult’s body weight.'
    ],
    physiologicalMetrics: [
      { label: 'Resting Heart Rate', value: '60 – 100', unit: 'BPM', notes: 'Driven by SA nodal pacemaker' },
      { label: 'Cerebral Blood Perfusion', value: '750', unit: 'mL/min', notes: 'Consumes ~20% total oxygen' },
      { label: 'Basal Metabolic Rate', value: '1,400 – 1,800', unit: 'kcal/day', notes: 'Resting homeostasis' },
      { label: 'Alveolar Surface Area', value: '100', unit: 'm²', notes: 'Roughly the size of half a tennis court' }
    ]
  },
  {
    id: 'balaenoptera-musculus',
    commonName: 'Blue Whale',
    scientificName: 'Balaenoptera musculus',
    category: 'Mammals',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Artiodactyla',
      family: 'Balaenopteridae',
      genus: 'Balaenoptera',
      species: 'Balaenoptera musculus'
    },
    conservationStatus: 'Endangered',
    habitat: 'Pelagic open oceans, from subpolar feeding grounds to tropical calving waters',
    sizeRange: '24 – 30 meters (Largest animal ever known)',
    massRange: '100,000 – 190,000 kg (100–190 metric tons)',
    lifespan: '80 – 110 years',
    diet: 'Strictly planktivorous (Filters up to 4–8 tons of Antarctic krill daily)',
    nativeRange: 'All major oceans worldwide (Antarctic, North Atlantic, North Pacific, Indian)',
    heroImage: '/src/assets/images/blue_whale_anatomy_1790512093527.jpg',
    diagramVisualType: 'whale',
    summary: 'The blue whale is the largest biological organism ever to exist in Earth’s history. Its colossal physiology is an engineering marvel of biomechanics: a heart the size of a golf cart, an elastic ventral groove blubber pouch that expands to engulf its own body volume in water during lunge-feeding, and thick insulating blubber supporting extreme thermoregulation.',
    hotspots: [
      {
        id: 'bw1',
        name: 'Baleen Plates & Keratin Filter Array',
        system: 'digestive',
        x: 18,
        y: 42,
        description: '300–400 fringed keratin plates hanging from the upper jaw acting as a massive sieve for krill retention.',
        histologicalDetails: 'Dense alpha-keratin sheets with fibrous inner bristles that overlap to form a microscopic filtering mesh.',
        physiologicalFunction: 'Filters tons of krill from engulfed seawater during forceful tongue elevation and mouth closure.',
        evolutionarySignificance: 'Evolutionary loss of teeth in mysticetes replaced by specialized keratinized filtering structures ~30 Ma.',
        specialAdaptation: 'Ventral groove blubber accordion pleats expand up to 400% during high-speed feeding lunges.'
      },
      {
        id: 'bw2',
        name: 'Colossal Myogenic Heart (600 kg)',
        system: 'circulatory',
        x: 42,
        y: 48,
        description: 'Massive 4-chambered pump measuring ~1.5 meters across, beating as slowly as 2–8 BPM during deep dives.',
        histologicalDetails: 'Gigantic cardiomyocyte fibers surrounded by thick fibroelastic pericardial sac capable of handling huge stroke volumes (220 liters per beat).',
        physiologicalFunction: 'Pumps thousands of liters of blood through an aorta wide enough for a human child to crawl through.',
        evolutionarySignificance: 'Extreme bradycardia during deep dives conserves precious oxygen reserves for vital brain and heart tissues.',
        specialAdaptation: 'Aortic elastic reservoir (bulbous arteriosus) that cushions massive hydraulic stroke pressures.'
      },
      {
        id: 'bw3',
        name: 'Dual Blowholes & Tidal Lungs',
        system: 'respiratory',
        x: 32,
        y: 28,
        description: 'Paired dorsal blowholes with muscular sphincters capable of expelling air at over 300 km/h in a 9-12 meter high spout.',
        histologicalDetails: 'Cartilaginous airway rings with highly compliant lung parenchyma and myoelastic alveolar sphincters.',
        physiologicalFunction: 'Exchanges up to 90% of lung volume in a single breath (compared to 15% in humans) in under 2 seconds.',
        evolutionarySignificance: 'Dorsal migration of nostrils to the top of the skull enables breathing without breaking horizontal swimming velocity.',
        specialAdaptation: 'Rigid cartilage rings extending all the way to terminal bronchioles preventing collapse under high ambient ocean pressure.'
      },
      {
        id: 'bw4',
        name: 'Hydrodynamic Axial Spine & Caudal Fluke',
        system: 'skeletal',
        x: 75,
        y: 44,
        description: 'Massive vertebral column ending in boneless, fibrous caudal flukes spanning up to 8 meters across.',
        histologicalDetails: 'Spongy, lipid-saturated trabecular bone that reduces overall skeletal density and aids neutral buoyancy.',
        physiologicalFunction: 'Dorsoventral undulation powered by immense epaxial and hypaxial muscle bundles generates tons of thrust.',
        evolutionarySignificance: 'Complete loss of external hindlimbs (vestigial pelvic bones remain embedded in soft tissue).',
        specialAdaptation: 'Dense collagenous fibrous fluke with zero bones, acting as an ultra-efficient hydrofoil foil.'
      },
      {
        id: 'bw5',
        name: 'Insulative Subcutaneous Blubber Layer',
        system: 'integumentary',
        x: 55,
        y: 32,
        description: 'Dense lipid-collagen mantle up to 30–50 cm thick encasing the entire body for insulation and energy storage.',
        histologicalDetails: 'Adipose tissue tightly interwoven with structural elastin and collagen fibers supplied with countercurrent blood vessels.',
        physiologicalFunction: 'Prevents fatal hypothermia in freezing polar seas (-2°C) and stores hundreds of millions of calories for migrations.',
        evolutionarySignificance: 'Key evolutionary innovation enabling warm-blooded mammals to thrive in icy oceanic waters.',
        specialAdaptation: 'Countercurrent heat exchange retia mirabilia in fins and tongue prevent catastrophic core heat loss.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Integumentary & Thermal Blubber Shield',
        overview: 'Thick, smooth, hairless epidermis backed by up to 50 cm of dense adipose blubber.',
        keyStructures: ['Subcutaneous blubber mantle', 'Micro-ridged dermal interface', 'Ventral pleat grooves'],
        physiologicalMechanism: 'High lipid saturation provides extreme thermal resistance and aerodynamic laminar boundary flow.',
        cellularComposition: 'Adipocytes densely packed in a cross-woven structural collagen matrix.',
        adaptiveAdvantage: 'Enables continuous feeding in freezing Antarctic waters with zero core body temperature drop.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Skeletal & Buoyancy Mechanics',
        overview: 'Enormous porous skeleton saturated with low-density lipids that provide neutral oceanic buoyancy.',
        keyStructures: ['U-shaped rostrum', 'Mandibular hinge bones', 'Porous vertebrae', 'Vestigial pelvic bones'],
        physiologicalMechanism: 'Water provides hydrostatic support, freeing bones from the compressive limits that restrict terrestrial land mammals.',
        cellularComposition: 'High trabecular-to-cortical ratio, bone cavities filled with lipid oils rather than dense mineral.',
        adaptiveAdvantage: 'Allows gigantism impossible on land due to square-cube gravity constraints.'
      },
      muscular: {
        id: 'muscular',
        name: 'Muscular & Propulsion Hydraulics',
        overview: 'Massive epaxial and hypaxial muscle masses with high concentrations of myoglobin.',
        keyStructures: ['Epaxial dorsal muscles', 'Hypaxial swimming muscles', 'Tongue retractor complex'],
        physiologicalMechanism: 'Myoglobin stores immense quantities of oxygen directly inside muscle cells for 30+ minute foraging dives.',
        cellularComposition: 'Muscle tissue with over 10x the myoglobin concentration of terrestrial mammals, appearing almost black.',
        adaptiveAdvantage: 'Sustained aerobic power output at depths without requiring immediate atmospheric ventilation.'
      },
      nervous: {
        id: 'nervous',
        name: 'Central Nervous & Low-Frequency Acoustic Hearing',
        overview: 'Brain weighing ~7 kg optimized for long-range infrasonic echocommunication across ocean basins.',
        keyStructures: ['Acoustic cranial bones', 'Vestibulocochlear nerve', 'Auditory bullae'],
        physiologicalMechanism: 'Receives and transmits infrasonic vocalizations at 10–40 Hz that travel thousands of kilometers underwater.',
        cellularComposition: 'High density of spindle neurons in cortical regions governing acoustic mapping and social navigation.',
        adaptiveAdvantage: 'Enables solitary whales to communicate across entire ocean basins.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Cardiovascular Diving Bradycardia System',
        overview: '600 kg heart with a massive stroke volume regulated by extreme dive-response reflexes.',
        keyStructures: ['Gigantic left ventricle', 'Bulbous arteriosus', 'Retia mirabilia vascular networks'],
        physiologicalMechanism: 'Heart rate drops from 25–37 BPM at surface down to 2–8 BPM during deep dives; blood is shunted exclusively to heart and brain.',
        cellularComposition: 'Hypertrophied cardiomyocytes, vast capillary networks in vital organs with high red blood cell hematocrit.',
        adaptiveAdvantage: 'Maximizes dive duration by severely restricting blood flow to non-critical peripheral tissues.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Hyper-Efficient Diving Pulmonary System',
        overview: 'High-volume tidal lungs with cartilaginous reinforcement down to the alveolar ducts.',
        keyStructures: ['Twin dorsal blowholes', 'Muscular blowhole plug', 'Reinforced bronchioles'],
        physiologicalMechanism: 'Lungs collapse safely under pressure, pushing air into non-absorptive trachea to prevent decompression sickness (the bends).',
        cellularComposition: 'Thick elastic fibers with reinforced chondrocyte cartilage rings.',
        adaptiveAdvantage: 'Prevents nitrogen absorption into blood at depths of several hundred meters.'
      },
      digestive: {
        id: 'digestive',
        name: 'Lunge-Feeding & Baleen Filtration Engine',
        overview: 'Expandable ventral oral pouch capable of engulfing over 100 tons of krill-laden seawater.',
        keyStructures: ['Baleen keratin sieve', 'Expandable cavum ventrale', 'Multi-chambered stomach'],
        physiologicalMechanism: 'Accelerates into krill swarms, mouth drops open, ventral pleats balloon outwards, and tongue acts as a hydraulic piston to expel water through baleen.',
        cellularComposition: 'Beta-keratin filament plates with high tensile resistance.',
        adaptiveAdvantage: 'Captures millions of calories in a single 10-second feeding lunge.'
      },
      specialized: {
        id: 'specialized',
        name: 'Sensory Organ at Jaw Symphysis',
        overview: 'Specialized mechanoreceptor organ embedded in the fibrocartilage between unfused lower jaw bones.',
        keyStructures: ['Symphyseal sensory organ', 'Vascular neurovascular bundle'],
        physiologicalMechanism: 'Detects dynamic jaw expansion pressure during feeding lunges and triggers automated throat pleat expansion.',
        cellularComposition: 'Encapsulated mechanoreceptor nerve endings embedded in vascular gel.',
        adaptiveAdvantage: 'Coordinates the massive biomechanical lunge maneuver without tearing throat tissues.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Baleen Filtration from Toothed Ancestors',
        description: 'Transformed ancestral teeth into hundreds of keratinous filter plates, unlocking ocean plankton biomass.',
        eraOrOrigin: 'Oligocene (~30 Ma)',
        ecologicalAdvantage: 'Direct access to the base of the marine food chain, enabling unprecedented animal gigantism.'
      },
      {
        title: 'Ventral Groove Pleat Architecture',
        description: 'Accordion-like pleats extending from chin to navel allow oral volume to expand beyond the whale’s own body displacement.',
        eraOrOrigin: 'Miocene (~15 Ma)',
        ecologicalAdvantage: 'Maximizes energy capture per dive in dense, patchy krill swarms.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Cardiovascular',
        adaptation: 'Heart weighs ~600 kg; pumps ~220 L per stroke; dive heart rate 2–8 BPM',
        vsHumans: 'Human heart is ~300 g with ~0.07 L stroke volume; resting 70 BPM',
        ecologicalRole: 'Provides aerobic endurance for deep ocean foraging dives without surfacing.'
      },
      {
        system: 'Respiratory',
        adaptation: 'Exchanges 90% of lung air in a single 1.5-second breath',
        vsHumans: 'Humans exchange only 10–15% tidal volume per resting breath',
        ecologicalRole: 'Rapid surface replenishment minimizing time exposed at the air-water boundary.'
      }
    ],
    funFacts: [
      'A blue whale’s tongue alone weighs as much as an adult African elephant (~2.7 metric tons).',
      'Their low-frequency vocalizations at 188 decibels are louder than a jet engine at takeoff and can be heard over 800 kilometers away.',
      'A newborn blue whale calf gains around 90 kilograms (200 pounds) of body weight every single day during nursing.'
    ],
    physiologicalMetrics: [
      { label: 'Dive Heart Rate', value: '2 – 8', unit: 'BPM', notes: 'Extreme diving bradycardia' },
      { label: 'Lung Tidal Volume', value: '5,000', unit: 'Liters', notes: '90% gas turnover per breath' },
      { label: 'Daily Food Intake', value: '4 – 8', unit: 'Tons', notes: 'Equivalent to ~40 million krill' },
      { label: 'Aorta Diameter', value: '25 – 30', unit: 'cm', notes: 'Massive high-volume vascular conduit' }
    ]
  },
  {
    id: 'apis-mellifera',
    commonName: 'Western Honeybee (Worker)',
    scientificName: 'Apis mellifera',
    category: 'Invertebrates',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Apidae',
      genus: 'Apis',
      species: 'Apis mellifera'
    },
    conservationStatus: 'Data Deficient',
    habitat: 'Meadows, agricultural lands, forests, temperate & tropical terrestrial biomes',
    sizeRange: '12 – 15 mm (Worker)',
    massRange: '90 – 120 mg',
    lifespan: '6 – 8 weeks (Summer worker) / 4 – 6 months (Winter worker) / 2 – 5 years (Queen)',
    diet: 'Nectar (carbohydrates) and Pollen (protein & lipids)',
    nativeRange: 'Europe, Middle East, Africa; globally distributed for pollination',
    heroImage: '/src/assets/images/honeybee_macro_anatomy_1790512110119.jpg',
    diagramVisualType: 'bee',
    summary: 'Apis mellifera is a eusocial hymenopteran equipped with specialized anatomical machinery: a chitinous exoskeleton, optical compound eyes capable of polarized light navigation, a proventricular honey stomach, pollen baskets (corbiculae), a barbed venom stinger, and thoracic flight muscles operating at 230 wingbeats per second.',
    hotspots: [
      {
        id: 'b1',
        name: 'Dichroic Compound Eyes & Ocelli',
        system: 'nervous',
        x: 22,
        y: 35,
        description: 'Paired compound eyes containing ~6,900 ommatidia units plus 3 dorsal simple ocelli for flight stabilization.',
        histologicalDetails: 'Each ommatidium features a crystalline cone, rhabdom photoreceptors, and ultraviolet/polarized light sensitive pigments.',
        physiologicalFunction: 'Enables navigation via celestial solar polarized light vectors and detection of flower UV nectar guides.',
        evolutionarySignificance: 'Co-evolved with angiosperm floral patterns over 100 million years of plant-pollinator mutualism.',
        specialAdaptation: 'Trichromatic vision shifted toward UV, blue, and green (cannot see pure red, but sees ultraviolet patterns invisible to humans).'
      },
      {
        id: 'b2',
        name: 'Proventricular Honey Stomach (Crop)',
        system: 'digestive',
        x: 52,
        y: 42,
        description: 'Specialized expandable reservoir in the anterior abdomen separated from the midgut by a one-way proventriculus valve.',
        histologicalDetails: 'Epithelial layer rich in hypopharyngeal enzyme secretions (invertase, glucose oxidase) and muscular sphincter valves.',
        physiologicalFunction: 'Transports up to 70 mg of floral nectar while enzymatic conversion breaks sucrose into glucose and fructose.',
        evolutionarySignificance: 'Allows social sharing (trophallaxis) and storage of imperishable honey for hive overwintering.',
        specialAdaptation: 'Glucose oxidase produces trace hydrogen peroxide, preserving honey against bacterial decay for millennia.'
      },
      {
        id: 'b3',
        name: 'Asynchronous Flight Muscle & Spiracle Array',
        system: 'muscular',
        x: 38,
        y: 38,
        description: 'Thoracic indirect flight muscles that resonate at ~230 Hz driven by single nerve impulses causing multiple contractions.',
        histologicalDetails: 'Massive giant mitochondria (sarcosomes) occupying ~40% of muscle volume, fueled directly by tracheal air tubes.',
        physiologicalFunction: 'Powers wing oscillation creating aerodynamic leading-edge vortex lift for agile hovering flight.',
        evolutionarySignificance: 'Asynchronous muscle physiology overcomes biochemical limits on neural firing rates.',
        specialAdaptation: 'Can uncouple wings to shiver flight muscles for hive thermoregulation (keeping brood nest at exact 34.5°C).'
      },
      {
        id: 'b4',
        name: 'Corbicula (Pollen Basket) on Hind Tibia',
        system: 'integumentary',
        x: 60,
        y: 68,
        description: 'Concave outer surface on the posterior hind leg rimmed with stiff chitinous hairs for compacting and transporting pollen granules.',
        histologicalDetails: 'Sclerotized cuticular pocket with a specialized auricle and pecten comb acting as a pollen press.',
        physiologicalFunction: 'Collects floral pollen groomed from body hairs, moistens it with nectar, and locks it into dense pellets for transport.',
        evolutionarySignificance: 'Crucial evolutionary specialization for protein foraging supporting eusocial brood rearing.',
        specialAdaptation: 'Electrostatic body hairs passively attract oppositely charged airborne pollen grains.'
      },
      {
        id: 'b5',
        name: 'Barbed Venom Apparatus & Alarm Pheromone Glands',
        system: 'specialized',
        x: 85,
        y: 45,
        description: 'Modified ovipositor equipped with lancet barbs and venom sac containing melittin, apamin, and alarm pheromones (isoamyl acetate).',
        histologicalDetails: 'Two serrated lancets with backward-facing barbs that anchor into vertebrate skin upon penetration.',
        physiologicalFunction: 'Autotomizes upon stinging mammals, continuing to pump venom and release pheromones to recruit nestmates.',
        evolutionarySignificance: 'Sacrificial worker defense mechanism evolved to protect high-energy colony honey stores against vertebrate predators.',
        specialAdaptation: 'Venom gland releases isoamyl acetate (banana scent), triggering immediate stinging frenzy in nearby guards.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Chitinous Cuticle & Branched Hairs',
        overview: 'Hard external exoskeleton made of alpha-chitin and cross-linked sclerotin proteins.',
        keyStructures: ['Chitinous epicuticle', 'Plumose branched hairs', 'Wax gland plates'],
        physiologicalMechanism: 'Prevents desiccation, provides muscle attachment points, and carries electrostatic charge for pollen gathering.',
        cellularComposition: 'Epidermal cell layer secreting waxy hydrocarbons, chitin polysaccharide nanofibrils, and resilin elastic proteins.',
        adaptiveAdvantage: 'High strength-to-weight ratio protective armor with waterproofing wax layers.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Exoskeleton & Articular Sclerites',
        overview: 'Three-segmented body plan (Head, Thorax, Abdomen) with flexible membranous joints.',
        keyStructures: ['Thoracic box sclerites', 'Abdominal tergites & sternites', 'Leg articulations'],
        physiologicalMechanism: 'Resilin protein springs in wing hinges store elastic recoil energy during flight cycles.',
        cellularComposition: 'Tanned sclerotized plates connected by flexible unsclerotized articular membranes.',
        adaptiveAdvantage: 'Extreme mechanical durability and lightweight aerodynamic integrity.'
      },
      muscular: {
        id: 'muscular',
        name: 'Asynchronous Indirect Flight Muscles',
        overview: 'Thoracic muscles that deform the exoskeleton to beat wings at 230 Hz without 1:1 nerve pulses.',
        keyStructures: ['Dorsolongitudinal muscles', 'Dorsal-ventral muscles', 'Mandibular adductors'],
        physiologicalMechanism: 'Stretch-activation mechanism: contraction of one muscle group stretches the opposing group, triggering automatic contraction.',
        cellularComposition: 'Fibrillar muscle fibers with gigantic mitochondria and dense tracheolar branching.',
        adaptiveAdvantage: 'Enables high-frequency wing oscillation with minimal neural metabolic overhead.'
      },
      nervous: {
        id: 'nervous',
        name: 'Mushroom Bodies & Waggle Dance Navigation',
        overview: 'Supraesophageal ganglion (brain) with ~1 million neurons capable of symbolic spatial communication.',
        keyStructures: ['Mushroom bodies (Corpora pedunculata)', 'Antennal lobes', 'Optic lobes'],
        physiologicalMechanism: 'Translates celestial solar angles and odometry distances into the angular waggle dance code to communicate floral locations.',
        cellularComposition: 'Kenyon cells in mushroom bodies mediating olfactory learning, visual memory, and time perception.',
        adaptiveAdvantage: 'Complex collective decision-making and precise spatial communication.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Open Hemolymph & Pulsatile Dorsal Vessel',
        overview: 'Open circulatory system driven by a multi-chambered dorsal heart pumping clear hemolymph through hemocoel sinuses.',
        keyStructures: ['Dorsal aorta', 'Heart chambers with ostia', 'Accessory pulsatile organs'],
        physiologicalMechanism: 'Bathes internal organs directly in hemolymph carrying sugars, amino acids, and hormones (does not transport oxygen).',
        cellularComposition: 'Hemocytes for immune phagocytosis and wound coagulation; trehalose disaccharide as primary circulating blood sugar.',
        adaptiveAdvantage: 'Low-pressure, energetically cheap nutrient distribution.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Tracheal Tubule & Air Sac Respiration',
        overview: 'Network of internal branching tracheal tubes opening via 10 pairs of lateral spiracles.',
        keyStructures: ['Thoracic & Abdominal spiracles', 'Tracheal air sacs', 'Microscopic tracheoles'],
        physiologicalMechanism: 'Direct diffusion of atmospheric oxygen from tracheoles straight to cellular mitochondria without hemoglobin intermediate.',
        cellularComposition: 'Taenidia chitin spiral reinforcements preventing tracheal tube collapse under negative ventilation pressures.',
        adaptiveAdvantage: 'Zero oxygen transport lag: fuels intense flight metabolism at full capacity.'
      },
      digestive: {
        id: 'digestive',
        name: 'Mouthparts, Honey Stomach & Malpighian Tubules',
        overview: 'Chewing-lapping proboscis connected to honey stomach, ventriculus, and Malpighian excretory tubules.',
        keyStructures: ['Galea and glossa (tongue)', 'Honey stomach (crop)', 'Proventriculus', 'Malpighian tubules'],
        physiologicalMechanism: 'Proventriculus valve filters out pollen grains from nectar, allowing nectar to remain clean while pollen is digested.',
        cellularComposition: 'Columnar microvillar midgut enterocytes, uric acid secreting excretory tubule cells.',
        adaptiveAdvantage: 'Separates social food payload (nectar) from individual metabolic nutrition.'
      },
      specialized: {
        id: 'specialized',
        name: 'Nasonov & Wax Gland Arrays',
        overview: 'Specialized exocrine glands producing brood wax scales and orientation pheromones.',
        keyStructures: ['Abdominal wax mirrors (sternites 4–7)', 'Nasonov pheromone gland', 'Mandibular glands'],
        physiologicalMechanism: 'Converts dietary sugar into long-chain hydrocarbon wax secreted as liquid flakes that solidify upon air exposure.',
        cellularComposition: 'Lipid-secreting epidermal gland cells beneath smooth cuticular plates.',
        adaptiveAdvantage: 'Provides construction material to build mathematically optimized hexagonal honeycomb storage comb.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Eusocial Caste Differentiation & Waggle Dance',
        description: 'Symbolic communication of polar coordinates of nectar sources relative to the sun’s azimuth.',
        eraOrOrigin: 'Cretaceous (~100 Ma)',
        ecologicalAdvantage: 'Allows a colony of 50,000 individuals to rapidly exploit transient floral blooms across a 10 km radius.'
      },
      {
        title: 'Pollen Basket (Corbicula) Specialization',
        description: 'Morphological modification of the hind leg into a pollen packaging and transportation press.',
        eraOrOrigin: 'Early Cenozoic (~60 Ma)',
        ecologicalAdvantage: 'High-density protein transport for continuous larval nutrition.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Respiratory',
        adaptation: 'Direct tracheal diffusion into flight muscle mitochondria',
        vsHumans: 'Humans use blood hemoglobin transport through closed vascular capillaries',
        ecologicalRole: 'Instantaneous oxygen delivery fueling 230 wingbeats per second.'
      },
      {
        system: 'Visual & Sensory',
        adaptation: 'Ultraviolet & polarized light detection via 6,900 ommatidia',
        vsHumans: 'Humans have single-lens camera eyes (400–700 nm trichromatic)',
        ecologicalRole: 'Navigates through dense cloud cover using atmospheric polarization patterns.'
      }
    ],
    funFacts: [
      'To produce 1 pound of honey, a honeybee colony must visit approximately 2 million flowers and fly over 55,000 miles.',
      'Honeybees communicate flight vectors through a symbolic "waggle dance" that adjusts in real-time for the movement of the sun.',
      'A worker honeybee’s brain is roughly 1 cubic millimeter in size yet possesses computational capacity for face recognition and basic arithmetic.'
    ],
    physiologicalMetrics: [
      { label: 'Wingbeat Frequency', value: '230', unit: 'Hz', notes: 'Asynchronous resonant muscle' },
      { label: 'Flight Speed', value: '24 – 30', unit: 'km/h', notes: 'With full nectar payload' },
      { label: 'Honey Crop Capacity', value: '70', unit: 'mg', notes: 'Nearly matches own body weight' },
      { label: 'Hive Core Temp', value: '34.5 – 35.5', unit: '°C', notes: 'Actively regulated by shivering' }
    ]
  },
  {
    id: 'carcharodon-carcharias',
    commonName: 'Great White Shark',
    scientificName: 'Carcharodon carcharias',
    category: 'Fish',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Chondrichthyes',
      order: 'Lamniformes',
      family: 'Lamnidae',
      genus: 'Carcharodon',
      species: 'Carcharodon carcharias'
    },
    conservationStatus: 'Vulnerable',
    habitat: 'Coastal and offshore pelagic waters, epipelagic zone (0–1,200 m depths)',
    sizeRange: '3.8 – 6.0 meters (Females larger)',
    massRange: '680 – 2,000 kg',
    lifespan: '70+ years',
    diet: 'Carnivorous apex predator (Pinnipeds, cetaceans, large teleost fish, sea turtles)',
    nativeRange: 'Temperate and subtropical coastal waters worldwide',
    heroImage: '/src/assets/images/shark_anatomy_1790512125817.jpg',
    diagramVisualType: 'shark',
    summary: 'The Great White Shark is a chondrichthyan apex predator characterized by an all-cartilaginous endoskeleton, dermal denticles creating laminar micro-vortices, polyphyodont replaceable serrated dentition, Ampullae of Lorenzini electroreceptors capable of sensing nanovolt fields, and regional endothermy via red-muscle retia mirabilia.',
    hotspots: [
      {
        id: 's1',
        name: 'Ampullae of Lorenzini Electroreceptors',
        system: 'nervous',
        x: 14,
        y: 45,
        description: 'Pore network around the snout filled with conductive glycoprotein gel detecting faint electric fields down to 1 billionth of a volt.',
        histologicalDetails: 'Epithelial ampullary canals lined with ciliated sensory receptor cells connected directly to the trigeminal cranial nerve.',
        physiologicalFunction: 'Detects muscular contractions, heartbeats, and gill movement of buried or zero-visibility prey.',
        evolutionarySignificance: 'Ancient elasmobranch sensory adaptation providing geomagnetic navigation and blind terminal strike accuracy.',
        specialAdaptation: 'Glycoprotein gel has the highest proton conductivity of any known biological material.'
      },
      {
        id: 's2',
        name: 'Polyphyodont Conveyor-Belt Serrated Teeth',
        system: 'skeletal',
        x: 19,
        y: 54,
        description: 'Multiple rows of triangular, serrated dermal teeth continuously moving forward on a fibrous conveyor membrane.',
        histologicalDetails: 'Hard outer vitrodentine enameloid layer over vascular osteodentine core, anchoring into cartilage gums.',
        physiologicalFunction: 'Shears blubber, cartilage, and bone with over 1.8 metric tons of jaw bite force.',
        evolutionarySignificance: 'Lost or broken teeth are replaced within days, shedding 20,000–30,000 teeth over a single shark lifetime.',
        specialAdaptation: 'Upper teeth are broad and serrated for slicing; lower teeth are narrow and pointed for impaling prey.'
      },
      {
        id: 's3',
        name: 'Lipid-Rich Hepatic Buoyancy Engine (Liver)',
        system: 'digestive',
        x: 48,
        y: 50,
        description: 'Enormous two-lobed liver making up to 28% of total body mass, packed with low-density squalene hydrocarbon oil.',
        histologicalDetails: 'Hepatocytes filled with dense squalene and triacylglycerol lipid droplets with high metabolic turnover.',
        physiologicalFunction: 'Substitutes for the absent swim bladder to provide near-neutral hydro-buoyancy and huge energy reserves.',
        evolutionarySignificance: 'Allows vertical migrations between surface sun and 1,000 m abyssal depths without risk of barotrauma or gas expansion.',
        specialAdaptation: 'Allows prolonged fasting across thousands of miles of oceanic basin migrations.'
      },
      {
        id: 's4',
        name: 'Regional Endothermy & Rete Mirabile Heat Exchanger',
        system: 'circulatory',
        x: 38,
        y: 40,
        description: 'Vascular countercurrent network warming red swimming muscles, stomach, and brain 10–14°C above surrounding cold water.',
        histologicalDetails: 'Interleaved micro-arterioles and venules where warm venous blood from core muscles transfers heat to cold arterial gill blood.',
        physiologicalFunction: 'Maintains high muscle power output, rapid digestion, and sharp sensory reflexes in cold pelagic depths.',
        evolutionarySignificance: 'Endothermic lamnid physiology bridges the metabolic gap between ectothermic fish and marine mammals.',
        specialAdaptation: 'Elevates visual processing speed in cold deep water, giving an optical advantage over sluggish ectothermic prey.'
      },
      {
        id: 's5',
        name: 'Dermal Denticles & Hydrodynamic Placoid Scales',
        system: 'integumentary',
        x: 65,
        y: 35,
        description: 'Microscopic tooth-like placoid scales covering the skin oriented along swimming streamlines.',
        histologicalDetails: 'Miniature scales containing dentine, pulp cavity, and enameloid cap arranged in precise riblet ridges.',
        physiologicalFunction: 'Channels water flow along micro-grooves, dampening turbulence, preventing parasite attachment, and cutting drag by 10%.',
        evolutionarySignificance: 'Precursor evolutionary structure from which vertebrate teeth originally evolved.',
        specialAdaptation: 'Silent swimming: reduces boundary layer noise that prey could detect via lateral lines.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Placoid Scale Dermal Armor',
        overview: 'Tough skin armored with microscopic enamel-coated placoid denticles.',
        keyStructures: ['Placoid denticles (riblets)', 'Countershading pigments', 'Lateral line pores'],
        physiologicalMechanism: 'Dorsal dark slate color and ventral pure white belly creates optical countershading camouflage from above and below.',
        cellularComposition: 'Vascular dentine core capped with hyper-mineralized enameloid.',
        adaptiveAdvantage: 'Laminar drag reduction and impenetrable protection against conspecific bites during courtship.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Unossified Cartilaginous Skeleton',
        overview: 'Endoskeleton made entirely of calcified fibrocartilage, lacking true osteoblast bone.',
        keyStructures: ['Chondrocranium', 'Palatoquadrate upper jaw', 'Calcified vertebrae', 'Hyomandibula'],
        physiologicalMechanism: 'Cartilage is roughly half the density of bone, greatly reducing overall body weight and increasing mechanical flexibility.',
        cellularComposition: 'Chondrocytes embedded in a chondroitin sulfate and collagen matrix reinforced by tessellated calcified prism tiles.',
        adaptiveAdvantage: 'High flexibility allows tight maneuvering and explosive bursts of predatory speed.'
      },
      muscular: {
        id: 'muscular',
        name: 'Segmented Myomeres & Red Muscle Core',
        overview: 'W-shaped muscle blocks (myomeres) surrounding an internal core of oxidative red swimming muscle.',
        keyStructures: ['Lateral red muscle bands', 'Epaxial white muscle mass', 'Mandibular adductor complex'],
        physiologicalMechanism: 'Red muscles power continuous cruising via aerobic lipid metabolism; white muscles provide explosive burst lunges.',
        cellularComposition: 'Red fibers with dense myoglobin and capillary beds insulated inside the core by retia mirabilia.',
        adaptiveAdvantage: 'Enables high-efficiency continuous oceanic cruising punctuated by explosive breaches.'
      },
      nervous: {
        id: 'nervous',
        name: 'Multi-Modal Sensory & Olfactory Bulbs',
        overview: 'Sensory suite dominated by massive olfactory bulbs that occupy 14% of the brain mass.',
        keyStructures: ['Olfactory rosette lobes', 'Ampullae of Lorenzini', 'Lateral line neuromasts'],
        physiologicalMechanism: 'Detects a single drop of blood in 100 liters of water and senses micro-vibrations across hundreds of meters.',
        cellularComposition: 'Bipolar olfactory neurons, hair cell neuromasts with directional kinocilia.',
        adaptiveAdvantage: 'Pinpoint targeting of prey across total darkness or murky coastal surf.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Two-Chambered Branchial Heart & Retia Mirabilia',
        overview: 'Single-circuit cardiovascular system with conus arteriosus pumping blood through gills to systemic rete exchangers.',
        keyStructures: ['Sinus venosus', 'Atrium & Ventricle', 'Conus arteriosus', 'Lateral cutaneous retia'],
        physiologicalMechanism: 'Deoxygenated blood pumped to gill lamellae; oxygenated blood warms via countercurrent heat exchange before entering muscles.',
        cellularComposition: 'Nucleated elasmobranch erythrocytes with high volume capacity.',
        adaptiveAdvantage: 'Preserves body heat generated by muscle work rather than losing it to cold ocean water at the gills.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Obligate Ram Ventilation & 5 Gill Slits',
        overview: 'Five pairs of open gill slits requiring continuous forward swimming to force water over gill lamellae.',
        keyStructures: ['Gill arches', 'Primary and secondary lamellae', 'Gill rakers'],
        physiologicalMechanism: 'Forward motion forces oxygenated seawater into the mouth and across capillary-rich secondary lamellae in countercurrent direction.',
        cellularComposition: 'Ultrathin respiratory epithelium with countercurrent capillary blood flow ensuring 80%+ oxygen extraction.',
        adaptiveAdvantage: 'Maximizes oxygen extraction efficiency at high swimming velocities without energetic buccal pumping.'
      },
      digestive: {
        id: 'digestive',
        name: 'Spiral Valve Intestine & Squalene Liver',
        overview: 'Short, highly efficient J-shaped stomach with a spiral-valved lower intestine for compact nutrient absorption.',
        keyStructures: ['Acidic stomach', 'Spiral valve intestine', 'Squalene-rich bilobed liver'],
        physiologicalMechanism: 'The spiral valve forces food through a helical path, drastically increasing internal surface area and absorption transit time in a short body cavity.',
        cellularComposition: 'Mucus-secreting goblet cells, peptic zymogen cells, lipid-saturated hepatocytes.',
        adaptiveAdvantage: 'High digestive efficiency while keeping visceral cavity short for powerful muscular body undulation.'
      },
      specialized: {
        id: 'specialized',
        name: 'Palatoquadrate Jaw Protrusion',
        overview: 'Upper jaw is not fused to the skull, suspended by flexible ligaments and the hyomandibular cartilage.',
        keyStructures: ['Palatoquadrate', 'Meckel’s cartilage', 'Hyomandibular joint'],
        physiologicalMechanism: 'During strikes, the snout lifts and the upper jaw projects forward and downward, creating a massive biting aperture.',
        cellularComposition: 'Elastic connective tissue ligaments with high tensile rebound.',
        adaptiveAdvantage: 'Allows a clean, gouging shearing bite on massive prey (seals, whales) without risking cranial bone fractures.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Ampullary Electroreception System',
        description: 'Network of sub-dermal electroconductive ampullae sensing microvolt bioelectric fields of living animals.',
        eraOrOrigin: 'Devonian / Carboniferous (~400 Ma)',
        ecologicalAdvantage: 'Enables pinpoint blind strikes in the final inches of a predatory attack when eyes roll back for protection.'
      },
      {
        title: 'Lamnid Regional Endothermy',
        description: 'Countercurrent vascular retia retain metabolic heat in muscles, stomach, and brain.',
        eraOrOrigin: 'Cenozoic (~50 Ma)',
        ecologicalAdvantage: 'Maintains high swimming speed and acute vision in cold sub-polar waters.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Skeletal Framework',
        adaptation: '100% calcified fibrocartilage, no true bone',
        vsHumans: 'Humans have mineralized hydroxyapatite osseous skeleton',
        ecologicalRole: 'Lightweight flexibility and reduced negative buoyancy in marine pelagic zone.'
      },
      {
        system: 'Sensory Spectrum',
        adaptation: 'Electroreception (Ampullae of Lorenzini) + Lateral line pressure wave sensing',
        vsHumans: 'Humans lack electroreceptors and aquatic mechanoreceptive lateral lines',
        ecologicalRole: 'Complete spatial tracking of moving marine life in zero-visibility water.'
      }
    ],
    funFacts: [
      'A Great White Shark can detect a single drop of blood in 25 gallons (100 liters) of water and sense electrical fields from over 3 feet away.',
      'To protect their eyes during a violent strike, Great White Sharks roll their eyeballs completely backward into their eye sockets (ocular rotation).',
      'They do not sleep like humans; they must keep swimming continuously with their mouths slightly open (obligate ram ventilation) to breathe.'
    ],
    physiologicalMetrics: [
      { label: 'Bite Force', value: '18,000', unit: 'Newtons', notes: 'Top jaw shearing force' },
      { label: 'Thermal Gradient', value: '+10 – +14', unit: '°C', notes: 'Core muscle above ambient water' },
      { label: 'Liver Body Mass Ratio', value: '24 – 28', unit: '%', notes: 'Squalene hydrocarbon buoyancy' },
      { label: 'Electro-Sensitivity', value: '< 5', unit: 'nV/cm', notes: 'Lowest bioelectric threshold known' }
    ]
  },
  {
    id: 'falco-peregrinus',
    commonName: 'Peregrine Falcon',
    scientificName: 'Falco peregrinus',
    category: 'Birds',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Aves',
      order: 'Falconiformes',
      family: 'Falconidae',
      genus: 'Falco',
      species: 'Falco peregrinus'
    },
    conservationStatus: 'Least Concern',
    habitat: 'Cliffs, river valleys, coastal coastlines, urban high-rise canyons worldwide',
    sizeRange: '34 – 58 cm length, 74 – 120 cm wingspan',
    massRange: '0.7 – 1.5 kg (Females up to 30% larger)',
    lifespan: '13 – 17 years',
    diet: 'Avian specialist carnivore (Doves, waterfowl, songbirds caught in mid-air)',
    nativeRange: 'Cosmopolitan: every continent except Antarctica',
    diagramVisualType: 'falcon',
    summary: 'The Peregrine Falcon is the fastest animal on planet Earth, achieving stoop diving speeds in excess of 389 km/h (242 mph). Its anatomy is optimized for extreme velocity aerodynamic engineering: pneumatic hollow bones, a rigid furcula and keeled sternum, air-sac unidirectional breathing, specialized nostril tubercles that prevent lung blowout at high speeds, and third-eyelid nictitating membranes.',
    hotspots: [
      {
        id: 'f1',
        name: 'Nasal Baffle Tubercles (Airflow Cones)',
        system: 'respiratory',
        x: 18,
        y: 28,
        description: 'Bony conical baffles inside nostrils that regulate shockwave pressures during 380+ km/h stoop dives.',
        histologicalDetails: 'Vascularized keratin-covered cartilaginous spicules situated directly in the anterior narial aperture.',
        physiologicalFunction: 'Deflects incoming supersonic-like air pressure, allowing the falcon to inhale smoothly without lung barotrauma.',
        evolutionarySignificance: 'Direct biological inspiration for the intake cone diffusers used in modern supersonic jet turbine engines.',
        specialAdaptation: 'Prevents explosive atmospheric pressurization from rupturing delicate avian air sacs during terminal dives.'
      },
      {
        id: 'f2',
        name: 'Deep-Fovea Binocular Retinas & Pecten Oculi',
        system: 'nervous',
        x: 24,
        y: 24,
        description: 'Eyes featuring dual foveas per eye (convex central + deep lateral) providing 8x the visual acuity of humans.',
        histologicalDetails: 'Dense cone photoreceptor packing (1 million cones/mm²) backed by a vascularized accordion-like pecten oculi.',
        physiologicalFunction: 'Tracks pigeon-sized prey from over 3 kilometers away while simultaneously calculating terminal dive trajectories.',
        evolutionarySignificance: 'Deep foveal optics create an integrated telephoto lens magnifying distant aerial motion.',
        specialAdaptation: 'Nictitating membrane (translucent third eyelid) sweeps tears across cornea to maintain vision at 380 km/h.'
      },
      {
        id: 'f3',
        name: 'Deep Keeled Sternum & Pectoralis Flight Engine',
        system: 'muscular',
        x: 42,
        y: 52,
        description: 'Huge sagittal bone keel anchoring massive pectoralis major (downstroke) and supracoracoideus (upstroke) muscles.',
        histologicalDetails: 'Dense Type I oxidative muscle fibers packed with myoglobin and glycogen granules.',
        physiologicalFunction: 'Powers explosive wing flapping and locks wings into an aerodynamic delta-wing teardrop during stoops.',
        evolutionarySignificance: 'Pectoral flight muscle group accounts for nearly 25% of total body mass.',
        specialAdaptation: 'Supracoracoideus uses a biological pulley tendon through the triosseal canal to elevate the wing from beneath.'
      },
      {
        id: 'f4',
        name: 'Unidirectional Continuous Flow Air-Sac Lungs',
        system: 'respiratory',
        x: 48,
        y: 42,
        description: 'Rigid parabronchial lung tissue coupled with 9 compliant air sacs circulating air in a continuous one-way loop.',
        histologicalDetails: 'Microscopic air capillaries intertwined with blood capillaries in a cross-current gas exchange orientation.',
        physiologicalFunction: 'Extracts oxygen continuously during both inhalation and exhalation with zero dead-space retention.',
        evolutionarySignificance: 'Highest oxygen exchange efficiency of any vertebrate class, fueling extreme flight metabolism.',
        specialAdaptation: 'Cross-current vascular blood flow maintains gas exchange even at high sub-zero altitudes.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Aerodynamic Contour Plumage',
        overview: 'Stiff, streamlined contour feathers interlocking via microscopic barbules.',
        keyStructures: ['Primary remiges', 'Uropygial preen gland', 'Nictitating membrane'],
        physiologicalMechanism: 'Slots and barbule hooks prevent feather flutter and maintain laminar boundary layer at high Mach fractions.',
        cellularComposition: 'Beta-keratin protein polymers with melanin cross-linking for structural stiffness.',
        adaptiveAdvantage: 'Zero aerodynamic flutter during 380 km/h dives.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Pneumatized Hollow Skeletal Frame',
        overview: 'Ultralight skeleton reinforced with internal trabecular struts and fused axial bones.',
        keyStructures: ['Keeled sternum (carina)', 'Synsacrum', 'Furcula (wishbone)', 'Triosseal canal'],
        physiologicalMechanism: 'Air sacs extend directly into hollow bone cavities, eliminating non-functional mineral weight.',
        cellularComposition: 'Dense cortical bone shell with internal honeycomb architectural struts.',
        adaptiveAdvantage: 'High rigidity to withstand multi-G pull-out forces after high-speed dives.'
      },
      muscular: {
        id: 'muscular',
        name: 'Pectoral Flight & Stoop Locking Muscles',
        overview: 'Flight muscles comprising up to 25% of body mass fueled by oxidative aerobic pathways.',
        keyStructures: ['Pectoralis major', 'Supracoracoideus', 'Flexor digitorum (talon grip)'],
        physiologicalMechanism: 'Tendon lock mechanism clamps talons into prey upon impact without requiring continuous voluntary exertion.',
        cellularComposition: 'Oxidative muscle fibers rich in myoglobin and capillary beds.',
        adaptiveAdvantage: 'Deliver fatal kinetic impact (blunt trauma) to airborne prey during high-speed passes.'
      },
      nervous: {
        id: 'nervous',
        name: 'High-Speed Visual Processing & Dual Foveae',
        overview: 'Encephalized avian brain capable of processing visual frame rates up to 130 Hz (vs 60 Hz in humans).',
        keyStructures: ['Optic tectum', 'Dual fovea retina', 'Cerebellum navigation center'],
        physiologicalMechanism: 'High temporal visual resolution prevents motion blur during high-speed low-altitude maneuvers.',
        cellularComposition: 'Densely packed retinal cones, highly myelinated optic nerve bundle.',
        adaptiveAdvantage: 'Tracks evasive prey movements in high-speed 3D airspace without collision.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'High-Pressure Avian 4-Chambered Cardiovascular Loop',
        overview: 'Large heart beating up to 600–900 BPM during active flight to perfuse flight muscles.',
        keyStructures: ['Hypertrophied left ventricle', 'Right aortic arch', 'Carotid rete mirabile'],
        physiologicalMechanism: 'High systemic arterial pressure (up to 300 mmHg) forces rapid oxygen delivery to working pectoral muscles.',
        cellularComposition: 'Nucleated, highly compliant avian erythrocytes.',
        adaptiveAdvantage: 'Sustains massive aerobic power output during vertical climb ascents.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Continuous Cross-Current Air-Sac System',
        overview: 'Non-collapsing parabronchi through which air flows continuously in one direction.',
        keyStructures: ['9 Air sacs (anterior & posterior)', 'Parabronchial lungs', 'Narial baffle cones'],
        physiologicalMechanism: 'Inhaled air travels through posterior sacs, through parabronchi, into anterior sacs, and out; gas exchange occurs in both phases.',
        cellularComposition: 'Ultrathin blood-gas barrier (~0.1 µm), reinforced cartilage parabronchial tubes.',
        adaptiveAdvantage: 'Continuous oxygenation under extreme physical exertion.'
      },
      digestive: {
        id: 'digestive',
        name: 'Gizzard & Rapid Regurgitation (Casting)',
        overview: 'Proventriculus enzyme chamber paired with muscular gizzard that condenses bones and feathers into a pellet.',
        keyStructures: ['Crop', 'Acidic proventriculus', 'Muscular gizzard', 'Casting mechanism'],
        physiologicalMechanism: 'Digests meat within hours; compacts indigestible bones and feathers into a pellet regurgitated before flight.',
        cellularComposition: 'Proteolytic enzyme-secreting gastric mucosa, muscular gizzard walls.',
        adaptiveAdvantage: 'Jettisons indigestible weight rapidly to keep flight mass minimal.'
      },
      specialized: {
        id: 'specialized',
        name: 'Anisodactyl Locking Raptorial Talons',
        overview: 'Four powerful curved talons equipped with mechanical tendon ratchets for gripping.',
        keyStructures: ['Hallux (rear talon)', 'Digital flexor tendon ridges', 'Keratin talon sheath'],
        physiologicalMechanism: 'Bending the ankle automatically pulls tendons tight, locking talons with bone-crushing force.',
        cellularComposition: 'Heavily calcified beta-keratin claws sharper than surgical scalpels.',
        adaptiveAdvantage: 'Instantaneous lethality on mid-air collision.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Narial Baffle Aerodynamic Cones',
        description: 'Cartilaginous spicules in nostrils regulating airflow during terminal stoop dives.',
        eraOrOrigin: 'Cenozoic (~30 Ma)',
        ecologicalAdvantage: 'Prevents lung overpressurization at 389 km/h.'
      },
      {
        title: 'Dual Fovea Telephoto Vision',
        description: 'Two separate visual centers per eye providing both wide-angle search and magnified binocular tracking.',
        eraOrOrigin: 'Neogene (~20 Ma)',
        ecologicalAdvantage: 'Spots small prey from thousands of feet in the air while maintaining flight horizon.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Respiratory Engine',
        adaptation: 'Unidirectional parabronchial air-sac flow (continuous oxygen exchange)',
        vsHumans: 'Humans have bidirectional tidal alveolar lungs (dead space in trachea/bronchi)',
        ecologicalRole: 'Provides uncompromised aerobic power output at speeds over 380 km/h.'
      },
      {
        system: 'Visual Processing',
        adaptation: '130 Hz flicker fusion rate + dual foveae (8x human resolution)',
        vsHumans: 'Humans have ~60 Hz flicker fusion rate with a single central fovea',
        ecologicalRole: 'Perceives high-speed trajectory changes in evasive prey without motion blur.'
      }
    ],
    funFacts: [
      'The highest measured dive speed of a Peregrine Falcon in a stoop is 389 km/h (242 mph), making it the fastest member of the animal kingdom.',
      'When pulling out of a 200+ mph dive, a peregrine experiences up to 25 Gs of acceleration — enough to render a human fighter pilot unconscious.',
      'Their eyes are protected during high-speed dives by a translucent "third eyelid" (nictitating membrane) that lubricates the cornea without blocking vision.'
    ],
    physiologicalMetrics: [
      { label: 'Max Stoop Velocity', value: '389', unit: 'km/h', notes: 'Recorded via GPS altimetry' },
      { label: 'Flight Heart Rate', value: '600 – 900', unit: 'BPM', notes: 'High-pressure avian heart' },
      { label: 'Visual Flicker Fusion', value: '130', unit: 'Hz', notes: 'Detects high-speed motion' },
      { label: 'Pectoral Muscle Mass', value: '25', unit: '% of Body', notes: 'Direct flight motor power' }
    ]
  },
  {
    id: 'enteroctopus-dofleini',
    commonName: 'Giant Pacific Octopus',
    scientificName: 'Enteroctopus dofleini',
    category: 'Invertebrates',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Cephalopoda',
      order: 'Octopoda',
      family: 'Octopodidae',
      genus: 'Enteroctopus',
      species: 'Enteroctopus dofleini'
    },
    conservationStatus: 'Least Concern',
    habitat: 'Cold coastal temperate waters of the North Pacific (tide pools to 1,500 m deep)',
    sizeRange: '3 – 5 meters arm span (Record: 9 meters)',
    massRange: '15 – 50 kg (Record: 272 kg)',
    lifespan: '3 – 5 years (Semelparous)',
    diet: 'Carnivorous (Crabs, clams, lobsters, fish, small sharks)',
    nativeRange: 'North Pacific rim from California, Alaska, Russia to Japan',
    diagramVisualType: 'octopus',
    summary: 'The Giant Pacific Octopus is the largest cephalopod mollusk species, exhibiting decentralized intelligence with three-fifths of its 500 million neurons distributed across eight semi-autonomous arms. Its physiological features include blue copper-based hemocyanin blood, three myogenic hearts, thousands of independent suction cups with chemoreception, dynamic chromatophore camouflage, and a chitinous parrot-like beak.',
    hotspots: [
      {
        id: 'o1',
        name: 'Three-Heart Cardiovascular & Hemocyanin Blood',
        system: 'circulatory',
        x: 46,
        y: 45,
        description: 'Systemic main heart plus two branchial hearts pumping blue copper-based hemocyanin blood through gills.',
        histologicalDetails: 'Myogenic cardiac tissue using copper hemocyanin protein complexes that bind oxygen in freezing, low-oxygen water.',
        physiologicalFunction: 'Branchial hearts boost blood pressure specifically through the gills; systemic heart stops beating when swimming.',
        evolutionarySignificance: 'Hemocyanin is far more efficient than hemoglobin at binding oxygen in near-freezing ocean depths.',
        specialAdaptation: 'Systemic heart shuts down during fast jet propulsion, causing rapid exhaustion and necessitating stealth over pursuit.'
      },
      {
        id: 'o2',
        name: 'Decentralized Radial Nerve Cord in 8 Arms',
        system: 'nervous',
        x: 35,
        y: 65,
        description: 'Over 300 million neurons located in the arms, allowing each tentacle to taste, touch, and move independently of the central brain.',
        histologicalDetails: 'Axonal nerve rings, local reflex ganglions at the base of every sucker, and neuromuscular motor nodes.',
        physiologicalFunction: 'Arms process local sensory input and execute complex grasping motions without requiring central brain instruction.',
        evolutionarySignificance: 'Pinnacle of invertebrate cognitive decentralization.',
        specialAdaptation: 'Suckers contain tactile mechanoreceptors and gustatory chemoreceptors (tasting whatever they touch).'
      },
      {
        id: 'o3',
        name: 'Dynamic Chromatophore & Papillae Skin Matrix',
        system: 'integumentary',
        x: 55,
        y: 32,
        description: 'Sub-millimeter pigment sacs, iridophores, and leucophores controlled directly by motor neurons in milliseconds.',
        histologicalDetails: 'Elastic pigment sacs wrapped with radial muscle fibers that contract to expand colors (red, yellow, brown, black).',
        physiologicalFunction: 'Matches substrate texture, color, and polarization in under 200 milliseconds for total optical camouflage.',
        evolutionarySignificance: 'Direct neural control of skin appearance without hormonal latency.',
        specialAdaptation: 'Dermal papillae muscles physically deform skin from glass-smooth to rugged rock texture in seconds.'
      },
      {
        id: 'o4',
        name: 'Chitinous Beak & Radula Drill',
        system: 'digestive',
        x: 48,
        y: 56,
        description: 'The only hard structure in the body: a sharp, parrot-like chitin beak capable of cracking crab carapaces.',
        histologicalDetails: 'Cross-linked chitin-protein matrix with a hardness gradient transitioning seamlessly into soft buccal tissue.',
        physiologicalFunction: 'Bites into hard prey, injects paralyzing cephalotoxin saliva, and rasps flesh using a toothed radula.',
        evolutionarySignificance: 'Allows an animal with zero internal bones to access hard-shelled benthic mollusks and crustacea.',
        specialAdaptation: 'Because the beak is the only rigid organ, the octopus can squeeze through any opening larger than its beak.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Chromatophore, Iridophore & Papillae Mantle',
        overview: 'Neuromuscular color-changing skin containing millions of elastic pigment cells and texture papillae.',
        keyStructures: ['Chromatophores', 'Iridophores (reflective)', 'Leucophores (white)', 'Dermal papillae'],
        physiologicalMechanism: 'Radial muscle fibers contract under direct motor neuron control to expand pigment discs in 200 ms.',
        cellularComposition: 'Elastic pigment-containing cytoarchemata, reflecting guanine crystals, and smooth muscular papillae.',
        adaptiveAdvantage: 'Instantaneous dynamic camouflage against predators and prey in complex coral and rocky kelp reefs.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Hydrostatic Skeleton (Bone-Free)',
        overview: 'Muscular hydrostat architecture relying on incompressible water-filled muscle tissue for leverage.',
        keyStructures: ['Muscular hydrostat arms', 'Chitinous beak', 'Cartilaginous cranial capsule'],
        physiologicalMechanism: 'Contracting circular muscles elongates the arm; contracting longitudinal muscles bends or shortens it.',
        cellularComposition: 'Three-dimensional cross-woven muscle fibers without a single mineralized bone.',
        adaptiveAdvantage: 'Infinite degrees of freedom in limb movement and the ability to squeeze through tiny crevices.'
      },
      muscular: {
        id: 'muscular',
        name: 'Mantle Cavity & Jet Propulsion Funnel (Siphon)',
        overview: 'Thick muscular mantle that expands to draw in water and contracts forcefully through a directional siphon.',
        keyStructures: ['Mantle muscle wall', 'Siphon (hyponome)', '2,000+ Sucker muscular hydrostats'],
        physiologicalMechanism: 'Water is forced through the flexible directional funnel, propelling the octopus backward with immense thrust.',
        cellularComposition: 'High-density obliquely striated muscle fibers with rich glycogen stores.',
        adaptiveAdvantage: 'Explosive escape velocity from predators like harbor seals and sleeper sharks.'
      },
      nervous: {
        id: 'nervous',
        name: 'Distributed Brain-Arm Neural Network',
        overview: '500 million neurons with a circumesophageal central brain and 8 independent brachial nerve cords.',
        keyStructures: ['Central brain with vertical lobe', 'Optic lobes', 'Brachial nerve cords', 'Sucker ganglia'],
        physiologicalMechanism: 'Central brain initiates high-level goals (e.g. "forage that crevice"), while arm nerve cords compute kinematics locally.',
        cellularComposition: 'Giant unmyelinated axons and complex micro-ganglia exhibiting high synaptic plasticity and problem-solving.',
        adaptiveAdvantage: 'Complex associative learning, maze navigation, tool use, and independent 8-arm coordination.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Three Hearts & Blue Hemocyanin Circuit',
        overview: 'Closed vascular system with a central systemic heart and two auxiliary branchial (gill) hearts.',
        keyStructures: ['Systemic heart', '2 Branchial hearts', 'Cephalic aorta', 'Copper hemocyanin'],
        physiologicalMechanism: 'Copper-based hemocyanin dissolved in blood plasma carries oxygen efficiently in cold (4°C) bottom water.',
        cellularComposition: 'Hemocyanin protein oligomers, amoebocytes for cellular immunity and clotting.',
        adaptiveAdvantage: 'Ensures adequate tissue oxygenation in low-oxygen, high-pressure oceanic trenches.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Biconcave Gills (Ctenidia) in Mantle Cavity',
        overview: 'Paired feather-like gills suspended within the mantle cavity bathed in continuous water flow.',
        keyStructures: ['Paired ctenidia', 'Branchial vessels', 'Mantle intake valves'],
        physiologicalMechanism: 'Rhythmic mantle contractions pump oxygenated water across ctenidial lamellae in countercurrent direction.',
        cellularComposition: 'Thin branchial epithelium with active ion-transport cells for osmoregulation.',
        adaptiveAdvantage: 'High oxygen extraction even in stagnant rocky dens.'
      },
      digestive: {
        id: 'digestive',
        name: 'Chitin Beak, Radula & Posterior Salivary Glands',
        overview: 'Beak bites into prey, salivary glands inject digestive enzymes and neurotoxins, and stomach digests liquefaction.',
        keyStructures: ['Chitinous beak', 'Toothed radula', 'Posterior salivary glands', 'Digestive gland (liver)'],
        physiologicalMechanism: 'Cephalotoxins immobilize prey while proteolytic enzymes pre-digest flesh before it enters the esophagus.',
        cellularComposition: 'Hardened alpha-chitin beak layers, toxin-secreting glandular epithelium.',
        adaptiveAdvantage: 'External pre-digestion allows consuming hard-shelled mollusks and crustaceans.'
      },
      specialized: {
        id: 'specialized',
        name: 'Ink Sac & Melanin Cloud Defense',
        overview: 'Internal ink reservoir connected to the rectum that expels dark melanin pigment and tyrosinase.',
        keyStructures: ['Ink sac gland', 'Sphincter duct', 'Tyrosinase enzyme matrix'],
        physiologicalMechanism: 'Ejects a dark pseudomorph cloud that visually obscures escape and chemically dulls predator olfaction.',
        cellularComposition: 'Melanogenic cells synthesizing dense eumelanin granules.',
        adaptiveAdvantage: 'Confounds the visual and olfactory senses of hunting sharks and marine mammals.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Complete Shell Loss & Hydrostatic Freedom',
        description: 'Lost ancestral molluscan outer shell, replacing physical armor with neural camouflage and cognitive problem-solving.',
        eraOrOrigin: 'Mesozoic (~140 Ma)',
        ecologicalAdvantage: 'Enables entering any crevice, rapid jet propulsion, and exploitation of complex 3D benthic topography.'
      },
      {
        title: 'Decentralized Radial Intelligence',
        description: 'Distributed 60% of neural tissue across 8 arms with autonomous tactile and chemoreceptive processing.',
        eraOrOrigin: 'Jurassic (~160 Ma)',
        ecologicalAdvantage: 'Simultaneous multi-target hunting in blind rocky fissures without sensory overload.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Nervous Architecture',
        adaptation: '500M neurons with 60% located in arms (independent peripheral computing)',
        vsHumans: 'Humans have centralized CNS (brain + spinal cord) with passive motor nerves',
        ecologicalRole: 'Independent exploratory foraging in 8 directions simultaneously.'
      },
      {
        system: 'Blood Chemistry',
        adaptation: 'Blue copper hemocyanin protein dissolved in plasma',
        vsHumans: 'Humans have red iron hemoglobin contained inside red blood cells',
        ecologicalRole: 'Optimized for high-affinity oxygen transport in cold 2–4°C abyssal water.'
      }
    ],
    funFacts: [
      'An octopus has three hearts: two pump blood to the gills, while the third circulates it to the rest of the body.',
      'Because they have no bones or rigid shell, a 50-pound giant Pacific octopus can squeeze through an opening the size of a lemon (limited only by its beak).',
      'Every single sucker on an octopus’s arm is lined with chemical receptors, meaning the octopus literally tastes everything it touches.'
    ],
    physiologicalMetrics: [
      { label: 'Total Neurons', value: '500 Million', unit: 'Cells', notes: '60% in arms, 40% central' },
      { label: 'Camouflage Speed', value: '< 200', unit: 'ms', notes: 'Direct neural motor expansion' },
      { label: 'Number of Suckers', value: '2,140 – 2,240', unit: 'Discs', notes: 'Independently articulating' },
      { label: 'Heart Count', value: '3', unit: 'Organs', notes: '2 branchial, 1 systemic' }
    ]
  },
  {
    id: 'dionaea-muscipula',
    commonName: 'Venus Flytrap',
    scientificName: 'Dionaea muscipula',
    category: 'Plants & Fungi',
    taxonomy: {
      kingdom: 'Plantae',
      phylum: 'Tracheophyta',
      class: 'Magnoliopsida',
      order: 'Caryophyllales',
      family: 'Droseraceae',
      genus: 'Dionaea',
      species: 'Dionaea muscipula'
    },
    conservationStatus: 'Vulnerable',
    habitat: 'Nitrogen-deficient, acidic peat bogs and wet savannas of the coastal Carolinas',
    sizeRange: '10 – 30 cm rosette diameter; trap lobes 2 – 4 cm',
    massRange: '10 – 30 g',
    lifespan: '20 – 30+ years in natural bogs',
    diet: 'Photosynthetic autotroph supplemented with carnivorous insect digestion (Nitrogen/Phosphorus)',
    nativeRange: 'Endemic within a 75-mile radius around Wilmington, North Carolina, USA',
    diagramVisualType: 'plant',
    summary: 'Dionaea muscipula is a carnivorous angiosperm renowned for its snap-trap leaves triggered by mechanosensitive trigger hairs. When stimulated, the hairs generate plant action potentials, activating proton-pump driven hydraulic turgor shifts and elastic bi-stable leaf snapping within 100 milliseconds to digest arthropods in an external acid stomach.',
    hotspots: [
      {
        id: 'v1',
        name: 'Mechanosensitive Trigger Hairs & Action Potentials',
        system: 'nervous',
        x: 48,
        y: 28,
        description: 'Three sensitive trigger hairs on each inner trap lobe that generate calcium-mediated receptor potentials when deflected.',
        histologicalDetails: 'Flexible basal podium cells rich in stretch-activated ion channels and endoplasmic reticulum calcium stores.',
        physiologicalFunction: 'Requires two hair deflections within 20 seconds to fire an action potential, preventing false triggers from raindrops.',
        evolutionarySignificance: 'Evolution of short-term memory and counting mechanisms in non-neural plant tissue.',
        specialAdaptation: 'Five trigger stimulations trigger the synthesis of digestive acid and protease enzymes.'
      },
      {
        id: 'v2',
        name: 'Bi-Stable Elastic Trap Lobes & Hydraulic Snap',
        system: 'muscular',
        x: 52,
        y: 35,
        description: 'Convex outer leaves that instantaneously flip to concave within 100 ms via elastic instability and rapid proton pumping.',
        histologicalDetails: 'Upper and lower mesophyll cells that rapidly change hydrostatic turgor pressure via aquaporin water channels.',
        physiologicalFunction: 'Snaps the trap shut with intermeshing marginal cilia (teeth) forming an inescapable biological cage.',
        evolutionarySignificance: 'One of the fastest mechanical movements in the entire plant kingdom.',
        specialAdaptation: 'Acid growth hypothesis: rapid auxin/H+ extrusion loosens cell walls, allowing instant expansion.'
      },
      {
        id: 'v3',
        name: 'Digestive Glands & Acidic Enzymatic Stomach',
        system: 'digestive',
        x: 44,
        y: 45,
        description: 'Red sessile glandular hairs lining the inner surface secreting protease, phosphatase, chitinase, and hydrochloric acid.',
        histologicalDetails: 'Multicellular secretory heads that switch from secretion to active nutrient absorption over a 7-10 day cycle.',
        physiologicalFunction: 'Dissolves the soft visceral tissues of trapped insects, absorbing vital nitrogen, phosphorus, and potassium.',
        evolutionarySignificance: 'Carnivory compensates for extreme nutrient poverty in waterlogged, acidic bog soils.',
        specialAdaptation: 'Chitinase enzymes break down the insect exoskeleton while antimicrobial enzymes prevent rot.'
      },
      {
        id: 'v4',
        name: 'Xylem & Phloem Vascular Cylinder',
        system: 'circulatory',
        x: 50,
        y: 65,
        description: 'Vascular bundles transporting sap, water, and absorbed insect amino acids down to the underground rhizome.',
        histologicalDetails: 'Tracheid xylem vessels for transpiration water pull; sieve tube phloem cells for organic nutrient translocation.',
        physiologicalFunction: 'Translocates digested insect nitrogen down to overwintering bulb storage organs for spring growth.',
        evolutionarySignificance: 'Integrates carnivorous trap organs with standard autotrophic plant root-shoot vascular plumbing.',
        specialAdaptation: 'Roots serve primarily as water anchors rather than nutrient uptake organs.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Waxy Epicuticle, Nectaries & Marginal Cilia',
        overview: 'Waxy leaf cuticle rimmed with sweet-smelling nectary glands and interlocking perimeter spines.',
        keyStructures: ['Marginal cilia (teeth)', 'Nectar-secreting perimeter glands', 'Anthocyanin red inner pigments'],
        physiologicalMechanism: 'Sweet nectar and bright UV-reflective red anthocyanins lure crawling insects onto the trap platform.',
        cellularComposition: 'Epidermal cells with thick cutin layer; multicellular nectariferous glands.',
        adaptiveAdvantage: 'High prey capture rate by targeting both olfactory and visual insect cues.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Cellulose Cell Wall & Hydraulic Turgor Skeleton',
        overview: 'Structural architecture composed of rigid cellulose-hemicellulose cell walls inflated by vacuolar hydrostatic pressure.',
        keyStructures: ['Cellulose primary walls', 'Lignified vascular tracheids', 'Underground rhizome bulb'],
        physiologicalMechanism: 'Vacuolar turgor pressure (up to 1.5 MPa) maintains rigid leaf posture without mineralized bones.',
        cellularComposition: 'Cellulose microfibrils cross-linked with pectin and structural extensin proteins.',
        adaptiveAdvantage: 'Lightweight, low-energy structural support adaptable to variable soil moisture.'
      },
      muscular: {
        id: 'muscular',
        name: 'Hydraulic & Elastic Bi-Stable Actuation',
        overview: 'Plant biomechanical motor driven by rapid ion-flux water movement and stored elastic mechanical strain.',
        keyStructures: ['Bi-stable curved trap lobes', 'H+ ATPase proton pumps', 'Aquaporin water channels'],
        physiologicalMechanism: 'Trigger potential causes rapid H+ export into cell walls; water rushes in via osmosis, causing geometric snap-through inversion.',
        cellularComposition: 'Mesophyll motor cells exhibiting rapid reversible elastoplastic deformation.',
        adaptiveAdvantage: 'Captures fast-moving arthropods without possessing animal-like actin-myosin muscle fibers.'
      },
      nervous: {
        id: 'nervous',
        name: 'Phyto-Electrical Signal Transduction (Action Potentials)',
        overview: 'Electrical signaling network using calcium ion waves and membrane depolarization pulses across plasmodesmata.',
        keyStructures: ['Mechanosensory trigger hairs', 'Plasmodesmata gap channels', 'Endoplasmic reticulum Ca2+ reservoirs'],
        physiologicalMechanism: 'Bending hair opens mechanosensitive ion channels, generating a 100 mV depolarization wave traveling at 10 cm/s.',
        cellularComposition: 'Basal hair sensory cells connected to adjacent parenchyma via high-density primary plasmodesmata.',
        adaptiveAdvantage: 'Allows non-neural plant tissue to compute temporal touch intervals and count stimuli.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Xylem-Phloem Vascular Transport Stream',
        overview: 'Vascular conduits carrying water upwards and insect-derived amino acid sap downwards to the rhizome.',
        keyStructures: ['Xylem tracheids', 'Phloem sieve-tube elements', 'Companion cells'],
        physiologicalMechanism: 'Solar transpiration pulls water from roots; phloem hydrostatic pressure gradient pushes dissolved organic nitrogen to shoots.',
        cellularComposition: 'Enucleated elongated sieve cells and dead hollow lignified tracheid cylinders.',
        adaptiveAdvantage: 'Distributes rare mineral nutrients captured by leaves to the entire root and flower biomass.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Stomatal Gas Exchange & Photosynthesis',
        overview: 'Microscopic stomatal pores regulated by paired guard cells on the outer trap and photosynthetic petioles.',
        keyStructures: ['Stomatal pores', 'Guard cell pairs', 'Palisade mesophyll chloroplasts'],
        physiologicalMechanism: 'Takes up atmospheric CO2 for Calvin cycle photosynthesis while releasing oxygen and regulating water vapor transpiration.',
        cellularComposition: 'Chlorophyll a/b-rich chloroplasts inside spongy and palisade parenchyma.',
        adaptiveAdvantage: 'Maintains baseline carbon fixation independent of whether insects are captured.'
      },
      digestive: {
        id: 'digestive',
        name: 'Carnivorous Acid Stomach & Enzymatic Epithelium',
        overview: 'Sealed leaf hermetic pocket functioning as an external acidic digestive pouch.',
        keyStructures: ['Secretory digestive glands', 'Protease and endopeptidase enzymes', 'Chitinase & phosphatase'],
        physiologicalMechanism: 'Glands pump protons to lower trap pH to 2.0 (matching mammalian stomach acid), activating hydrolytic enzymes.',
        cellularComposition: 'Two-tier glandular head cells with high density of Golgi apparatus and secretory vesicles.',
        adaptiveAdvantage: 'Extracts critical nitrogen, phosphorus, and sulfur from prey in nutrient-starved bogs.'
      },
      specialized: {
        id: 'specialized',
        name: 'Elevated Flower Scape Reproductive Isolation',
        overview: 'Flower stalks grow up to 30 cm tall, high above the ground-level carnivorous snap traps.',
        keyStructures: ['Long floral scape', 'White actinomorphic flowers', 'Nectariferous petals'],
        physiologicalMechanism: 'Spatial segregation ensures flying pollinator insects (bees, beetles) do not get captured and killed in the lower traps.',
        cellularComposition: 'Elongated collenchyma cells providing wind-resistant vertical structural support.',
        adaptiveAdvantage: 'Prevents the plant from eating its own reproductive pollinators.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Electrical Counting & Snap-Trap Specialization',
        description: 'Evolved from passive sticky flypaper ancestor (like Sundew) into an active mechanical snap trap with memory.',
        eraOrOrigin: 'Miocene (~10 Ma)',
        ecologicalAdvantage: 'Enables capturing larger, nutrient-rich insects (spiders, beetles) that would escape sticky leaves.'
      },
      {
        title: 'Carnivorous Bog Nutrition',
        description: 'Extracts bioavailable nitrogen and phosphorus directly from insect chitin and muscle protein.',
        eraOrOrigin: 'Cretaceous / Paleogene transition',
        ecologicalAdvantage: 'Allows thriving in acidic peat soils where normal plant roots suffer fatal nutrient deficiency.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Sensory & Motion',
        adaptation: 'Calcium wave action potentials + bi-stable elastic snap (100 ms closing)',
        vsHumans: 'Humans use sodium/potassium neural action potentials + sliding actin/myosin muscle contraction',
        ecologicalRole: 'Fastest mechanical motion in plants to trap agile terrestrial insects.'
      },
      {
        system: 'Digestion',
        adaptation: 'Leaves form external acidic stomach (pH 2.0) secreting chitinase and proteases',
        vsHumans: 'Humans have internal enclosed gastric stomach and intestinal lumen',
        ecologicalRole: 'Directly absorbs nitrogen, phosphorus, and trace minerals from prey into plant sap.'
      }
    ],
    funFacts: [
      'A Venus flytrap can "count": it requires 2 touches to close the trap, 3 touches to prepare digestion, and 5 touches to begin secreting digestive acids.',
      'The snap of a Venus flytrap leaf takes only 100 milliseconds — over three times faster than the blink of a human eye.',
      'The trap leaves can only open and close 4 to 6 times before dying, so the plant strictly avoids closing on non-living debris.'
    ],
    physiologicalMetrics: [
      { label: 'Trap Closure Speed', value: '100', unit: 'ms', notes: 'Elastic bi-stable snap' },
      { label: 'Action Potential Voltage', value: '100 – 140', unit: 'mV', notes: 'Calcium-mediated wave' },
      { label: 'Digestion Chamber pH', value: '2.0 – 2.5', unit: 'pH', notes: 'Matches human stomach acidity' },
      { label: 'Digestion Duration', value: '7 – 12', unit: 'Days', notes: 'Per captured arthropod' }
    ]
  },
  {
    id: 'hypsibius-exemplaris',
    commonName: 'Tardigrade (Water Bear)',
    scientificName: 'Hypsibius exemplaris',
    category: 'Microscopic & Archaea',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Tardigrada',
      class: 'Eutardigrada',
      order: 'Parachela',
      family: 'Hypsibiidae',
      genus: 'Hypsibius',
      species: 'Hypsibius exemplaris'
    },
    conservationStatus: 'Least Concern',
    habitat: 'Microscopic water films on mosses, lichens, deep sea trenches, polar ice, soil',
    sizeRange: '0.3 – 0.5 mm (Microscopic)',
    massRange: '0.001 – 0.005 mg',
    lifespan: '3 – 4 months (Active metabolism) / 30+ years in cryptobiotic tun state',
    diet: 'Microbivore & phytophagous (Pierces plant cells, algae, nematodes with stylets)',
    nativeRange: 'Global ubiquity: polar ice caps, mountaintops, abyssal plains, backyard moss',
    diagramVisualType: 'tardigrade',
    summary: 'Hypsibius exemplaris is a microscopic ecdysozoan famous for cryptobiosis — anhydrobiosis where it suspends 99.9% of its metabolic activity by glassifying its cytoplasm with intrinsically disordered TDP proteins, withstanding cosmic vacuum, absolute zero (-273°C), 150°C heat, and 1,000x human lethal radiation doses.',
    hotspots: [
      {
        id: 't1',
        name: 'Tardigrade Disordered Proteins (TDPs) & Cytoplasmic Vitrification',
        system: 'specialized',
        x: 48,
        y: 35,
        description: 'Specialized intrinsically disordered proteins that glassify cellular water during desiccation.',
        histologicalDetails: 'CAHS and SAHS chaperone proteins that transition from fluid state into protective amorphous bioglass matrix.',
        physiologicalFunction: 'Encases cellular organelles, membranes, and proteins in microscopic biological glass, preventing denaturation during dehydration.',
        evolutionarySignificance: 'Allows the animal to lose 97% of its body water and survive in a desiccated "tun" state for decades.',
        specialAdaptation: 'Upon rehydration with a single drop of water, the glass melts and the tardigrade resumes active walking within minutes.'
      },
      {
        id: 't2',
        name: 'Dsup (Damage Suppressor) Chromatin Shield',
        system: 'nervous',
        x: 32,
        y: 42,
        description: 'Unique nuclear protein that binds directly to double-stranded DNA to shield it from ionizing radiation and hydroxyl free radicals.',
        histologicalDetails: 'Positively charged protein lattice that physically coats chromosome nucleosomes.',
        physiologicalFunction: 'Suppresses DNA fragmentation from cosmic gamma rays and X-rays up to 5,000 Gray (1,000x human lethal dose).',
        evolutionarySignificance: 'Evolved to protect DNA during severe desiccation, granting incidental tolerance to outer space vacuum and radiation.',
        specialAdaptation: 'Synthesizes massive DNA repair enzyme cascades (PARP) upon metabolic reawakening.'
      },
      {
        id: 't3',
        name: 'Piercing Buccal Stylets & Pharyngeal Pumping Bulb',
        system: 'digestive',
        x: 18,
        y: 48,
        description: 'Paired calcified piercing stylets driven by muscular protractors to puncture moss cells, algae, and microscopic nematodes.',
        histologicalDetails: 'Rigid calcium carbonate stylets sliding within a sclerotized buccal tube connected to a triradiate muscular pharynx.',
        physiologicalFunction: 'Pierces prey cell walls and acts as a vacuum pump sucking out nutrient-rich cytoplasm.',
        evolutionarySignificance: 'Regenerates a brand new set of stylets every time the tardigrade molts its outer cuticle.',
        specialAdaptation: 'Salivary glands secrete digestive enzymes directly into the punctured prey cell before ingestion.'
      },
      {
        id: 't4',
        name: 'Eight Lobopodial Legs with Chitin Claws',
        system: 'muscular',
        x: 65,
        y: 62,
        description: 'Four pairs of unjointed lobopod legs terminating in 4–8 sharp chitin claws for clinging to moss filaments.',
        histologicalDetails: 'Internal hydrostatic pressure cylinders with specialized flexor muscle fibers anchoring directly to cuticle apodemes.',
        physiologicalFunction: 'Produces a distinctive stepping walk identical to insects 500,000 times their size.',
        evolutionarySignificance: 'Evolutionary intermediate link between soft-bodied annelids and hard-jointed arthropods.',
        specialAdaptation: 'The posterior fourth pair of legs points backwards, functioning as anchors during climbing.'
      }
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Flexible Multilayered Cuticle (Moulting)',
        overview: 'Thin, permeable protein-chitin exoskeleton that is periodically shed (ecdysis).',
        keyStructures: ['Epicuticle wax layer', 'Intracuticular pores', 'Apodemes for muscle anchors'],
        physiologicalMechanism: 'Permeable to water and oxygen in active state; wrinkles and folds tightly during tun formation to reduce surface area.',
        cellularComposition: 'Epidermal cell layer secreting alpha-chitin and mucopolysaccharides.',
        adaptiveAdvantage: 'Allows gas exchange while providing rigid anchoring points for claw muscles.'
      },
      skeletal: {
        id: 'skeletal',
        name: 'Hydrostatic Hemocoel Skeleton',
        overview: 'Fluid-filled pseudocoelom cavity maintaining body turgor pressure without mineralized bones.',
        keyStructures: ['Fluid-filled pseudocoelom', 'Cuticular claw sclerites', 'Buccal ring'],
        physiologicalMechanism: 'Body fluid is pressurized by circular and transverse body wall muscle contractions.',
        cellularComposition: 'Eutely: every adult tardigrade possesses an exact, fixed number of cells (~40,000 cells).',
        adaptiveAdvantage: 'Extreme cellular consistency with minimal energy expenditure on cellular turnover.'
      },
      muscular: {
        id: 'muscular',
        name: 'Independent Muscle Fibers & Step Locomotion',
        overview: 'Single-celled striated muscle fibers connecting directly to cuticular apodemes.',
        keyStructures: ['Lobopodial flexors', 'Dorsoventral compressors', 'Pharyngeal bulb radial muscles'],
        physiologicalMechanism: 'Walks with an active, coordinated stepping gait despite possessing no hard jointed skeleton.',
        cellularComposition: 'Uninucleate striated muscle fibers containing dense actin and myosin myofibrils.',
        adaptiveAdvantage: 'High maneuverability across microscopic water films and porous moss matrices.'
      },
      nervous: {
        id: 'nervous',
        name: 'Bilobed Dorsal Brain & Ventral Ganglion Chain',
        overview: 'Ladder-type nervous system featuring a dorsal brain and 4 pairs of segmental trunk ganglia.',
        keyStructures: ['Dorsal encephalon (Brain)', 'Periesophageal ring', '4 Ventral nerve ganglia', 'Eye spots'],
        physiologicalMechanism: 'Processes sensory tactile input from head bristles and coordinates synchronized leg stepping.',
        cellularComposition: 'Eutelic nervous system consisting of roughly 1,000 total neurons.',
        adaptiveAdvantage: 'High cognitive and sensory processing density packed into sub-millimeter scale.'
      },
      circulatory: {
        id: 'circulatory',
        name: 'Open Pseudocoelomic Fluid Circulation',
        overview: 'True heart and blood vessels are absent; fluid in the body cavity is sloshed by body movement.',
        keyStructures: ['Pseudocoelomic fluid', 'Coelomocyte storage cells'],
        physiologicalMechanism: 'Locomotion and body flexure circulate nutrients, gases, and hormones through the open body cavity.',
        cellularComposition: 'Coelomocytes floating freely in body cavity storing lipids, proteins, and glycogen.',
        adaptiveAdvantage: 'Zero metabolic cost for cardiac pumping.'
      },
      respiratory: {
        id: 'respiratory',
        name: 'Cuticular Diffusion (Lacks Lungs or Gills)',
        overview: 'Direct cutaneous gas exchange across the thin, moist body wall.',
        keyStructures: ['Permeable cuticle', 'Epithelial diffusion barrier'],
        physiologicalMechanism: 'Dissolved oxygen in ambient water films diffuses directly across cuticle into body fluid; CO2 diffuses out.',
        cellularComposition: 'Single layer of flattened epithelial cells offering minimal diffusion resistance.',
        adaptiveAdvantage: 'Operates continuously in any microscopic film of water with zero organ overhead.'
      },
      digestive: {
        id: 'digestive',
        name: 'Buccal Stylets, Muscular Pharynx & Midgut',
        overview: 'Straight alimentary canal from mouth to cloaca equipped with piercing stylets and a suction pump.',
        keyStructures: ['Calcified stylets', 'Triradiate pharynx', 'Midgut with microvilli', 'Cloaca'],
        physiologicalMechanism: 'Pierces prey and pumps liquid cytoplasm into midgut where intracellular digestion absorbs sugars and proteins.',
        cellularComposition: 'Microvillar digestive enterocytes, cutinized foregut and hindgut linings.',
        adaptiveAdvantage: 'Fast, high-efficiency nutrient uptake from dense microbial communities.'
      },
      specialized: {
        id: 'specialized',
        name: 'Cryptobiosis & Tun Vitrification Engine',
        overview: 'Ability to enter complete metabolic arrest (anhydrobiosis, cryobiosis, anoxybiosis, osmobiosis).',
        keyStructures: ['TDP bioglass proteins', 'Dsup DNA shielding protein', 'Trehalose sugar matrix', 'Glycerol antifreeze'],
        physiologicalMechanism: 'Replaces water with non-denaturing bioglass; stops respiration, transcription, and translation (0.00% metabolic rate).',
        cellularComposition: 'Vitrified cellular matrix with immobilized enzymes and protected DNA strands.',
        adaptiveAdvantage: 'Can survive space vacuum, liquid helium (-272°C), 150°C heat, and 30+ years without food or water.'
      }
    },
    evolutionaryAdaptations: [
      {
        title: 'Cytoplasmic Vitrification with TDP Proteins',
        description: 'Replaces liquid water in cells with non-crystalline amorphous biological glass during dehydration.',
        eraOrOrigin: 'Cambrian (~500 Ma)',
        ecologicalAdvantage: 'Survives total desiccation in ephemeral moss habitats that dry out repeatedly within hours.'
      },
      {
        title: 'Dsup DNA Damage Suppressor Protein',
        description: 'Nuclear protein binding directly to chromatin to block ionizing radiation and free radicals.',
        eraOrOrigin: 'Paleozoic (~400 Ma)',
        ecologicalAdvantage: 'Shields genetic genome from fatal fragmentation during desiccation and cosmic radiation exposure.'
      }
    ],
    comparativeInsights: [
      {
        system: 'Metabolic Resilience',
        adaptation: 'Cryptobiotic vitrification (0.00% metabolic rate; survives -272°C to +150°C and space vacuum)',
        vsHumans: 'Humans require continuous aerobic oxygen supply and strict 37°C thermal homeostasis',
        ecologicalRole: 'Endures extreme planetary freeze-thaw and total desiccation cycles.'
      },
      {
        system: 'DNA Protection',
        adaptation: 'Dsup protein physical chromatin shield against 5,000 Gray of ionizing radiation',
        vsHumans: 'Human lethal radiation dose is 4–5 Gray due to acute hematopoietic/gut DNA breakdown',
        ecologicalRole: 'Complete genome preservation across millions of years of desiccated dormant states.'
      }
    ],
    funFacts: [
      'In 2007, tardigrades were exposed to the vacuum and cosmic radiation of low Earth orbit on the FOTON-M3 mission — and many survived and reproduced normally upon return.',
      'During cryptobiosis, a tardigrade’s water content drops from 85% to less than 3%, and its metabolic activity drops to zero (indistinguishable from death).',
      'They have survived all five major mass extinction events on Earth over the past 500 million years.'
    ],
    physiologicalMetrics: [
      { label: 'Radiation Tolerance', value: '5,000', unit: 'Gray', notes: '1,000x human lethal threshold' },
      { label: 'Temperature Range', value: '-272 to +150', unit: '°C', notes: 'Near absolute zero to past boiling' },
      { label: 'Desiccated Metabolic Rate', value: '0.00', unit: '%', notes: 'Reversible true cryptobiosis' },
      { label: 'Pressure Tolerance', value: '6,000', unit: 'Atmospheres', notes: '6x deeper than Mariana Trench' }
    ]
  }
];
