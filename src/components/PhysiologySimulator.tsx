import React, { useState, useEffect } from 'react';
import { OrganismData } from '../types/organism';
import { sound } from '../utils/audio';
import { Activity, Heart, Wind, Zap, Gauge } from 'lucide-react';

interface PhysiologySimulatorProps {
  organism: OrganismData;
}

export const PhysiologySimulator: React.FC<PhysiologySimulatorProps> = ({ organism }) => {
  const [pulsePhase, setPulsePhase] = useState<number>(0);
  const [isAudioTicking, setIsAudioTicking] = useState<boolean>(false);

  // Determine baseline heart rate / respiratory rate based on organism
  const getBpm = (org: OrganismData): number => {
    switch (org.diagramVisualType) {
      case 'falcon': return 720;
      case 'human': return 72;
      case 'whale': return 6;
      case 'bee': return 230; // wingbeat proxy
      case 'shark': return 35;
      case 'turtle': return 4;
      case 'frog': return 50;
      case 'plant': return 0;
      case 'tardigrade': return 0;
      case 'jellyfish': return 16; // bell pulse
      default: return 60;
    }
  };

  const bpm = getBpm(organism);
  const periodMs = bpm > 0 ? (60000 / bpm) : 0;

  useEffect(() => {
    if (bpm === 0) return;
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 100);
      if (isAudioTicking && bpm < 150) {
        sound.playClick(600 + (pulsePhase % 2) * 200, 0.02);
      }
    }, Math.max(30, periodMs / 20));

    return () => clearInterval(interval);
  }, [bpm, periodMs, isAudioTicking, pulsePhase]);

  return (
    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Activity className="w-4 h-4" />
            <span className="uppercase tracking-wider">Real-Time Physiological Telemetry Simulator</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white mt-1">
            Biometric Mechanics & Metabolic Dynamics
          </h3>
        </div>

        {bpm > 0 && (
          <button
            onClick={() => {
              setIsAudioTicking(!isAudioTicking);
              sound.playClick(800);
            }}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors ${
              isAudioTicking 
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {isAudioTicking ? '● Acoustic Telemetry ON' : '○ Acoustic Telemetry OFF'}
          </button>
        )}
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Cardiac / Rhythm */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase">Cardiac Frequency</span>
            <Heart className={`w-4 h-4 text-rose-500 ${bpm > 0 ? 'animate-pulse' : ''}`} />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {bpm > 0 ? bpm : 'N/A'} <span className="text-xs text-slate-400 font-normal">{bpm > 0 ? 'BPM' : 'Non-cardiac'}</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {bpm > 200 ? 'High-frequency avian/insect metabolic rate' : bpm > 50 ? 'Standard homeothermic mammal rhythm' : bpm > 0 ? 'Extreme diving bradycardia' : 'Acellular/Plant diffusion'}
            </div>
          </div>
        </div>

        {/* Metric 2: Respiratory Rate */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase">Gas Exchange Mode</span>
            <Wind className="w-4 h-4 text-sky-400" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-bold text-white truncate">
              {organism.systems.respiratory?.keyStructures[0] || 'Diffusion'}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {organism.systems.respiratory?.overview.slice(0, 75)}...
            </div>
          </div>
        </div>

        {/* Metric 3: Neural Integration */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase">Neural Integration</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-bold text-white truncate">
              {organism.systems.nervous?.keyStructures[0] || 'Nerve Ring'}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {organism.systems.nervous?.adaptiveAdvantage.slice(0, 75)}...
            </div>
          </div>
        </div>

        {/* Metric 4: Metabolic Scale */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase">Conservation Status</span>
            <Gauge className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-3">
            <div className="text-lg font-bold text-emerald-400">
              {organism.conservationStatus}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Lifespan: {organism.lifespan}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Visual Pulse Waveform */}
      {bpm > 0 && (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span>MYOGENIC CONTRACTION CYCLE WAVEFORM</span>
            <span className="text-cyan-400 tabular-nums">T = {(60 / bpm).toFixed(2)}s</span>
          </div>

          <div className="relative h-16 w-full bg-slate-950 rounded-lg overflow-hidden flex items-center border border-slate-800/80">
            {/* ECG-like waveform path */}
            <svg viewBox="0 0 400 60" className="w-full h-full stroke-cyan-400 fill-none" preserveAspectRatio="none">
              <path
                d="M 0 30 L 80 30 L 90 20 L 95 45 L 105 5 L 115 50 L 125 30 L 160 30 L 175 18 L 190 30 L 280 30 L 290 20 L 295 45 L 305 5 L 315 50 L 325 30 L 360 30 L 375 18 L 390 30 L 400 30"
                strokeWidth="2"
              />
            </svg>

            {/* Scanning Laser HUD Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] pointer-events-none transition-all duration-75"
              style={{ left: `${pulsePhase}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
