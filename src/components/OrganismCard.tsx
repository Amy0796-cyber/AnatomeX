import React from 'react';
import { OrganismData } from '../types/organism';
import { sound } from '../utils/audio';
import { Sparkles, ArrowRight } from 'lucide-react';

interface OrganismCardProps {
  organism: OrganismData;
  onSelect: (org: OrganismData) => void;
}

export const OrganismCard: React.FC<OrganismCardProps> = ({ organism, onSelect }) => {
  return (
    <div
      onClick={() => {
        sound.playClick(600, 0.03);
        onSelect(organism);
      }}
      className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
    >
      {/* Top Image / Illustration */}
      <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
        {organism.heroImage ? (
          <img
            src={organism.heroImage}
            alt={organism.commonName}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 p-4 text-center">
            <span className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-display font-bold text-lg mb-2">
              {organism.commonName.charAt(0)}
            </span>
            <span className="text-xs font-mono text-cyan-300">{organism.diagramVisualType.toUpperCase()} SCHEMATIC</span>
          </div>
        )}

        {/* Gradient Scrim for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        {/* Unboxed Metadata in Overlay */}
        <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-300 font-semibold drop-shadow">
          {organism.category}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Unboxed Metadata Row */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>{organism.taxonomy.class}</span>
            <span aria-hidden="true">·</span>
            <span>{organism.conservationStatus}</span>
            {organism.isAiSynthesized && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-purple-400 inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> AI Model
                </span>
              </>
            )}
          </div>

          <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
            {organism.commonName}
          </h3>

          <div className="text-xs font-mono italic text-slate-400 line-clamp-1">
            {organism.scientificName}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mt-2">
            {organism.summary}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="truncate max-w-[160px]">{organism.habitat.split(',')[0]}</span>
          <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Examine Anatomy <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
