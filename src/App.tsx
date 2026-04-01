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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-asphalt py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nord-orange flex items-center justify-center font-bold text-asphalt text-xl">N</div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            NORD<span className="text-nord-orange">MARQ</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold text-white/90 hover:text-nord-orange transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#quote" 
            className="bg-nord-orange text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-asphalt transition-all"
          >
            Soumission
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-asphalt border-t border-white/5 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-white uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#quote" 
                onClick={() => setIsOpen(false)}
                className="bg-nord-orange text-white px-6 py-4 text-center font-bold uppercase tracking-widest"
              >
                Obtenir une soumission
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-asphalt pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      {/* Background Image Overlay - Industrial Concept */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-asphalt/40 via-asphalt to-asphalt"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-10 bg-nord-orange"></div>
            <span className="text-nord-orange font-mono text-xs font-bold uppercase tracking-[0.4em]">Expertise en Marquage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight text-balance">
            MARQUAGE COMMERCIAL<br />
            <span className="text-nord-orange">PRÉCIS & DURABLE.</span>
          </h1>
          <p className="text-lg md:text-xl text-nord-white/70 mb-12 font-light leading-relaxed max-w-xl text-balance">
            Services spécialisés de traçage de lignes pour stationnements, entrepôts et zones industrielles à Longueuil et dans le Grand Montréal.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#quote" className="group bg-nord-orange text-white px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-asphalt transition-all shadow-lg shadow-nord-orange/10">
              Soumission Gratuite
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-10 py-5 border-2 border-white/10 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Nos Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Road Line Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nord-orange via-nord-orange to-transparent opacity-50"></div>
    </section>
  );
};

const TrustBar = () => {
  const trustPoints = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Assurance Complète" },
    { icon: <Clock className="w-5 h-5" />, text: "Respect des Échéanciers" },
    { icon: <MapPin className="w-5 h-5" />, text: "Service Local (Rive-Sud)" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Qualité Industrielle" },
  ];

  return (
    <div className="bg-nord-white border-y border-asphalt/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <div className="text-nord-orange">{point.icon}</div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-asphalt/70">{point.text}</span>
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
      icon: <ParkingCircle className="w-8 h-8" />,
    },
    {
      title: "Entrepôts & Logistique",
      desc: "Marquage de sécurité intérieur, zones de marche, corridors de chariots élévateurs et numérotation.",
      icon: <Warehouse className="w-8 h-8" />,
    },
    {
      title: "Voies d'Incendie",
      desc: "Marquage réglementaire rouge haute visibilité pour accès d'urgence et bornes-fontaines.",
      icon: <Flame className="w-8 h-8" />,
    },
    {
      title: "Bornes de Recharge VE",
      desc: "Signalisation spécialisée pour espaces de véhicules électriques avec peinture haute performance.",
      icon: <BatteryCharging className="w-8 h-8" />,
    },
    {
      title: "Thermoplastique",
      desc: "Applications durables pour zones à haut trafic, offrant une longévité supérieure à la peinture standard.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Marquages Spéciaux",
      desc: "Logos personnalisés, jeux de cours d'école, terrains sportifs et signalisation sur mesure.",
      icon: <Construction className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-nord-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-nord-orange font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Nos Services</span>
            <h2 className="text-3xl md:text-5xl font-black text-asphalt tracking-tight leading-none">
              SOLUTIONS DE MARQUAGE<br /><span className="text-nord-orange">HAUTE PERFORMANCE.</span>
            </h2>
          </div>
          <p className="text-asphalt/60 max-w-sm font-light leading-relaxed">
            Nous utilisons des produits de qualité supérieure pour assurer une visibilité maximale et une durabilité accrue face au climat québécois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-asphalt/10 border border-asphalt/10">
          {services.map((s, i) => (
            <div key={i} className="bg-nord-white p-10 hover:bg-asphalt group transition-all duration-500">
              <div className="text-nord-orange mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="text-asphalt/60 group-hover:text-white/60 transition-colors font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-asphalt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-nord-orange font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Impact Visuel</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-8">
              UNE DIFFÉRENCE<br /><span className="text-nord-orange">IMMÉDIATE.</span>
            </h2>
            <p className="text-white/60 mb-8 font-light text-lg leading-relaxed">
              Le marquage n'est pas qu'esthétique; il est crucial pour la sécurité et l'organisation de vos espaces. Des lignes claires réduisent les risques d'accidents et optimisent la circulation.
            </p>
            <ul className="space-y-4">
              {[
                "Visibilité accrue de jour comme de nuit",
                "Conformité aux normes de sécurité",
                "Optimisation du flux de circulation",
                "Image de marque professionnelle"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-nord-orange w-5 h-5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-asphalt-light border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Avant marquage" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-asphalt/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Avant</div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-nord-orange pt-8 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Après marquage" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-nord-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Après</div>
              </div>
            </div>
            
            {/* Visual Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-nord-orange pointer-events-none opacity-30"></div>
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
      title: "Évaluation",
      desc: "Analyse sur place de vos besoins, mesure des surfaces et identification des contraintes techniques."
    },
    {
      num: "02",
      title: "Planification",
      desc: "Conception du plan de marquage optimisé et sélection des matériaux adaptés à votre usage."
    },
    {
      num: "03",
      title: "Préparation",
      desc: "Nettoyage rigoureux de la surface pour assurer une adhérence maximale de la peinture."
    },
    {
      num: "04",
      title: "Exécution",
      desc: "Application précise avec équipement de pointe et contrôle de qualité rigoureux."
    }
  ];

  return (
    <section id="process" className="py-24 bg-nord-white border-b border-asphalt/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-nord-orange font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Méthodologie</span>
          <h2 className="text-4xl md:text-5xl font-black text-asphalt tracking-tight">NOTRE PROCESSUS</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <span className="text-6xl font-black text-asphalt/5 absolute -top-8 -left-4 pointer-events-none group-hover:text-nord-orange/10 transition-colors">
                {step.num}
              </span>
              <h3 className="text-xl font-bold mb-4 relative z-10 uppercase tracking-tight text-asphalt">{step.title}</h3>
              <p className="text-asphalt/60 font-light leading-relaxed text-sm">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-6 text-asphalt/10">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
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
    <section id="markets" className="py-24 bg-asphalt-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="bg-asphalt p-12 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-nord-orange"></div>
              <span className="text-nord-orange font-mono text-xs font-bold uppercase tracking-widest">Marchés Desservis</span>
            </div>
            <h2 className="text-3xl font-black text-white mb-10 tracking-tight uppercase">EXPERTISE SECTORIELLE</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {markets.map((m, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70 hover:text-nord-orange transition-colors cursor-default group">
                  <div className="w-1.5 h-1.5 bg-nord-orange rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-bold uppercase tracking-wider">{m}</span>
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
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Matériaux Certifiés",
      desc: "Peintures industrielles sélectionnées pour résister au climat québécois et au trafic intensif.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Efficacité Opérationnelle",
      desc: "Nous minimisons l'impact sur vos activités avec des interventions rapides et une planification flexible.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-nord-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col gap-6 p-8 border border-asphalt/5 hover:border-nord-orange transition-all">
              <div className="w-12 h-12 bg-asphalt text-nord-orange flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-asphalt">{r.title}</h3>
              <p className="text-asphalt/60 font-light leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  return (
    <section className="py-24 bg-asphalt relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 200L200 150L350 180L500 120L650 160L750 220" stroke="#ED691D" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="350" cy="180" r="100" stroke="#ED691D" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-nord-orange font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Territoire</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8">
            LONGUEUIL &<br />GRAND MONTRÉAL.
          </h2>
          <p className="text-white/60 text-lg font-light mb-10 leading-relaxed">
            Basés sur la Rive-Sud, nous desservons l'ensemble de la région métropolitaine, incluant Longueuil, Brossard, Boucherville et Montréal.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-nord-orange w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-xs">Rive-Sud & Montérégie</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-nord-orange w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-xs">Montréal (Tous secteurs)</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-nord-orange w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-xs">Laval & Rive-Nord</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-nord-orange w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-xs">Parcs Industriels</span>
            </div>
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
      a: "Oui, nous sommes spécialisés dans le marquage d'entrepôts et d'usines, utilisant des produits adaptés aux environnements intérieurs pour une visibilité et une sécurité accrues."
    },
    {
      q: "Pouvez-vous effacer d'anciennes lignes ?",
      a: "Absolument. Nous proposons des services d'effacement par meulage ou par recouvrement avec une peinture noire spécialisée pour préparer la surface à un nouveau traçage."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-nord-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-nord-orange font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Questions</span>
          <h2 className="text-4xl font-black text-asphalt tracking-tight uppercase">Foire aux Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-asphalt/10">
              <button 
                className="w-full flex justify-between items-center p-6 text-left hover:bg-asphalt/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-asphalt uppercase tracking-tight text-sm">{faq.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-nord-orange" /> : <Plus className="w-5 h-5 text-nord-orange" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-asphalt/60 font-light leading-relaxed border-t border-asphalt/5 text-sm">
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
    <section id="quote" className="py-24 bg-nord-orange">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.9] mb-8">
              PRÊT À<br />TRACER LA LIGNE ?
            </h2>
            <p className="text-white/90 text-xl font-light mb-10 max-w-md">
              Contactez-nous aujourd'hui pour une évaluation gratuite de votre projet de marquage à Longueuil et environs.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-asphalt text-nord-orange flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Téléphone</p>
                  <p className="text-xl font-bold text-white">(514) 555-0198</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-asphalt text-nord-orange flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Email</p>
                  <p className="text-xl font-bold text-white">info@nordmarq.ca</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-asphalt p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nom Complet</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Entreprise</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="Gestion Immobilière XYZ" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-nord-orange outline-none transition-colors" placeholder="jean@exemple.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Type de Projet</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-nord-orange outline-none transition-colors appearance-none">
                  <option className="bg-asphalt">Stationnement</option>
                  <option className="bg-asphalt">Entrepôt</option>
                  <option className="bg-asphalt">Voie d'incendie</option>
                  <option className="bg-asphalt">Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-nord-orange outline-none transition-colors h-32" placeholder="Détails de votre projet..."></textarea>
              </div>
              <button className="w-full bg-nord-orange text-white py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-asphalt transition-all">
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
    <footer className="bg-asphalt pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-nord-orange flex items-center justify-center font-bold text-asphalt text-xl">N</div>
              <span className="text-2xl font-black tracking-tighter text-white">
                NORD<span className="text-nord-orange">MARQ</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm font-light leading-relaxed mb-8">
              Expertise en marquage de surfaces commerciales et industrielles. Nous servons Longueuil et le Grand Montréal avec précision et durabilité.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-nord-orange hover:border-nord-orange transition-all cursor-pointer">
                <span className="text-xs font-bold">IN</span>
              </div>
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-nord-orange hover:border-nord-orange transition-all cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Services</a></li>
              <li><a href="#process" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Processus</a></li>
              <li><a href="#markets" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Marchés</a></li>
              <li><a href="#faq" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-xs">
                <Phone className="w-4 h-4 text-nord-orange" />
                <span className="font-bold">(514) 555-0198</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-xs">
                <Mail className="w-4 h-4 text-nord-orange" />
                <span className="font-bold">info@nordmarq.ca</span>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-xs">
                <MapPin className="w-4 h-4 text-nord-orange" />
                <span className="font-bold">Longueuil, QC</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} NORDMARQ. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors font-bold">Confidentialité</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors font-bold">Termes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-nord-orange selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <Process />
      <Markets />
      <WhyUs />
      <ServiceArea />
      <FAQ />
      <QuoteSection />
      <Footer />
    </div>
  );
}
