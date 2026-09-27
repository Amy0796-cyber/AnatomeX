import React, { useState } from 'react';
import { OrganismData, OrganSystemType, AnatomicalHotspot } from '../types/organism';
import { AnatomyViewer } from './AnatomyViewer';
import { PhysiologySimulator } from './PhysiologySimulator';
import { sound } from '../utils/audio';
import { 
  ArrowLeft, 
  Dna, 
  Sparkles, 
  Layers, 
  Compass, 
  Bookmark, 
  Share2, 
  Check, 
  ExternalLink,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface OrganismDetailProps {
  organism: OrganismData;
  onBack: () => void;
  onCompareWith?: (org: OrganismData) => void;
}

export const OrganismDetail: React.FC<OrganismDetailProps> = ({
  organism,
  onBack,
  onCompareWith,
}) => {
  const [activeTab, setActiveTab] = useState<'anatomy' | 'systems' | 'evolution' | 'telemetry'>('anatomy');
  const [activeHotspot, setActiveHotspot] = useState<AnatomicalHotspot | null>(null);
  const [selectedSystemAccordion, setSelectedSystemAccordion] = useState<OrganSystemType>('circulatory');
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('anatomex_bookmarks');
      return saved ? JSON.parse(saved).includes(organism.id) : false;
    } catch {
      return false;
    }
  });
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const toggleBookmark = () => {
    sound.playClick(900);
    try {
      const saved = localStorage.getItem('anatomex_bookmarks');
      const list: string[] = saved ? JSON.parse(saved) : [];
      let next: string[];
      if (list.includes(organism.id)) {
        next = list.filter(id => id !== organism.id);
        setIsBookmarked(false);
      } else {
        next = [...list, organism.id];
        setIsBookmarked(true);
      }
      localStorage.setItem('anatomex_bookmarks', JSON.stringify(next));
    } catch {
      setIsBookmarked(!isBookmarked);
    }
  };

  const handleShare = () => {
    sound.playClick(700);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const systemKeys: { id: OrganSystemType; label: string }[] = [
    { id: 'integumentary', label: 'Integumentary Skin' },
    { id: 'skeletal', label: 'Skeletal Framework' },
    { id: 'muscular', label: 'Muscular Locomotion' },
    { id: 'nervous', label: 'Nervous & Brain' },
    { id: 'circulatory', label: 'Cardiovascular' },
    { id: 'respiratory', label: 'Respiratory Lungs/Gills' },
    { id: 'digestive', label: 'Gastrointestinal Gut' },
    { id: 'specialized', label: 'Specialized Niche' },
  ];

  return (
    <div className="w-full space-y-8 animate-in fade-in-50 duration-300">
      {/* Back Button & Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => { sound.playClick(500); onBack(); }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-xs font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Exploration</span>
        </button>

        <div className="flex items-center gap-2">
          {onCompareWith && (
            <button
              onClick={() => onCompareWith(organism)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
            >
              Compare in Lab →
            </button>
          )}

          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-lg border text-xs transition-colors ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title="Bookmark Organism"
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs transition-colors"
            title="Copy Share Link"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Hero Header Lockup */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
        {organism.heroImage && (
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden lg:block">
            <img
              src={organism.heroImage}
              alt={organism.commonName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover mix-blend-luminosity mask-radial-fade"
            />
          </div>
        )}

        <div className="relative z-10 space-y-4 max-w-3xl">
          {/* Metadata String without pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-semibold">{organism.category}</span>
            <span aria-hidden="true">·</span>
            <span>Status: <strong className="text-emerald-400 font-normal">{organism.conservationStatus}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Lifespan: {organism.lifespan}</span>
            {organism.isAiSynthesized && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-purple-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Synthesized Model
                </span>
              </>
            )}
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              {organism.commonName}
            </h1>
            <div className="text-base md:text-lg font-mono italic text-slate-400 mt-1">
              {organism.scientificName}
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {organism.summary}
          </p>

          {/* Taxonomic Hierarchy Chain */}
          <div className="pt-3 border-t border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-500 uppercase mb-1.5 flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5 text-cyan-400" />
              Taxonomic Rank Classification
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-300">
              <span>Kingdom: <strong className="text-white font-normal">{organism.taxonomy.kingdom}</strong></span>
              <span>Phylum: <strong className="text-white font-normal">{organism.taxonomy.phylum}</strong></span>
              <span>Class: <strong className="text-white font-normal">{organism.taxonomy.class}</strong></span>
              <span>Order: <strong className="text-white font-normal">{organism.taxonomy.order}</strong></span>
              <span>Family: <strong className="text-white font-normal">{organism.taxonomy.family}</strong></span>
              <span>Genus: <strong className="text-white font-normal">{organism.taxonomy.genus}</strong></span>
            </div>
          </div>

          {/* Quick Habitat & Biometrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80 text-xs">
            <div>
              <span className="text-[11px] font-mono text-slate-500">Size Scale:</span>
              <div className="font-semibold text-white truncate">{organism.sizeRange}</div>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500">Mass Scale:</span>
              <div className="font-semibold text-white truncate">{organism.massRange}</div>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500">Diet Guild:</span>
              <div className="font-semibold text-white truncate">{organism.diet}</div>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500">Native Habitat:</span>
              <div className="font-semibold text-white truncate">{organism.habitat}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Section Switcher Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-1 overflow-x-auto">
        <button
          onClick={() => { setActiveTab('anatomy'); sound.playClick(600); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'anatomy'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" />
          Interactive Anatomy Viewer
        </button>

        <button
          onClick={() => { setActiveTab('systems'); sound.playClick(700); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'systems'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Dna className="w-4 h-4" />
          Organ System Breakdown
        </button>

        <button
          onClick={() => { setActiveTab('evolution'); sound.playClick(800); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'evolution'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Evolutionary Adaptations & Facts
        </button>

        <button
          onClick={() => { setActiveTab('telemetry'); sound.playClick(900); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'telemetry'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Compass className="w-4 h-4" />
          Physiological Telemetry
        </button>
      </div>

      {/* Tab 1: Interactive Anatomy Viewer */}
      {activeTab === 'anatomy' && (
        <div className="space-y-6">
          <AnatomyViewer
            organism={organism}
            activeHotspot={activeHotspot}
            onSelectHotspot={setActiveHotspot}
          />
        </div>
      )}

      {/* Tab 2: Organ System Breakdown */}
      {activeTab === 'systems' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: System Selector List */}
          <div className="space-y-1.5 md:col-span-1">
            <div className="text-xs font-mono uppercase text-slate-500 px-2 mb-2">
              Select Physiological System
            </div>
            {systemKeys.map((sys) => {
              const isSelected = selectedSystemAccordion === sys.id;
              return (
                <button
                  key={sys.id}
                  onClick={() => {
                    setSelectedSystemAccordion(sys.id);
                    sound.playClick(750);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between text-xs font-semibold ${
                    isSelected
                      ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                  }`}
                >
                  <span>{sys.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected System In-Depth Card */}
          <div className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
            {organism.systems[selectedSystemAccordion] ? (
              <>
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedSystemAccordion} system specification
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    {organism.systems[selectedSystemAccordion].name}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {organism.systems[selectedSystemAccordion].overview}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 uppercase block mb-2">
                      Key Morphological Structures
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                      {organism.systems[selectedSystemAccordion].keyStructures.map((st, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                      Physiological Mechanism & Kinetics
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {organism.systems[selectedSystemAccordion].physiologicalMechanism}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                      Histological & Cellular Composition
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {organism.systems[selectedSystemAccordion].cellularComposition}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                    <span className="text-xs font-mono uppercase text-cyan-300 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5" /> Evolutionary Adaptive Advantage
                    </span>
                    <p className="text-xs text-cyan-100/90 leading-relaxed">
                      {organism.systems[selectedSystemAccordion].adaptiveAdvantage}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-sm text-slate-400">System detail unavailable for this specimen.</div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Evolutionary Adaptations & Fun Facts */}
      {activeTab === 'evolution' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Adaptations */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Evolutionary Milestones & Specializations
              </h3>

              <div className="space-y-4">
                {organism.evolutionaryAdaptations.map((ad, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-white text-sm">{ad.title}</span>
                      {ad.eraOrOrigin && <span className="text-cyan-400">{ad.eraOrOrigin}</span>}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{ad.description}</p>
                    <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                      <strong className="text-cyan-400 font-normal">Ecological Advantage:</strong> {ad.ecologicalAdvantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts & Trivia */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Verified Biological Facts & Trivia
              </h3>

              <div className="space-y-3">
                {organism.funFacts.map((fact, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200 leading-relaxed flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center font-mono text-[11px] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Physiological Telemetry */}
      {activeTab === 'telemetry' && (
        <PhysiologySimulator organism={organism} />
      )}
    </div>
  );
};
