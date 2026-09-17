import Image from "next/image";
import Link from "next/link";
import AnimatedHistory from "@/components/landing/AnimatedHistory";
import Reveal from "@/components/landing/Reveal";
import SponsorContactForm from "@/components/landing/SponsorContactForm";
import TeamRoster from "@/components/landing/TeamRoster";
import { areas, highlights, sources, sponsors, team } from "@/lib/team";
import { areaPhotos, galleryPhotos, heroPhoto, historyPhotos } from "@/lib/photos";

const navLinks = [
  { href: "#equipe", label: "Equipe" },
  { href: "#historia", label: "História" },
  { href: "#integrantes", label: "Integrantes" },
  { href: "#galeria", label: "Galeria" },
  { href: "#patrocinio", label: "Patrocínio" },
  { href: "/processo-seletivo", label: "Processo seletivo" },
];

const sponsorshipBenefits = [
  {
    number: "01",
    title: "Visibilidade com propósito",
    text: "Sua marca presente em protótipos, uniformes, eventos, competições e conteúdos da equipe.",
  },
  {
    number: "02",
    title: "Conexão com talentos",
    text: "Aproxime sua empresa de estudantes que já resolvem desafios reais de engenharia, gestão e tecnologia.",
  },
  {
    number: "03",
    title: "Inovação aplicada",
    text: "Associe sua marca a eficiência energética, pesquisa, sustentabilidade e formação profissional.",
  },
] as const;

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark ${compact ? "h-9 w-9" : "h-11 w-11"}`} aria-hidden="true">
      <span>PJ</span>
    </span>
  );
}

function SponsorIcon({ kind }: { kind: (typeof sponsors)[number]["kind"] }) {
  if (kind === "education") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M7 13v4.5c3 2 7 2 10 0V13M21 10v6" />
      </svg>
    );
  }

  if (kind === "technology") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" />
        <path d="m10 14 4-4m-4 0h4v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4M12 13v5m-4 2h8" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-full overflow-x-hidden bg-[#f4f3ee] text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-[90rem] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Pato a Jato — início">
            <BrandMark compact />
            <span className="text-sm font-semibold tracking-tight text-white">Pato a Jato</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <Link href="/login" className="button-yellow py-2.5 text-xs sm:px-5 sm:text-sm">
            <span className="hidden sm:inline">Abrir </span>telemetria <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main>
        <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-black">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.78)_36%,rgba(0,0,0,.2)_75%),linear-gradient(0deg,rgba(0,0,0,.85)_0%,transparent_45%)]" />
          <div className="telemetry-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto grid w-full max-w-[90rem] gap-12 px-5 pb-10 pt-32 sm:px-8 lg:grid-cols-[1fr_22rem] lg:items-end lg:pb-14">
            <div className="max-w-4xl animate-hero-in">
              <div className="mb-6 flex items-center gap-3">
                <span className="live-dot" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                  UTFPR · Pato Branco · Desde 2009
                </p>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.6rem,9vw,8.5rem)] font-black leading-[0.82] tracking-[-0.075em] text-white">
                ENGENHARIA
                <span className="block text-[#FBCB04]">EM MOVIMENTO.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{team.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#equipe" className="button-yellow">Conheça a equipe <span aria-hidden="true">↓</span></a>
                <Link href="/processo-seletivo" className="button-ghost">Faça parte da equipe <span aria-hidden="true">↗</span></Link>
              </div>
            </div>

            <div className="hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-2xl backdrop-blur-xl lg:block">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/45">Preview / Sessão 03</p>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-semibold uppercase text-emerald-300">online</span>
              </div>
              <div className="mt-6 flex items-end justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs text-white/40">Velocidade</p>
                  <p className="mt-1 text-4xl font-bold text-white">38,4 <span className="text-sm text-white/40">km/h</span></p>
                </div>
                <div className="flex h-10 items-end gap-1" aria-hidden="true">
                  {[35, 60, 45, 80, 55, 92, 65, 75, 48, 86].map((height, index) => (
                    <span key={index} className="telemetry-bar" style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }} />
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div><p className="text-[9px] uppercase text-white/35">RPM</p><p className="mt-1 font-mono text-xs text-white">5.280</p></div>
                <div><p className="text-[9px] uppercase text-white/35">Motor</p><p className="mt-1 font-mono text-xs text-white">84,2°C</p></div>
                <div><p className="text-[9px] uppercase text-white/35">Bateria</p><p className="mt-1 font-mono text-xs text-white">12,4V</p></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10"><div className="hero-progress h-full bg-[#FBCB04]" /></div>
        </section>

        <section aria-label="Principais resultados" className="border-b border-black/10 bg-[#FBCB04]">
          <div className="mx-auto grid max-w-[90rem] grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="border-r border-black/15 p-6 last:border-r-0 sm:p-8">
                <p className="text-4xl font-black tracking-tighter text-black sm:text-5xl">
                  {item.value}<span className="ml-1 text-sm font-semibold tracking-normal text-black/55">{item.unit}</span>
                </p>
                <p className="mt-2 text-xs font-medium text-black/55">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="equipe" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="eyebrow">A equipe</p>
                <h2 className="section-title mt-5">Aprender fazendo.<br />Vencer evoluindo.</h2>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-xl leading-8 text-black/70 sm:text-2xl sm:leading-9">
                  Mais que um carro, a Pato a Jato é uma plataforma de formação. Estudantes de diferentes cursos assumem problemas reais, da fibra de carbono ao firmware.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
                  <span>Etanol brasileiro</span><span>Protótipo ICE</span><span>Shell Eco-marathon</span>
                </div>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {areas.map((area) => {
                const photo = areaPhotos[area.slug]?.[0];
                return (
                  <Reveal key={area.slug} className="h-full" >
                    <Link href={`/celulas/${area.slug}`} className="area-card group block" aria-label={`Conhecer a célula de ${area.name}`}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-black">
                        {photo ? <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" /> : null}
                        <span className="absolute left-5 top-5 font-mono text-xs text-white/65">/{area.index}</span>
                      </div>
                      <div className="p-6 sm:p-7">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-2xl font-bold tracking-tight">{area.name}</h3>
                          <span className="area-card-arrow" aria-hidden="true">↗</span>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-black/55">{area.summary}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {area.skills.map((skill) => <span key={skill} className="tech-pill">{skill}</span>)}
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="historia" className="scroll-mt-18 overflow-hidden bg-[#080808] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal>
              <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div><p className="eyebrow text-[#FBCB04]">Linha do tempo</p><h2 className="section-title mt-5 text-white">Cada volta<br />deixou uma marca.</h2></div>
                <p className="max-w-md text-sm leading-6 text-white/50">Role para percorrer uma trajetória construída por gerações de estudantes — do primeiro E Daí ao recorde continental de 768 km/L.</p>
              </div>
            </Reveal>
            <AnimatedHistory />
          </div>
        </section>

        <section id="integrantes" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal>
              <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
                <div><p className="eyebrow">Legado humano</p><h2 className="section-title mt-5">Quem fez<br />a Pato voar.</h2></div>
                <p className="max-w-xl text-sm leading-6 text-black/55 lg:justify-self-end">Integrantes e orientadores identificados em publicações oficiais da UTFPR. A lista registra gerações conhecidas e pode não representar todos que passaram pelo projeto.</p>
              </div>
              <TeamRoster />
            </Reveal>
          </div>
        </section>

        <section className="bg-black py-6 text-white">
          <div className="marquee" aria-label="Engenharia, eficiência, dados e futuro">
            {["ENGENHARIA", "EFICIÊNCIA", "DADOS", "COMPÓSITOS", "ETANOL", "FUTURO"].map((word) => (
              <span key={word}>{word}<i>●</i></span>
            ))}
          </div>
        </section>

        <section id="galeria" className="scroll-mt-18 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal>
              <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div><p className="eyebrow">Por dentro do projeto</p><h2 className="section-title mt-5">Oficina. Pista.<br />Comunidade.</h2></div>
                <p className="max-w-sm text-sm leading-6 text-black/50">O trabalho aparece nos detalhes: mãos na bancada, decisões em tempo real e uma equipe inteira celebrando junta.</p>
              </div>
              <div className="gallery-grid">
                {[historyPhotos[1], galleryPhotos[7], galleryPhotos[0], galleryPhotos[8], historyPhotos[2], galleryPhotos[5]].map((photo, index) => (
                  <figure key={photo.src} className={`gallery-item gallery-item-${index + 1} group`}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-xs text-white/75 opacity-0 transition group-hover:opacity-100">{photo.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#FBCB04] py-20">
          <div className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="eyebrow">Telemetria Pato a Jato</p><h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">DA PISTA PARA A DECISÃO, EM TEMPO REAL.</h2></div>
            <Link href="/login" className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-black px-8 font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl">Explorar dashboard <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section id="patrocinio" className="scroll-mt-18 overflow-hidden border-b border-white/10 bg-black py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#FBCB04]">Patrocinadores e parceiros</p>
                <h2 className="section-title mt-5 text-white">Quem acredita,<br />chega junto.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/60 lg:justify-self-end">
                Cada apoio se transforma em materiais, testes, viagens e aprendizado. Em troca, construímos uma parceria viva entre marca, universidade, tecnologia e resultados em pista.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {sponsors.map((sponsor) => (
                <Reveal key={sponsor.name} className="h-full">
                  <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                      <Image src={sponsor.image.src} alt={sponsor.image.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                      <span className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-full bg-[#FBCB04] text-black shadow-xl">
                        <span className="h-6 w-6"><SponsorIcon kind={sponsor.kind} /></span>
                      </span>
                    </div>
                    <div className="p-7 sm:p-8">
                      <span className="font-mono text-[10px] uppercase tracking-[.16em] text-[#FBCB04]">{sponsor.role}</span>
                      <p className="mt-3 text-xl font-bold">{sponsor.name}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-20 grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
              <Reveal>
                <p className="eyebrow text-[#FBCB04]">Por que patrocinar</p>
                <h3 className="mt-5 max-w-md text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl">
                  Sua empresa também pode fazer parte desta história.
                </h3>
              </Reveal>
              <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10">
                {sponsorshipBenefits.map((benefit, index) => (
                  <Reveal key={benefit.number} delay={index * 70}>
                    <article className="grid gap-5 bg-[#0b0b0b] p-7 sm:grid-cols-[3rem_1fr] sm:p-8">
                      <span className="font-mono text-xs text-[#FBCB04]">/{benefit.number}</span>
                      <div>
                        <h4 className="text-xl font-bold">{benefit.title}</h4>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">{benefit.text}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-16">
              <SponsorContactForm email={team.email} instagram={team.instagram} />
            </Reveal>

            <details className="mt-14 border-t border-white/10 pt-6 text-sm text-white/45">
              <summary className="cursor-pointer font-semibold text-white/70">Fontes da pesquisa histórica</summary>
              <ul className="mt-4 space-y-2">
                {sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="transition hover:text-[#FBCB04]">{source.label} ↗</a></li>)}
              </ul>
            </details>
          </div>
        </section>
      </main>

      <footer className="bg-black py-10 text-white">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-end">
          <div className="flex items-center gap-4"><BrandMark /><div><p className="font-semibold">{team.fullName}</p><p className="mt-1 text-xs text-white/40">{team.university} · {team.campus}</p></div></div>
          <div className="flex flex-wrap gap-5 text-xs text-white/45"><Link href="/processo-seletivo" className="hover:text-white">Processo seletivo ↗</Link><a href={`mailto:${team.email}`} className="hover:text-white">{team.email}</a><a href={team.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram ↗</a><span>© 2009—2026</span></div>
        </div>
      </footer>
    </div>
  );
}
