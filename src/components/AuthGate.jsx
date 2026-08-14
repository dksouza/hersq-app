import React, { useState } from 'react';
import { Lock, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Eye } from 'lucide-react';

export default function AuthGate({ onLogin }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (emailStr) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Veuillez entrer votre adresse email.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Adresse email invalide. Exemple: nom@domaine.fr');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      onLogin(email);
      setLoading(false);
    }, 600);
  };

  const handleDemoLogin = () => {
    const demoEmail = 'membre.vip@secretsoforgasm.fr';
    setEmail(demoEmail);
    setError('');
    setLoading(true);
    setTimeout(() => {
      onLogin(demoEmail);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-burgundy-900/30 via-[#0b0b0b] to-[#080808] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-burgundy-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-500/20 to-burgundy-900/40 border border-gold-500/40 mb-4 shadow-gold-glow animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-gold-500" />
          </div>
          <span className="inline-block px-3 py-1 bg-burgundy-900/50 border border-burgundy-600/40 rounded-full text-xs font-semibold text-burgundy-400 uppercase tracking-widest mb-3">
            +18 Réservé aux Adultes
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white mb-2">
            Secrets of <span className="text-gold-gradient">Orgasm</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Les Secrets du Plaisir Féminin Absolu & Protocoles Exclusifs
          </p>
        </div>

        {/* Auth Gate Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-gold-500/20 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-gold-500" />
              <span className="text-xs uppercase tracking-wider text-gray-300 font-medium">
                Portail Membres Sécurisé
              </span>
            </div>
            <span className="flex items-center text-xs text-green-400 bg-green-950/60 px-2.5 py-1 rounded-full border border-green-800/40 font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping mr-1.5" />
              Serveur Actif
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Adresse Email Privée
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="votre.email@exemple.fr"
                  className="w-full bg-black/60 border border-white/15 focus:border-gold-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all text-sm"
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs mt-2 flex items-center">
                  <span className="mr-1">⚠️</span> {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-4 px-6 rounded-xl shadow-gold-glow transform active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2 text-base"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Vérification...</span>
                </div>
              ) : (
                <>
                  <span>Accéder à l'application</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Access Trigger */}
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <button
              onClick={handleDemoLogin}
              type="button"
              className="text-xs text-gold-400/90 hover:text-gold-300 underline underline-offset-4 flex items-center justify-center mx-auto space-x-1.5 transition-colors py-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Tester l'accès instantané (Mode Démo)</span>
            </button>
          </div>

          {/* Security & Confidentiality Badges */}
          <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] text-gray-400 pt-4 border-t border-white/5">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span>SSL 256-Bit Sécurisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
              <span>Discrétion 100% Garantie</span>
            </div>
          </div>
        </div>

        {/* Disclaimer footer notice */}
        <p className="text-center text-xs text-gray-500 mt-6 px-4">
          Contenu réservé exclusivement aux adultes consentants de plus de 18 ans. Vos données restent strictement confidentielles.
        </p>
      </div>
    </div>
  );
}
