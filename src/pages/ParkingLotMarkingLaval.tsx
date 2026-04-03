import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, MoveRight } from 'lucide-react';

export default function ParkingLotMarkingLaval() {
  useEffect(() => {
    document.title = 'Marquage de stationnement à Laval | NordMarq';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'NordMarq réalise le marquage de stationnement commercial à Laval pour commerces, copropriétés, immeubles et sites industriels. Lignes nettes, visibles et durables.'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      'href',
      'https://www.nordmarq.ca/services/marquage-stationnement-laval'
    );
  }, []);

  const items = [
    'Lignes de stationnement standards et doubles',
    'Flèches directionnelles et zones de circulation',
    'Cases réservées et signalisation au sol',
    'Voies d’incendie et zones interdites',
    'Aires de débarcadère et zones visiteurs',
    'Retouches et réorganisation de marquage existant',
  ];

  const sectors = [
    'Commerces de détail',
    'Immeubles à bureaux',
    'Copropriétés',
    'Centres médicaux',
    'Entrepôts et bâtiments industriels',
    'Propriétés institutionnelles',
  ];

  const areas = [
    'Chomedey',
    'Laval-des-Rapides',
    'Duvernay',
    'Vimont',
    'Fabreville',
    'Sainte-Dorothée',
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em] mb-12"
        >
          ← Retour à l’accueil
        </Link>

        <p className="text-nord-orange text-[10px] font-black uppercase tracking-[0.4em] mb-6">
          Service local
        </p>

        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-8 max-w-5xl">
          Marquage de stationnement commercial à Laval
        </h1>

        <p className="text-white/60 text-lg md:text-2xl leading-relaxed max-w-4xl mb-10">
          NordMarq réalise le marquage de stationnement commercial à Laval pour
          commerces, immeubles, copropriétés, institutions et sites industriels.
          Nous traçons des lignes nettes, lisibles et durables pour améliorer la
          circulation, la sécurité et l’organisation de vos surfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/#quote"
            className="group bg-nord-orange text-white px-8 py-4 font-black uppercase tracking-[0.2em] inline-flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all text-xs"
          >
            Estimation gratuite
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="tel:15145550198"
            className="px-8 py-4 border border-white/15 text-white font-black uppercase tracking-[0.2em] inline-flex items-center justify-center hover:bg-white/10 transition-all text-xs"
          >
            Appeler maintenant
          </a>
        </div>
      </section>

      <section className="bg-white text-black py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-nord-orange text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              Ce que nous réalisons
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
              Marquage clair, conforme et durable pour vos stationnements
            </h2>
            <p className="text-black/60 text-lg leading-relaxed">
              Nous intervenons sur des surfaces commerciales et multi-usages à
              Laval avec une approche structurée, orientée lisibilité, sécurité
              et cohérence de circulation.
            </p>
          </div>

          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-black/10 pb-4"
              >
                <CheckCircle2 className="w-5 h-5 text-nord-orange shrink-0 mt-1" />
                <p className="text-black/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-nord-orange text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              Types de clients
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
              Une solution adaptée aux réalités commerciales de Laval
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Le marquage de stationnement doit rester simple à comprendre,
              visible rapidement et cohérent avec l’usage réel du site. Nous
              intervenons sur des propriétés où la circulation et la présentation
              du site ont un impact direct sur l’expérience client et la sécurité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="border border-white/10 bg-black/40 px-6 py-5 text-sm font-black uppercase tracking-[0.18em] text-white/80"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-nord-orange text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              Laval
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
              Présence locale et intervention rapide
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Basés dans la région, nous pouvons intervenir sur des projets de
              marquage de stationnement à Laval avec une exécution structurée et
              une planification adaptée aux contraintes de votre site.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-nord-orange" />
              <p className="text-white font-black uppercase tracking-[0.2em] text-xs">
                Secteurs fréquemment visés
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="text-white/70 border-b border-white/10 pb-3 text-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-nord-orange text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Soumission
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
            Besoin d’un marquage de stationnement à Laval ?
          </h2>
          <p className="text-black/60 text-lg leading-relaxed mb-10">
            Contactez NordMarq pour obtenir une estimation rapide selon votre
            surface, votre type de propriété et vos besoins de circulation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              className="bg-nord-orange text-white px-8 py-4 font-black uppercase tracking-[0.2em] inline-flex items-center justify-center hover:bg-black transition-all text-xs"
            >
              Demander une estimation
            </a>
            <a
              href="/"
              className="border border-black/10 px-8 py-4 font-black uppercase tracking-[0.2em] inline-flex items-center justify-center hover:bg-black/5 transition-all text-xs"
            >
              Retour à l’accueil
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}