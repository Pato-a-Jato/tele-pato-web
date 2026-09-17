import type { Metadata } from "next";
import StaticCellPage, { type CellGuide } from "@/components/cells/StaticCellPage";
import { areaPhotos, type Photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Estrutura — Pato a Jato",
  description: "Conheça o trabalho da célula de Estrutura com modelagem 3D, simulação, aerodinâmica, compósitos, freios e segurança.",
};

function photo(file: string, alt: string): Photo {
  return { src: "/" + ["ESTRUTURA", file].map(encodeURIComponent).join("/"), alt };
}

const guide = {
  slug: "estrutura",
  index: "02",
  name: "Estrutura",
  eyebrow: "Forma · Materiais · Segurança",
  headline: "Damos forma ao carro e protegemos quem está dentro dele.",
  summary: "A célula projeta e fabrica carenagens, componentes estruturais e sistemas mecânicos com foco em baixo peso, aerodinâmica, segurança e eficiência.",
  hero: areaPhotos.estrutura[0],
  heroPosition: "center 46%",
  facts: [
    { value: "CAD + oficina", label: "do modelo à peça real" },
    { value: "Compósitos", label: "leveza com resistência" },
    { value: "Segurança", label: "requisito de todo projeto" },
  ],
  overviewTitle: "A forma eficiente do protótipo.",
  overview: [
    "Estrutura é responsável por tudo que sustenta, envolve e orienta o protótipo. A célula integra carenagem, chassi, ergonomia, freios, direção e interfaces de montagem em um conjunto leve e seguro.",
    "Antes de fabricar, modelamos em 3D, dimensionamos e simulamos. A geometria precisa atender ao regulamento, acomodar o piloto e os outros sistemas e ainda reduzir a resistência ao ar.",
    "Na fabricação, o projeto sai da tela e passa por moldes, laminação de compósitos, acabamento, montagem e validação. Pequenos detalhes de forma e massa podem representar muitos metros a mais por litro.",
  ],
  systemFlow: ["Requisitos", "Modelagem 3D", "Simulação", "Fabricação", "Validação"],
  areas: [
    {
      icon: "cube",
      title: "Modelagem 3D e integração",
      description: "Construímos o protótipo digital para organizar volumes, interfaces, fixações e o espaço necessário para piloto e sistemas.",
      tasks: ["Interpretar o regulamento", "Modelar peças e conjuntos", "Verificar interferências", "Preparar desenhos técnicos"],
      tools: ["CAD 3D", "Desenho técnico", "Montagens"],
    },
    {
      icon: "structure",
      title: "Análise estrutural",
      description: "Dimensionamos componentes para resistir aos esforços previstos usando a menor quantidade de material compatível com a segurança.",
      tasks: ["Identificar carregamentos", "Definir condições de contorno", "Executar simulações", "Revisar espessuras e geometrias"],
      tools: ["CAE", "Elementos finitos", "Resistência dos materiais"],
    },
    {
      icon: "wind",
      title: "Aerodinâmica",
      description: "Desenvolvemos a forma externa para reduzir arrasto, controlar o escoamento e favorecer a eficiência energética.",
      tasks: ["Criar geometrias", "Preparar modelos de escoamento", "Comparar resultados", "Refinar superfícies"],
      tools: ["CFD", "CAD de superfícies", "Visualização"],
    },
    {
      icon: "layers",
      title: "Materiais e compósitos",
      description: "Selecionamos materiais e processos de fabricação que equilibram massa, resistência, custo e disponibilidade.",
      tasks: ["Escolher fibras e matrizes", "Projetar moldes", "Definir laminação", "Controlar acabamento e qualidade"],
      tools: ["Fibra de carbono", "Moldes", "Laminação", "Metrologia"],
    },
    {
      icon: "brake",
      title: "Freios e direção",
      description: "Projetamos os sistemas que permitem controlar e parar o protótipo com precisão, repetibilidade e segurança.",
      tasks: ["Dimensionar componentes", "Projetar suportes", "Montar e alinhar sistemas", "Testar acionamento e resposta"],
      tools: ["Mecânica", "Elementos de máquinas", "Usinagem"],
    },
    {
      icon: "seat",
      title: "Ergonomia e segurança",
      description: "Garantimos que o piloto ocupe o carro de forma adequada e consiga operar e abandonar o protótipo conforme o regulamento.",
      tasks: ["Definir posição do piloto", "Validar campo de visão", "Checar acessos e evacuação", "Documentar requisitos de segurança"],
      tools: ["Ergonomia", "Regulamento", "Mockups", "Checklists"],
    },
  ],
  workflow: [
    { title: "Conceber", text: "Transformamos regulamento, necessidades do piloto e interfaces em requisitos de projeto.", output: "Conceito definido" },
    { title: "Modelar e simular", text: "Criamos geometrias e avaliamos estrutura e escoamento antes de usar material.", output: "Projeto verificado" },
    { title: "Fabricar", text: "Produzimos moldes, laminamos compósitos, usinamos e finalizamos componentes.", output: "Peças prontas" },
    { title: "Montar e validar", text: "Integramos os sistemas, medimos, inspecionamos e testamos o conjunto no protótipo.", output: "Estrutura aprovada" },
  ],
  learning: [
    "Modelar peças, superfícies e conjuntos em CAD 3D.",
    "Aplicar simulação estrutural e aerodinâmica.",
    "Selecionar materiais para requisitos reais.",
    "Fabricar moldes e peças em materiais compósitos.",
    "Projetar considerando ergonomia, regulamento e segurança.",
  ],
  profile: [
    "Você gosta de transformar ideias em objetos físicos.",
    "Tem interesse por desenho, modelagem ou simulação.",
    "Gosta de medir, fabricar e melhorar acabamentos.",
    "É atento a detalhes, tolerâncias e segurança.",
    "Quer entender como forma, massa e resistência afetam o carro.",
  ],
  gallery: [
    areaPhotos.estrutura[1],
    photo("WhatsApp Image 2025-05-27 at 17.55.40 (2).jpeg", "Processo de fabricação de componentes estruturais"),
    photo("WhatsApp Image 2025-05-27 at 17.55.42 (2).jpeg", "Trabalho prático da célula de Estrutura na oficina"),
    photo("IMG_6003.jpg", "Fabricação do monocoque em materiais compósitos"),
    photo("WhatsApp Image 2025-05-27 at 17.55.41.jpeg", "Montagem e acabamento da estrutura do veículo"),
  ],
  next: { name: "Eletrônica", slug: "eletronica" },
} satisfies CellGuide;

export default function StructurePage() {
  return <StaticCellPage guide={guide} />;
}
