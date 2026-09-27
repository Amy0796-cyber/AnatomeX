import React from 'react';
import { OrganismData } from '../types/organism';
import { ALL_CURATED_ORGANISMS } from '../data/allOrganisms';
import { OrganismCard } from './OrganismCard';
import { Bookmark, ArrowLeft } from 'lucide-react';
import { sound } from '../utils/audio';

interface BookmarksViewProps {
  onSelectOrganism: (org: OrganismData) => void;
  onBack: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({ onSelectOrganism, onBack }) => {
  const getSavedOrganisms = (): OrganismData[] => {
    try {
      const saved = localStorage.getItem('anatomex_bookmarks');
      if (!saved) return [];
      const ids: string[] = JSON.parse(saved);
      return ALL_CURATED_ORGANISMS.filter(org => ids.includes(org.id));
    } catch {
      return [];
    }
  };

  const savedList = getSavedOrganisms();

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <button
            onClick={() => { sound.playClick(500); onBack(); }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Search
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Bookmark className="w-4 h-4" />
            <span className="uppercase tracking-wider">Archived Specimen Collection</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white mt-1">
            Saved Organisms & Anatomical Dossiers
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400 tabular-nums">
          TOTAL ARCHIVED: {savedList.length}
        </div>
      </div>

      {savedList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedList.map((org) => (
            <OrganismCard key={org.id} organism={org} onSelect={onSelectOrganism} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <Bookmark className="w-8 h-8 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white font-display">No specimens bookmarked yet</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Click the bookmark icon on any organism dossier to save it to your personal anatomical research archive.
          </p>
          <button
            onClick={onBack}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors mt-2"
          >
            Explore Organisms
          </button>
        </div>
      )}
    </div>
  );
};
