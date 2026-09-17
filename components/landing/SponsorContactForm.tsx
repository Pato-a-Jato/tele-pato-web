"use client";

import { FormEvent, useState } from "react";

type SponsorContactFormProps = {
  email: string;
  instagram: string;
};

export default function SponsorContactForm({ email, instagram }: SponsorContactFormProps) {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const company = String(data.get("company") ?? "");
    const name = String(data.get("name") ?? "");
    const contactEmail = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "Não informado");
    const support = String(data.get("support") ?? "A definir");
    const message = String(data.get("message") ?? "");
    const subject = `Proposta de parceria — ${company}`;
    const body = [
      "Olá, equipe Pato a Jato!",
      "",
      `Meu nome é ${name} e falo em nome da empresa ${company}.`,
      `E-mail para contato: ${contactEmail}`,
      `Telefone/WhatsApp: ${phone}`,
      `Possibilidade de apoio: ${support}`,
      "",
      "Sobre a parceria:",
      message,
      "",
      "Gostaria de conversar sobre como podemos apoiar a equipe.",
    ].join("\n");

    setPrepared(true);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white text-black">
      <div className="grid lg:grid-cols-[.78fr_1.22fr]">
        <div className="flex flex-col justify-between bg-[#FBCB04] p-7 sm:p-10 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-black/50">Venha patrocinar</p>
            <h3 className="mt-5 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-5xl">
              Vamos colocar sua marca em movimento.
            </h3>
            <p className="mt-6 max-w-lg text-sm leading-7 text-black/60">
              Conte um pouco sobre sua empresa e a possibilidade de apoio. Nesta versão estática, o formulário prepara a mensagem no seu aplicativo de e-mail.
            </p>
          </div>
          <div className="mt-12 border-t border-black/15 pt-6">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-black/45">Contato direto</p>
            <a href={`mailto:${email}`} className="mt-3 block text-sm font-bold hover:underline">{email}</a>
            <a href={instagram} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-bold hover:underline">Instagram ↗</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-7 sm:p-10 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-field sm:col-span-2">
              <span>Empresa</span>
              <input className="form-control" type="text" name="company" autoComplete="organization" placeholder="Nome da empresa" required />
            </label>
            <label className="form-field">
              <span>Seu nome</span>
              <input className="form-control" type="text" name="name" autoComplete="name" placeholder="Como podemos chamar você?" required />
            </label>
            <label className="form-field">
              <span>E-mail corporativo</span>
              <input className="form-control" type="email" name="email" autoComplete="email" placeholder="voce@empresa.com" required />
            </label>
            <label className="form-field">
              <span>Telefone / WhatsApp</span>
              <input className="form-control" type="tel" name="phone" autoComplete="tel" placeholder="(00) 00000-0000" />
            </label>
            <label className="form-field">
              <span>Possibilidade de apoio</span>
              <select className="form-control" name="support" defaultValue="" required>
                <option value="" disabled>Selecione uma opção</option>
                <option>Recursos financeiros</option>
                <option>Materiais ou componentes</option>
                <option>Serviços ou infraestrutura</option>
                <option>Mentoria e conhecimento técnico</option>
                <option>Apoio institucional</option>
                <option>A definir em conjunto</option>
              </select>
            </label>
            <label className="form-field sm:col-span-2">
              <span>Como imagina essa parceria?</span>
              <textarea className="form-control min-h-32 resize-y" name="message" placeholder="Conte o que sua empresa pode oferecer e quais objetivos gostaria de alcançar com a parceria." required />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-5 text-black/45">
              Nenhum dado é armazenado no site. Você revisa a mensagem no seu aplicativo de e-mail antes de enviá-la.
            </p>
            <button type="submit" className="button-yellow min-h-14 shrink-0 px-7">
              Preparar mensagem <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="mt-4 text-xs font-semibold text-emerald-700" aria-live="polite">
            {prepared ? "Mensagem preparada. Se o e-mail não abriu, use o contato exibido ao lado." : ""}
          </p>
        </form>
      </div>
    </div>
  );
}
