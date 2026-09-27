import React from 'react';
import { Volume2, VolumeX, Sun, Moon, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  activeView: 'home' | 'lab' | 'quiz' | 'bookmarks';
  onNavigate: (view: 'home' | 'lab' | 'quiz' | 'bookmarks') => void;
  isDark: boolean;
  onToggleTheme: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  isDark,
  onToggleTheme,
  isAudioMuted,
  onToggleAudio,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            sound.playClick(500);
            onNavigate('home');
          }}
          className="text-xl font-black font-display tracking-tight text-white flex items-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span>AnatomeX</span>
        </button>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-400">
          <button
            onClick={() => {
              sound.playClick(600);
              onNavigate('home');
            }}
            className={`transition-colors hover:text-white ${
              activeView === 'home' ? 'text-cyan-400 underline underline-offset-8' : ''
            }`}
          >
            Encyclopedia
          </button>

          <button
            onClick={() => {
              sound.playClick(700);
              onNavigate('lab');
            }}
            className={`transition-colors hover:text-white ${
              activeView === 'lab' ? 'text-cyan-400 underline underline-offset-8' : ''
            }`}
          >
            Comparative Lab
          </button>

          <button
            onClick={() => {
              sound.playClick(800);
              onNavigate('quiz');
            }}
            className={`transition-colors hover:text-white ${
              activeView === 'quiz' ? 'text-cyan-400 underline underline-offset-8' : ''
            }`}
          >
            Anatomy Challenge
          </button>

          <button
            onClick={() => {
              sound.playClick(900);
              onNavigate('bookmarks');
            }}
            className={`transition-colors hover:text-white ${
              activeView === 'bookmarks' ? 'text-cyan-400 underline underline-offset-8' : ''
            }`}
          >
            Specimen Archive
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            onClick={onToggleAudio}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            title={isAudioMuted ? 'Unmute Acoustic Feedback' : 'Mute Acoustic Feedback'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Dark/Light mode toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
