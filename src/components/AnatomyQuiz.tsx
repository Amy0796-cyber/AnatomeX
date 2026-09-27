import React, { useState } from 'react';
import { OrganismData } from '../types/organism';
import { ALL_CURATED_ORGANISMS } from '../data/allOrganisms';
import { sound } from '../utils/audio';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export const AnatomyQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const questions = [
    {
      organism: 'Homo sapiens (Human)',
      question: 'Which anatomical structure prevents alveolar atelectasis (collapse) in human lungs by reducing surface tension?',
      options: [
        'Pulmonary surfactant secreted by Type II pneumocytes',
        'Hyaline cartilage C-rings',
        'Elastic epiglottis cartilage',
        'Ciliated goblet cell mucus sheets'
      ],
      correct: 0,
      explanation: 'Type II pneumocytes synthesize pulmonary dipalmitoylphosphatidylcholine surfactant to decrease alveolar surface tension, preventing collapse at end-expiration.'
    },
    {
      organism: 'Balaenoptera musculus (Blue Whale)',
      question: 'During prolonged deep ocean foraging dives, how does a Blue Whale conserve oxygen for its vital brain and myocardium?',
      options: [
        'By switching completely to anaerobic glycolysis in all tissues',
        'Via extreme diving bradycardia (heart rate slowing to 2–8 BPM) and vascular shunting',
        'By breathing water through microscopic pharyngeal gill slits',
        'By storing gaseous air inside its dorsal blubber layer'
      ],
      correct: 1,
      explanation: 'The mammalian dive response triggers severe bradycardia (2–8 BPM) and selective peripheral vasoconstriction, shunting blood strictly to the brain and heart.'
    },
    {
      organism: 'Carcharodon carcharias (Great White Shark)',
      question: 'What sensory organ allows a Great White Shark to detect bioelectric fields down to 1 billionth of a volt produced by prey muscle twitches?',
      options: [
        'Lateral line Weberian ossicles',
        'Ampullae of Lorenzini filled with conductive glycoprotein gel',
        'Pecten oculi vascular comb',
        'Narial baffle tubercles'
      ],
      correct: 1,
      explanation: 'Ampullae of Lorenzini are sub-dermal electroreceptors filled with high-conductivity glycoprotein gel connected to cranial nerves.'
    },
    {
      organism: 'Apis mellifera (Honeybee)',
      question: 'How do honeybee indirect flight muscles beat wings at 230 Hz without requiring a separate nerve impulse for every single contraction?',
      options: [
        'Using asynchronous stretch-activated resonance muscle physiology',
        'Through continuous high-voltage adrenaline hormone surges',
        'By storing elastic wind energy in their honey stomach',
        'Via magnetic field induction across the antennae'
      ],
      correct: 0,
      explanation: 'Asynchronous flight muscles undergo myogenic stretch-activation: when one muscle set contracts, it stretches the antagonist set, triggering automated oscillatory contractions.'
    },
    {
      organism: 'Enteroctopus dofleini (Giant Pacific Octopus)',
      question: 'Where is the majority (approximately 60%) of a Giant Pacific Octopus’s 500 million neurons located?',
      options: [
        'Inside its cartilaginous cranial capsule',
        'Distributed radially across its 8 semi-autonomous arms and sucker ganglia',
        'Within its three muscular hearts',
        'Inside its dorsal ink sac epithelium'
      ],
      correct: 1,
      explanation: 'Cephalopod intelligence is highly decentralized: ~300 million neurons reside in the arm nerve cords, allowing each tentacle to taste, feel, and make movement decisions autonomously.'
    },
    {
      organism: 'Hypsibius exemplaris (Tardigrade)',
      question: 'What molecular mechanism enables tardigrades to survive space vacuum, liquid helium (-272°C), and total desiccation during cryptobiosis?',
      options: [
        'Freezing cellular water into hard hexagonal ice spikes',
        'Replacing water with anhydrobiotic Tardigrade Disordered Proteins (TDPs) that form non-denaturing bioglass',
        'Synthesizing thick calcium carbonate shell armor',
        'Permanently shedding all cellular DNA'
      ],
      correct: 1,
      explanation: 'Tardigrades express CAHS/SAHS intrinsically disordered proteins that vitrify intracellular fluid into an amorphous biological glass, preventing organelle damage.'
    }
  ];

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQ.correct) {
      sound.playClick(1000, 0.08);
      setScore(prev => prev + 1);
    } else {
      sound.playClick(300, 0.1);
    }
  };

  const handleNext = () => {
    sound.playClick(700);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    sound.playClick(600);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-4 h-4" />
            <span className="uppercase tracking-wider">Anatomy Lab Knowledge Challenge</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-white mt-1">
            Comparative Morphology & Physiology Exam
          </h3>
        </div>

        {!isCompleted && (
          <div className="text-xs font-mono text-slate-400 tabular-nums">
            QUESTION {currentQuestionIndex + 1} / {questions.length} · SCORE: {score}
          </div>
        )}
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Specimen Target: {currentQ.organism}
            </span>
            <p className="text-base md:text-lg font-medium text-white leading-snug">
              {currentQ.question}
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correct;
              const hasAnswered = selectedAnswer !== null;

              let btnClass = 'bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800/40';
              if (hasAnswered) {
                if (isCorrect) {
                  btnClass = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200';
                } else if (isSelected) {
                  btnClass = 'bg-rose-950/40 border-rose-500/60 text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-mono">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {selectedAnswer !== null && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-in fade-in-50 duration-200">
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold block">
                Scientific Explanation
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                >
                  {currentQuestionIndex + 1 < questions.length ? 'Next Question →' : 'Complete Challenge'}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Results View */
        <div className="p-8 text-center space-y-4 bg-slate-950/80 rounded-2xl border border-slate-800">
          <Award className="w-12 h-12 text-cyan-400 mx-auto" />
          <h4 className="text-2xl font-bold font-display text-white">Anatomical Mastery Evaluation</h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            You scored <span className="text-cyan-400 font-bold text-lg font-mono">{score}</span> out of <span className="font-mono text-white">{questions.length}</span> questions correct ({Math.round((score / questions.length) * 100)}%).
          </p>

          <div className="pt-4">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Anatomy Challenge
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
