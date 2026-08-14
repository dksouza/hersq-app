import React, { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, X, Server } from 'lucide-react';

export default function AnnouncementBar() {
  const [progress, setProgress] = useState(87);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return 87;
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-burgundy-950 via-[#180e12] to-burgundy-950 border-b border-burgundy-800/40 text-white text-xs sm:text-sm py-2.5 px-4 relative shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Main Alert Notice */}
        <div className="flex items-center space-x-2 text-center md:text-left">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>
          <p className="font-medium text-amber-200/90 leading-tight">
            ⚠️ <span className="font-bold text-amber-100">Mise à jour en cours :</span> Les nouvelles vidéos exclusives sont en cours de traitement et seront disponibles d'un instant à l'autre.
          </p>
        </div>

        {/* Dynamic Server Sync Meter */}
        <div className="flex items-center space-x-3 bg-black/40 px-3 py-1 rounded-full border border-amber-500/20 shrink-0">
          <div className="flex items-center space-x-1.5 text-xs text-amber-300">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-gold-400" />
            <span className="font-mono text-amber-100">Synchronisation du serveur : {progress}%</span>
          </div>
          
          <div className="w-16 sm:w-20 bg-gray-800 rounded-full h-1.5 overflow-hidden border border-white/10">
            <div
              className="bg-gradient-to-r from-gold-500 to-amber-400 h-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="text-gray-400 hover:text-white transition-colors p-0.5 ml-1"
            title="Fermer l'alerte"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
