import { CURATED_ORGANISMS } from './organisms';
import { SUPPLEMENTARY_ORGANISMS } from './supplementaryOrganisms';
import { OrganismData, Category } from '../types/organism';

export const ALL_CURATED_ORGANISMS: OrganismData[] = [
  ...CURATED_ORGANISMS,
  ...SUPPLEMENTARY_ORGANISMS
];

export function getOrganismById(id: string): OrganismData | undefined {
  return ALL_CURATED_ORGANISMS.find(org => org.id.toLowerCase() === id.toLowerCase() || org.scientificName.toLowerCase() === id.toLowerCase() || org.commonName.toLowerCase() === id.toLowerCase());
}

export function getOrganismsByCategory(category: Category | 'All'): OrganismData[] {
  if (category === 'All') return ALL_CURATED_ORGANISMS;
  return ALL_CURATED_ORGANISMS.filter(org => org.category === category);
}

export function searchOrganisms(query: string): OrganismData[] {
  if (!query.trim()) return ALL_CURATED_ORGANISMS;
  const q = query.toLowerCase().trim();
  return ALL_CURATED_ORGANISMS.filter(org => 
    org.commonName.toLowerCase().includes(q) ||
    org.scientificName.toLowerCase().includes(q) ||
    org.taxonomy.genus.toLowerCase().includes(q) ||
    org.taxonomy.order.toLowerCase().includes(q) ||
    org.taxonomy.class.toLowerCase().includes(q) ||
    org.taxonomy.phylum.toLowerCase().includes(q) ||
    org.hotspots.some(h => h.name.toLowerCase().includes(q) || h.description.toLowerCase().includes(q))
  );
}

export const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Mammals',
  'Birds',
  'Reptiles',
  'Amphibians',
  'Fish',
  'Invertebrates',
  'Plants & Fungi',
  'Microscopic & Archaea'
];
