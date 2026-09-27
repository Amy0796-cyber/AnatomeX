import React, { useState } from 'react';
import { OrganismData, OrganSystemType } from '../types/organism';
import { ALL_CURATED_ORGANISMS } from '../data/allOrganisms';
import { sound } from '../utils/audio';
import { ArrowLeftRight, Activity, GitCompare, Sparkles, Shield, Dna } from 'lucide-react';

interface ComparativeLabProps {
  initialOrganismA?: OrganismData;
  initialOrganismB?: OrganismData;
  onSelectOrganism?: (org: OrganismData) => void;
}

export const ComparativeLab: React.FC<ComparativeLabProps> = ({
  initialOrganismA,
  initialOrganismB,
  onSelectOrganism,
}) => {
  const [orgAId, setOrgAId] = useState<string>(initialOrganismA?.id || 'homo-sapiens');
  const [orgBId, setOrgBId] = useState<string>(initialOrganismB?.id || 'balaenoptera-musculus');
  const [activeSystemTab, setActiveSystemTab] = useState<OrganSystemType>('circulatory');

  const orgA = ALL_CURATED_ORGANISMS.find(o => o.id === orgAId) || ALL_CURATED_ORGANISMS[0];
  const orgB = ALL_CURATED_ORGANISMS.find(o => o.id === orgBId) || ALL_CURATED_ORGANISMS[1];

  const systems: { id: OrganSystemType; label: string }[] = [
    { id: 'circulatory', label: 'Circulatory & Heart' },
    { id: 'respiratory', label: 'Respiratory & Gas' },
    { id: 'nervous', label: 'Nervous & Brain' },
    { id: 'skeletal', label: 'Skeletal & Support' },
    { id: 'muscular', label: 'Muscular & Motion' },
    { id: 'digestive', label: 'Digestive & Energy' },
    { id: 'integumentary', label: 'Integumentary Skin' },
    { id: 'specialized', label: 'Specialized Niche' },
  ];

  return (
    <div className="w-full space-y-8 animate-in fade-in-50 duration-300">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <GitCompare className="w-4 h-4" />
              <span className="uppercase tracking-wider">Comparative Anatomy & Evolutionary Morphology Lab</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mt-1">
              Cross-Phylum Biological Comparison
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Inspect how convergent and divergent evolutionary pressures shaped body architectures across different Kingdoms, Phyla, and ecological niches.
            </p>
          </div>

          {/* Organism Selector Dropdowns */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-slate-400 mb-1">Specimen Alpha</span>
              <select
                value={orgAId}
                onChange={(e) => {
                  setOrgAId(e.target.value);
                  sound.playClick(600);
                }}
                className="px-3 py-2 text-xs font-semibold bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {ALL_CURATED_ORGANISMS.map((org) => (
                  <option key={`a-${org.id}`} value={org.id}>
                    {org.commonName} ({org.category})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-800/80 text-cyan-400 mt-4 sm:mt-0">
              <ArrowLeftRight className="w-4 h-4" />
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-slate-400 mb-1">Specimen Beta</span>
              <select
                value={orgBId}
                onChange={(e) => {
                  setOrgBId(e.target.value);
                  sound.playClick(750);
                }}
                className="px-3 py-2 text-xs font-semibold bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {ALL_CURATED_ORGANISMS.map((org) => (
                  <option key={`b-${org.id}`} value={org.id}>
                    {org.commonName} ({org.category})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Quick Summary Specimen Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specimen A */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-cyan-400 font-semibold uppercase">{orgA.category}</span>
              <span className="italic font-mono">{orgA.scientificName}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">{orgA.commonName}</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">{orgA.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-[11px] text-slate-400 font-mono">Mass Scale:</span>
              <div className="font-semibold text-white">{orgA.massRange}</div>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-mono">Habitat:</span>
              <div className="font-semibold text-white truncate">{orgA.habitat}</div>
            </div>
          </div>
        </div>

        {/* Specimen B */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-sky-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-sky-400 font-semibold uppercase">{orgB.category}</span>
              <span className="italic font-mono">{orgB.scientificName}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">{orgB.commonName}</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">{orgB.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-[11px] text-slate-400 font-mono">Mass Scale:</span>
              <div className="font-semibold text-white">{orgB.massRange}</div>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-mono">Habitat:</span>
              <div className="font-semibold text-white truncate">{orgB.habitat}</div>
            </div>
          </div>
        </div>
      </div>

      {/* System Comparison Navigation Bar */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/80 rounded-xl border border-slate-800 overflow-x-auto">
        {systems.map((sys) => {
          const isActive = activeSystemTab === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => {
                setActiveSystemTab(sys.id);
                sound.playClick(800);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {sys.label}
            </button>
          );
        })}
      </div>

      {/* Deep System Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specimen A System Breakdown */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-base font-bold text-cyan-300 flex items-center gap-2">
              <Dna className="w-4 h-4 text-cyan-400" />
              {orgA.systems[activeSystemTab]?.name || `${activeSystemTab} System`}
            </h4>
            <span className="text-xs font-mono text-slate-400">{orgA.commonName}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {orgA.systems[activeSystemTab]?.overview}
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[11px] font-mono text-cyan-400 uppercase">Key Morphological Structures</span>
              <ul className="mt-1 space-y-1 text-slate-200">
                {orgA.systems[activeSystemTab]?.keyStructures.map((st, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Physiological Mechanism</span>
              <p className="text-slate-300 mt-0.5">{orgA.systems[activeSystemTab]?.physiologicalMechanism}</p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Histology & Cell Type</span>
              <p className="text-slate-300 mt-0.5">{orgA.systems[activeSystemTab]?.cellularComposition}</p>
            </div>

            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20">
              <span className="text-[11px] font-mono text-cyan-300 uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Evolutionary Advantage
              </span>
              <p className="text-cyan-100/90 mt-1">{orgA.systems[activeSystemTab]?.adaptiveAdvantage}</p>
            </div>
          </div>
        </div>

        {/* Specimen B System Breakdown */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="text-base font-bold text-sky-300 flex items-center gap-2">
              <Dna className="w-4 h-4 text-sky-400" />
              {orgB.systems[activeSystemTab]?.name || `${activeSystemTab} System`}
            </h4>
            <span className="text-xs font-mono text-slate-400">{orgB.commonName}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {orgB.systems[activeSystemTab]?.overview}
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-[11px] font-mono text-sky-400 uppercase">Key Morphological Structures</span>
              <ul className="mt-1 space-y-1 text-slate-200">
                {orgB.systems[activeSystemTab]?.keyStructures.map((st, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Physiological Mechanism</span>
              <p className="text-slate-300 mt-0.5">{orgB.systems[activeSystemTab]?.physiologicalMechanism}</p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Histology & Cell Type</span>
              <p className="text-slate-300 mt-0.5">{orgB.systems[activeSystemTab]?.cellularComposition}</p>
            </div>

            <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-500/20">
              <span className="text-[11px] font-mono text-sky-300 uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Evolutionary Advantage
              </span>
              <p className="text-sky-100/90 mt-1">{orgB.systems[activeSystemTab]?.adaptiveAdvantage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
