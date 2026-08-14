import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, FileText, Download, CheckCircle, Sparkles, BookOpen, Clock, Star, MessageSquare, RefreshCw, Server, AlertCircle } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(1122); // 18m 42s in seconds
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0x');
  const [activeTab, setActiveTab] = useState('chapters');
  const [userNote, setUserNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([
    'Règle d\'or du Point G : massage en mouvement de vague ("viens ici")',
    'Protocole Miel : appliquer 10 min avant le rapport pour la réceptivité cutanée'
  ]);
  const [showNotesSuccess, setShowNotesSuccess] = useState(false);
  const [updateProgress, setUpdateProgress] = useState(89);

  const duration = 2535; // 42m 15s

  const chapters = [
    { id: 1, title: '01. Introduction au Plaisir & Neurobiologie Féminine', time: '00:00', timestampSeconds: 0, status: 'Complété' },
    { id: 2, title: '02. La Cartographie Secrets des 6 Zones Érogènes', time: '08:15', timestampSeconds: 495, status: 'Complété' },
    { id: 3, title: '03. Le Protocole Miel & Bicarbonate (Application Explicative)', time: '18:42', timestampSeconds: 1122, status: 'En cours' },
    { id: 4, title: '04. Débloquer l\'Orgasme Multiple & L\'Éjaculation Féminine', time: '31:10', timestampSeconds: 1870, status: 'Réservé VIP' },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setUpdateProgress((prev) => (prev >= 98 ? 89 : prev + 1));
    }, 3500);
    return () => clearInterval(progressTimer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
  };

  const handleChapterClick = (timestampSeconds) => {
    setCurrentTime(timestampSeconds);
    setIsPlaying(true);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!userNote.trim()) return;
    setSavedNotes([...savedNotes, userNote]);
    setUserNote('');
    setShowNotesSuccess(true);
    setTimeout(() => setShowNotesSuccess(false), 2500);
  };

  const cycleSpeed = () => {
    const speeds = ['1.0x', '1.25x', '1.5x', '2.0x'];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
  };

  return (
    <div className="space-y-6">
      
      {/* ⚠️ MESSAGE PROVISOIRE : MISES À JOUR DES VIDÉOS EN COURS SUR LE SERVEUR */}
      <div className="bg-gradient-to-br from-black via-darkcard to-burgundy-950/40 rounded-2xl border-2 border-gold-500/40 p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-5 relative z-10">
          
          {/* Animated Server Sync Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/80 px-4 py-2 rounded-full border border-gold-500/40 shadow-gold-glow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
            </span>
            <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest flex items-center">
              <Server className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
              MISE À JOUR SERVEUR EN COURS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight leading-tight">
            Les nouvelles vidéos exclusives sont en cours de <span className="text-gold-gradient">traitement sur le serveur</span>
          </h2>

          {/* French Notice Copy */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Veuillez patienter quelques instants. Nos serveurs privés finalisent la synchronisation en 4K Ultra HD. Elles seront disponibles d'un instant à l'autre.
          </p>

          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>Consultez ci-dessous les modules interactifs et la cartographie pendant la mise à jour.</span>
          </div>

        </div>
      </div>

      {/* 
      ========================================================================
      📌 BLOCO ORIGINAL DO PLAYER DE VÍDEO (COMMENTÉ TEMPORAIREMENT)
      ========================================================================
      
      <div className="bg-darkcard rounded-2xl border border-gold-500/25 overflow-hidden shadow-2xl transition-all">
        
        <div className="p-4 sm:p-6 bg-gradient-to-r from-black via-darkcard to-black border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-gold-400 font-semibold mb-1">
              <span className="bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                VIDÉO EXCLUSIVE VIP
              </span>
              <span className="flex items-center text-gray-400">
                <Clock className="w-3.5 h-3.5 mr-1 text-gold-500" /> 42 min 15 sec
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight">
              Masterclass Principale : Débloquer le Plaisir Féminin Absolu
            </h2>
          </div>

          <div className="flex items-center space-x-3 bg-black/60 p-2.5 rounded-xl border border-white/10 shrink-0">
            <img
              src="/images/instructor_portrait.jpg"
              alt="Jessica Carter"
              className="w-12 h-12 rounded-lg object-cover border border-gold-500/40"
            />
            <div>
              <div className="flex items-center space-x-1">
                <h4 className="text-xs sm:text-sm font-bold text-white">Jessica Carter</h4>
                <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
              </div>
              <p className="text-[11px] text-gold-400/90 font-medium">Sexologue & Spécialiste Intimité</p>
              <div className="flex items-center text-[10px] text-yellow-400">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-0.5" />
                <span>4.98 / 5.0 (2,410 membres)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video bg-black group overflow-hidden flex items-center justify-center">
          <img
            src="/images/masterclass_thumbnail.jpg"
            alt="Masterclass Secrets of Orgasm"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'brightness-90 scale-[1.01]' : 'brightness-75'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

          <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
            <span className="bg-red-600/90 text-white font-mono font-bold text-[10px] sm:text-xs px-3 py-1 rounded-md shadow-lg flex items-center">
              <span className="w-2 h-2 rounded-full bg-white animate-ping mr-1.5" />
              LIVE 4K ULTRA HD
            </span>
            <span className="bg-black/70 backdrop-blur-md text-gold-400 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md border border-gold-500/30">
              MODULE 3/4
            </span>
          </div>

          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-300 p-1 shadow-gold-glow transform hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center"
              title="Lancer la vidéo"
            >
              <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center pl-1 backdrop-blur-sm border border-gold-400">
                <Play className="w-10 h-10 text-gold-400 fill-gold-400 group-hover:text-gold-300 transition-colors" />
              </div>
            </button>
          )}

          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black via-black/90 to-transparent p-4 transition-opacity duration-300">
            <div className="mb-3 flex items-center space-x-3">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gold-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs sm:text-sm">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-gold-400 transition-colors p-1"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-gold-400 transition-colors p-1"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="font-mono text-gray-300 text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={cycleSpeed}
                  className="bg-white/10 hover:bg-gold-500/20 hover:text-gold-400 px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors border border-white/10"
                >
                  Vitesse: {playbackSpeed}
                </button>

                <span className="hidden sm:inline-block bg-burgundy-900/60 text-burgundy-300 px-2.5 py-1 rounded text-[11px] font-mono border border-burgundy-700/50">
                  AUDIO HD 320kbps
                </span>

                <button className="hover:text-gold-400 transition-colors p-1" title="Plein écran">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-black/40 border-t border-white/10">
          <div className="flex border-b border-white/10 mb-6 overflow-x-auto space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('chapters')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap border-b-2 ${
                activeTab === 'chapters'
                  ? 'border-gold-500 text-gold-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Chapitres & Horodatages</span>
            </button>

            <button
              onClick={() => setActiveTab('resources')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap border-b-2 ${
                activeTab === 'resources'
                  ? 'border-gold-500 text-gold-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Guides PDF à Télécharger</span>
            </button>

            <button
              onClick={() => setActiveTab('notes')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 whitespace-nowrap border-b-2 ${
                activeTab === 'notes'
                  ? 'border-gold-500 text-gold-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Mes Notes de Séance ({savedNotes.length})</span>
            </button>
          </div>

          {activeTab === 'chapters' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {chapters.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => handleChapterClick(ch.timestampSeconds)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    currentTime >= ch.timestampSeconds && (ch.id === 4 || currentTime < (chapters[ch.id]?.timestampSeconds || 9999))
                      ? 'bg-gold-500/10 border-gold-500/50 shadow-gold-glow'
                      : 'bg-darkcard hover:bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-black/60 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
                        {ch.title}
                      </h5>
                      <span className="text-[11px] text-gray-400 font-mono">Début : {ch.time}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                    {ch.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-r from-burgundy-900/30 to-black border border-burgundy-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-burgundy-900/80 border border-burgundy-500/40 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Le Guide Suprême des 6 Zones Érogènes (PDF 84 Pages)</h4>
                    <p className="text-xs text-gray-400">Schémas haute définition, angles de pression et protocoles pas à pas.</p>
                  </div>
                </div>
                <button
                  onClick={() => alert("Téléchargement du Guide PDF VIP démarré ! (Fichier complet réservé aux membres).")}
                  className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 shrink-0 transition-transform active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger PDF (24 MB)</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-darkcard border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-black border border-gold-500/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fiche Aide-Mémoire : Dosage Miel & Bicarbonate</h4>
                    <p className="text-xs text-gray-400">Proportions exactes et conseils de préparation rapide avant l'acte.</p>
                  </div>
                </div>
                <button
                  onClick={() => alert("Fiche protocole téléchargée avec succès !")}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 border border-white/15 shrink-0 transition-colors"
                >
                  <Download className="w-4 h-4 text-gold-400" />
                  <span>Télécharger Fiche (3 MB)</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <form onSubmit={handleAddNote} className="flex gap-2">
                <input
                  type="text"
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder="Ajouter une note personnelle pendant le visionnage..."
                  className="flex-1 bg-black/60 border border-white/15 focus:border-gold-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shrink-0"
                >
                  Enregistrer
                </button>
              </form>

              {showNotesSuccess && (
                <p className="text-xs text-green-400 flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" /> Note sauvegardée en local avec succès !
                </p>
              )}

              <div className="space-y-2">
                {savedNotes.map((note, index) => (
                  <div key={index} className="p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-gray-200 flex items-start space-x-2">
                    <span className="text-gold-400 font-bold">•</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
      ========================================================================
      */}

    </div>
  );
}

