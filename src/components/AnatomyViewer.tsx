import React, { useState, useRef } from 'react';
import { OrganismData, OrganSystemType, AnatomicalHotspot } from '../types/organism';
import { VectorSchematic } from './diagrams/VectorSchematic';
import { sound } from '../utils/audio';
import { 
  Layers, 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sparkles, 
  Activity, 
  Flame, 
  Radio, 
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';

interface AnatomyViewerProps {
  organism: OrganismData;
  activeHotspot: AnatomicalHotspot | null;
  onSelectHotspot: (hotspot: AnatomicalHotspot | null) => void;
  onSystemFilter?: (system: OrganSystemType | 'all') => void;
}

export const AnatomyViewer: React.FC<AnatomyViewerProps> = ({
  organism,
  activeHotspot,
  onSelectHotspot,
  onSystemFilter,
}) => {
  const [activeSystem, setActiveSystem] = useState<OrganSystemType | 'all'>('all');
  const [crossSectionDepth, setCrossSectionDepth] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'standard' | 'xray' | 'thermal'>('standard');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [showHotspotList, setShowHotspotList] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const systems: { id: OrganSystemType | 'all'; label: string; iconColor: string }[] = [
    { id: 'all', label: 'All Systems', iconColor: 'text-cyan-400' },
    { id: 'integumentary', label: 'Integumentary', iconColor: 'text-amber-400' },
    { id: 'skeletal', label: 'Skeletal', iconColor: 'text-slate-200' },
    { id: 'muscular', label: 'Muscular', iconColor: 'text-rose-400' },
    { id: 'nervous', label: 'Nervous', iconColor: 'text-yellow-400' },
    { id: 'circulatory', label: 'Circulatory', iconColor: 'text-red-500' },
    { id: 'respiratory', label: 'Respiratory', iconColor: 'text-sky-400' },
    { id: 'digestive', label: 'Digestive', iconColor: 'text-emerald-400' },
    { id: 'specialized', label: 'Specialized', iconColor: 'text-purple-400' },
  ];

  const handleSystemChange = (sys: OrganSystemType | 'all', index: number) => {
    setActiveSystem(sys);
    sound.playLayerSwitch(index);
    if (onSystemFilter) onSystemFilter(sys);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setCoordinates({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const handleHotspotClick = (spot: AnatomicalHotspot) => {
    sound.playClick(900, 0.04);
    if (activeHotspot?.id === spot.id) {
      onSelectHotspot(null);
    } else {
      onSelectHotspot(spot);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Filter visible hotspots based on active system
  const visibleHotspots = organism.hotspots.filter(
    h => activeSystem === 'all' || h.system === activeSystem
  );

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'min-h-[580px]'
      }`}
    >
      {/* Top Telemetry & Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-slate-800 bg-slate-950/60 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
            <span className="font-semibold uppercase tracking-wider">ANATOMICAL PLANE: SAGITTAL CROSS-SECTION</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div className="text-xs font-mono text-slate-400 hidden sm:block tabular-nums">
            PROBE COORD: X {coordinates.x.toFixed(1)}% · Y {coordinates.y.toFixed(1)}%
          </div>
        </div>

        {/* View Modes (Standard / X-Ray / Thermal) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-lg border border-slate-800">
          <button
            onClick={() => { setViewMode('standard'); sound.playClick(600); }}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              viewMode === 'standard' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Standard
          </button>
          <button
            onClick={() => { setViewMode('xray'); sound.playClick(750); }}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              viewMode === 'xray' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            X-Ray
          </button>
          <button
            onClick={() => { setViewMode('thermal'); sound.playClick(900); }}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              viewMode === 'thermal' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            Metabolic
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: System Filter Column (Desktop & Tablet) */}
        <div className="w-full md:w-56 p-3 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/40 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-y-auto shrink-0 z-10">
          <div className="text-[11px] font-mono uppercase text-slate-500 px-2 py-1 hidden md:block">
            Organ Systems
          </div>
          {systems.map((sys, idx) => {
            const isSelected = activeSystem === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => handleSystemChange(sys.id, idx)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 ring-4 ring-cyan-400/20' : 'bg-slate-600'}`} />
                  <span>{sys.label}</span>
                </div>
                {isSelected && <ChevronRight className="w-3.5 h-3.5 text-cyan-400 hidden md:block" />}
              </button>
            );
          })}

          {/* Quick Hotspots Toggle */}
          <div className="mt-auto pt-3 border-t border-slate-800/60 hidden md:block">
            <button
              onClick={() => setShowHotspotList(!showHotspotList)}
              className="w-full text-left px-2 py-1.5 text-xs text-slate-400 hover:text-slate-200 flex items-center justify-between"
            >
              <span>Hotspot Annotations</span>
              <span className="font-mono text-cyan-400">{visibleHotspots.length}</span>
            </button>
          </div>
        </div>

        {/* Center: Canvas Stage */}
        <div 
          className="relative flex-1 bg-slate-950/80 flex items-center justify-center p-4 min-h-[380px] cursor-crosshair overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Zoom/Pan viewport wrapper */}
          <div 
            className="relative w-full h-full max-w-3xl flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Vector Schematic Layer */}
            <VectorSchematic
              visualType={organism.diagramVisualType}
              activeSystem={activeSystem}
              crossSectionDepth={crossSectionDepth}
              viewMode={viewMode}
              selectedHotspotId={activeHotspot?.id}
            />

            {/* Interactive Hotspot Pins */}
            {visibleHotspots.map((spot) => {
              const isSelected = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
                >
                  <button
                    onClick={() => handleHotspotClick(spot)}
                    className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-200 focus:outline-none ${
                      isSelected 
                        ? 'scale-125 ring-4 ring-cyan-400/40 bg-cyan-500 text-slate-950' 
                        : 'bg-slate-900/90 text-cyan-300 border border-cyan-500/60 hover:scale-110 hover:border-cyan-400 shadow-lg'
                    }`}
                    title={spot.name}
                  >
                    {/* Pulsing Radar Ring */}
                    <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-radar pointer-events-none" />
                    
                    <span className="relative text-[10px] font-mono font-bold">
                      {spot.name.charAt(0)}
                    </span>
                  </button>

                  {/* Hotspot Floating Label */}
                  <div className={`absolute left-1/2 bottom-full mb-2 -translate-x-1/2 pointer-events-none transition-all duration-200 ${
                    isSelected ? 'opacity-100 translate-y-0 scale-100 z-40' : 'opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 z-30'
                  }`}>
                    <div className="px-2.5 py-1 rounded bg-slate-900/95 border border-cyan-500/40 text-slate-100 text-xs whitespace-nowrap shadow-xl flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="font-semibold">{spot.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Zoom & Tool Controls */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 p-1 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-800 shadow-xl z-20">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2.4))}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.8))}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setZoomLevel(1); sound.playClick(500); }}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-700 mx-0.5" />
            <button
              onClick={toggleFullscreen}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
              title="Toggle Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side: Selected Hotspot Deep-Dive Drawer */}
        {activeHotspot && (
          <div className="w-full md:w-80 p-5 border-t md:border-t-0 md:border-l border-slate-800 bg-slate-900/95 flex flex-col justify-between shrink-0 z-20 animate-in slide-in-from-right-4 duration-300">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {activeHotspot.system} system
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {activeHotspot.name}
                  </h4>
                </div>
                <button
                  onClick={() => onSelectHotspot(null)}
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 text-xs"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Histology & Cell Composition</div>
                  <div className="text-xs text-slate-300 mt-0.5">{activeHotspot.histologicalDetails}</div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Physiological Mechanism</div>
                  <div className="text-xs text-slate-300 mt-0.5">{activeHotspot.physiologicalFunction}</div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Evolutionary Origin & Selection</div>
                  <div className="text-xs text-slate-300 mt-0.5">{activeHotspot.evolutionarySignificance}</div>
                </div>

                {activeHotspot.specialAdaptation && (
                  <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-cyan-300">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Adaptive Advantage</span>
                    </div>
                    <div className="text-xs text-cyan-100/90 mt-1">{activeHotspot.specialAdaptation}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Hotspot ID: {activeHotspot.id}</span>
              <span>Pos: {activeHotspot.x}%, {activeHotspot.y}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Cross-Section Depth Scrubber Bar */}
      <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-20">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono uppercase text-slate-300 whitespace-nowrap">
            Cross-Section Peel Depth:
          </span>
          <span className="text-xs font-mono text-cyan-400 tabular-nums">
            {crossSectionDepth}% ({crossSectionDepth < 30 ? 'Outer Integument' : crossSectionDepth < 70 ? 'Muscular & Visceral' : 'Deep Core Skeleton'})
          </span>
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-md">
          <span className="text-[11px] font-mono text-slate-500">Surface</span>
          <input
            type="range"
            min="0"
            max="100"
            value={crossSectionDepth}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCrossSectionDepth(val);
              if (val % 20 === 0) sound.playClick(400 + val * 5, 0.02);
            }}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
          />
          <span className="text-[11px] font-mono text-slate-500">Deep Core</span>
        </div>
      </div>
    </div>
  );
};
