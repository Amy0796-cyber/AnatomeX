export type Category = 
  | 'Mammals'
  | 'Birds'
  | 'Reptiles'
  | 'Amphibians'
  | 'Fish'
  | 'Invertebrates'
  | 'Plants & Fungi'
  | 'Microscopic & Archaea';

export type OrganSystemType = 
  | 'integumentary'
  | 'skeletal'
  | 'muscular'
  | 'nervous'
  | 'circulatory'
  | 'respiratory'
  | 'digestive'
  | 'specialized';

export interface Taxonomy {
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
}

export interface AnatomicalHotspot {
  id: string;
  name: string;
  system: OrganSystemType;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  description: string;
  histologicalDetails: string;
  physiologicalFunction: string;
  evolutionarySignificance: string;
  specialAdaptation: string;
}

export interface OrganSystemDetail {
  id: OrganSystemType;
  name: string;
  overview: string;
  keyStructures: string[];
  physiologicalMechanism: string;
  cellularComposition: string;
  adaptiveAdvantage: string;
}

export interface PhysiologicalMetric {
  label: string;
  value: string;
  unit?: string;
  notes?: string;
  comparisonToHuman?: string;
}

export interface EvolutionaryAdaptation {
  title: string;
  description: string;
  eraOrOrigin?: string;
  ecologicalAdvantage: string;
}

export interface ComparativeInsight {
  system: string;
  adaptation: string;
  vsHumans: string;
  ecologicalRole: string;
}

export interface OrganismData {
  id: string;
  commonName: string;
  scientificName: string;
  category: Category;
  taxonomy: Taxonomy;
  conservationStatus: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered' | 'Extinct in Wild' | 'Data Deficient';
  habitat: string;
  sizeRange: string;
  massRange: string;
  lifespan: string;
  diet: string;
  nativeRange: string;
  heroImage?: string;
  diagramVisualType: 'human' | 'whale' | 'shark' | 'bee' | 'falcon' | 'octopus' | 'turtle' | 'frog' | 'plant' | 'tardigrade' | 'jellyfish' | 'generic';
  summary: string;
  hotspots: AnatomicalHotspot[];
  systems: Record<OrganSystemType, OrganSystemDetail>;
  evolutionaryAdaptations: EvolutionaryAdaptation[];
  comparativeInsights: ComparativeInsight[];
  funFacts: string[];
  physiologicalMetrics: PhysiologicalMetric[];
  isAiSynthesized?: boolean;
}
