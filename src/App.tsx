import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Menu,
  X,
  Plus,
  Minus,
  Construction,
  Warehouse,
  ParkingCircle,
  Flame,
  BatteryCharging,
  MoveRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Processus', href: '#process' },
    { name: 'Marchés', href: '#markets' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-nord-orange flex items-center justify-center font-black text-black text-xl shrink-0">N</div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            NORD<span className="text-nord-orange">MARQ</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black text-white/80 hover:text-nord-orange transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#quote" 
            className="bg-nord-orange text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Estimation gratuite
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="hidden xs:flex flex-col items-end mr-2">
            <span className="text-[8px] font-black text-nord-orange uppercase tracking-widest leading-none">Laval</span>
            <span className="text-[8px] font-black text-white/40 uppercase tracking-widest leading-none mt-1">Rive-Nord</span>
          </div>
          <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-black z-[-1] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-white uppercase tracking-widest hover:text-nord-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#quote" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-nord-orange text-white px-10 py-5 text-sm font-black uppercase tracking-widest"
              >
                Soumission Gratuite
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-48 pb-24 md:pt-32 md:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background Image Overlay */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: "url('/hero-nordmarq.jpg')" }}
></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="h-[1px] w-12 bg-nord-orange"></div>
            <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em]">Laval • Rive-Nord • Grand Montréal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] md:leading-[0.95] mb-8 md:mb-10 tracking-tighter uppercase">
            MARQUAGE COMMERCIAL<br />
            <span className="text-nord-orange">CLAIR & CONFORME.</span>
          </h1>
          <p className="text-base md:text-2xl text-white/60 mb-10 md:mb-14 font-light leading-relaxed max-w-2xl">
            Optimisez la circulation et la sécurité de vos surfaces avec un traçage de lignes haute précision. Solutions durables pour stationnements et entrepôts à Laval et sur la Rive-Nord.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a href="#quote" className="group bg-nord-orange text-white px-10 md:px-12 py-5 md:py-6 font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all text-xs md:text-sm">
              Estimation gratuite
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#services" className="px-10 md:px-12 py-5 md:py-6 border border-white/20 text-white font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs md:text-sm">
              Voir nos services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-nord-orange opacity-40"></div>
    </section>
  );
};

const TrustBar = () => {
  const trustPoints = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Assurance Responsabilité Civile" },
    { icon: <Zap className="w-5 h-5" />, text: "Intervention Rapide selon Secteur" },
    { icon: <Clock className="w-5 h-5" />, text: "Planification selon Météo" },
    { icon: <Construction className="w-5 h-5" />, text: "Adaptation aux Contraintes du Site" },
  ];

  return (
    <div className="bg-black border-y border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left group">
              <div className="text-nord-orange group-hover:scale-110 transition-transform p-3 bg-white/5 rounded-full">{point.icon}</div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors max-w-[120px] md:max-w-none">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Stationnements",
      desc: "Marquage complet pour commerces, condos et institutions. Lignes de cases, flèches et symboles.",
      icon: <ParkingCircle className="w-10 h-10" />,
    },
    {
      title: "Entrepôts & Logistique",
      desc: "Marquage de sécurité intérieur, zones de marche, corridors de chariots élévateurs et numérotation.",
      icon: <Warehouse className="w-10 h-10" />,
    },
    {
      title: "Voies d'Incendie",
      desc: "Marquage réglementaire rouge haute visibilité pour accès d'urgence et bornes-fontaines.",
      icon: <Flame className="w-10 h-10" />,
    },
    {
      title: "Bornes de Recharge VE",
      desc: "Signalisation spécialisée pour espaces de véhicules électriques avec peinture haute performance.",
      icon: <BatteryCharging className="w-10 h-10" />,
    },
    {
      title: "Thermoplastique",
      desc: "Applications durables pour zones à haut trafic, offrant une longévité supérieure à la peinture standard.",
      icon: <Zap className="w-10 h-10" />,
    },
    {
      title: "Marquages Spéciaux",
      desc: "Logos personnalisés, jeux de cours d'école, terrains sportifs et signalisation sur mesure.",
      icon: <Construction className="w-10 h-10" />,
    },
  ];

  return (
    <section id="services" className="py-28 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Nos Services</span>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[0.95] uppercase">
              SOLUTIONS DE MARQUAGE<br /><span className="text-nord-orange">HAUTE PERFORMANCE.</span>
            </h2>
          </div>
          <p className="text-black/40 max-w-sm font-light leading-relaxed text-lg">
            Nous utilisons des produits de qualité supérieure pour assurer une visibilité maximale et une durabilité accrue face au climat québécois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-12 hover:bg-black group transition-all duration-500">
              <div className="text-nord-orange mb-10 group-hover:scale-110 transition-transform duration-500 origin-left">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="text-black/50 group-hover:text-white/50 transition-colors font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const benefits = [
    {
      title: "Meilleure Lisibilité",
      desc: "Des lignes nettes et contrastées pour une compréhension immédiate des zones de circulation.",
    },
    {
      title: "Sécurité Accrue",
      desc: "Réduction des risques d'accidents grâce à une signalisation claire pour piétons et véhicules.",
    },
    {
      title: "Circulation Fluide",
      desc: "Optimisation de l'espace pour maximiser le nombre de cases et améliorer le flux du trafic.",
    },
    {
      title: "Zones Mieux Définies",
      desc: "Délimitation précise des zones de chargement, voies d'incendie et espaces réservés.",
    }
  ];

  return (
    <section className="py-36 md:py-52 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Impact concret</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-10 uppercase">
              CE QU'UN MARQUAGE<br /><span className="text-nord-orange">PRÉCIS AMÉLIORE.</span>
            </h2>
            <p className="text-white/60 mb-12 font-light text-xl leading-relaxed">
              Le marquage n'est pas qu'esthétique; c'est un outil de gestion essentiel pour la sécurité et l'efficacité de vos infrastructures à Laval.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-1 h-auto bg-nord-orange shrink-0"></div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-tight mb-2 text-sm">{benefit.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed text-xs">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white/5 border border-white/10 p-4">
              <img 
  src="/hero-nordmarq.jpg"
  alt="Stationnement commercial fraîchement marqué" 
  className="w-full h-full object-cover grayscale opacity-40"
 />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-nord-orange opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-nord-orange opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Analyse & Planification",
      desc: "Étude rigoureuse des plans, mesure des surfaces et établissement d'un calendrier d'intervention optimisé."
    },
    {
      num: "02",
      title: "Préparation Technique",
      desc: "Nettoyage industriel et délimitation précise pour garantir une adhérence maximale et des lignes nettes."
    },
    {
      num: "03",
      title: "Exécution Normée",
      desc: "Application avec équipement de pointe et matériaux certifiés selon les standards de l'industrie."
    },
    {
      num: "04",
      title: "Contrôle & Livraison",
      desc: "Inspection finale de la conformité et remise d'un site propre, sécuritaire et prêt à l'usage."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Méthode de travail</span>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[0.95] uppercase">NOTRE PROCESSUS<br /><span className="text-nord-orange">DE RÉALISATION.</span></h2>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-black/5 border border-black/5">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-12 relative group hover:bg-black transition-all duration-500">
              <span className="text-7xl font-black text-black/5 absolute top-8 right-8 pointer-events-none group-hover:text-nord-orange/10 transition-colors">
                {step.num}
              </span>
              <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tight text-black group-hover:text-white transition-colors">{step.title}</h3>
              <p className="text-black/40 group-hover:text-white/40 font-light leading-relaxed text-sm relative z-10 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Markets = () => {
  const markets = [
    "Gestionnaires Immobiliers",
    "Propriétaires Commerciaux",
    "Centres de Distribution",
    "Syndicats de Copropriété",
    "Institutions Publiques",
    "Entrepreneurs Généraux"
  ];

  return (
    <section id="markets" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black p-12 md:p-20 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-nord-orange/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-nord-orange"></div>
              <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em]">Marchés Desservis</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter uppercase leading-[0.95]">
              EXPERTISE<br /><span className="text-nord-orange">SECTORIELLE.</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {markets.map((m, i) => (
                <div key={i} className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-default group">
                  <div className="w-1.5 h-1.5 bg-nord-orange group-hover:scale-150 transition-transform"></div>
                  <span className="text-xs font-black uppercase tracking-widest">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: "Précision Rigoureuse",
      desc: "Nous ne tolérons aucune approximation. Chaque ligne est tracée avec une rigueur géométrique absolue.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Matériaux Certifiés",
      desc: "Peintures industrielles sélectionnées pour résister au climat québécois et au trafic intensif.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Efficacité Opérationnelle",
      desc: "Nous minimisons l'impact sur vos activités avec des interventions rapides et une planification flexible.",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col gap-10 p-10 md:p-14 bg-white hover:bg-black group transition-all duration-500">
              <div className="w-16 h-16 bg-black text-nord-orange flex items-center justify-center group-hover:bg-white transition-colors">
                {r.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-white mb-6 transition-colors">{r.title}</h3>
                <p className="text-black/50 group-hover:text-white/50 font-light leading-relaxed transition-colors">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Presence = () => {
  return (
    <section className="py-16 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-nord-orange"></div>
              Ancrage Local
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Entreprise locale basée à <span className="text-white font-medium">Laval</span>, NordMarq propose un service orienté commercial et industriel. Notre approche structurée et rigoureuse garantit un travail exécuté avec précision et constance sur chaque chantier.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <div className="px-6 py-4 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest">Laval</div>
            <div className="px-6 py-4 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest">Rive-Nord</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  return (
    <section className="py-36 bg-black relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 200L200 150L350 180L500 120L650 160L750 220" stroke="#ED691D" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="350" cy="180" r="100" stroke="#ED691D" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Territoire</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10 uppercase">
              LAVAL &<br /><span className="text-nord-orange">RIVE-NORD.</span>
            </h2>
            <p className="text-white/60 text-xl font-light mb-14 leading-relaxed">
              Basés à Laval, nous desservons la Rive-Nord et l'ensemble de la région métropolitaine avec une réactivité accrue pour les projets locaux de marquage commercial et industriel.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                "Laval & Blainville",
                "Boisbriand & Rosemère",
                "Terrebonne & Mascouche",
                "Sainte-Thérèse & Mirabel",
                "Saint-Eustache & Bois-des-Filion",
                "Grand Montréal & Rive-Nord"
              ].map((area, i) => (
                <div key={i} className="flex items-center gap-4 text-white group">
                  <div className="w-2 h-2 bg-nord-orange group-hover:scale-150 transition-transform"></div>
                  <span className="font-black uppercase tracking-widest text-[10px] text-white/80 group-hover:text-white transition-colors">{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-12 relative">
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-nord-orange opacity-20"></div>
            <div className="flex items-center gap-6 mb-10">
              <MapPin className="text-nord-orange w-10 h-10" />
              <div>
                <h3 className="text-white font-black uppercase tracking-tight text-xl">Service de Proximité</h3>
                <p className="text-white/40 text-sm font-light">Intervention rapide sur la Rive-Nord.</p>
              </div>
            </div>
            <p className="text-white/60 font-light italic leading-relaxed text-lg">
              "Notre présence locale nous permet d'optimiser nos interventions et de garantir un service de marquage commercial de haute qualité à Laval."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quel est le temps de séchage de la peinture ?",
      a: "Selon les conditions météorologiques, le temps de séchage varie entre 30 minutes et 2 heures. Nous recommandons d'attendre 4 heures avant de permettre un trafic intense pour garantir la durabilité."
    },
    {
      q: "Quelles sont les conditions idéales pour le marquage ?",
      a: "La surface doit être sèche et la température doit être d'au moins 10°C pour une adhérence optimale. Nous planifions nos interventions en fonction des prévisions météo locales."
    },
    {
      q: "Faites-vous du marquage intérieur (entrepôts) ?",
      a: "Oui, nous sommes spécialisés dans le marquage d'entrepôts et d'usines, utilisant des produits adaptés aux environnements intérieurs pour une visibilité et une sécurité accrues. Nous nous adaptons aux contraintes de votre site pour minimiser les arrêts d'opérations."
    },
    {
      q: "Intervenez-vous de nuit ou la fin de semaine ?",
      a: "Pour les clients commerciaux et industriels, nous offrons des plages horaires flexibles, incluant le soir et la fin de semaine, afin de ne pas perturber vos activités ou le flux de vos clients."
    },
    {
      q: "Pouvez-vous effacer d'anciennes lignes ?",
      a: "Absolument. Nous proposons des services d'effacement par meulage ou par recouvrement avec une peinture noire spécialisée pour préparer la surface à un nouveau traçage."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Questions</span>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[0.95] uppercase">FOIRE AUX<br /><span className="text-nord-orange">QUESTIONS.</span></h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-black/5">
              <button 
                className={`w-full flex justify-between items-center p-8 text-left transition-all ${openIndex === i ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-black uppercase tracking-tight text-lg">{faq.q}</span>
                {openIndex === i ? <Minus className="w-6 h-6 text-nord-orange" /> : <Plus className="w-6 h-6 text-nord-orange" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-black"
                  >
                    <div className="p-8 pt-0 text-white/50 font-light leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section id="quote" className="py-32 md:py-48 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-nord-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Soumission</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10 uppercase">
              CONFIEZ-NOUS VOTRE<br /><span className="text-nord-orange">PROJET DE MARQUAGE.</span>
            </h2>
            <p className="text-white/60 mb-14 font-light text-xl leading-relaxed">
              Obtenez une estimation gratuite et précise pour vos travaux de marquage à Laval et sur la Rive-Nord. Nous répondons rapidement à toutes les demandes.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-white/5 border border-white/10 text-nord-orange flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Téléphone</p>
                  <p className="text-2xl font-black text-white">(514) 555-0198</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-white/5 border border-white/10 text-nord-orange flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-1">Email</p>
                  <p className="text-2xl font-black text-white">info@nordmarq.ca</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 md:p-12 shadow-2xl border border-white/5 relative">
            <div className="absolute -top-px -left-px w-12 h-px bg-nord-orange"></div>
            <div className="absolute -top-px -left-px h-12 w-px bg-nord-orange"></div>
            
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-black mb-8">Réponse rapide selon votre surface, votre secteur et vos besoins.</p>

            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Nom</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="Votre nom" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Entreprise</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="Nom de l'entreprise" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Téléphone</label>
                  <input type="tel" className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="(514) 000-0000" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Courriel</label>
                  <input type="email" className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="votre@courriel.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Type de Projet</label>
                <select className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:border-nord-orange outline-none transition-colors appearance-none">
                  <option className="bg-zinc-900">Stationnement (Laval / Rive-Nord)</option>
                  <option className="bg-zinc-900">Entrepôt & Logistique</option>
                  <option className="bg-zinc-900">Voie d'incendie</option>
                  <option className="bg-zinc-900">Marquage Commercial</option>
                  <option className="bg-zinc-900">Autre</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Message</label>
                <textarea className="w-full bg-white/5 border-b border-white/10 py-4 text-white focus:border-nord-orange outline-none transition-colors h-32 resize-none" placeholder="Détails de votre projet..."></textarea>
              </div>
              <button className="w-full bg-nord-orange text-white py-6 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-nord-orange flex items-center justify-center font-black text-black text-2xl">N</div>
              <span className="text-3xl font-black tracking-tighter text-white">
                NORD<span className="text-nord-orange">MARQ</span>
              </span>
            </div>
            <p className="text-white/80 font-black uppercase tracking-[0.2em] text-[10px] mb-6">
              Marquage commercial à Laval et sur la Rive-Nord
            </p>
            <p className="text-white/40 max-w-md font-light leading-relaxed mb-12 text-lg">
              Expertise en marquage de surfaces commerciales et industrielles. Nous servons Laval, Blainville, Terrebonne, Boisbriand et le Grand Montréal avec précision et durabilité.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
              {['Stationnement', 'Entrepôts', 'Voies d’incendie', 'Marquage industriel'].map((kw) => (
                <span key={kw} className="text-[10px] font-black uppercase tracking-widest text-white/20">{kw}</span>
              ))}
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-nord-orange hover:border-nord-orange transition-all cursor-pointer group">
                <span className="text-xs font-black group-hover:scale-110 transition-transform">IN</span>
              </div>
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-nord-orange hover:border-nord-orange transition-all cursor-pointer group">
                <span className="text-xs font-black group-hover:scale-110 transition-transform">FB</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h4>
            <ul className="space-y-6">
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-black">Services</a></li>
              <li><a href="#process" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-black">Processus</a></li>
              <li><a href="#markets" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-black">Marchés</a></li>
              <li><a href="#faq" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-black">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-white/40 text-xs">
                <Phone className="w-5 h-5 text-nord-orange" />
                <span className="font-black uppercase tracking-widest leading-none">(514) 555-0198</span>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-xs">
                <Mail className="w-5 h-5 text-nord-orange" />
                <span className="font-black uppercase tracking-widest leading-none">info@nordmarq.ca</span>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-xs">
                <MapPin className="w-5 h-5 text-nord-orange" />
                <span className="font-black uppercase tracking-widest leading-none">Laval, QC</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-black">
            © {new Date().getFullYear()} NORDMARQ. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors font-black">Confidentialité</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors font-black">Termes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-nord-orange selection:text-white bg-black">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Results />
      <Process />
      <Markets />
      <WhyUs />
      <Presence />
      <ServiceArea />
      <FAQ />
      <QuoteSection />
      <Footer />
    </div>
  );
}
