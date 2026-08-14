import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, MessageSquare, PlusCircle, UserCheck, X } from 'lucide-react';

export default function Testimonials() {
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', location: '', text: '', rating: 5 });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Marc D.',
      location: '38 ans • Paris',
      category: 'couples',
      rating: 5,
      date: 'Il y a 2 jours',
      text: 'Ma femme et moi étions dans une routine complète après 9 ans de mariage. En appliquant la méthode du Point A et les conseils de Jessica, elle a vécu son tout premier orgasme multiple en moins de 15 minutes. C\'est une révélation absolue pour notre couple !',
      likes: 84,
      verified: true
    },
    {
      id: 2,
      name: 'Antoine & Sophie',
      location: '42 ans • Lyon',
      category: 'fast',
      rating: 5,
      date: 'Il y a 4 jours',
      text: 'Je pensais tout savoir sur le plaisir féminin... Je me trompais lourdement. La cartographie des zones érogènes est d\'une précision scientifique rare. Ma partenaire est bluffée et notre complicité intime est à son niveau maximal.',
      likes: 67,
      verified: true
    },
    {
      id: 3,
      name: 'Julien R.',
      location: '31 ans • Bordeaux',
      category: 'fast',
      rating: 5,
      date: 'Il y a 5 jours',
      text: 'Le protocole Miel & Bicarbonate a fonctionné dès le tout premier essai. La réaction sensorielle est immédiate. Merci infiniment à Jessica Carter pour cette masterclass sans tabou.',
      likes: 52,
      verified: true
    },
    {
      id: 4,
      name: 'Thomas L.',
      location: '45 ans • Bruxelles',
      category: 'couples',
      rating: 5,
      date: 'Il y a 1 semaine',
      text: 'Très sceptique au départ, la vidéo et les schémas m\'ont totalement convaincu. Des techniques simples, respectueuses et incroyablement puissantes. Je recommande à tous les hommes qui aiment leur femme.',
      likes: 91,
      verified: true
    }
  ]);

  const handleLike = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const created = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || 'Membre VIP',
      category: 'fast',
      rating: Number(newReview.rating),
      date: 'À l\'instant',
      text: newReview.text,
      likes: 1,
      verified: true
    };

    setReviews([created, ...reviews]);
    setNewReview({ name: '', location: '', text: '', rating: 5 });
    setShowModal(false);
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === filter);

  return (
    <div className="bg-darkcard rounded-2xl border border-gold-500/20 p-4 sm:p-8 shadow-2xl relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-2 text-gold-400 font-semibold text-xs mb-1">
            <UserCheck className="w-4 h-4 text-gold-500" />
            <span className="uppercase tracking-widest">RÉSEAU MEMBRES VIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
            Témoignages & <span className="text-gold-gradient">Retours d'Expérience</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Découvrez l'impact direct des protocoles sur la vie de couple de nos membres vérifiés.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shrink-0 self-start md:self-auto shadow-gold-glow transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Laisser mon Avis</span>
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Tous les Avis (2 410)' },
          { id: 'couples', label: '👫 Vie de Couple' },
          { id: 'fast', label: '⚡ Résultats < 7 Jours' }
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              filter === f.id
                ? 'bg-gold-500/20 border-gold-500 text-gold-300 shadow-gold-glow'
                : 'bg-black/40 hover:bg-black/70 border-white/10 text-gray-400'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-gold-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500 to-burgundy-800 text-black font-bold text-xs flex items-center justify-center">
                    {rev.name.substring(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                      {rev.verified && (
                        <span className="text-[10px] text-green-400 bg-green-950/60 border border-green-800/40 px-1.5 py-0.2 rounded flex items-center">
                          <CheckCircle className="w-3 h-3 mr-0.5" /> Achat Vérifié
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400">{rev.location}</span>
                  </div>
                </div>

                <div className="flex text-yellow-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed italic mb-4">
                "{rev.text}"
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-500 pt-3 border-t border-white/5">
              <span>{rev.date}</span>
              <button
                onClick={() => handleLike(rev.id)}
                className="flex items-center space-x-1 text-gray-400 hover:text-gold-400 transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/5"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Utile ({rev.likes})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141416] border border-gold-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-serif text-white mb-1">Partager Votre Expérience</h3>
            <p className="text-xs text-gray-400 mb-4">Votre avis aide les autres membres de la communauté.</p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Votre Prénom & Âge</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="ex: Pierre M. (36 ans)"
                  className="w-full bg-black/60 border border-white/15 focus:border-gold-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Votre Ville / Région</label>
                <input
                  type="text"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  placeholder="ex: Paris, France"
                  className="w-full bg-black/60 border border-white/15 focus:border-gold-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Votre Témoignage</label>
                <textarea
                  required
                  rows="4"
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  placeholder="Racontez comment les protocoles ont changé votre intimité..."
                  className="w-full bg-black/60 border border-white/15 focus:border-gold-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-gold-glow transition-all"
              >
                Publier mon Témoignage Vérifié
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
