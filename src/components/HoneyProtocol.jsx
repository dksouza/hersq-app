import React, { useState, useEffect } from 'react';
import { Sparkles, CheckSquare, Square, Play, Pause, RotateCcw, Award, CheckCircle2, Droplet, Flame, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HoneyProtocol() {
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false]);
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const steps = [
    {
      title: 'Étape 1 : Dosage de la Synergique Miel Pur Bio + Bicarbonate',
      detail: 'Mélanger 1 cuillère à café de miel pur bio non filtré avec 1/4 de cuillère à café de bicarbonate de soude alimentaire ultrafin dans de l\'eau tiède (37°C).'
    },
    {
      title: 'Étape 2 : Préparation Cutanée & Délicat Massage Thermique',
      detail: 'Appliquer délicatement la préparation tiède sur le Mont de Vénus et l\'extérieur des grandes lèvres 10 minutes avant la séance.'
    },
    {
      title: 'Étape 3 : Activation des Nocicepteurs & Vascularisation',
      detail: 'La légère réaction alcaline stimule le micro-flux sanguin et amplifie de +300% la réceptivité des terminaisons nerveuses clitoridiennes.'
    },
    {
      title: 'Étape 4 : Déclenchement de la Séquence d\'Orgasme Multiple',
      detail: 'Poursuivre avec la stimulation ciblée du Point G ou Point A en maintenant une lubrification abondante.'
    }
  ];

  const toggleStep = (index) => {
    const updated = [...completedSteps];
    updated[index] = !updated[index];
    setCompletedSteps(updated);
  };

  const formatTimer = (totalSec) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(300);
  };

  const handleFinishProtocol = () => {
    setCompletedSteps([true, true, true, true]);
    setIsCompleted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="bg-darkcard rounded-2xl border border-gold-500/25 p-4 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Glow background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center space-x-2 text-gold-400 font-semibold text-xs mb-1">
            <Droplet className="w-4 h-4 text-gold-500" />
            <span className="uppercase tracking-widest">MODULE 3 • PROTOCOLE EXCLUSIF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Protocole <span className="text-gold-gradient">Miel & Bicarbonate</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Formule naturelle d'activation vasculaire et d'amplification des sensations érogènes.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gold-500/20 to-burgundy-900/40 px-4 py-2 rounded-xl border border-gold-500/40 flex items-center space-x-2 shrink-0 self-start md:self-auto">
          <Award className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-mono text-gold-200">Efficacité Validée 97.4%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Step-by-Step Interactive Checklist */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
            Procédure d'Application Guidée :
          </h3>

          {steps.map((step, idx) => {
            const isDone = completedSteps[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleStep(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 ${
                  isDone
                    ? 'bg-gold-500/10 border-gold-500/50 shadow-gold-glow'
                    : 'bg-black/50 hover:bg-black/80 border-white/10'
                }`}
              >
                <button type="button" className="mt-0.5 shrink-0 text-gold-400">
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 fill-gold-500 text-black" />
                  ) : (
                    <Square className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold ${isDone ? 'text-gold-300' : 'text-white'}`}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}

          <button
            onClick={handleFinishProtocol}
            className="w-full mt-4 bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider shadow-gold-glow transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Valider et Marquer le Protocole comme Effectué</span>
          </button>
        </div>

        {/* Right Timer & Dosage Specs Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Preparation Countdown Timer */}
          <div className="bg-black/70 p-6 rounded-2xl border border-gold-500/30 text-center shadow-xl">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-wider block mb-2">
              MINUTERIE DE PRÉPARATION (5 MIN)
            </span>
            <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white my-3 tracking-widest">
              {formatTimer(timerSeconds)}
            </div>

            <div className="flex items-center justify-center space-x-3 mt-4">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-4 py-2 rounded-xl text-xs flex items-center space-x-1.5 transition-colors"
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-black" />}
                <span>{isTimerRunning ? 'Pause' : 'Démarrer Minuteur'}</span>
              </button>

              <button
                onClick={resetTimer}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-3 py-2 rounded-xl text-xs flex items-center space-x-1 border border-white/15 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-gray-300" />
                <span>Réinitialiser</span>
              </button>
            </div>
          </div>

          {/* Dosages Summary Card */}
          <div className="bg-gradient-to-br from-burgundy-950/40 via-black to-darkcard p-5 rounded-2xl border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center">
              <Flame className="w-4 h-4 text-gold-400 mr-1.5" />
              Proportions Exactes du Mélange :
            </h4>
            <ul className="text-xs text-gray-300 space-y-2 pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span><strong>Miel Pur Organic :</strong> 1 cuillère à café complète (5 ml)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span><strong>Bicarbonate Alimentaire :</strong> 1/4 cuillère à café (1.25 g)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span><strong>Eau Tiède (37°C) :</strong> 2 cuillères à soupe (30 ml)</span>
              </li>
            </ul>
          </div>

          {/* Bonus Unlocked Card */}
          {isCompleted && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-green-950/80 to-black border border-green-500/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center space-x-2 text-green-400 text-xs font-bold mb-1">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>PROTOCOLE VALIDÉ AVEC SUCCÈS !</span>
              </div>
              <p className="text-xs text-gray-300">
                Félicitations ! Vous avez débloqué le bonus "Fiche Récapitulative Miel & Bicarbonate".
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
