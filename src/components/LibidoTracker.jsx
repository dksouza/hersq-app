import React, { useState } from 'react';
import { Clock, Calendar, Zap, Heart, RefreshCw, Flame, CheckCircle, Award } from 'lucide-react';

export default function LibidoTracker() {
  const [cyclePhase, setCyclePhase] = useState('ovulation');
  const [mood, setMood] = useState('sensual');
  const [readiness, setReadiness] = useState(80);

  const phaseData = {
    follicular: {
      name: 'Phase Folliculaire (Jours 6-11)',
      libidoBase: 78,
      window: '21h00 - 22h30',
      sensitivity: 'Élevée & Curieuse',
      technique: 'Stimulation du Point G et effleurements tactiles légers',
      hormone: 'Élévation de l\'œstrogène : réceptivité sensorielle en hausse constante.'
    },
    ovulation: {
      name: 'Pic d\'Ovulation (Jours 12-16)',
      libidoBase: 98,
      window: '22h00 - 23h30',
      sensitivity: 'Maximale (Ultra-Réceptive)',
      technique: 'Combinaison Point A + Stimulation Clitoridienne Directe',
      hormone: 'Pic maximal d\'œstrogène et de testostérone : orgasmes les plus intenses du cycle.'
    },
    luteal: {
      name: 'Phase Lutéale (Jours 17-24)',
      libidoBase: 65,
      window: '20h30 - 21h45',
      sensitivity: 'Profonde & Émotionnelle',
      technique: 'Protocole Miel & Bicarbonate + Massages thermiques doux',
      hormone: 'Hausse de la progestérone : privilégier la détente et la chaleur corporelle.'
    },
    premenstrual: {
      name: 'Phase Pré-Menstruelle (Jours 25-28)',
      libidoBase: 84,
      window: '22h30 - 00h00',
      sensitivity: 'Congestion Pelvienne (Très Réactive)',
      technique: 'Stimulation de la Zone Urétrale & Pression Cervicale Douce',
      hormone: 'Afflux sanguin pelvien important : sensibilité vasculaire dédoublée.'
    }
  };

  const current = phaseData[cyclePhase];

  // Dynamic Libido Calculation
  const moodMultiplier = mood === 'sensual' ? 1.15 : mood === 'energetic' ? 1.1 : mood === 'relaxed' ? 1.0 : 0.85;
  const calculatedLibido = Math.min(100, Math.round((current.libidoBase * (readiness / 100)) * moodMultiplier));

  return (
    <div className="bg-darkcard rounded-2xl border border-gold-500/20 p-4 sm:p-8 shadow-2xl relative">
      
      {/* Module Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-2 text-gold-400 font-semibold text-xs mb-1">
            <Clock className="w-4 h-4 text-gold-500" />
            <span className="uppercase tracking-widest">MODULE 2 • CALCULATEUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Tracker d'Horloge Biologique <span className="text-gold-gradient">& Libido</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Estimez la fenêtre idéale de réceptivité hormonale féminine pour maximiser les vagues d'orgasmes.
          </p>
        </div>

        <div className="bg-black/60 px-4 py-2 rounded-xl border border-gold-500/30 flex items-center space-x-2 shrink-0 self-start md:self-auto">
          <Calendar className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-mono text-gold-200">Algorithme d'Optimisation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Cycle Phase Selection */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
              1. Phase Actuelle du Cycle Féminin :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(phaseData).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setCyclePhase(key)}
                  className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                    cyclePhase === key
                      ? 'bg-gradient-to-r from-gold-500/20 to-burgundy-900/30 border-gold-500 text-gold-300 shadow-gold-glow'
                      : 'bg-black/50 hover:bg-black/80 border-white/10 text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-bold">{item.name.split('(')[0]}</span>
                    {cyclePhase === key && <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />}
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono">({item.name.split('(')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mood Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
              2. État d'Esprit & Disposition Sensorielle :
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'sensual', label: '🔥 Sensuelle', desc: 'Prête' },
                { id: 'relaxed', label: '🧘 Relaxée', desc: 'Calme' },
                { id: 'energetic', label: '⚡ Énergique', desc: 'Active' },
                { id: 'stressed', label: '😴 Fatiguée', desc: 'Besoin douceur' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMood(m.id)}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    mood === m.id
                      ? 'bg-gold-500 text-black border-gold-400 shadow-gold-glow'
                      : 'bg-black/40 hover:bg-black/70 border-white/10 text-gray-300'
                  }`}
                >
                  <div>{m.label}</div>
                  <div className="text-[10px] opacity-80 font-normal mt-0.5">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Readiness Level Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                3. Niveau de Préparation & Préliminaires Effectués :
              </label>
              <span className="text-xs font-mono font-bold text-gold-400 bg-black/60 px-2.5 py-1 rounded border border-gold-500/30">
                {readiness}%
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={readiness}
              onChange={(e) => setReadiness(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
            />
          </div>

        </div>

        {/* Right Output Results Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-black via-[#141416] to-burgundy-950/40 p-6 rounded-2xl border border-gold-500/30 flex flex-col justify-between shadow-2xl relative">
          
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-mono text-gold-400 font-bold">
                RÉSUMÉ ET DIAGNOSTIC
              </span>
              <span className="bg-gold-500/20 text-gold-300 text-[10px] font-bold px-2 py-0.5 rounded border border-gold-500/30 uppercase">
                Résultat Personnalisé
              </span>
            </div>

            {/* Calculated Score Meter */}
            <div className="text-center py-2">
              <span className="text-xs text-gray-400 uppercase font-semibold block mb-1">
                Indice de Réceptivité & Libido Calculé
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-serif text-gold-gradient flex items-center justify-center">
                <Flame className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 mr-2 fill-gold-500 animate-pulse" />
                {calculatedLibido}%
              </div>
              <p className="text-xs font-semibold text-green-400 mt-2">
                {calculatedLibido >= 85 ? '🔥 Fenêtre d\'Orgasme Multiple Haute Intensité' : '✨ Fenêtre Proffonde Préparatoire'}
              </p>
            </div>

            {/* Key Output Specs */}
            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-black/60 border border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Creneau Horaire Idéal (Aujourd'hui)</span>
                <span className="text-xs font-bold text-white flex items-center mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
                  {current.window}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Technique Recommandée</span>
                <span className="text-xs font-bold text-gold-300 mt-0.5 block">{current.technique}</span>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Analyse Hormonale</span>
                <p className="text-xs text-gray-300 mt-0.5 leading-tight">{current.hormone}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert("Paramètres enregistrés dans votre profil VIP !")}
            className="w-full mt-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-gold-glow transition-all"
          >
            Enregistrer ce Profil dans l'App
          </button>

        </div>

      </div>

    </div>
  );
}
