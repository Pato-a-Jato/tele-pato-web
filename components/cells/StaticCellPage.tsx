import Image from "next/image";
import Link from "next/link";
import CellIcon, { type CellIconName } from "@/components/cells/CellIcon";
import Reveal from "@/components/landing/Reveal";
import type { Photo } from "@/lib/photos";
import { team } from "@/lib/team";

export type CellGuide = {
  slug: "powertrain" | "estrutura" | "eletronica" | "administracao";
  index: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  hero: Photo;
  heroPosition?: string;
  facts: readonly { value: string; label: string }[];
  overviewTitle: string;
  overview: readonly string[];
  systemFlow: readonly string[];
  areas: readonly {
    icon: CellIconName;
    title: string;
    description: string;
    tasks: readonly string[];
    tools: readonly string[];
  }[];
  workflow: readonly {
    title: string;
    text: string;
    output: string;
  }[];
  learning: readonly string[];
  profile: readonly string[];
  gallery: readonly Photo[];
  next: {
    name: string;
    slug: "powertrain" | "estrutura" | "eletronica" | "administracao";
  };
};

const cellRoutes = [
  { slug: "powertrain", name: "Powertrain", index: "01" },
  { slug: "estrutura", name: "Estrutura", index: "02" },
  { slug: "eletronica", name: "Eletrônica", index: "03" },
  { slug: "administracao", name: "Administração", index: "04" },
] as const;

function BrandMark() {
  return (
    <span className="brand-mark h-9 w-9" aria-hidden="true">
      <span>PJ</span>
    </span>
  );
}

export default function StaticCellPage({ guide }: { guide: CellGuide }) {
  return (
    <div className="min-h-full overflow-x-hidden bg-[#f4f3ee] text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-[90rem] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Voltar ao início">
            <BrandMark />
            <span className="text-sm font-semibold tracking-tight text-white">Pato a Jato</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label={`Navegação da célula de ${guide.name}`}>
            <a href="#visao-geral" className="nav-link">Visão geral</a>
            <a href="#areas" className="nav-link">Áreas</a>
            <a href="#processo" className="nav-link">Como trabalhamos</a>
            <a href="#perfil" className="nav-link">Seu perfil</a>
          </nav>
          <Link href="/processo-seletivo#inscricao" className="button-yellow min-h-0 px-4 py-2.5 text-xs sm:px-5">
            Participar <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="cell-hero relative flex min-h-[90svh] items-end overflow-hidden bg-black text-white">
          <Image
            src={guide.hero.src}
            alt={guide.hero.alt}
            fill
            priority
            sizes="100vw"
            className="cell-hero-image object-cover"
            style={{ objectPosition: guide.heroPosition ?? "center 42%" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.97)_0%,rgba(0,0,0,.78)_42%,rgba(0,0,0,.2)_86%),linear-gradient(0deg,rgba(0,0,0,.92)_0%,transparent_58%)]" />
          <div className="telemetry-grid absolute inset-0 opacity-20" />
          <div className="cell-hero-emblem" aria-hidden="true">
            <span className="cell-hero-emblem-ring" />
            <span className="cell-hero-emblem-ring cell-hero-emblem-ring-inner" />
            <CellIcon name={guide.areas[0].icon} className="h-12 w-12" />
          </div>
          <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-12 pt-32 sm:px-8 sm:pb-16">
            <div className="mb-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] text-white/45">
              <Link href="/" className="transition hover:text-white">Início</Link>
              <span>/</span>
              <span>Células</span>
              <span>/</span>
              <span className="text-[#FBCB04]">{guide.name}</span>
            </div>
            <div className="animate-hero-in grid gap-9 lg:grid-cols-[1fr_.45fr] lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-mono text-sm text-[#FBCB04]">/{guide.index}</span>
                  <span className="h-px w-14 bg-[#FBCB04]/60" />
                  <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/60">{guide.eyebrow}</p>
                </div>
                <h1 className={`cell-title ${guide.slug === "administracao" ? "cell-title-long" : ""}`}>{guide.name}</h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl">{guide.summary}</p>
              </div>
              <div className="border-l border-white/15 pl-6 lg:justify-self-end">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#FBCB04]">Em uma frase</p>
                <p className="mt-3 max-w-sm text-xl font-bold leading-7 text-white sm:text-2xl">{guide.headline}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10"><div className="hero-progress h-full bg-[#FBCB04]" /></div>
        </section>

        <section className="border-b border-black/10 bg-[#FBCB04]">
          <div className="mx-auto grid max-w-[90rem] sm:grid-cols-3">
            {guide.facts.map((fact, index) => (
              <div key={fact.label} className="cell-fact flex items-center gap-5 border-b border-black/15 px-5 py-6 last:border-b-0 sm:border-r sm:border-b-0 sm:px-8 sm:py-8 sm:last:border-r-0">
                <span className="font-mono text-xs text-black/35">/{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong className="block text-xl tracking-[-.03em]">{fact.value}</strong>
                  <span className="mt-1 block text-xs text-black/55">{fact.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="visao-geral" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Entenda a célula</p>
                <h2 className="mt-5 text-[clamp(2.8rem,5.7vw,6.2rem)] font-black leading-[.9] tracking-[-.065em]">{guide.overviewTitle}</h2>
              </div>
              <div className="space-y-6 lg:pt-10">
                {guide.overview.map((paragraph) => (
                  <p key={paragraph} className="max-w-3xl text-lg leading-8 text-black/60 first:text-xl first:leading-9 sm:first:text-2xl sm:first:leading-10">{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-18 overflow-hidden rounded-[2rem] bg-black text-white" delay={100}>
              <div className="grid lg:grid-cols-[.38fr_1.62fr]">
                <div className="border-b border-white/10 p-7 sm:p-9 lg:border-r lg:border-b-0">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#FBCB04]">O sistema completo</p>
                  <p className="mt-4 text-sm leading-6 text-white/50">Cada etapa recebe uma informação ou recurso e entrega algo mais próximo do carro pronto.</p>
                </div>
                <div className="cell-system-flow">
                  {guide.systemFlow.map((step, index) => (
                    <div key={step} className="cell-system-node">
                      <span className="cell-system-icon"><CellIcon name={guide.areas[index]?.icon ?? guide.areas[0].icon} /></span>
                      <strong>{step}</strong>
                      {index < guide.systemFlow.length - 1 ? <i aria-hidden="true">→</i> : null}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="cell-photo-story mt-5">
              {guide.gallery.slice(0, 2).map((photo, index) => (
                <Reveal key={photo.src} className="cell-photo-story-item" delay={index * 90}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="cell-photo-story-shade" />
                  <div className="cell-photo-story-caption">
                    <span>0{index + 1}</span>
                    <p>{photo.alt}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="scroll-mt-18 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <div>
                <p className="eyebrow">O que fazemos</p>
                <h2 className="section-title mt-5">Áreas de<br />atuação.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-black/55 lg:justify-self-end">
                A célula reúne atividades diferentes dentro do mesmo objetivo. Você não precisa dominar todas: cada integrante começa por uma frente e evolui com projetos reais.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-4 lg:grid-cols-2">
              {guide.areas.map((area, index) => (
                <Reveal key={area.title} className="h-full" delay={(index % 2) * 70}>
                  <article className="cell-discipline-card h-full">
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-mono text-xs text-black/30">/{String(index + 1).padStart(2, "0")}</span>
                      <span className="cell-discipline-icon"><CellIcon name={area.icon} /></span>
                    </div>
                    <h3 className="mt-10 text-2xl font-black tracking-[-.04em] sm:text-3xl">{area.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">{area.description}</p>
                    <div className="mt-7 border-t border-black/10 pt-6">
                      <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/35">Na prática</p>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-black/65 sm:grid-cols-2">
                        {area.tasks.map((task) => <li key={task} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FBCB04]" />{task}</li>)}
                      </ul>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {area.tools.map((tool) => <span key={tool} className="tech-pill">{tool}</span>)}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="cell-image-break" aria-label={`${guide.name} em ação`}>
          <Image
            src={guide.gallery[2].src}
            alt={guide.gallery[2].alt}
            fill
            sizes="100vw"
            className="cell-image-break-photo object-cover"
          />
          <div className="cell-image-break-overlay" />
          <div className="relative mx-auto flex min-h-[68svh] max-w-[90rem] items-end px-5 py-12 text-white sm:px-8 sm:py-16">
            <Reveal className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="live-dot" />
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#FBCB04]">A célula em ação</p>
              </div>
              <p className="text-3xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{guide.gallery[2].alt}</p>
            </Reveal>
          </div>
        </section>

        <section id="processo" className="scroll-mt-18 bg-black py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-[#FBCB04]">Como trabalhamos</p>
              <h2 className="section-title mt-5 text-white">Da ideia<br />à entrega.</h2>
            </Reveal>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4">
              {guide.workflow.map((step, index) => (
                <Reveal key={step.title} className="h-full" delay={index * 60}>
                  <article className="cell-workflow-card flex h-full min-h-80 flex-col bg-[#0b0b0b] p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#FBCB04]">/{String(index + 1).padStart(2, "0")}</span>
                      <span className="cell-workflow-icon"><CellIcon name={guide.areas[index]?.icon ?? guide.areas[0].icon} /></span>
                    </div>
                    <h3 className="mt-12 text-2xl font-bold tracking-tight">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/48">{step.text}</p>
                    <div className="mt-auto border-t border-white/10 pt-5">
                      <span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/30">Entrega</span>
                      <strong className="mt-2 block text-sm text-white/75">{step.output}</strong>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="perfil" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <div className="grid gap-4 lg:grid-cols-2">
              <Reveal className="rounded-[2rem] bg-[#FBCB04] p-7 sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-black/45">O que você aprende</p>
                <h2 className="mt-5 text-4xl font-black tracking-[-.055em] sm:text-5xl">Conhecimento que vira prática.</h2>
                <ul className="mt-10 grid gap-3">
                  {guide.learning.map((item, index) => (
                    <li key={item} className="flex items-start gap-4 border-t border-black/15 pt-4 text-sm font-semibold leading-6">
                      <span className="font-mono text-[10px] text-black/35">/{String(index + 1).padStart(2, "0")}</span>{item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="rounded-[2rem] bg-white p-7 sm:p-10" delay={80}>
                <p className="eyebrow">Você pode se identificar se...</p>
                <h2 className="mt-5 text-4xl font-black tracking-[-.055em] sm:text-5xl">Curiosidade é o ponto de partida.</h2>
                <ul className="mt-10 grid gap-3">
                  {guide.profile.map((item, index) => (
                    <li key={item} className="flex items-start gap-4 border-t border-black/10 pt-4 text-sm leading-6 text-black/65">
                      <span className="font-mono text-[10px] text-black/30">/{String(index + 1).padStart(2, "0")}</span>{item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-16 grid auto-rows-[18rem] gap-3 md:grid-cols-12 md:auto-rows-[22rem]">
              {guide.gallery.slice(3).map((photo, index) => (
                <Reveal key={photo.src} className={`relative overflow-hidden rounded-[1.5rem] bg-black ${index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12"}`} delay={index * 60}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="cell-gallery-image object-cover" />
                  <div className="cell-gallery-caption"><span>Na prática</span><p>{photo.alt}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-[#FBCB04]">Gostou desta célula?</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(2.7rem,6vw,6.5rem)] font-black leading-[.9] tracking-[-.065em]">Venha aprender construindo.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">No processo seletivo, você pode indicar {guide.name} como sua área principal e contar quais frentes despertaram mais interesse.</p>
            </div>
            <Link href="/processo-seletivo#inscricao" className="button-yellow self-start lg:self-auto">Ir para inscrição <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="bg-[#FBCB04]">
          <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[.55fr_1.45fr]">
            <div className="border-b border-black/15 p-5 sm:p-8 lg:border-r lg:border-b-0">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-black/40">Conheça todas</p>
              <p className="mt-2 text-xl font-black">As quatro células</p>
            </div>
            <div className="grid sm:grid-cols-2">
              {cellRoutes.map((cell) => (
                <Link key={cell.slug} href={`/celulas/${cell.slug}`} aria-current={cell.slug === guide.slug ? "page" : undefined} className={`cell-switcher ${cell.slug === guide.slug ? "cell-switcher-active" : ""}`}>
                  <span className="font-mono text-[10px] opacity-45">/{cell.index}</span>
                  <strong>{cell.name}</strong>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-12 text-white">
          <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[.18em] text-white/35">Próxima célula</p>
              <p className="mt-2 text-2xl font-bold">{guide.next.name}</p>
            </div>
            <Link href={`/celulas/${guide.next.slug}`} className="button-ghost self-start md:self-auto">Continuar explorando <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-9 text-white">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3"><BrandMark /><span className="text-sm font-semibold">{team.fullName}</span></div>
          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <span>{team.university}</span>
            <a href={team.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
