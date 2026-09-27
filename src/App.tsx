import React, { useState, useEffect } from 'react';
import { OrganismData, Category } from './types/organism';
import { ALL_CURATED_ORGANISMS, getOrganismsByCategory } from './data/allOrganisms';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { OrganismCard } from './components/OrganismCard';
import { OrganismDetail } from './components/OrganismDetail';
import { ComparativeLab } from './components/ComparativeLab';
import { AnatomyQuiz } from './components/AnatomyQuiz';
import { BookmarksView } from './components/BookmarksView';
import { sound } from './utils/audio';
import { Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'lab' | 'quiz' | 'bookmarks'>('home');
  const [selectedOrganism, setSelectedOrganism] = useState<OrganismData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [synthesisError, setSynthesisError] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [customOrganisms, setCustomOrganisms] = useState<OrganismData[]>([]);

  // Initialize theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    sound.playClick(600);
    setIsDark(!isDark);
  };

  const toggleAudio = () => {
    sound.isMuted = !isAudioMuted;
    setIsAudioMuted(!isAudioMuted);
    if (isAudioMuted) {
      sound.playClick(800);
    }
  };

  // Combine curated and dynamic AI-synthesized organisms
  const allAvailableOrganisms = [...ALL_CURATED_ORGANISMS, ...customOrganisms];

  // Filtering
  const filteredOrganisms = allAvailableOrganisms.filter((org) => {
    const matchesCategory = selectedCategory === 'All' || org.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      org.commonName.toLowerCase().includes(q) ||
      org.scientificName.toLowerCase().includes(q) ||
      org.taxonomy.genus.toLowerCase().includes(q) ||
      org.taxonomy.order.toLowerCase().includes(q) ||
      org.taxonomy.class.toLowerCase().includes(q) ||
      org.taxonomy.phylum.toLowerCase().includes(q) ||
      org.category.toLowerCase().includes(q) ||
      org.summary.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  // Handle Dynamic AI Synthesis
  const handleSynthesizeCustom = async (query: string) => {
    if (!query.trim()) return;
    setIsSynthesizing(true);
    setSynthesisError(null);
    sound.playScanPing();

    try {
      const res = await fetch('/api/organism/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() }),
      });

      if (!res.ok) throw new Error('Synthesis server encountered an issue');
      const data = await res.json();

      if (data.organism) {
        setCustomOrganisms(prev => [data.organism, ...prev.filter(o => o.id !== data.organism.id)]);
        setSelectedOrganism(data.organism);
        sound.playClick(1000, 0.08);
      } else {
        throw new Error('Could not parse synthesized organism blueprint');
      }
    } catch (err: unknown) {
      console.error('Synthesis failed:', err);
      setSynthesisError('Failed to dynamically synthesize organism data. Please check your query or retry.');
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Bar Navigation */}
      <Navbar
        activeView={selectedOrganism ? 'home' : activeView}
        onNavigate={(view) => {
          setSelectedOrganism(null);
          setActiveView(view);
        }}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isAudioMuted={isAudioMuted}
        onToggleAudio={toggleAudio}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* VIEW 1: Organism Detail Dossier */}
        {selectedOrganism ? (
          <OrganismDetail
            organism={selectedOrganism}
            onBack={() => setSelectedOrganism(null)}
            onCompareWith={(org) => {
              setSelectedOrganism(null);
              setActiveView('lab');
            }}
          />
        ) : activeView === 'home' ? (
          /* VIEW 2: Homepage Exploration Dashboard */
          <div className="space-y-12">
            {/* Hero Search & Category Filter Section */}
            <HeroSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onSelectOrganism={(org) => {
                sound.playClick(700);
                setSelectedOrganism(org);
              }}
              isSynthesizing={isSynthesizing}
              onSynthesizeCustom={handleSynthesizeCustom}
            />

            {/* Synthesis Error Banner */}
            {synthesisError && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{synthesisError}</span>
                </div>
                <button
                  onClick={() => setSynthesisError(null)}
                  className="text-rose-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Organism Collection Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="font-semibold text-white uppercase">
                    {selectedCategory === 'All' ? 'Complete Specimen Archive' : `${selectedCategory} Dossiers`}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{filteredOrganisms.length} Specimens Available</span>
                </div>
              </div>

              {filteredOrganisms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOrganisms.map((org) => (
                    <OrganismCard
                      key={org.id}
                      organism={org}
                      onSelect={(target) => setSelectedOrganism(target)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty search results fallback */
                <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                  <Sparkles className="w-8 h-8 text-cyan-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white font-display">
                    No pre-loaded specimen found for &ldquo;{searchQuery}&rdquo;
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Would you like our biological AI synthesis engine to generate a detailed anatomical profile, taxonomy breakdown, and system schematics for this organism?
                  </p>
                  <button
                    onClick={() => handleSynthesizeCustom(searchQuery)}
                    disabled={isSynthesizing}
                    className="px-5 py-2.5 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors inline-flex items-center gap-2 shadow-lg"
                  >
                    {isSynthesizing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    <span>Synthesize &ldquo;{searchQuery}&rdquo; Profile</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : activeView === 'lab' ? (
          /* VIEW 3: Comparative Anatomy Lab */
          <ComparativeLab onSelectOrganism={(org) => setSelectedOrganism(org)} />
        ) : activeView === 'quiz' ? (
          /* VIEW 4: Anatomy Lab Challenge */
          <AnatomyQuiz />
        ) : (
          /* VIEW 5: Bookmarks Archive */
          <BookmarksView
            onSelectOrganism={(org) => setSelectedOrganism(org)}
            onBack={() => setActiveView('home')}
          />
        )}
      </main>

      {/* Quiet, Human-Designed Clean Footer */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950/60 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-300 font-semibold font-display text-sm">AnatomeX</span>
            <span>·</span>
            <span>Interactive Biological & Anatomical Encyclopedia</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Precision Comparative Anatomy</span>
            <span>·</span>
            <span>Phylogenetic Taxonomy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
