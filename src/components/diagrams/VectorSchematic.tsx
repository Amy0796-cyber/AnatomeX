import React from 'react';
import { OrganSystemType } from '../../types/organism';

interface VectorSchematicProps {
  visualType: string;
  activeSystem: OrganSystemType | 'all';
  crossSectionDepth: number; // 0 (outer skin/cuticle) to 100 (deep skeletal/visceral core)
  viewMode: 'standard' | 'xray' | 'thermal';
  selectedHotspotId?: string | null;
}

export const VectorSchematic: React.FC<VectorSchematicProps> = ({
  visualType,
  activeSystem,
  crossSectionDepth,
  viewMode,
}) => {
  // Compute layer visibility based on activeSystem filter and crossSectionDepth
  const isSkinVisible = (activeSystem === 'all' || activeSystem === 'integumentary') && crossSectionDepth < 75;
  const isMusclesVisible = (activeSystem === 'all' || activeSystem === 'muscular') && crossSectionDepth > 15;
  const isSkeletonVisible = (activeSystem === 'all' || activeSystem === 'skeletal') && crossSectionDepth > 20;
  const isNervousVisible = (activeSystem === 'all' || activeSystem === 'nervous') && crossSectionDepth > 10;
  const isCirculatoryVisible = (activeSystem === 'all' || activeSystem === 'circulatory') && crossSectionDepth > 20;
  const isRespiratoryVisible = (activeSystem === 'all' || activeSystem === 'respiratory') && crossSectionDepth > 20;
  const isDigestiveVisible = (activeSystem === 'all' || activeSystem === 'digestive') && crossSectionDepth > 25;
  const isSpecializedVisible = activeSystem === 'all' || activeSystem === 'specialized';

  // Base opacity calculations based on peel depth
  const skinOpacity = Math.max(0.08, 1 - crossSectionDepth / 80);
  const internalOpacity = Math.min(1, 0.3 + (crossSectionDepth / 100) * 0.7);

  // Palette adjustments for X-Ray / Thermal modes
  const isXray = viewMode === 'xray';
  const isThermal = viewMode === 'thermal';

  const boneStroke = isXray ? '#E0F2FE' : isThermal ? '#FDE047' : '#E2E8F0';
  const boneFill = isXray ? 'rgba(56, 189, 248, 0.25)' : isThermal ? 'rgba(234, 179, 8, 0.3)' : 'rgba(226, 232, 240, 0.25)';
  
  const muscleFill = isXray ? 'rgba(14, 165, 233, 0.2)' : isThermal ? 'rgba(239, 68, 68, 0.5)' : 'rgba(239, 68, 68, 0.35)';
  const muscleStroke = isXray ? '#38BDF8' : isThermal ? '#EF4444' : '#F87171';
  
  const heartFill = isXray ? '#38BDF8' : isThermal ? '#EF4444' : '#DC2626';
  const vesselRed = isXray ? '#7DD3FC' : isThermal ? '#F87171' : '#EF4444';
  const vesselBlue = isXray ? '#0284C7' : isThermal ? '#3B82F6' : '#2563EB';
  
  const nerveStroke = isXray ? '#FDE047' : isThermal ? '#F59E0B' : '#FACC15';
  const nerveGlow = isXray ? '#FEF08A' : isThermal ? '#FBBF24' : '#FDE047';
  
  const lungFill = isXray ? 'rgba(6, 182, 212, 0.3)' : isThermal ? 'rgba(59, 130, 246, 0.35)' : 'rgba(6, 182, 212, 0.3)';
  const visceraFill = isXray ? 'rgba(168, 85, 247, 0.25)' : isThermal ? 'rgba(249, 115, 22, 0.4)' : 'rgba(16, 185, 129, 0.3)';
  const skinFill = isXray ? 'rgba(15, 23, 42, 0.4)' : isThermal ? 'rgba(30, 58, 138, 0.3)' : 'rgba(30, 41, 59, 0.45)';
  const skinStroke = isXray ? '#0284C7' : isThermal ? '#38BDF8' : '#475569';

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-h-[520px] transition-all duration-300 drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Grid Filter */}
          <pattern id="diag-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(148, 163, 184, 0.05)" strokeWidth="1" />
          </pattern>

          {/* Glow filter */}
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shading gradients */}
          <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="sharkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Background Coordinate Lines */}
        <rect width="800" height="600" fill="url(#diag-grid)" />
        <line x1="50" y1="300" x2="750" y2="300" stroke="rgba(148, 163, 184, 0.08)" strokeDasharray="4,4" />
        <line x1="400" y1="50" x2="400" y2="550" stroke="rgba(148, 163, 184, 0.08)" strokeDasharray="4,4" />

        {/* ========================================================================= */}
        {/* HUMAN (HOMO SAPIENS) SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'human' && (
          <g transform="translate(0, 0)">
            {/* Skin Outline */}
            {isSkinVisible && (
              <path
                d="M 400 45 C 375 45 365 65 365 95 C 365 125 380 140 385 155 C 360 165 330 190 320 230 C 310 270 305 340 295 420 C 290 440 305 450 315 435 C 325 380 335 300 345 270 L 350 360 C 345 420 340 500 340 560 C 340 575 365 575 365 560 L 385 410 L 400 375 L 415 410 L 435 560 C 435 575 460 575 460 560 C 460 500 455 420 450 360 L 455 270 C 465 300 475 380 485 435 C 495 450 510 440 505 420 C 495 340 490 270 480 230 C 470 190 440 165 415 155 C 420 140 435 125 435 95 C 435 65 425 45 400 45 Z"
                fill={skinFill}
                stroke={skinStroke}
                strokeWidth="2"
                opacity={skinOpacity}
                className="transition-opacity duration-300"
              />
            )}

            {/* Muscular System */}
            {isMusclesVisible && (
              <g opacity={internalOpacity}>
                {/* Pectoralis Major & Deltoids */}
                <path d="M 365 170 C 385 180 398 185 400 200 C 402 185 415 180 435 170 C 425 210 405 220 400 220 C 395 220 375 210 365 170 Z" fill={muscleFill} stroke={muscleStroke} strokeWidth="1.5" />
                {/* Abdominal Rectus */}
                <rect x="382" y="225" width="36" height="65" rx="4" fill={muscleFill} stroke={muscleStroke} strokeWidth="1" strokeDasharray="18,3" />
                {/* Quadriceps */}
                <path d="M 355 380 C 350 420 350 460 360 490 C 375 490 380 440 380 380 Z" fill={muscleFill} stroke={muscleStroke} strokeWidth="1" />
                <path d="M 445 380 C 450 420 450 460 440 490 C 425 490 420 440 420 380 Z" fill={muscleFill} stroke={muscleStroke} strokeWidth="1" />
                {/* Biceps & Forearms */}
                <path d="M 335 220 C 325 260 320 290 315 330" stroke={muscleStroke} strokeWidth="8" strokeLinecap="round" opacity="0.7" />
                <path d="M 465 220 C 475 260 480 290 485 330" stroke={muscleStroke} strokeWidth="8" strokeLinecap="round" opacity="0.7" />
              </g>
            )}

            {/* Skeletal Framework */}
            {isSkeletonVisible && (
              <g opacity={internalOpacity}>
                {/* Cranium & Mandible */}
                <ellipse cx="400" cy="88" rx="28" ry="32" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
                <path d="M 385 110 C 390 128 410 128 415 110" fill="none" stroke={boneStroke} strokeWidth="2" />
                {/* Vertebral Column */}
                <path d="M 400 120 L 400 330" stroke={boneStroke} strokeWidth="5" strokeDasharray="3,3" />
                {/* Clavicles & Rib Cage */}
                <path d="M 350 160 Q 400 165 450 160" fill="none" stroke={boneStroke} strokeWidth="2.5" />
                <ellipse cx="400" cy="205" rx="35" ry="30" fill="none" stroke={boneStroke} strokeWidth="2" strokeDasharray="6,4" />
                {/* Pelvis */}
                <path d="M 365 310 C 365 340 385 355 400 345 C 415 355 435 340 435 310 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
                {/* Femurs & Tibias */}
                <line x1="375" y1="345" x2="365" y2="465" stroke={boneStroke} strokeWidth="4" />
                <line x1="425" y1="345" x2="435" y2="465" stroke={boneStroke} strokeWidth="4" />
                <line x1="365" y1="475" x2="355" y2="550" stroke={boneStroke} strokeWidth="3.5" />
                <line x1="435" y1="475" x2="445" y2="550" stroke={boneStroke} strokeWidth="3.5" />
              </g>
            )}

            {/* Respiratory System (Lungs & Bronchi) */}
            {isRespiratoryVisible && (
              <g opacity={internalOpacity}>
                {/* Trachea */}
                <line x1="400" y1="130" x2="400" y2="175" stroke="#38BDF8" strokeWidth="3" strokeDasharray="2,2" />
                {/* Left & Right Lungs */}
                <path d="M 395 180 C 370 180 365 210 370 235 C 380 245 395 240 395 190 Z" fill={lungFill} stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M 405 180 C 430 180 435 210 430 235 C 420 245 405 240 405 190 Z" fill={lungFill} stroke="#38BDF8" strokeWidth="1.5" />
              </g>
            )}

            {/* Circulatory System (Heart & Major Vessels) */}
            {isCirculatoryVisible && (
              <g opacity={internalOpacity}>
                {/* Heart Chambers */}
                <path d="M 405 195 C 400 185 388 190 390 202 C 390 215 405 225 405 225 C 405 225 420 215 420 202 C 422 190 410 185 405 195 Z" fill={heartFill} stroke="#EF4444" strokeWidth="2" filter="url(#glow-cyan)" />
                {/* Aorta Arch & Descending Aorta */}
                <path d="M 405 190 Q 402 170 410 165 L 412 140" fill="none" stroke={vesselRed} strokeWidth="2.5" />
                <path d="M 405 220 L 405 330 L 375 420 L 365 520" fill="none" stroke={vesselRed} strokeWidth="1.5" />
                <path d="M 405 220 L 405 330 L 435 420 L 445 520" fill="none" stroke={vesselBlue} strokeWidth="1.5" />
              </g>
            )}

            {/* Digestive System (Liver, Stomach, Intestines) */}
            {isDigestiveVisible && (
              <g opacity={internalOpacity}>
                {/* Liver */}
                <path d="M 375 245 C 395 240 425 245 428 260 C 420 270 380 275 375 245 Z" fill={visceraFill} stroke="#10B981" strokeWidth="1.5" />
                {/* Stomach */}
                <path d="M 408 250 C 422 250 425 270 415 280 C 405 285 400 275 408 250 Z" fill="rgba(245, 158, 11, 0.4)" stroke="#F59E0B" strokeWidth="1.5" />
                {/* Intestines */}
                <ellipse cx="400" cy="300" rx="22" ry="18" fill="rgba(16, 185, 129, 0.25)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,2" />
              </g>
            )}

            {/* Nervous System (Brain & Spinal Cord) */}
            {isNervousVisible && (
              <g opacity={internalOpacity} filter="url(#glow-amber)">
                {/* Cerebral Cortex */}
                <ellipse cx="400" cy="82" rx="20" ry="18" fill="none" stroke={nerveStroke} strokeWidth="2" strokeDasharray="3,1" />
                <path d="M 390 82 Q 400 78 410 82 M 392 90 Q 400 95 408 90" stroke={nerveGlow} strokeWidth="1.5" fill="none" />
                {/* Spinal Cord Trunk */}
                <line x1="400" y1="100" x2="400" y2="330" stroke={nerveStroke} strokeWidth="2.5" />
                {/* Peripheral Nerves */}
                <path d="M 400 160 L 330 250 M 400 160 L 470 250 M 400 320 L 360 450 M 400 320 L 440 450" stroke={nerveGlow} strokeWidth="1" opacity="0.6" strokeDasharray="4,4" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* BLUE WHALE SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'whale' && (
          <g transform="translate(0, 0)">
            {/* Whale Body Contour */}
            {isSkinVisible && (
              <path
                d="M 120 280 C 140 200 240 180 380 180 C 560 180 660 250 720 300 C 740 280 770 260 780 270 C 765 295 765 315 780 340 C 765 345 740 330 720 315 C 650 350 540 380 380 380 C 220 380 140 360 120 280 Z"
                fill="url(#whaleGradient)"
                stroke={skinStroke}
                strokeWidth="2.5"
                opacity={skinOpacity}
              />
            )}

            {/* Ventral Throat Grooves (Accordion Pleats) */}
            {isSpecializedVisible && (
              <g opacity={skinOpacity}>
                <path d="M 150 290 Q 260 360 380 370" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />
                <path d="M 160 305 Q 260 365 370 372" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />
                <path d="M 180 320 Q 260 370 350 375" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />
              </g>
            )}

            {/* Skeletal (Massive Cranium, Vertebrae & Fluke) */}
            {isSkeletonVisible && (
              <g opacity={internalOpacity}>
                {/* Rostrum & Mandible */}
                <path d="M 130 275 L 240 230 L 260 280 L 140 290 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
                {/* Massive Vertebral Column */}
                <path d="M 270 260 Q 480 250 710 305" fill="none" stroke={boneStroke} strokeWidth="9" strokeDasharray="14,3" />
                {/* Ribcage */}
                <path d="M 310 260 C 310 330 380 340 420 310" fill="none" stroke={boneStroke} strokeWidth="3" strokeDasharray="5,5" />
                {/* Vestigial Pelvis Bone */}
                <ellipse cx="560" cy="330" rx="14" ry="4" fill={boneFill} stroke={boneStroke} strokeWidth="1.5" />
              </g>
            )}

            {/* Baleen Keratin Filter Fringe */}
            {isDigestiveVisible && (
              <path d="M 150 270 L 230 255 L 230 280 Z" fill="rgba(251, 191, 36, 0.4)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2,2" />
            )}

            {/* 600 kg Colossal Heart */}
            {isCirculatoryVisible && (
              <g opacity={internalOpacity}>
                <circle cx="340" cy="300" r="30" fill={heartFill} stroke="#EF4444" strokeWidth="3" filter="url(#glow-cyan)" />
                <path d="M 340 275 Q 420 240 560 260" fill="none" stroke={vesselRed} strokeWidth="4" />
                <path d="M 340 315 Q 440 320 620 290" fill="none" stroke={vesselBlue} strokeWidth="3" />
              </g>
            )}

            {/* Massive Diving Lungs & Dorsal Blowholes */}
            {isRespiratoryVisible && (
              <g opacity={internalOpacity}>
                {/* Dorsal Blowhole Tube */}
                <line x1="260" y1="185" x2="300" y2="240" stroke="#06B6D4" strokeWidth="3" strokeDasharray="3,3" />
                {/* Lungs */}
                <ellipse cx="380" cy="265" rx="55" ry="32" fill={lungFill} stroke="#06B6D4" strokeWidth="2" />
              </g>
            )}

            {/* Multi-Chambered Stomach & Intestinal Coil */}
            {isDigestiveVisible && (
              <ellipse cx="460" cy="300" rx="45" ry="28" fill={visceraFill} stroke="#10B981" strokeWidth="2" />
            )}

            {/* Acoustic Cranium & Brain */}
            {isNervousVisible && (
              <circle cx="260" cy="245" r="14" fill="rgba(250, 204, 21, 0.4)" stroke={nerveStroke} strokeWidth="2" filter="url(#glow-amber)" />
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* SHARK (GREAT WHITE SHARK) SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'shark' && (
          <g transform="translate(0, 0)">
            {/* Shark Hydrodynamic Body */}
            {isSkinVisible && (
              <path
                d="M 100 300 C 130 220 260 190 420 200 C 560 210 650 260 700 290 L 760 190 L 740 295 L 770 380 L 700 315 C 620 340 520 360 380 360 C 220 360 140 350 100 300 Z"
                fill="url(#sharkGradient)"
                stroke={skinStroke}
                strokeWidth="2.5"
                opacity={skinOpacity}
              />
            )}
            {/* Dorsal Fin */}
            {isSkinVisible && (
              <path d="M 370 200 L 420 100 L 450 205 Z" fill={skinFill} stroke={skinStroke} strokeWidth="2" opacity={skinOpacity} />
            )}
            {/* Pectoral Fin */}
            {isSkinVisible && (
              <path d="M 280 330 L 320 440 L 360 345 Z" fill={skinFill} stroke={skinStroke} strokeWidth="2" opacity={skinOpacity} />
            )}

            {/* Ampullae of Lorenzini (Electro-sensor pore cluster on snout) */}
            {isNervousVisible && (
              <g filter="url(#glow-amber)">
                <circle cx="120" cy="285" r="2.5" fill="#FACC15" />
                <circle cx="130" cy="275" r="2.5" fill="#FACC15" />
                <circle cx="140" cy="288" r="2.5" fill="#FACC15" />
                <circle cx="125" cy="305" r="2.5" fill="#FACC15" />
                <circle cx="145" cy="300" r="2.5" fill="#FACC15" />
              </g>
            )}

            {/* Cartilaginous Skeleton & Jaws */}
            {isSkeletonVisible && (
              <g opacity={internalOpacity}>
                {/* Chondrocranium & Serrated Jaws */}
                <ellipse cx="180" cy="285" rx="35" ry="20" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
                <path d="M 150 310 L 190 310 L 175 325 Z" fill="#FEF08A" stroke="#EAB308" strokeWidth="1.5" />
                {/* Cartilage Vertebral Axis */}
                <path d="M 210 275 Q 450 260 690 300" fill="none" stroke={boneStroke} strokeWidth="7" strokeDasharray="10,3" />
              </g>
            )}

            {/* 5 Gill Slits */}
            {isRespiratoryVisible && (
              <g opacity={internalOpacity}>
                <line x1="240" y1="270" x2="240" y2="320" stroke="#06B6D4" strokeWidth="3" />
                <line x1="248" y1="272" x2="248" y2="318" stroke="#06B6D4" strokeWidth="3" />
                <line x1="256" y1="274" x2="256" y2="316" stroke="#06B6D4" strokeWidth="3" />
                <line x1="264" y1="276" x2="264" y2="314" stroke="#06B6D4" strokeWidth="3" />
                <line x1="272" y1="278" x2="272" y2="312" stroke="#06B6D4" strokeWidth="3" />
              </g>
            )}

            {/* Squalene-Rich Giant Liver (28% Body Mass) */}
            {isDigestiveVisible && (
              <path d="M 320 280 C 360 250 480 260 520 290 C 480 330 360 335 320 280 Z" fill="rgba(245, 158, 11, 0.4)" stroke="#F59E0B" strokeWidth="2" />
            )}

            {/* Regional Endothermy Retia Mirabilia (Red Muscle Core) */}
            {isCirculatoryVisible && (
              <g opacity={internalOpacity}>
                <circle cx="285" cy="305" r="16" fill={heartFill} stroke="#EF4444" strokeWidth="2" />
                <ellipse cx="410" cy="275" rx="40" ry="15" fill="rgba(239, 68, 68, 0.5)" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4,2" />
              </g>
            )}

            {/* Spiral Valve Intestine */}
            {isDigestiveVisible && (
              <ellipse cx="550" cy="300" rx="20" ry="12" fill={visceraFill} stroke="#10B981" strokeWidth="1.5" strokeDasharray="3,2" />
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* HONEYBEE (APIS MELLIFERA) SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'bee' && (
          <g transform="translate(0, 0)">
            {/* Exoskeleton Tagmata: Head, Thorax, Abdomen */}
            {isSkinVisible && (
              <g opacity={skinOpacity}>
                {/* Head */}
                <ellipse cx="200" cy="300" rx="45" ry="50" fill="rgba(30, 41, 59, 0.7)" stroke={skinStroke} strokeWidth="2" />
                {/* Thorax */}
                <ellipse cx="320" cy="300" rx="65" ry="60" fill="rgba(30, 41, 59, 0.8)" stroke={skinStroke} strokeWidth="2" />
                {/* Abdomen with Yellow-Black Stripes */}
                <ellipse cx="500" cy="300" rx="110" ry="65" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" strokeWidth="2.5" />
                {/* Abdominal Tergite Stripes */}
                <line x1="440" y1="240" x2="440" y2="360" stroke="#0F172A" strokeWidth="12" />
                <line x1="480" y1="236" x2="480" y2="364" stroke="#0F172A" strokeWidth="12" />
                <line x1="520" y1="238" x2="520" y2="362" stroke="#0F172A" strokeWidth="12" />
                <line x1="560" y1="245" x2="560" y2="355" stroke="#0F172A" strokeWidth="12" />
                {/* Wings */}
                <ellipse cx="340" cy="190" rx="90" ry="35" fill="rgba(224, 242, 254, 0.25)" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(-20 340 190)" />
              </g>
            )}

            {/* Dichroic Compound Eye */}
            {isNervousVisible && (
              <ellipse cx="180" cy="285" rx="18" ry="28" fill="rgba(14, 165, 233, 0.4)" stroke="#0284C7" strokeWidth="2" strokeDasharray="3,1" />
            )}

            {/* Thoracic Asynchronous Indirect Flight Muscles */}
            {isMusclesVisible && (
              <g opacity={internalOpacity}>
                <rect x="280" y="260" width="80" height="80" rx="12" fill={muscleFill} stroke={muscleStroke} strokeWidth="2" />
                <line x1="290" y1="280" x2="350" y2="280" stroke="#EF4444" strokeWidth="2" />
                <line x1="290" y1="300" x2="350" y2="300" stroke="#EF4444" strokeWidth="2" />
                <line x1="290" y1="320" x2="350" y2="320" stroke="#EF4444" strokeWidth="2" />
              </g>
            )}

            {/* Honey Stomach (Crop) & Proventriculus */}
            {isDigestiveVisible && (
              <ellipse cx="440" cy="300" rx="32" ry="24" fill="rgba(251, 191, 36, 0.6)" stroke="#D97706" strokeWidth="2" />
            )}

            {/* Pulsatile Dorsal Vessel (Heart) */}
            {isCirculatoryVisible && (
              <line x1="280" y1="250" x2="580" y2="250" stroke="#EF4444" strokeWidth="4" strokeDasharray="8,4" />
            )}

            {/* Tracheal Respiration Air Sacs */}
            {isRespiratoryVisible && (
              <g opacity={internalOpacity}>
                <circle cx="490" cy="275" r="14" fill={lungFill} stroke="#06B6D4" strokeWidth="1.5" />
                <circle cx="530" cy="275" r="14" fill={lungFill} stroke="#06B6D4" strokeWidth="1.5" />
              </g>
            )}

            {/* Stinger Apparatus & Venom Reservoir */}
            {isSpecializedVisible && (
              <g opacity={internalOpacity}>
                <circle cx="590" cy="300" r="10" fill="rgba(239, 68, 68, 0.6)" stroke="#DC2626" strokeWidth="1.5" />
                <polygon points="605,296 635,300 605,304" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
              </g>
            )}

            {/* Corbicula Pollen Basket on Hind Leg */}
            {isSpecializedVisible && (
              <ellipse cx="380" cy="450" rx="14" ry="22" fill="rgba(251, 191, 36, 0.8)" stroke="#D97706" strokeWidth="2" />
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* PEREGRINE FALCON SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'falcon' && (
          <g transform="translate(0, 0)">
            {/* Aerodynamic Body Contour */}
            {isSkinVisible && (
              <path
                d="M 180 240 C 220 180 320 180 440 220 C 560 260 650 340 700 420 L 640 440 C 560 380 450 360 350 360 C 250 360 200 320 180 240 Z"
                fill={skinFill}
                stroke={skinStroke}
                strokeWidth="2.5"
                opacity={skinOpacity}
              />
            )}

            {/* Deep Keeled Sternum & Skeleton */}
            {isSkeletonVisible && (
              <g opacity={internalOpacity}>
                <polygon points="300,260 380,260 340,350" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
                <circle cx="210" cy="210" r="22" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
                <path d="M 230 220 Q 420 250 580 350" fill="none" stroke={boneStroke} strokeWidth="6" strokeDasharray="8,3" />
              </g>
            )}

            {/* Pectoralis Major Muscle Group (25% body mass) */}
            {isMusclesVisible && (
              <path d="M 290 260 C 340 250 400 270 410 320 C 370 350 310 340 290 260 Z" fill={muscleFill} stroke={muscleStroke} strokeWidth="2" />
            )}

            {/* Unidirectional 9 Air Sacs & Lungs */}
            {isRespiratoryVisible && (
              <g opacity={internalOpacity}>
                <ellipse cx="380" cy="270" rx="28" ry="18" fill={lungFill} stroke="#06B6D4" strokeWidth="2" />
                <circle cx="340" cy="250" r="14" fill="rgba(6, 182, 212, 0.4)" stroke="#06B6D4" strokeWidth="1.5" />
                <circle cx="430" cy="290" r="16" fill="rgba(6, 182, 212, 0.4)" stroke="#06B6D4" strokeWidth="1.5" />
              </g>
            )}

            {/* High-Pressure 4-Chambered Heart (600-900 BPM) */}
            {isCirculatoryVisible && (
              <circle cx="330" cy="285" r="18" fill={heartFill} stroke="#EF4444" strokeWidth="2" filter="url(#glow-cyan)" />
            )}

            {/* Deep Fovea Raptor Eye & Brain */}
            {isNervousVisible && (
              <g filter="url(#glow-amber)">
                <circle cx="205" cy="205" r="10" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                <circle cx="205" cy="205" r="4" fill="#0F172A" />
              </g>
            )}

            {/* Gizzard & Digestive Tract */}
            {isDigestiveVisible && (
              <circle cx="440" cy="320" r="20" fill={visceraFill} stroke="#10B981" strokeWidth="2" />
            )}

            {/* Locking Raptorial Talons */}
            {isSpecializedVisible && (
              <path d="M 440 370 L 460 430 L 440 445 M 460 430 L 475 440 M 460 430 L 485 430" stroke="#F59E0B" strokeWidth="3" fill="none" />
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* OCTOPUS (GIANT PACIFIC OCTOPUS) SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'octopus' && (
          <g transform="translate(0, 0)">
            {/* Mantle Bulb */}
            {isSkinVisible && (
              <ellipse cx="400" cy="220" rx="90" ry="110" fill={skinFill} stroke={skinStroke} strokeWidth="2.5" opacity={skinOpacity} />
            )}

            {/* 8 Radial Arms */}
            {isSkinVisible && (
              <g stroke={skinStroke} strokeWidth="16" fill="none" opacity={skinOpacity} strokeLinecap="round">
                <path d="M 350 310 Q 250 380 160 480" />
                <path d="M 370 320 Q 300 420 260 520" />
                <path d="M 390 330 Q 370 450 360 550" />
                <path d="M 410 330 Q 430 450 440 550" />
                <path d="M 430 320 Q 500 420 540 520" />
                <path d="M 450 310 Q 550 380 640 480" />
              </g>
            )}

            {/* Three Hearts (Systemic + 2 Branchial) */}
            {isCirculatoryVisible && (
              <g opacity={internalOpacity}>
                {/* Systemic Central Heart */}
                <circle cx="400" cy="230" r="18" fill={heartFill} stroke="#EF4444" strokeWidth="2" filter="url(#glow-cyan)" />
                {/* 2 Branchial (Gill) Hearts */}
                <circle cx="350" cy="210" r="12" fill="rgba(56, 189, 248, 0.8)" stroke="#0284C7" strokeWidth="2" />
                <circle cx="450" cy="210" r="12" fill="rgba(56, 189, 248, 0.8)" stroke="#0284C7" strokeWidth="2" />
              </g>
            )}

            {/* Ctenidia (Feather Gills) */}
            {isRespiratoryVisible && (
              <g opacity={internalOpacity}>
                <ellipse cx="340" cy="180" rx="14" ry="24" fill={lungFill} stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3,2" />
                <ellipse cx="460" cy="180" rx="14" ry="24" fill={lungFill} stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3,2" />
              </g>
            )}

            {/* Central Brain & Radial Arm Nerve Cords */}
            {isNervousVisible && (
              <g filter="url(#glow-amber)">
                {/* Circumesophageal Brain */}
                <ellipse cx="400" cy="285" rx="20" ry="16" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                {/* Arm Nerve Cords (60% neurons in arms) */}
                <path d="M 390 295 Q 260 380 170 475" stroke="#FDE047" strokeWidth="2" fill="none" strokeDasharray="4,3" />
                <path d="M 400 295 Q 370 445 360 545" stroke="#FDE047" strokeWidth="2" fill="none" strokeDasharray="4,3" />
                <path d="M 410 295 Q 540 380 630 475" stroke="#FDE047" strokeWidth="2" fill="none" strokeDasharray="4,3" />
              </g>
            )}

            {/* Chitinous Parrot Beak (Only hard part) */}
            {isDigestiveVisible && (
              <polygon points="392,310 408,310 400,325" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            )}

            {/* Ink Sac & Siphon */}
            {isSpecializedVisible && (
              <g opacity={internalOpacity}>
                <ellipse cx="400" cy="160" rx="22" ry="16" fill="#0F172A" stroke="#475569" strokeWidth="2" />
                <polygon points="385,260 415,260 405,290 395,290" fill="rgba(14, 165, 233, 0.4)" stroke="#0284C7" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* GREEN SEA TURTLE SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'turtle' && (
          <g transform="translate(0, 0)">
            {/* Streamlined Fused Carapace */}
            {isSkinVisible && (
              <ellipse cx="400" cy="300" rx="140" ry="105" fill={skinFill} stroke={skinStroke} strokeWidth="3" opacity={skinOpacity} />
            )}

            {/* Forelimb Wing Flippers */}
            {isMusclesVisible && (
              <g opacity={skinOpacity}>
                <path d="M 320 240 Q 200 160 120 220 Q 220 280 310 280 Z" fill={muscleFill} stroke={muscleStroke} strokeWidth="2" />
                <path d="M 480 240 Q 600 160 680 220 Q 580 280 490 280 Z" fill={muscleFill} stroke={muscleStroke} strokeWidth="2" />
              </g>
            )}

            {/* Fused Rib Carapace & Internal Shoulder Girdle */}
            {isSkeletonVisible && (
              <g opacity={internalOpacity}>
                <ellipse cx="400" cy="300" rx="120" ry="85" fill={boneFill} stroke={boneStroke} strokeWidth="2" strokeDasharray="8,4" />
                {/* Vertebral Axis */}
                <line x1="280" y1="300" x2="520" y2="300" stroke={boneStroke} strokeWidth="6" strokeDasharray="8,3" />
                {/* Cranium & Keratin Tomium Beak */}
                <ellipse cx="230" cy="300" rx="30" ry="22" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
              </g>
            )}

            {/* Three-Chambered Diving Heart (Right-to-Left Shunt) */}
            {isCirculatoryVisible && (
              <circle cx="360" cy="300" r="22" fill={heartFill} stroke="#EF4444" strokeWidth="2.5" filter="url(#glow-cyan)" />
            )}

            {/* Multicameral Lungs (5-Hour Dive Capacity) */}
            {isRespiratoryVisible && (
              <ellipse cx="420" cy="270" rx="55" ry="28" fill={lungFill} stroke="#06B6D4" strokeWidth="2" />
            )}

            {/* Herbivore Fermenting Cecum & Gut */}
            {isDigestiveVisible && (
              <ellipse cx="430" cy="330" rx="50" ry="30" fill="rgba(16, 185, 129, 0.4)" stroke="#10B981" strokeWidth="2" />
            )}

            {/* Lachrymal Salt Gland (Behind Orbit) */}
            {isSpecializedVisible && (
              <circle cx="235" cy="285" r="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* VENUS FLYTRAP (BOTANICAL CARNIVORE) SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'plant' && (
          <g transform="translate(0, 0)">
            {/* Photosynthetic Petiole */}
            {isSkinVisible && (
              <path d="M 400 480 Q 400 360 400 280" stroke="#16A34A" strokeWidth="24" fill="none" opacity={skinOpacity} />
            )}

            {/* Bi-Stable Snap Trap Lobes */}
            {isMusclesVisible && (
              <g opacity={internalOpacity}>
                <ellipse cx="360" cy="220" rx="55" ry="75" fill="rgba(34, 197, 94, 0.3)" stroke="#16A34A" strokeWidth="3" transform="rotate(-15 360 220)" />
                <ellipse cx="440" cy="220" rx="55" ry="75" fill="rgba(34, 197, 94, 0.3)" stroke="#16A34A" strokeWidth="3" transform="rotate(15 440 220)" />
              </g>
            )}

            {/* Red Digestive Gland Secretory Zone */}
            {isDigestiveVisible && (
              <g opacity={internalOpacity}>
                <ellipse cx="365" cy="220" rx="35" ry="50" fill="rgba(239, 68, 68, 0.5)" stroke="#DC2626" strokeWidth="1.5" transform="rotate(-15 365 220)" />
                <ellipse cx="435" cy="220" rx="35" ry="50" fill="rgba(239, 68, 68, 0.5)" stroke="#DC2626" strokeWidth="1.5" transform="rotate(15 435 220)" />
              </g>
            )}

            {/* 3 Mechanosensitive Trigger Hairs per Lobe */}
            {isNervousVisible && (
              <g stroke="#FEF08A" strokeWidth="2" filter="url(#glow-amber)">
                <line x1="365" y1="200" x2="355" y2="185" />
                <line x1="370" y1="220" x2="360" y2="208" />
                <line x1="365" y1="240" x2="355" y2="230" />
                <line x1="435" y1="200" x2="445" y2="185" />
                <line x1="430" y1="220" x2="440" y2="208" />
                <line x1="435" y1="240" x2="445" y2="230" />
              </g>
            )}

            {/* Xylem & Phloem Vascular Cylinder */}
            {isCirculatoryVisible && (
              <line x1="400" y1="280" x2="400" y2="480" stroke="#38BDF8" strokeWidth="4" strokeDasharray="4,2" />
            )}

            {/* Marginal Cilia Interlocking Teeth */}
            {isSpecializedVisible && (
              <g stroke="#86EFAC" strokeWidth="2" fill="none">
                <line x1="320" y1="160" x2="305" y2="145" />
                <line x1="310" y1="190" x2="290" y2="180" />
                <line x1="310" y1="230" x2="290" y2="230" />
                <line x1="320" y1="270" x2="305" y2="280" />
                <line x1="480" y1="160" x2="495" y2="145" />
                <line x1="490" y1="190" x2="510" y2="180" />
                <line x1="490" y1="230" x2="510" y2="230" />
                <line x1="480" y1="270" x2="495" y2="280" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* TARDIGRADE (WATER BEAR) SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'tardigrade' && (
          <g transform="translate(0, 0)">
            {/* Plump Eutelic Body Silhouette with 4 Trunk Segments */}
            {isSkinVisible && (
              <path
                d="M 220 300 C 220 220 280 200 400 200 C 520 200 580 230 600 300 C 580 370 520 400 400 400 C 280 400 220 380 220 300 Z"
                fill={skinFill}
                stroke={skinStroke}
                strokeWidth="2.5"
                opacity={skinOpacity}
              />
            )}

            {/* 8 Lobopodial Legs with Claws */}
            {isMusclesVisible && (
              <g stroke={skinStroke} strokeWidth="12" fill="none" opacity={skinOpacity} strokeLinecap="round">
                <line x1="280" y1="380" x2="270" y2="440" />
                <line x1="360" y1="390" x2="350" y2="450" />
                <line x1="440" y1="390" x2="430" y2="450" />
                <line x1="530" y1="380" x2="550" y2="440" />
              </g>
            )}

            {/* Buccal Stylets & Pharyngeal Pumping Bulb */}
            {isDigestiveVisible && (
              <g opacity={internalOpacity}>
                <line x1="200" y1="300" x2="250" y2="300" stroke="#FDE047" strokeWidth="4" />
                <circle cx="270" cy="300" r="16" fill="rgba(245, 158, 11, 0.6)" stroke="#F59E0B" strokeWidth="2" />
                {/* Midgut */}
                <ellipse cx="400" cy="300" rx="90" ry="40" fill={visceraFill} stroke="#10B981" strokeWidth="2" />
              </g>
            )}

            {/* Bilobed Brain & 4 Ventral Trunk Ganglia */}
            {isNervousVisible && (
              <g filter="url(#glow-amber)">
                <ellipse cx="260" cy="265" rx="14" ry="10" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                <circle cx="320" cy="330" r="6" fill="#FACC15" />
                <circle cx="380" cy="330" r="6" fill="#FACC15" />
                <circle cx="440" cy="330" r="6" fill="#FACC15" />
                <circle cx="500" cy="330" r="6" fill="#FACC15" />
                <line x1="260" y1="270" x2="500" y2="330" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="3,2" />
              </g>
            )}

            {/* TDP Protein Vitrification Bioglass Matrix */}
            {isSpecializedVisible && (
              <rect x="250" y="220" width="300" height="160" rx="30" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="6,6" opacity="0.6" />
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* MOON JELLYFISH SCHEMATIC */}
        {/* ========================================================================= */}
        {visualType === 'jellyfish' && (
          <g transform="translate(0, 0)">
            {/* Translucent Umbrella Bell & Mesoglea Matrix */}
            {isSkinVisible && (
              <path
                d="M 200 320 C 200 160 300 120 400 120 C 500 120 600 160 600 320 C 520 340 480 330 400 330 C 320 330 280 340 200 320 Z"
                fill="rgba(56, 189, 248, 0.15)"
                stroke="#38BDF8"
                strokeWidth="2.5"
                opacity={skinOpacity}
              />
            )}

            {/* 4 Horseshoe-Shaped Gastric Pouches (Cloverleaf) */}
            {isDigestiveVisible && (
              <g opacity={internalOpacity}>
                <path d="M 360 210 C 340 180 340 240 370 240 C 380 240 380 220 360 210 Z" fill="rgba(236, 72, 153, 0.4)" stroke="#EC4899" strokeWidth="2" />
                <path d="M 440 210 C 460 180 460 240 430 240 C 420 240 420 220 440 210 Z" fill="rgba(236, 72, 153, 0.4)" stroke="#EC4899" strokeWidth="2" />
                <path d="M 380 180 C 360 160 400 150 410 180 Z" fill="rgba(236, 72, 153, 0.4)" stroke="#EC4899" strokeWidth="2" />
                <path d="M 380 250 C 360 270 420 270 400 245 Z" fill="rgba(236, 72, 153, 0.4)" stroke="#EC4899" strokeWidth="2" />
              </g>
            )}

            {/* 8 Rhopalia Sensory Pacemakers along rim */}
            {isNervousVisible && (
              <g filter="url(#glow-amber)">
                <circle cx="210" cy="320" r="5" fill="#FACC15" />
                <circle cx="260" cy="330" r="5" fill="#FACC15" />
                <circle cx="320" cy="332" r="5" fill="#FACC15" />
                <circle cx="400" cy="330" r="5" fill="#FACC15" />
                <circle cx="480" cy="332" r="5" fill="#FACC15" />
                <circle cx="540" cy="330" r="5" fill="#FACC15" />
                <circle cx="590" cy="320" r="5" fill="#FACC15" />
              </g>
            )}

            {/* Frilly Oral Arms & Tentacles */}
            {isSpecializedVisible && (
              <g stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.6">
                <path d="M 370 330 Q 340 440 330 520" />
                <path d="M 390 330 Q 380 460 390 540" />
                <path d="M 410 330 Q 420 460 410 540" />
                <path d="M 430 330 Q 460 440 470 520" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================================= */}
        {/* GENERIC ORGANISM CROSS-SECTION SCHEMATIC */}
        {/* ========================================================================= */}
        {(visualType === 'generic' || !['human', 'whale', 'shark', 'bee', 'falcon', 'octopus', 'turtle', 'plant', 'tardigrade', 'jellyfish'].includes(visualType)) && (
          <g transform="translate(0, 0)">
            {/* Symmetrical Anatomical Cross-Section Contour */}
            {isSkinVisible && (
              <path
                d="M 160 300 C 160 180 280 160 400 160 C 520 160 640 180 640 300 C 640 420 520 440 400 440 C 280 440 160 420 160 300 Z"
                fill={skinFill}
                stroke={skinStroke}
                strokeWidth="2.5"
                opacity={skinOpacity}
              />
            )}

            {/* Axial Load-Bearing Scaffold */}
            {isSkeletonVisible && (
              <g opacity={internalOpacity}>
                <line x1="220" y1="300" x2="580" y2="300" stroke={boneStroke} strokeWidth="8" strokeDasharray="12,4" />
                <ellipse cx="230" cy="300" rx="35" ry="25" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
              </g>
            )}

            {/* Cephalic Ganglion / Brain & Neural Cord */}
            {isNervousVisible && (
              <g filter="url(#glow-amber)">
                <circle cx="240" cy="275" r="16" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
                <line x1="255" y1="280" x2="560" y2="280" stroke="#FDE047" strokeWidth="3" strokeDasharray="5,2" />
              </g>
            )}

            {/* Cardiovascular Heart & Vascular Conduits */}
            {isCirculatoryVisible && (
              <g opacity={internalOpacity}>
                <circle cx="340" cy="315" r="22" fill={heartFill} stroke="#EF4444" strokeWidth="2.5" filter="url(#glow-cyan)" />
                <line x1="340" y1="295" x2="540" y2="295" stroke={vesselRed} strokeWidth="3" />
                <line x1="340" y1="335" x2="540" y2="335" stroke={vesselBlue} strokeWidth="3" />
              </g>
            )}

            {/* Respiratory Epithelium Interface */}
            {isRespiratoryVisible && (
              <ellipse cx="320" cy="260" rx="35" ry="20" fill={lungFill} stroke="#06B6D4" strokeWidth="2" />
            )}

            {/* Gastrointestinal Digestive Lumen */}
            {isDigestiveVisible && (
              <ellipse cx="460" cy="320" rx="55" ry="30" fill={visceraFill} stroke="#10B981" strokeWidth="2" />
            )}

            {/* Specialized Niche Appendages */}
            {isSpecializedVisible && (
              <g stroke="#38BDF8" strokeWidth="2" strokeDasharray="4,2" fill="none">
                <circle cx="200" cy="300" r="18" />
                <circle cx="600" cy="300" r="18" />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
