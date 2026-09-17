"use client";

import { FormEvent, useState } from "react";
import { areas } from "@/lib/team";

export default function ApplicationForm({ email }: { email: string }) {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const applicantEmail = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const course = String(data.get("course") ?? "");
    const period = String(data.get("period") ?? "");
    const primaryArea = String(data.get("primaryArea") ?? "");
    const secondaryArea = String(data.get("secondaryArea") ?? "Não informada");
    const availability = String(data.get("availability") ?? "");
    const experience = String(data.get("experience") ?? "Não informada");
    const motivation = String(data.get("motivation") ?? "");
    const subject = `Inscrição no processo seletivo — ${name}`;
    const body = [
      "Olá, equipe Pato a Jato!",
      "",
      "Gostaria de me inscrever no processo seletivo.",
      "",
      `Nome: ${name}`,
      `E-mail: ${applicantEmail}`,
      `Telefone/WhatsApp: ${phone}`,
      `Curso: ${course}`,
      `Período/semestre: ${period}`,
      `Área de maior interesse: ${primaryArea}`,
      `Segunda opção: ${secondaryArea}`,
      `Disponibilidade: ${availability}`,
      "",
      "Experiências e conhecimentos:",
      experience,
      "",
      "Por que quero fazer parte da equipe:",
      motivation,
    ].join("\n");

    setPrepared(true);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-7 text-black shadow-[0_30px_80px_rgba(0,0,0,.16)] sm:p-10 lg:p-12">
      <div className="mb-10 flex flex-col justify-between gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Formulário de inscrição</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-.04em] sm:text-4xl">Queremos conhecer você.</h2>
        </div>
        <span className="self-start rounded-full bg-[#FBCB04] px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] sm:self-auto">Inscrição por e-mail</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field">
          <span>Nome completo</span>
          <input className="form-control" type="text" name="name" autoComplete="name" placeholder="Seu nome" required />
        </label>
        <label className="form-field">
          <span>E-mail</span>
          <input className="form-control" type="email" name="email" autoComplete="email" placeholder="voce@email.com" required />
        </label>
        <label className="form-field">
          <span>Telefone / WhatsApp</span>
          <input className="form-control" type="tel" name="phone" autoComplete="tel" placeholder="(00) 00000-0000" required />
        </label>
        <label className="form-field">
          <span>Curso</span>
          <input className="form-control" type="text" name="course" autoComplete="organization-title" placeholder="Ex.: Engenharia Mecânica" required />
        </label>
        <label className="form-field">
          <span>Período ou semestre</span>
          <input className="form-control" type="text" name="period" placeholder="Ex.: 3º período" required />
        </label>
        <label className="form-field">
          <span>Disponibilidade semanal</span>
          <select className="form-control" name="availability" defaultValue="" required>
            <option value="" disabled>Selecione</option>
            <option>Até 4 horas</option>
            <option>De 4 a 8 horas</option>
            <option>De 8 a 12 horas</option>
            <option>Mais de 12 horas</option>
          </select>
        </label>
        <label className="form-field">
          <span>Área de maior interesse</span>
          <select className="form-control" name="primaryArea" defaultValue="" required>
            <option value="" disabled>Escolha uma célula</option>
            {areas.map((area) => <option key={area.slug}>{area.name}</option>)}
          </select>
        </label>
        <label className="form-field">
          <span>Segunda opção</span>
          <select className="form-control" name="secondaryArea" defaultValue="">
            <option value="">Não tenho segunda opção</option>
            {areas.map((area) => <option key={area.slug}>{area.name}</option>)}
          </select>
        </label>
        <label className="form-field sm:col-span-2">
          <span>Experiências e conhecimentos</span>
          <textarea className="form-control min-h-28 resize-y" name="experience" placeholder="Vale projeto de disciplina, curso, trabalho, hobby ou algo que você aprendeu por conta própria." />
        </label>
        <label className="form-field sm:col-span-2">
          <span>Por que você quer fazer parte da Pato a Jato?</span>
          <textarea className="form-control min-h-36 resize-y" name="motivation" placeholder="Conte o que chamou sua atenção e o que você gostaria de aprender ou construir com a equipe." required />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-black/55">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[#FBCB04]" required />
        <span>Confirmo que as informações estão corretas e autorizo o uso destes dados somente para contato relacionado ao processo seletivo.</span>
      </label>

      <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-xs leading-5 text-black/45">
          Por enquanto, o site não armazena inscrições. Ao continuar, seu aplicativo de e-mail abrirá com todos os dados preenchidos para você revisar e enviar.
        </p>
        <button type="submit" className="button-yellow min-h-14 shrink-0 px-8">
          Preparar inscrição <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="mt-4 text-xs font-semibold text-emerald-700" aria-live="polite">
        {prepared ? "Inscrição preparada. Revise os dados no seu aplicativo de e-mail e conclua o envio." : ""}
      </p>
    </form>
  );
}
