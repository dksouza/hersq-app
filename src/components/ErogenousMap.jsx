import React, { useState } from 'react';
import { Target, Compass, Flame, Info, ChevronRight, X, Sparkles, Check, Play, ShieldAlert } from 'lucide-react';

export default function ErogenousMap() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const points = [
    {
      id: 'point-g',
      name: 'Point G (Gräfenberg)',
      location: 'Paroi antérieure (3 à 5 cm d\'entrée)',
      sensitivity: '9.8 / 10',
      type: 'Tissu érectile & éjaculation',
      motion: 'Mouvement en crochet ("Viens ici")',
      rhythm: 'Lent et progressif puis appuyé',
      description: 'Découvert par le Dr Ernst Gräfenberg, ce point réagit à une pression ferme appliquée vers le nombril. Une stimulation adéquate déclenche une vague d’orgasmes profonds et peut favoriser l\'éjaculation féminine.',
      steps: [
        'Commencez avec les doigts abondamment lubrifiés.',
        'Insérez délicatement deux doigts (paume vers le haut) sur 3 à 4 centimètres.',
        'Effectuez un mouvement ferme de rappel vers le haut.',
        'Maintenez une pression continue lorsque la zone gonfle.'
      ],
      proTip: 'Ne pas presser brusquement. Attendre que l\'excitation globale ait déjà irrigué la zone.',
      color: 'from-amber-500 to-gold-500'
    },
    {
      id: 'point-a',
      name: 'Point A (Anterior Fornix Erogenous Zone)',
      location: 'Paroi antérieure profonde (7 à 9 cm)',
      sensitivity: '9.5 / 10',
      type: 'Zone orgasmique ultra-profonde',
      motion: 'Pressions douces et répétitives',
      rhythm: 'Pulsations régulières et douces',
      description: 'Situé juste entre le col de l\'utérus et la paroi vaginale antérieure. La stimulation du Point A génère une lubrification naturelle instantanée et des orgasmes corporels complets sans inconfort.',
      steps: [
        'Assurez-vous d\'une excitation préalable suffisante (au moins 10-15 min).',
        'Atteignez la zone profonde au-delà du Point G avec des mouvements doux.',
        'Effectuez de micro-caresses circulaires sur le dôme supérieur.',
        'Associez une respiration synchrone avec votre partenaire.'
      ],
      proTip: 'Idéal pour réveiller la libido féminine en cas de sécheresse ou de stress.',
      color: 'from-burgundy-600 to-red-600'
    },
    {
      id: 'point-u',
      name: 'Point U (Zone Urétrale & Clitoris Interne)',
      location: 'Juste au-dessus de l\'orifice vaginal',
      sensitivity: '9.2 / 10',
      type: 'Sensibilité nerveuse directe',
      motion: 'Micro-vibrations et frotlements très doux',
      rhythm: 'Régulier et aérien',
      description: 'La zone U entoure le méat urétral et correspond aux racines profondes du clitoris. Une stimulation directe trop forte peut gêner; la clé est un effleurement circulaire très délicat.',
      steps: [
        'Appliquez une goutte de fluide chaud sur la zone.',
        'Utilisez le pulpe de l\'index pour décrire de minuscules cercles.',
        'Alterner stimulation du Point U et caresses du Mont de Vénus.'
      ],
      proTip: 'Toujours associer avec un lubrifiant naturel à base d\'eau.',
      color: 'from-yellow-400 to-amber-600'
    },
    {
      id: 'mont-venus',
      name: 'Mont de Vénus (Éveil Préliminaire)',
      location: 'Pubis & partie supérieure vulvaire',
      sensitivity: '8.5 / 10',
      type: 'Zone d\'éveil vasculaire',
      motion: 'Caresses appuyées avec le plat de la main',
      rhythm: 'Vague circulaire large',
      description: 'Considéré comme la porte d\'entrée du système nerveux érogène. Masser le Mont de Vénus stimule le flux sanguin vers le bassin et prépare le corps féminin aux orgasmes multiples.',
      steps: [
        'Placez la paume chaude sur le pubis.',
        'Appliquez une pression circulaire constante de haut en bas.',
        'Combinez avec un souffle chaud sur la peau.'
      ],
      proTip: 'À pratiquer pendant les 5 premières minutes des préliminaires.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'zone-clitoris',
      name: 'Zone Clitoridienne (Capuchon & Gland)',
      location: 'Sommet de la vulve',
      sensitivity: '10 / 10',
      type: 'Centre névralgique (+8 000 récepteurs)',
      motion: 'Mouvements en 8 ou circulaires indirects',
      rhythm: 'Continu sans changer brusquement de rythme',
      description: 'Le seul organe humain entièrement dédié au plaisir. Le gland ne doit presque jamais être stimulé à sec ni en pression directe au départ. Entourez le capuchon avec des gestes fluides.',
      steps: [
        'Couvrez de lubrifiant.',
        'Massez les côtés du capuchon au lieu du gland directement.',
        'Gardez un rythme constant une fois le plateau de plaisir atteint.'
      ],
      proTip: 'Le secret réside dans la régularité du mouvement sans rupture.',
      color: 'from-pink-600 to-gold-500'
    },
    {
      id: 'zone-cervicale',
      name: 'Zone Cervicale (Point K / Cul-de-sac)',
      location: 'Fond du vagin / Col de l\'utérus',
      sensitivity: '9.6 / 10',
      type: 'Orgasme vagal & émotionnel',
      motion: 'Pression englobante douce',
      rhythm: 'Lent et méditatif',
      description: 'Une zone réservée aux moments d\'intimité profonde. Connectée au nerf vague, sa stimulation libère une forte dose d\'oxytocine et procure une sensation d\'extase totale.',
      steps: [
        'Nécessite une excitation maximale préalable.',
        'Encourager la partenaire à relâcher complètement le plancher pelvien.',
        'Maintenir un contact fixe et prolongé sans friction brutale.'
      ],
      proTip: 'Parfait en fin de séance pour sceller l\'orgasme émotionnel.',
      color: 'from-purple-600 to-burgundy-900'
    }
  ];

  return (
    <div className="bg-darkcard rounded-2xl border border-gold-500/20 p-4 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-2 text-gold-400 font-semibold text-xs mb-1">
            <Target className="w-4 h-4 text-gold-500" />
            <span className="uppercase tracking-widest">MODULE 1 • INTERACTIF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Cartographie des <span className="text-gold-gradient">Zones Érogènes Secrètes</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Cliquez sur un point érogène pour débloquer les techniques exactes de stimulation et les angles d'activation.
          </p>
        </div>

        <div className="bg-black/60 px-4 py-2 rounded-xl border border-gold-500/30 flex items-center space-x-2 self-start md:self-auto">
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin" />
          <span className="text-xs font-mono text-gold-200">6 Points Précision Clinique</span>
        </div>
      </div>

      {/* Grid of Interactive Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {points.map((pt) => {
          const isSelected = selectedPoint?.id === pt.id;
          return (
            <div
              key={pt.id}
              onClick={() => setSelectedPoint(pt)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-br from-gold-500/15 via-darkcard to-burgundy-900/30 border-gold-500 shadow-gold-glow scale-[1.02]'
                  : 'bg-black/50 hover:bg-black/80 border-white/10 hover:border-gold-500/40'
              }`}
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-gradient-to-r ${pt.color} text-white`}>
                  {pt.type}
                </span>
                <span className="text-xs font-mono font-bold text-gold-400 flex items-center">
                  <Flame className="w-3.5 h-3.5 mr-1 text-gold-500 fill-gold-500" />
                  {pt.sensitivity}
                </span>
              </div>

              {/* Point Title & Subtitle */}
              <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-1">
                {pt.name}
              </h3>
              <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                📍 {pt.location}
              </p>

              {/* Practical Action Footer */}
              <div className="flex items-center justify-between text-xs text-gold-400 font-semibold pt-3 border-t border-white/10">
                <span>Voir le Protocole Pas à Pas</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Point Pop-up / Detail Drawer */}
      {selectedPoint && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141416] border border-gold-500/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoint(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/60 hover:bg-black p-2 rounded-full border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">
                GUIDE CLINIQUE & TECHNIQUE D'EXÉCUTION
              </span>
              <h3 className="text-2xl font-extrabold font-serif text-white">
                {selectedPoint.name}
              </h3>
              <p className="text-xs text-gold-300 font-medium mt-1">
                Emplacement : {selectedPoint.location}
              </p>
            </div>

            {/* Overview Box */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-6">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {selectedPoint.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Mouvement Préconisé</span>
                <span className="text-xs font-bold text-gold-400">{selectedPoint.motion}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Rythme Optimal</span>
                <span className="text-xs font-bold text-amber-300">{selectedPoint.rhythm}</span>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold text-gray-200 tracking-wider mb-3 flex items-center">
                <Check className="w-4 h-4 text-gold-400 mr-1.5" />
                Étapes Pratiques d'Activation (Pas à Pas)
              </h4>
              <div className="space-y-2.5">
                {selectedPoint.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-gray-200 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-burgundy-900/40 to-black border border-burgundy-600/40 flex items-start space-x-3 mb-6">
              <Sparkles className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-gold-300 uppercase">Conseil Secret de Jessica Carter</h5>
                <p className="text-xs text-gray-300 mt-0.5">{selectedPoint.proTip}</p>
              </div>
            </div>

            {/* Modal Action Button */}
            <button
              onClick={() => setSelectedPoint(null)}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow-gold-glow transition-all"
            >
              Compris ! Appliquer ce Protocole
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
