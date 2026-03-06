"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Check,
  Clock3,
  Gauge,
  Menu,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { Fragment, useEffect } from "react";

type Rule = {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
};

type GoogleReview = {
  id: string;
  quote: string;
  context: string;
  date: string;
  rating: number;
  icon: LucideIcon;
  delayClass: string;
  vehicleImage: string;
  vehicleAlt: string;
  tiltClass: string;
};

type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  tag: string;
  features: string[];
  featured?: boolean;
};

type GalleryItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  layoutClass: string;
  delayClass: string;
};

type BrandLogo = {
  id: string;
  name: string;
  logo: string;
};

type MobilityShot = {
  id: string;
  image: string;
  alt: string;
  label: string;
};

type RouteMilestone = {
  id: string;
  label: string;
  threshold: number;
  positionClass: string;
};

type TitlePart = {
  text: string;
  italic?: boolean;
  className?: string;
};

const rules: Rule[] = [
  {
    id: "01",
    title: "Remise en 12 minutes",
    description:
      "Signature digitale, état des lieux assisté et départ immédiat depuis nos hubs gares et aéroports.",
  },
  {
    id: "02",
    title: "Assurance sans zone grise",
    description:
      "Chaque contrat détaille franchise, dépannage et remplacement pour éviter les mauvaises surprises au retour.",
  },
  {
    id: "03",
    title: "Flotte entretenue certifiée",
    description:
      "Révision systématique entre deux locations, contrôle 124 points, pneus saison adaptés à votre destination.",
  },
  {
    id: "04",
    title: "Assistance 24/7 en France",
    description:
      "Un expert Veloria répond en moins de 60 secondes, avec intervention locale partout en métropole.",
  },
  {
    id: "05",
    title: "Retour flexible multi-villes",
    description:
      "Lille, Bordeaux, Nice, Lyon ou Paris: vous rendez le véhicule dans l’agence la plus pratique.",
  },
  {
    id: "06",
    title: "Réseau premium Veloria",
    description:
      "45 agences en France et une conciergerie dédiée aux trajets business, tourisme et longs séjours.",
    highlight: true,
  },
];

const googleReviews: GoogleReview[] = [
  {
    id: "g1",
    quote:
      "Clés récupérées en moins de 10 minutes à Orly. Véhicule propre, récent, et aucune surprise au retour.",
    context: "Trajet Paris → Reims",
    date: "Publié il y a 3 jours",
    rating: 5,
    icon: Clock3,
    delayClass: "delay-100",
    vehicleImage:
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=900&q=80",
    vehicleAlt: "Photo client d'une voiture noire la nuit",
    tiltClass: "-rotate-3",
  },
  {
    id: "g2",
    quote:
      "Support immédiat quand on a voulu prolonger une journée. Process ultra fluide sur mobile.",
    context: "Location week-end Lyon",
    date: "Publié il y a 5 jours",
    rating: 5,
    icon: Sparkles,
    delayClass: "delay-200",
    vehicleImage:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
    vehicleAlt: "Photo client d'une berline en stationnement",
    tiltClass: "rotate-2",
  },
  {
    id: "g3",
    quote:
      "Le contrat est clair, la franchise bien expliquée, et l’état du véhicule a été fait de façon très pro.",
    context: "Déplacement pro Lille",
    date: "Publié il y a 1 semaine",
    rating: 5,
    icon: ShieldCheck,
    delayClass: "delay-300",
    vehicleImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    vehicleAlt: "Photo client d'une supercar garée en ville",
    tiltClass: "-rotate-2",
  },
  {
    id: "g4",
    quote:
      "SUV impeccable pour 6 jours dans les Alpes. Confort haut niveau et restitution sans attente.",
    context: "Séjour montagne Grenoble",
    date: "Publié il y a 8 jours",
    rating: 5,
    icon: CarFront,
    delayClass: "delay-400",
    vehicleImage:
      "https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&w=900&q=80",
    vehicleAlt: "Photo client d'un SUV sur la route",
    tiltClass: "rotate-3",
  },
  {
    id: "g5",
    quote:
      "Facture reçue en instantané avec tout le détail. Très utile pour notre service comptabilité.",
    context: "Compte entreprise Bordeaux",
    date: "Publié il y a 11 jours",
    rating: 5,
    icon: Gauge,
    delayClass: "delay-500",
    vehicleImage:
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=80",
    vehicleAlt: "Photo client d'une sportive rouge en ville",
    tiltClass: "-rotate-1",
  },
  {
    id: "g6",
    quote:
      "Voiture remplacée rapidement après un imprévu. Assistance rassurante et vraiment disponible.",
    context: "Mission Marseille",
    date: "Publié il y a 2 semaines",
    rating: 5,
    icon: Wrench,
    delayClass: "delay-300",
    vehicleImage:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    vehicleAlt: "Photo client d'une voiture premium en bord de route",
    tiltClass: "rotate-1",
  },
];

const plans: Plan[] = [
  {
    id: "p1",
    name: "Essentiel",
    price: "39",
    cadence: "/jour",
    description: "Citadines récentes pour les trajets urbains et week-ends.",
    tag: "Idéal ville",
    features: [
      "400 km inclus / semaine",
      "Assurance responsabilité civile",
      "Assistance dépannage 24/7",
      "Retrait en agence",
    ],
  },
  {
    id: "p2",
    name: "Business",
    price: "69",
    cadence: "/jour",
    description: "Berlines et SUV premium pour déplacements pros réguliers.",
    tag: "Le plus réservé",
    featured: true,
    features: [
      "900 km inclus / semaine",
      "Conducteur additionnel offert",
      "Protection rachat de franchise",
      "Livraison gare/aéroport",
    ],
  },
  {
    id: "p3",
    name: "Prestige",
    price: "119",
    cadence: "/jour",
    description: "Modèles haut de gamme avec conciergerie dédiée en France.",
    tag: "Expérience premium",
    features: [
      "1500 km inclus / semaine",
      "Livraison adresse personnalisée",
      "Véhicule de remplacement prioritaire",
      "Support conciergerie 7j/7",
    ],
  },
];

const mobilityShots: MobilityShot[] = [
  {
    id: "ms1",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    alt: "Supercar noire vue de profil sur route côtière",
    label: "Sport GT",
  },
  {
    id: "ms2",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    alt: "Cockpit premium d'une supercar",
    label: "Cockpit",
  },
  {
    id: "ms3",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    alt: "Voiture de luxe noire devant un hôtel",
    label: "Service VIP",
  },
];

const routeMilestones: RouteMilestone[] = [
  {
    id: "rm1",
    label: "Validation",
    threshold: 0.2,
    positionClass: "left-[11%] top-[61%]",
  },
  {
    id: "rm2",
    label: "Mise à dispo",
    threshold: 0.5,
    positionClass: "left-[45%] top-[40%]",
  },
  {
    id: "rm3",
    label: "Livraison",
    threshold: 0.78,
    positionClass: "left-[76%] top-[52%]",
  },
];

const brandLogos: BrandLogo[] = [
  {
    id: "lamborghini",
    name: "Lamborghini",
    logo: "https://cdn.simpleicons.org/lamborghini",
  },
  {
    id: "ferrari",
    name: "Ferrari",
    logo: "https://cdn.simpleicons.org/ferrari",
  },
  {
    id: "porsche",
    name: "Porsche",
    logo: "https://cdn.simpleicons.org/porsche",
  },
  {
    id: "mclaren",
    name: "McLaren",
    logo: "https://cdn.simpleicons.org/mclaren",
  },
  {
    id: "bugatti",
    name: "Bugatti",
    logo: "https://cdn.simpleicons.org/bugatti",
  },
  {
    id: "maserati",
    name: "Maserati",
    logo: "https://cdn.simpleicons.org/maserati",
  },
  {
    id: "bentley",
    name: "Bentley",
    logo: "https://cdn.simpleicons.org/bentley",
  },
  {
    id: "rollsroyce",
    name: "Rolls-Royce",
    logo: "https://cdn.simpleicons.org/rollsroyce",
  },
  {
    id: "bmw",
    name: "BMW",
    logo: "https://cdn.simpleicons.org/bmw",
  },
  {
    id: "audi",
    name: "Audi",
    logo: "https://cdn.simpleicons.org/audi",
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "https://cdn.simpleicons.org/tesla",
  },
];

const topics = [
  "Avis Google vérifiés",
  "Assurance transparente",
  "Retour multi-villes",
  "Flotte faible kilométrage",
  "Livraison express",
  "Support 24/7",
  "Contrats entreprise",
  "Kilométrage ajustable",
  "Véhicules hybrides",
];

const heroTitleParts: TitlePart[] = [
  { text: "La" },
  { text: "supercar", italic: true },
  { text: "idéale," },
  { text: "au" },
  { text: "bon" },
  { text: "moment," },
  { text: "sur" },
  { text: "toutes" },
  { text: "les" },
  { text: "routes" },
  { text: "de" },
  { text: "France.", italic: true, className: "text-white/90" },
];

const serviceTitleParts: TitlePart[] = [
  { text: "La" },
  { text: "logique" },
  { text: "de" },
  { text: "notre", italic: true },
  { text: "service" },
];

const sedanTitleParts: TitlePart[] = [
  { text: "Berline" },
  { text: "Noire", italic: true },
  { text: "Signature:" },
  { text: "confort" },
  { text: "exécutif," },
  { text: "silhouette" },
  { text: "fluide" },
  { text: "et" },
  { text: "présence" },
  { text: "premium", italic: true },
  { text: "sur" },
  { text: "chaque" },
  { text: "trajet" },
];

const reviewsTitleParts: TitlePart[] = [
  { text: "Des" },
  { text: "retours" },
  { text: "réalistes", italic: true },
  { text: "publiés" },
  { text: "sur" },
  { text: "Google,", className: "text-stone-400" },
  { text: "mis" },
  { text: "à" },
  { text: "jour" },
  { text: "chaque" },
  { text: "semaine" },
];

const portfolioTitleParts: TitlePart[] = [
  { text: "Galerie" },
  { text: "signature:" },
  { text: "une" },
  { text: "flotte" },
  { text: "pensée" },
  { text: "pour" },
  { text: "être" },
  { text: "vue," },
  { text: "vécue", italic: true },
  { text: "et" },
  { text: "réservée" },
];

const pricingTitleParts: TitlePart[] = [
  { text: "Des" },
  { text: "forfaits" },
  { text: "réalistes," },
  { text: "lisibles," },
  { text: "prêts", italic: true },
  { text: "à" },
  { text: "rouler" },
];

const galleryItems: GalleryItem[] = [
  {
    id: "ga1",
    title: "Supercars Signature",
    subtitle:
      "Lignes extrêmes, présence rare et finitions haut de gamme pour les réservations d'exception.",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1800&q=80",
    badge: "Portfolio 01",
    layoutClass: "md:col-span-2 xl:col-span-7 min-h-[380px] md:min-h-[520px]",
    delayClass: "delay-100",
  },
  {
    id: "ga2",
    title: "SUV Signature",
    subtitle: "Volumes généreux, conduite souple, finitions premium.",
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=80",
    badge: "Portfolio 02",
    layoutClass: "md:col-span-1 xl:col-span-5 min-h-[380px] md:min-h-[520px]",
    delayClass: "delay-200",
  },
  {
    id: "ga3",
    title: "Collection Longue Route",
    subtitle: "Faible consommation et confort optimisé pour les longs trajets.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    badge: "Portfolio 03",
    layoutClass: "md:col-span-1 xl:col-span-4 min-h-[320px] md:min-h-[420px]",
    delayClass: "delay-300",
  },
  {
    id: "ga4",
    title: "Intérieurs Premium",
    subtitle:
      "Sellerie haut de gamme, connectivité embarquée et ambiance silencieuse.",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1600&q=80",
    badge: "Portfolio 04",
    layoutClass: "md:col-span-1 xl:col-span-4 min-h-[320px] md:min-h-[420px]",
    delayClass: "delay-400",
  },
  {
    id: "ga5",
    title: "Flotte Urbaine",
    subtitle: "Citadines efficaces pour se déplacer vite en centre-ville.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
    badge: "Portfolio 05",
    layoutClass: "md:col-span-2 xl:col-span-4 min-h-[320px] md:min-h-[420px]",
    delayClass: "delay-500",
  },
];

function renderStars(rating: number, bright = false) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={`${rating}-${index}`}
      className={`h-3.5 w-3.5 ${index < rating ? "fill-current" : ""} ${
        bright ? "text-amber-300" : "text-stone-400"
      }`}
    />
  ));
}

function renderTitleParts(parts: TitlePart[]) {
  return parts.map((part, index) => (
    <Fragment key={`${part.text}-${index}`}>
      <span
        className={`title-word ${part.italic ? "italic" : ""} ${part.className ?? ""}`}
      >
        {part.text}
      </span>
      {index < parts.length - 1 ? " " : null}
    </Fragment>
  ));
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    document
      .querySelectorAll(".reveal-item")
      .forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-white text-stone-900 antialiased selection:bg-stone-800 selection:text-white">
      <section className="relative mx-4 mt-4 h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:mx-6 md:mt-6 md:h-[calc(100vh-3rem)] md:rounded-[2.35rem]">
        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-stone-900 text-[#F2F0EB] md:rounded-[1.9rem]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/car.png"
              alt="Lamborghini SVJ noire dans la nuit"
              className="absolute -top-[1%] left-0 h-[104%] w-full rounded-[1.6rem] object-cover opacity-100 md:rounded-[1.9rem]"
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/0 via-black/0 to-black/12" />
            <div className="absolute inset-0 z-[2] bg-black/5" />
          </div>

          <nav className="relative z-10 flex items-center justify-between px-6 pb-8 pt-8 md:px-12">
            <div className="reveal-item delay-100 flex items-center gap-3">
              <CarFront className="h-7 w-7 text-[#F2F0EB]" />
              <span className="font-dm-sans text-2xl font-light tracking-tight text-white">
                Veloria
              </span>
            </div>

            <div className="hidden items-center gap-12 text-sm font-medium tracking-wide text-white/80 md:flex">
              <a
                href="#flotte"
                className="reveal-item delay-200 tracking-tight transition-colors hover:text-white"
              >
                Flotte
              </a>
              <a
                href="#service"
                className="reveal-item delay-300 tracking-tight transition-colors hover:text-white"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="reveal-item delay-400 tracking-tight transition-colors hover:text-white"
              >
                Portfolio
              </a>
              <a
                href="#tarifs"
                className="reveal-item delay-500 tracking-tight transition-colors hover:text-white"
              >
                Tarification
              </a>
            </div>

            <div className="reveal-item delay-500 hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/70 md:flex">
              <span className="tracking-tight">+33 1 84 80 39 30</span>
              <span className="tracking-tight">Paris, France</span>
              <a
                href="#contact"
                className="group flex items-center gap-1 tracking-tight text-white transition-opacity hover:opacity-80"
              >
                Réserver
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <button
              className="reveal-item text-white md:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-8 w-8" />
            </button>
          </nav>

          <div className="relative z-10 flex h-[calc(100%-100px)] flex-col justify-end px-6 pb-12 md:px-12 md:pb-20">
            <div className="reveal-item delay-300 mb-auto flex w-full justify-end pt-12 text-xs font-medium tracking-wider text-white/40">
              <span className="tracking-tight">©2026</span>
            </div>

            <div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">
              <h1
                data-title-build
                className="font-dm-sans text-5xl font-light leading-[1.1] tracking-tight text-white md:max-w-4xl md:text-7xl lg:text-8xl"
              >
                {renderTitleParts(heroTitleParts)}
              </h1>

              <div className="reveal-item delay-300 flex max-w-sm flex-col gap-8">
                <p className="text-lg leading-relaxed tracking-tight text-white/80">
                  Veloria Location simplifie chaque déplacement avec une flotte
                  récente, des tarifs lisibles, et un service client reconnu sur
                  Avis Google.
                </p>
                <motion.a
                  href="#flotte"
                  className="group flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-sm tracking-tight text-stone-900 transition-all hover:scale-105 hover:bg-white hover:shadow-lg"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Découvrir la flotte
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="flotte"
        className="relative w-full bg-white px-6 pb-20 pt-20 text-stone-800 md:px-12 md:py-32"
      >
        <div className="reveal-item mb-12 border-b border-stone-300/50 pb-6 md:mb-24">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
            <span className="tracking-tight">
              {"// Une expérience pensée pour la route, pas pour la paperasse."}
            </span>
            <button
              className="rounded-full border border-stone-400/30 p-2 transition-colors hover:bg-stone-200"
              aria-label="Précédent"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">
          <div className="reveal-item delay-100 flex flex-col gap-4 lg:col-span-4 lg:mt-24">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
                alt="SUV noir devant une agence Veloria"
                className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
              <span className="tracking-tight">
                [01] Hub Paris Gare de Lyon
              </span>
              <span className="tracking-tight">©2026</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {mobilityShots.map((shot, index) => (
                <figure
                  key={shot.id}
                  className={`reveal-item delay-${Math.min((index + 2) * 100, 500)} group overflow-hidden rounded-xl border border-stone-200/80 bg-white/70 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]`}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={shot.image}
                      alt={shot.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-1.5 pb-1 pt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-stone-500">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-20 lg:col-span-8">
            <p className="reveal-item delay-200 font-dm-sans text-3xl font-light leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
              Chez <span className="font-dm-sans">Veloria</span>, chaque
              location est traitée comme un service de mobilité complet: choix
              du modèle, assurance claire, assistance réactive et restitution
              sans friction.
            </p>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="reveal-item delay-300 flex flex-col gap-4">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
                  <img
                    src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80"
                    alt="Intérieur cuir d'une berline premium"
                    className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
                  <span className="tracking-tight">
                    [02] Collection Exécutive
                  </span>
                  <span className="tracking-tight">©2026</span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-10 py-4">
                <div className="reveal-item delay-400 space-y-8">
                  <p className="text-lg leading-relaxed tracking-tight text-stone-600">
                    Nous accompagnons les équipes exigeantes, les voyageurs
                    réguliers et les familles qui veulent une solution fiable
                    sans compromis sur le confort.
                  </p>
                  <div className="flex gap-1 text-stone-400">
                    <Sparkles className="h-3 w-3" />
                    <Sparkles className="h-3 w-3" />
                    <Sparkles className="h-3 w-3" />
                  </div>
                </div>

                <div className="reveal-item delay-500 relative overflow-hidden rounded-2xl border border-stone-300/70 bg-white/65 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.07)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85),rgba(255,255,255,0)_55%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.05),rgba(0,0,0,0)_45%)]" />
                  <div className="pointer-events-none absolute inset-0 z-[15] hidden md:block">
                    {routeMilestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        data-route-threshold={milestone.threshold}
                        className={`route-step ${milestone.positionClass}`}
                      >
                        <span className="route-step-dot" />
                        <span className="route-step-label">
                          {milestone.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <svg
                    viewBox="0 0 1000 300"
                    className="relative z-10 h-[210px] w-full md:h-[240px]"
                    aria-label="Trajectoire d'une supercar sur route pointillée"
                  >
                    <defs>
                      <linearGradient
                        id="mobility-route-gradient"
                        x1="56"
                        y1="240"
                        x2="942"
                        y2="92"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#44403C" />
                        <stop offset="40%" stopColor="#3F3F46" />
                        <stop offset="72%" stopColor="#52525B" />
                        <stop offset="100%" stopColor="#18181B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M56 240 C 170 160 294 215 400 150 C 500 86 622 86 722 145 C 816 200 874 177 942 92"
                      fill="none"
                      stroke="rgb(168 162 158 / 0.4)"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                    <path
                      d="M56 240 C 170 160 294 215 400 150 C 500 86 622 86 722 145 C 816 200 874 177 942 92"
                      fill="none"
                      stroke="rgb(87 83 78)"
                      strokeWidth="4"
                      strokeDasharray="3 14"
                      strokeLinecap="round"
                      className="route-dash-flow"
                    />
                    <path
                      d="M56 240 C 170 160 294 215 400 150 C 500 86 622 86 722 145 C 816 200 874 177 942 92"
                      fill="none"
                      stroke="url(#mobility-route-gradient)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      className="route-progress-path"
                    />
                    <circle cx="56" cy="240" r="9" fill="rgb(41 37 36)" />
                    <circle cx="942" cy="92" r="9" fill="rgb(41 37 36)" />

                    <g transform="translate(56 240) rotate(-18)">
                      <ellipse
                        className="route-car-aura"
                        cx="0"
                        cy="0"
                        rx="46"
                        ry="20"
                        fill="rgb(0 0 0 / 0.08)"
                      />
                      <ellipse
                        cx="0"
                        cy="0"
                        rx="38"
                        ry="16"
                        fill="rgb(0 0 0 / 0.25)"
                      />
                      <rect
                        x="-34"
                        y="-13.5"
                        width="68"
                        height="27"
                        rx="12"
                        fill="#070707"
                        stroke="#2a2a2a"
                        strokeWidth="2"
                      />
                      <rect
                        x="-16"
                        y="-10"
                        width="32"
                        height="20"
                        rx="8"
                        fill="#151515"
                        stroke="#434343"
                        strokeWidth="1.5"
                      />
                      <circle cx="-20" cy="-13.5" r="4.8" fill="#0b0b0b" />
                      <circle cx="20" cy="-13.5" r="4.8" fill="#0b0b0b" />
                      <circle cx="-20" cy="13.5" r="4.8" fill="#0b0b0b" />
                      <circle cx="20" cy="13.5" r="4.8" fill="#0b0b0b" />
                      <rect
                        x="-30"
                        y="-2.5"
                        width="8"
                        height="5"
                        rx="2.5"
                        fill="#f97316"
                      />
                      <rect
                        x="22"
                        y="-2.5"
                        width="8"
                        height="5"
                        rx="2.5"
                        fill="#f97316"
                      />
                    </g>
                  </svg>
                  <div className="relative z-10 mt-3 space-y-3">
                    <div className="route-progress-track">
                      <div
                        className="route-progress-fill"
                        style={{ transform: "scaleX(0.62)" }}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-stone-500">
                      <span>Départ Hub Veloria</span>
                      <span>42 km/h</span>
                      <span>ETA 12 min</span>
                    </div>
                  </div>
                </div>

                <div className="reveal-item delay-500 flex items-end justify-between border-t border-stone-300/50 pt-12">
                  <div className="flex gap-12">
                    <div>
                      <span className="font-dm-sans text-5xl font-light tracking-tight text-stone-900">
                        4,9
                      </span>
                      <p className="mt-2 text-xs uppercase tracking-tight text-stone-500">
                        Note moyenne Avis Google
                      </p>
                    </div>
                    <div>
                      <span className="font-dm-sans text-5xl font-light tracking-tight text-stone-900">
                        12m
                      </span>
                      <p className="mt-2 text-xs uppercase tracking-tight text-stone-500">
                        Remise moyenne des clés
                      </p>
                    </div>
                  </div>
                  <button
                    className="rounded-full border border-stone-400/30 p-3 transition-colors hover:bg-stone-200"
                    aria-label="Suivant"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#0A0A0A] px-6 py-10 text-white md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-stone-500">
            Marques de référence
          </p>
          <div className="brand-logo-track relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-scroll flex shrink-0 items-center gap-14 pr-14 md:gap-16 md:pr-16">
              {brandLogos.map((brand) => (
                <div
                  key={`logo-a-${brand.id}`}
                  className="brand-logo-chip"
                  title={brand.name}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="logo-icon h-10 w-10 md:h-11 md:w-11"
                  />
                </div>
              ))}
            </div>
            <div
              className="animate-scroll flex shrink-0 items-center gap-14 pr-14 md:gap-16 md:pr-16"
              aria-hidden
            >
              {brandLogos.map((brand) => (
                <div
                  key={`logo-b-${brand.id}`}
                  className="brand-logo-chip"
                  title={brand.name}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="logo-icon h-10 w-10 md:h-11 md:w-11"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="service"
        className="relative w-full bg-white px-6 py-24 text-stone-900 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal-item mb-24 max-w-2xl">
            <h2
              data-title-build
              className="font-dm-sans mb-8 text-4xl font-light tracking-tight text-stone-900 md:text-6xl"
            >
              {renderTitleParts(serviceTitleParts)}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-stone-600">
              Veloria n’est pas une simple agence: c’est une méthode
              opérationnelle précise pour rendre la location premium aussi
              fluide qu’un trajet bien planifié.
            </p>
          </div>

          <div className="flex w-full flex-col">
            {rules.map((rule, index) => {
              const delayClass = [
                "delay-100",
                "delay-200",
                "delay-300",
                "delay-400",
                "delay-500",
              ][Math.min(index, 4)];

              return (
                <div
                  key={rule.id}
                  className={`group reveal-item ${delayClass} flex flex-col gap-4 py-8 transition-colors md:flex-row md:items-baseline md:gap-12 ${
                    rule.highlight
                      ? "mt-8 rounded-lg bg-stone-100 px-4 py-6 hover:bg-stone-200/80 md:-mx-4 md:items-center"
                      : "border-b border-stone-300 hover:bg-stone-100/80"
                  }`}
                >
                  <div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
                    {rule.highlight ? (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-stone-100">
                        <CarFront className="h-3.5 w-3.5" />
                      </div>
                    ) : (
                      <span className="font-mono text-stone-500">
                        {rule.id}
                      </span>
                    )}
                    <span className="font-medium tracking-tight text-stone-900">
                      {rule.title}
                    </span>
                  </div>
                  <div className="basis-2/3">
                    <p
                      className={`text-base leading-relaxed ${
                        rule.highlight
                          ? "text-stone-700"
                          : "text-stone-600 transition-colors group-hover:text-stone-800"
                      }`}
                    >
                      {rule.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#0E0E0E] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.09),transparent_45%),radial-gradient(circle_at_78%_75%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal-item mb-12 max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-stone-300">
              Présentation Berline
            </span>
            <h2
              data-title-build
              className="font-dm-sans text-4xl font-light tracking-tight text-white md:text-6xl"
            >
              {renderTitleParts(sedanTitleParts)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-300 md:text-lg">
              Extrait vidéo réel d&apos;une berline premium, tourné en
              conditions urbaines, pour illustrer le niveau de finition de la
              flotte Veloria.
            </p>
          </div>

          <motion.div
            className="reveal-item delay-300 relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-black/35 p-2 shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <video
              className="h-[420px] w-full rounded-[1rem] object-cover md:h-[560px]"
              src="/black-car-doors-open.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
          <p className="reveal-item delay-500 mt-4 text-xs uppercase tracking-[0.16em] text-stone-400">
            Source vidéo:{" "}
            <a
              href="https://www.pexels.com/video/black-car-with-doors-open-4213090/"
              target="_blank"
              rel="noreferrer"
              className="text-stone-300 transition-colors hover:text-white"
            >
              Pexels
            </a>
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-white px-6 pb-24 pt-24 text-stone-900 md:px-12 md:py-32">
        <div className="pointer-events-none absolute inset-0 select-none">
          <div className="relative mx-auto h-full max-w-7xl border-x border-stone-300/40">
            <div className="absolute inset-y-0 left-1/2 hidden w-px -ml-px bg-stone-300/40 md:block lg:hidden" />
            <div className="absolute inset-y-0 left-1/3 hidden w-px -ml-px bg-stone-300/40 lg:block" />
            <div className="absolute inset-y-0 left-2/3 hidden w-px -ml-px bg-stone-300/40 lg:block" />
          </div>
        </div>

        <div className="relative z-10 w-full">
          <div className="reveal-item mx-auto mb-20 flex max-w-7xl flex-col items-center text-center">
            <span className="mb-8 rounded-full border border-stone-300/60 bg-white/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-500 backdrop-blur-sm">
              Avis Google vérifiés
            </span>
            <h2
              data-title-build
              className="font-dm-sans max-w-4xl text-4xl font-light tracking-tight text-stone-900 md:text-6xl"
            >
              {renderTitleParts(reviewsTitleParts)}
            </h2>
          </div>

          <div className="review-stream reveal-item delay-200 -mx-6 w-full overflow-hidden px-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:-mx-12 md:px-12">
            <div className="animate-scroll-cards no-pause flex w-max gap-6 py-4">
              {[...googleReviews, ...googleReviews].map((review, index) => {
                const Icon = review.icon;
                const cardAngleClass =
                  index % 3 === 0
                    ? "md:-rotate-[0.7deg]"
                    : index % 3 === 1
                      ? "md:rotate-[0.55deg]"
                      : "md:-rotate-[0.25deg]";

                return (
                  <motion.article
                    key={`${review.id}-${index}`}
                    className={`review-card-advanced ${cardAngleClass} flex w-[350px] flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:w-[450px]`}
                    aria-hidden={index >= googleReviews.length}
                    whileHover={{ y: -8 }}
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <img
                          src={review.vehicleImage}
                          alt={review.vehicleAlt}
                          loading="lazy"
                          className={`h-16 w-24 rounded-xl border border-stone-200 object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)] ${review.tiltClass}`}
                        />
                      </div>
                      <p className="font-dm-sans mb-8 text-xl font-light leading-snug text-stone-800">
                        &quot;{review.quote}&quot;
                      </p>
                    </div>
                    <div className="space-y-3 border-t border-stone-100 pt-6">
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating, true)}
                      </div>
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-stone-500">
                        <span>Avis Google</span>
                        <span>{review.date}</span>
                      </div>
                      <p className="text-sm text-stone-600">{review.context}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="reveal-item delay-500 mx-auto mt-24 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-scroll flex w-max items-center gap-12 py-2">
              {[...topics, ...topics].map((topic, index) => (
                <div
                  key={`${topic}-${index}`}
                  className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80"
                >
                  <span>{topic}</span>
                  <span className="text-stone-300/40">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="relative w-full overflow-hidden bg-white px-6 py-24 text-stone-900 md:px-12 md:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.18),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal-item mb-16 max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-stone-400/50 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-stone-600">
              Portfolio Location
            </span>
            <h2
              data-title-build
              className="font-dm-sans text-4xl font-light tracking-tight text-stone-900 md:text-6xl"
            >
              {renderTitleParts(portfolioTitleParts)}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                className={`portfolio-panel reveal-item ${item.delayClass} ${item.layoutClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="portfolio-image"
                />
                <div className="portfolio-gradient" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
                  <span className="w-fit rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                    {item.badge}
                  </span>
                  <div className="max-w-md">
                    <h3 className="font-dm-sans text-3xl font-light tracking-tight text-white md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                      {item.subtitle}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/85">
                      <span>Voir la disponibilité</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tarifs"
        className="pricing-lift-panel relative z-20 w-full overflow-hidden rounded-t-none rounded-b-[2.35rem] border-b border-x border-stone-800 bg-stone-900 px-6 py-24 text-[#F2F0EB] md:rounded-b-[2.9rem] md:px-12 md:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-stone-800/20 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-gradient-to-tr from-stone-800/30 via-stone-900/10 to-transparent blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="reveal-item mb-20 max-w-3xl">
            <span className="mb-8 inline-block rounded-full border border-stone-700 bg-stone-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-400">
              Tarification
            </span>
            <h2
              data-title-build
              className="font-dm-sans mb-8 text-4xl font-light tracking-tight text-white md:text-6xl"
            >
              {renderTitleParts(pricingTitleParts)}
            </h2>
            <p className="text-lg leading-relaxed text-stone-400">
              Pas de frais cachés: kilométrage, protection et assistance sont
              affichés dès la réservation. Vous payez ce que vous voyez.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.id}
                className={`reveal-item pricing-card-shine relative rounded-2xl border p-8 transition-all ${
                  plan.featured
                    ? "delay-200 border-stone-500 bg-stone-100 text-stone-900 shadow-[0_20px_60px_rgba(255,255,255,0.08)]"
                    : `delay-${Math.min((index + 1) * 100, 500)} border-stone-800 bg-stone-900/60 text-[#F2F0EB] hover:-translate-y-1.5 hover:bg-stone-800/70`
                }`}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`mb-2 text-xs uppercase tracking-widest ${
                        plan.featured ? "text-stone-600" : "text-stone-500"
                      }`}
                    >
                      {plan.tag}
                    </p>
                    <h3
                      className={`font-dm-sans text-3xl font-light tracking-tight ${
                        plan.featured ? "text-stone-900" : "text-white"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-stone-900 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-stone-100">
                      recommandé
                    </span>
                  ) : null}
                </div>

                <div className="mb-8 border-b border-current/15 pb-8">
                  <p className="font-dm-sans text-5xl font-light tracking-tight">
                    {plan.price}€
                    <span className="ml-2 text-lg font-normal opacity-70">
                      {plan.cadence}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition-all ${
                    plan.featured
                      ? "bg-stone-900 text-white hover:bg-black"
                      : "border border-stone-700 bg-stone-800/70 text-stone-200 hover:border-stone-600 hover:bg-stone-700"
                  }`}
                  aria-label={`Choisir ${plan.name}`}
                >
                  Choisir {plan.name}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          <p className="reveal-item delay-500 mt-8 text-xs uppercase tracking-[0.16em] text-stone-500">
            Exemple de tarifs TTC constatés en basse saison, hors options
            spécifiques.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="footer-reveal-panel relative z-10 -mt-20 w-full overflow-hidden bg-[#050505] pb-12 pt-36 text-[#F2F0EB] md:-mt-24 md:pt-44"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-stone-800/20 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-gradient-to-tr from-stone-800/30 via-stone-900/10 to-transparent blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal-item mb-32 flex flex-col items-center text-center">
            <div className="group relative mb-10 animate-float-slow">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-stone-700 to-stone-900 opacity-40 blur transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-800 bg-[#0A0A0A] shadow-2xl">
                <PhoneCall className="h-7 w-7 text-white" />
              </div>
            </div>

            <h2 className="font-dm-sans mb-6 max-w-3xl text-5xl font-light tracking-tight text-white md:text-6xl">
              Réservez votre véhicule dès maintenant
            </h2>
            <p className="mb-10 max-w-lg text-lg font-light leading-relaxed text-stone-400">
              Obtenez une proposition en moins de 2 minutes pour Paris, Lyon,
              Marseille, Lille, Bordeaux et plus de 40 villes françaises.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#tarifs"
                className="group relative flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-stone-950 transition-all hover:scale-105 hover:bg-white"
              >
                <span>Commencer la réservation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="group flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/30 px-8 py-3 text-sm font-medium text-stone-300 backdrop-blur-sm transition-colors hover:border-stone-700 hover:bg-stone-800 hover:text-white"
              >
                <span>Voir le portfolio complet</span>
              </a>
            </div>
          </div>

          <div className="reveal-item delay-200 border-t border-stone-800/60 pt-16">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="flex flex-col justify-between lg:col-span-5">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <CarFront className="h-7 w-7 text-[#F2F0EB]" />
                    <span className="font-dm-sans text-2xl font-light tracking-tight text-white">
                      Veloria
                    </span>
                  </div>
                  <p className="max-w-xs text-sm font-normal leading-relaxed text-stone-500">
                    Location de véhicules premium en France pour les trajets
                    business, tourisme et mobilité longue durée.
                  </p>
                </div>

                <div className="mt-8 flex gap-5 md:mt-12">
                  <a
                    href="#"
                    className="rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white"
                    aria-label="Instagram"
                  >
                    <span className="block h-4 w-4 rounded-full border border-current" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white"
                    aria-label="Facebook"
                  >
                    <span className="block h-4 w-4 rounded-sm border border-current" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white"
                    aria-label="X"
                  >
                    <span className="block h-4 w-4 text-center text-xs font-medium leading-4">
                      X
                    </span>
                  </a>
                </div>
              </div>

              <div className="hidden lg:col-span-2 lg:block" />

              <div className="col-span-1 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-5 lg:gap-12">
                <div>
                  <h3 className="mb-6 text-sm font-medium tracking-tight text-white">
                    Société
                  </h3>
                  <ul className="space-y-4 text-sm text-stone-500">
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Notre histoire
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Carrières
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Presse
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Contact agences
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-6 text-sm font-medium tracking-tight text-white">
                    Aide client
                  </h3>
                  <ul className="space-y-4 text-sm text-stone-500">
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Conditions de location
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        FAQ assurance
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Politique carburant
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-stone-300"
                      >
                        Statut du service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-stone-900/80 pt-6 text-xs uppercase tracking-[0.16em] text-stone-500">
              Créé par Nova · 2026 Tous droits réservés.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
