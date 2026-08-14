import React, { useState } from 'react';
import { ShieldCheck, Lock, ChevronDown, Sparkles } from 'lucide-react';

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'L\'application est-elle vraiment 100% anonyme et discrète ?',
      a: 'Absolument. Aucune information personnelle n\'est revendue ou partagée. L\'accès est chiffré SSL 256 bits et aucun libellé compromettant n\'apparaît.'
    },
    {
      q: 'Les techniques conviennent-elles à tous les couples ?',
      a: 'Oui. Les protocoles ont été élaborés par Jessica Carter pour convenir à tous les niveaux d\'expérience, qu\'il s\'agisse de raviver la flamme après 10 ans ou de découvrir l\'orgasme féminin pour la première fois.'
    },
    {
      q: 'Comment contacter le support en cas de doute ?',
      a: 'Une équipe de sexologues est disponible 24/7 directement depuis l\'application via l\'onglet Support Privé ou par email à support@secretsoforgasm.fr.'
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Branding & Legal Notices */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left">
          <div>
            <span className="font-serif font-bold text-white text-sm">
              Secrets of <span className="text-gold-gradient">Orgasm</span>
            </span>
            <p className="mt-1 text-[11px]">
              © {new Date().getFullYear()} Secrets of Orgasm (Les Secrets de l'Orgasme). Tous droits réservés.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Politique de Confidentialité : Vos données sont chiffrées."); }} className="hover:text-gold-400 transition-colors">
              Confidentialité
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Conditions Générales : Réservé aux personnes majeures (+18)."); }} className="hover:text-gold-400 transition-colors">
              Conditions (+18)
            </a>
            <a href="#support" onClick={(e) => { e.preventDefault(); alert("Contact Support : support@secretsoforgasm.fr"); }} className="hover:text-gold-400 transition-colors">
              Contact VIP
            </a>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <p className="text-[10px] text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          Avertissement : Ce site contient du matériel d'éducation sexologique destiné exclusivement à un public adulte consentant de plus de 18 ans. Les conseils présentés ne remplacent pas un avis médical professionnel.
        </p>

      </div>
    </footer>
  );
}
