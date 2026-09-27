import React, { useState, useRef, useEffect } from 'react';
import { Category, OrganismData } from '../types/organism';
import { CATEGORIES, ALL_CURATED_ORGANISMS } from '../data/allOrganisms';
import { sound } from '../utils/audio';
import { Search, Sparkles, Loader2, ArrowRight } from 'lucide-react';

interface HeroSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
  onSelectOrganism: (org: OrganismData) => void;
  isSynthesizing: boolean;
  onSynthesizeCustom: (query: string) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onSelectOrganism,
  isSynthesizing,
  onSynthesizeCustom,
}) => {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const trimmed = searchQuery.trim().toLowerCase();
  const suggestions = trimmed
    ? ALL_CURATED_ORGANISMS.filter(
        org =>
          org.commonName.toLowerCase().includes(trimmed) ||
          org.scientificName.toLowerCase().includes(trimmed) ||
          org.category.toLowerCase().includes(trimmed)
      ).slice(0, 5)
    : [];

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        onSelectOrganism(suggestions[0]);
        setShowSuggestions(false);
      } else if (trimmed.length > 2) {
        onSynthesizeCustom(searchQuery);
        setShowSuggestions(false);
      }
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Hero Title & Subtitle */}
      <div className="text-center space-y-3 max-w-3xl mx-auto pt-4 md:pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Planetary Biodiversity & Anatomical Encyclopedia</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
          Explore the Anatomy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">Any Living Organism</span>
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Interactive digital cross-sections, histological structures, physiological mechanisms, and evolutionary adaptations across the tree of life.
        </p>
      </div>

      {/* Global Search Bar with Autocomplete */}
      <div ref={searchRef} className="relative max-w-2xl mx-auto">
        <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-2xl focus-within:border-cyan-500/80 focus-within:ring-4 focus-within:ring-cyan-500/10 transition-all overflow-hidden p-1.5">
          <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search any organism: e.g., Human, Blue Whale, Honeybee, Shark, Axolotl, Platypus..."
            className="w-full bg-transparent px-3 py-2.5 text-sm md:text-base text-white placeholder-slate-500 focus:outline-none font-sans"
          />

          {isSynthesizing ? (
            <div className="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center gap-2 shrink-0">
              <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
              <span>Synthesizing...</span>
            </div>
          ) : (
            <button
              onClick={() => {
                if (suggestions.length > 0) {
                  onSelectOrganism(suggestions[0]);
                } else if (trimmed.length > 2) {
                  onSynthesizeCustom(searchQuery);
                }
              }}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shrink-0 flex items-center gap-1.5 shadow-md"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Autocomplete Dropdown */}
        {showSuggestions && (suggestions.length > 0 || (trimmed.length > 2 && suggestions.length === 0)) && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-slate-800/60 backdrop-blur-md animate-in fade-in-50 duration-150">
            {suggestions.map((org) => (
              <button
                key={org.id}
                onClick={() => {
                  sound.playClick(600);
                  onSelectOrganism(org);
                  setShowSuggestions(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-slate-800/60 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {org.commonName}
                  </div>
                  <div className="text-xs font-mono text-slate-400 italic">
                    {org.scientificName} · {org.category}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </button>
            ))}

            {/* AI Synthesis Prompt Option */}
            {trimmed.length > 2 && (
              <button
                onClick={() => {
                  sound.playClick(800);
                  onSynthesizeCustom(searchQuery);
                  setShowSuggestions(false);
                }}
                className="w-full px-4 py-3 text-left bg-cyan-950/40 hover:bg-cyan-900/40 transition-colors flex items-center justify-between text-xs text-cyan-300 font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Synthesize detailed anatomy for &ldquo;{searchQuery}&rdquo; via AI Engine</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400">Generate →</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Categorized Filter Buttons (Segmented Controls) */}
      <div className="flex items-center justify-center gap-1.5 p-1.5 bg-slate-900/60 rounded-2xl border border-slate-800/80 max-w-4xl mx-auto overflow-x-auto">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                sound.playClick(500);
                onSelectCategory(cat);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
