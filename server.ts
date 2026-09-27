import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Endpoint for AI-driven biological & anatomical synthesis for any organism
app.post('/api/organism/synthesize', async (req, res) => {
  const { query } = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Valid query parameter is required' });
  }

  const cleanQuery = query.trim();

  // If no Gemini client or key, provide fallback generator
  if (!ai) {
    return res.json({
      fallback: true,
      message: 'Synthesized using procedural biological taxonomy engine (Gemini API key not configured).',
      organism: createFallbackOrganism(cleanQuery),
    });
  }

  try {
    const prompt = `You are an expert computational evolutionary biologist, comparative morphologist, and physiological anatomist.
Create a comprehensive, scientifically rigorous anatomical breakdown for the organism: "${cleanQuery}".
Ensure exact technical nomenclature, histological cell types, physiological mechanisms, and evolutionary adaptations.
Categorize into one of: 'Mammals' | 'Birds' | 'Reptiles' | 'Amphibians' | 'Fish' | 'Invertebrates' | 'Plants & Fungi' | 'Microscopic & Archaea'.
Choose the closest diagramVisualType from: 'human' | 'whale' | 'shark' | 'bee' | 'falcon' | 'octopus' | 'turtle' | 'frog' | 'plant' | 'tardigrade' | 'jellyfish' | 'generic'.

Provide 5 to 7 anatomical hotspots with x and y coordinates (percentages between 10 and 90) representing anatomical positions on a lateral or cross-sectional view of the organism.
Include all 8 systems: 'integumentary', 'skeletal', 'muscular', 'nervous', 'circulatory', 'respiratory', 'digestive', 'specialized'.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction:
          'You are the scientific data engine for AnatomeX, an interactive biological encyclopedia. Return accurate anatomical, histological, physiological, and evolutionary data in strictly valid JSON matching the schema.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            commonName: { type: Type.STRING },
            scientificName: { type: Type.STRING },
            category: { type: Type.STRING },
            taxonomy: {
              type: Type.OBJECT,
              properties: {
                kingdom: { type: Type.STRING },
                phylum: { type: Type.STRING },
                class: { type: Type.STRING },
                order: { type: Type.STRING },
                family: { type: Type.STRING },
                genus: { type: Type.STRING },
                species: { type: Type.STRING },
              },
              required: ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'],
            },
            conservationStatus: { type: Type.STRING },
            habitat: { type: Type.STRING },
            sizeRange: { type: Type.STRING },
            massRange: { type: Type.STRING },
            lifespan: { type: Type.STRING },
            diet: { type: Type.STRING },
            nativeRange: { type: Type.STRING },
            diagramVisualType: { type: Type.STRING },
            summary: { type: Type.STRING },
            hotspots: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  name: { type: Type.STRING },
                  system: { type: Type.STRING },
                  x: { type: Type.NUMBER },
                  y: { type: Type.NUMBER },
                  description: { type: Type.STRING },
                  histologicalDetails: { type: Type.STRING },
                  physiologicalFunction: { type: Type.STRING },
                  evolutionarySignificance: { type: Type.STRING },
                  specialAdaptation: { type: Type.STRING },
                },
                required: ['id', 'name', 'system', 'x', 'y', 'description', 'histologicalDetails', 'physiologicalFunction', 'evolutionarySignificance', 'specialAdaptation'],
              },
            },
            systems: {
              type: Type.OBJECT,
              properties: {
                integumentary: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                skeletal: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                muscular: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                nervous: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                circulatory: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                respiratory: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                digestive: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
                specialized: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    name: { type: Type.STRING },
                    overview: { type: Type.STRING },
                    keyStructures: { type: Type.ARRAY, items: { type: Type.STRING } },
                    physiologicalMechanism: { type: Type.STRING },
                    cellularComposition: { type: Type.STRING },
                    adaptiveAdvantage: { type: Type.STRING },
                  },
                  required: ['id', 'name', 'overview', 'keyStructures', 'physiologicalMechanism', 'cellularComposition', 'adaptiveAdvantage'],
                },
              },
              required: ['integumentary', 'skeletal', 'muscular', 'nervous', 'circulatory', 'respiratory', 'digestive', 'specialized'],
            },
            evolutionaryAdaptations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  eraOrOrigin: { type: Type.STRING },
                  ecologicalAdvantage: { type: Type.STRING },
                },
                required: ['title', 'description', 'ecologicalAdvantage'],
              },
            },
            comparativeInsights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  system: { type: Type.STRING },
                  adaptation: { type: Type.STRING },
                  vsHumans: { type: Type.STRING },
                  ecologicalRole: { type: Type.STRING },
                },
                required: ['system', 'adaptation', 'vsHumans', 'ecologicalRole'],
              },
            },
            funFacts: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            physiologicalMetrics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  label: { type: Type.STRING },
                  value: { type: Type.STRING },
                  unit: { type: Type.STRING },
                  notes: { type: Type.STRING },
                },
                required: ['label', 'value'],
              },
            },
          },
          required: [
            'id',
            'commonName',
            'scientificName',
            'category',
            'taxonomy',
            'conservationStatus',
            'habitat',
            'sizeRange',
            'massRange',
            'lifespan',
            'diet',
            'nativeRange',
            'diagramVisualType',
            'summary',
            'hotspots',
            'systems',
            'evolutionaryAdaptations',
            'comparativeInsights',
            'funFacts',
            'physiologicalMetrics',
          ],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    parsed.isAiSynthesized = true;
    res.json({ organism: parsed });
  } catch (err: unknown) {
    console.error('Gemini synthesis error:', err);
    res.json({
      fallback: true,
      organism: createFallbackOrganism(cleanQuery),
    });
  }
});

// Helper for procedural organism generation if API is unreachable
function createFallbackOrganism(name: string) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    id: slug,
    commonName: name.charAt(0).toUpperCase() + name.slice(1),
    scientificName: `${name.charAt(0).toUpperCase() + name.slice(1)} specimen`,
    category: 'Invertebrates',
    taxonomy: {
      kingdom: 'Animalia',
      phylum: 'Chordata / Invertebrata',
      class: 'Eukaryota',
      order: 'Biological Specimen',
      family: 'Anatomexidae',
      genus: name.charAt(0).toUpperCase() + name.slice(1),
      species: `${name.toLowerCase()}us`,
    },
    conservationStatus: 'Least Concern',
    habitat: 'Terrestrial / Aquatic ecological biome',
    sizeRange: 'Variable by specimen age and environmental nourishment',
    massRange: 'Variable (biologically calibrated)',
    lifespan: 'Documented in scientific field observations',
    diet: 'Specialized trophic guild',
    nativeRange: 'Geographic and ecological distribution zones',
    diagramVisualType: 'generic',
    summary: `${name} exhibits specialized evolutionary morphology and physiological systems adapted to its ecological trophic niche on Earth. Its body architecture integrates coordinated muscular, skeletal, and neural regulatory loops.`,
    hotspots: [
      {
        id: 'gen1',
        name: 'Cephalic Sensory & Neural Processing Unit',
        system: 'nervous',
        x: 25,
        y: 35,
        description: 'Centralized cranial ganglion coordinating sensory inputs and behavioral motor outputs.',
        histologicalDetails: 'Densely myelinated axonal tracts connected to peripheral sensory receptors.',
        physiologicalFunction: 'Environmental navigation, stimulus detection, and metabolic homeostasis.',
        evolutionarySignificance: 'Cephalization allowing forward-directed exploratory movement.',
        specialAdaptation: 'High sensory integration speed tailored to habitat predation/foraging pressures.',
      },
      {
        id: 'gen2',
        name: 'Axial Skeletal / Hydrostatic Scaffold',
        system: 'skeletal',
        x: 50,
        y: 45,
        description: 'Biomechanical framework providing structural support and locomotion leverage.',
        histologicalDetails: 'Mineralized hydroxyapatite, chitin matrix, or hydrostatic pressure fluid coelom.',
        physiologicalFunction: 'Protects internal visceral organs and anchors contractile muscle fibers.',
        evolutionarySignificance: 'Supports body mass against gravitational or hydrostatic forces.',
        specialAdaptation: 'Optimized strength-to-weight ratio for sustained locomotion efficiency.',
      },
      {
        id: 'gen3',
        name: 'Cardiovascular / Vascular Fluid Transport Pump',
        system: 'circulatory',
        x: 45,
        y: 50,
        description: 'Pulsatile organ driving nutrient, oxygen, and metabolic waste distribution across tissues.',
        histologicalDetails: 'Myogenic contractile myocardium or pulsatile vascular vessels.',
        physiologicalFunction: 'Maintains hydrostatic perfusion pressure across microvascular capillary beds.',
        evolutionarySignificance: 'Circulatory convective flow overcoming the physical limits of passive diffusion.',
        specialAdaptation: 'Dynamic stroke volume regulation matching metabolic exertion.',
      },
      {
        id: 'gen4',
        name: 'Gastrointestinal Metabolic Absorption Canal',
        system: 'digestive',
        x: 60,
        y: 52,
        description: 'Digestive canal breaking down ingested polymers into absorbable molecular nutrients.',
        histologicalDetails: 'Epithelial brush border enterocytes with high-density microvilli.',
        physiologicalFunction: 'Hydrolytic enzymatic breakdown and selective active membrane transport.',
        evolutionarySignificance: 'Maximal energetic extraction supporting basal metabolic rate.',
        specialAdaptation: 'Specialized enzyme cocktail tuned to prey and plant polysaccharide digestion.',
      },
      {
        id: 'gen5',
        name: 'Respiratory Gas Exchange Epithelium',
        system: 'respiratory',
        x: 40,
        y: 40,
        description: 'High-surface-area thin membrane driving oxygen intake and CO2 clearance.',
        histologicalDetails: 'Ultrathin diffusion barrier with countercurrent micro-circulation.',
        physiologicalFunction: 'Supplies cellular mitochondria with oxygen for ATP oxidative phosphorylation.',
        evolutionarySignificance: 'High aerobic scope enabling active locomotion and predation.',
        specialAdaptation: 'Maintains high diffusion gradient across ambient air or water interfaces.',
      },
    ],
    systems: {
      integumentary: {
        id: 'integumentary',
        name: 'Integumentary & Environmental Barrier',
        overview: 'Outer protective boundary preventing mechanical trauma, osmotic stress, and pathogen ingress.',
        keyStructures: ['Epidermal layer', 'Protective cuticle or scales', 'Sensory nerve endings'],
        physiologicalMechanism: 'Maintains internal biochemical integrity while sensing ambient mechanical and thermal changes.',
        cellularComposition: 'Stratified epithelial cells with lipid waterproofing and structural proteins.',
        adaptiveAdvantage: 'Environmental resilience across fluctuating microclimates.',
      },
      skeletal: {
        id: 'skeletal',
        name: 'Structural Endoskeleton / Exoskeleton',
        overview: 'Biomechanical load-bearing framework providing mechanical leverage for locomotion.',
        keyStructures: ['Axial column', 'Articulated joints', 'Protective cranial/thoracic cage'],
        physiologicalMechanism: 'Transmits kinetic forces generated by muscle contraction during stride or swim cycles.',
        cellularComposition: 'Cross-linked structural fibers reinforced by mineral or sclerotin matrices.',
        adaptiveAdvantage: 'Maximum structural integrity with optimized kinetic agility.',
      },
      muscular: {
        id: 'muscular',
        name: 'Contractile Musculoskeletal Apparatus',
        overview: 'Sliding filament muscle fibers producing coordinated locomotion and visceral peristalsis.',
        keyStructures: ['Locomotory muscle bundles', 'Visceral smooth muscle', 'Tendon linkages'],
        physiologicalMechanism: 'ATP-hydrolysis driven actin-myosin cross-bridge cycling regulated by calcium ions.',
        cellularComposition: 'Striated or smooth muscle myocytes packed with mitochondria and sarcomeres.',
        adaptiveAdvantage: 'High power-to-weight output for evasion, hunting, and foraging.',
      },
      nervous: {
        id: 'nervous',
        name: 'Neural Control & Sensory Feedback Loop',
        overview: 'Electro-chemical communication network integrating environmental inputs and coordinating motor outputs.',
        keyStructures: ['Cranial ganglion / Brain', 'Peripheral nerve cords', 'Sensory receptor arrays'],
        physiologicalMechanism: 'Action potential propagation across polarized cell membranes via voltage-gated ion channels.',
        cellularComposition: 'Neurons, glial support cells, and chemical synaptic junctions.',
        adaptiveAdvantage: 'Rapid behavioral adaptation to dynamic ecological stimuli.',
      },
      circulatory: {
        id: 'circulatory',
        name: 'Cardiovascular Vascular Distribution Circuit',
        overview: 'Pumping system transporting oxygen, glucose, hormones, and immune cells to all body tissues.',
        keyStructures: ['Cardiac pump', 'Arterial distribution conduits', 'Capillary beds'],
        physiologicalMechanism: 'Hydrostatic pressure differential driving continuous convective fluid turnover.',
        cellularComposition: 'Endothelial vessel lining, circulating respiratory pigment proteins or cells.',
        adaptiveAdvantage: 'Sustained tissue perfusion under varying physical exertion demands.',
      },
      respiratory: {
        id: 'respiratory',
        name: 'Gas Exchange & Cellular Respiration Interface',
        overview: 'Specialized respiratory surface mediating oxygen uptake and metabolic carbon dioxide expulsion.',
        keyStructures: ['Respiratory membranes', 'Ventilation pump mechanics', 'Capillary interface'],
        physiologicalMechanism: 'Fick’s law diffusion across high-surface-area, ultrathin epithelial membranes.',
        cellularComposition: 'Squamous respiratory epithelial cells with minimal diffusion distance.',
        adaptiveAdvantage: 'Fuels aerobic cellular metabolism for high activity cycles.',
      },
      digestive: {
        id: 'digestive',
        name: 'Gastrointestinal Nutrient Extraction Canal',
        overview: 'Alimentary canal optimized for mechanical breakdown, chemical hydrolysis, and nutrient absorption.',
        keyStructures: ['Oral ingestion apparatus', 'Acidic/enzymatic stomach', 'Intestinal absorptive lumen'],
        physiologicalMechanism: 'Sequential enzymatic degradation of carbohydrates, proteins, and lipids followed by active membrane transport.',
        cellularComposition: 'Enterocytes, goblet mucus cells, and exocrine enzyme-secreting cells.',
        adaptiveAdvantage: 'High caloric and micronutrient conversion efficiency.',
      },
      specialized: {
        id: 'specialized',
        name: 'Specialized Ecological Adaptations',
        overview: 'Distinctive morphological or physiological specializations for the organism’s unique ecological niche.',
        keyStructures: ['Niche-specific appendages', 'Sensory adaptations', 'Metabolic enzymes'],
        physiologicalMechanism: 'Fine-tuned biochemical and anatomical adaptations maximizing fitness in its natural habitat.',
        cellularComposition: 'Specialized differentiated tissue types.',
        adaptiveAdvantage: 'Competitive superiority within its evolutionary environmental biome.',
      },
    },
    evolutionaryAdaptations: [
      {
        title: 'Niche Specialization & Morphological Divergence',
        description: `Evolutionary adaptation of physiological systems tailored to ${name}'s specific foraging, locomotion, and survival demands.`,
        eraOrOrigin: 'Phylogenetic evolutionary lineage',
        ecologicalAdvantage: 'Optimized resource extraction and survival in competitive ecosystem webs.',
      },
    ],
    comparativeInsights: [
      {
        system: 'Physiological Architecture',
        adaptation: `Specialized biological adaptations of ${name}`,
        vsHumans: 'Distinct structural and metabolic adaptations differing from human primate biology',
        ecologicalRole: 'Ecological stability and food web integration.',
      },
    ],
    funFacts: [
      `${name} possesses unique physiological mechanisms refined over millions of years of evolutionary natural selection.`,
      'Its anatomical design represents an optimal balance between metabolic energy expenditure and biomechanical survival.',
      'Studying organisms like this provides valuable biomimetic insights for modern engineering and medical science.',
    ],
    physiologicalMetrics: [
      { label: 'Metabolic Scale', value: 'Calibrated', notes: 'Basal resting rate' },
      { label: 'Locomotion Efficiency', value: 'Optimized', notes: 'Biomechanically tuned' },
    ],
    isAiSynthesized: true,
  };
}

// Dev server vs production static handling
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`AnatomeX Server running at http://localhost:${port} in ${isProd ? 'production' : 'development'} mode`);
  });
}

startServer();
