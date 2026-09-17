import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ApplicationForm from "@/components/recruitment/ApplicationForm";
import Reveal from "@/components/landing/Reveal";
import { historyPhotos } from "@/lib/photos";
import { areas, team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Processo seletivo — Pato a Jato",
  description: "Conheça as células da Pato a Jato e prepare sua inscrição para fazer parte da equipe.",
};

const stages = [
  {
    number: "01",
    title: "Inscrição",
    text: "Conte quem você é, sua área de interesse e o que gostaria de aprender dentro da equipe.",
  },
  {
    number: "02",
    title: "Apresentação",
    text: "Conheça a rotina, os desafios atuais e as pessoas que fazem cada célula funcionar.",
  },
  {
    number: "03",
    title: "Conversa",
    text: "Um encontro para alinhar expectativas, disponibilidade e possibilidades de contribuição.",
  },
  {
    number: "04",
    title: "Integração",
    text: "Os novos integrantes começam a aprender na prática, acompanhados pela própria equipe.",
  },
] as const;

function BrandMark() {
  return (
    <span className="brand-mark h-9 w-9" aria-hidden="true">
      <span>PJ</span>
    </span>
  );
}

export default function RecruitmentPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-[#f4f3ee] text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-[90rem] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Voltar ao início">
            <BrandMark />
            <span className="text-sm font-semibold tracking-tight text-white">Pato a Jato</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação do processo seletivo">
            <a href="#etapas" className="nav-link">Etapas</a>
            <a href="#celulas" className="nav-link">Células</a>
            <a href="#inscricao" className="nav-link">Inscrição</a>
          </nav>
          <Link href="/" className="button-yellow min-h-0 px-4 py-2.5 text-xs sm:px-5">
            Voltar ao site <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-black text-white">
          <Image
            src={historyPhotos[1].src}
            alt={historyPhotos[1].alt}
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.76)_44%,rgba(0,0,0,.2)_85%),linear-gradient(0deg,rgba(0,0,0,.9)_0%,transparent_58%)]" />
          <div className="telemetry-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-12 pt-32 sm:px-8 sm:pb-16">
            <div className="animate-hero-in max-w-5xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="live-dot" />
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/55">Processo seletivo · Pato a Jato</p>
              </div>
              <h1 className="text-[clamp(3.3rem,8.6vw,8.2rem)] font-black leading-[.84] tracking-[-.072em]">
                SEU PRÓXIMO
                <span className="block text-[#FBCB04]">PROJETO</span>
                COMEÇA AQUI.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-xl sm:leading-8">
                Faça parte de uma equipe multidisciplinar, enfrente problemas reais e transforme conhecimento em um protótipo que vai para a pista.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#inscricao" className="button-yellow">Quero me inscrever <span aria-hidden="true">↓</span></a>
                <a href="#celulas" className="button-ghost">Conhecer as células <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10"><div className="hero-progress h-full bg-[#FBCB04]" /></div>
        </section>

        <section className="border-b border-black/10 bg-[#FBCB04]">
          <div className="mx-auto grid max-w-[90rem] grid-cols-1 sm:grid-cols-3">
            {["Projeto real", "Equipe multidisciplinar", "Aprendizado na prática"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/15 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:p-8 sm:last:border-r-0">
                <span className="font-mono text-xs text-black/40">/{String(index + 1).padStart(2, "0")}</span>
                <strong className="text-sm uppercase tracking-[.08em]">{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
              <div>
                <p className="eyebrow">Quem pode participar</p>
                <h2 className="section-title mt-5">Você não precisa<br />chegar pronto.</h2>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-xl leading-9 text-black/65 sm:text-2xl sm:leading-10">
                  Curiosidade, responsabilidade e vontade de construir em equipe importam tanto quanto conhecimento técnico. A Pato a Jato reúne diferentes cursos em torno do mesmo desafio.
                </p>
                <p className="mt-6 text-sm leading-7 text-black/50">
                  Experiências acadêmicas, profissionais, pessoais e projetos próprios são bem-vindos — inclusive quando este for o seu primeiro grande projeto.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="etapas" className="scroll-mt-18 bg-black py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-[#FBCB04]">Como funciona</p>
              <h2 className="section-title mt-5 text-white">Da inscrição<br />à oficina.</h2>
            </Reveal>
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {stages.map((stage, index) => (
                <Reveal key={stage.number} className="h-full" delay={index * 70}>
                  <article className="h-full bg-[#0b0b0b] p-7 sm:p-8">
                    <span className="font-mono text-xs text-[#FBCB04]">/{stage.number}</span>
                    <h3 className="mt-16 text-2xl font-bold">{stage.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/50">{stage.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="celulas" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <p className="eyebrow">Onde você pode atuar</p>
                <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl">Escolha seu ponto de partida.</h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-black/55 lg:justify-self-end">
                Você pode indicar uma área principal e uma segunda opção. Conheça o foco de cada célula antes de preencher sua inscrição.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {areas.map((area, index) => (
                <Reveal key={area.slug} className="h-full" delay={index * 60}>
                  <Link href={`/celulas/${area.slug}`} className="area-card group flex min-h-72 flex-col justify-between p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-mono text-xs text-black/30">/{area.index}</span>
                      <span className="area-card-arrow" aria-hidden="true">↗</span>
                    </div>
                    <div className="mt-16">
                      <h3 className="text-3xl font-black tracking-[-.04em]">{area.name}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-black/50">{area.summary}</p>
                      <div className="mt-6 border-t border-black/10 pt-5">
                        <p className="text-[10px] font-bold uppercase tracking-[.15em] text-black/30">Frentes da célula</p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-black/70">{area.tracks.join(" · ")}</p>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {area.skills.map((skill) => <span key={skill} className="tech-pill">{skill}</span>)}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="inscricao" className="scroll-mt-18 bg-[#111] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
            <Reveal className="mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#FBCB04]">Sua vez</p>
                <h2 className="section-title mt-5 text-white">Entre para<br />a equipe.</h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/55 lg:justify-self-end">
                Preencha com calma. Como esta primeira versão é estática, sua inscrição será preparada como e-mail para você revisar antes do envio.
              </p>
            </Reveal>
            <ApplicationForm email={team.email} />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-9 text-white">
        <div className="mx-auto flex max-w-[90rem] flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3"><BrandMark /><span className="text-sm font-semibold">{team.fullName}</span></div>
          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <a href={`mailto:${team.email}`} className="transition hover:text-white">{team.email}</a>
            <a href={team.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
