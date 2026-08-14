import React, { useState, useEffect } from 'react';
import { Crown, ShieldCheck, Zap, ArrowRight, CheckCircle2, Lock, Sparkles, Clock, Users, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VipOfferCta() {
  const [spotsLeft, setSpotsLeft] = useState(12);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Subtle scarcity fluctuation simulation
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 7 ? prev - 1 : 12));
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const totalSpots = 200;
  const percentageTaken = Math.round(((totalSpots - spotsLeft) / totalSpots) * 100);

  const handleSimulateUnlock = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-burgundy-950/60 via-[#0f0e12] to-black rounded-3xl border-2 border-gold-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden my-12">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        
        {/* Scarcity / Urgency Header Badge */}
        <div className="inline-flex items-center space-x-2 bg-burgundy-900/80 border border-burgundy-600 px-4 py-1.5 rounded-full text-xs font-bold text-amber-200 shadow-red-glow">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span>SERVEUR PRIVÉ HAUTE SÉCURITÉ • ACCÈS RESTREINT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
          Débloquez l'Accès VIP Illimité aux <br className="hidden sm:inline" />
          <span className="text-gold-gradient">Secrets du Plaisir Féminin</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
          Rejoignez plus de 2 400 hommes qui ont transformé leur vie intime grâce à la méthode scientifique de Jessica Carter.
        </p>

        {/* Server Spots Progress Bar Scarcity */}
        <div className="max-w-md mx-auto bg-black/70 p-4 rounded-2xl border border-gold-500/30 space-y-2.5 shadow-xl">
          <div className="flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-amber-200 flex items-center">
              <Users className="w-4 h-4 mr-1 text-gold-400" />
              Places restantes sur le serveur :
            </span>
            <span className="text-red-400 font-extrabold text-sm animate-pulse">
              {spotsLeft} / {totalSpots}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-white/10 p-0.5">
            <div
              className="bg-gradient-to-r from-amber-500 via-gold-500 to-red-600 h-full rounded-full transition-all duration-500 shadow-gold-glow"
              style={{ width: `${percentageTaken}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] text-gray-400">
            <span>{percentageTaken}% des accès réservés aujourd'hui</span>
            <span className="text-gold-400 font-semibold">⚠️ Fermeture imminente</span>
          </div>
        </div>

        {/* Exclusive Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left pt-4">
          {[
            { title: 'Masterclass 4K Intégrale', desc: 'Accès illimité à vie à toutes les vidéos explicatives' },
            { title: 'Guide PDF 80+ Pages', desc: 'Schémas anatomiques HD et fiches récapitulatives' },
            { title: 'Canal Telegram VIP', desc: 'Mises à jour hebdomadaires et questions/réponses' },
            { title: 'Support Sexologue 24/7', desc: 'Assistance privée avec Jessica Carter et son équipe' }
          ].map((b, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-gold-400 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-gold-500" />
                <span>{b.title}</span>
              </div>
              <p className="text-[11px] text-gray-400">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* High Conversion Main CTA Button */}
        <div className="pt-4">
          <button
            onClick={() => setShowCheckoutModal(true)}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-extrabold text-sm sm:text-base py-5 px-10 rounded-2xl shadow-gold-glow transform hover:scale-[1.02] active:scale-95 transition-all duration-300 inline-flex items-center justify-center space-x-3 uppercase tracking-wider"
          >
            <Crown className="w-6 h-6 fill-black" />
            <span>Débloquer Mon Accès VIP (Seulement {spotsLeft} Places)</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 pt-2">
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 text-green-400 mr-1.5" /> Cryptage SSL 256-Bit
          </span>
          <span className="flex items-center">
            <Lock className="w-4 h-4 text-gold-400 mr-1.5" /> Discrétion Facture Garantie
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 text-amber-400 mr-1.5" /> Accès Instantané 24h/24
          </span>
        </div>

      </div>

      {/* Checkout / Instant Unlock Modal Simulation */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141416] border-2 border-gold-500/50 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-left">
            
            <button
              onClick={() => {
                setShowCheckoutModal(false);
                setIsSuccess(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">Confirmation d'Accès VIP</h3>
                  <p className="text-xs text-gray-400 mt-1">Serveur Sécurisé • Places restantes : {spotsLeft}</p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-gray-300">
                    <span>Pack secrets of Orgasm Integral :</span>
                    <span className="font-bold text-white">Inclus</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Accès aux 6 Cartographies HD :</span>
                    <span className="font-bold text-white">Inclus</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Assistance Sexologue Privée 24/7 :</span>
                    <span className="font-bold text-gold-400">Offert</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-bold text-gold-400">
                    <span>Statut de la session :</span>
                    <span>Prêt à Activer</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulateUnlock}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-4 px-6 rounded-xl text-sm uppercase tracking-wider shadow-gold-glow flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Activation en cours...</span>
                    </div>
                  ) : (
                    <>
                      <span>Confirmer et Activer l'Accès VIP</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-gray-500">
                  🔒 Transaction chiffrée et anonyme. Aucune mention explicite sur votre relevé bancaire.
                </p>
              </div>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-green-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">Félicitations ! Accès VIP Débloqué</h3>
                <p className="text-xs text-gray-300">
                  Votre compte membre a été élevé au statut VIP Permanent. Vous avez désormais accès à l'intégralité des masterclasses et guides secrets.
                </p>
                <button
                  onClick={() => {
                    setShowCheckoutModal(false);
                    setIsSuccess(false);
                  }}
                  className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider"
                >
                  Retourner au Tableau de Bord VIP
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
