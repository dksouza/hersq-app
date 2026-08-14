import React from 'react';
import { Crown, ShieldAlert, LogOut, Sparkles, HelpCircle, Award } from 'lucide-react';

export default function Navbar({ userEmail, onLogout }) {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gold-500/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-300 p-0.5 shadow-gold-glow flex items-center justify-center">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
              <Crown className="w-5 h-5 text-gold-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white">
                Secrets of <span className="text-gold-gradient">Orgasm</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-gold-500/10 border border-gold-500/30 rounded text-[10px] font-semibold text-gold-400 uppercase tracking-wider">
                VIP APP
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 hidden xs:block">
              Les Secrets de l'Orgasme Féminin
            </p>
          </div>
        </div>

        {/* User Session & Status Badges */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden md:flex items-center space-x-2 bg-darkcard px-3 py-1.5 rounded-full border border-gold-500/20 text-xs">
            <Award className="w-4 h-4 text-gold-400" />
            <span className="text-gray-300 font-medium truncate max-w-[140px]" title={userEmail}>
              {userEmail || 'membre@secretsoforgasm.fr'}
            </span>
            <span className="bg-green-900/60 text-green-400 border border-green-700/50 px-2 py-0.5 rounded-full text-[10px] font-semibold">
              ACCÈS VIP
            </span>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-red-400 bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 px-3 py-2 rounded-xl transition-all"
            title="Se déconnecter"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quitter</span>
          </button>
        </div>

      </div>
    </header>
  );
}
