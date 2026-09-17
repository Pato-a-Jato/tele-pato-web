import type { Metadata } from "next";
import StaticCellPage, { type CellGuide } from "@/components/cells/StaticCellPage";
import { areaPhotos, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Administração — Pato a Jato",
  description: "Conheça o trabalho da célula Administrativa com marketing, patrocinadores, recursos humanos, finanças e logística.",
};

function photo(folder: string, file: string, alt: string): Photo {
  return { src: "/" + [folder, file].map(encodeURIComponent).join("/"), alt };
}

const guide = {
  slug: "administracao",
  index: "04",
  name: "Administração",
  eyebrow: "Pessoas · Recursos · Comunicação",
  headline: "Criamos as condições para a engenharia chegar à pista.",
  summary: "Marketing, Recursos Humanos e Financeiro conectam pessoas, parceiros, orçamento e comunicação para transformar o projeto técnico em uma equipe sustentável.",
  hero: areaPhotos.administracao[0],
  heroPosition: "center 44%",
  facts: [
    { value: "3 frentes", label: "Marketing, RH e Financeiro" },
    { value: "Equipe inteira", label: "atuação transversal" },
    { value: "Da base à pista", label: "planejamento e logística" },
  ],
  overviewTitle: "A operação por trás do resultado.",
  overview: [
    "A célula Administrativa organiza tudo que permite à Pato a Jato funcionar como equipe: pessoas bem integradas, recursos controlados, parceiros próximos e comunicação consistente.",
    "Seu trabalho aparece antes, durante e depois de cada projeto. Há processos seletivos e capacitações, orçamentos e compras, produção de conteúdo, relacionamento com patrocinadores, eventos e planejamento de viagens.",
    "É uma célula multidisciplinar e muito próxima das demais. Quem entra pode atuar com gestão, criação, negociação, análise financeira, comunicação ou desenvolvimento de pessoas.",
  ],
  systemFlow: ["Planejamento", "Pessoas", "Recursos", "Comunicação", "Competição"],
  areas: [
    {
      icon: "camera",
      title: "Marketing e mídias",
      description: "Mostramos o projeto para a universidade, a comunidade e futuros integrantes com uma comunicação clara e alinhada à identidade da equipe.",
      tasks: ["Planejar conteúdo", "Produzir textos, fotos e vídeos", "Gerenciar redes sociais", "Criar campanhas"],
      tools: ["Redes sociais", "Design", "Foto e vídeo", "Calendário editorial"],
    },
    {
      icon: "handshake",
      title: "Patrocínios e relações públicas",
      description: "Construímos relações duradouras com empresas e instituições que fornecem conhecimento, serviços, materiais e apoio financeiro.",
      tasks: ["Prospectar parceiros", "Preparar propostas", "Realizar reuniões", "Entregar contrapartidas", "Acompanhar relacionamentos"],
      tools: ["Proposta comercial", "Apresentação", "Negociação", "CRM"],
    },
    {
      icon: "users",
      title: "Recursos Humanos",
      description: "Cuidamos da entrada, integração e desenvolvimento das pessoas que constroem a equipe.",
      tasks: ["Organizar processos seletivos", "Integrar novos membros", "Planejar capacitações", "Acompanhar clima e participação"],
      tools: ["Entrevistas", "Onboarding", "Feedback", "Gestão de pessoas"],
    },
    {
      icon: "wallet",
      title: "Financeiro",
      description: "Planejamos e acompanhamos os recursos para que as decisões da equipe sejam responsáveis e viáveis.",
      tasks: ["Elaborar orçamentos", "Controlar entradas e saídas", "Organizar compras", "Manter o balanço financeiro"],
      tools: ["Planilhas", "Orçamento", "Fluxo de caixa", "Prestação de contas"],
    },
    {
      icon: "package",
      title: "Compras e logística",
      description: "Coordenamos materiais, prazos, deslocamentos e estrutura necessária para oficina, eventos e competições.",
      tasks: ["Solicitar cotações", "Acompanhar pedidos", "Organizar inventário", "Planejar viagens e transporte"],
      tools: ["Cotações", "Inventário", "Cronograma", "Checklists"],
    },
    {
      icon: "megaphone",
      title: "Eventos e comunicação institucional",
      description: "Representamos a equipe em exposições, visitas, apresentações e ações que aproximam o projeto do público.",
      tasks: ["Planejar participação em eventos", "Preparar materiais", "Receber visitantes", "Apresentar resultados"],
      tools: ["Eventos", "Oratória", "Cerimonial", "Relatórios"],
    },
  ],
  workflow: [
    { title: "Planejar", text: "Organizamos metas, calendário, responsáveis, orçamento e necessidades de cada atividade.", output: "Plano de ação" },
    { title: "Conectar", text: "Alinhamos integrantes, universidade, fornecedores, patrocinadores e público.", output: "Pessoas alinhadas" },
    { title: "Viabilizar", text: "Executamos compras, campanhas, processos e logística para que o projeto avance.", output: "Recursos disponíveis" },
    { title: "Acompanhar", text: "Registramos resultados, prestamos contas e transformamos aprendizados em processos melhores.", output: "Operação sustentável" },
  ],
  learning: [
    "Planejar projetos, campanhas e eventos.",
    "Construir propostas e conversar com empresas.",
    "Organizar orçamento, compras e prestação de contas.",
    "Conduzir seleção, integração e capacitação de pessoas.",
    "Comunicar um projeto técnico para públicos diferentes.",
  ],
  profile: [
    "Você gosta de organizar pessoas, informações ou recursos.",
    "Tem interesse por marketing, design ou produção de conteúdo.",
    "Quer aprender negociação e relacionamento com empresas.",
    "Gosta de planilhas, planejamento e acompanhamento de resultados.",
    "Acredita que uma boa equipe também se constrói fora da oficina.",
  ],
  gallery: [
    areaPhotos.administracao[1],
    photo("ExpoPato 2025", "IMG_20251115_165427.jpg", "Equipe apresentando o protótipo ao público na ExpoPato"),
    photo("FOTOS SHELL", "CPN-4843-MBD5-1790.jpg", "Equipe Pato a Jato reunida durante a Shell Eco-marathon"),
    photo("ExpoPato 2025", "IMG_20251115_165617.jpg", "Estande organizado pela equipe para receber a comunidade"),
    photo("ExpoPato 2025", "IMG_20251115_170740.jpg", "Relacionamento com o público durante a ExpoPato"),
  ],
  next: { name: "Powertrain", slug: "powertrain" },
} satisfies CellGuide;

export default function AdministrationPage() {
  return <StaticCellPage guide={guide} />;
}
